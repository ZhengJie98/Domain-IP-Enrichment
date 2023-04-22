//<script>
    
if (typeof VisitWeb == "undefined") VisitWeb = {};
if (typeof VisitWeb.showBlock == "undefined") VisitWeb.showBlock = {};

if (!VisitWeb.showBlock[244095]) VisitWeb.showBlock[244095] = function  () {

    var bid = 244095;

    if (!VisitWeb.blocks) VisitWeb.blocks = {};

    if (!VisitWeb.blocks[bid]) {
        VisitWeb.blocks[bid] = {};

        var block    = VisitWeb.blocks[bid];
        var data     = [];
        var settings = {};

                    data[data.length] = {
                image: 'http://iwe.ktvgv.com/i/535817.1681628592.6846.png',
                link: 'https://cwpbam.mfcewkrob.com/c?m=c&b=0AV8HHv6fo3uzUG0iVgKMUzIfViQ9vByYKHsx-n95u8gusUGr4Lhqg1ZtCiJGSXAQqbj9q9Ka59dQplf_WPKjSNkcQn-Bfb3V30QM90Ag9CNZ0Gody9s6hY',
                text: 'DOGE \u043a\u0430\u0436\u0434\u044b\u0435 5 \u043c\u0438\u043d\u0443\u0442.'
            };
                    data[data.length] = {
                image: 'http://iwe.ktvgv.com/i/535817.1681628554.1116.png',
                link: 'https://cwpbam.mfcewkrob.com/c?m=c&b=Jzj16mZK9F1p4U9zhHnAS0NLlbAMGBXAISc9lrq_MuFabuyicSL5Wg4bTvccUzGuv8iMhwIdm09dEdlodxRfqhklsJPhJ3sKR_z0hcEH0X4Os3ivIfoUyuY',
                text: 'DOGE every 5 minute.'
            };
                
        block.data     = data;
        block.id       = bid;
        block.sec_id   = 'n4gzXkyEY0wEPG7lnMorP_evLR4rnNw2';
        block.ref      = 'rhQl5R2IvKezC-KbyT6EomGlUEcTCeg';
        block.settings = {};

        settings               = block.settings;
        settings.urlPrefix     = 'http://iwe.ktvgv.com/';
        settings.refLink       = 0;
        settings.error         = '';
        settings.rows          = 2;
        settings.cols          = 1;
        settings.tables        = 1;
        settings.cssCheat      = '';
        settings.xwidth        = '240px';
        settings.xheight       = '400px';
        settings.textPosition  = 'bottom';
        settings.isImage       = 1;
        settings.isText        = 1;
        settings.cssMode       = '';
        settings.position      = 'none';
        settings.motionType    = 'none';
        settings.motionTime    = 500;
        settings.motionDelay   = 0;
        settings.rotateDelay   = 9000;
        settings.imageBigSize  = 150;

        settings.blockBGColor      = '#FFFFFF';
        settings.blockHoverBGColor = '';
        settings.blockBorderColor  = '';
        settings.blockBorderStyle  = 'solid';
        settings.blockBorder       = 0;
        settings.blockBorderRadius = 0;
        settings.blockShadowBlur   = 0;
        settings.blockShadowColor  = '';
        settings.blockOpacity      = 100;

        settings.teaserHoverBGColor = '';
        settings.teaserBorderColor  = '';
        settings.teaserBorderStyle  = 'solid';
        settings.teaserBorder       = 0;

        settings.imageSize         = 140;
        settings.imageBorderColor  = '';
        settings.imageBorderStyle  = 'solid';
        settings.imageBorder       = 0;
        settings.imageBorderRadius = 0;

        settings.fontSize            = 14;
        settings.fontColor           = '#0000CC';
        settings.fontDecoration      = 'underline';
        settings.fontFamily          = 'Trebuchet MS, Helvetica, sans-serif';
        settings.fontHoverColor      = '#D50303';
        settings.fontHoverDecoration = 'underline';
        settings.fontWeight          = 'normal';

        settings.closeButtonPosition = true;
        settings.status              = 0;
        settings.type                = 'standard';

                    block.container_id     = 'v4gzXkyEY0wEPG7lnMorP_evLR4rnNw';
            block.old_container_id = 'visitweb_container_244095';
        
        block.container = document.getElementById(block.old_container_id);
        if (!block.container) block.container  = document.getElementById(block.container_id);
        else block.container_id = block.old_container_id;

        /*if (!block.container) {
            document.write("<div id='" + block.container_id + "'></div>");
            block.container = document.getElementById(block.container_id);
        }*/

        if (data.length == 0) {
            block.container.innerHTML = settings.error;
            return;
        }

        if (VisitWeb.tools.allBad) {
            settings.motionType = 'none';
            settings.closeButtonPosition = false;
            settings.imageBigSize = 100;
        }

        block.state = {
            state: 0,
            observers: [],
            bind: function (state, fn) {
                if (typeof fn != 'function') return;
                if (this.state < state) {
                    if (!this.observers[state]) this.observers[state] = [];
                    var o = this.observers[state];
                    o[o.length] = fn;
                } else fn();
            },
            fire: function (state) {
                this.state = state;

                var observers = this.observers && this.observers[state];

                if (observers)
                for (var i = 0, l = observers.length; i < l; i++) {
                    var fn = observers[i];
                    observers[i] = null;
                    if (typeof fn == 'function') fn();
                }
            }
        };

        VisitWeb.createBlock(bid);
                                            block.state.bind(2, function () { VisitWeb.initResizing(bid); });
        
        //<script>

function Taboo(sentences) {
    var hashWord = function (word) {
        var res = Taboo.crc32(word);
        res = [res & 0xffff, (res >> 16) & 0xffff];
        res = res[0] ^ res[1];
        if (res & 0xff == 0)
            res |= 0xff;
        if (res & 0x00ff == 0)
            res |= 0x00ff;
        return res;
    };
    
    var textToWords = function (text) {
        text = text.toLowerCase()
            .replace(/<\!--[\s\S]*?-->/g, '')   // cut html comments
            //.replace(/(\d)\s+(?=\d)/g, '$1') // join splitted numbers
            .replace(/(\d)\s*-\s*(\d)/g, '$1 $2')   // split numbers ranges into 2 separate numbers
            .replace(/-/g, '')  // remove hyphens
            .replace(/(\d)(?!\d)/g, '$1 ')   // split number and character
        ;
        // translit:
        var mapTranslit = {
            "a":/\u0430|\xe0/g,"b":/\u0431|\xe1/g,"v":/\u0432|\xe2/g,
            "g":/\u0433|\xe3/g,"d":/\u0434|\xe4/g,"e":/\u0435|\xe5|\u0451|\xb8|\u044d|\xfd/g,
            "zh":/\u0436|\xe6/g,"z":/\u0437|\xe7/g,"i":/\u0438|\xe8|\u0439|\xe9/g,
            "k":/\u043a|\xea/g,"l":/\u043b|\xeb/g,"m":/\u043c|\xec/g,
            "n":/\u043d|\xed/g,"o":/\u043e|\xee/g,"p":/\u043f|\xef/g,
            "r":/\u0440|\xf0/g,"s":/\u0441|\xf1/g,"t":/\u0442|\xf2/g,
            "u":/\u0443|\xf3/g,"f":/\u0444|\xf4/g,"h":/\u0445|\xf5/g,
            "ts":/\u0446|\xf6/g,"tch":/\u0447|\xf7/g,"sh":/\u0448|\xf8/g,
            "sch":/\u0449|\xf9/g,"`":/\u044a|\xfa|\u044c|\xfc/g,
            "y":/\u044b|\xfb/g,"yu":/\u044e|\xfe/g,"ya":/\u044f|\xff/g,
        };
        for (var c in mapTranslit)
            text = text.replace(mapTranslit[c], c);
        
        text = text.replace(/[^a-z0-9` ]+/ig, ' ');  // remove noise
        return text.replace(/^\s+|\s+$/g, '').split(/\s+/);
    };
    
    var hashWords = function (words) {
        var hash, res = [];
        for (var i = 0; i < words.length; i++) {
            if (!words[i])
                continue;
            hash = hashWord(words[i]);
            res.push(('0000' + hash.toString(16)).slice(-4));
        }
        return res;
    };
    
    this.match = function (text) {
        text = text || document.body.textContent || document.body.innerText;
        words = textToWords(text);
        text = hashWords(words).join('');
        
        var i, sentence, offset = -1, pos = -1;
        for (i = 0; i < sentences.length; i++) {
            sentence = sentences[i];
            while ((pos = text.indexOf(sentence, offset)) > -1) {
                if (pos % 4)
                    offset = pos + 1;
                else
                    break;
            }
            if (pos > -1) {
                console.log(words.slice(pos / 4, pos / 4 + Math.ceil(sentence.length / 4)));
                VisitWebTabooWord = words.slice(pos / 4, pos / 4 + Math.ceil(sentence.length / 4)).join(' ');
                return i;//words.slice(pos / 4, pos / 4 + Math.ceil(sentence.length / 4));
            }
        }
        return -1;
    };
}

Taboo.crc32 = (function () {
    var crcTable = null,
        getCRCTable = function () {
            if (!crcTable) {
                crcTable = [];
                var i, c, k;
                for (i = 0; i < 256; i++) {
                    c = i;
                    for (k = 0; k < 8; k++)
                        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
                    crcTable[i] = c;
                }
            }
            return crcTable;
        }
    ;
    
    return function (str) {
        var i, res = -1, crcTable = getCRCTable();
        for (i = 0; i < str.length; i++ )
            res = (res >>> 8) ^ crcTable[(res ^ str.charCodeAt(i)) & 0xff];
        return (res ^ (-1)) >>> 0;
    };
})();


var sentences = ["5beaa6ebc8ea30ff","5bea0558c8ea30ff","f26e5beac8ea30ff","5bead139c8ea30ff","e41ec8ea30ff5bea","5beae8afc8ea30ff","5bea47c8c8ea30ff","c8ea30ff5bea5484","12985beac8ea30ff","30ae5beac8ea30ff","5bea2c72c8ea30ff","5bea0059c8ea30ff","40a75beac8ea30ff","5beac8ea8f7b30ff","5bea0b9ec8ea30ff","5beac8ea30fff26e5484","5bea7fc4c8ea30ff","dc945beac8ea30ff","129850e0c8ea30ffa6eb","1298f26e30ffc8eaa6eb","1298e41ec8ea30ffa6eb","1298a6eb0059c8ea30ff","5bead405fe6a","5beaa6eb2490","5bea30ae54ccc8ea30ff","269c54cc1298a6eb","9155c8ea30ff","9155a6ebc8ea30ff","91550558c8ea30ff","9155d139c8ea30ff","e41ec8ea30ff9155","9155e8afc8ea30ff","915547c8c8ea30ff","c8ea30ff91555484","91552c72c8ea30ff","91550059c8ea30ff","9155c8ea8f7b30ff","91550b9ec8ea30ff","91557fc4c8ea30ff","9155d405fe6a","9155a6eb2490","915554ccc8ea30ff","915530ae54ccc8ea30ff","cc06c8ea30ff","cc06a6ebc8ea30ff","cc060558c8ea30ff","cc06d139c8ea30ff","e41ec8ea30ffcc06","cc06e8afc8ea30ff","cc0647c8c8ea30ff","c8ea30ffcc065484","cc062c72c8ea30ff","cc060059c8ea30ff","cc06c8ea8f7b30ff","cc060b9ec8ea30ff","cc067fc4c8ea30ff","cc06d405fe6a","cc06a6eb2490","cc0654ccc8ea30ff","cc0630ae54ccc8ea30ff","afe8c8ea30ff","afe8a6ebc8ea30ff","afe80558c8ea30ff","afe8d139c8ea30ff","e41ec8ea30ffafe8","afe8e8afc8ea30ff","afe847c8c8ea30ff","c8ea30ffafe85484","afe82c72c8ea30ff","afe80059c8ea30ff","afe8c8ea8f7b30ff","afe80b9ec8ea30ff","afe87fc4c8ea30ff","afe8d405fe6a","afe8a6eb2490","afe854ccc8ea30ff","afe830ae54ccc8ea30ff","c223c8ea30ff","c223a6ebc8ea30ff","c2230558c8ea30ff","c223d139c8ea30ff","e41ec8ea30ffc223","c223e8afc8ea30ff","c22347c8c8ea30ff","c8ea30ffc2235484","c2232c72c8ea30ff","c2230059c8ea30ff","c223c8ea8f7b30ff","c2230b9ec8ea30ff","c2237fc4c8ea30ff","c223d405fe6a","c223a6eb2490","c22354ccc8ea30ff","1a45c8ea30ff","1a45a6ebc8ea30ff","1a450558c8ea30ff","1a45d139c8ea30ff","e41ec8ea30ff1a45","1a45e8afc8ea30ff","1a4547c8c8ea30ff","c8ea30ff1a455484","1a452c72c8ea30ff","1a450059c8ea30ff","1a45c8ea8f7b30ff","1a450b9ec8ea30ff","1a457fc4c8ea30ff","1a45d405fe6a","1a45a6eb2490","1a4554ccc8ea30ff","1a4530ae54ccc8ea30ff","5bea4552c8ea30ff","129850e0c8ea30ff4552","1298f26e30ffc8ea4552","1298e41ec8ea30ff4552","129845520059c8ea30ff","5bea45522490","269c54cc12984552","5bea4c99c8ea30ff","129850e0c8ea30ff4c99","1298f26e30ffc8ea4c99","1298e41ec8ea30ff4c99","12984c990059c8ea30ff","5bea4c992490","269c54cc12984c99","5bea30aee00cc8ea30ff","269ce00c1298a6eb","5bea179130ff","5beaa6eb179130ff","5bea0558179130ff","5bead139179130ff","e41e179130ff5bea","5beae8af179130ff","5bea47c8179130ff","179130ff5bea5484","5bea2c72179130ff","5bea0059179130ff","5bea17918f7b30ff","5bea0b9e179130ff","5bea7fc4179130ff","129850e0179130ffa6eb","1298f26e30ff1791a6eb","1298e41e179130ffa6eb","1298a6eb0059179130ff","5bea30ae54cc179130ff","5bead4053ce9","5beaa6eb175b","155754cc1298a6eb","a9145beac8ea30ff","5beac8ea30ffa9145484","1298a91430ffc8eaa6eb","f5b45beac8ea30ff","9155179130ff","9155a6eb179130ff","91550558179130ff","9155d139179130ff","e41e179130ff9155","9155e8af179130ff","915547c8179130ff","179130ff91555484","91552c72179130ff","91550059179130ff","915517918f7b30ff","91550b9e179130ff","91557fc4179130ff","9155d4053ce9","9155a6eb175b","915530aee00cc8ea30ff","cc06179130ff","cc06a6eb179130ff","cc060558179130ff","cc06d139179130ff","e41e179130ffcc06","cc06e8af179130ff","cc0647c8179130ff","179130ffcc065484","cc062c72179130ff","cc060059179130ff","cc0617918f7b30ff","cc060b9e179130ff","cc067fc4179130ff","cc0654cc179130ff","cc0630ae54cc179130ff","afe8179130ff","afe8a6eb179130ff","afe80558179130ff","afe8d139179130ff","e41e179130ffafe8","afe8e8af179130ff","afe847c8179130ff","179130ffafe85484","afe82c72179130ff","afe80059179130ff","afe817918f7b30ff","afe80b9e179130ff","afe87fc4179130ff","afe854cc179130ff","afe830ae54cc179130ff","afe84552c8ea30ff","afe845522490","c2234552c8ea30ff","c22345522490","5bea4552179130ff","129850e0179130ff4552","1298f26e30ff17914552","1298e41e179130ff4552","129845520059179130ff","5bea4c99179130ff","129850e0179130ff4c99","1298f26e30ff17914c99","1298e41e179130ff4c99","12984c990059179130ff","5bea30aee00c179130ff","c223179130ff","c223a6eb179130ff","c2230558179130ff","c223d139179130ff","e41e179130ffc223","c223e8af179130ff","c22347c8179130ff","179130ffc2235484","c2232c72179130ff","c2230059179130ff","c22317918f7b30ff","c2230b9e179130ff","c2237fc4179130ff","c22354cc179130ff","1a454552c8ea30ff","1a4545522490","1a45179130ff","1a45a6eb179130ff","1a450558179130ff","1a45d139179130ff","e41e179130ff1a45","1a45e8af179130ff","1a4547c8179130ff","179130ff1a455484","1a452c72179130ff","1a450059179130ff","1a4517918f7b30ff","1a450b9e179130ff","1a457fc4179130ff","1a4554cc179130ff","1a4530ae54cc179130ff","40dec8ea30ff","8e79c8ea30ff","371bc8ea30ff","f26e5ff2c8ea30ff","7da75beac8ea30ff","767611515bea","80b854cc5bea","1298ac50c8ea30ffa6eb","a6eb3b84e41ec8ea30ff","5bea39777fc4c8ea30ff","a6eb129839777fc4c8ea30ff","0558c8ea30ff50e0b6475bea","30ae5bea269c","24901be250e0b6475bea","5e60c8ea30ff5bea","f26e5bea269c","f26e8e79d405a3f6c8ea30ff","a6eb3b84a852","a6eb3b8480b8","dc9450e05bea269c","5bea3ac32490","5bea3ac3c8ea30ff","5bea129862f7c8ea30ff","5bea1298e41ec8ea30ff","5bea1298d831c8ea30ff","5bea269cdc94","5bea6301dc94","5bea90bcc8ea30ff","5bead1392490","5bea90bc2490","5bead13980b8","5beabfdda852","5bea33b42490","5bea63c680b854cc","5bead13954ccc8ea30ff","5bead40580b85f2a","5bea24903977","5bea80b883b1","5beaa85283b1","5beaa6ebd40580b8","5bea269c7ff9d405f7db","5beaa6eb269c7ff9d405f7db","5bea30ae1151c8ea30ff","5bea30ae1c82c8ea30ff","5beaa6eb87fdc8ea30ff","5beaa6eb502787fd","7ff98d1376760d7a","7ff90f3876760d7aa6eb","5bea2b19d01d48e7c8ea30ff","5beae8aff26e269c","f26e12982490","7da712982490","a6eb1298a852","5bea1298a852","5beaa6eba852","665a80b8e41ea6eb","6cb602a03d37a85283b1","30ae5bea7ff9f7db269c","30ae5bea40abd405123480b8","30ae5bea7ff9f7dbc8ea30ff","a6eb3b84d40580b8","a6eb3b840558c8ea30ff","5beaa6eb3b8450e0c8ea30ff","5bea3d8ed01d5673c8ea30ff","5bea2b83d405a075f3fb","dc0a7676","5bea2d25ffe3","4d16c8ea30fff0ae71cc5bea","83b1c8ea30ff0a575f0d5bea","2d250558c8ea30ff5f0d5bea","dff650e0c8ea30ff9e6ea6eb","63017cfa8d132b83","502756735bead405eb9c","7cfac8ea30ffd01d2b8350e05bea","2b83b3d8d405f3fba0755bea","a6eb12985673c8ea30ffd01d3d8e","40d02b83d0acd405a075f3fba6eb","02a0ff9457d30b88c866","5bea0558005930ff","0558005930ff5bead139","5bea47c8005930ff3977","5c0883b1005930ff5bea","1298a6eb005930ff","5bea62f75dd00059","0059b2b2e41e5bea","81395bead405ad09","50e0005930ffd0ac","005930ff342fa6eb","5bea2c72005930ff","5beae8af005930ff","5beaa6eb2c72005930ff","5beaa15f","d7f0a6eb5bea","5bea3b8a005930ff","7fc4005930ff5bea","5bead1390059","5bea005930ffd139","5bea4adf005930ff","8302129850e00059a6eb","8302129850e000595bea","1298d4055f2a0059","5bea5e60005930ff","005930ff408eec27a6eb","5beaa6eb0059b0be","5beab0a30059","12db09d4848a","91550558005930ff","0558005930ff9155d139","915547c8005930ff3977","5c0883b1005930ff9155","915562f75dd00059","0059b2b2e41e9155","81399155d405ad09","91552c72005930ff","9155e8af005930ff","9155a6eb2c72005930ff","9155a15f","d7f0a6eb9155","91553b8a005930ff","7fc4005930ff9155","9155d1390059","9155005930ffd139","91554adf005930ff","8302129850e000599155","91555e60005930ff","9155a6eb0059b0be","9155b0a30059","1a450558005930ff","0558005930ff1a45d139","1a4547c8005930ff3977","5c0883b1005930ff1a45","1a4562f75dd00059","0059b2b2e41e1a45","81391a45d405ad09","1a452c72005930ff","1a45e8af005930ff","1a45a6eb2c72005930ff","1a45a15f","d7f0a6eb1a45","1a453b8a005930ff","7fc4005930ff1a45","1a45d1390059","1a45005930ffd139","1a454adf005930ff","8302129850e000591a45","1a455e60005930ff","1a45a6eb0059b0be","1a45b0a30059","afe80558005930ff","0558005930ffafe8d139","afe847c8005930ff3977","5c0883b1005930ffafe8","afe862f75dd00059","0059b2b2e41eafe8","8139afe8d405ad09","afe82c72005930ff","afe8e8af005930ff","afe8a6eb2c72005930ff","afe8a15f","d7f0a6ebafe8","afe83b8a005930ff","7fc4005930ffafe8","afe8d1390059","afe8005930ffd139","afe84adf005930ff","8302129850e00059afe8","afe85e60005930ff","afe8a6eb0059b0be","afe8b0a30059","5bea0558df2230ff","0558df2230ff5bead139","5bea47c8df2230ff3977","5c0883b1df2230ff5bea","1298a6ebdf2230ff","5bea62f75dd0df22","df22b2b2e41e5bea","81395bead405ba65","50e0df2230ffd0ac","df2230ff342fa6eb","5bea2c72df2230ff","5beae8afdf2230ff","5beaa6eb2c72df2230ff","5bea3b8adf2230ff","7fc4df2230ff5bea","5bead139df22","5beadf2230ffd139","5bea4adfdf2230ff","8302129850e0df22a6eb","8302129850e0df225bea","1298d4055f2adf22","5bea5e60df2230ff","40a75bea4c0fdf2230ff","df2230ff408eec27a6eb","5beaa6ebdf22b0be","5beab0a3df22","5bea0e8d","6545a6eb5bea","12dbbb61848a","5bea9ddf0059","9155f3e6005930ff","9155a6ebf3e6005930ff","91550558df2230ff","0558df2230ff9155d139","915547c8df2230ff3977","5c0883b1df2230ff9155","915562f75dd0df22","df22b2b2e41e9155","81399155d405ba65","91552c72df2230ff","9155e8afdf2230ff","9155a6eb2c72df2230ff","91553b8adf2230ff","7fc4df2230ff9155","9155d139df22","9155df2230ffd139","91554adfdf2230ff","8302129850e0df229155","91555e60df2230ff","40a791554c0fdf2230ff","9155a6ebdf22b0be","9155b0a3df22","afe80558df2230ff","0558df2230ffafe8d139","afe847c8df2230ff3977","5c0883b1df2230ffafe8","afe862f75dd0df22","df22b2b2e41eafe8","8139afe8d405ba65","afe82c72df2230ff","afe8e8afdf2230ff","afe8a6eb2c72df2230ff","afe83b8adf2230ff","7fc4df2230ffafe8","afe8d139df22","afe8df2230ffd139","afe84adfdf2230ff","8302129850e0df22afe8","afe85e60df2230ff","40a7afe84c0fdf2230ff","afe8a6ebdf22b0be","afe8b0a3df22","5bea3977005930ff","5bead4057355005930ff","5bea83b1005930ff","5bea05770558","5bead7f083b1","5bead4050577a3f6","5bead405ee3f7355","5bea0577e41e","5bead4050577a5af","5bead405ee3fad0a","1298a6ebd7f0","1298a6ebd4050577","1298a6ebd405a3f6005930ff","83b1d0ac50e0005930ff","62f7d0ac50e0005930ff","7fc4005930ff50e05bea","83b17fc4005930ffd0ac","62f77fc4005930ff52b4ec27","5bead405d7580577","5bea25ffd7f0","5bead7580577","54cc50e05beaa353","5beaa6eba353","5beaa6eb005930ff","665a2c72005930ffa6eb","2c72005930ffddeaa6eb","69ef005930ffddead139","e35b02a03d37d7f0","d7f03d375bea","5bea40a7a353","40a7a35350e05bea","1298a6eb40a7005930ff","a6eb3b845e60005930ff","a6eb12983ab8005930ff","a6eb129850e0005930ff","a6eb3b8450e0005930ff","5beaa6eb80a63b8450e0005930ff","a353342fa6eb","d7f0d0aca6eb","d7f0c3dd74d998532b195bea","d7f0c3dd74d998532b19a6eb","fadcc3dd74d998532b19","fadcc3ddd405f0d25bea","fadcc3ddd0acd405f0d2","7ff912db09d40d7a643c","7ff9d0acd4050577f7dba6eb","5bead139d0a83977079030ff","5bead139d2a40558079030ff","5bead139d0a8b0a3079030ff","5bead139d2a454cc079030ff","81395beaa353","81395bead405ee3f","81395bead4050577","e6ced0ac","4a864072","e6ce8d13","40729e6e","18874072","5bea3ab8129850e0005930ff","a6eb3ab8129850e0005930ff","5bea7f453b84005930ff","a6eb7f453b84005930ff","5bea3ab81298a353","a6eb3ab81298a353","5bead4050577d4ac","5bea2e5102910577","cc36005930ffd0ac50e08302c3ea","5bea47c830ffa6eb","5bea055847c830ff","5bead13947c830ff","5bea5e6047c830ff","5bea2c7247c830ff","055847c830ff5beaa6eb","5bead139397747c830ff","f26e5bea47c830ff1298","9e6e50e047c830ff","8d1347c830ffa6eb","5beaa6eb40a747c830ff","dc945bea40a747c830ff","5bead13940a747c830ff","5beac87747c830ff","1298d405024247c830ff","f26e5484129847c830ff","5bea7e4747c830ff","5bea77ac47c830fff26e","5bead13954cc47c830ff","5bea7fc447c830ff","5bea398647c830ff","cc3647c830ff5bea","5bea566247c830ff","dc945bea47c830ff","dc9447c830ffa6eb","5bea47c830ffe8af","5bea47c830fff26ee8af","d1393e767955","129850e047c830ff","1298d40531ed","915547c830ffa6eb","9155055847c830ff","9155d13947c830ff","91555e6047c830ff","91552c7247c830ff","055847c830ff9155a6eb","9155d139397747c830ff","f26e915547c830ff1298","9155a6eb40a747c830ff","dc94915540a747c830ff","9155d13940a747c830ff","9155c87747c830ff","91557e4747c830ff","915577ac47c830fff26e","915554cc47c830ff","9155d13954cc47c830ff","91557fc447c830ff","9155398647c830ff","cc3647c830ff9155","9155566247c830ff","dc94915547c830ff","915547c830ffe8af","915547c830fff26ee8af","afe847c830ffa6eb","afe8055847c830ff","afe8d13947c830ff","afe85e6047c830ff","afe82c7247c830ff","055847c830ffafe8a6eb","afe8d139397747c830ff","f26eafe847c830ff1298","afe8a6eb40a747c830ff","dc94afe840a747c830ff","afe8d13940a747c830ff","afe8c87747c830ff","afe87e4747c830ff","afe877ac47c830fff26e","afe854cc47c830ff","afe8d13954cc47c830ff","afe87fc447c830ff","afe8398647c830ff","cc3647c830ffafe8","afe8566247c830ff","dc94afe847c830ff","afe847c830ffe8af","afe847c830fff26ee8af","1a4547c830ffa6eb","1a45055847c830ff","1a45d13947c830ff","1a455e6047c830ff","1a452c7247c830ff","055847c830ff1a45a6eb","1a45d139397747c830ff","f26e1a4547c830ff1298","1a45a6eb40a747c830ff","dc941a4540a747c830ff","1a45d13940a747c830ff","1a45c87747c830ff","1a457e4747c830ff","1a4577ac47c830fff26e","1a4554cc47c830ff","1a45d13954cc47c830ff","1a457fc447c830ff","1a45398647c830ff","cc3647c830ff1a45","1a45566247c830ff","dc941a4547c830ff","1a4547c830ffe8af","1a4547c830fff26ee8af","5bea98b330ffa6eb","5bea055898b330ff","5bead13998b330ff","5bea5e6098b330ff","5bea2c7298b330ff","055898b330ff5beaa6eb","5bead139397798b330ff","f26e5bea98b330ff1298","9e6e50e098b330ff","8d1398b330ffa6eb","5beaa6eb40a798b330ff","dc945bea40a798b330ff","5bead13940a798b330ff","5beac87798b330ff","1298d405024298b330ff","f26e5484129898b330ff","5bea7e4798b330ff","5bea77ac98b330fff26e","5bea98b3c8ea30ff54cc","5bead13954cc98b330ff","5bea7fc498b330ff","5bea398698b330ff","cc3698b330ff5bea","5bea566298b330ff","dc945bea98b330ff","dc9498b330ffa6eb","5bea98b330ffe8af","5bea98b330fff26ee8af","d1393e76dc62","129850e098b330ff","a9145bea47c830ff1298","a9145484129847c830ff","5bea77ac47c830ffa914","5bea47c830ffa914e8af","5bea47c830ff4552","055847c830ff5bea4552","8d1347c830ff4552","5bea455240a747c830ff","dc9447c830ff4552","5bead139e00c47c830ff","915598b330ffa6eb","9155055898b330ff","9155d13998b330ff","91555e6098b330ff","91552c7298b330ff","055898b330ff9155a6eb","9155d139397798b330ff","f26e915598b330ff1298","9155a6eb40a798b330ff","dc94915540a798b330ff","9155d13940a798b330ff","9155c87798b330ff","91557e4798b330ff","915577ac98b330fff26e","915554cc98b330ff","915598b3c8ea30ff54cc","9155d13954cc98b330ff","91557fc498b330ff","9155398698b330ff","cc3698b330ff9155","9155566298b330ff","dc94915598b330ff","915598b330ffe8af","915598b330fff26ee8af","5bea98b3179130ffe00c","5bead139e00c98b330ff","a9145bea98b330ff1298","a9145484129898b330ff","5bea77ac98b330ffa914","5bea98b330ffa914e8af","5bea98b330ff4552","055898b330ff5bea4552","8d1398b330ff4552","5bea455240a798b330ff","dc9498b330ff4552","afe898b330ffa6eb","afe8055898b330ff","afe8d13998b330ff","afe85e6098b330ff","afe82c7298b330ff","055898b330ffafe8a6eb","afe8d139397798b330ff","f26eafe898b330ff1298","afe8a6eb40a798b330ff","dc94afe840a798b330ff","afe8d13940a798b330ff","afe8c87798b330ff","afe87e4798b330ff","afe877ac98b330fff26e","afe854cc98b330ff","afe898b3c8ea30ff54cc","afe8d13954cc98b330ff","afe87fc498b330ff","afe8398698b330ff","cc3698b330ffafe8","afe8566298b330ff","dc94afe898b330ff","afe898b330ffe8af","afe898b330fff26ee8af","1a4598b330ffa6eb","1a45055898b330ff","1a45d13998b330ff","1a455e6098b330ff","1a452c7298b330ff","055898b330ff1a45a6eb","1a45d139397798b330ff","f26e1a4598b330ff1298","1a45a6eb40a798b330ff","dc941a4540a798b330ff","1a45d13940a798b330ff","1a45c87798b330ff","1a457e4798b330ff","1a4577ac98b330fff26e","1a4554cc98b330ff","1a4598b3c8ea30ff54cc","1a45d13954cc98b330ff","1a457fc498b330ff","1a45398698b330ff","cc3698b330ff1a45","1a45566298b330ff","dc941a4598b330ff","1a4598b330ffe8af","1a4598b330fff26ee8af","ade847c830ffa6eb","ade8055847c830ff","ade8d13947c830ff","ade85e6047c830ff","ade82c7247c830ff","055847c830ffade8a6eb","ade8d139397747c830ff","f26eade847c830ff1298","ade8a6eb40a747c830ff","dc94ade840a747c830ff","ade8d13940a747c830ff","ade8c87747c830ff","ade87e4747c830ff","ade877ac47c830fff26e","ade847c8c8ea30ff54cc","ade8d13954cc47c830ff","ade87fc447c830ff","ade8398647c830ff","cc3647c830ffade8","ade8566247c830ff","dc94ade847c830ff","ade847c830ffe8af","ade847c830fff26ee8af","60f0e41e50e05bea30ff47c8c8ea","d2a4055847c830ff","48b3055847c830ff","72d2055847c830ff","72d283b1d40531cc","72d21aa047c830ff","8e79d40547c86053ac3c","12db47c89a434d16","d2a40558b8f830ff","bed50558b8f830ff","5dcd6b333977b8f830ff","c877055847c830fff26ee8af5bea","5bead139b8f8b0be3977","97c905585beae8af","97c90558d139e8af","055847c830ff52b4ec27","83b147c830ff83021298","83b147c830ff52b4ec27","f4821298a6eb47c81496","8e79d4057955","f9e45beaa6ebe8af","47fc83b147c830ff5bea","adeb52b4ec27","adeb72d2","217f8e79d40547c81496","f482371bd40531eda3f6","5bead40547c81496a3f6","5bead40547c81496e8aff26e","72d247c84467","a6eb47c8446783b11298","06eed40547c81496","06eed40531ed","adeb5bead139","adeb06ee","83b147c830ff1298","83b147c830ffa6eb","83b1adeb1298","5bea129847c84467","5bea1298adeb","9c49b8f830ff52b4ec27","9c49b8f830ff12985bea","83b112988e7947c830ff","9c4947c830ff1298","9c498e7947c830ff","9c49fbef47c830ff","371bd40547c81496a3f6","371bd40547c81496ce6f","5bea47c8446783b1e8af","5bea9c4947c830ff","8e79d40547c85f2a","8e79d40547c814965f2a","5beab8f844671298a6eb","57d324a047c830ff5bea","5bead405827e24a047c830ff","adebd0ac","289912db73cf66e7a6eb","a84047c830ffd0acd40543cb5bea","adeb57d3d0acd405ed100538","a427d0d33b9012db73cf9974","7ff912db73cf0d7aa6eb","5bea4c0f30ff","05584c0f30ff5bea","5bead1394c0f30ff","5bea4c0f47c830ff","5bea4c0f005930ff","5bea0b9e4c0f30ff","5bea02384c0f30ff","5bead13939774c0f30ff","d139d0a839774c0f30ff","d2a405580b9e4c0f30ff","d2a405584c0f47c830ff","d2a4055884bc4c0f30ff","5bea05582c724c0f30ff","5bea02384c0f005930ff","5bea40a74c0f30ff","5bea5e604c0f47c830ff","83b1dc804c0f30ff","83b14c0f30ffd3cbdc80","1be24d164c0f30ff","4d1650e04c0f30ff1be253d4","e04b12db4c0f30ff","dc9448724c0f30ff5bea","5beaa6eb2c724c0f30ff","9c3a2e68","784512db2e68643c","c7da67f612db","2c724c0f30ff342fd4050f60","91554c0f30ff","05584c0f30ff9155","9155d1394c0f30ff","91554c0f47c830ff","91554c0f005930ff","91550b9e4c0f30ff","915502384c0f30ff","9155d13939774c0f30ff","915505582c724c0f30ff","915502384c0f005930ff","915540a74c0f30ff","91555e604c0f47c830ff","dc9448724c0f30ff9155","9155a6eb2c724c0f30ff","5bead4e54c0f30ff","d2a40558d4e54c0f30ff","1a454c0f30ff","05584c0f30ff1a45","1a45d1394c0f30ff","1a454c0f47c830ff","1a454c0f005930ff","1a450b9e4c0f30ff","1a4502384c0f30ff","1a45d13939774c0f30ff","1a4505582c724c0f30ff","1a4502384c0f005930ff","1a4540a74c0f30ff","1a455e604c0f47c830ff","dc9448724c0f30ff1a45","1a45a6eb2c724c0f30ff","afe84c0f30ff","05584c0f30ffafe8","afe8d1394c0f30ff","afe84c0f47c830ff","afe84c0f005930ff","afe80b9e4c0f30ff","afe802384c0f30ff","afe8d13939774c0f30ff","afe805582c724c0f30ff","afe802384c0f005930ff","afe840a74c0f30ff","afe85e604c0f47c830ff","dc9448724c0f30ffafe8","afe8a6eb2c724c0f30ff","5bea937430ff","0558937430ff5bea","5bead139937430ff","5bea937447c830ff","5bea9374005930ff","5bead4e5937430ff","5bea0238937430ff","5bead1393977937430ff","d139d0a83977937430ff","d2a40558d4e5937430ff","d2a40558937447c830ff","d2a40558937430ffa6eb","d2a4055884bc937430ff","5bea05582c72937430ff","5bea02389374005930ff","5bea40a7937430ff","5bea5e60937447c830ff","83b1dc80937430ff","83b1937430ffd3cbdc80","1be24d16937430ff","4d1650e0937430ff1be253d4","e04b12db937430ff","dc944872937430ff5bea","5beaa6eb2c72937430ff","9c3a02c7","784512db02c7643c","5beaf5b44c0f30ff","5bea92054c0f47c830ff","5bea45522c724c0f30ff","9155937430ff","0558937430ff9155","9155d139937430ff","9155937447c830ff","91559374005930ff","91550b9e937430ff","91550238937430ff","9155d1393977937430ff","915505582c72937430ff","915502389374005930ff","915540a7937430ff","91555e60937447c830ff","dc944872937430ff9155","9155a6eb2c72937430ff","1a45937430ff","0558937430ff1a45","1a45d139937430ff","1a45937447c830ff","1a459374005930ff","1a450b9e937430ff","1a450238937430ff","1a45d1393977937430ff","1a4505582c72937430ff","1a4502389374005930ff","1a4540a7937430ff","1a455e60937447c830ff","dc944872937430ff1a45","1a45a6eb2c72937430ff","afe8937430ff","0558937430ffafe8","afe8d139937430ff","afe8937447c830ff","afe89374005930ff","afe80b9e937430ff","afe80238937430ff","afe8d1393977937430ff","afe805582c72937430ff","afe802389374005930ff","afe840a7937430ff","afe85e60937447c830ff","dc944872937430ffafe8","afe8a6eb2c72937430ff","ade805582c724c0f30ff","ade802384c0f005930ff","ade840a74c0f30ff","ade85e604c0f47c830ff","40a705584c0f30ffade8","12dbade84c0f30ff","dc94ade84c0f30ff","dc9448724c0f30ffade8","ade8a6eb2c724c0f30ff","d2a424580558","d139d0a83977cf2330ff","d2a405584c0f30ff","48b305584c0f30ff","72d205584c0f30ff","72d283b14c0f30ffd40531cc","72d21aa04c0f30ff","8e79d4054c0f6053ac3c","12db4c0f9a434d16","d2a40558d80230ff","bed50558d80230ff","5dcd6b333977d80230ff","c87705584c0f30fff26ee8af5bea","5bead139cd7b3977","cf7705585beae8af","cf770558d139e8af","05584c0f30ff52b4ec27","83b14c0f30ff83021298","83b14c0f30ff52b4ec27","f4821298a6eb827c","8e79d4054c0f1496","f04c5beaa6ebe8af","47fc83b14c0f30ff5bea","19fe52b4ec27","19fe72d2","f482371bd4056953a3f6","5bead4054c0f1496a3f6","5bead4054c0f1496e8aff26e","72d24c0f4467","a6eb4c0f446783b11298","06eed405827c","06eed4056953","7ff912dbc7da0d7a","c7da11519e6e","28998d13c7da1151","2c72ea824c0f5bea32ae","c3e55bead4056953","577e5bead405827ca3f6","47fc19fe850afba2","d2a4cf77eaf2","19fe5bead139","19fe06ee","83b14c0f30ff1298","83b14c0f30ffa6eb","83b119fe1298","5bea12984c0f4467","5bea1298f04cf26ee8af","5bea129819fe","9c49d80230ff52b4ec27","9c49d80230ff12985bea","83b112988e794c0f30ff","9c494c0f30ff1298","9c498e794c0f30ff","9c49fbef4c0f30ff","371bd4054c0f1496a3f6","371bd4054c0f1496ce6f","5bea4c0f446783b1e8af","5bea9c494c0f30ff","8e79d4054c0f5f2a","5bea0e8e44671298a6eb","d0ac50e04c0fa6eb","d0ac50e04c0f30ff5bea","778f50e04c0f30ffa6eb","778f50e04c0f30ff5bea","1be250e04c0f30ff5bea","1be250e04c0f30ffa6eb","5bea0b9e30ff","5bea39770b9e30ff","5bead1390b9e30ff","5bea0b9e005930ff","5bead13939770b9e30ff","5bea0b9e47c830ff","5bea7e470b9e30ff","092b0b9e30ff5bea","0b9e30ff5bea5484","5bea84bc0b9e30ff","05580b9e30ff5beaa6eb","5bead40502420b9e30ff","5bea3cd1ddf50b9e005930ff2c72","e8af5bea02380b9e30ff","f26e5bea2c720b9e30ff","5bea37f0","5bea35fca6eb","5bead40593d8a3f6","129850e00b9e30ffa6eb","f26e12980b9e30ff","8d130b9e30ff","9e6e0b9e30ffa6eb","8d134d160b9e30ff","1298d4052fbf","d2a405580b9e30ff","91550b9e30ff","915539770b9e30ff","9155d1390b9e30ff","91550b9e005930ff","9155d13939770b9e30ff","91550b9e47c830ff","91557e470b9e30ff","092b0b9e30ff9155","0b9e30ff91555484","915584bc0b9e30ff","05580b9e30ff9155a6eb","9155d40502420b9e30ff","91553cd1ddf50b9e005930ff2c72","e8af915502380b9e30ff","f26e91552c720b9e30ff","915537f0","915535fca6eb","9155d40593d8a3f6","05580b9e30ff5bea4552","5bea35fc4552","129850e00b9e30ff4552","9e6e0b9e30ff4552","5bead4e530ff","5bea3977d4e530ff","5bead139d4e530ff","5bead4e5005930ff","5bead1393977d4e530ff","5bead4e547c830ff","5bea7e47d4e530ff","092bd4e530ff5bea","d4e530ff5bea5484","5bea84bcd4e530ff","0558d4e530ff5beaa6eb","5bead4050242d4e530ff","5bea3cd1ddf5d4e5005930ff2c72","e8af5bea0238d4e530ff","f26e5bea2c72d4e530ff","129850e0d4e530ffa6eb","f26e1298d4e530ff","8d13d4e530ff","9e6ed4e530ffa6eb","8d134d16d4e530ff","1298d4058a88","1a45d4e530ff","1a453977d4e530ff","1a45d139d4e530ff","1a45d4e5005930ff","1a45d1393977d4e530ff","1a45d4e547c830ff","1a457e47d4e530ff","092bd4e530ff1a45","d4e530ff1a455484","1a4584bcd4e530ff","0558d4e530ff1a45a6eb","1a45d4050242d4e530ff","1a453cd1ddf5d4e5005930ff2c72","e8af1a450238d4e530ff","f26e1a452c72d4e530ff","afe80b9e30ff","afe839770b9e30ff","afe8d1390b9e30ff","afe80b9e005930ff","afe8d13939770b9e30ff","afe80b9e47c830ff","afe87e470b9e30ff","092b0b9e30ffafe8","0b9e30ffafe85484","afe884bc0b9e30ff","05580b9e30ffafe8a6eb","afe8d40502420b9e30ff","afe83cd1ddf50b9e005930ff2c72","e8afafe802380b9e30ff","f26eafe82c720b9e30ff","afe837f0","afe835fca6eb","afe8d40593d8a3f6","9155d4e530ff","91553977d4e530ff","9155d139d4e530ff","9155d4e5005930ff","9155d1393977d4e530ff","9155d4e547c830ff","91557e47d4e530ff","092bd4e530ff9155","d4e530ff91555484","915584bcd4e530ff","0558d4e530ff9155a6eb","9155d4050242d4e530ff","91553cd1ddf5d4e5005930ff2c72","e8af91550238d4e530ff","f26e91552c72d4e530ff","1a450b9e30ff","1a4539770b9e30ff","1a45d1390b9e30ff","1a450b9e005930ff","1a45d13939770b9e30ff","1a450b9e47c830ff","1a457e470b9e30ff","092b0b9e30ff1a45","0b9e30ff1a455484","1a4584bc0b9e30ff","05580b9e30ff1a45a6eb","1a45d40502420b9e30ff","1a453cd1ddf50b9e005930ff2c72","e8af1a4502380b9e30ff","f26e1a452c720b9e30ff","1a4537f0","1a4535fca6eb","1a45d40593d8a3f6","afe8d4e530ff","afe83977d4e530ff","afe8d139d4e530ff","afe8d4e5005930ff","afe8d1393977d4e530ff","afe8d4e547c830ff","afe87e47d4e530ff","092bd4e530ffafe8","d4e530ffafe85484","afe884bcd4e530ff","0558d4e530ffafe8a6eb","afe8d4050242d4e530ff","afe83cd1ddf5d4e5005930ff2c72","e8afafe80238d4e530ff","f26eafe82c72d4e530ff","48b305580b9e30ff","72d205580b9e30ff","72d283b10b9e30ffd40531cc","72d21aa00b9e30ff","8e79d4050b9e6053ac3c","12db0b9e9a434d16","d2a405580e8e30ff","bed505580e8e30ff","5dcd6b3339770e8e30ff","c87705580b9e30fff26ee8af5bea","5bead13937f03977","35fc05585beae8af","35fc0558d139e8af","05580b9e30ff52b4ec27","83b10b9e30ff83021298","83b10b9e30ff52b4ec27","f4821298a6eb0b9e1496","8e79d4050b9e1496","0b9e44675beaa6ebe8af","47fc83b10b9e30ff5bea","105152b4ec27","105172d2","f482371bd40593d8a3f6","5bead4050b9e1496a3f6","5bead4050b9e1496e8aff26e","72d20b9e4467","a6eb0b9e446783b11298","06eed4050b9e1496","06eed40593d8","10515bead139","105106ee","83b10b9e30ff1298","83b10b9e30ffa6eb","83b110511298","5bea12980b9e4467","5bea12981051","9c490e8e30ff52b4ec27","9c490e8e30ff12985bea","83b112988e790b9e30ff","9c490b9e30ff1298","9c498e790b9e30ff","9c49fbef0b9e30ff","371bd4050b9e1496a3f6","371bd4050b9e1496ce6f","5bea0b9e446783b1e8af","5bea9c490b9e30ff","105183b179c05cf72fc0","105179c06da5dc80","ce75f4ce6da5dc80","ce75f4ce5cf72fc0","83b10b9e30ff74d92fc0","83b150e00b9e30ff74d92fc0","055835fc2c4a2fc0","f3743d375bea","10513d37a6eb","5bea0558c32d30ff","a6eb1298c32d30ff","47fc83b1c32d30ff","c5f51a8a","12db1bd1","c5f574d9","83b111d030ff5bea","83b111d030ff1298f26e","1298d4053733","9117dc94","2f4bdc94c32d30ff","83b1dc80c32d30ff","5bead139c32d30ff","9b80eb4ac32d30ff","5beacc3611d030ff","83b111d030ff52b4ec27","c5f518fa15f3","c5f5dff69f82","1bd11151dc0a","2d250558c32d30ff","5beae8afd4053733","f63cbe4d","f63cd0aca6eb","d1393e760558c32d30ff","b759d1393e763733","dc94129850e0c32d30ff","dc945bead405dc82c32d30ff","d48a092bd0ac","5bead1395e60a0e2","4a8604ca0558","91550558c32d30ff","83b111d030ff9155","9155d139c32d30ff","9155cc3611d030ff","9155e8afd4053733","dc949155d405dc82c32d30ff","9155d1395e60a0e2","5bea05581c5630ff","a6eb12981c5630ff","47fc83b11c5630ff","2f4bdc941c5630ff","83b1dc801c5630ff","5bead1391c5630ff","9b80eb4a1c5630ff","2d2505581c5630ff","da93be4d","da93d0aca6eb","d1393e7605581c5630ff","dc94129850e01c5630ff","dc945bead405dc821c5630ff","5bead1395e6005d5","4a86a1fd0558","c02f1a8a","12db1e0b","c02f74d9","83b10c3d30ff5bea","83b10c3d30ff1298f26e","1298d405a423","0207dc94","5beacc360c3d30ff","83b10c3d30ff52b4ec27","c02f18fa15f3","c02fdff69f82","1e0b1151dc0a","5beae8afd405a423","b759d1393e76a423","479a092bd0ac","c38bdc94c32d30ff","1bd111517919","3e150558c32d30ff","0429dc94c32d30ff","afe80558c32d30ff","83b111d030ffafe8","afe8d139c32d30ff","afe8cc3611d030ff","afe8e8afd4053733","dc94afe8d405dc82c32d30ff","afe8d1395e60a0e2","1a450558c32d30ff","83b111d030ff1a45","1a45d139c32d30ff","1a45cc3611d030ff","1a45e8afd4053733","dc941a45d405dc82c32d30ff","1a45d1395e60a0e2","915505581c5630ff","9155d1391c5630ff","dc949155d405dc821c5630ff","9155d1395e6005d5","83b10c3d30ff9155","9155cc360c3d30ff","9155e8afd405a423","afe805581c5630ff","afe8d1391c5630ff","dc94afe8d405dc821c5630ff","afe8d1395e6005d5","1a4505581c5630ff","1a45d1391c5630ff","dc941a45d405dc821c5630ff","1a45d1395e6005d5","d2a40558c32d30ff","48b30558c32d30ff","72d20558c32d30ff","72d283b1c32d30ffd40531cc","72d21aa0c32d30ff","8e79d405c32d6053ac3c","12dbc32d9a434d16","d2a40558d0a830ff","bed50558d0a830ff","5dcd6b333977d0a830ff","c8770558c32d30fff26ee8af5bea","5bead139931b3977","911705585beae8af","91170558d139e8af","0558c32d30ff52b4ec27","83b1c32d30ff83021298","83b1c32d30ff52b4ec27","f4821298a6ebc32d1496","8e79d405c32d1496","c32d44675beaa6ebe8af","c5f552b4ec27","c5f572d2","f482371bd4053733a3f6","5bead405c32d1496a3f6","5bead405c32d1496e8aff26e","72d2c32d4467","a6ebc32d446783b11298","06eed405c32d1496","06eed4053733","2818166c9843","89f4ce9b984350e00978","2818166ccfc05f3fd316","9155d405c32d1496129c8894","f63ccc361a8a78f1","f16228180291","f63ce335f09c2fc0","d8cbfdb71298a42b14d0","d8cbc32d872cf26ee8af","b152d40504cac7454552","a2ee9d8b","c32db2b2dc94342f9853e299850af20b","d8cbf63ca1ec47fcd139","0cbc90bc3e7604ca2c72","c5f55bead139","c5f506ee","684a52b4ec27","83b1c32d30ff1298","83b1c32d30ffa6eb","83b1c5f51298","5bea1298c32d4467","5bea1298c5f5","9c49d48d52b4ec27","9c49d0a830ff12985bea","83b112988e79c32d30ff","9c49c32d30ff1298","9c498e79c32d30ff","9c49fbefc32d30ff","371bd405c32d1496a3f6","371bd405c32d1496ce6f","5beac32d446783b1e8af","5bea9c49c32d30ff","5bead0a844671298a6eb","28184d169c3a55f7e4e5c48b","095c1be25bea","e1a6095ce8905cf7","89f4ce9b1be250e067ce","28184d16d7845f3ff523","5bead4051496a3f6","f63c1a8a37840ea9","12db281812cd","f63c74d942e22fc0","83b1f63c5bea4552","83b1f63c1298f26e","1298d40504ca129cf69c","a2eedc94342f","5beacc36f63c","83b1f63c52b4ec27","f63c18fa15f3d1398139","f63cdff69f82","1e0b643cdc0a","5beae8afd40504ca5f2a","b759d1393e7604ca1e12","e773092bd0ac","5bea055884bc30ff","055884bc30ff5bead139","5c0883b184bc30ff5bea","1298a6eb84bc30ff","5bea62f75dd084bc","84bcb2b2e41e5bea","81395bead405eb8d","50e084bc30ffd0ac","84bc30ff342fa6eb","5bea2c7284bc30ff","5beae8af84bc30ff","5beaa6eb2c7284bc30ff","5beab5e9","fbcfa6eb5bea","5bea3b8a84bc30ff","7fc484bc30ff5bea","5bead13984bc","5bea84bc30ffd139","5bea4adf84bc30ff","8302129850e084bca6eb","8302129850e084bc5bea","1298d4055f2a84bc","5bea5e6084bc30ff","40a75bea4c0f84bc30ff","84bc30ff408eec27a6eb","5beaa6eb84bcb0be","5beab0a384bc","12db25eb848a","5bea397784bc30ff","5bead405735584bc30ff","5bea83b184bc30ff","5bea11c10558","5beafbcf83b1","5bead40511c1a3f6","5bead40596ef7355","5bea11c1e41e","5bead40511c1a5af","5bead40596efad0a","1298a6ebfbcf","1298a6ebd40511c1","1298a6ebd405a3f684bc30ff","83b1d0ac50e084bc30ff","62f7d0ac50e084bc30ff","7fc484bc30ff50e05bea","83b17fc484bc30ffd0ac","62f77fc484bc30ff52b4ec27","5bead405d75811c1","5bea25fffbcf","5bead75811c1","54cc50e05beab7e5","5beaa6ebb7e5","5beaa6eb84bc30ff","5bea40a7b7e5","40a7b7e550e05bea","1298a6eb40a784bc30ff","a6eb3b845e6084bc30ff","a6eb12983ab884bc30ff","a6eb129850e084bc30ff","a6eb3b8450e084bc30ff","5beaa6eb80a63b8450e084bc30ff","b7e5342fa6eb","fbcfd0aca6eb","fbcfc3dd74d998532b195bea","fbcfc3dd74d998532b19a6eb","f504c3dd74d998532b19","f504c3ddd405f0d25bea","f504c3ddd0acd405f0d2","7ff912db25eb0d7a643c","7ff9d0acd40511c1f7dba6eb","81395beab7e5","81395bead40596ef","81395bead40511c1","f278d0ac","4a8638a2","f2788d13","38a29e6e","188738a2","5bea3ab8129850e084bc30ff","a6eb3ab8129850e084bc30ff","5bea7f453b8484bc30ff","a6eb7f453b8484bc30ff","5bea3ab81298b7e5","a6eb3ab81298b7e5","5bead40511c1d4ac","5bea2e51029111c1","cc3684bc30ffd0ac50e08302c3ea","5bea0558ea8230ff","0558ea8230ff5bead139","5c0883b1ea8230ff5bea","1298a6ebea8230ff","5bea62f75dd0ea82","ea82b2b2e41e5bea","81395bead4054ade","50e0ea8230ffd0ac","ea8230ff342fa6eb","5bea2c72ea8230ff","5beae8afea8230ff","5beaa6eb2c72ea8230ff","5bea68fc","55f3a6eb5bea","5bea3b8aea8230ff","7fc4ea8230ff5bea","5bead139ea82","5beaea8230ffd139","5bea4adfea8230ff","8302129850e0ea82a6eb","8302129850e0ea825bea","1298d4055f2aea82","5bea5e60ea8230ff","40a75bea4c0fea8230ff","ea8230ff408eec27a6eb","5beaa6ebea82b0be","5beab0a3ea82","12db8bd7848a","5bea3977ea8230ff","5bead4057355ea8230ff","5bea83b1ea8230ff","5beaccd40558","5bea55f383b1","5bead405ccd4a3f6","5bead405795c7355","1298a6eb55f3","1298a6ebd405ccd4","1298a6ebd405a3f6ea8230ff","83b1d0ac50e0ea8230ff","62f7d0ac50e0ea8230ff","7fc4ea8230ff50e05bea","83b17fc4ea8230ffd0ac","62f77fc4ea8230ff52b4ec27","5bead405d758ccd4","5bea25ff55f3","5bead758ccd4","54cc50e05bea6af0","5beaa6eb6af0","5beaa6ebea8230ff","5bea40a76af0","40a76af050e05bea","1298a6eb40a7ea8230ff","a6eb3b845e60ea8230ff","a6eb12983ab8ea8230ff","a6eb129850e0ea8230ff","a6eb3b8450e0ea8230ff","5beaa6eb80a63b8450e0ea8230ff","6af0342fa6eb","55f3d0aca6eb","55f3c3dd74d998532b195bea","55f3c3dd74d998532b19a6eb","f890c3dd74d998532b19","f890c3ddd405f0d25bea","f890c3ddd0acd405f0d2","7ff912db8bd70d7a643c","7ff9d0acd405ccd4f7dba6eb","81395bea6af0","81395bead405795c","81395bead405ccd4","2f6dd0ac","4a86d711","2f6d8d13","d7119e6e","1887d711","37d87ca5a02fac64","813990bc3e76ad13b6fb","47fc7ca5f26e5484","b0877ca547fcd139bc2a","bc2a7ca5a02fac64","493ed1397ca5a02fac64","493ea6eb7ca5a02fac64","d1399c05129cfa4c","d1393e76129cfa4c","d13973a8da33a02f","5bead405e019","5bead405129cd5e58894","5bea4822e042a3f6f26e","bc2aade8d405e019","e713da33a02fcfa5","5bea0558ad1330ff","0558ad1330ff5bead139","5c0883b1ad1330ff5bea","1298a6ebad1330ff","5bea62f75dd0ad13","ad13b2b2e41e5bea","81395bead40586ea","50e0ad1330ffd0ac","ad1330ff342fa6eb","5bea2c72ad1330ff","5beae8afad1330ff","5beaa6eb2c72ad1330ff","5bea446a","303ca6eb5bea","5bea3b8aad1330ff","7fc4ad1330ff5bea","5bead139ad13","5beaad1330ffd139","5bea4adfad1330ff","8302129850e0ad13a6eb","8302129850e0ad135bea","1298d4055f2aad13","5bea5e60ad1330ff","40a75bea4c0fad1330ff","ad1330ff408eec27a6eb","5beaa6ebad13b0be","5beab0a3ad13","12dbee18848a","5bea3977ad1330ff","5bead4057355ad1330ff","5bea83b1ad1330ff","5beae0420558","5bea303c83b1","5bead405e042a3f6","5bead405420e7355","1298a6eb303c","1298a6ebd405e042","1298a6ebd405a3f6ad1330ff","83b1d0ac50e0ad1330ff","62f7d0ac50e0ad1330ff","7fc4ad1330ff50e05bea","83b17fc4ad1330ffd0ac","62f77fc4ad1330ff52b4ec27","5bead405d758e042","5bea25ff303c","5bead758e042","54cc50e05bea4666","5beaa6eb4666","5beaa6ebad1330ff","a6eb129850e0ad1330ff","a6eb3b8450e0ad1330ff","5beaa6eb80a63b8450e0ad1330ff","4666342fa6eb","303cd0aca6eb","303cc3dd74d998532b195bea","303cc3dd74d998532b19a6eb","fba8c3dd74d998532b19","fba8c3ddd405f0d25bea","fba8c3ddd0acd405f0d2","7ff912dbee180d7a643c","7ff9d0acd405e042f7dba6eb","81395bea4666","81395bead405420e","81395bead405e042","03fbd0ac","4a86ec43","03fb8d13","ec439e6e","1887ec43","5bea3ab8129850e0ad1330ff","a6eb3ab8129850e0ad1330ff","5bea7f453b84ad1330ff","a6eb7f453b84ad1330ff","5bea3ab812984666","a6eb3ab812984666","5bead405e042d4ac","5bea2e510291e042","cc36ad1330ffd0ac50e08302c3ea","5bea54cc","f26e5beab0a3","5beaa6ebb0a3","5beac37eb0a3","5beab0a3e8af","54cc5bea5484","dff65beaf26ee8af","81395beab0a3","1298dcc52ad4","1298b0a3a6eb","1298c37eb0a3","5bea129854cc","f26e1298b0a3","1298d139b0a3","1298b0a3e8af","1298b0a35484","54cc408eec27","5bea1298a6ebb0a3","1298b0a3f26ee8af","f26e54841298b0a3","c17254cc1298a6eb","8302129854cc","ee151151850a1298","f26ea6eb129854cc","5beacfba54cc","54cccfbaa6eb","5beaa6ebcfba54cc","2f4b54cc5bea","5bead40523b9","1298d8c2b0a3","5bead8c2b0a3","5beae00c","f26e5bea9ddf","5beaa6eb9ddf","5beac37e9ddf","5bea9ddfe8af","e00c5bea5484","6b365beaf26ee8af","2a68e00c5bea","81395bea9ddf","1298dcc5fbe1","12989ddfa6eb","1298c37e9ddf","5bea1298e00c","f26e12989ddf","1298d1399ddf","12989ddfe8af","12989ddf5484","e00c408eec27","5bea1298a6eb9ddf","12989ddff26ee8af","f26e548412989ddf","c172e00c1298a6eb","83021298e00c","ee15a591850a1298","f26ea6eb1298e00c","5beacfbae00c","e00ccfbaa6eb","5beaa6ebcfbae00c","2f4be00c5bea","1298d8c29ddf","5bead8c29ddf","5bea7ca5b0a3","12987ca5b0a3","7ea954cc1298a6eb","5bea4552b0a3","1298b0a34552","5bea12984552b0a3","c17254cc12984552","f26e4552129854cc","54cccfba4552","5bea4552cfba54cc","5bea9d82","f26e5bea8481","5beaa6eb8481","5beac37e8481","5bea8481e8af","9d825bea5484","16b85beaf26ee8af","2a689d825bea","81395bea8481","1298dcc521d2","12988481a6eb","1298c37e8481","5bea12989d82","f26e12988481","1298d1398481","12988481e8af","129884815484","9d82408eec27","5bea1298a6eb8481","12988481f26ee8af","f26e548412988481","c1729d821298a6eb","830212989d82","ee15d81f850a1298","f26ea6eb12989d82","5beacfba9d82","9d82cfbaa6eb","5beaa6ebcfba9d82","2f4b9d825bea","1298d8c28481","5bead8c28481","129807a4b0a3","5bea07a4b0a3","9155c37eb0a3","9155b0a3e8af","54cc91555484","dff69155f26ee8af","f26e5484915554cc","81399155b0a3","9155129854cc","91551298a6ebb0a3","9155cfba54cc","9155a6ebcfba54cc","2f4b54cc9155","9155d40523b9","9155d8c2b0a3","5bea7ca59ddf","12987ca59ddf","7ea9e00c1298a6eb","9155e00c","f26e91559ddf","9155a6eb9ddf","9155c37e9ddf","91559ddfe8af","e00c91555484","6b369155f26ee8af","2a68e00c9155","813991559ddf","91551298e00c","91551298a6eb9ddf","9155cfbae00c","9155a6ebcfbae00c","2f4be00c9155","9155d8c29ddf","ade854cc","f26eade8b0a3","ade8a6ebb0a3","ade8c37eb0a3","ade8b0a3e8af","54ccade85484","dff6ade8f26ee8af","8139ade8b0a3","ade8129854cc","ade81298a6ebb0a3","ade8cfba54cc","ade8a6ebcfba54cc","2f4b54ccade8","ade8d40523b9","ade8d8c2b0a3","e71383b15bea","5bead405c7aa7355","5beaa6eba6dd0558","5bead139a4d13977","5beae8afa6dd0558","5beaa1fda4d13977","39374d169c3a5bea","dc945beaa6dd4872","5beaa6ebe340092b","f26e5beae340092b","1298d405129ca3f6","1298d4052034dc82","1298a6ebe340092b","1298a4d13977d01da4d19f0b","bec6182a","5beabec6d8c2","bec62c72","5beabec6d4050242","5beaa2a5b9a9","5bea6ad67cfa","5beaa6eba2a5b9a9","5beaa6eb6ad67cfa","5bea40abd01da2a5b9a9","5bea5e0ad01d6ad67cfa","5bead405d4d6","e713d8cb5bea","5bead405c7aa74ed","e71383b19155","9155d405c7aa7355","9155a6eba6dd0558","9155d139a4d13977","9155e8afa6dd0558","9155a1fda4d13977","39374d169c3a9155","dc949155a6dd4872","9155a6ebe340092b","f26e9155e340092b","9155bec6d8c2","9155bec6d4050242","9155a2a5b9a9","91556ad67cfa","9155a6eba2a5b9a9","9155a6eb6ad67cfa","915540abd01da2a5b9a9","91555e0ad01d6ad67cfa","915508f4","9155d405d4d6","9155d4051fedf26e","9155d4051fed7407","bec6f3e6","5beabec6d405ab56","5beae8acb9a9","5bea6b8f7cfa","5beaa6ebe8acb9a9","5beaa6eb6b8f7cfa","5bea40abd01de8acb9a9","5bea5e0ad01d6b8f7cfa","3bc4750fd0ac","3bc4750f74d9","bec67708","5beabec6d40505fa","5beab1f5b9a9","5bea41b47cfa","5beaa6ebb1f5b9a9","5beaa6eb41b47cfa","5bea40abd01db1f5b9a9","5bea5e0ad01d41b47cfa","3bc4f1e1d0ac","3bc4f1e174d9","e713d8cb9155","9155d405c7aa74ed","9155a6eba6dd5e22","9155d139a4d1620d","9155e8afa6dd5e22","9155a1fda4d1620d","3937166c9c3a9155","91551298d405129c8894","9155bec6d405ab56","9155e8acb9a9","91556b8f7cfa","9155a6ebe8acb9a9","9155a6eb6b8f7cfa","915540abd01de8acb9a9","91555e0ad01d6b8f7cfa","d2a477ac0558","d139a4d1d0a83977","d139a4d1d0a89f0b","d2a42f4b8d35d139","02a06077f2295bea","fb0fd2a42c72","f2295bead139","02a0ddeaa6dd0558","02a0ddeaa6dd4872","d1392270d221","46688a511298","d2a4a6dd4872dc94d139","ec27d4057cea","8e79d405d4d6","371bd4050242","371bd4055c27dc82","48722c725bea","8c6a2c728e79","48722f4b5beaf26e","48722f4bf26e","48722f4ba6eb","d13948722c72","72d248722c72","6ad6092b5bea","6ad6092b72d2","5bea6ad6092ba6eb","8e79d4050242","48b3d4050242","d139d0a87e47cea6","d139d0a82d477e47cea6","7ff912dbc60e0d7a","9f5312db0d7a","40ab12dbc60eb9a9","1298d8c25bea","182a850a5bea7c24a6eb","e1a6095c1be2f26e","1298d4052034bafc","856ea1ff4a865bea","1298d405461a09f1","06741be29155f26e","b493095c56345da6","fdfe2d25b656","dc94f0ae","dc0a87fd","b0f7095cf26e","a6eb2d25095c","4552af65095c","f0aed01d98962b83","332cd01d7b2f3b232b83","f0aed01df1a1acf60411","9896d01d332c643c","1ffa5130e0e3d01d8ef25f3ff523","513072db2b83","513072db0d7a","d40549adcf5aa4e3","d40549ad337bd01dcf5aac50","e5811420cf5aac50","3167035fe41ed40559dd","4a39043ae41e","40ab9896d01df716b9a9","40ab9896d01df7165673","5bea4e60","5bead405d031","f26e5bead405dc71","5beaa6ebd405d031","5bea3cd1d405d031","5bea9c9dd405d031","5bead831d405d031","5bea8bb2d405d031","12989c9dd405d031a6eb","f26ea6eb12989c9dd405d031","5beaa6eb4e60","4e605beae8af","1298e41ed405ddf6a6eb","0a6bf26e5484","4e60a6eb","91554e60","9155d405d031","f26e9155d405dc71","9155a6ebd405d031","91553cd1d405d031","91559c9dd405d031","9155d831d405d031","91558bb2d405d031","f26eaf36","af36f26ee8af","af36f26e5484","9155a6eb4e60","4e609155e8af","af36d405eadbd031","5bead4059da1","5beaa6ebd4059da1","5bea1298d4059da1","5bea3cd1d4059da1","5bea9c9dd4059da1","5bead831d4059da1","5bea8bb2d4059da1","12989c9dd4059da1a6eb","f26ea6eb12989c9dd4059da1","5bea215e","f26eab97","ab97f26ee8af","ab97f26e5484","5beaa6eb215e","215e5beae8af","215ea6eb","ab97d405eadbd031","9155215e","f26e6128","6128f26ee8af","6128f26e5484","9155a6eb215e","215e9155e8af","6128d405eadbd031","9155d4059da1","f26e9155d4052761","9155a6ebd4059da1","91551298d4059da1","91553cd1d4059da1","91559c9dd4059da1","9155d831d4059da1","91558bb2d4059da1","af36d405eadb9da1","4e605bead140","8d687533848afb04","8d6874d998533131","e41e24d61be28614d139","14e9701bc00e","5bead40573a3","5beaee8fd405d031","dc0bd4055fba5894","5bead405cbd15894","00fd162684375bea","784512dbce5aa6eb","7845c4a9ce5aa6eb","78458d13f24ece5a","c00e12db179c00fd","32d312dbceaea6eb","32d3c4a9f24e8437a6eb","0009d0acd405819b","ac50e8902cadd405ddf6a6eb","1298d405819b5bea","12988b33dcc5b18c","1298dcc5bd66d139","5beadcc5bd66a6eb","5bea12985894d01d9c9d","5bea12985894d40579f0","d67c5894d4055fa7","d67cf3d7d01dabde","1f184e60","5bea12988b33d01deecb","5bea4a868b33d01deecb","a6eb3b84d405d031","a6eb12985894d40579f0","e41e408eec27d405d031","5a98408eec27d405ad0a","d132408eec27d405d031","d67c892ad405d031","6873d67cd40502db","6873d67cd40541b7","a6eb418205e7","9cb51a45e8af","bd785bead67c","bd785bea05e7","1298d405b49fa6eb","12988b33d405b49fa6eb","e0cc162672665beaa6eb","d67c8b33d405b49f","5beaa6ebc0d4","0a6bf26e1298e8af","5beadcc538db","61d912dbceaea6eb","61d912dbc00ea6eb","aaa812dbceaea6eb","000974d92fc0aaa8a6eb","4a868b33d405aaa8a6eb","9b588bb2d405ec5a","4a868bb2d4057a59a6eb","784512dbaa2b","5bead4058943","5bead405745b","055bd4058943","055bd405745b","1298d4053c96","1298d4051fed","1298e150","129883a81fed","129883a83c96","5bead4051fed","5bead4053c96","1a45d4053c96","1a45d4051fed","1164342f","7410c4a9","741012db","7410c437","00fdc4a9","e0ccc4a9","8b331be281ef","d0acd4050eae","5bead4052b21","14e912db","5bea14e9","89b8d4058790","89b8d405107c","d0acd4058790","d0acd405107c","3c56c437","3c5612db","3c56c4a9","00fd12db","00fd1887","00fdc437","e0cc12db","e0ccc437","1ca84511","1ca89c3a","1ca84bcb","1ca81be2","c4a98ecc","c4a9a63d","12dba63d","12db8ecc","5bead405056e","9155d40501ac","915501ac","5bead405ddf6","5bea00fd","5bead40501ac","5bea01ac","5bea9c9d7c09","5bea9c9dd40502db","12db5e35","c4a95e35","62f78364","56aad4059da1","56aad405d031","b6cedcc5bfae","1298dcc5bfae","1298d405bfae","cdaed405658a","cdaed405350e","f69e2704","f69e4c9b","f69e5fae","f69ecf0b","f69ece5a","d405658a1a45","a67a5bea","b8518655","a67a1a45","8a51cd7f","dc80c389","dc809109","dc8097de","e56ec389","e56e9109","e56e97de","e56eef85","e56e206c","38305f3f99e1","dc80ef85","1298d40523c6","1298d405ddf6","1298d405b9e3","1298d4050eae","1298d4058180","1298d405dafa","2fc05979","2fc08614","2fc0244d","2fc07f37","52f102db","cd7fdcc55559","a67a1298","a67ac264","e56e0ec8","dc800ec8","a67af2f4","a67a41bd","8e62d405","f31cd405","b85154b4","4fcb2fc0","84e3d405f73f","1298d4059ef3","8d13ce5a","8d135fae","8d132122","8d135979","8d130271","8d130079","5f1d8d13","8d135f1d","5e4c8d13","8d135e4c","cd7fd405","a534c437","b851c437","a8e8c437","cedec437","0271c437","d01d830e","d01d9b57","7c41b93e","0ccfcd7f","7c1ca67a","e0ccd171","8754850a","8754d405","49f3d405","8c00667d","f46049f3","4fcbd37c","bce7ff98","06b0d405dafa","06b0d4058180","06b0d40523c6","06b0d405cbec","06b0d405c959","06b0d405f73f","06b0d405f087","06b0d4059ef3","06b0d405128c","06b0d405b9e3","06b0d4050eae","62f7d01d00fd","687ccd7f","5e4cc437","5f1dc437","7c41cd7f","a8e850e0","e3aa50e0","c714cd7f","79136909","0ccf0fd9","e3aa81c5","d405ccdc","0ccf6909","6909d405","64adcd7f","342fd40547d2","342fd4050eae","342fd405b9e3","342fd405c959","342fd40523c6","342fd405cbec","342fd405aaa8","add198535fae","add198532122","add198535979","add198534837","add19853aaa8","add198536625","add198538614","add198531f7f","3d8d5fae","bb644d27","3d8d5979","bb64604f","1298d405cbec","1298d405107c","4e7d2fc0","8d095a42","2fc0eecb","2fc0c309","74d99853198e","74d99853244d","74d9985342f4","74d998537f37","74d998535fae","74d998532122","74d998535979","74d99853c309","74d99853eecb","74d998534837","defb07f1","07f15979","07f18614","07f15fae","07f12122","687c5f1d","687c5e4c","0fc87f37","0fc8244d","0fc842f4","0fc8198e","0fc8ce5a","648ed405b9e3","648ed405ddf6","648ed4050eae","648ed405c959","648ed405cbec","1d61d405107c","687c6909","5a425979","5a425fae","5a422122","5a421f7f","5a428614","5a424837","5a42c309","5a42eecb","5a42aaa8","a534bb95","b851bb95","a534c4a9","b851c4a9","9996c4a9","cedec4a9","aaa8c4a9","8d098e29","d40501c1","0d5ca534","0978d4050eae","01f87f37","01f8244d","5293d405107c","5293d405b9e3","5293d40523c6","5293d405aaa8","5293d405c959","5293d405cbec","5293d405469c","342fd4057a59","342fd4059ef3","342fd405128c","342fd40502db","8f4ad405b9e3","8f4ad4050eae","8f4ad40523c6","1298bd1f","1298ee8f","49f312db","1dff12db","36251be2","49f3c4a9","1dffc4a9","36259c3a","12982f4e","ec27d405658a","1298d405658a","1298d405350e","1298d4058a5e","73ded405b9e3","73ded4050eae","73ded40523c6","73ded405350e","73ded405c959","73ded405cbec","73ded405107c","73ded4059ef3","73ded405658a","05dbd405b9e3","ec27d405cbec","ec27d405c959","ec27d405107c","ec27d405aaa8","ec27d405ddf6","ec27d405868c","ec27d4050eae","ec27d40502db","ec27d405b9e3","ec27d405128c","ec27d40523c6","ec27d4059cd4","ec27d4059ef3","dc80206c","848a206c","dc805ae2","dc80c309","dc80aaa8","c5f5a534","c5f57410","c5f500fd","c5f53c56","c5f5aaa8","c5f5b851","b152d4050eae","b152d405b9e3","b152d405b49f","b152d405ddf6","b152d4050fe7","b152d405107c","b152d405cbec","b152d405c959","b152d405aaa8","a53412db","fdcc12db","cede12db","027112db","4fcba8e8","d0acd405b9e3","d0acd40523c6","d0acd405ddf6","d0acd4050fe7","d0acd405128c","d0acd405c959","d0acd405aaa8","0d52f985","0d5273d8","d9e2d40523c6","d9e2d405ddf6","d9e2d4050eae","d9e2d405b9e3","d9e2d405107c","d9e2d405c959","d9e2d405cbec","ec27d4058180","ec27d405dafa","ec27d4050fe7","2130b609","d405ce28","aa9b","c638ddf6","8cbfff98","ff985979","ff981f7f","ff983131","ff985fae","ff982122","ff984837","ff98eecb","ff98c309","3f5fbb95","e3aabb95","a8e8bb95","a67a3b84","398fd4050eae","a67a2453","a67a9173","4a86d405defb","4a86d405ddf6","4a86d4050eae","4a86d405b9e3","4a86d405350e","4a86d405107c","4a86d405cbec","4a86d405c959","4a86d405aaa8","4a86d405128c","4a86d40523c6","4a86d4050fe7","4a86d4058d09","4a86d4050055","4a86d405de02","1298d405de02","1298d405d9ba","a0e3d4050eae","a5345b82","cf1ad01d","49f3d01d","cf1ad405","1dffd01d","3625d01d","1dffd405","3625d405","06b0d405ddf6","492fd405107c","4e7d5550","24335a42","e7472fc0","4e7dc866","2a16c866","a67ad405","2c5ad405b9e3","8de4ce03","9d648de4","ac718de4","9d6495a7","ac7195a7","4cbd95a7","6e589d64","a6ebfd87","9d644cbd","4cbd850ab647","f20daead","f20d7aa5","0d1aca82","0d1a1a2bd59a","0d1ad59a","317f9d64","d59aa6eb","4cbdf26e","9d64f26e","12cb1a45","1a457a9effb1","1a45a6eb7a9effb1","a67a8655","86557a9effb1","1a4512cb","12cb8655","1a452b2e7a9effb1","1a4542307a9effb1","1a45a0f57a9effb1","1a454d987a9effb1","1a454d987a9eb851","1a45bb437a9effb1","865542307a9effb1","12cbade8","4fb08655a6ebb851","12cb1a2d8ce6","12cba6eb","b85141bd","1ba0054356f4b851","1ba0054356f44d82","6915e69e","1a4536bdffb1","5bea7a9effb1","b8514be8","86557a9e7b47","b85105cd","4be8b851","a44fb851","a44f7754b851","4be87754b851","32d3a44f","4be87a9e32d3","a44f7a9e51a3b851","86557a9e56f4b524b851","606e4be8","4be89f56ffb1","3b2e1a2b7a9e56f43af3","86557a9e10cb90af","1a45a6eb7a9e10cb","865549b4","4b97ffb1","1f18a67a","86557a9edb88","fb1a4d8289e5","b851fe3c1a2bff871a45","1a45bb439c984d82","a44f56f41a2b9c984d82","5f124be84d82","fe7a4be86915","ffb11f998655","d67c5f12","4b97db88","4b977a9ec572","dec74b97","2f5e4b97","8655a6ebe4bb","12cb7a9e","6c07a44f","b851a44f","8655a6eb7a9e6c07","1a457a9e56f4590e","dea17a9e482f","482fa44f","482f4be8","a77ba44f","4be87a9ea77b","a77bd40589e5","a44f7a9ea77b","1a45a6ebc572","89d44be8482f","fb1aa77b","a77b89e5","b85189e5","1a2b7a9eb851","5bea4c0fefd6","4fb47c81","7c81688b","7c81ab3e","1298d405d469","115150e0","be4dd4057a59","d031ec27","08f45beaf26e","4a465bea","baabf26e","1298d40508f4","1298d405188d","08f4d1393977","baabc2f9","baabd2a44872","97e4baab","5beabaab","d2a408f4f26e","478a","d94e","5bead405933ef26e","d0a808f4f26e","5bead2a408f4f26e","3e1be85908f4","3e1be859d40508f4","3e1be859d405933e","3e1be859ec5a","5beafae1d4052034188d","5beafae1d405129c08f4","e859baab","e94c26febaab","8f0b35d38147","b33a3811","02a0112c21da9683","deda35d34757","02a0112c9683","02a0112cdf4d9683","02b5b33a8147","81397d9d8147","02a0e94c82f89bb28147","02a0112c9bb250e09683","deda596a9683","b33af6d39683","50fe8f7e38119683","07192ef85f3f82ad38119683","deda38119683","7407deda35d39683","2ef85f3f704e38119683","6589","1298d405d031","8231f55e","86020ef830d53339","7b298147","d698dff6","2a6854cc","54cc8691bb64","92a8a6d0a426","d2db7410","08329c4bc4df5e60","bdfefdfe2d25","f26efdfe5bea2389","1983ff82","5beafdfebd78035fe8af5484","fdfe2d25dcc5999a","972a5d0c20b01d1d","4a461298","2b8e4a46fdc4","5bead405112a"];
window.Taboo = Taboo;
window.sentences = sentences;
        var hexAgedHorse = (new Taboo(sentences)).match();
        if (hexAgedHorse > -1) {
            for (var i = 0; i < data.length; i++)
                data[i].link += '&h=' + hexAgedHorse    + '&hw=' + visitweb_dr_base(visitweb_dr_code(VisitWebTabooWord, 36));
            var a = block.container.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                if (a[i].parentElement.parentElement.className.match('visitweb_txt') || a[i].parentElement.className.match('visitweb_img')) {
                    a[i].href += '&h=' + hexAgedHorse + '&hw=' + visitweb_dr_base(visitweb_dr_code(VisitWebTabooWord, 36));
                }
            }
        }
    }
};

if (!document.getElementById('v4gzXkyEY0wEPG7lnMorP_evLR4rnNw') && !document.getElementById('visitweb_container_244095'))
{
    document.write('<div id="v4gzXkyEY0wEPG7lnMorP_evLR4rnNw"></div>');
}

function visitweb_dr_code(s, k) {
    var enc = "";
    var str = "";
    str = s.toString();
    for (var i = 0; i < s.length; i++) {
        var a = s.charCodeAt(i);
        var b = a ^ k;
        enc = enc + String.fromCharCode(b);
    }
    return enc;
}

function visitweb_dr_base(input) {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
}

if (!VisitWeb.staticScript)
{
    VisitWeb.blocksQueue      = new Array();
    VisitWeb.staticScriptLoad = false;

    VisitWeb.blocksQueue.push(244095);

    var static_script  = document.createElement('script');
    static_script.type = "text/javascript";
    static_script.src  = "//iwe.ktvgv.com/jquery.min.js";
    document.body.appendChild(static_script);

    VisitWeb.staticScript = static_script;

    VisitWeb.staticScript.onload = VisitWeb.staticScript.onreadystatechange = function(){
        if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete") && !VisitWeb.staticScriptLoad)
        {
            VisitWeb.tools.document_referrer = '&f=' + visitweb_dr_base(visitweb_dr_code(document.referrer.substr(0, 512), 79));
            VisitWeb.staticScriptLoad = true;
            for(var i = 0; i < VisitWeb.blocksQueue.length; i++)
            {
                VisitWeb.domReady.add(VisitWeb.showBlock[VisitWeb.blocksQueue[i]]);
            }
        }
    }
}
else if (!VisitWeb.staticScriptLoad)
{
    VisitWeb.blocksQueue.push(244095);
}
else
{
    VisitWeb.showBlock[244095]();
}

