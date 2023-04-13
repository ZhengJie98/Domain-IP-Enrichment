console.log('rodoGuard v2.21 ux');
(function () {
    const getCookie = function (name) {
        const result = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return result ? result.pop() : '';
    }

    const beforeScriptExecuteListener = (event, node) => {
        if (node.type === 'text/plain') {
            console.log('beforescriptexecute');
            event.preventDefault();
        }
        node.removeEventListener('beforescriptexecute', beforeScriptExecuteListener);
    };

    // update old rodoAccepted cookies - start
    if (document.cookie.includes('OptanonConsent')) {
        try {
            const onetrustActiveGroupsArray = [];
            let showAds = false;
            let performanceCookies = false;
            let functionalCookies = false;
            let rodoAccepted = -1;

            const optanonConsentCookie = (new URLSearchParams(getCookie('OptanonConsent'))).getAll('groups');
            if (optanonConsentCookie.length > 0) {
                optanonConsentCookie[0].split(',').forEach(el => {
                    if (el.split(':')[1] == 1) {
                        onetrustActiveGroupsArray.push(el.split(':')[0]);
                    }
                })
            }

            if (onetrustActiveGroupsArray.includes('C0004')) { // minimum zgód potrzebna do wysłania requesta do ad serwera
                showAds = true;
            }
            if (onetrustActiveGroupsArray.includes('C0003')) { // funkcjonalne pliki cookies
                functionalCookies = true;
            }
            if (onetrustActiveGroupsArray.includes('C0002')) { // pliki cookies wydajnościowe i analityczne
                performanceCookies = true;
            }

            if (showAds && functionalCookies && performanceCookies) {
                rodoAccepted = 1;
            }

            const obj = {
                'showAds': showAds,
                'functionalCookies': functionalCookies,
                'performanceCookies': performanceCookies
            }

            const rootDomain = location.hostname.split('.').reverse().splice(0, 2).reverse().join('.').toString();

            const t = 'Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = `rodoAccepted=; Path=/; Expires=${t};`; // delete old cookie rodoAccepted (prevent two cookies with same name)
            document.cookie = `rodoConfigData=; Path=/; Expires=${t};`; // delete old cookie rodoConfigData (prevent two cookies with same name)

            const now = new Date();
            now.setMonth(now.getMonth() + 12);
            document.cookie = 'rodoAccepted=' + rodoAccepted + `;domain=${rootDomain};path=/; expires=` + now.toUTCString();

            const config = {
                showAds: obj.showAds,
                functionalCookies: obj.functionalCookies,
                performanceCookies: obj.performanceCookies
            };
            document.cookie = 'rodoConfigData=' + JSON.stringify(config) + `;domain=${rootDomain};path=/; expires=` + now.toUTCString();
        } catch (e) {
            console.log(e);
        }
    }


    // update old rodoAccepted cookies - end

    if (!document.cookie.includes('rodoAccepted=') || document.cookie.includes('rodoAccepted=-1')) { // jeśli user rodoAccepted=1 rodoGuard w ogóle nie jest uruchamiany
        const allowedDomains = [
            '.gazeta.pl',
            '.agora.pl',
            '.tokfm.pl',
            '.zloteprzeboje.pl',
            '.radiopogoda.pl',
            '.tuba.pl',
            '.radioagora.pl',
            '.cookielaw.org',
            '.im-g.pl',
            '.gemius.pl',
            '.onetrust.com',
            '/hp_redirector.htm',
            `//${location.hostname}`,
            `.${location.hostname}`,
            'wyborcza',
            'wyborcza.pl',
            ';base64,',
            'avanti24.pl',
            '.sport.pl',
            'moto.pl',
            'liquid.agora.pl', // Big Data
            'api.makieter-external.adview.pl', // dla wyniki.sport.pl
            'chartbeat', // Wyborcza
            'ukrayina.pl',
            'cdn.onnetwork.tv/cnt/',
            'video.onnetwork.tv/frame'
        ];

        const allowedDomainsIfRodoNotAccepted = [...allowedDomains, '.onnetwork.tv'];
        // czy embedy powinny się wczytywać jeśli user nie wyrazi zgody na ciasteczka?

        if (document.cookie.includes('rodoAccepted=-1') && document.cookie.includes('OptanonAlertBoxClosed=')) { // jeśli user świadomie nie wyraził zgody na ciasteczka dalej powinien mieć możliwość oglądania video
            allowedDomains.push('.onnetwork.tv');
        }

        let forbiddenUrls = [
            //'/bluewhale', // póki co nie blokujemy Big Data
            '/static/adview/front/master/external-resources/prebid/' // prebid może wstrzykiwać inne pliki, np. criteo
        ];

        const allowedInlineScripts = [ // allow inline script if contains word from array below
            'gazeta_pl.',
            'wyborcza_pl.',
            '_sf_async_config', // Wyborcza
            'gemius',
            'profileCookie', // landing page, for Gemius
            'googletag.',
            'dfpParams',
            'document.write',
            '__tcfapi',
            'ppvid',
            'preroll',
            'userSettings__', // https://forum.gazeta.pl
            'activeSubscription', // Wyborcza
            'domain_marketing_params', // Wyborcza
            //'chartbeat',
            'domain_marketing_params',
            'dataLayer',
            'customDataLayer', // Wyborcza
            'sumOfSlides', // for HP
            '__NUXT__', // dla wyniki.sport.pl
            'LUX', // dla wyniki.sport.pl
            '.ren-banners', // dla https://zielona.gazeta.pl/zielona_gazeta/0,0.html
            'mockEnvelope'
        ];

        const adsDomains = [
            'adservice.google.pl',
            'googlesyndication.com',
            'googletagservices.com',
            '.doubleclick.net',
            'ad-delivery.net',
            'adform.net',
            'prebid',
            'criteo',
            '/static/adview/front/master/external-resources/prebid/',
            'imasdk.googleapis.com',
        ];

        let blockInlineScripts = true;

        const unlockAds = (type) => {
            function unlock() {
                forbiddenUrls = forbiddenUrls.filter(e => e !== '/static/adview/front/master/external-resources/prebid/');
                adsDomains.forEach(domain => {
                    allowedDomains.push(domain);
                });

                blockInlineScripts = false;
            }
            if (type === 'click') {
                unlock();
            } else {
                try {
                    if (document.cookie.includes('rodoConfigData=')) {
                        const rodoConfigData = JSON.parse(getCookie('rodoConfigData'));
                        if (rodoConfigData.showAds) { // minimalne zgody dla reklam
                            unlock()
                        }
                    }
                } catch (e) {

                }
            }
        }

        unlockAds();

        if (document.cookie.includes('rodoAccepted=-1')) {
            allowedInlineScripts.push('.onnetwork.tv');
        }

        const cookiesNotToDelete = ['rodoAccepted', 'rodoConfigData', 'OptanonConsent', 'OptanonAlertBoxClosed', 'OTAdditionalConsentString', 'eupubconsent-v2', 'bwPageviewId', 'bwGuidv2', 'bwVisitId', 'PHPSESSID'];

        const isWyborczaServices = () => {
            const services = ['wyborcza', 'wysokieobcasy', 'czasswiecia', 'czasbrodnicy', 'czaschelmna'];
            return !!services.find(service => location.hostname.includes(service));
        };


        if (!window.AG) {
            window.AG = {};
        }

        window.AG.rodoAcceptedClicked = false;

        (function () {
            const fetch = window.fetch;
            window.fetch = function () {
                const url = arguments[0];
                if (document.cookie.includes('rodoAccepted=1') || window.AG.rodoAccepted === 1 || /^\/{1}[^\/]+.*/gm.exec(url)) {
                    // do nothing
                } else {
                    try {
                        const checkURLs = allowedDomains.find(el => url.split('?')[0].includes(el));
                        if (!checkURLs) {
                            arguments[0] = '';
                            console.log(`%c rodoGuard blocked fetch ${url}`, 'color: red');
                        }
                    } catch(e) {
                        console.log(`fetch error: ${e}`);
                    }
                }
                return Promise.resolve(fetch.apply(window, arguments))
            }
        })();

        (function () {
            const proxied = window.XMLHttpRequest.prototype.open;
            window.XMLHttpRequest.prototype.open = function () {
                const url = arguments[1];
                if (document.cookie.includes('rodoAccepted=1') || window.AG.rodoAccepted === 1 || /^\/{1}[^\/]+.*/gm.exec(url)) {
                    // do nothing
                } else {
                    const checkURLs = allowedDomains.find(el => url.split('?')[0].includes(el));
                    if (arguments.length >= 2 && (arguments[0].toUpperCase() === 'POST' || arguments[0].toUpperCase() === 'GET') && !checkURLs) {
                        arguments[1] = '';
                        console.log(`%c rodoGuard blocked XHR ${url}`, 'color: red');
                    }
                }
                return proxied.apply(this, [].slice.call(arguments));
            };
        })();

        (function () { // blokuje obrazki tworzone za pomocą new Image, wczytywane z domen innych niż z allowedDomains
            let NativeImage;

            const createImage = function () {
                const image = new NativeImage();
                Object.defineProperty(image, 'src', {
                    set: function (srcAttr) {
                        const checkURLs = allowedDomains.find(el => srcAttr.split('?')[0].includes(el));
                        if (checkURLs) {
                            image.setAttribute('src', srcAttr);
                        } else {
                            if (document.cookie.includes('rodoAccepted=1') || window.AG.rodoAccepted === 1) {
                                image.setAttribute('src', srcAttr);
                            } else {
                                image.setAttribute('src', '');
                                console.log(`%c rodoGuard blocked new Image ${srcAttr}`, 'color: red');
                            }
                        }
                    },
                    get: function () {
                        return image.getAttribute('src');
                    }
                });

                return image;
            };

            if (typeof window.Image !== 'object') {
                NativeImage = window.Image;
                window.Image = function () {
                    return createImage.call(this, arguments);
                };
            }
        }());

        const addOptanonCategoryClassCommon = (node) => {
            if (document.cookie.includes('rodoAccepted=1') || window.AG.rodoAccepted === 1 || window.AG.rodoAcceptedClicked) {
                // do nothing
            } else {
                let checkHasOptanonClass;
                try {
                    checkHasOptanonClass = node.className && node.className.includes('optanon-category');
                } catch (error) {
                    checkHasOptanonClass = false;
                }
                if (node && node.tagName && !checkHasOptanonClass) {
                    const tagName = node.tagName.toUpperCase();
                    if (tagName === 'SCRIPT' || tagName === 'IFRAME' || tagName === 'IMG' || tagName === 'EMBED') {
                        const src = node.src || '';
                        if (src) {
                            const checkURLs = !allowedDomains.find(el => src.includes(el)) || forbiddenUrls.find(el => src.includes(el));
                            if (checkURLs) {
                                node.type = 'text/plain';
                                if (adsDomains.find(el => src.includes(el))) {
                                    node.classList.add('optanon-category-C0004');
                                } else {
                                    node.classList.add('optanon-category-C0002-C0003');
                                }
                                if (tagName !== 'SCRIPT') {
                                    node.removeAttribute("src");
                                    node.setAttribute("data-src", src);
                                }
                                console.log(`%c rodoGuard blocked dynamic ${tagName} ${src}`, 'color: red');
                            }
                        }
                    }
                }
            }
            return node;
        };

        Node.prototype.originalinsertBefore = Node.prototype.insertBefore;
        Node.prototype.insertBefore = function (node, element) {
            const nodeElement = addOptanonCategoryClassCommon(node);
            return this.originalinsertBefore(nodeElement, element);
        }

        Node.prototype.originalappendChild = Node.prototype.appendChild;
        Node.prototype.appendChild = function () {
            const nodeElement = addOptanonCategoryClassCommon(arguments[0]);
            arguments[0] = nodeElement;
            return Node.prototype.originalappendChild.apply(this, arguments);
        };

        const _mutation = (function () {
            function isNode(object) {
                // DOM, Level2
                if (typeof Node === 'function') {
                    return object instanceof Node;
                }
                // Older browsers, check if it looks like a Node instance)
                return object &&
                    typeof object === "object" &&
                    object.nodeName &&
                    object.nodeType >= 1 &&
                    object.nodeType <= 12;
            }
            return function mutation(nodes) {
                if (nodes.length === 1) {
                    return isNode(nodes[0]) ? nodes[0] : document.createTextNode(nodes[0] + '');
                }

                const fragment = document.createDocumentFragment();
                for (let i = 0; i < nodes.length; i++) {
                    fragment.appendChild(isNode(nodes[i]) ? nodes[i] : document.createTextNode(nodes[i] + ''));
                }
                return fragment;
            };
        }());

        Document.prototype.append = Element.prototype.append = function append() {
            this.appendChild(_mutation(arguments));
        };

        const addOptanonCategoryClass = (node) => {
            const src = node.src || '';
            const tagName = node.tagName;
            let checkHasOptanonClass;
            try {
                checkHasOptanonClass = node.className && node.className.includes('optanon-category');
            } catch (error) {
                checkHasOptanonClass = false;
            }
            const checkURLs = !allowedDomains.find(el => src.includes(el)) || forbiddenUrls.find(el => src.includes(el));

            if (src && (tagName === 'SCRIPT' || tagName === 'IFRAME' || tagName === 'IMG' || tagName === 'EMBED') && !checkHasOptanonClass && checkURLs) {
                node.type = 'text/plain';
                if (adsDomains.find(el => src.includes(el))) {
                    node.classList.add('optanon-category-C0004');
                } else {
                    node.classList.add('optanon-category-C0002-C0003');
                }
                if (tagName !== 'SCRIPT') {
                    node.removeAttribute("src");
                    node.setAttribute("data-src", src);
                }
                console.log(`%c rodoGuard blocked ${tagName} ${src}`, 'color: red');
                // beforescriptexecute only for Firefox
                node.addEventListener('beforescriptexecute', (event) => beforeScriptExecuteListener(event, node));
            } else if (!src && blockInlineScripts && !isWyborczaServices() && (node.innerText && node.innerText.trim() != '') && tagName === 'SCRIPT' && node.type != 'application/ld+json' && node.type != 'application/json' && !allowedInlineScripts.find(el => node.innerText.includes(el))) {
                node.type = 'text/plain';
                if (node.innerText.includes('putBan')) {
                    node.classList.add('optanon-category-C0004');
                } else {
                    node.classList.add('optanon-category-C0002-C0003');
                }
                console.log(`%c rodoGuard blocked inline ${tagName}:`, 'color: red');
                console.log(node.innerText.slice(0, 200) + '...');
                node.addEventListener('beforescriptexecute', (event) => beforeScriptExecuteListener(event, node));
            }
        };

        const rodoGuardObserver = new MutationObserver(mutations => {
            mutations.forEach(({ addedNodes }) => {
                addedNodes.forEach(node => {
                    addOptanonCategoryClass(node);
                })
            })
        });

        rodoGuardObserver.observe(document, {
            childList: true,
            subtree: true
        });

        const deleteCookies = setInterval(() => {

            if (!isWyborczaServices()) {
                console.log('blocking cookies is working');
                document.cookie.split(';').forEach(cookie => {
                    const cookieName = cookie.split('=')[0].trim();
                    if (!cookiesNotToDelete.find(cookie_ => cookie_ == cookieName)) {
                        const t = 'Thu, 01 Jan 1970 00:00:01 GMT';
                        const rootDomain = location.hostname.split('.').reverse().splice(0, 2).reverse().join('.').toString();
                        document.cookie = `${cookieName}=; Path=/; Expires=${t};`;
                        document.cookie = `${cookieName}=; Path=/; Domain=${location.hostname.toString()}; Expires=${t};`;
                        document.cookie = `${cookieName}=; Path=/; Domain=.${location.hostname.toString()}; Expires=${t};`;
                        document.cookie = `${cookieName}=; Path=/${location.pathname.split('/')[1].toString()}; Expires=${t};`;
                        document.cookie = `${cookieName}=; Path=/; Domain=${rootDomain}; Expires=${t};`;
                        document.cookie = `${cookieName}=; Path=/; Domain=.${rootDomain}; Expires=${t};`;
                    }
                });
            }

            if (!document.cookie.includes('OptanonAlertBoxClosed=')) {
                document.querySelectorAll('iframe[src]').forEach(el => {
                    const src = el.src;
                    const checkURLs = !allowedDomains.find(el => src.includes(el)) || forbiddenUrls.find(el => src.includes(el));
                    if (checkURLs) {
                        el.removeAttribute("src");
                        el.setAttribute("data-src", src);
                        el.classList.add('optanon-category-C0002-C0003-C0004');
                        console.log(`%c rodoGuard blocked iframe ${src}`, 'color: red');
                    }
                });
            }
        }, 500);

        const allowIfRodoNotAccepted = () => {
            if (document.cookie.includes('rodoAccepted=-1') && document.cookie.includes('OptanonAlertBoxClosed=')) {
                clearInterval(deleteCookies);
                rodoGuardObserver.disconnect();
                console.log("rodoGuardObserver.disconnect()");
                document.querySelectorAll('script[type="text/plain"][src]').forEach(node => {
                    const checkURLs = allowedDomainsIfRodoNotAccepted.find(el => node.src.includes(el));
                    const forbiddenUrls_ = node.src.includes('/static/adview/front/master/external-resources/prebid/');
                    if (checkURLs && !forbiddenUrls_) {
                        const script = document.createElement("script");
                        script.src = node.src;
                        node.after(script);
                        console.log(`%c rodoGuard unlock ${node.src}`, 'color: green');
                        node.remove();
                    }
                })
            }
        }

        const domContentLoadedFunc = () => {
            setTimeout(() => {
                window.document.dispatchEvent(new Event("DOMContentLoadedAfter", {
                    bubbles: true,
                    cancelable: true
                }));
                console.log('DOMContentLoadedAfter event');
            }, 1500);
        }

        const f = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.f = f;
            if (type === 'DOMContentLoaded' && window.AG.rodoAcceptedClicked) {
                type = 'DOMContentLoadedAfter';
            }
            this.f(type, fn, capture);
        }

        const clickOtButtonEvent = (counter) => {
            const checkSelectorTimeout = setTimeout(() => {
                const buttonSelector = document.querySelectorAll('#onetrust-accept-btn-handler, #accept-recommended-btn-handler, .save-preference-btn-handler');
                counter++;
                if (buttonSelector.length >= 3 || counter == 20) {
                    clearTimeout(checkSelectorTimeout);
                    buttonSelector.forEach(el => {
                        const elText = el.innerText;
                        const id = 'id' + (Math.random() + 1).toString(36).substring(7) + Date.now();
                        el.setAttribute('style', 'padding: 0; border: 0');
                        el.setAttribute('tabIndex', '-1');
                        el.setAttribute('onfocus', "this.querySelector('span').focus()");
                        el.innerHTML = `<span tabindex="0" style="display: block; font-weight: 600; padding: 12px 36px; text-align: center" id="${id}">${elText}</span>`;
                        const spanElement = document.getElementById(id);
                        spanElement.addEventListener("click", () => {
                            console.log('USER CLICKED OT BUTTON');
                            window.AG.rodoAcceptedClicked = true;
                            const purposesArr = [];
                            document.querySelectorAll('input[data-optanongroupid]').forEach(el => {
                                const optanongroupid = el.getAttribute('data-optanongroupid');
                                const checked = el.getAttribute('data-optanongroupid');
                                if (checked) {
                                    purposesArr.push(optanongroupid);
                                }
                            });
                            if (purposesArr.includes('C0004') && purposesArr.includes('IABV2_1')) { // minimalne zgody dla reklam
                                unlockAds('click');
                            }
                            rodoGuardObserver.disconnect();
                            console.log("rodoGuardObserver.disconnect()");
                            clearInterval(deleteCookies);
                            setTimeout(() => {
                                domContentLoadedFunc();
                                allowIfRodoNotAccepted();
                            }, 1000);
                        });
                        spanElement.addEventListener('keydown', (e) => {
                            if (e.key == 'Enter') {
                                e.target.click();
                            }
                        });
                    });
                } else {
                    clickOtButtonEvent(counter);
                }
            }, 500);
        }


        window.addEventListener('load', () => {
            clickOtButtonEvent(1);
            setTimeout(() => {
                allowIfRodoNotAccepted();
            }, 100);
        });
    } else {
        // rodoAccepted=1

        if (
            (location.hostname != 'www.gazeta.pl'
            && location.hostname != 'm.gazeta.pl'
            && location.hostname != 'pomocnik-weekend.gazeta.pl')
            || location.href.includes('lockOnnPlayer')
        ) {

            const lockOnnPlayer = (node) => {
                if (node && node.tagName) {
                    const tagName = node.tagName.toUpperCase();
                    const src = node.src || '';
                    if (tagName === 'SCRIPT' && src.includes('.onnetwork.tv')) {
                        node.type = 'text/plain';
                        node.classList.add('onn-player-locked');
                        // beforescriptexecute only for Firefox
                        node.addEventListener('beforescriptexecute', (event) => beforeScriptExecuteListener(event, node));
                        console.log(`%c onnPlayer locked ${node.src}`, 'color: blue');
                    }
                }
                return node;
            }

            const onnPlayerObserver = new MutationObserver(mutations => {
                mutations.forEach(({ addedNodes }) => {
                    addedNodes.forEach(node => {
                        lockOnnPlayer(node);
                    })
                })
            });

            Node.prototype.originalinsertBefore = Node.prototype.insertBefore;
            Node.prototype.insertBefore = function (node, element) {
                const nodeElement = lockOnnPlayer(node);
                return this.originalinsertBefore(nodeElement, element);
            }

            Node.prototype.originalappendChild = Node.prototype.appendChild;
            Node.prototype.appendChild = function () {
                const nodeElement = lockOnnPlayer(arguments[0]);
                arguments[0] = nodeElement;
                return Node.prototype.originalappendChild.apply(this, arguments);
            };

            onnPlayerObserver.observe(document, {
                childList: true,
                subtree: true
            });

            const checkPrerollVideoIsReady = (counter) => {
                const isOrgPreroll = Boolean(window.dfpParams && window.dfpParams.video && window.dfpParams.video.orgPreroll);
                const isNoPreroll = Boolean(window.dfpParams && window.dfpParams.video && window.dfpParams.video.noPreroll);
                const isAdblockDetected = Boolean(window.adblockDetected);
                const isNoPrerollInAdUnitsConfiguration = Boolean(window.adUnitsConfiguration && window.dfpParams.video && !(window.dfpParams.video.preroll));
                const isNoAdUnitsConfiguration = Boolean(!window.adUnitsConfiguration);
                const isNoPrebid = Boolean(!window.pbjs || (window.pbjs && !window.pbjs.version));

                if (
                    (isOrgPreroll || isNoPreroll)
                    || isAdblockDetected
                    || isNoPrerollInAdUnitsConfiguration
                    || (counter === 5 && isNoAdUnitsConfiguration)
                    || (counter === 8 && isNoPrebid)
                    || counter === 20
                ) {
                    console.log(`%c Preroll video is ready, loop: ${counter}`, 'color: blue');
                    onnPlayerObserver.disconnect();
                    Node.prototype.insertBefore = Node.prototype.originalinsertBefore;
                    Node.prototype.appendChild = Node.prototype.originalappendChild;

                    document.querySelectorAll('script.onn-player-locked').forEach(node => {
                        const script = document.createElement("script");
                        script.src = node.src;
                        node.after(script);
                        console.log(`%c onnPlayer unlock ${node.src}`, 'color: green');
                        node.remove();
                    });
                } else {
                    setTimeout(() => {
                        counter++;
                        checkPrerollVideoIsReady(counter);
                    }, 500);
                }
            }
            checkPrerollVideoIsReady(1);
        }

        window.addEventListener('DOMContentLoaded', () => {
            if (typeof sendDataOceanEvent === 'function') {
                const consentDate = getCookie('OptanonAlertBoxClosed');
                if (consentDate) {
                    sendDataOceanEvent(451, {
                        "type": "consent_date",
                        "value": consentDate
                    });
                }
            }
        });
    }
})();