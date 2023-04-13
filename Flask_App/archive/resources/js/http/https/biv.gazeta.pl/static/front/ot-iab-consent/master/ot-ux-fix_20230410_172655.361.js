window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

window.DataOcean = window.DataOcean || {};
window.DataOcean.userEventCache = window.DataOcean.userEventCache || [];
var sendDataOceanEvent = function (eventId, attributes) {
    var dataOceanEvent = {
        e: eventId,
        a: attributes
    };
    window.DataOcean.userEventCache.push(dataOceanEvent);
};

(function () {
    const adblockDetect = () => {
        return new Promise(resolve => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 0) {
                        // is adblock
                        resolve(true);
                    } else {
                        // no adblock
                        resolve(false);
                    }
                }
            };
            xhttp.open("GET", "https://static.im-g.pl/static/inp/agora-tech/public/detect/prebid.js", true);
            xhttp.send();
        });
    }

    const sendDataToBD = () => {
        const sendBigDataEvent = (eventid, attributes) => {
            const data = [
                {
                    "e": eventid,
                    "a": attributes,
                    "c": { "ld": window.location.host, "vu": window.location.href },
                    "et": 7,
                    "t": [Date.now()]
                }
            ];
            const xhttp = new XMLHttpRequest();
            const url = 'https://squid.gazeta.pl/bdtUpdDcEvGet?events=' + window.btoa(JSON.stringify(data));
            xhttp.withCredentials = true;
            xhttp.open('GET', url, true);
            xhttp.send();
        };

        const eventId = 810;
        const attributes = {
            "adblock": "true",
            "userAgent": window.navigator.userAgent
        };
        sendBigDataEvent(eventId, attributes);
    }

    adblockDetect().then((result) => {
        if (result) {
            window.adblockDetected = true;
            sendDataToBD();
        }
    });
})();


(function () {
    if (location.protocol === 'http:') {
        const cookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
        if (cookieDesc && cookieDesc.configurable) {
            Object.defineProperty(document, 'cookie', {
                get: function () {
                    return cookieDesc.get.call(document);
                },
                set: function (val) {
                    const newCookieValue = val.replace('Samesite=None; Secure', 'Samesite=Lax');
                    cookieDesc.set.call(document, newCookieValue);
                }
            });
        }
    }
})();

window.oneTrustCookie = {
    init() {
        this.appendCss();
        this.awaitingReconsent = document.cookie.includes('AwaitingReconsent=true');
        if (!this.awaitingReconsent) {
            this.reconsent();
            this.fixOtBug();
        }
        if (!this.buttonsInserted) {
            this.moveButtons();
            this.buttonsInserted = true;
        }
        this.checkFirstTime();
        this.addBigDataEvents();
        this.addLinkToFooter();
    },
    callbackFunctions: [],
    buttonsInserted: false,
    rodo(v, obj) {
        const value = v ? 1 : -1;
        this.setRodo(value, obj);
    },
    toogleBodyClass() {
        setTimeout(() => {
            const onetrustBannerSdk = document.getElementById('onetrust-banner-sdk');
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (onetrustBannerSdk && onetrustBannerSdk.offsetHeight > 0) {
                if (isMobile) {
                    document.body.classList.add('oneTrustMobile', 'has-disabled-scroll');
                } else {
                    document.body.classList.add('oneTrustDesktop', 'has-disabled-scroll');
                }
            } else {
                if (isMobile) {
                     document.body.classList.remove('oneTrustMobile', 'has-disabled-scroll');
                } else {
                     document.body.classList.remove('oneTrustDesktop', 'has-disabled-scroll');
                }
            }
        }, 500);
    },
    appendCss() {
        if (location.hostname == 'www.domiporta.pl') {
            return;
        }
        const otCustomCss = document.getElementById('ot-custom-css');
        if (!otCustomCss) {
            let css = '<style id="ot-custom-css">';
            //css += 'body.oneTrustBlur * {filter: blur(8px);}';
            if (!navigator.cookieEnabled) {
                css += '#onetrust-consent-sdk {display:none;}';
            }

            css += '@keyframes clsFix {0%   {opacity: 0;} 100% {opacity: 1;}}';
            css += `
            @keyframes setMaxHeight {
                from {
                  max-height: unset;
                }
                to {
                  max-height: 60vh;
                }
              }
            `;

            css += '#onetrust-consent-sdk {animation-name: clsFix; animation-duration: 1s; position: absolute; z-index: 99999999;}';

            css += '#onetrust-consent-sdk, #onetrust-consent-sdk * {filter: none;}';
            css += '#ot-pc-lst.ot-hide ~ .ot-pc-footer button {opacity: 0.01;height: 1px !important;margin: 0 !important;padding: 0 !important;overflow: hidden !important;}';
            css += '#ot-pc-lst.ot-hide ~ .ot-pc-footer {position: relative !important;}';
            css += '.ot-sdk-row.ot-cat-grp .save-preference-btn-handler {margin-right: 0 !important;}';
            css += '.ot-gv-acc .ot-acc-hdr {display: flex !important;}';
            css += '.ot-gv-acc .ot-acc-hdr .ot-vensec-title {width: 72% !important;}';
            css += '.ot-gv-acc .ot-acc-hdr .ot-sel-all-chkbox {width: 25.5% !important;}';
            css += '#onetrust-consent-sdk #onetrust-accept-btn-handler span, #onetrust-consent-sdk #onetrust-pc-btn-handler, #onetrust-pc-sdk #accept-recommended-btn-handler span, #onetrust-pc-sdk .save-preference-btn-handler span { text-transform: uppercase; }';
            css += '#onetrust-consent-sdk a:focus, #onetrust-consent-sdk a:active, #onetrust-consent-sdk #onetrust-pc-btn-handler, #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link, #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {outline: none;-moz-outline-style: initial;}';
            css += '#onetrust-policy-text a, #onetrust-button-group .cookie-setting-link {text-decoration: none !important;}';
            css += '#ot-sdk-btn-floating, amp-consent #post-consent-ui, .ot-pc-logo, .ot-pc-footer-logo {display:none !important;}';
            css += '#onetrust-banner-sdk .ot-b-addl-desc, #onetrust-banner-sdk #onetrust-policy-text, #onetrust-banner-sdk .ot-dpd-desc {line-height: 1.25;}';
            css += '#onetrust-banner-sdk .ot-dpd-title {padding-bottom: 0; font-size: 12px; font-weight: normal;}';
            /* bloki tekstowe na pierwszej warstwie */
            css += '#onetrust-banner-sdk #onetrust-policy-text, #onetrust-banner-sdk :not(.ot-dpd-desc)>.ot-b-addl-desc, #onetrust-banner-sdk .ot-dpd-container {margin: 0 20px 5px 20px;}';
            /* zaufani partnerzy i typy zgód inline */
            css += '#onetrust-banner-sdk .onetrust-vendors-list-handler, #onetrust-banner-sdk .ot-dpd-title, #onetrust-banner-sdk .ot-dpd-content, #onetrust-banner-sdk .ot-dpd-desc {display: inline; margin: 0;}';
            /* gorny odstep buttonow dowiedz sie wiecej i akceptuj */
            css += '#onetrust-banner-sdk #onetrust-button-group-parent {padding: 15px 15px 0 15px !important;}';
            css += `@media screen and (max-width: 768px) {#onetrust-banner-sdk #onetrust-button-group-parent {padding: 15px 15px 5px 15px !important;}}`;
            /* poprawa wyglądu baretki z krzyzykiem zamykajacym */
            css += '#onetrust-pc-sdk .ot-pc-header {height: 29px;}';
            /* ukrycie krzyzyka zamykajacego */
            css += '#onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {display: none}';
            /* scroll blocking */
            css += 'body.oneTrustMobile {position: fixed;max-width:100%;} body.oneTrustDesktop {height: calc(100vh + 0.5px);overflow: hidden;margin-right: -12px; }';

            /* prev button */
            css += `

            #onetrust-consent-sdk #onetrust-pc-sdk .ot-pc-header {
                border: 0;
                padding: 10px 0px 10px 10px;
            }

            #onetrust-consent-sdk #onetrust-pc-sdk .ot-pc-footer {
                border: 0;
            }

            #onetrust-consent-sdk #ot-pc-title {
                text-align: center;
            }

            #onetrust-consent-sdk #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {
                top: 14px;
                right: 14px;
            }

            #onetrust-consent-sdk #onetrust-banner-sdk .ot-close-icon,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-close-icon,
            #onetrust-consent-sdk #ot-sync-ntfy .ot-close-icon {
                background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzEwNjlERSIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");
            }

            #onetrust-consent-sdk #prev-pc-btn-handler {
                background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjY0NSIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDguNjQ1IDE0Ij4KICA8cGF0aCBpZD0icG93cm90IiBkPSJNMjAuNjQ1LDIwLjYsMTUuMywxNS4yNWw1LjM0My01LjM1NUwxOSw4LjI1bC03LDcsNyw3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyIC04LjI1KSIgZmlsbD0iIzEzNzFDMyIvPgo8L3N2Zz4K");
                color: #1371C3 !important;
                background-color: transparent !important;
                border-color: transparent !important;
                max-width: 100% !important;
                padding: 0 !important;
                border: 0 !important;
                background-repeat: no-repeat;
                position: absolute;
                top: 15px;
                left: 15px;
                width: auto;
                z-index: 10;
            }

            #onetrust-consent-sdk #prev-pc-btn-handler span {
                margin-top: -5px;
                padding-left: 15px;
                text-transform: uppercase;
                font-weight: 600;
                display: inline-block;
            }

            #onetrust-consent-sdk #prev-pc-btn-handler:focus {
                outline-width: 0 !important;
            }

            #onetrust-pc-sdk #ot-pc-content {
                bottom: 20px !important;
                top: 40px !important;
                text-align: right !important;
            }`;
            /* ux */

            css += '#onetrust-banner-sdk.otCenterRounded {max-width: 800px !important;}';
            css += `#onetrust-group-container p, #onetrust-group-container span, #onetrust-group-container h3, #onetrust-group-container a, #onetrust-group-container button, #ot-pc-content #ot-pc-desc, #ot-pc-content #ot-pc-desc > a {font: ${fontCalculateFrom('roboto', 'font', '400 14px/20px')} !important;}`;
            css += `#onetrust-group-container p, #onetrust-group-container span, #onetrust-group-container h3 {color: #666 !important;}`;
            css += `#onetrust-group-container a, #onetrust-group-container button {color: #1371C3 !important;}`;
            css += `#onetrust-consent-sdk #onetrust-banner-sdk *:focus, #onetrust-consent-sdk #onetrust-banner-sdk:focus {outline-width: 0 !important;}`;
            css += `#onetrust-banner-sdk #onetrust-policy {margin-top: 20px !important; max-height: 390px; overflow-y: auto; animation-name: setMaxHeight; animation-duration: 0.1s;}`;
            css += `@media screen and (max-width: 768px) { #onetrust-banner-sdk #onetrust-policy { overflow-y: auto; max-height: 60vh; }}`;
            css += `#onetrust-banner-sdk #onetrust-button-group {display: flex !important; flex-direction: row-reverse; justify-content: space-between; flex-wrap: wrap-reverse;}`;
            css += `#onetrust-banner-sdk .banner-actions-container {float: none !important; width: 100% !important; max-width: fit-content;}`;
            css += `#onetrust-consent-sdk #onetrust-accept-btn-handler, #onetrust-banner-sdk #onetrust-reject-all-handler {border-radius: 25px !important; overflow: hidden !important;}`;
            css += `#onetrust-consent-sdk #onetrust-accept-btn-handler, #onetrust-banner-sdk #onetrust-reject-all-handler, #onetrust-consent-sdk #onetrust-accept-btn-handler span, #onetrust-banner-sdk #onetrust-reject-all-handler span {font: ${fontCalculateFrom('roboto', 'font', '600 14px/20px')} !important;}`;
            css += `#onetrust-pc-btn-handler {font: ${fontCalculateFrom('roboto', 'font', '600 14px/20px')} !important; border: 2px solid #1371C3 !important; border-radius: 25px !important; padding: 0 20px !important; min-height: 40px !important; min-width: 262px !important;}`;
            css += `#onetrust-policy > * {padding-bottom: 15px !important;}`;
            css += `.banner-header {display: none}`;
            css += `@media screen and (max-width: 768px) { #onetrust-button-group-parent { box-shadow: 0 -5px 20px -5px rgb(115 115 115 / 75%) !important; } }`;
            css += `#onetrust-pc-sdk {max-width: 800px !important; width: 100% !important;}`;
            css += `#onetrust-pc-sdk button { max-width: 600px !important; }`;
            css += `#ot-pc-title, #ot-category-title, #ot-lst-title h3 {display: block !important; padding: 0 !important; text-align: center !important; color: #222 !important; font: ${fontCalculateFrom('roboto', 'font', '600 16px/19px')} !important;}`;
            css += `#ot-pc-desc a {text-decoration: none !important; color: #1371C3 !important;}`;
            css += `#ot-pc-desc a:focus {outline-width: 0 !important;}`;
            css += `.ot-cat-header {color: #222 !important;}`;
            css += `#accept-recommended-btn-handler {font: ${fontCalculateFrom('roboto', 'font', '600 14px/20px')} !important; border-radius: 25px !important; overflow: hidden !important;}`;
            css += `.save-preference-btn-handler {font: ${fontCalculateFrom('roboto', 'font', '600 14px/20px')} !important; border-radius: 25px !important; overflow: hidden !important; color: #1371C3 !important; border-color: #1371C3 !important; border: 2px solid #1371C3 !important; background-color: #FFFFFF !important;}`;
            css += `.back-btn-handler {display: none !important;}`;

            css += `
                #ot-pc-desc, #onetrust-policy {
                    scrollbar-arrow-color: #CCC;
                    scrollbar-darkshadow-color: #CCC;
                    scrollbar-face-color: #CCC;
                    scrollbar-shadow-color: #CCC;
                    margin-right: 3px !important;
                }
                #ot-pc-desc::-webkit-scrollbar, #onetrust-policy::-webkit-scrollbar {
                    width: 11px;
                }
                #ot-pc-desc::-webkit-scrollbar-thumb, #onetrust-policy::-webkit-scrollbar-thumb {
                    border: 3px solid #FFF;
                    border-radius: 2px;
                    background-clip: padding-box;
                    background: #CCC;
                }
                #ot-pc-desc::-webkit-scrollbar-track, #onetrust-policy::-webkit-scrollbar-track {
                    margin-right: 20px;
                }
            `;

            css += `@media screen and (max-width: 600px) {#ot-pc-desc {max-height: calc(100vh - 308px) !important; overflow-y: auto !important; border: 1px solid #CCC !important; padding: 10px !important; max-width: calc(100% - 20px) !important; border-radius: 5px !important;}}`;
            css += `@media screen and (min-width: 601px) {
                #ot-pc-desc {
                    max-height: 180px !important; 
                    overflow-y: auto !important; 
                    border: 1px solid #CCC !important; 
                    padding: 10px !important; 
                    max-width: calc(100% - 20px) !important; 
                    border-radius: 5px !important;
                }

                #onetrust-pc-sdk {
                    height: 520px !important;
                }
            }`;
            css += `@media only screen and (max-width: 500px) {
                #onetrust-banner-sdk .banner-actions-container, #onetrust-banner-sdk #onetrust-pc-btn-handler, #onetrust-accept-btn-handler {
                    width: 100% !important;
                    max-width: none !important;
                }
            }`;

            css += `@media screen and (max-width: 768px) { .save-preference-btn-handler.onetrust-close-btn-handler {max-width: calc(100vw - 20px) !important; margin: 0 auto 40px auto !important; display: block !important; position: relative !important; top: 20px !important;}`;
            css += `#onetrust-pc-sdk #accept-recommended-btn-handler {margin-right: 0 !important;}`;
            css += '</style>';
            document.head.insertAdjacentHTML('afterbegin', css);
        }
    },
    setRodo(val, obj) {
        if (!window.AG) {
            window.AG = {};
        }
        window.AG.rodoAccepted = val;
        const rootDomain = location.hostname.split('.').reverse().splice(0, 2).reverse().join('.').toString();

        const t = 'Thu, 01 Jan 1970 00:00:01 GMT';
        document.cookie = `rodoAccepted=; Path=/; Expires=${t};`; // delete old cookie rodoAccepted (prevent two cookies with same name)
        document.cookie = `rodoConfigData=; Path=/; Expires=${t};`; // delete old cookie rodoConfigData (prevent two cookies with same name)

        const now = new Date();
        now.setMonth(now.getMonth() + 12);
        document.cookie = 'rodoAccepted=' + val + `;domain=${rootDomain};path=/; expires=` + now.toUTCString();
        console.log('%c window.AG.rodoAccepted ' + val, 'color: green');

        const config = {
            showAds: obj.showAds,
            functionalCookies: obj.functionalCookies,
            performanceCookies: obj.performanceCookies
        };
        document.cookie = 'rodoConfigData=' + JSON.stringify(config) + `;domain=${rootDomain};path=/; expires=` + now.toUTCString();
    },
    addLinkToFooter() {
        let footerLinks = document.querySelector('.footer_lower_links');
        if (footerLinks && !document.querySelector('#footer_consent_link')) {
            footerLinks.insertAdjacentHTML('beforeend', '<li id="footer_consent_link" onclick="OneTrust.ToggleInfoDisplay()"><a href="javascript:void(0)">Zgody</a></li>');
        }
    },
    moveButtons() {
        let otBtnContainer = document.querySelector('.ot-btn-container');
        const otPcDesc = document.querySelector('.ot-sdk-row.ot-cat-grp');

        if (!otBtnContainer || !otPcDesc) return false;
        otBtnContainer = otBtnContainer.cloneNode(true);

        otPcDesc.insertAdjacentHTML('beforeend', otBtnContainer.outerHTML);

        const refuseAllMain = otPcDesc.querySelector('.ot-pc-refuse-all-handler');
        const refuseAllFooter = document.querySelector('.ot-pc-refuse-all-handler');
        if (refuseAllMain && refuseAllFooter) {
            refuseAllMain.addEventListener("click", () => {
                refuseAllFooter.click();
            });
        }

        const saveMain = otPcDesc.querySelector('.save-preference-btn-handler');
        const saveFooter = document.querySelector('.ot-pc-footer .save-preference-btn-handler');
        if (saveMain && saveFooter) {
            saveMain.addEventListener("click", () => {
                saveFooter.click();
            });
        }
        this.addPrevButton();
    },
    prevButtonEvent() {
        const otPcContent = document.getElementById('ot-pc-content');
        if (otPcContent && otPcContent.classList.contains('ot-hide')) {
            const otPcLst = document.getElementById('ot-pc-lst');
            if (otPcLst) {
                otPcContent.classList.remove('ot-hide');
                otPcLst.classList.add('ot-hide');
            } else {
                document.getElementById('close-pc-btn-handler').click();
            }
        } else {
            document.getElementById('close-pc-btn-handler').click();
        }
    },
    addPrevButton() {
        const closeButton = document.getElementById('close-pc-btn-handler');
        if (closeButton) {
            closeButton.insertAdjacentHTML('beforebegin', `<button id="prev-pc-btn-handler" class="ot-prev-icon" aria-label="Wstecz" tabindex="0"><span>wstecz</span></button>`);
            document.getElementById('prev-pc-btn-handler').addEventListener('click', () => {
                this.prevButtonEvent();
            });
        }
    },
    checkIsFirstTime() {
        let result = false;
        if (document.cookie.indexOf('OTAdditionalConsentString') == -1) {
            result = true;
        }
        return result;
    },
    getCookie(name) {
        const result = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return result ? result.pop() : '';
    },
    checkTCFApi() {
        return new Promise((resolve, reject) => {
            const runtcfapi = () => {
                __tcfapi('getTCData', 2, function (tcData, success) {
                    if (success) {
                        let result = false;
                        const purpose = tcData.purpose.consents;
                        const purposeValues = Object.values(purpose);
                        const purposeValuesChecked = purposeValues.every(function (el) {
                            return el === true;
                        });

                        const specialFeatureOptins = tcData.specialFeatureOptins;
                        const specialFeatureOptinsValues = Object.values(specialFeatureOptins);
                        const specialFeatureOptinsValuesChecked = specialFeatureOptinsValues.every(function (el) {
                            return el === true;
                        });

                        if (purposeValues.length == 10 && purposeValuesChecked && specialFeatureOptinsValues.length == 2 && specialFeatureOptinsValuesChecked) {
                            result = true;
                        }
                        resolve(result);
                    } else {
                        console.log('__tcfapi error');
                        reject();
                    }
                });
            };

            function tcfapiExists() {
                if (typeof __tcfapi === 'function') {
                    runtcfapi();
                } else {
                    setTimeout(function () {
                        tcfapiExists();
                    }, 1000);
                }
            }
            tcfapiExists();
        });
    },
    checkAllConsentsAreAccepted(callback) {
        const notify = (callback) => {
            const onetrustActiveGroupsArray = [];
            let showAds = false;
            let performanceCookies = false;
            let functionalCookies = false;
            let rodoAccepted = false;

            const optanonConsentCookie = (new URLSearchParams(this.getCookie('OptanonConsent'))).getAll('groups');
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
                rodoAccepted = true;
            }

            const obj = {
                'showAds': showAds,
                'functionalCookies': functionalCookies,
                'performanceCookies': performanceCookies
            }

            this.toogleBodyClass();
            callback(rodoAccepted, obj);
        }
        if (window) {
            if (window.OneTrust) {
                notify(callback);
            } else {
                oneTrustCookie.callbackFunctions.push(callback);
                window.OptanonWrapper = () => {
                    oneTrustCookie.callbackFunctions.forEach(el => {
                        notify(el);
                    });
                    oneTrustCookie.callbackFunctions = [];
                }
            }
        }
    },
   isElementVisible(el) {
        const rect     = el.getBoundingClientRect();
        const vWidth   = window.innerWidth || document.documentElement.clientWidth;
        const vHeight  = window.innerHeight || document.documentElement.clientHeight;
        const efp = (x, y) => document.elementFromPoint(x, y);

        // Return false if element it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
            return false;
        }

        // Return true if at least 2/3 of the element is visible
        return el.contains(efp(rect.right - (rect.width / 2), rect.bottom - (rect.height / 3)));
    },
    unCheckGoups() {
        const optanonGroups = document.querySelectorAll('#onetrust-consent-sdk input[data-optanongroupid]');
        optanonGroups.forEach(el => {
            const key = `group${el.getAttribute('data-optanongroupid')}`;
            if (el.checked) {
                el.click();
                console.log(`${key} set 0`);
            }
        });
    },
    checkFirstTime() {
        let result = true;
        let prefix = '';
        if (document.cookie.includes('OptanonAlertBoxClosed=')) {
            result = false;
        }

        if (this.awaitingReconsent) {
            prefix = 'reconsent_';
            this.unCheckGoups();
        }

        if (result || this.awaitingReconsent) {
            sendDataOceanEvent(451, {
                "type": `${prefix}first_user_entry`
            });

            const el = document.querySelector('#onetrust-banner-sdk');
            if (el) {
                setTimeout(() => {
                    if (getComputedStyle(el).display == 'block') {
                        const onetrustPcSdk = document.querySelector("#onetrust-pc-sdk");
                        if (onetrustPcSdk && onetrustPcSdk.lang) {
                            sendDataOceanEvent(451, {
                                type: `${prefix}first_user_entry_consentbox`,
                                cbLang: onetrustPcSdk.lang,
                                browserLang: navigator.language,
                            });
                        } else {
                            sendDataOceanEvent(451, {
                               type: `${prefix}first_user_entry_consentbox`,
                            });
                        }
                    }

                    const otAcceptButton = document.getElementById('onetrust-accept-btn-handler');
                    let type = 'accept_button_not_found';
                    if (otAcceptButton) {
                        if (this.isElementVisible(otAcceptButton)) {
                            type = 'accept_button_visible';
                        } else {
                            type = 'accept_button_unvisible';
                        }
                    }

                    type = `${prefix}${type}`;

                    sendDataOceanEvent(451, {
                        type
                    });
                }, 500);
            } else {
                // OT banner not showed
            }
        }
    },
    addBigDataEvents() {
        const awaitingReconsent = this.awaitingReconsent;
        document.body.addEventListener('click', (event) => {
            setTimeout(() => {
                const currentId = event.target.getAttribute('id') || '';
                const parentId = event.target.parentNode.getAttribute('id') || '';
                const currentClassName = event.target.getAttribute('class') || '';
                const parentClassName = event.target.parentNode.getAttribute('class') || '';
                const footer = event.target.getAttribute('onclick') || '';
                let eventName = '';
                if (currentId == 'accept-recommended-btn-handler' || parentId == 'accept-recommended-btn-handler') {
                    eventName = 'accept_2';
                } else if (currentClassName.includes('save-preference-btn-handler') || parentClassName.includes('save-preference-btn-handler')) {
                    eventName = 'confirm_my_choices';
                } else if (currentId == 'onetrust-accept-btn-handler' || parentId == 'onetrust-accept-btn-handler') {
                    eventName = 'accept_1';
                } else if (currentId == 'onetrust-pc-btn-handler' || parentId == 'onetrust-pc-btn-handler') {
                    eventName = 'advanced_settings';
                } else if (currentId == 'footer_consent_link' || parentId == 'footer_consent_link' || footer.includes('OneTrust.ToggleInfoDisplay()') ) {
                    eventName = 'footer_consent_link';
                }
    
                if (eventName != '') {
                    if (awaitingReconsent) {
                        eventName = `reconsent_${eventName}`;
                    }
                    if (!window.cbClicked) {
                        this.getAllConsentsByCheckbox(eventName);
                        window.cbClicked = true;
                        setTimeout(() => {
                            window.cbClicked = false;
                        }, 500);
                    }
                }
            }, 1000);
        }, true);
    },
    getAllConsentsByCheckbox(eventName) {
        try {
            const consentsArray = [];
            const optanonGroups = document.querySelectorAll('#onetrust-consent-sdk input[data-optanongroupid]');
            optanonGroups.forEach(el => {
                const key = `group${el.getAttribute('data-optanongroupid')}`;
                consentsArray.push({
                    [key]: el.checked ? "1" : "0"
                })
            });
            const trustedIABPartners = document.querySelectorAll('#onetrust-consent-sdk input.vendor-checkbox-handler');
            trustedIABPartners.forEach(el => {
                const key = `iab${el.getAttribute('vendorid')}`;
                consentsArray.push({
                    [key]: el.checked ? "1" : "0"
                })
            });
            const trustedGooglePartners = document.querySelectorAll('#onetrust-consent-sdk input.ot-addtlven-chkbox-handler');
            trustedGooglePartners.forEach(el => {
                const key = `google${el.getAttribute('addtl-vid')}`;
                consentsArray.push({
                    [key]: el.checked ? "1" : "0"
                })
            });
            const otherTrustedPartners = document.querySelectorAll('#onetrust-consent-sdk input.ot-gnven-chkbox-handler');
            otherTrustedPartners.forEach(el => {
                const key = `other${el.getAttribute('gn-vid')}`;
                consentsArray.push({
                    [key]: el.checked ? "1" :" 0"
                })
            });

            sendDataOceanEvent(451, {
                "type": eventName,
                "consents": JSON.stringify(consentsArray)
            });
        } catch (error) {
            console.log(error);
        }
    },
    reconsent() {
        const onetrustActiveGroupsArray = [];
        let rodoAccepted = false
        const optanonConsentCookie = (new URLSearchParams(oneTrustCookie.getCookie('OptanonConsent'))).getAll('groups');
        if (optanonConsentCookie.length > 0) {
            optanonConsentCookie[0].split(',').forEach(el => {
                if (el.split(':')[1] == 1) {
                    onetrustActiveGroupsArray.push(el.split(':')[0]);
                }
            })
        }
        if (onetrustActiveGroupsArray.includes('C0004') && onetrustActiveGroupsArray.includes('C0003') && onetrustActiveGroupsArray.includes('C0002')) {
            rodoAccepted = true;
        }

        const domainDoNotReconsent = ['tokfm.pl', 'tuba.pl', 'radiopogoda.pl', 'wyborcza.biz', 'wyborcza.pl', 'wysokieobcasy.pl', 'czasbrodnicy.pl', 'czasswiecia.pl', 'czaschelmna.pl', 'komunikaty.pl', 'logo24.pl', 'magazyn-kuchnia.pl', 'odeszli.pl'];
        const canReconsent = !domainDoNotReconsent.filter(domain => location.hostname.includes(domain)).length;
        if (!rodoAccepted && canReconsent) {
            try {
                const optanonAlertBoxClosed = oneTrustCookie.getCookie('OptanonAlertBoxClosed');
                if (optanonAlertBoxClosed) {
                    const currentDay = new Date();
                    const daysBefore = 7; // reconsent for consents older than 7 days
                    currentDay.setDate(currentDay.getDate() - daysBefore);
                    const timestamp1 = currentDay.getTime();

                    const optanonAlertBoxClosedDate = new Date(optanonAlertBoxClosed);
                    const timestamp2 = optanonAlertBoxClosedDate.getTime();
                    if (timestamp1 > timestamp2) {
                        this.unCheckGoups();
                        this.deleteOTCookies();
                        window.reconsent = true;
                    }
                }
            } catch (e) { }
        }
    },
    deleteOTCookies() {
        const t = 'Thu, 01 Jan 1970 00:00:01 GMT';
        const rootDomain = location.hostname.split('.').reverse().splice(0, 2).reverse().join('.').toString();
        ['OptanonConsent', 'OptanonAlertBoxClosed', 'eupubconsent-v2', 'OTAdditionalConsentString'].forEach(cookieName => {
            document.cookie = `${cookieName}=; Path=/; Domain=.${rootDomain}; Expires=${t};`;
        });
    },
    fixOtBug() {
        const urlParams = new URLSearchParams(location.search);
        const fixForOT = urlParams.get('fixforot');
        if (fixForOT != 'off') { // for OneTrust testing
            const cookies = document.cookie;
            const allOTnecesseryCookies = cookies.includes('OptanonConsent=') && cookies.includes('OptanonAlertBoxClosed=') && cookies.includes('OTAdditionalConsentString=') && cookies.includes('eupubconsent-v2=') && cookies.includes('rodoAccepted=') && cookies.includes('rodoConfigData=');
            const onetrustActiveGroupsArray = [];
            let weirdConfig = false;
            const optanonConsentCookie = (new URLSearchParams(oneTrustCookie.getCookie('OptanonConsent'))).getAll('groups');
            if (optanonConsentCookie.length > 0) {
                optanonConsentCookie[0].split(',').forEach(el => {
                    if (el.split(':')[1] == 1) {
                        onetrustActiveGroupsArray.push(el.split(':')[0]);
                    }
                })
            }
            if (onetrustActiveGroupsArray.length == 1 && onetrustActiveGroupsArray.includes('STACK42')) {
                weirdConfig = true;
            }
            if (onetrustActiveGroupsArray.length == 2 && onetrustActiveGroupsArray.includes('STACK42') && onetrustActiveGroupsArray.includes('C0001')) {
                weirdConfig = true;
            }
            if (optanonConsentCookie.length == 1 && optanonConsentCookie[0] == 'STACK42:0') {
                weirdConfig = true;
            }

            if (!allOTnecesseryCookies || weirdConfig) {
                oneTrustCookie.unCheckGoups();
                this.deleteOTCookies();
            }
            oneTrustCookie.checkTCFApi().then((result) => {
                if (result && !onetrustActiveGroupsArray.includes('C0004')) {
                    weirdConfig = true;
                }

                if (location.hostname === 'moto.pl') {
                    console.log('moto.pl');
                    if (result) {
                        try {
                            if (optanonConsentCookie.length > 0) {
                                const constentArr = optanonConsentCookie[0].split(',');
                                if (constentArr.includes('STACK42:0')) {
                                    oneTrustCookie.unCheckGoups();
                                    this.deleteOTCookies();
                                    console.log('OT fix moto.pl');
                                }
                            }
                        } catch(e) {};
                    }
                }
                if (weirdConfig) { // missing some cookies or weird OptanonConsent config, delete cookies and enforce consent box to open
                    window.repairOT = true;
                }
            })
        }
    }
}

window.oneTrustCookie.checkAllConsentsAreAccepted((result, obj) => {
    oneTrustCookie.init();
    oneTrustCookie.rodo(result, obj);
    window.OneTrust.OnConsentChanged(e => {
        oneTrustCookie.checkAllConsentsAreAccepted((result, obj) => {
            oneTrustCookie.rodo(result, obj);
        });
    });
});

if (!navigator.cookieEnabled) {
    const sdkOtCb = setInterval(() => {
        if (document.querySelector('#onetrust-consent-sdk')) {
            OneTrust.RejectAll();
            clearInterval(sdkOtCb);
        }
    }, 200);
}

window.addEventListener("message", (event) => {
    if (event.origin.includes('onnetwork.tv') && event.data === 'getOptanonConsent') {
        const optanonConsentCookie = oneTrustCookie.getCookie('OptanonConsent');
        const message = JSON.stringify({
            type: 'OptanonConsent',
            data: optanonConsentCookie
        });
        event.source.postMessage(message, '*');
    }
});


// kod poniżej do przerobienia jako oddzielny moduł (Kamil nad tym pracuje), dokumentacja funkcji analogiczna do funkcji SASSowych https://xwiki.gazeta.pl/bin/view/Technologia/Frontend/Przydatne%20funkcje%20SASS%20na%20AWD/
const fontCalculateFrom = (fontFamilySource, type, css, fontWeight) => {
    const robotoFontSizesRegular = {
        font1: '1px',
        font2: '2px',
        font3: '3px',
        font4: '3px',
        font5: '4px',
        font6: '5px',
        font7: '6px',
        font8: '7px',
        font9: '8px',
        font10: '9px',
        font11: '9px',
        font12: '10px',
        font13: '11px',
        font14: '12px',
        font15: '13px',
        font16: '14px',
        font17: '15px',
        font18: '15px',
        font19: '16px',
        font20: '17px',
        font21: '18px',
        font22: '19px',
        font23: '20px',
        font24: '20px',
        font25: '21px',
        font26: '22px',
        font27: '23px',
        font28: '24px',
        font29: '25px',
        font30: '26px',
        font31: '26px',
        font32: '27px',
        font33: '28px',
        font34: '29px',
        font35: '30px',
        font36: '31px',
        font37: '32px',
        font38: '32px',
        font39: '33px',
        font40: '34px',
        font41: '35px',
        font42: '36px',
        font43: '37px',
        font44: '38px',
        font45: '38px',
        font46: '39px',
        font47: '40px',
        font48: '41px',
        font49: '42px',
        font50: '43px',
        font51: '44px',
        font52: '44px',
        font53: '45px',
        font54: '46px',
        font55: '47px',
        font56: '48px',
        font57: '49px',
        font58: '50px',
        font59: '50px',
        font60: '51px',
        font61: '52px',
        font62: '53px',
        font63: '54px',
        font64: '55px',
        font65: '56px',
        font66: '56px',
        font67: '57px',
        font68: '58px',
        font69: '59px',
        font70: '60px',
        font71: '61px',
        font72: '61px',
        font73: '62px',
        font74: '63px',
        font75: '64px',
        font76: '65px',
        font77: '66px',
        font78: '67px',
        font79: '67px',
        font80: '68px',
        font81: '69px',
        font82: '70px',
        font83: '71px',
        font84: '72px',
        font85: '73px',
        font86: '73px'
    };

    const calibreFontSizesRegular = {
          font1: '1px',
          font2: '2px',
          font3: '4px',
          font4: '5px',
          font5: '6px',
          font6: '7px',
          font7: '8px',
          font8: '9px',
          font9: '11px',
          font10: '12px',
          font11: '13px',
          font12: '14px',
          font13: '15px',
          font14: '16px',
          font15: '18px',
          font16: '19px',
          font17: '20px',
          font18: '21px',
          font19: '22px',
          font20: '24px',
          font21: '25px',
          font22: '26px',
          font23: '27px',
          font24: '28px',
          font25: '29px',
          font26: '31px',
          font27: '32px',
          font28: '33px',
          font29: '34px',
          font30: '35px',
          font31: '36px',
          font32: '38px',
          font33: '39px',
          font34: '40px',
          font35: '41px',
          font36: '42px',
          font37: '43px',
          font38: '45px',
          font39: '46px',
          font40: '47px',
          font41: '48px',
          font42: '49px',
          font43: '50px',
          font44: '52px',
          font45: '53px',
          font46: '54px',
          font47: '55px',
          font48: '56px',
          font49: '57px',
          font50: '59px',
          font51: '60px',
          font52: '61px',
          font53: '62px',
          font54: '63px',
          font55: '64px',
          font56: '66px',
          font57: '67px',
          font58: '68px',
          font59: '69px',
          font60: '70px',
          font61: '72px',
          font62: '73px',
          font63: '74px',
          font64: '75px',
          font65: '76px',
          font66: '77px',
          font67: '79px',
          font68: '80px',
          font69: '81px',
          font70: '82px',
          font71: '83px',
          font72: '84px',
          font73: '86px'
    };

      const robotoFontSizesBold = {
          font1: '1px',
          font2: '2px',
          font3: '3px',
          font4: '4px',
          font5: '4px',
          font6: '5px',
          font7: '6px',
          font8: '7px',
          font9: '8px',
          font10: '9px',
          font11: '10px',
          font12: '10px',
          font13: '11px',
          font14: '12px',
          font15: '13px',
          font16: '14px',
          font17: '15px',
          font18: '16px',
          font19: '17px',
          font20: '18px',
          font21: '19px',
          font22: '19px',
          font23: '20px',
          font24: '21px',
          font25: '22px',
          font26: '23px',
          font27: '24px',
          font28: '25px',
          font29: '26px',
          font30: '26px',
          font31: '27px',
          font32: '28px',
          font33: '29px',
          font34: '30px',
          font35: '31px',
          font36: '32px',
          font37: '33px',
          font38: '34px',
          font39: '34px',
          font40: '35px',
          font41: '36px',
          font42: '37px',
          font43: '38px',
          font44: '39px',
          font45: '40px',
          font46: '41px',
          font47: '41px',
          font48: '42px',
          font49: '43px',
          font50: '44px',
          font51: '45px',
          font52: '46px',
          font53: '47px',
          font54: '48px',
          font55: '49px',
          font56: '49px',
          font57: '50px',
          font58: '51px',
          font59: '52px',
          font60: '53px',
          font61: '54px',
          font62: '55px',
          font63: '56px',
          font64: '56px',
          font65: '57px',
          font66: '58px',
          font67: '59px',
          font68: '60px',
          font69: '61px',
          font70: '62px',
          font71: '63px',
          font72: '64px',
          font73: '64px',
          font74: '65px',
          font75: '66px',
          font76: '67px',
          font77: '68px',
          font78: '69px',
          font79: '70px',
          font80: '71px',
          font81: '71px',
          font82: '72px',
          font83: '73px',
          font84: '74px',
          font85: '75px',
          font86: '76px'
      };

      const calibreFontSizesBold = {
          font1: '1px',
          font2: '2px',
          font3: '3px',
          font4: '5px',
          font5: '6px',
          font6: '7px',
          font7: '8px',
          font8: '9px',
          font9: '10px',
          font10: '12px',
          font11: '13px',
          font12: '14px',
          font13: '15px',
          font14: '16px',
          font15: '17px',
          font16: '18px',
          font17: '19px',
          font18: '20px',
          font19: '22px',
          font20: '23px',
          font21: '24px',
          font22: '25px',
          font23: '26px',
          font24: '27px',
          font25: '28px',
          font26: '30px',
          font27: '31px',
          font28: '32px',
          font29: '33px',
          font30: '34px',
          font31: '35px',
          font32: '36px',
          font33: '37px',
          font34: '39px',
          font35: '40px',
          font36: '41px',
          font37: '42px',
          font38: '43px',
          font39: '44px',
          font40: '45px',
          font41: '47px',
          font42: '48px',
          font43: '49px',
          font44: '50px',
          font45: '51px',
          font46: '52px',
          font47: '53px',
          font48: '54px',
          font49: '56px',
          font50: '57px',
          font51: '58px',
          font52: '59px',
          font53: '60px',
          font54: '61px',
          font55: '62px',
          font56: '64px',
          font57: '65px',
          font58: '66px',
          font59: '67px',
          font60: '68px',
          font61: '69px',
          font62: '70px',
          font63: '71px',
          font64: '73px',
          font65: '74px',
          font66: '75px',
          font67: '76px',
          font68: '77px',
          font69: '78px',
          font70: '79px',
          font71: '81px',
          font72: '82px',
          font73: '83px',
          font74: '84px',
          font75: '85px',
          font76: '86px'
      };

      const robotoFontSizesBlack = {
          font1: '1px',
          font2: '2px',
          font3: '3px',
          font4: '4px',
          font5: '5px',
          font6: '5px',
          font7: '6px',
          font8: '7px',
          font9: '8px',
          font10: '9px',
          font11: '10px',
          font12: '10px',
          font13: '12px',
          font14: '13px',
          font15: '14px',
          font16: '14px',
          font17: '15px',
          font18: '16px',
          font19: '17px',
          font20: '18px',
          font21: '19px',
          font22: '20px',
          font23: '21px',
          font24: '22px',
          font25: '22px',
          font26: '23px',
          font27: '24px',
          font28: '25px',
          font29: '26px',
          font30: '27px',
          font31: '28px',
          font32: '29px',
          font33: '30px',
          font34: '31px',
          font35: '32px',
          font36: '32px',
          font37: '33px',
          font38: '34px',
          font39: '35px',
          font40: '36px',
          font41: '37px',
          font42: '38px',
          font43: '39px',
          font44: '40px',
          font45: '41px',
          font46: '41px',
          font47: '42px',
          font48: '43px',
          font49: '44px',
          font50: '45px',
          font51: '46px',
          font52: '47px',
          font53: '48px',
          font54: '49px',
          font55: '50px',
          font56: '51px',
          font57: '51px',
          font58: '52px',
          font59: '53px',
          font60: '54px',
          font61: '55px',
          font62: '56px',
          font63: '57px',
          font64: '58px',
          font65: '59px',
          font66: '60px',
          font67: '60px',
          font68: '61px',
          font69: '62px',
          font70: '63px',
          font71: '64px',
          font72: '64px',
          font73: '65px',
          font74: '67px',
          font75: '68px',
          font76: '69px',
          font77: '69px',
          font78: '70px',
          font79: '71px',
          font80: '72px',
          font81: '73px',
          font82: '74px',
          font83: '75px',
          font84: '76px',
          font85: '77px',
          font86: '78px'
      };

      const calibreFontSizesBlack = {
          font1: '1px',
          font2: '2px',
          font3: '3px',
          font4: '4px',
          font5: '6px',
          font6: '7px',
          font7: '8px',
          font8: '9px',
          font9: '10px',
          font10: '11px',
          font11: '12px',
          font12: '13px',
          font13: '14px',
          font14: '16px',
          font15: '17px',
          font16: '18px',
          font17: '19px',
          font18: '20px',
          font19: '21px',
          font20: '22px',
          font21: '23px',
          font22: '25px',
          font23: '26px',
          font24: '27px',
          font25: '28px',
          font26: '29px',
          font27: '30px',
          font28: '31px',
          font29: '32px',
          font30: '33px',
          font31: '34px',
          font32: '36px',
          font33: '37px',
          font34: '38px',
          font35: '39px',
          font36: '40px',
          font37: '41px',
          font38: '42px',
          font39: '43px',
          font40: '44px',
          font41: '46px',
          font42: '47px',
          font43: '48px',
          font44: '49px',
          font45: '50px',
          font46: '51px',
          font47: '52px',
          font48: '53px',
          font49: '54px',
          font50: '55px',
          font51: '57px',
          font52: '58px',
          font53: '59px',
          font54: '60px',
          font55: '61px',
          font56: '62px',
          font57: '63px',
          font58: '64px',
          font59: '65px',
          font60: '67px',
          font61: '68px',
          font62: '69px',
          font63: '70px',
          font64: '72px',
          font65: '73px',
          font67: '74px',
          font68: '75px',
          font69: '77px',
          font70: '78px',
          font71: '79px',
          font72: '80px',
          font73: '81px',
          font74: '82px',
          font75: '83px',
          font76: '84px',
          font77: '85px',
          font78: '86px'
      };

      const fontCalculateSize = (fontName, value, fontWeight) => {
        let returnValue;
        if (fontName === 'roboto' && fontFamilySource.toLowerCase() === 'calibre') {
            if (fontWeight.toLowerCase() == 'regular' || fontWeight.toLowerCase() == 'normal' || parseInt(fontWeight) <= 400) {
                returnValue = robotoFontSizesRegular[`font${value.replace('px', '')}`];
            } else if (fontWeight.toLowerCase() == 'semibold' || (parseInt(fontWeight) > 400 && parseInt(fontWeight) <= 600)) {
                returnValue = robotoFontSizesBold[`font${value.replace('px', '')}`];
            } else if (fontWeight.toLowerCase() == 'bold' || parseInt(fontWeight) > 600) {
                returnValue = robotoFontSizesBlack[`font${value.replace('px', '')}`];
            }
        } else if (fontName === 'calibre' && fontFamilySource.toLowerCase() === 'roboto') {
            if (fontWeight.toLowerCase() == 'regular' || fontWeight.toLowerCase() == 'normal' || parseInt(fontWeight) <= 400) {
                returnValue = calibreFontSizesRegular[`font${value.replace('px', '')}`];
            } else if (fontWeight.toLowerCase() == 'medium' || fontWeight.toLowerCase() == 'bold' || (parseInt(fontWeight) > 400 && parseInt(fontWeight) < 700)) {
                returnValue = calibreFontSizesBold[`font${value.replace('px', '')}`];
            } else if (fontWeight.toLowerCase() == 'black' || parseInt(fontWeight) >= 700) {
                returnValue = calibreFontSizesBlack[`font${value.replace('px', '')}`];
            }
        } else {
            returnValue = value;
        }
        return returnValue;
      }

        let fontFamily = 'roboto';
        if (location.hostname.includes('gazeta.pl')) {
            fontFamily = 'calibre';
        }

        if (type === 'font-size') {
            result = fontCalculateSize(fontFamily, css, fontWeight);
            return result;
        }

        if (fontFamilySource.toLowerCase() === fontFamily) {
            if (fontFamily === 'calibre') {
                fontFamily += `, CalibreWeb, Arial, sans-serif`;
            } else {
                fontFamily += `, Arial, sans-serif`;
            }
            result = `${css} ${fontFamily}`;
        } else {
            const fontArray = css.split(' ');
            const fontWeight = fontArray[0].trim();
            const fontSize = fontArray[1].trim().split('/')[0].trim();
            const lineHeight = fontArray[1].trim().split('/')[1].trim();
            let newFontWeight;
            let newFontSize;

            if (fontFamily === 'roboto') {
                if (fontWeight === 'regular' || fontWeight <= 400 || fontWeight === 'normal') { // regular
                    newFontWeight = '400';
                } else if (fontWeight === 'medium' || (fontWeight > 400 && fontWeight < 700) || fontWeight === 'bold') { // semibold
                    newFontWeight = '700';
                } else if (fontWeight === 'black' || fontWeight >= 700) { // bold
                    newFontWeight = '900';
                }
            } else {
                if (fontWeight === 'regular' || fontWeight <= 400 || fontWeight === 'normal') { // regular
                    newFontWeight = '400';
                } else if (fontWeight === 'medium' || (fontWeight > 400 && fontWeight <= 700) || fontWeight === 'bold') { // semibold
                    newFontWeight = '600';
                } else if (fontWeight === 'bold' || fontWeight > 700) { // bold
                    newFontWeight = '700';
                }
            }
            newFontSize = fontCalculateSize(fontFamily, fontSize, fontWeight);
            result = `${newFontWeight} ${newFontSize}/${lineHeight} ${fontFamily}`;
            if (fontFamily === 'calibre') {
                result += `, CalibreWeb, Arial, sans-serif`;
            } else {
                result += `, Arial, sans-serif`;
            }
        }

        return result;
}

function cssValueCalibreRoboto(calibreValue, robotoValue) {
    let result = robotoValue;
    if (location.hostname.includes('gazeta.pl')) { // calibre
        result = calibreValue;
    }
    return result;
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.uniid && window.uniid.cv2_created && window.uniid.cv2_updated) {
    try {
      const currentDate = Date.now();
      const tcStringCreated = window.uniid.cv2_created;
      const tcStringUpdated = window.uniid.cv2_updated;
      const differenceIdDaysTcStringCreated =
        (currentDate - tcStringCreated) / (1000 * 3600 * 24);

      const differenceIdDaysTcStringUpdated =
        (currentDate - tcStringUpdated) / (1000 * 3600 * 24);

      if (differenceIdDaysTcStringCreated >= 390) {
        // 390 days = 13 months
        sendDataOceanEvent(451, {
          type: "tcstring_created_bug",
          cookiedays: differenceIdDaysTcStringCreated,
        });
      }

      if (differenceIdDaysTcStringUpdated >= 390) {
        sendDataOceanEvent(451, {
          type: "tcstring_updated_bug",
          cookiedays: differenceIdDaysTcStringUpdated,
        });
      }

      if (differenceIdDaysTcStringCreated != differenceIdDaysTcStringUpdated) {
        sendDataOceanEvent(451, {
          type: "tcstring_created_updated_not_same",
          cookiedaysCreated: differenceIdDaysTcStringCreated,
          cookiedaysUpdated: differenceIdDaysTcStringUpdated,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
});