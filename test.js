console.log("ccccc");
function URLencode(str) {

    var amp_i, amp_encoded_str, amp_char_code, amp_padded_str;
    amp_encoded_str = "";

    for (amp_i = 0; amp_i < str.length; amp_i++) {

        amp_char_code = str.charCodeAt(amp_i);

        if (amp_char_code == 0x20) {

            amp_encoded_str += "+";
        } else {
            if (((0x30 <= amp_char_code) && (amp_char_code <= 0x39))
                    || ((0x41 <= amp_char_code) && (amp_char_code <= 0x5a))
                    || ((0x61 <= amp_char_code) && (amp_char_code <= 0x7a))) {
                amp_encoded_str += str.charAt(amp_i);
            } else if ((amp_char_code == 0x2a) || (amp_char_code == 0x2e) || (amp_char_code == 0x2d)
                    || (amp_char_code == 0x5f)) {
                amp_encoded_str += str.charAt(amp_i);
            } else {
                if (amp_char_code > 0xffff) {

                    amp_encoded_str += "%" + ((amp_char_code >> 18) | 0xf0).toString(16).toUpperCase();
                    amp_encoded_str += "%" + (((amp_char_code >> 12) & 0x3f) | 0x80).toString(16).toUpperCase();
                    amp_encoded_str += "%" + (((amp_char_code >> 6) & 0x3f) | 0x80).toString(16).toUpperCase();
                    amp_encoded_str += "%" + ((amp_char_code & 0x3f) | 0x80).toString(16).toUpperCase();

                } else if (amp_char_code > 0x7ff) {

                    amp_encoded_str += "%" + ((amp_char_code >> 12) | 0xe0).toString(16).toUpperCase();
                    amp_encoded_str += "%" + (((amp_char_code >> 6) & 0x3f) | 0x80).toString(16).toUpperCase();
                    amp_encoded_str += "%" + ((amp_char_code & 0x3f) | 0x80).toString(16).toUpperCase();
                } else if (amp_char_code > 0x7f) {

                    amp_encoded_str += "%" + (((amp_char_code >> 6) & 0x1f) | 0xc0).toString(16).toUpperCase();
                    amp_encoded_str += "%" + ((amp_char_code & 0x3f) | 0x80).toString(16).toUpperCase();
                } else {
                    amp_padded_str = "0" + amp_char_code.toString(16).toUpperCase();
                    amp_encoded_str += "%" + amp_padded_str.substr(amp_padded_str.length - 2, 2);
                }
            }
        }
    }
    return amp_encoded_str;
}

function getUniqId() {

    var amp_rand_1 = (new Date().getTime()) % 100000000;
    var amp_rand_2 = Math.round(Math.random() * 100000000.0);

    return amp_rand_id = "" + amp_rand_1 + "" + amp_rand_2;
}

function getOsId() {

    var amp_os = "";

    if (navigator.userAgent.indexOf("Win") != -1) {
        amp_os = 1;
    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        amp_os = 2;
    }

    return amp_os;
}

function getProtocolId() {

    var amp_protocol = "";

    if (location.protocol == "http:") {
        amp_protocol = 1;
    } else {
        amp_protocol = 2;
    }

    return amp_protocol;
}

function getBrowserId() {

    var amp_browser = "";

    if (navigator.appName == "Microsoft Internet Explorer") {
        amp_browser = 1;
    } else if (navigator.appName == "Netscape") {
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            amp_browser = 5;
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            amp_browser = 4;
        } else {
            amp_browser = 2;
        }
    } else if (window.opera) {
        amp_browser = 3;
    } else {
        amp_browser = 5;
    }

    return amp_browser;
}

function getMediaPattern(amp_type) {

    var amp_media;

    if (amp_type == "1") {
        if (typeof amp_sct != "undefined") {
            amp_media = "sct=" + amp_sct + "&rgl=" + amp_rgl + "&med=" + amp_med + "&site=" + amp_site + "&frame="
                    + amp_frame + "&type=" + amp_type;
        } else {
            amp_media = "med=" + amp_med + "&site=" + amp_site + "&frame=" + amp_frame + "&type=" + amp_type;
        }
    } else {
        if (typeof amp_sct != "undefined") {
            amp_media = "sct=" + amp_sct + "&rgl=" + amp_rgl + "&med=" + amp_med + "&site=" + amp_site + "&frame="
                    + amp_frame + "&width=" + amp_width + "&height=" + amp_height + "&type=" + amp_type;
        } else {
            amp_media = "med=" + amp_med + "&site=" + amp_site + "&frame=" + amp_frame + "&width=" + amp_width
                    + "&height=" + amp_height + "&type=" + amp_type;
        }
    }

    return amp_media;
}

function iframeURLExchange() {

    var amp_url;

    if (amp_iframe == "1") {
        amp_url = amp_rurl;
        amp_rurl = "";
    } else {
        amp_url = location.href;
    }

    if (amp_url == null) {
        amp_url = "";
    }

    if (amp_url.indexOf("ad.hk.doubleclick.net") != -1) {

        if (amp_url.indexOf("amazon") != -1 || amp_url.indexOf("amzn") != -1) {
            amp_url = "http://ifr.adjust-net.jp/favicon.ico";

        } else {
            amp_url = "http://ifr.adjust-net.jp/favicon.ico";
        }
    }

    return amp_url;
}

function getServerUrl(amp_type) {
    return location.protocol + "//ads200.adjust-search.jp/adfrontserver/ads?";
}

function ADJ_getIfrFlag() {
    var ifrFlag;
    (window.self === window.top) ? ifrFlag = 0 : ifrFlag = 1;
    return ifrFlag;
}

function ADJ_getHeight() {
    var myHeight = 0;
    if (typeof (window.innerHeight) == 'number') {
        //Non-IE
        myHeight = window.innerHeight;
        if (myHeight > 0) {
            return myHeight;
        }
    }
    if (document.documentElement && document.documentElement.clientHeight) {
        // IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
        if (myHeight > 0) {
            return myHeight;
        }
    }
    if (document.body && document.body.clientHeight) {
        // IE 4 compatible
        myHeight = document.body.clientHeight;
        if (myHeight > 0) {
            return myHeight;
        }
    }
    return myHeight;
}

function ADJ_getWidth() {
    var myWidth = 0;
    if (typeof (window.innerWidth) == 'number') {
        // Non-IE
        myWidth = window.innerWidth;
        if (myWidth > 0) {
            return myWidth;
        }
    }
    if (document.documentElement && document.documentElement.clientWidth) {
        // IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        if (myWidth > 0) {
            return myWidth;
        }
    }
    if (document.body && document.body.clientWidth) {
        // IE 4 compatible
        myWidth = document.body.clientWidth;
        if (myWidth > 0) {
            return myWidth;
        }
    }
    return myWidth;
}

function ADJ_getViewable() {
    var viewableFlag = 0;
    try {
        if (top.document) {
            viewableFlag = 1;
        }
    } catch (e) {
        viewableFlag = 0;
    }
    return viewableFlag;
}
function ADJ_isSafeFrame() {
    if (typeof $sf === 'undefined') {
        return 0;
    } else {
        return 1;
    }
}
function ADJ_isIntersectionObserverAPI() {
    if (typeof IntersectionObserver !== 'function') {
        return 0;
    } else {
        return 1;
    }
}

function sendRequestToAdServer() {
    var uniqId = getUniqId();
    var amp_serveUrl = getServerUrl(amp_type);
    var amp_media = getMediaPattern(amp_type);
    var amp_user = "&js=" + 1 + "&os=" + getOsId() + "&browser=" + getBrowserId() + "&domain=" + document.domain
            + "&protocol=" + getProtocolId();
    var amp_url = iframeURLExchange();
    var ph = ADJ_getHeight();
    var pw = ADJ_getWidth();
    var amp_viewable = ADJ_getViewable();

    var amp_userUrl = "&url=" + URLencode(amp_url) + "&rurl=" + URLencode(amp_rurl);
    var amp_uniqId = "&rid=" + uniqId + "&psid=" + amp_psid + "&simReqNum=" + simReqNum;

    amp_serveUrl += amp_media + amp_user + amp_userUrl + amp_uniqId;
    amp_serveUrl += "&ph=" + ph + "&pw=" + pw;
    amp_serveUrl += "&afsifr=" + ADJ_getIfrFlag();
    amp_serveUrl += "&viewable=" + ADJ_getViewable();
    amp_serveUrl += "&sf=" + ADJ_isSafeFrame();
    amp_serveUrl += "&iob=" + ADJ_isIntersectionObserverAPI();

    if (amp_type == "2") {
        document.write('<iframe src=\"' + amp_serveUrl
                + '\" name=\"sample\" marginheight=\"0\" marginwidth=\"0\" width=\"' + amp_width + '\" height=\"'
                + amp_height + '\" scrolling=\"no\" frameborder=\"0\"></iframe>');
    } else {
        document.write('<script type=\"text/javascript\" src=\"' + amp_serveUrl + '\"></script>');
    }

}

if (typeof window["amp_psid"] != 'undefined') {
    simReqNum++;
} else {
    var amp_psid;
    amp_psid = ((new Date().getTime()) % 100000000) + (Math.round(Math.random() * 100000000.0));
    var simReqNum = 1;
}

var ADJ_REQ = {
    vendors : [ '-moz-', '-webkit-', '-o-', '-ms-', '-khtml-', '' ],
    toCamelCase : function(str) {
        return str.toLowerCase().replace(/(\-[a-z])/g, function($1) {
            return $1.toUpperCase().replace('-', '');
        });
    },
    setCss3Style : function(el, prop, val) {
        for (var i = 0, l = ADJ_REQ.vendors.length; i < l; i++) {
            var p = ADJ_REQ.toCamelCase(ADJ_REQ.vendors[i] + prop);
            if (p in el.style)
                el.style[p] = val;
        }
    },
    getElem : function(id) {
        return document.getElementById(id);
    },
    hideEl : function(elId) {
        var el = ADJ_REQ.getElem(elId);
        if (el == null || el == undefined)
            return;
        el.style.display = "none";
    },
    showEl : function(elId) {
        var el = ADJ_REQ.getElem(elId);
        if (el == null || el == undefined)
            return;
        el.style.display = "";
    },
    doIconMouseOver : function(adid, show, pos) {
        var dTag = ADJ_REQ.getElem("ADJ_ii_" + adid);
        var dTagIcon = ADJ_REQ.getElem("ADJ_ii_icon_" + adid);
        var dTagIconImage = ADJ_REQ.getElem("ADJ_ii_iconimg_" + adid);
        var dTagText = ADJ_REQ.getElem("ADJ_ii_text_" + adid);

        ADJ_REQ.setCss3Style(dTag, 'transition', 'width linear 0.2s');

        if (show) {
            ADJ_REQ.showEl("ADJ_ii_text_" + adid);
            dTagIconImage.style["WebkitBorder" + pos + "Radius"] = "0px";
            dTagIconImage.style["MozBorderRadius" + pos] = "0px";
            dTagIconImage.style["border" + pos + "Radius"] = "0px";
            dTag.style.width = "100px";
            dTagText.style.width = "83px";
        } else {
            dTag.style.width = "17px";
            dTagText.style.width = "0px";
            dTagIconImage.style["WebkitBorder" + pos + "Radius"] = "4px";
            dTagIconImage.style["MozBorderRadius" + pos] = "4px";
            dTagIconImage.style["border" + pos + "Radius"] = "4px";
            ADJ_REQ.hideEl("ADJ_ii_text_" + adid);

        }
    },
    // use for bx image only
    loadedImage : function(uniqId, trackingUrl) {
        if (!trackingUrl) {return;}
        var element = document.getElementById(uniqId);
        ADJ_REQ.trackingBeacon(element, trackingUrl);
    },
    // use for other than image
    checkRenderedAd : function(uniqId, type, trackingUrl, count) {
        if (!trackingUrl || !uniqId) {return;}
        var element = document.getElementById(uniqId);
        if (!element || element.childNodes.length == 0) {
            count = count || 0;
            // return soon when div not found.
            console.log("checkRenderedAd: Not Found div Element OR length is ZERO. id = " + uniqId);
            if (count > 5) {return;}
            count += 1;
            setTimeout(function() {
                ADJ_REQ.checkRenderedAd(uniqId, type,trackingUrl, count);
            }, 100);
            return;
        }
        if (type === 1) { element = element.parentNode; }
        
        ADJ_REQ.trackingBeacon(element, trackingUrl);
    },
    trackingBeacon : function(element, trackingUrl) {
        var beaconImg = new Image();
        beaconImg.src = trackingUrl;
        beaconImg.style.display = 'none',beaconImg.height = 0,beaconImg.width = 0,beaconImg.border = 0;
       
        if (!element) {
            // return soon when div not found. donot append imp beacon image.
            return;
        }
        element.appendChild(beaconImg);
    }
};

document.write('<scr' + 'ipt src="https://nobukazu1203.github.io/test2.js"></scr' + 'ipt>');
