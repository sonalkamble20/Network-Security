/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={6522:function(t,n,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="model",l="name",d="type",v="vendor",h="version",p="architecture",g="console",m="mobile",_="tablet",y="smarttv",w="wearable",b="embedded",E="Amazon",I="Apple",A="ASUS",T="BlackBerry",S="Browser",k="Chrome",R="Firefox",C="Google",N="Huawei",D="LG",O="Microsoft",x="Motorola",M="Opera",P="Samsung",L="Sharp",U="Sony",V="Xiaomi",F="Zebra",B="Facebook",z=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].toUpperCase()]=t[e];return n},j=function(t,n){return typeof t===s&&-1!==G(n).indexOf(G(t))},G=function(t){return t.toLowerCase()},q=function(t,n){if(typeof t===s)return t=t.replace(/^\s\s*/,""),typeof n===u?t:t.substring(0,350)},H=function(t,n){for(var e,i,r,u,s,f,l=0;l<n.length&&!s;){var d=n[l],v=n[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(t))for(r=0;r<v.length;r++)f=s[++i],typeof(u=v[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},Y=function(t,n){for(var e in n)if(typeof n[e]===c&&n[e].length>0){for(var i=0;i<n[e].length;i++)if(j(n[e][i],t))return"?"===e?o:e}else if(j(n[e],t))return"?"===e?o:e;return t},K={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,h],[/opios[\/ ]+([\w\.]+)/i],[h,[l,M+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[l,M]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[l,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[h,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+S],h],[/\bfocus\/([\w\.]+)/i],[h,[l,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[l,M+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[l,M+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[l,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[h,[l,R]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+S],h],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,B],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[l,k+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,k+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[l,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[h,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[l,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,h],[/(cobalt)\/([\w\.]+)/i],[l,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,G]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[v,P],[d,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[v,P],[d,m]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[v,I],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[v,I],[d,_]],[/(macintosh);/i],[f,[v,I]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[v,L],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[v,N],[d,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[v,N],[d,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[v,V],[d,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[v,V],[d,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[v,"OPPO"],[d,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[v,"Vivo"],[d,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[v,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[v,x],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[v,x],[d,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[v,D],[d,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[v,D],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[v,"Lenovo"],[d,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[v,"Nokia"],[d,m]],[/(pixel c)\b/i],[f,[v,C],[d,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[v,C],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[v,U],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[v,U],[d,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[v,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[v,E],[d,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[v,E],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[f,v,[d,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[v,T],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[v,A],[d,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[v,A],[d,m]],[/(nexus 9)/i],[f,[v,"HTC"],[d,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[v,[f,/_/g," "],[d,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[v,"Acer"],[d,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[v,"Meizu"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[v,f,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[v,f,[d,_]],[/(surface duo)/i],[f,[v,O],[d,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[v,"Fairphone"],[d,m]],[/(u304aa)/i],[f,[v,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[f,[v,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[f,[v,"RCA"],[d,_]],[/\b(venue[\d ]{2,7}) b/i],[f,[v,"Dell"],[d,_]],[/\b(q(?:mv|ta)\w+) b/i],[f,[v,"Verizon"],[d,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[v,"Barnes & Noble"],[d,_]],[/\b(tm\d{3}\w+) b/i],[f,[v,"NuVision"],[d,_]],[/\b(k88) b/i],[f,[v,"ZTE"],[d,_]],[/\b(nx\d{3}j) b/i],[f,[v,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[f,[v,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[f,[v,"Swiss"],[d,_]],[/\b((zeki)?tb.*\b) b/i],[f,[v,"Zeki"],[d,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[v,"Dragon Touch"],f,[d,_]],[/\b(ns-?\w{0,9}) b/i],[f,[v,"Insignia"],[d,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[v,"NextBook"],[d,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[v,"Voice"],f,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[v,"LvTel"],f,[d,m]],[/\b(ph-1) /i],[f,[v,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[v,"Envizen"],[d,_]],[/\b(trio[-\w\. ]+) b/i],[f,[v,"MachSpeed"],[d,_]],[/\btu_(1491) b/i],[f,[v,"Rotor"],[d,_]],[/(shield[\w ]+) b/i],[f,[v,"Nvidia"],[d,_]],[/(sprint) (\w+)/i],[v,f,[d,m]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[v,O],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[v,F],[d,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[v,F],[d,m]],[/smart-tv.+(samsung)/i],[v,[d,y]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[v,P],[d,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[v,D],[d,y]],[/(apple) ?tv/i],[v,[f,I+" TV"],[d,y]],[/crkey/i],[[f,k+"cast"],[v,C],[d,y]],[/droid.+aft(\w)( bui|\))/i],[f,[v,E],[d,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[v,L],[d,y]],[/(bravia[\w ]+)( bui|\))/i],[f,[v,U],[d,y]],[/(mitv-\w{5}) bui/i],[f,[v,V],[d,y]],[/Hbbtv.*(technisat) (.*);/i],[v,f,[d,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[v,q],[f,q],[d,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[v,f,[d,g]],[/droid.+; (shield) bui/i],[f,[v,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[f,[v,U],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[v,O],[d,g]],[/((pebble))app/i],[v,f,[d,w]],[/droid.+; (glass) \d/i],[f,[v,C],[d,w]],[/droid.+; (wt63?0{2,3})\)/i],[f,[v,F],[d,w]],[/(quest( 2| pro)?)/i],[f,[v,B],[d,w]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[v,[d,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[d,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[v,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[h,Y,K]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[h,Y,K]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,h],[/\(bb(10);/i],[h,[l,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[l,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[h,[l,k+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,"Chromium OS"],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,h],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,h]]},W=function(t,n){if(typeof t===c&&(n=t,t=o),!(this instanceof W))return new W(t,n).getResult();var e=t||(typeof r!==u&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=typeof r!==u&&r.navigator&&r.navigator.userAgentData?r.navigator.userAgentData:o,a=n?function(t,n){var e={};for(var i in t)n[i]&&n[i].length%2==0?e[i]=n[i].concat(t[i]):e[i]=t[i];return e}($,n):$;return this.getBrowser=function(){var t,n={};return n[l]=o,n[h]=o,H.call(n,e,a.browser),n.major=typeof(t=n.version)===s?t.replace(/[^\d\.]/g,"").split(".")[0]:o,n},this.getCPU=function(){var t={};return t[p]=o,H.call(t,e,a.cpu),t},this.getDevice=function(){var t={};return t[v]=o,t[f]=o,t[d]=o,H.call(t,e,a.device),!t[d]&&i&&i.mobile&&(t[d]=m),t},this.getEngine=function(){var t={};return t[l]=o,t[h]=o,H.call(t,e,a.engine),t},this.getOS=function(){var t={};return t[l]=o,t[h]=o,H.call(t,e,a.os),!t[l]&&i&&"Unknown"!=i.platform&&(t[l]=i.platform.replace(/chrome/i,"Chromium").replace(/mac/i,"Mac ")),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(t){return e=typeof t===s&&t.length>350?q(t,350):t,this},this.setUA(e),this};W.VERSION="0.7.33",W.BROWSER=z([l,h,"major"]),W.CPU=z([p]),W.DEVICE=z([f,v,d,g,m,y,_,w,b]),W.ENGINE=W.OS=z([l,h]),typeof n!==u?(t.exports&&(n=t.exports=W),n.UAParser=W):e.amdO?(i=function(){return W}.call(n,e,n,t))===o||(t.exports=i):typeof r!==u&&(r.UAParser=W)}("object"==typeof window?window:this)},3994:function(t,n,e){var i=e(3498)(),r=e(4166);t.exports=function(t,n){function e(n){if(!(this instanceof e))return new e(n);try{throw new Error(n)}catch(o){o.name=t,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,t,n)),this.message=n||"",this.name=t}return e.prototype=new(n||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+t+": "+this.message+"]":"["+t+"]"},e.prototype.name=t,e}},4166:function(t){"use strict";t.exports=function(t,n,e){var i=n;return e&&(i+=": "+e),t=i+t.slice(t.indexOf("\n"))}},3498:function(t){"use strict";t.exports=function(){var t=new Error("yep");return!!t.stack&&"Error: yep\n"===t.stack.substr(0,11)}},155:function(t,n,e){t.exports=function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}undefined;var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=undefined,a=undefined,u=function(t,n){w[r]=t,w[r+1]=n,2===(r+=2)&&(a?a(b):I())};function c(t){a=t}function s(t){u=t}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(b)}}function g(){return void 0!==o?function(){o(b)}:y()}function m(){var t=0,n=new d(b),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function _(){var t=new MessageChannel;return t.port1.onmessage=b,function(){return t.port2.postMessage(0)}}function y(){var t=setTimeout;return function(){return t(b,1)}}var w=new Array(1e3);function b(){for(var t=0;t<r;t+=2)(0,w[t])(w[t+1]),w[t]=undefined,w[t+1]=undefined;r=0}function E(){try{undefined;var t=e(6422);return o=t.runOnLoop||t.runOnContext,g()}catch(n){return y()}}var I=undefined;function A(t,n){var e=arguments,i=this,r=new this.constructor(k);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):G(i,r,t,n),r}function T(t){var n=this;if(t&&"object"==typeof t&&t.constructor===n)return t;var e=new n(k);return F(e,t),e}I=v?p():d?m():h?_():f===undefined?E():y();var S=Math.random().toString(36).substring(16);function k(){}var R=void 0,C=1,N=2,D=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function M(t){try{return t.then}catch(n){return D.error=n,D}}function P(t,n,e,i){try{t.call(n,e,i)}catch(r){return r}}function L(t,n,e){u((function(t){var i=!1,r=P(e,n,(function(e){i||(i=!0,n!==e?F(t,e):z(t,e))}),(function(n){i||(i=!0,j(t,n))}),"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,j(t,r))}),t)}function U(t,n){n._state===C?z(t,n._result):n._state===N?j(t,n._result):G(n,undefined,(function(n){return F(t,n)}),(function(n){return j(t,n)}))}function V(t,e,i){e.constructor===t.constructor&&i===A&&e.constructor.resolve===T?U(t,e):i===D?(j(t,D.error),D.error=null):i===undefined?z(t,e):n(i)?L(t,e,i):z(t,e)}function F(n,e){n===e?j(n,O()):t(e)?V(n,e,M(e)):z(n,e)}function B(t){t._onerror&&t._onerror(t._result),q(t)}function z(t,n){t._state===R&&(t._result=n,t._state=C,0!==t._subscribers.length&&u(q,t))}function j(t,n){t._state===R&&(t._state=N,t._result=n,u(B,t))}function G(t,n,e,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=n,r[o+C]=e,r[o+N]=i,0===o&&t._state&&u(q,t)}function q(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var i=undefined,r=undefined,o=t._result,a=0;a<n.length;a+=3)i=n[a],r=n[a+e],i?$(e,i,r,o):r(o);t._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(t,n){try{return t(n)}catch(e){return Y.error=e,Y}}function $(t,e,i,r){var o=n(i),a=undefined,u=undefined,c=undefined,s=undefined;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void j(e,x())}else a=r,c=!0;e._state!==R||(o&&c?F(e,a):s?j(e,u):t===C?z(e,a):t===N&&j(e,a))}function W(t,n){try{n((function(n){F(t,n)}),(function(n){j(t,n)}))}catch(e){j(t,e)}}var X=0;function J(){return X++}function Q(t){t[S]=X++,t._state=undefined,t._result=undefined,t._subscribers=[]}function Z(t,n){this._instanceConstructor=t,this.promise=new t(k),this.promise[S]||Q(this.promise),i(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?z(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&z(this.promise,this._result))):j(this.promise,tt())}function tt(){return new Error("Array Methods must be provided an Array")}function nt(t){return new Z(this,t).promise}function et(t){var n=this;return i(t)?new n((function(e,i){for(var r=t.length,o=0;o<r;o++)n.resolve(t[o]).then(e,i)})):new n((function(t,n){return n(new TypeError("You must pass an array to race."))}))}function it(t){var n=new this(k);return j(n,t),n}function rt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ot(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],k!==t&&("function"!=typeof t&&rt(),this instanceof at?W(this,t):ot())}function ut(){var t=undefined;if("undefined"!=typeof e.g)t=e.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(r){}if("[object Promise]"===i&&!n.cast)return}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,n=this._input,e=0;this._state===R&&e<t;e++)this._eachEntry(n[e],e)},Z.prototype._eachEntry=function(t,n){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=M(t);if(r===A&&t._state!==R)this._settledAt(t._state,n,t._result);else if("function"!=typeof r)this._remaining--,this._result[n]=t;else if(e===at){var o=new e(k);V(o,t,r),this._willSettleAt(o,n)}else this._willSettleAt(new e((function(n){return n(t)})),n)}else this._willSettleAt(i(t),n)},Z.prototype._settledAt=function(t,n,e){var i=this.promise;i._state===R&&(this._remaining--,t===N?j(i,e):this._result[n]=e),0===this._remaining&&z(i,this._result)},Z.prototype._willSettleAt=function(t,n){var e=this;G(t,undefined,(function(t){return e._settledAt(C,n,t)}),(function(t){return e._settledAt(N,n,t)}))},at.all=nt,at.race=et,at.resolve=T,at.reject=it,at._setScheduler=c,at._setAsap=s,at._asap=u,at.prototype={constructor:at,then:A,"catch":function(t){return this.then(null,t)}},at.polyfill=ut,at.Promise=at,at}()},4798:function(t){"use strict";t.exports=function(t){var n,e={};if(!(t instanceof Object)||Array.isArray(t))throw new Error("keyMirror(...): Argument must be an object.");for(n in t)t.hasOwnProperty(n)&&(e[n]=n);return e}},3599:function(t){"use strict";t.exports=function(t,n,e,i){Object.defineProperty(t,n,{get:function(){var t=e.call(this);return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},set:function(t){return Object.defineProperty(this,n,{value:t,enumerable:!!i,writable:!0}),t},enumerable:!!i,configurable:!0})}},4791:function(t){"use strict";var n=Element.prototype,e=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=function(t,n){if(e)return e.call(t,n);for(var i=t.parentNode.querySelectorAll(n),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}},7232:function(t){!function(){function n(t,n){var e,i,r,o,a,u,c,s;for(e=3&t.length,i=t.length-e,r=n,a=3432918353,u=461845907,s=0;s<i;)c=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&t.charCodeAt(s+2))<<16;case 2:c^=(255&t.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&t.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=t.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=n;e.v2=function(t,n){for(var e,i=t.length,r=n^i,o=0;i>=4;)e=1540483477*(65535&(e=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&t.charCodeAt(o+2))<<16;case 2:r^=(255&t.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=n,t.exports=e}()},9711:function(t,n,e){t=e.nmd(t),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=1/0,u=9007199254740991,c="[object Arguments]",s="[object Array]",f="[object Boolean]",l="[object Date]",d="[object Error]",v="[object Function]",h="[object GeneratorFunction]",p="[object Map]",g="[object Number]",m="[object Object]",_="[object RegExp]",y="[object Set]",w="[object String]",b="[object Symbol]",E="[object WeakMap]",I="[object ArrayBuffer]",A="[object Float32Array]",T="[object Float64Array]",S="[object Int8Array]",k="[object Int16Array]",R="[object Int32Array]",C="[object Uint8Array]",N="[object Uint8ClampedArray]",D="[object Uint16Array]",O="[object Uint32Array]",x=/[&<>"'`]/g,M=RegExp(x.source),P=/\w*$/,L=/^\[object .+?Constructor\]$/,U=/^(?:0|[1-9]\d*)$/,V={};V[A]=V[T]=V[S]=V[k]=V[R]=V[C]=V[N]=V[D]=V[O]=!0,V[c]=V[s]=V[I]=V[f]=V[l]=V[d]=V[v]=V[p]=V[g]=V[m]=V[_]=V[y]=V[w]=V[E]=!1;var F={};F[c]=F[s]=F[I]=F[f]=F[l]=F[A]=F[T]=F[S]=F[k]=F[R]=F[p]=F[g]=F[m]=F[_]=F[y]=F[w]=F[b]=F[C]=F[N]=F[D]=F[O]=!0,F[d]=F[v]=F[E]=!1;var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},z={"function":!0,object:!0},j=z[typeof n]&&n&&!n.nodeType?n:i,G=z.object&&t&&!t.nodeType?t:i,q=G&&G.exports===j?j:i,H=rt(j&&G&&"object"==typeof e.g&&e.g),Y=rt(z[typeof self]&&self),K=rt(z[typeof window]&&window),$=rt(z[typeof this]&&this),W=H||K!==($&&$.window)&&K||Y||$||Function("return this")();function X(t,n){return t.set(n[0],n[1]),t}function J(t,n){return t.add(n),t}function Q(t,n){return nt(In(t),Ae)}function Z(t,n){return!!t.length&&it(t,n,0)>-1}function tt(t,n,e){for(var i=-1,r=t.length;++i<r;)if(e(n,t[i]))return!0;return!1}function nt(t,n){for(var e=-1,i=n.length,r=t.length;++e<i;)t[r+e]=n[e];return t}function et(t,n,e){for(var r=-1,o=t.length;++r<o;){var a=t[r],u=n(a);if(null!=u&&(c===i?u==u:e(u,c)))var c=u,s=a}return s}function it(t,n,e){if(n!=n)return function(t,n,e){var i=t.length,r=n+(e?0:-1);for(;e?r--:++r<i;){var o=t[r];if(o!=o)return r}return-1}(t,e);for(var i=e-1,r=t.length;++i<r;)if(t[i]===n)return i;return-1}function rt(t){return t&&t.Object===Object?t:null}function ot(t){return B[t]}function at(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(e){}return n}function ut(t,n){return t="number"==typeof t||U.test(t)?+t:-1,n=null==n?u:n,t>-1&&t%1==0&&t<n}var ct=Array.prototype,st=Object.prototype,ft=Function.prototype.toString,lt=st.hasOwnProperty,dt=0,vt=ft.call(Object),ht=st.toString,pt=W._,gt=RegExp("^"+ft.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mt=W.Reflect,_t=W.Symbol,yt=W.Uint8Array,wt=mt?mt.enumerate:i,bt=Object.getPrototypeOf,Et=Object.getOwnPropertySymbols,It=Object.create,At=st.propertyIsEnumerable,Tt=ct.splice,St=W.isFinite,kt=Object.keys,Rt=Math.max,Ct=On(W,"Map"),Nt=On(W,"Set"),Dt=On(W,"WeakMap"),Ot=On(Object,"create"),xt=Ct?ft.call(Ct):"",Mt=Nt?ft.call(Nt):"",Pt=Dt?ft.call(Dt):"",Lt=_t?_t.prototype:i,Ut=Lt?Lt.valueOf:i;function Vt(t){if(ue(t)&&!Zn(t)){if(t instanceof Ft)return t;if(lt.call(t,"__wrapped__"))return function(t){var n=new Ft(t.u,t.l);return n.I=In(t.I),n}(t)}return new Ft(t)}function Ft(t,n){this.u=t,this.I=[],this.l=!!n}function Bt(){}function zt(t,n){return Ot?t[n]!==i:lt.call(t,n)}function jt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}function Gt(t){var n=-1,e=t?t.length:0;for(this.A=new jt;++n<e;)this.push(t[n])}function qt(t,n){var e=t.A;if(Ln(n)){var i=e.A;return("string"==typeof n?i.string:i.hash)[n]===o}return e.has(n)}function Ht(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var i=t[n];this.set(i[0],i[1])}}function Yt(t,n){var e=Wt(t,n);return!(e<0)&&(e==t.length-1?t.pop():Tt.call(t,e,1),!0)}function Kt(t,n){var e=Wt(t,n);return e<0?i:t[e][1]}function $t(t,n){return Wt(t,n)>-1}function Wt(t,n){for(var e=t.length;e--;)if(Xn(t[e][0],n))return e;return-1}function Xt(t,n,e){var i=Wt(t,n);i<0?t.push([n,e]):t[i][1]=e}function Jt(t,n,e,r){return t===i||Xn(t,st[e])&&!lt.call(r,e)?n:t}function Qt(t,n,e){(e!==i&&!Xn(t[n],e)||"number"==typeof n&&e===i&&!(n in t))&&(t[n]=e)}function Zt(t,n,e){var r=t[n];lt.call(t,n)&&Xn(r,e)&&(e!==i||n in t)||(t[n]=e)}function tn(t){return"function"==typeof t?t:Te}function nn(t,n,e,r,o,a,u){var s;if(r&&(s=a?r(t,o,a,u):r(t)),s!==i)return s;if(!ae(t))return t;var d=Zn(t);if(d){if(s=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&lt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return In(t)}else{var E=Mn(t),x=E==v||E==h;if(ie(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(E==m||E==c||x&&!a){if(at(t))return a?t:{};if(s=function(t){return"function"!=typeof t.constructor||Un(t)?{}:en(bt(t))}(x?{}:t),!n)return s=function(t,n){return t&&Sn(n,ye(n),t)}(s,t),e?Rn(t,s):s}else{if(!F[E])return a?t:{};s=function(t,n,e){var i=t.constructor;switch(n){case I:return Tn(t);case f:case l:return new i(+t);case A:case T:case S:case k:case R:case C:case N:case D:case O:return function(t,n){var e=n?Tn(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,e);case p:return function(t){return Gn(function(t){var n=-1,e=Array(t.size);return t.forEach((function(t,i){e[++n]=[i,t]})),e}(t),X,new t.constructor)}(t);case g:case w:return new i(t);case _:return function(t){var n=new t.constructor(t.source,P.exec(t));return n.lastIndex=t.lastIndex,n}(t);case y:return Gn(function(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}(o=t),J,new o.constructor);case b:return r=t,Ut?Object(Ut.call(r)):{}}var r;var o}(t,E,n)}}u||(u=new Ht);var M=u.get(t);return M||(u.set(t,s),(d?un:ln)(t,(function(i,o){Zt(s,o,nn(i,n,e,r,o,t,u))})),e&&!d?Rn(t,s):s)}function en(t){return ae(t)?It(t):{}}function rn(t,n,e){if("function"!=typeof t)throw new TypeError(r);return setTimeout((function(){t.apply(i,e)}),n)}var on,an,un=(on=ln,function(t,n){if(null==t)return t;if(!te(t))return on(t,n);for(var e=t.length,i=an?e:-1,r=Object(t);(an?i--:++i<e)&&!1!==n(r[i],i,r););return t});function cn(t,n){var e=[];return un(t,(function(t,i,r){n(t,i,r)&&e.push(t)})),e}function sn(t,n,e,i){i||(i=[]);for(var r=-1,o=t.length;++r<o;){var a=t[r];n>0&&ne(a)&&(e||Zn(a)||Qn(a))?n>1?sn(a,n-1,e,i):nt(i,a):e||(i[i.length]=a)}return i}var fn=function(t){return function(n,e,i){for(var r=-1,o=Object(n),a=i(n),u=a.length;u--;){var c=a[t?u:++r];if(!1===e(o[c],c,o))break}return n}}();function ln(t,n){return t&&fn(t,n,ye)}function dn(t,n){return cn(n,(function(n){return re(t[n])}))}function vn(t,n,e,r,o){return t===n||(null==t||null==n||!ae(t)&&!ue(n)?t!=t&&n!=n:function(t,n,e,r,o,a){var u=Zn(t),v=Zn(n),h=s,p=s;u||(h=(h=ht.call(t))==c?m:h);v||(p=(p=ht.call(n))==c?m:p);var y=h==m&&!at(t),b=p==m&&!at(n),E=h==p;a||(a=[]);var I=zn(a,(function(n){return n[0]===t}));if(I&&I[1])return I[1]==n;if(a.push([t,n]),E&&!y){var A=u||fe(t)?function(t,n,e,r,o,a){var u=-1,c=2&o,s=1&o,f=t.length,l=n.length;if(f!=l&&!(c&&l>f))return!1;var d=!0;for(;++u<f;){var v,h=t[u],p=n[u];if(v!==i){if(v)continue;d=!1;break}if(s){if(!An(n,(function(t){return h===t||e(h,t,r,o,a)}))){d=!1;break}}else if(h!==p&&!e(h,p,r,o,a)){d=!1;break}}return d}(t,n,e,r,o,a):function(t,n,e){switch(e){case f:case l:return+t==+n;case d:return t.name==n.name&&t.message==n.message;case g:return t!=+t?n!=+n:t==+n;case _:case w:return t==n+""}return!1}(t,n,h);return a.pop(),A}if(!(2&o)){var T=y&&lt.call(t,"__wrapped__"),S=b&&lt.call(n,"__wrapped__");if(T||S){A=e(T?t.value():t,S?n.value():n,r,o,a);return a.pop(),A}}if(!E)return!1;A=function(t,n,e,r,o,a){var u=2&o,c=ye(t),s=c.length,f=ye(n),l=f.length;if(s!=l&&!u)return!1;var d=s;for(;d--;){var v=c[d];if(!(u?v in n:lt.call(n,v)))return!1}var h=!0,p=u;for(;++d<s;){var g,m=t[v=c[d]],_=n[v];if(!(g===i?m===_||e(m,_,r,o,a):g)){h=!1;break}p||(p="constructor"==v)}if(h&&!p){var y=t.constructor,w=n.constructor;y==w||!("constructor"in t)||!("constructor"in n)||"function"==typeof y&&y instanceof y&&"function"==typeof w&&w instanceof w||(h=!1)}return h}(t,n,e,r,o,a);return a.pop(),A}(t,n,vn,e,r,o))}function hn(t){var n=typeof t;return"function"==n?t:null==t?Te:("object"==n?mn:bn)(t)}function pn(t){t=null==t?t:Object(t);var n=[];for(var e in t)n.push(e);return n}function gn(t,n){var e=-1,i=te(t)?Array(t.length):[];return un(t,(function(t,r,o){i[++e]=n(t,r,o)})),i}function mn(t){var n=ye(t);return function(e){var r=n.length;if(null==e)return!r;for(e=Object(e);r--;){var o=n[r];if(!(o in e)||!vn(t[o],e[o],i,3))return!1}return!0}}function _n(t,n,e,r,o){if(t!==n){var a=Zn(n)||fe(n)?i:we(n);un(a||n,(function(u,c){if(a&&(u=n[c=u]),ae(u))o||(o=new Ht),function(t,n,e,r,o,a,u){var c=t[e],s=n[e],f=u.get(s);if(f)return void Qt(t,e,f);var l=a?a(c,s,e+"",t,n,u):i,d=l===i;d&&(l=s,Zn(s)||fe(s)?Zn(c)?l=c:ne(c)?l=In(c):(d=!1,l=nn(s,!a)):function(t){if(!ue(t)||ht.call(t)!=m||at(t))return!1;var n=bt(t);if(null===n)return!0;var e=n.constructor;return"function"==typeof e&&e instanceof e&&ft.call(e)==vt}(s)||Qn(s)?Qn(c)?l=Sn(v=c,we(v)):!ae(c)||r&&re(c)?(d=!1,l=nn(s,!a)):l=c:d=!1);var v;u.set(s,l),d&&o(l,s,r,a,u);u["delete"](s),Qt(t,e,l)}(t,n,c,e,_n,r,o);else{var s=r?r(t[c],u,c+"",t,n,o):i;s===i&&(s=u),Qt(t,c,s)}}))}}function yn(t,n){return t=Object(t),Gn(n,(function(n,e){return e in t&&(n[e]=t[e]),n}),{})}function wn(t,n){var e={};return function(t,n){null==t||fn(t,n,we)}(t,(function(t,i){n(t,i)&&(e[i]=t)})),e}function bn(t){return function(n){return null==n?i:n[t]}}function En(t,n,e){var i=-1,r=t.length;n<0&&(n=-n>r?0:r+n),(e=e>r?r:e)<0&&(e+=r),r=n>e?0:e-n>>>0,n>>>=0;for(var o=Array(r);++i<r;)o[i]=t[i+n];return o}function In(t){return En(t,0,t.length)}function An(t,n){var e;return un(t,(function(t,i,r){return!(e=n(t,i,r))})),!!e}function Tn(t){var n=new t.constructor(t.byteLength);return new yt(n).set(new yt(t)),n}wt&&!At.call({valueOf:1},"valueOf")&&(pn=function(t){return function(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}(wt(t))});var Sn=kn;function kn(t,n,e,i){e||(e={});for(var r=-1,o=n.length;++r<o;){var a=n[r];Zt(e,a,i?i(e[a],t[a],a,e,t):t[a])}return e}function Rn(t,n){return Sn(t,xn(t),n)}function Cn(t){return Wn((function(n,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,n=Object(n);++r<o;){var u=e[r];u&&t(n,u,r,a)}return n}))}function Nn(t,n,e,i){if("function"!=typeof t)throw new TypeError(r);var o=1&n,a=function(t){return function(){var n=arguments,e=en(t.prototype),i=t.apply(e,n);return ae(i)?i:e}}(t);return function u(){for(var n=-1,r=arguments.length,c=-1,s=i.length,f=Array(s+r),l=this&&this!==W&&this instanceof u?a:t;++c<s;)f[c]=i[c];for(;r--;)f[c++]=arguments[++n];return l.apply(o?e:this,f)}}var Dn=bn("length");function On(t,n){var e=t[n];return function(t){if(null==t)return!1;if(re(t))return gt.test(ft.call(t));return ue(t)&&(at(t)?gt:L).test(t)}(e)?e:i}var xn=Et||function(){return[]};function Mn(t){return ht.call(t)}function Pn(t){var n=t?t.length:i;return oe(n)&&(Zn(t)||se(t)||Qn(t))?function(t,n){for(var e=-1,i=Array(t);++e<t;)i[e]=n(e);return i}(n,String):null}function Ln(t){var n=typeof t;return"number"==n||"boolean"==n||"string"==n&&"__proto__"!=t||null==t}function Un(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||st)}(Ct&&Mn(new Ct)!=p||Nt&&Mn(new Nt)!=y||Dt&&Mn(new Dt)!=E)&&(Mn=function(t){var n=ht.call(t),e=n==m?t.constructor:null,i="function"==typeof e?ft.call(e):"";if(i)switch(i){case xt:return p;case Mt:return y;case Pt:return E}return n});var Vn=Wn((function(t,n){return Zn(t)||(t=null==t?[]:[Object(t)]),n=sn(n,1),Q(t)}));function Fn(t){return t?t[0]:i}function Bn(t){var n=Vt(t);return n.l=!0,n}function zn(t,n){return function(t,n,e,i){var r;return e(t,(function(t,e,o){if(n(t,e,o))return r=i?e:t,!1})),r}(t,hn(n),un)}function jn(t,n){return un(t,tn(n))}function Gn(t,n,e){return function(t,n,e,i,r){return r(t,(function(t,r,o){e=i?(i=!1,t):n(e,t,r,o)})),e}(t,hn(n),e,arguments.length<3,un)}function qn(t,n){var e;if("function"!=typeof n)throw new TypeError(r);return t=de(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=i),e}}var Hn=Wn((function(t,n,e){return Nn(t,33,n,e)})),Yn=Wn((function(t,n){return rn(t,1,n)})),Kn=Wn((function(t,n,e){return rn(t,ve(n)||0,e)}));var $n=Wn((function(t,n){return Nn(t,32,i,n)}));function Wn(t,n){if("function"!=typeof t)throw new TypeError(r);return n=Rt(n===i?t.length-1:de(n),0),function(){for(var e=arguments,i=-1,r=Rt(e.length-n,0),o=Array(r);++i<r;)o[i]=e[n+i];var a=Array(n+1);for(i=-1;++i<n;)a[i]=e[i];return a[n]=o,t.apply(this,a)}}function Xn(t,n){return t===n||t!=t&&n!=n}function Jn(t,n){return t>n}function Qn(t){return ne(t)&&lt.call(t,"callee")&&(!At.call(t,"callee")||ht.call(t)==c)}var Zn=Array.isArray;function te(t){return null!=t&&oe(Dn(t))&&!re(t)}function ne(t){return ue(t)&&te(t)}var ee,ie=(ee=!1,function(){return ee});function re(t){var n=ae(t)?ht.call(t):"";return n==v||n==h}function oe(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function ae(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function ue(t){return!!t&&"object"==typeof t}function ce(t){return"number"==typeof t||ue(t)&&ht.call(t)==g}function se(t){return"string"==typeof t||!Zn(t)&&ue(t)&&ht.call(t)==w}function fe(t){return ue(t)&&oe(t.length)&&!!V[ht.call(t)]}function le(t,n){return t<n}var de=Number,ve=Number;function he(t){return"string"==typeof t?t:null==t?"":t+""}var pe=Cn((function(t,n){Sn(n,ye(n),t)})),ge=Cn((function(t,n){Sn(n,we(n),t)})),me=Cn((function(t,n,e,i){kn(n,we(n),t,i)}));var _e=Wn((function(t){return t.push(i,Jt),me.apply(i,t)}));function ye(t){var n=Un(t);if(!n&&!te(t))return function(t){return kt(Object(t))}(t);var e=Pn(t),i=!!e,r=e||[],o=r.length;for(var a in t)!lt.call(t,a)||i&&("length"==a||ut(a,o))||n&&"constructor"==a||r.push(a);return r}function we(t){for(var n=-1,e=Un(t),i=pn(t),r=i.length,o=Pn(t),a=!!o,u=o||[],c=u.length;++n<r;){var s=i[n];a&&("length"==s||ut(s,c))||"constructor"==s&&(e||!lt.call(t,s))||u.push(s)}return u}var be=Cn((function(t,n,e){_n(t,n,e)})),Ee=Wn((function(t,n){return null==t?{}:(n=gn(sn(n,1),String),yn(t,function(t,n,e,i){var r,o=-1,a=Z,u=!0,c=t.length,s=[],f=n.length;if(!c)return s;e&&(n=gn(n,(r=e,function(t){return r(t)}))),i?(a=tt,u=!1):n.length>=200&&(a=qt,u=!1,n=new Gt(n));t:for(;++o<c;){var l=t[o],d=e?e(l):l;if(u&&d==d){for(var v=f;v--;)if(n[v]===d)continue t;s.push(l)}else a(n,d,i)||s.push(l)}return s}(we(t),n)))}));var Ie=Wn((function(t,n){return null==t?{}:yn(t,sn(n,1))}));function Ae(t){return t?function(t,n){return gn(n,(function(n){return t[n]}))}(t,ye(t)):[]}function Te(t){return t}var Se,ke=hn;function Re(t,n,e){var i=ye(n),r=dn(n,i);null!=e||ae(n)&&(r.length||!i.length)||(e=n,n=t,t=this,r=dn(n,ye(n)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(t);return un(r,(function(e){var i=n[e];t[e]=i,a&&(t.prototype[e]=function(){var n=this.l;if(o||n){var e=t(this.u);return(e.I=In(this.I)).push({func:i,args:arguments,thisArg:t}),e.l=n,e}return i.apply(t,nt([this.value()],arguments))})})),t}Ft.prototype=en(Vt.prototype),Ft.prototype.constructor=Ft,Bt.prototype=Ot?Ot(null):st,jt.prototype.clear=function(){this.A={hash:new Bt,map:Ct?new Ct:[],string:new Bt}},jt.prototype["delete"]=function(t){var n=this.A;return Ln(t)?function(t,n){return zt(t,n)&&delete t[n]}("string"==typeof t?n.string:n.hash,t):Ct?n.map["delete"](t):Yt(n.map,t)},jt.prototype.get=function(t){var n=this.A;return Ln(t)?function(t,n){if(Ot){var e=t[n];return e===o?i:e}return lt.call(t,n)?t[n]:i}("string"==typeof t?n.string:n.hash,t):Ct?n.map.get(t):Kt(n.map,t)},jt.prototype.has=function(t){var n=this.A;return Ln(t)?zt("string"==typeof t?n.string:n.hash,t):Ct?n.map.has(t):$t(n.map,t)},jt.prototype.set=function(t,n){var e=this.A;return Ln(t)?function(t,n,e){t[n]=Ot&&e===i?o:e}("string"==typeof t?e.string:e.hash,t,n):Ct?e.map.set(t,n):Xt(e.map,t,n),this},Gt.prototype.push=function(t){var n=this.A;if(Ln(t)){var e=n.A;("string"==typeof t?e.string:e.hash)[t]=o}else n.set(t,o)},Ht.prototype.clear=function(){this.A={array:[],map:null}},Ht.prototype["delete"]=function(t){var n=this.A,e=n.array;return e?Yt(e,t):n.map["delete"](t)},Ht.prototype.get=function(t){var n=this.A,e=n.array;return e?Kt(e,t):n.map.get(t)},Ht.prototype.has=function(t){var n=this.A,e=n.array;return e?$t(e,t):n.map.has(t)},Ht.prototype.set=function(t,n){var e=this.A,i=e.array;i&&(i.length<199?Xt(i,t,n):(e.array=null,e.map=new jt(i)));var r=e.map;return r&&r.set(t,n),this},Vt.assign=pe,Vt.assignIn=ge,Vt.before=qn,Vt.bind=Hn,Vt.chain=Bn,Vt.compact=function(t){return cn(t,Boolean)},Vt.concat=Vn,Vt.create=function(t,n){var e=en(t);return n?pe(e,n):e},Vt.defaults=_e,Vt.defer=Yn,Vt.delay=Kn,Vt.filter=function(t,n){return cn(t,hn(n))},Vt.flatten=function(t){return(t?t.length:0)?sn(t,1):[]},Vt.flattenDeep=function(t){return(t?t.length:0)?sn(t,a):[]},Vt.iteratee=ke,Vt.keys=ye,Vt.map=function(t,n){return gn(t,hn(n))},Vt.mapValues=function(t,n){var e={};return n=hn(n),ln(t,(function(t,i,r){e[i]=n(t,i,r)})),e},Vt.matches=function(t){return mn(pe({},t))},Vt.merge=be,Vt.mixin=Re,Vt.negate=function(t){if("function"!=typeof t)throw new TypeError(r);return function(){return!t.apply(this,arguments)}},Vt.omit=Ee,Vt.omitBy=function(t,n){return n=hn(n),wn(t,(function(t,e){return!n(t,e)}))},Vt.once=function(t){return qn(2,t)},Vt.partial=$n,Vt.pick=Ie,Vt.pickBy=function(t,n){return null==t?{}:wn(t,hn(n))},Vt.slice=function(t,n,e){var r=t?t.length:0;return n=null==n?0:+n,e=e===i?r:+e,r?En(t,n,e):[]},Vt.sortBy=function(t,n){var e=0;return n=hn(n),gn(gn(t,(function(t,i,r){return{value:t,index:e++,criteria:n(t,i,r)}})).sort((function(t,n){return function(t,n){if(t!==n){var e=null===t,r=t===i,o=t==t,a=null===n,u=n===i,c=n==n;if(t>n&&!a||!o||e&&!u&&c||r&&c)return 1;if(t<n&&!e||!c||a&&!r&&o||u&&o)return-1}return 0}(t.criteria,n.criteria)||t.index-n.index})),bn("value"))},Vt.tap=function(t,n){return n(t),t},Vt.thru=function(t,n){return n(t)},Vt.toArray=function(t){return te(t)?t.length?In(t):[]:Ae(t)},Vt.values=Ae,Vt.extend=ge,Re(Vt,Vt),Vt.clone=function(t){return ae(t)?Zn(t)?In(t):Sn(t,ye(t)):t},Vt.cloneDeep=function(t){return nn(t,!0,!0)},Vt.escape=function(t){return(t=he(t))&&M.test(t)?t.replace(x,ot):t},Vt.every=function(t,n,e){return function(t,n){var e=!0;return un(t,(function(t,i,r){return e=!!n(t,i,r)})),e}(t,hn(n=e?i:n))},Vt.find=zn,Vt.findIndex=function(t,n){return t&&t.length?function(t,n,e){for(var i=t.length,r=e?i:-1;e?r--:++r<i;)if(n(t[r],r,t))return r;return-1}(t,hn(n)):-1},Vt.forEach=jn,Vt.forOwn=function(t,n){return t&&ln(t,tn(n))},Vt.has=function(t,n){return null!=t&&lt.call(t,n)},Vt.head=Fn,Vt.identity=Te,Vt.includes=function(t,n,e,i){t=te(t)?t:Ae(t),e=e&&!i?de(e):0;var r=t.length;return e<0&&(e=Rt(r+e,0)),se(t)?e<=r&&t.indexOf(n,e)>-1:!!r&&it(t,n,e)>-1},Vt.indexOf=function(t,n,e){for(var i=t?t.length:0,r=((e="number"==typeof e?e<0?Rt(i+e,0):e:0)||0)-1,o=n==n;++r<i;){var a=t[r];if(o?a===n:a!=a)return r}return-1},Vt.isArguments=Qn,Vt.isArray=Zn,Vt.isBoolean=function(t){return!0===t||!1===t||ue(t)&&ht.call(t)==f},Vt.isDate=function(t){return ue(t)&&ht.call(t)==l},Vt.isEmpty=function(t){if(te(t)&&(Zn(t)||se(t)||re(t.splice)||Qn(t)))return!t.length;for(var n in t)if(lt.call(t,n))return!1;return!0},Vt.isEqual=function(t,n){return vn(t,n)},Vt.isFinite=function(t){return"number"==typeof t&&St(t)},Vt.isFunction=re,Vt.isNaN=function(t){return ce(t)&&t!=+t},Vt.isNull=function(t){return null===t},Vt.isNumber=ce,Vt.isObject=ae,Vt.isRegExp=function(t){return ae(t)&&ht.call(t)==_},Vt.isString=se,Vt.isUndefined=function(t){return t===i},Vt.last=function(t){var n=t?t.length:0;return n?t[n-1]:i},Vt.max=function(t){return t&&t.length?et(t,Te,Jn):i},Vt.min=function(t){return t&&t.length?et(t,Te,le):i},Vt.noConflict=function(){return W._===this&&(W._=pt),this},Vt.noop=function(){},Vt.reduce=Gn,Vt.result=function(t,n,e){var r=null==t?i:t[n];return r===i&&(r=e),re(r)?r.call(t):r},Vt.size=function(t){return null==t?0:(t=te(t)?t:ye(t)).length},Vt.some=function(t,n,e){return An(t,hn(n=e?i:n))},Vt.uniqueId=function(t){var n=++dt;return he(t)+n},Vt.each=jn,Vt.first=Fn,Re(Vt,(Se={},ln(Vt,(function(t,n){lt.call(Vt.prototype,n)||(Se[n]=t)})),Se),{chain:!1}),Vt.VERSION="4.6.1",un(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(t){var n=(/^(?:replace|split)$/.test(t)?String.prototype:ct)[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(t);Vt.prototype[t]=function(){var t=arguments;return i&&!this.l?n.apply(this.value(),t):this[e]((function(e){return n.apply(e,t)}))}})),Vt.prototype.toJSON=Vt.prototype.valueOf=Vt.prototype.value=function(){return t=this.u,Gn(this.I,(function(t,n){return n.func.apply(n.thisArg,nt([t],n.args))}),t);var t},(K||Y||{})._=Vt,j&&G&&(q&&((G.exports=Vt)._=Vt),j._=Vt)}.call(this)},7237:function(t,n,e){t.exports=e(9711)._.noConflict()},5159:function(t,n,e){var i=e(7232).v3,r=Math.pow(2,32),o=function(t,n){return(i(t,n)>>>0)/r};t.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(t,n){var e=i(t,n);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(t,n,e){return Math.floor(o(t,n)*e)},hashToReal:o,toByteString:function(t){var n=String.fromCharCode;return t.replace(/[\S\s]/gi,(function(t){t=t.charCodeAt(0);var e=n(255&t);return t>255&&(e=n(t>>>8&255)+e),t>65535&&(e=n(t>>>16)+e),e}))}}},1954:function(t,n){n.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},2626:function(t,n,e){var i=e(7237),r=e(6553).get("stores/audience_data"),o=e(798),a=e(1591),u=e(2879),c=e(8850);function s(t){var n=["type","selector","attributes","value"],e=i.extend({},t);return e.changeSet=i.map(t.changeSet,(function(t){return i.pick(c.dereferenceChangeId(t),n)})),e}n.emitLayerDecided=function(t){var n=t.decisionTicket?t.decisionTicket.audienceIds:[],e=i.map(n,(function(t){return{id:t,name:r.get(t).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(t,{audiences:e})},s=c.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(s)},n.emitViewActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:t},e=c.translateViewActivatedToPageActivated(n);o.emit(n),o.emit(e)},n.emitViewsActivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:t};o.emit(n)},n.emitPageDeactivated=function(t){var n={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:t};o.emit(n)},n.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},n.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},n.emitInitializedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(t)},n.emitOriginsSyncedEvent=function(){var t={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(t)},n.emitActionAppliedEvent=function(t){var n={type:t.type,campaignId:t.layerId,pageId:t.pageId,experimentId:t.experimentId,variationId:t.variationId};u.defineProperty(n,"changes",(function(){return s(t).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:n};o.emit(e)},n.emitActionsForDecisionAppliedEvent=function(t,n){var e={decision:t};u.defineProperty(e,"actions",(function(){return i.map(n,s)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},n.emitSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(t)},n.emitMaybeSendEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"maybeSendEvents"};o.emit(t)},n.emitHoldEvents=function(){var t={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(t)}},3948:function(t,n,e){var i=e(7237),r=e(4071),o=e(2879),a=e(8850),u=e(2550),c=e(7464);function s(t,n,e,r){var o=t.getLayerState(r),a=n.get(r),c=e.get();if(!o||!a)return c?{layer:{name:c.layerName,id:c.layerId,policy:c.layerPolicy,integrationStringVersion:c.integrationStringVersion},experiment:{name:c.experimentName,id:c.experimentId},variation:{name:c.variationName,id:c.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var s,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(s=i.find(a.experiments,{id:l}))&&(f=i.find(s.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:s.name,id:s.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(t,n,e,r,o,a,s){var f=[],l=t.getLayerStates();s.onlySingleExperiments&&(l=i.filter(l,(function(t){var e=n.get(t.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var d=e.getActiveViewIds(),v=i.map(l,(function(t){var e,r=!!t.decision.variationId,a=t.decisionActivationId&&t.decisionActivationId===o.getActivationId(),u=c.getExperimentAndVariation(),s=u?u.variationId:null,f=r&&t.decision.variationId===s,l=(null==(e=n.get(null==t?void 0:t.layerId))?void 0:e.viewIds)||[],v=i.every(l,(function(t){return!i.includes(d,t)}));return i.extend(t,{isActive:r&&a&&!v||f,visitorRedirected:f})})),h=a?i.filter(v,a):v;return i.each(h,(function(t){var e=function(t,n,e,r){var o,a,u=t.layerId,c=n.get(u)||{},s=i.map(c.experiments,(function(t){return i.pick(t,["id","name"])}));if(!r&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:c.name||null,experiment:null,allExperiments:s,variation:null,reason:t.decision.reason,isActive:!!t.isActive,visitorRedirected:t.visitorRedirected,isInCampaignHoldback:t.decision.isLayerHoldback};t.decision&&t.decision.experimentId&&(o=i.find(c.experiments,{id:t.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&t.decision.variationId&&(a=i.find(o.variations,{id:t.decision.variationId})),a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(t.decisionTicket.audienceIds,(function(t){return i.pick(e.get(t),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=t.pageId),f}(t,n,r,s.includeOfferConsistency);e&&f.push(e)})),f}n.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(t,n,e,r,u,c,s,f,l){var d={},v={},h={},p={audiences:t.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:v,variations:h,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:n.getClientName(),clientVersion:n.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(t){o.defineProperty(d,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"changes",(function(){return i.map(t.changes,g)}),"campaign"),o.defineProperty(n,"experiments",(function(){return i.map(t.experiments,(function(t){return v[t.id]}))}),"campaign"),n}),"campaignMap","byId"),i.each(t.experiments,(function(t){o.defineProperty(v,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"changes",(function(){return i.map(t.changes,g)}),"experiment"),o.defineProperty(n,"variations",(function(){return i.map(t.variations,(function(t){return h[t.id]}))}),"experiment"),n}),"experimentMap","byId"),i.each(t.variations,(function(t){o.defineProperty(h,t.id,(function(){var n=i.extend({},t);return o.defineProperty(n,"actions",(function(){return i.map(t.actions,(function(t){return i.extend({},t,{changes:i.map(t.changes,g)})}))}),"variation"),n}),"variationMap","byId")}))}))})),p.groups=c.getGroupsMap(),p}],n.visitor=["stores/visitor",function(t){return i.cloneDeep(t.getVisitorProfile())}],n.visitor_id=["stores/visitor_id",function(t){return{randomId:t.getRandomId()}}],n.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(t,n,e,o,a,l,d){return{getCampaignStates:function(r){var o={},u=f(e,n,a,t,l,r,{includeOfferConsistency:!1});return i.each(u,(function(t){o[t.id]=t})),o},getExperimentStates:function(r){var o=f(e,n,a,t,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),u=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(t,n){var e=n.allExperiments[0];return t[e.id]=i.extend({},i.pick(n,u),{id:e.id,experimentName:e.name,isInExperimentHoldback:n.isInCampaignHoldback}),t}),{})},getCampaignStateLists:function(r){var o={},u=f(e,n,a,t,l,r,{includeOfferConsistency:!0});return i.each(u,(function(t){var n=t.id;o[n]||(o[n]=[]),o[n].push(t)})),o},getPageStates:function(t){var n=a.getAll(),e=i.reduce(n,(function(t,n){var e=o.get(n.id);return t[n.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(n,["isActive","metadata"])),t[n.id].isActive=!!t[n.id].isActive,t}),{});return t?i.pickBy(e,t):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var t=e.getLayerStates(),r={};return i.each(t,(function(t){var e=n.get(t.layerId);if(t.decision&&t.decision.experimentId&&(r[t.decision.experimentId]={id:t.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:t.decision.experimentId});if(o&&t.decision.variationId)var a=i.find(o.variations,{id:t.decision.variationId}),u=i.findIndex(o.variations,{id:t.decision.variationId});a&&(r[t.decision.experimentId]={id:t.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var t={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(n){i.each(n,(function(n){t[n.experiment.id]=!0}))})),i.keys(t)},getRedirectInfo:function(){var t=c.getExperimentAndVariation();return t&&(t.referrer=c.getReferrer()),t},getDecisionString:function(t){if(!t)throw new Error("Must pass a config to getDecisionString");t=i.extend({maxLength:255,shouldCleanString:!1},t);var o=s(e,n,d,t.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,t.maxLength,t.shouldCleanString):null},getDecisionObject:function(t){if(!t)throw new Error("Must pass a config to getDecisionObject");t=i.extend({maxLength:255,shouldCleanString:!1},t);var o=s(e,n,d,t.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,t.shouldCleanString),c=i.mapValues(a.names,(function(n,e){return r.combineAndTruncateIdAndName(n,a.idStrings[e],t.maxLength)})),f={experiment:c.experiment,variation:c.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:c.layer,holdback:o.isLayerHoldback}),f}}}],n.utils=e(8047).create(),n.jquery=["env/jquery",function(t){return t}],n.event_emitter=e(4219)},1205:function(t,n,e){var i=e(3868),r=e(4750),o="optimizelyDataApi";n.registerFunction=function(t,n){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[t]||(e[t]=n)},n.unregisterFunction=function(t){var n=r.getGlobal(o);n&&n[t]&&(n[t]=function(){i.log('Ignoring attempt to call "'+o+"."+t+'" which has been unregistered.')})},n.getFunction=function(t){return r.getGlobal(o)[t]}},137:function(t,n,e){var i=e(7237),r=e(3868),o=e(3948),a=e(6553),u=a.get("stores/plugins"),c=e(856),s=e(1968),f=e(4361),l=[e(4266),e(1924),e(5685)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];n.push=function(t,n){var e,o,a,u;if(!i.isArray(t)&&i.isObject(t))u=i.isUndefined(t.version)?1:t.version,e=t.type,a=[t];else if(i.isArray(t))u=0,e=t[0],a=t.slice(1);else{if(!i.isString(t))return r.warn("API / Ignoring non-array/object/string argument:",t),!1;u=0,e=t,a=[]}if(l[u]&&(o=l[u][e]),n&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(s){r.error(s)}return!0},n.get=function(t){if("state"===t){r.log('API / Getting module: "'+t+'"');var n=o[t];if(n?i.isArray(n)&&(n=a.evaluate(n)):n=u.getPlugin(s.PluginTypes.apiModules,t),n)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+t}),n;r.warn('Module "'+t+'" not found.')}else r.warn('Module "'+t+'" not found.')}},2879:function(t,n,e){var i=e(3599),r=e(856),o=e(4361),a=e(3868);n.defineProperty=function(t,n,e,u,c){i(t,n,(function(){var t=["prop",u,c||n].join(".");return a.debug('Evaluating getter: "'+t+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:t}),e()}),!0)}},4266:function(t,n,e){var i=e(7237),r=e(1924);function o(t){var n,e={};if(t)if(a(t))n=Number(t);else{if("object"!=typeof t)throw new Error("tracker: Revenue argument "+t+"not a number.");if("revenue"in(e=i.extend({},t))){if(!a(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");n=Number(e.revenue),delete e.revenue}}return i.isUndefined(n)||(e.revenue=n),e}function a(t){return i.isNumber(t)||i.isString(t)&&Number(t)==t}n.activateGeoDelayedExperiments=function(t,n){n||(n=t.lists?"odds":"cdn3"),r.dataFromSource({data:t,source:n})},n.activateSiteCatalyst=function(t){t&&t.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:t.sVariable}})},n.bucketVisitor=function(t,n){if(t&&n){var e={experimentId:String(t)};n>256?e.variationId=String(n):e.variationIndex=String(n),r.bucketVisitor(e)}},n.bucketUser=n.bucketVisitor,n.disable=function(t){r.disable({scope:t})},n.log=function(t){i.isUndefined(t)&&(t=!0),r.log({level:t?"INFO":"OFF"})},n.optOut=function(t){i.isUndefined(t)&&(t=!0),r.optOut({isOptOut:t})},n.setCookieDomain=function(t){r.cookieDomain({cookieDomain:t})},n.setCookieExpiration=function(t){r.cookieExpiration({cookieExpirationDays:t})},n.setDimensionValue=function(t,n){var e={};e[t]=n,r.user({attributes:e})},n.setUserId=function(t){r.user({userId:t})},n.setGA4UserId=function(t){r.ga4User({ga4UserId:t})},n.storeThirdPartyData=function(t,n){r.dataFromSource({source:t,data:n})},n.trackEvent=function(t,n){r.event({eventName:t,tags:o(n)})}},8850:function(t,n,e){var i=e(7237),r=e(6553),o=e(8235),a=e(2879),u=r.get("stores/change_data");n.translateDecisionToCampaignDecision=function(t){return c(i.cloneDeep(t),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},n.translateLayerEventToCampaignEvent=function(t){var e={};return a.defineProperty(e,"campaign",(function(){return function(t){var e=i.cloneDeep(t);return e.changes&&(e.changes=i.map(e.changes,n.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(t){t.changes&&(t.changes=i.map(t.changes,n.dereferenceChangeId)),t.variations&&i.each(t.variations,(function(t){t.actions&&i.each(t.actions,(function(t){t.changes&&(t.changes=i.map(t.changes,n.dereferenceChangeId))}))}))})),e}(t.data.layer)}),"campaignEvent"),e.decisionTicket=t.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(t.data.decision),e.audiences=t.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},n.translateViewActivatedToPageActivated=function(t){return{type:"lifecycle",name:"pageActivated",data:{page:t.data.view}}},n.dereferenceChangeId=function(t){var n=u.getChange(t);return n?o.safeReference(n):t};var c=function(t,n){var e=i.omit(t,i.keys(n));return i.each(n,(function(n,i){e[n]=t[i]})),e}},8047:function(t,n,e){var i=e(5033).Promise,r=e(4308).o,o=e(5361).poll,a=e(150).x,u=e(406).a;n.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},9011:function(t){t.exports={DEFAULT_INTERVAL:20}},4308:function(t,n,e){var i=e(7237),r=(e(856),e(6553)),o=r.get("stores/directive"),a=e(7323),u=(e(2122),e(1968),e(4361),e(1954).generate),c=e(5361),s=e(4750),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(t){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(t){var n=c.poll(i.partial(h,t));l[t].cancelObservation=function(){n(),delete l[t]}};var t,n=function(){this.disconnect(),i.each(i.keys(l),h),this.observe(r,e)},e={attributes:!0,childList:!0,subtree:!0,characterData:!0},r=a.getDocumentElement();return t=new MutationObserver(n),function(n){var o=l[n];t.observe(r,e),o.cancelObservation=function(){delete l[n],i.isEmpty(l)&&t.disconnect()}}}(),d(t)};function v(t){var n=l[t];n&&n.cancelObservation&&n.cancelObservation()}function h(t){if(l[t]){if(function(t){var n=t.options.timeout;if(null!==n)if("function"==typeof n)try{return n()}catch(e){}else if(Date.now()-t.startTime>n)return!0;return!1}(l[t]))return 0===l[t].matchedCount&&i.isFunction(l[t].options.onTimeout)&&l[t].options.onTimeout(),void v(t);var n=a.querySelectorAll(l[t].selector);n.length&&(i.each(n,(function(n){n.T&&n.T[t]||l[t].callbackQueue.push(n)})),function(t){for(;l[t]&&l[t].callbackQueue.length;){var n=l[t].callbackQueue.shift();if(p(n,t),l[t].matchedCount=l[t].matchedCount+1,l[t].callback(n),l[t]&&l[t].options.once)return void v(t)}}(t))}}function p(t,n){t.T||(t.T={}),t.T[n]=!0}n.o=function(t,n,e){if(!function(t){try{a.querySelector(t)}catch(n){return!1}return!0}(t))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(n))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:n,callbackQueue:[],matchedCount:0,options:e,selector:t,startTime:Date.now()},d(r),s.setTimeout(i.bind(h,null,r),0),i.partial(v,r)}},5361:function(t,n,e){var i=e(7237),r=(e(856),e(6553)),o=(e(1968),e(4361),e(1954).generate),a=e(4750),u=e(9011).DEFAULT_INTERVAL,c=(r.get("stores/rum"),{});function s(t){c[t]&&i.each(c[t].callbacks,(function(t){t.call(null)}))}function f(t,n){c[n]&&c[n].callbacks[t]&&(delete c[n].callbacks[t],i.some(c[n].callbacks)||(clearInterval(c[n].id),delete c[n]))}n.poll=function(t,n){i.isNumber(n)||(n=u),c[n]||(c[n]={callbacks:{},id:a.setInterval(i.partial(s,n),n)});var e=o();return c[n].callbacks[e]=t,i.partial(f,e,n)},n.cancelAll=function(){i.each(c,(function(t,n){clearInterval(t.id),delete c[n]}))}},150:function(t,n,e){var i=e(5033).Promise,r=e(4308).o;n.x=function(t){return new i((function(n,e){r(t,n,{once:!0})}))}},406:function(t,n,e){var i=e(5033).Promise,r=e(5361).poll;n.a=function(t){return new i((function(n,e){if(t())n();else var i=r((function(){t()&&(i(),n())}))}))}},1924:function(t,n,e){var i=e(7237),r=e(856),o=e(137),a=e(3948),u=e(2872),c=e(1968),s=e(1203),f=e(2626),l=e(4472),d=e(1922).v,v=e(2074),h=e(5046),p=e(1729),g=e(5987),m=e(798),_=e(4361),y=e(7648),w=e(8138),b=e(3868),E=e(3697),I=e(2982),A=e(4396),T=e(9213),S=e(6553),k=S.get("stores/dimension_data"),R=(S.get("stores/view"),S.get("stores/view_data")),C=S.get("stores/visitor_id"),N=S.get("stores/layer_data"),D=S.get("stores/directive"),O=n.ApiListenerError=d("ApiListenerError");n.event=function(t){var n;switch(t.eventType){case"click":n=function(t){var n;return t.eventData&&(n=g.create(t.eventData.id,t.eventData.apiName,"click",t.eventData)),function(){var t=s.trackClickEvent(n);t?b.log("API / Tracking click event:",t):b.log("API / Not tracking click event:",t)}}(t);break;case"decision":n=function(t){var n=t.eventData,e=w.createLayerState(n.layerId,n.experimentId,n.variationId,n.isLayerHoldback,n.isLayerConcluded),i=w.createSingle(n.layerId,n.experimentId,n.variationId);return function(){w.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),b.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(t);break;case"pageview":n=function(t){var n=A.create(t.eventData.id,t.eventData.apiName),e=A.createState(n.id);return function(){var t=s.trackViewActivation(n,e);t?b.log("API / Tracking pageview event:",t):b.log("API / Not tracking pageview event:",t)}}(t);break;default:n=function(t){var n;return t.eventId&&(n=g.create(t.eventId,t.eventName,"custom")),A.updateAllViewTags(),function(){s.trackCustomEvent(t.eventName,t.tags,n,t.properties)?b.log("API / Tracking custom event:",t.eventName,t.tags):b.log("API / Not tracking custom event:",t.eventName)}}(t)}C.getBucketingId()?n():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:n})},n.clientMetadata=function(t){_.dispatch(r.SET_CLIENT_NAME,t.clientName),_.dispatch(r.SET_CLIENT_VERSION,t.clientVersion),t.forceVariationIds&&_.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t.forceVariationIds})},n.priorRedirectString=function(t){I.load(t.value)},n.microsnippetError=function(t){var n=t.errorData.metadata&&t.errorData.metadata.err||{};n.name=t.errorData.code;var e={engine:t.engine,msVersion:t.errorData.msVersion,requestId:t.errorData.requestId,projectId:t.errorData.projectId,snippetKey:t.errorData.snippetKey,args:t.errorData.args};p.handleError(n,e)},n.rum=function(t){_.dispatch(r.SET_RUM_DATA,t.eventData)},n.initialViewStates=function(t){var n=i.map(t.states,(function(t,n){return{id:n,isActive:t}}));A.registerViews(n)},n.page=function(t){var n=R.getByApiName(t.pageName);if(!n)throw new Error('Unknown page "'+t.pageName+'"');var e=!t.hasOwnProperty("isActive")||t.isActive,i=function(){e?A.activateViaAPI(n,t.tags):(A.deactivate(n),b.log("API / Deactivated Page",A.description(n)))};C.getBucketingId()?i():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},n.tags=function(t){A.setGlobalTags(t.tags)},n.user=function(t){t.visitorId&&(C.getBucketingId()?(b.log("API / Setting visitor Id:",t.visitorId),T.setId({randomId:t.visitorId})):(b.log("API / Setting visitor Id for activation:",t.visitorId),_.dispatch(r.SET_VISITOR_ID_VIA_API,t.visitorId))),i.each(["IP","location","queryParams","url"],(function(n){t[n]&&(b.log("API / Setting",n,":",t[n]),x(n,t[n],!1))})),b.log("API / Setting visitor custom attributes:",t.attributes),i.each(t.attributes,(function(t,n){var e,i,r=n,o=k.getById(n)||k.getByApiName(n);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:t};e&&(a.name=e),x(r,a,!0)}))},n.ga4User=function(t){t.ga4UserId?(b.log("API / Setting ga4 user id in the global store:",t.ga4UserId),_.dispatch(r.SET_GA4_USER_ID,t)):b.error('API / Argument "ga4UserId" is missing')};var x=function(t,n,e){var i=[{key:e?["custom",t]:[t],value:n,metadata:{lastModified:v.now()}}],o=function(){_.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};C.getBucketingId()?o():_.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};n.optOut=function(t){var n=!t.hasOwnProperty("isOptOut")||t.isOptOut;h.setOptOut(n)},n.cookieExpiration=function(t){var n=t.cookieExpirationDays;n<90&&(b.error('Argument "cookieExpirationDays"=',n,"less than minimum days:",90,", setting to minimum."),n=90),b.log("API / Setting cookie age to",n,"days."),_.dispatch(r.SET_COOKIE_AGE,86400*n)},n.extendCookieLifetime=function(t){t=i.extend({isEnabled:!0},t),b.log("API / Setting cookie automatic lifetime extension to",t.isEnabled),_.dispatch(r.SET_COOKIE_AUTO_REFRESH,t.isEnabled)},n.cookieDomain=function(t){b.log("API / Setting cookie domain to",t.cookieDomain),_.dispatch(r.SET_COOKIE_DOMAIN,t.cookieDomain)},n.disable=function(t){if(t.scope){if("tracking"!==t.scope)throw new Error('Unknown "scope" for disable: '+t.scope);b.log("API / Disabling tracking"),_.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else b.log("API / Disabling everything"),_.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},n.log=function(t){var n=t.level,e=t.match;i.isUndefined(n)&&(n="INFO"),i.isUndefined(e)&&(e=""),b.setLogMatcher(e),b.setLogLevel(n)},n.registerModule=function(t){var n="custom/"+t.moduleName;if(a[n]||o.get(n))throw new Error('Module name "'+n+'" is reserved. Will not be registered as plugin.');E.registerApiModule(n,t.module)},n.dataFromSource=function(t){var n=t.source;l.makeAsyncRequest(n),l.resolveRequest(n,t.data)},n.addListener=function(t){if(!i.isFunction(t.handler))throw new Error("A handler function must be supplied");(t=i.omit(t,"type")).publicOnly=!0,t.emitErrors=!0;var n=t.handler;t.handler=function(t){try{return n(t)}catch(e){throw new O(e)}},m.on(t)},n.removeListener=function(t){if(!t.token)throw new Error("Must supply a token to removeListener");m.off(t.token)},n.load=function(t){t.data=i.extend({},t.data),u.normalizeClientData(t.data),_.dispatch(r.DATA_LOADED,{data:t.data})},n.integrationSettings=function(t){if(!t.id)throw new Error("id is required");if(!t.settings)throw new Error("settings is required");_.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},t.settings,{id:t.id}))},n.bucketVisitor=function(t){if(!t.variationId&&i.isUndefined(t.variationIndex)||t.variationId&&t.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!t.experimentId)throw new Error("An experimentId is required.");var n,e,r=t.campaignId;if(r){if(!(n=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(n=N.getLayerByExperimentId(t.experimentId)).id))throw new Error("Could not find layer for experiment "+t.experimentId);if(!(e=i.find(n.experiments,{id:t.experimentId})))throw new Error("Could not find experiment "+t.experimentId+" in layer "+r);var o=t.variationId;if(i.isUndefined(t.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+t.experimentId)}else if(!(o=e.variations[t.variationIndex].id))throw new Error("Could not find variation at index "+t.variationIndex+" in experiment "+t.experimentId);T.updateVariationIdMap(r,t.experimentId,o),C.getBucketingId()&&T.persistVariationIdMap(),T.updateContextualMabMap(r,t.experimentId,{variationId:o}),C.getBucketingId()&&T.persistContextualMabMap()},n.waitForOriginSync=function(t){if(!i.isArray(t.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+y.stringify(t.canonicalOrigins));i.each(t.canonicalOrigins,(function(t){if(!i.isString(t))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===t?"undefined":(n=t)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n));var n})),_.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:t.canonicalOrigins})},n.disableCrossOrigin=function(){b.log("API / cross origin tracking is DISABLED"),_.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},n.activate=function(){D.shouldActivate(),b.debug("Not activating.")},n.sendEvents=function(){f.emitSendEvents()},n.holdEvents=function(){f.emitHoldEvents()}},5685:function(){},1644:function(t,n,e){var i=e(7237),r=e(1922).v,o=n.ActivationCodeError=r("ActivationCodeError"),a=(n.ProjectJSError=r("ProjectJSError"),e(9035)),u=e(856),c=e(1203),s=e(2626),f=e(2587),l=e(3081),d=e(2872),v=e(2074),h=e(6600),p=e(6553),g=e(5046),m=e(7323),_=e(1968),y=e(798),w=e(1591),b=e(4004),E=e(4361),I=e(6936),A=e(8138),T=e(4089).DT,S=e(3868),k=e(504),R=(e(7794),e(3697)),C=e(5833),N=e(5033).Promise,D=e(5803),O=e(2982),x=(e(2537),e(5979)),M=e(4396),P=e(9213),L=e(4750),U=(p=e(6553)).get("stores/session"),V=p.get("stores/audience_data"),F=p.get("stores/action_data"),B=p.get("stores/cleanup"),z=p.get("stores/directive"),j=p.get("stores/global"),G=p.get("stores/group_data"),q=p.get("stores/layer_data"),H=p.get("stores/layer"),Y=p.get("stores/pending_events"),K=p.get("stores/plugins"),$=p.get("stores/rum"),W=p.get("stores/visitor"),X=p.get("stores/view_data"),J=p.get("stores/view"),Q=p.get("stores/visitor_id"),Z=p.get("stores/visitor_bucketing"),tt=p.get("stores/xdomain"),nt=e(137),et=e(1729),it=e(8930),rt=!1,ot=n;function at(t){et.handleError(t.data.error,t.data.metadata)}function ut(t,n){E.dispatch(u.SET_RUM_DATA,{data:{extras:{xdAttempt:t,xdError:n?n.toString():void 0}}})}function ct(t,n,e){t=t||[];var r=j.getGlobalHoldbackThreshold(),o=Q.getBucketingId();if(!o)throw new Error("bucketingId not set");var a,u={bucketingId:o,visitorProfile:W.getVisitorProfile(),audiences:t,globalHoldback:r,preferredVariationMap:a,layer:n};return n&&e&&h.isPageIdRelevant(n)?i.map(e,(function(t){return h.createTicket(i.extend({},u,{pageId:t}))})):[h.createTicket(u)]}function st(t,e,r,o){try{var a=function(t){return{bucketingId:Q.getBucketingId(),preferredLayerId:Z.getPreferredLayerMap()[t.id]}}(o),c=h.decideGroup(o,a);if(c.reason)return S.debug("Not activating Group",I.description(o),"; reason:",c.reason),$.getSampleRum()&&E.dispatch(u.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),N.resolve();var s=q.get(c.layerId);if(!s)return S.debug("Visitor was bucketed into a Campaign ("+c.layerId+") which is not in this snippet"),N.resolve();var f=i.filter(s.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(S.debug("Not activating Group",I.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),N.resolve()):($.getSampleRum()&&E.dispatch(u.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),n.decideAndExecuteLayerASAP(t,e,f,s))}catch(l){return S.error("Error getting decision for Group",I.description(o),"; ",l),N.reject(l)}}function ft(t,n){var e={};return i.each(t,(function(t){i.isArray(t)?i.extend(e,ft(t,n)):i.isObject(t)&&n[t.type]&&(e[t.type]=!0)})),e}function lt(t){var n=[];return i.each(t,(function(t){n.push(t.name,t)})),n}function dt(t){var n=B.getCleanupFns(t);if(n.length>0){for(;n.length>0;)n.shift()();E.dispatch(u.CLEAR_CLEANUP_FN,{lifecycle:t})}}n.initialize=function(t){return this.initGlobalStore(t.clientData),this.initializePlugins(t.plugins)},n.initGlobalStore=function(t){d.normalizeClientData(t),y.on({filter:{type:"error"},handler:at}),E.dispatch(u.DATA_LOADED,{data:t}),S.log("Initialized with DATA:",t)},n.initializePlugins=function(t){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(t){var n=!0;return!nt.push(t,n)}))),g.setOptOut(z.shouldOptOut()),!z.isDisabled()&&!z.shouldOptOut()){it.queueBeacons(),m.isReady()?E.dispatch(u.SET_DOMCONTENTLOADED):m.addReadyHandler((function(){E.dispatch(u.SET_DOMCONTENTLOADED)})),i.each(t||[],(function(t){try{t(R)}catch(n){l.emitInternalError(n)}})),i.each(j.getPlugins()||[],(function(t){try{b.apply(t,[R])}catch(n){l.emitError(n)}})),O.load();var e=y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(P.persistVisitorProfile),H.observe(P.persistLayerStates),U.observe(P.persistSessionState),Y.observe(k.persistPendingEvents),y.off(e)}});y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:n.onViewsActivated}),y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:n.onPageDeactivated}),n.initializeApi();var r=k.getPendingEvents();if(r&&(E.dispatch(u.LOAD_PENDING_EVENTS,{events:r}),k.retryPendingEvents(r)),y.on({filter:{type:"lifecycle",name:"activate"},handler:n.activate}),s.emitInitializedEvent(),!z.shouldActivate())return N.resolve();return function(){!1;var t=null;i.isNumber(t)&&0===q.getCount()?(S.log("Activating after delay of",t,"ms because no Experiments are running"),E.dispatch(u.SET_RUM_DATA,{data:{activateDfd:!0}}),L.setTimeout(s.emitActivateEvent,t)):s.emitActivateEvent()}(),N.all([])}S.log("Controller / Is disabled")},n.activate=function(){try{var t=[];S.log("Activated client"),dt(_.Lifecycle.preActivate);var n=!1;rt;var e=v.now();E.dispatch(u.ACTIVATE,{activationId:String(e),activationTimestamp:e});var r=X.getAll();M.registerViews(r,n),P.setId(P.getOrGenerateId()),t.push(c.trackPostRedirectDecisionEvent()),E.dispatch(u.MERGE_VARIATION_ID_MAP,{variationIdMap:P.getVariationIdMap()}),E.dispatch(u.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:P.getContextualMabMap()}),E.dispatch(u.SET_ODP_SEGMENTS,P.getOdpSegments()),E.dispatch(u.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:P.getPreferredLayerMap()}),dt(_.Lifecycle.postVisitorProfileLoad),t.push((g=K.getAllPlugins(_.PluginTypes.visitorProfileProviders),m=W.getVisitorProfile(),P.populateEagerVisitorData(g,m)).then((function(){S.log("Populated visitor profile")})));var o=ct(),a=h.decideGlobal(o);S.log("Made global decision",o,"->",a),E.dispatch(u.RECORD_GLOBAL_DECISION,a);var f=c.trackClientActivation();f?S.log("Tracked activation event",f):S.log("Not tracking activation event");var d=ot.setUpViewActivation(r),p=[];return i.each(d,(function(t){p=p.concat(M.activateMultiple([t]))})),$.getSampleRum()&&E.dispatch(u.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,{viewsInitiallyActivatedCount:p.length}),dt(_.Lifecycle.postViewsActivated),dt(_.Lifecycle.postActivate),s.emitActivatedEvent(),N.all(t).then((function(){y.emit({type:w.TYPES.LIFECYCLE,name:"activateDeferredDone"}),S.log("All immediate effects of activation resolved")}),l.emitError)}catch(b){return l.emitError(b),N.reject(b)}var g,m},ot.setUpViewActivation=function(t){var n=[];return i.each(t,(function(t){i.isBoolean(J.getViewState(t.id).isActive)&&M.isActivationTypeImmediate(t.activationType)?S.debug("Skipping page: already evaluated, presumably at the edge",M.description(t)):M.shouldTriggerImmediately(t.activationType)?n.push(t):t.activationType===_.ViewActivationTypes.callback?(S.debug("Setting up conditional activation for Page",M.description(t)),ot.activateViewOnCallback(t)):t.activationType===_.ViewActivationTypes.polling?(S.debug("Setting up polling activation for Page",M.description(t)),C.pollFor(i.partial(b.apply,t.activationCode),null,i.partial(x.isTimedOut,v.now())).then((function(){M.activateMultiple([t])}))["catch"]((function(n){S.warn("Failed to activate view ",t,n)}))):t.activationType!==_.ViewActivationTypes.manual&&l.emitError(new Error("Unknown view activationType: "+t.activationType))})),n},ot.activateViewOnCallback=function(t){var n={pageId:t.id};Object.defineProperty(n,"isActive",{get:function(){return J.isViewActive(t.id)}});try{b.apply(t.activationCode,[function(n){var e=i.extend({},n,{pageName:t.apiName,type:"page"});nt.push(e)},n])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+M.description(t));l.emitError(e,{originalError:r,userError:!0})}},n.onViewsActivated=function(t){var e,r=t.data.views,o=i.map(r,"id");try{if(!Q.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(t){var e=q.getAllByPageIds(t),r=z.getForceVariationIds(),o=z.getForceAudienceIds(),a=!i.isEmpty(r);a&&S.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(t,n){return n.groupId?t.groups[n.groupId]||(t.groups[n.groupId]=G.get(n.groupId)):t.individual.push(n),t}),{groups:{},individual:[]});S.log("Deciding Campaigns/Experiments for Page(s)",t);var c=i.map(u.groups,I.description).join(", ");S.log("Groups:",c);var s=i.map(u.individual,A.description).join(", ");S.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=i.map(u.groups,i.partial(st,r,o,t))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,t));return n.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return N.all(d).then((function(n){var e=i.filter(n,(function(t){return!!t}));return S.log("All Campaigns/Experiments for Page(s) (by Campaign id)",t,"resolved:",i.map(e,A.description).join(", ")),e}))}(o)["catch"](l.emitError);return e=N.all(i.map(r,(function(t){var n=function(){M.parseViewTags(t);var n=c.trackViewActivation(t);n?S.log("Tracked activation for Page",M.description(t),n):S.log("Not Tracking activation for Page",M.description(t))};return m.isReady()?N.resolve(n()):C.pollFor(m.isReady,1e3).then(n)}))),N.all([a,e])}catch(u){l.emitError(u)}},n.onPageDeactivated=function(t){var n=t.data.page,e=F.getAllActionIdsByPageId(n.id);i.each(e,(function(t){var e=F.getActionState(t);e&&(i.each(e,(function(t,e){if(t.cancel)try{t.cancel(),S.debug("Controller / Canceled change",e,"observation due to deactivation of page:",n)}catch(i){S.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(n.undoOnDeactivation&&t.undo)try{t.undo(),S.debug("Controller / Undid change",e,"due to deactivation of page:",n)}catch(r){S.error("Controller / Error undoing change upon deactivation of page.",r)}})),E.dispatch(u.REMOVE_ACTION_STATE,{actionId:t}),S.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",n,t))}))},n.initializeApi=function(){var t={push:nt.push};t.get=nt.get;var n=window.optimizely;i.isArray(n)&&i.each(n,(function(n){t.push(n)})),t.data={note:"Obsolete, use optimizely.get('data') instead"},t.state={},window.optimizely=t},n.persistItemsWithId=function(t){return i.each(t,(function(t,n){P.checkKeyForVisitorId(n)&&T.setItem(n,t)})),t},n.initializeXDomainStorage=function(){var t=e(3660),r=!!P.getCurrentId(),o=!!r&&P.hasSomeData();r?o?S.log("xd / Existing visitor; has data on this origin"):S.log("xd / Existing visitor; new to this origin"):S.log("xd / New visitor");var a=j.getAccountId(),c="https://__SUBDOMAIN__cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),f="/client_storage/a"+a+".html";t.subscribe((function(t,n){P.checkKeyForVisitorId(t)&&T.setItem(t,n)}));var l=t.fetchAll().then((function(n){if(!Q.getVisitorIdLocator()){var e=tt.getCanonicalOrigins();if(e){var i=t.getXDomainUserId(n,e);i&&(S.log("Syncing cross-origin visitor randomId:",i),P.maybePersistVisitorId({randomId:i}))}}return P.deleteOldForeignData(),n})).then(n.persistItemsWithId).then((function(t){if(P.loadForeignData(),r&&!o){var n=!i.isEmpty(t);S.debug("xd / Loaded foreign data? ",n),ut(n)}S.log("Loaded visitor data from foreign origins"),s.emitOriginsSyncedEvent()}),(function(t){throw r&&!o&&(S.debug("xd / Failed to load foreign data:",t),ut(!1,t)),t}));return N.all([t.load(c,f)["catch"]((function(t){throw S.debug("xd / Failed to load iframe:",t),r&&!o&&ut(!1,t),t})),l["catch"]((function(t){S.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",t.message),S.debug("xd / Enqueuing sync to happen after visitorId set."),E.dispatch(u.ADD_CLEANUP_FN,{lifecycle:_.Lifecycle.postVisitorProfileLoad,cleanupFn:s.emitOriginsSyncedEvent})}))])},n.decideAndExecuteLayerASAP=function(t,e,r,o){return new N((function(l,d){try{!function(t,n,e,r,o){if(n.length||e.length)return void o(ct([],void 0,r));var a=A.relatedAudienceIds(t),c=i.reduce(a,(function(t,n){var e=V.get(n);return!e||t.push(e),t}),[]),s=K.getAllPlugins(_.PluginTypes.audienceMatchers);if($.getSampleRum()){var l={};if(i.each(c,(function(t){i.extend(l,ft(t.conditions,s))})),!i.isEmpty(l)){var d=i.keys(l);E.dispatch(u.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:t.id})}}var v=function(t){S.debug("Audience list for extracting types",t);try{var n=new Set(i(t).map("conditions").flattenDeep().filter((function(t){return"string"!=typeof t})).map("type").value());return n.has("time_and_day")&&n.add("currentTimestamp"),S.debug("Extracted unique types from audiences",n),n}catch(e){return S.error("An error occurred while extracting types from audiences:",e),new Set}}(c),h=K.getAllPlugins(_.PluginTypes.visitorProfileProviders),p=W.getVisitorProfile();P.populateLazyVisitorData(h,p,v),function(t,n,e,r){var o=i.reduce(t,(function(t,e){return i.extend(t,f.requiredAudienceFieldsForConditions(e.conditions,n))}),{}),a=i.reduce(o,(function(t,n){if(i.isUndefined(P.getAttribute(n))){var e=P.getPendingAttributeValue(n);i.isUndefined(e)||t.push(e)}return t}),[]);if(0===a.length)return r();var u=[].concat(t),c=D.firstToResolve(i.map(a,(function(t){return N.resolve(t).then((function(){var t=W.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(f.isInAudience(t,e,n))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));N.race([c,new N((function(t,n){L.setTimeout(n,e)}))]).then((function(){S.log("Activating Campaign after pending Audiences resolved",t),r()}),(function(){S.log("Activating Campaign after timeout on Audiences",t),r()}))}(c,s,A.getActivationTimeout(t),(function(){var n=ct(c,t,r);i.map(n,(function(n){!function(t,n,e){var r=i.map(t.audienceIds,i.bind(V.get,V)),o=i.filter(n,(function(n){return!i.includes(t.audienceIds,n.id)}));S.log("When deciding Campaign",A.description(e),"visitor is in audiences:",lt(r),"and not in audiences:",lt(o))}(n,c,t)})),o(n)}))}(o,t,e,r,(function(f){i.each(f,(function(f){var l=f.pageId?[f.pageId]:r;S.debug("Deciding layer: ",o,"with decisionTicket: ",f,"and actionViewIds: ",l),function(t,e,r,o,f){var l=A.description(t);S.log("Activating Campaign",l,"on Page(s)",o),r.length&&(S.log("Applying force audienceIds:",r,"to Campaign",l),(f=i.cloneDeep(f)).audienceIds=r);var d=n.decideLayer(t,f,e),v=!(!e.length&&!r.length),p=n.getActionsForDecision(t,d,v),g=function(t,n){return i.filter(t,(function(t){return i.isUndefined(t.pageId)||i.includes(n,t.pageId)}))}(p.actions,o);if(p.maybeExecute&&function(t,n,e,r){var o=A.description(n);S.log("Preparing actions",t,"for Campaign",o,"on Page(s)",r),i.forEach(t,a.prepareAction)}(g,t,0,o),i.forEach(o,(function(){c.trackDecisionEvent(d,f)})),s.emitLayerDecided({layer:t,decisionTicket:f,decision:d}),d.error)throw d.error;if($.getSampleRum()){E.dispatch(u.RECORD_LAYER_POLICY_USAGE,{policy:t.policy,layerId:t.id});var m=function(t){var n={};return i.each(t,(function(t){i.each(t.changeSet,(function(t){n[t.type]||(n[t.type]=!0)}))})),n}(p.actions);E.dispatch(u.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:t.id}),i.isEmpty(t.integrationSettings)||E.dispatch(u.RECORD_INTEGRATION_USAGE,{integrations:A.getIntegrationTypes(t),layerId:t.id})}if(!h.isInCohort(d))return void S.log("Not activating Campaign: "+A.description(t)+"; not in the cohort because:",d.reason);p.maybeExecute&&function(t,n,e,r){var o=A.description(n);S.log("Executing actions",t,"for Campaign",o,"on Page(s)",r),N.all(i.map(t,(function(t){return a.executePreparedAction(t).then(i.partial(s.emitActionAppliedEvent,t))}))).then((function(){S.log("All page actions for",e,"applied:",t),s.emitActionsForDecisionAppliedEvent(e,t)}))["catch"]((function(t){S.warn("Error evaluating page actions for decision",e,"because:",t)}))}(g,t,d,o)}(o,t,e,l,f)})),l(o)}))}catch(v){S.error("Error getting decision for Campaign: "+A.description(o),v),d(v)}}))},n.decideLayer=function(t,n,e){var i;var r=A.description(t);i=e.length?h.getDummyLayerDecision(t,e):h.decideLayer(t,n),S.log("Recording decision for Campaign",r,n,"->",i),A.recordLayerDecision(t.id,n,i),!1;return i},n.getActionsForDecision=function(t,n,e){var i=A.description(t),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(F.getLayerActions(n.layerId)||[],F.getExperimentActions(n.experimentId)||[],F.getExperimentVariationActions(n.experimentId,n.variationId)||[]),!e&&j.isGlobalHoldback())return S.log(r,i,"(visitor is in global holdback)"),o;if(n.isLayerHoldback)return S.log(r,i,"(visitor is in layer holdback)"),o;if(!n.experimentId||!n.variationId)return S.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,S.log("Got Actions for Campaign:",i,o.actions),o}},3570:function(t,n,e){var i=e(5033).Promise,r=e(2074),o=e(6553).get("stores/plugins"),a=e(1968),u=e(3868);n.create=function(t,n,e){var c={identifier:t.id,action:n,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,t.type);if(!s)throw new Error("Unrecognized change type "+t.type);return new s(t,c)}catch(l){u.error("Change applier was never properly constructed:",l);var f={apply:function(){return i.reject(l)}};return f}}},8342:function(t){t.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},6458:function(t,n,e){var i=e(7237),r=e(8342).CHANGE_DATA_KEY;function o(t,n){return[t,n].join("_")}n.getData=function(t,n,e){var i=o(n,e);return t[r]&&t[r][i]?t[r][i]:null},n.hasData=function(t){return Boolean(t&&t[r]&&!i.isEmpty(t[r]))},n.removeData=function(t,n,e){t[r]&&delete t[r][o(n,e)]},n.setData=function(t,n,e,i){if("object"!=typeof i)throw new Error("setData expects an object");t[r]||(t[r]={}),t[r][o(n,e)]=i}},9093:function(t,n,e){var i=e(4798);t.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",SRCSET:"srcset",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},9035:function(t,n,e){var i=e(7237),r=e(856),o=e(3081),a=e(4472),u=e(1922).v,c=e(2074),s=e(6553),f=e(4361),l=e(3868),d=e(5033).Promise,v=e(6563),h=s.get("stores/global"),p=s.get("stores/action_data"),g=s.get("stores/change_data"),m=s.get("stores/session"),_=e(3570);e(5979).initialize();var y=u("ActionError");function w(t,n,e){if(p.getActionState(n.id)){var o=p.getChangeApplier(t.id,n.id);if(i.isUndefined(o)){var a={changeId:t.id,actionId:n.id,changeApplier:_.create(t,n,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",t)}else l.warn("Action / Attempted to prepare change for inactive action: ",n)}function b(t,n,e,r){if(!i.includes(r,n)){if(!t[String(n)]){var u=g.getChange(n);if(!u){var s="Change with id "+n+" is absent";return r.length&&(s+=" but listed as a dependency for "+r[r.length-1]),void l.warn(s)}t[String(n)]=new d((function(s){var f=i.map(u.dependencies||[],(function(i){return b(t,i,e,r.concat([n]))}));if(u.src){var h="change_"+u.src,m=a.makeAsyncRequest(h,(function(){return v.addScriptAsync("https://cdn.optimizely.com/public/148927072/data"+u.src,(function(){a.resolveRequest(h)}))})).then((function(){var t=g.getChange(u.id);t||o.emitError(new y("Failed to load async change from src: "+u.src)),w(t,e,c.now())}));f.push(m)}d.all(f).then((function(){var t=c.now(),i=p.getChangeApplier(n,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(n){n?l.log(n):l.debug("Action / Applied change for the first time in "+(c.now()-t)+"ms:",u),s()}))):(l.debug("Action / Not applying change ",n," - No changeApplier found."),void s())}))["catch"]((function(t){l.error("Action / Failed to apply change:",u,t),s()}))}))}return t[String(n)]}l.error("Change with id "+n+" has circular dependencies: "+r.concat(n))}n.prepareAction=function(t){l.debug("Action / Preparing:",t),f.dispatch(r.ACTION_EXECUTED,{actionId:t.id,sessionId:m.getSessionId(),layerId:t.layerId,pageId:t.pageId,timestamp:c.now(),activationId:h.getActivationId()});var n=c.now();i.forEach(t.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||w(a,t,n)}))},n.executePreparedAction=function(t){l.debug("Action / Executing:",t);var n={},e=i.map(t.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return b(n,r,t,[])}));return d.all(e).then((function(){l.debug("changes for action id="+t.id+" applied")}))}},5979:function(t,n,e){var i=e(8342),r=e(6553).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(n.domReadyTime=Date.now())}n.domReadyTime=null,n.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},n.isTimedOut=function(t){var e=Date.now();if(!n.domReadyTime||!t)return!1;var o=Math.max(t,n.domReadyTime);return r.isEditor()&&(o=n.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},1203:function(t,n,e){var i=e(7237),r=e(856),o=e(3081),a=e(7455),u=e(2074),c=e(7615),s=e(6553),f=e(7323),l=e(1968),d=e(8249),v=(e(798),e(1591),e(2968)),h=e(4361),p=e(8138),g=e(3868),m=(e(7794),e(5033).Promise),_=e(7464),y=e(2982),w=(e(2537),e(7642)),b=e(1954),E=s.get("stores/client_metadata"),I=s.get("stores/global"),A=s.get("stores/session"),T=s.get("stores/view"),S=s.get("stores/plugins"),k=s.get("stores/layer"),R=s.get("stores/layer_data"),C=s.get("stores/observed_redirect"),N=s.get("stores/pending_redirect"),D=s.get("stores/visitor"),O=s.get("stores/directive"),x=s.get("stores/event_data"),M=s.get("stores/visitor_id");function P(t,n,e){return void 0===e&&(e=!1),i.extend({},t,{isLayerHoldback:n,isLayerConcluded:e,isGlobalHoldback:!1,clientName:i.isNull(t.clientName)?c.NAME:t.clientName,integrationStringVersion:i.isNull(t.integrationStringVersion)?1:t.integrationStringVersion,anonymizeIP:i.isNull(I.getAnonymizeIP())?void 0:I.getAnonymizeIP(),activationId:I.getActivationId(),decisionTicketAudienceIds:[],sessionId:A.getSessionId(),activeViewStates:[],userFeatures:V(D.getVisitorProfile()),layerStates:k.getLayerStatesForAnalytics()})}function L(t){var n=_.getReferrer()||f.getReferrer();return{eventId:b.generate(),timestamp:u.now(),revision:I.getRevision(),clientName:E.getClientName(),clientVersion:E.getClientVersion(),projectId:I.getProjectId(),accountId:I.getAccountId(),activationId:I.getActivationId(),sessionId:A.getSessionId(),isGlobalHoldback:I.isGlobalHoldback(),namespace:I.getNamespace(),referrer:n,visitorId:M.getRandomId(),activeViewStates:t.activeViewStates,layerStates:t.layerStates,userFeatures:V(t.visitorProfile)}}function U(t){var n,e;return t.pageId?(n=t.pageId,(e=T.getViewState(n))&&e.isActive?e.metadata:{}):{}}function V(t){var n=S.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(n,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(n,e){try{var o=e.provides,a=t[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(t,n){var e=i.isObject(t)?t:{value:t};return i.extend({},{type:o,name:n},e)})):u.push({type:o,value:a});var c=i(u).map((function(t){return i.pick(i.extend({},r,t),i.keys(r))})).filter((function(t){return!!t.value})).value();n=n.concat(c)}}catch(s){g.warn("Error evaluating userFeature against visitorProfile:",s)}return n}),[])}function F(t,n,e){var r=function(t,n){var e=[];return i.each(S.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[t]&&(!n||!i[n]))try{e.push({name:r,hookFn:s.evaluate(i[t])})}catch(o){g.error(o)}})),e}(t,e);g.debug("Found "+r.length+" analytics integrations defining a "+t+" hook"),g.debug("Calling each with data: ",n),i.each(r,(function(t){try{g.debug("Calling plugin: "+t.name),t.hookFn(n),g.debug("Called plugin: "+t.name)}catch(e){g.error(e)}}))}function B(t,n,e){var r=function(t,n){0;var e=[];return i.each(S.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(n,r[t])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(t,n);g.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+t+" timing of "+n.join("|")),g.debug("Calling each with data: ",e),i.each(r,(function(t){try{g.debug("Calling plugin: "+t.name),t.hookFn(e),g.debug("Called plugin: "+t.name)}catch(n){g.error(n)}}))}n.trackClientActivation=function(){if(O.shouldSendTrackingData()){var t,n=(t=L({activeViewStates:[],visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),i.extend(t,{eventTags:{}}));return F("onClientActivation",n),n}},n.trackCustomEvent=function(t,n,e,r){n=n||{},r=r||{},e||(e=x.getByApiName(t));var u=function(t,n,e,r){var o=L({activeViewStates:T.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),a=r&&r.pageId?U(r):T.getActiveViewTags(),u=i.extend({},a,n),c=r&&r.category?r.category:d.OTHER;return i.extend(o,{eventEntityId:r&&r.id,eventApiName:t,eventCategory:c,eventTags:u,eventProperties:e})}(t,n,r,e),c={name:t,type:v.CUSTOM,category:u.eventCategory,tags:i.omit(u.eventTags,"revenue")};if(i.isUndefined(n.revenue)||(c.revenue=n.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:t,apiName:e?e.apiName:void 0,type:v.CUSTOM,properties:u.eventProperties,tags:i.omit(u.eventTags,"revenue"),category:u.eventCategory,metrics:c.revenue?{revenue:c.revenue}:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent(c),F("onCustomEvent",u),u},n.trackDecisionEvent=function(t,n,e){e||(e=R.get(t.layerId));var o=b.generate();h.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:n.pageId,decisionId:o});var a=function(t,n,e,r){var o=null,a=null,c=null;if(n.experimentId){var s=i.find(r.experiments,{id:n.experimentId});if(s&&(o=s.name||null,c=s.integrationSettings,n.variationId)){var l=i.find(s.variations,{id:n.variationId});l&&(a=l.name||null)}}var d=_.getReferrer()||f.getReferrer(),v={sessionId:A.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:M.getRandomId(),decisionId:t,activationId:I.getActivationId(),namespace:I.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:n.variationId,variationName:a,experimentId:n.experimentId,experimentName:o,layerId:n.layerId,layerName:r.name,layerPolicy:r.policy,accountId:I.getAccountId(),projectId:I.getProjectId(),revision:String(I.getRevision()),clientName:E.getClientName(),clientVersion:E.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,c)};return v}(o,t,n,e),c=N.isExpectingRedirect(),s=N.getLayerId(),l=p.description(e);if(c&&s===e.id&&(y.persist(a,"COOKIE"),g.log("Relaying decision for redirect Campaign",l)),O.shouldSendTrackingData()){var d=P(a,t.isLayerHoldback,t.isLayerConcluded);if(c&&s===e.id){var v=w.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=v,B(v,[w.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),g.log("Called trackLayerDecision for redirect Campaign",l,d)}else{v=w.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=v,B(v,[w.NonRedirectPolicies.TRACK_IMMEDIATELY],d),g.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else g.log("Analytics / Not tracking decision for Campaign",p.description(e))},n.trackPostRedirectDecisionEvent=function(){if(!O.shouldSendTrackingData()||C.hasTracked())return m.resolve();var t=C.get();if(!t)return m.resolve();var n=P(t,!1),e=w.TrackLayerDecisionTimingFlags.postRedirectPolicy;return n.timing=e,B(e,[w.PostRedirectPolicies.TRACK_IMMEDIATELY],n),B(w.TrackLayerDecisionTimingFlags.postRedirectPolicy,[w.PostRedirectPolicies.TRACK_AFTER_SYNC],n),h.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA),m.resolve()},n.trackClickEvent=function(t){var n=function(t){var n=L({activeViewStates:T.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()}),e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector,r=t.apiName,o=t.category||d.OTHER,a=t.id,u=U(t);return i.extend(n,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:t.pageId,selector:e})}(t),e={name:t.apiName,type:t.eventType,category:n.eventCategory,tags:n.eventTags};if(o.emitAnalyticsEvent({name:t.name||t.apiName,apiName:t?t.apiName:void 0,type:t.eventType,category:n.eventCategory,tags:n.eventTags,metrics:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent(e),F("onClickEvent",n),n},n.trackViewActivation=function(t,n){if(n||(n=T.getViewState(t.id)),n.isActive){var e=function(t,n){var e=L({activeViewStates:T.getActiveViewStates(),visitorProfile:D.getVisitorProfile(),layerStates:k.getLayerStatesForAnalytics()});return i.extend(e,{pageId:t.id,pageApiName:t.apiName,viewCategory:t.category,eventTags:n.metadata})}(t,n);if(o.emitAnalyticsEvent({name:t.name||e.pageApiName,apiName:e.pageApiName,type:v.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:v.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),h.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:t.id,eventData:e}),F("onPageActivated",e),e}else g.debug("Inactive view passed to `trackViewActivation`")}},2982:function(t,n,e){var i=e(7237),r=e(856),o=e(4294),a=e(3081),u=e(6553),c=e(1968),s=e(4361),f=e(3868),l=e(7642),d=u.get("stores/plugins"),v=".",h=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(t){return i.map(t,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(t){return i.map(t.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(t,n){var e=null;if(t){var r=d.getPlugin(c.PluginTypes.analyticsTrackers,n);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(t)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",n,o)}}return e},valueFromValueString:function(t,n){var e=null,r=d.getPlugin(c.PluginTypes.analyticsTrackers,n);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(t)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",n,o)}return e},isNullable:!0}],p={},g={};i.forEach(h,(function(t){p[t.name]=t,g[t.relayName]=t})),n.persist=function(t,n){n===l.RedirectRelayMedia.COOKIE?function(t){try{var n=function(t){var n=[],e=i.reduce(t,(function(t,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(n,e){n=o.valueToValueString?o.valueToValueString(n,e):String(n),i.isNull(n)||(n=(o.encodeValueString||encodeURIComponent)(n),t.push(encodeURIComponent(o.relayName+v+e)+"="+n))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),t.push(o.relayName+"="+e)),t):(n.push(r),t)}),[]);if(n.length)throw new Error("Relay / Don't know how to relay some fields: "+n);return e.sort(),e.join("&")}(t)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",n);try{o.set(c.COOKIES.REDIRECT,n,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),a.emitError(r)}}(t):f.error("Relay / Unsupported redirect relay medium: "+n)},n.load=function(t){if(t||(t=function(){var t=o.get(c.COOKIES.REDIRECT,!1);if(t)return f.log("Relay / Found redirect cookie:",t),t}()),t){var n=function(t){var n={},e=t.split("&");return i.forEach(e,(function(t){var e=t.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(h,(function(t){return t.isMulti&&0===r.indexOf(t.relayName+v)})))){var c=e[1];try{if(u.isMulti){n[u.name]=n[u.name]||{};var s=r.substring(u.relayName.length+1);c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c,s),n[u.name][s]=c}else c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c),n[u.name]=c}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",t,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",t,r)}else f.warn("Relay / Skipping invalid segment:",t)})),n}(t);if(n){var e=[];if(i.forEach(h,(function(t){(i.isNull(n[t.name])||i.isUndefined(n[t.name]))&&(t.isNullable?n[t.name]=null:(delete n[t.name],e.push(t.name)))})),!e.length)return s.dispatch(r.LOAD_REDIRECT_DATA,n),s.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var t,e;e=(t=n).pageId||void 0,s.dispatch(r.RECORD_LAYER_DECISION,{layerId:t.layerId,decision:{layerId:t.layerId,experimentId:t.experimentId,variationId:t.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:t.decisionTicketAudienceIds,bucketingId:t.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:t.activationId},sessionId:t.sessionId,activationId:t.activationId,timestamp:t.timestamp,revision:t.revision,namespace:t.namespace,pageId:e}),s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:t.layerId,pageId:e,decisionId:t.decisionId}),s.dispatch(r.ACTION_EXECUTED,{sessionId:t.sessionId,layerId:t.layerId,pageId:t.pageId,timestamp:t.timestamp,activationId:t.activationId})}}),n;f.error("Relay / Observed redirect data with missing fields:",e)}}}},3081:function(t,n,e){var i=e(798);n.emitError=function(t,n,e){i.emit({type:"error",name:t.name||"Error",data:{error:t,metadata:n}},e||!1,!0)},n.emitInternalError=function(t,e){n.emitError(t,e,!0)},n.emitAnalyticsEvent=function(t,n){var e={type:"analytics",name:"trackEvent",data:t};i.emit(e,n)}},2587:function(t,n,e){var i=e(7237),r=e(7693),o=e(3499),a=e(3868),u=e(9213);function c(t,n){var e="function"==typeof t?t(n):t;return"string"==typeof e&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function s(t){return t.name?t.name+" ("+t.id+")":t.id}n.isInAudience=function(t,n,e){var u,f=function(t,n){return function(e){var r=e.type,u=n[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var s=c(u.fieldsNeeded,e),f=0;f<s.length;f++){var l=s[f],d=o.getFieldValue(t,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",t);var v=u.match(t,e);if(!i.isUndefined(v))return!!v}}(t,e);a.groupCollapsed("Checking audience",n.name,n.id,n),a.debug("Visitor Profile:",t);try{var l=r.evaluate(n.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",s(n),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",s(n)),l},n.requiredAudienceFieldsForConditions=function f(t,n){var e={};return i.each(t,(function(t){if(i.isArray(t))i.extend(e,f(t,n));else if(i.isObject(t)){var r=n[t.type];if(r){var o=c(r.fieldsNeeded,t);i.each(o,(function(t){e[u.serializeFieldKey(t)]=t}))}}})),e}},6849:function(t,n){n.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},n.FIELDS_V0_2={name:n.FIELDS.NAME,time:n.FIELDS.TIME,type:n.FIELDS.TYPE,category:n.FIELDS.CATEGORY,tags:n.FIELDS.OPTIONS,session_index:n.FIELDS.SESSION_INDEX}},9911:function(t,n,e){var i=e(7237),r=e(6849),o=e(3499).getFieldValue,a=e(5159);function u(t,n,e,o,a){this[r.FIELDS.NAME]=t,this[r.FIELDS.TYPE]=n,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function c(t,n,e,o){this.eventBase=t,this[r.FIELDS.TIME]=n,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}n._=u,u.prototype.digest=function(){var t=function(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)},n=[];if(n.push(t(r.FIELDS.NAME,this[r.FIELDS.NAME])),n.push(t(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&n.push(t(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&n.push(t(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return n.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(t){return e.hasOwnProperty(t)}));o=o.sort();for(var a=0;a<o.length;a++)n.push(t(o[a],e[o[a]]));return n.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(t){this.hash_=t},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(t){if(this.hash()!==t.hash()||this[r.FIELDS.NAME]!==t[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==t[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==t[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==t[r.FIELDS.REVENUE])return!1;var n=this[r.FIELDS.OPTIONS]||{},e=t[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(n),(function(t){return n.hasOwnProperty(t)})),a=i.filter(i.keys(e),(function(t){return e.hasOwnProperty(t)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var c=o[u];if(!e.hasOwnProperty(c)||n[c]!==e[c])return!1}return!0},u.prototype.getValueOrDefault=function(t,n){var e=o(this,t);return i.isUndefined(e)?n:e},u.prototype.setFieldValue=function(t,n){t!==r.FIELDS.NAME&&t!==r.FIELDS.TYPE&&t!==r.FIELDS.CATEGORY&&t!==r.FIELDS.REVENUE&&t!==r.FIELDS.OPTIONS||(this[t]=n,this.reHash())},n.J=c,c.prototype.getValueOrDefault=function(t,n){if(0===t.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,t);return i.isUndefined(a)?this.eventBase.getValueOrDefault(t,n):a},c.prototype.setFieldValue=function(t,n){t===r.FIELDS.TIME||t===r.FIELDS.SESSION_ID||t===r.FIELDS.SESSION_INDEX?this[t]=n:this.eventBase.setFieldValue(t,n)};var s={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};c.prototype.readableEvent=function(){var t,n,e=function(t){return i.isString(t)?'"'+t+'"':t},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){t=s[r],n=o.getValueOrDefault([r]),i.isUndefined(n)||a.push(t+": "+e(n))}));var u=[];if(t=s[r.FIELDS.OPTIONS],n=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(n)||(i.each(n,(function(t,n){u.push(n+": "+String(e(t)))})),a.push(t+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),n=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(n)&&(n=e(new Date(n).toString())),!i.isUndefined(n)){a.push("timestamp: "+n)}return"{\n\t"+a.join(",\n\t")+"\n}"},c.prototype.toObject=function(t){var n,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(t){n=s[t],e=a.getValueOrDefault([t],t===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[n]=e)}));var u=s[r.FIELDS.OPTIONS],c=s[r.FIELDS.REVENUE];if(t&&t.revenueAsTag&&o[c]&&(o[u]=o[u]||{},o[u][c]=o[c],delete o[c]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(t&&t.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},7455:function(t,n,e){var i=e(7274);n.initializeStore=i.initialize,n.addEvent=i.addEvent,n.getEvents=i.getEvents,n.getEventCount=i.getEventCount},1349:function(t,n,e){var i=e(9911).J,r=e(2074),o=e(6849),a=e(9911)._;n.CURRENT_SESSION_INDEX=0;var u=18e5;function c(t,e){var i;i=n.isInSameSession(t,e)?t.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(t,e,i){var r,a=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=n.isInSameSession(e,t)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}n.isInSameSession=function(t,n){var e=t.getValueOrDefault([o.FIELDS.TIME],0),i=n.getValueOrDefault([o.FIELDS.TIME],0);return this.isTimestampInSameSession(e,i)},n.isTimestampInSameSession=function(t,n){return Math.abs(t-n)<u},n.updateSessionId=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_ID]),u=n.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(t=new i(new a("",""),e,r),n)}else n.setFieldValue(o.FIELDS.SESSION_ID,n.getValueOrDefault([o.FIELDS.TIME]))},n.updateSessionIndex=function(t,n){if(t){var e=t.getValueOrDefault([o.FIELDS.TIME]),r=t.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=n.getValueOrDefault([o.FIELDS.TIME]),c=t.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(t=new i(new a("",""),e,c,r),n,!1)}else n.setFieldValue(o.FIELDS.SESSION_INDEX,0)},n.sessionize=function(t){var e=t.length;if(0!==e){t[0].setFieldValue(o.FIELDS.SESSION_ID,t[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(t[i-1],t[i]);var a=n.CURRENT_SESSION_INDEX,f=t[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),t[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(t[i],t[i-1],!0)}},n.reindexIfNecessary=function(t,n,e){var i=function(t){for(var n=0;n<t.length;n++){var e=t[n].getValueOrDefault([o.FIELDS.SESSION_INDEX]);t[n].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===t.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(n),i(e))},n.sessionSortPredicate=function(t,n){return t[o.FIELDS.TIME]-n[o.FIELDS.TIME]},n.applyMigrations=function(t){return!1}},7274:function(t,n,e){var i=e(7237),r=e(856),o=e(4294),a=e(2074),u=e(8249),c=e(4361),s=e(3868),f=e(1349),l=e(9213),d=n,v=e(9911).J,h=e(6849),p=e(1968),g=e(9911)._,m=(f=e(1349),e(6553)),_=m.get("stores/visitor_events"),y=m.get("stores/visitor_events_manager"),w={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function b(t){c.dispatch(r.SET_VISITOR_EVENTS,t)}function E(t){c.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:t})}function I(t){c.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:t})}function A(t){c.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:t})}function T(){return _.getEvents()}function S(){return y.getBaseMap()}function k(){return y.getEventQueue()}function R(){return y.getLastEvent()}function C(){var t=T().concat(k()),n=!1;return t.length>1e3&&(t=t.slice(-1e3),n=!0),b(t),I([]),n}n.initialize=function(t,n){if(!y.getInitialized()){d.S(t,n);var e=T();e.length>0&&A(e[e.length-1]);var i=k();i.length>0&&A(i[i.length-1]),c.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},n.addEvent=function(t){s.debug("Behavior store: adding event",t);var n=d.k(t);A(n),I(k().concat(n)),f.reindexIfNecessary(R(),T(),k()),d.R(k()),n.t&&function(t){try{var n=Number(o.get(p.COOKIES.OPTIMIZELY_SESSION,!1));if(isNaN(n)||0!==n){var e=n?f.isTimestampInSameSession(t,n)?t:0:t;o.set(p.COOKIES.OPTIMIZELY_SESSION,e.toString(),{path:"/",encodeValue:!1},!0)}}catch(i){s.error("Error setting session cookie",i)}}(n.t)},n.getEvents=function(){return k().length>0&&(C()&&f.sessionize(T()),d.N(T()),d.R(k())),T()},n.getEventCount=function(){return k().length+T().length},d.S=function(t,n){d.D(t,n)&&(d.N(T()),d.R(k())),f.sessionize(T())},d.D=function(t,n){if(0===t.length&&0===n.length)return b([]),I([]),!1;var e=!1,i=t[0]||n[0];return w.EVENTBASE in i?(b(d.O(t)),I(d.O(n))):(e=!0,b(d.M(t)),I(d.M(n))),k().length>0&&(C(),e=!0),b(d._updateBaseMapAndMaybeDedupe(T())),d._migrateEventBasesAndUpdateStore()&&(e=!0),e},d.M=function(t){for(var n=[],e=0;e<t.length;e++){var i=t[e],r=d.P(i);n[e]=new v(r,i[h.FIELDS.TIME])}return n},d._migrateEventBasesAndUpdateStore=function(){var t=!1,n=d.L();return f.applyMigrations(n)&&(t=!0,E({}),b(d._updateBaseMapAndMaybeDedupe(T())),I(d._updateBaseMapAndMaybeDedupe(k()))),t},d.U=function(){return a.now()},d.k=function(t){var n,e=t.name,i=t.type||"default",r=t.category||u.OTHER,o=t.tags||{};t.revenue&&(n=t.revenue);var a=new g(e,i,r,o,n);a=d.V(a);var c=d.U(),s=new v(a,c,-1);return f.updateSessionId(R(),s),f.updateSessionIndex(R(),s),s},d._updateBaseMapAndMaybeDedupe=function(t){for(var n=0;n<t.length;n++)t[n].eventBase=d.V(t[n].eventBase);return t},d.N=function(t){var n=d.F(t);l.persistBehaviorEvents(n)},d.R=function(t){var n=d.F(t);l.persistBehaviorEventQueue(n)},d.B=function(){var t;y.getCleared()||(b([]),I([]),d.N(T()),d.R(k()),E({}),A(null),t=!0,c.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:t}))},d.V=function(t){var n=t.hash(),e=S(),r=e[n];if(i.isUndefined(r))return e[n]=[t],E(e),t;for(var o=0;o<r.length;o++)if(t.equals(r[o]))return r[o];return r.push(t),E(e),t},d.L=function(){var t=[],n=S();for(var e in n)!n.hasOwnProperty(e)||(t=t.concat(n[e]));return t},d.F=function(t){for(var n=function(t){var n={};n[h.FIELDS.NAME]=t.getValueOrDefault([h.FIELDS.NAME]),n[h.FIELDS.TYPE]=t.getValueOrDefault([h.FIELDS.TYPE]);var e=t.getValueOrDefault([h.FIELDS.CATEGORY]);i.isUndefined(e)||(n[h.FIELDS.CATEGORY]=e);var r=t.getValueOrDefault([h.FIELDS.REVENUE]);i.isUndefined(r)||(n[h.FIELDS.REVENUE]=r);var o=t.getValueOrDefault([h.FIELDS.OPTIONS]);return i.isUndefined(o)||(n[h.FIELDS.OPTIONS]=o),n},e=w,r=[],o="_idx_",a=0;a<t.length;a++){var u,c,s=t[a],f=s.eventBase;if(f.hasOwnProperty(o)){u=r[f[o]];var l=s[h.FIELDS.TIME]-(u[e.TIMEBASE]||0);(c={})[e.DELTA]=l,c[e.INDEX]=a,u[e.TIMESTAMPS].push(c)}else(u={})[e.EVENTBASE]=n(s),u[e.HASH]=f.hash(),u[e.TIMEBASE]=s[h.FIELDS.TIME],(c={})[e.DELTA]=0,c[e.INDEX]=a,u[e.TIMESTAMPS]=[c],r.push(u),f[o]=r.length-1}for(a=0;a<t.length;a++)delete t[a].eventBase[o];return r},d.P=function(t,n){var e=new g(t[h.FIELDS.NAME],t[h.FIELDS.TYPE],t[h.FIELDS.CATEGORY],t[h.FIELDS.OPTIONS],t[h.FIELDS.REVENUE]);return i.isUndefined(n)||e.setHash(n),e},d.O=function(t){for(var n=w,e=[],i=0;i<t.length;i++)for(var r=t[i],o=d.P(r[n.EVENTBASE],r[n.HASH]),a=r[n.TIMEBASE],u=r[n.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],f=new v(o,a+s[n.DELTA]);e[s[n.INDEX]]=f}return e},n.deserialize=function(t){return d.O(t)},n.mergeAllEvents=function(t){var n=[].concat.apply([],t);return n.sort(f.sessionSortPredicate),f.sessionize(n),n}},856:function(t,n,e){var i=e(4798);t.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,SET_GA4_USER_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,UPDATE_CONTEXTUAL_MAB_MAP:null,MERGE_CONTEXTUAL_MAB_MAP:null,SET_ODP_SEGMENTS:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_USE_BEACON:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},1968:function(t,n,e){var i=e(7237),r=e(4798);n.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",OPTIMIZELY_SESSION:"optimizelySession",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},n.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},n.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},n.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),n.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},n.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},n.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),n.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),n.RUMPerformanceTimingAttributes=r({blockTime:null}),n.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),n.SandboxedFunctions=r({XMLHttpRequest:null}),n.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),n.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),n.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely",CONTEXTUAL_MAB:"contextual_mab",ODP_SEGMENTS:"odp_segments"},n.AllStorageKeys=i.assign({},n.StorageKeys,n.VisitorStorageKeys),n.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},n.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"},n.AllocationPolicyEnum={CMAB:"contextual-multi-arm-bandit",MIN_REGRET:"min-regret",MIN_TIME:"min-time",MANUAL:"manual"}},8249:function(t){t.exports={OTHER:"other"}},1591:function(t,n){n.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},2968:function(t){t.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},7642:function(t,n,e){var i=e(4798);n.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),n.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),n.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),n.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),n.RedirectRelayMedia=i({COOKIE:null})},2977:function(t,n,e){var i=e(5159),r=n.TOTAL_POINTS=1e4;n.bucketingNumber=function(t,n,e){return i.hashToInt(t+n,e,r)},n.isHoldback=function(t,e){return n.bucketingNumber(t,e.id,i.Seed.IGNORING)<(e.holdback||0)},n.chooseWeightedCandidate=function(t,e,r){for(var o=n.bucketingNumber(t,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},3371:function(t,n,e){var i=e(7237),r=e(856),o=e(2977),a=e(7693),u=e(6985).b,c=e(4361),s=e(3868),f=e(1303);n.isValidExperiment=function(t,n){var e,r=i.partial(i.includes,t);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",n,t),e=!n.audienceIds||a.evaluate(n.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",n,"is valid?",e),e},n.selectVariation=function(t,n,e,a,l){if(s.debug("Decision / Selecting variation for experiment:",t.id),!t.variations||0===t.variations.length)throw new u('No variations in selected experiment "'+t.id+'"');if(!t.weightDistributions&&t.variations.length>1)throw new u('On selected experiment "'+t.id+'", weightDistributions must be defined if # variations > 1');var d;if(t.bucketingStrategy&&"impression"===t.bucketingStrategy)if(1===t.variations.length)d=t.variations[0].id;else{var v=a;d=o.chooseWeightedCandidate(e+v,t.id,t.weightDistributions)}else if(d=1===t.variations.length?t.variations[0].id:o.chooseWeightedCandidate(e,t.id,t.weightDistributions),null==t?void 0:t.deployed)s.debug("Decision / Experiment is deployed. Skipping bucketing.");else if(l&&l[t.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",t.id);var h=l[t.id];if(!i.find(t.variations,{id:h}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:t.id}),s.debug("Decision / Preferred variation:",h,"not found on experiment:",t.id,". Visitor not bucketed."),null;h!==d&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:t.id}),d=h)}var p=f.processCmabExperiment(t,d);p&&(d=p);var g=i.find(t.variations,{id:d});if(g)return s.debug("Decision / Selected variation:",g),g;throw new u('Unable to find selected variation: "'+d+'".')},n.getExperimentById=function(t,n){var e=i.find(t.experiments,{id:n});if(e)return e;throw new u("Unable to find selected experiment.")},n.hasVariationActionsOnView=function(t,n){return s.debug("Decision / Checking variation:",t,"for actions on pageId:",n),!!i.find(t.actions,(function(t){return t.pageId===n&&!i.isEmpty(t.changes)}))}},6985:function(t,n){function e(t){this.message=t}e.prototype=new Error,n.b=e},6600:function(t,n,e){var i=e(7237),r=e(856),o=e(3081),a=e(2587),u=e(2977),c=e(3371),s=e(6985).b,f=e(6553),l=e(1968),d=e(4361),v=e(6936),h=e(8138),p=e(3868),g=e(2550),m=f.get("stores/plugins"),_=f.get("stores/global"),y=f.get("stores/layer_data");function w(t){var n=m.getPlugin(l.PluginTypes.deciders,t);if(i.isEmpty(n))throw new Error("No deciders found for policy: "+t);return n}n.isPageIdRelevant=function(t){if(!t)return!1;var n=w(t.policy);return i.isFunction(n.includePageIdInDecisionTicket)?n.includePageIdInDecisionTicket(t):!0===n.includePageIdInDecisionTicket},n.createTicket=function(t){var n,e,r,o=i.pick(t,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(n=t.visitorProfile,e=t.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(t,e){return a.isInAudience(n,e,r)&&t.push(e.id),t}),[])),activationId:_.getActivationId()}),o},n.decideGlobal=function(t){return{isGlobalHoldback:u.isHoldback(t.bucketingId,{id:null,holdback:t.globalHoldback})}},n.decideGroup=function(t,n){p.debug("Decision / Deciding layer for group: ",v.description(t));var e,o,a=n.preferredLayerId,c=!!a;try{(e=u.chooseWeightedCandidate(n.bucketingId,t.id,t.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(c&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",v.description(t)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:t.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(t.weightDistributions,{entityId:e})){var f="Visitor was"+(c?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!c)throw new s(f);return{layerId:null,reason:f}}return{layerId:e}},n.decideLayer=function(t,n){var e,r;p.debug("Deciding: ",t,n);var a,f,l=w(t.policy),d={layerId:t.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(n.bucketingId,t),isLayerConcluded:!!t.concluded};if(i.isEmpty(t.experiments))throw new s("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var v=l.decideLayer(t,n);e=v.experiment,r=v.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(t,n.audienceIds,n.bucketingId),r=c.selectVariation(e,n.audienceIds,n.bucketingId,n.activationId,n.preferredVariationMap)}catch(h){a=h,(null!=(f=s)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](a):a instanceof f)?d.reason=h.message:d.error=h}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},n.getDummyLayerDecision=function(t,n){var e,i=function(t,n){for(var e=0;e<t.experiments.length;e++)for(var i=0;i<t.experiments[e].variations.length;i++)if(n.indexOf(t.experiments[e].variations[i].id)>-1)return{experimentId:t.experiments[e].id,variationId:t.experiments[e].variations[i].id};return null}(t,n);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",h.description(t)),e={layerId:t.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}):(p.log("No variation matches ids:",n,"in Campaign",h.description(t)),e={layerId:t.id,variationId:null,experimentId:null,isLayerHoldback:!1,isLayerConcluded:!1,reason:"force"}),e},n.isInCohort=function(t){if(!t.experimentId||!t.variationId)return!1;var n=y.get(t.layerId);return!(g.isSingleExperimentPolicy(n.policy)&&t.isLayerHoldback)}},6553:function(t,n,e){var i=e(7237),r=e(4200),o=e(4361),a=e(5998),u=r.create(),c={action_data:e(4252),async_request:e(2509),audience_data:e(9220),change_data:e(7010),cleanup:e(9883),client_metadata:e(1486),cookie_options:e(7148),event_data:e(1117),event_emitter:e(1250),dimension_data:e(4070),directive:e(9014),global:e(1372),history:e(3731),integration_settings:e(3077),layer:e(6526),layer_data:e(5905),log:e(3041),observed_redirect:e(978),pending_events:e(5258),performance:e(1021),plugins:e(4459),provider_status:e(8499),pending_redirect:e(4211),rum:e(7111),sandbox:e(5932),session:e(8583),tracker_optimizely:e(838),ua_data:e(5048),view:e(5946),view_data:e(189),visitor:e(1641),visitor_attribute_entity:e(8946),visitor_events:e(2101),visitor_events_manager:e(8017),visitor_id:e(6353),visitor_bucketing:e(3160),xdomain:e(4227)};c.group_data=e(7935),o.registerStores(c),i.forOwn(c,(function(t,n){u.register("stores/"+n,o.getStore(n))})),u.register("core/plugins/matchers/key_value",a),t.exports=u},5046:function(t,n,e){var i=e(7237),r=e(856),o=e(3081),a=e(4294),u=e(1922).v,c=e(1968),s=e(4361),f=e(3868),l=n.JSONParseError=u("JSONParseError"),d=e(6822),v=e(7648),h=e(4750),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",y="optimizely_x_audiences",w="optimizely_x",b="optimizely_show_preview",E="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking",T="optimizely_embed_editor";n.populateDirectiveData=function(){var t,n,e,u,S,k,R,C;!function(){var t="OFF",n=d.getQueryParamValue("optimizely_log");if(n){var e=n.split(":");""!==e[0]&&(t=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(t)}(),function(){var t=h.getUserAgent()||"";if(!i.isString(t))return void f.warn("Directive / userAgent not a string");t=t.toLowerCase();var n=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(n){if(i.includes(t,n))return f.warn("Directive / Matches bot:",n),!0};i.some(n,e)&&(f.log("Directive / Disabling tracking"),s.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),t=Boolean(i.result(window.optimizely,"initialized")),s.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:t}),s.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:h.isMutationObserverAPISupported()}),function(){var t=a.get(c.COOKIES.OPT_OUT),n=d.getQueryParamValue(E),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===n||"false"===n){var o="true"===n;s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),h.alert(o?e:i)}else t&&s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===t})}(),function(){var t=!1,n=[p,g];n.push(m);for(var e=0;e<n.length;e++)if("true"===d.getQueryParamValue(n[e])){f.warn("Directive / Not activating because "+n[e]+" is set."),t=!0;break}s.dispatch(r.LOAD_DIRECTIVE,{disabled:t})}(),s.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),s.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(n=d.getQueryParamValue(b))&&f.log("Directive / Is legacy preview mode"),s.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!n}),s.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=h.getGlobal("optlyDesktop"),(u=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:u}),(S="true"===d.getQueryParamValue(_))&&f.log("Directive / Is running in editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:S}),function(){var t=!1,n=h.getGlobal("sessionStorage"),e=d.getQueryParamValue(T);t="true"===e,e&&n&&("true"===e?n.setItem(T,"true"):n.removeItem(T)),n&&"true"===n.getItem(T)&&(t=!0,f.log("Directive / Should mount embedded editor"));s.dispatch(r.LOAD_DIRECTIVE,{requestedEmbeddedEditor:t})}(),k=a.get(c.COOKIES.TOKEN)||null,R=d.getQueryParamValue(I)||k,s.dispatch(r.LOAD_DIRECTIVE,{projectToken:R}),function(){var t=a.get(c.COOKIES.PREVIEW),n=[],e=d.getQueryParamValue(y);if(e)n=a.safeDecodeURIComponent(e).split(",");else if(t)try{n=v.parse(t).forceAudienceIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+t),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}n.length&&(f.log("Directive / Force Audience IDs:",n),s.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:n}))}(),function(){var t=a.get(c.COOKIES.PREVIEW),n=[],e=d.getQueryParamValue(w);if(e)n=a.safeDecodeURIComponent(e).split(",");else if(t)try{n=v.parse(t).forceVariationIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+t),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}n.length&&(f.log("Directive / Force Variation IDs:",n),s.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:n}))}(),(C=d.getQueryParamValue(A))&&s.dispatch(r.LOAD_DIRECTIVE,{forceTracking:C})};n.setOptOut=function(t){t?(f.warn("Directive / Opting out"),a.set(c.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(c.COOKIES.OPT_OUT),s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:t})}},2074:function(t,n){n.now=function(){return+new Date}},7615:function(t,n){n.VERSION="0.228.0",n.NAME="js"},7323:function(t,n,e){var i=e(6553).get("stores/global");n.getDocumentElement=function(){return document.documentElement},n.getCookieString=function(){return document.cookie||""},n.setCookie=function(t){document.cookie=t},n.querySelector=function(t){return document.querySelector(t)},n.querySelectorAll=function(t){return document.querySelectorAll(t)},n.parseUri=function(t){var e=n.createElement("a");return e.href=t,e},n.childrenOf=function(t){return Array.prototype.slice.call(t.querySelectorAll("*"))},n.createElement=function(t){return document.createElement(t)},n.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},n.isLoaded=function(){return"complete"===document.readyState},n.addReadyHandler=function(t){return document.addEventListener("DOMContentLoaded",t),function(){n.removeReadyHandler(t)}},n.removeReadyHandler=function(t){return function(){document.removeEventListener("DOMContentLoaded",t)}},n.getReferrer=function(){return document.referrer},n.getReadyState=function(){return document.readyState},n.write=function(t){if("loading"!==n.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(t)},n.appendToHead=function(t){return n.appendTo(document.head,t)},n.appendTo=function(t,n){t.appendChild(n)},n.addEventListener=function(t,n,e){return document.addEventListener(t,n,e),function(){document.removeEventListener(t,n,e)}},n.getCurrentScript=function(){if(document.currentScript)return document.currentScript},n.parentElement=function(t){for(var n=t.parentNode;n.nodeType!==Node.ELEMENT_NODE;)n=n.parentNode;return n}},4089:function(t,n,e){var i,r,o="optimizely_data",a=e(1922).v,u=e(1076),c=e(4750),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(f){throw new s("Unable to read localStorage: "+f.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),n.DT=i},2122:function(t,n){n.create=function(t){return new MutationObserver(t)},n.observe=function(t,n,e){t.observe(n,e)}},433:function(t,n,e){var i=e(5033).Promise,r=e(4750);n.estimateStorage=function(){var t=r.getGlobal("navigator");try{return t.storage.estimate()}catch(n){return i.resolve({usage:null,quota:null})}}},7794:function(t,n,e){var i=e(856),r=e(1922).v,o=e(2074),a=e(4361),u=e(4750),c=e(6553).get("stores/rum"),s="optimizely:",f=n.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}n.time=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t;n.clearMarks(e+"Begin"),n.mark(e+"Begin")}}},n.timeEnd=function(t){if(c.getSampleRum()){var n=l();if(n&&n.mark){var e=s+t,r=n.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+t);n.clearMarks(e+"End"),n.mark(e+"End");var o=t+"Time",u=n.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},n.setMark=function(t,n,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+t;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:t,data:{startTime:Math.round(1e3*n)/1e3,duration:Math.round(1e3*e)/1e3}})}}},n.now=function(){var t=l();return t?t.now():o.now()}},4750:function(t,n,e){var i=e(7237),r=e(3868);n.getUserAgent=function(){return window.navigator.userAgent},n.getLocationSearch=function(){return window.location.search},n.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},n.getHref=function(){return window.location.href},n.getLocation=function(){return window.location},n.setLocation=function(t){window.location.replace(t)},n.setGlobal=function(t,n){window[t]=n},n.getGlobal=function(t){return window[t]},n.getGlobalByPath=function(t){for(var n=t.split("."),e=window;n.length;)try{e=e[n.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",t),new Error("Attempted to access nonexistent property. Path "+t)}return e},n.addEventListener=function(){return window.addEventListener.apply(window,arguments)},n.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},n.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},n.alert=function(t){alert(t)},n.setTimeout=function(t,n){return setTimeout((function(){try{t()}catch(n){r.warn("Deferred function threw error:",n)}}),n)},n.setInterval=function(t,n){return setInterval((function(){try{t()}catch(n){r.warn("Polling function threw error:",n)}}),n)}},5987:function(t,n,e){var i=e(7237);n.create=function(t,n,e,r){return i.extend({category:"other"},r,{id:t,apiName:n,eventType:e})}},798:function(t,n,e){var i=e(7237),r=e(1954),o=e(856),a=e(3081),u=e(6553),c=e(4361),s=e(3868),f=u.get("stores/event_emitter");n.on=function(t){return t.token||(t.token=r.generate()),c.dispatch(o.ADD_EMITTER_HANDLER,t),t.token},n.off=function(t){c.dispatch(o.REMOVE_EMITTER_HANDLER,{token:t})},n.emit=function(t,n,e){var r=f.getHandlers(t,n);i.each(r,(function(i){try{i.handler.call({$di:u},t)}catch(r){!e&&i.emitErrors?(s.error("Error in handler for event:",t,r),a.emitError(r,null,n)):s.warn("Suppressed error in handler for event:",t,r)}}))}},4219:function(t,n,e){var i=e(798);n.on=function(t){return t.publicOnly=!0,i.on(t)},n.off=i.off,n.emit=function(t){i.emit(t)}},4004:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3994),di=__webpack_require__(6553),Logger=__webpack_require__(3868),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(t,n){n=n||[],EXEC_WITH_JQUERY&&(n=n.concat(di.get("env/jquery")));try{return t.apply(void 0,n)}catch(e){throw Logger.warn("Error applying function",t,"with args:",n,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},4361:function(t,n,e){var i=e(3367);t.exports=i.create()},6936:function(t,n,e){var i=e(7237);n.description=function(t){var n=!!t.name?'"'+t.name+'" ':"",e=function(t){return i.map(t.weightDistributions,"entityId")}(t).join(", ");return n+"(id "+t.id+", campaigns: "+e+")"}},8138:function(t,n,e){var i=e(7237),r=e(856),o=e(2074),a=e(6553),u=e(4361),c=a.get("stores/global"),s=a.get("stores/session");n.recordLayerDecision=function(t,n,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:t,decision:e,decisionTicket:n,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:n.pageId}),e},n.relatedAudienceIds=function(t){var n={},e=["and","or","not"];return i.each(t.experiments,(function(t){i.each(i.flattenDeep(t.audienceIds),(function(t){i.includes(e,t)||(n[t]=!0)}))})),i.keys(n)},n.getActivationTimeout=function(t){var n=t.activation;return n&&null!==n.timeout&&void 0!==n.timeout?n.timeout:2e3},n.description=function(t){return(t.name?'"'+t.name+'" ':"")+"("+t.id+")"},n.createSingle=function(t,n,e){return{id:t,policy:"single_experiment",holdback:0,experiments:[{id:n||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},n.createLayerState=function(t,n,e,i,r){return void 0===i&&(i=!1),void 0===r&&(r=!1),{layerId:t,decision:{layerId:t,experimentId:n,variationId:e,isLayerHoldback:i||!1,isLayerConcluded:r||!1},decisionTicket:{audienceIds:[]}}},n.getIntegrationTypes=function(t){return i.keys(i.reduce(i.keys(t.integrationSettings),(function(t,n){return i.isNaN(Number(n))||(n="custom"),t[n]=1,t}),{}))}},6984:function(t,n,e){var i=e(7237);n.G=function(t,n){if(!n)return 0;for(var e=n.toString().split("."),r=t.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},7693:function(t,n,e){var i=e(7237),r=e(7648),o=e(3868),a="or",u="not";var c={};function s(t,n){var e;if(i.isArray(t)){var u,s;t[0]in c?(u=t[0],s=t.slice(1)):(u=a,s=t),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(s));try{e=c[u](s,n),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=n(t),o.debug("Condition / Evaluated:",r.stringify(t),":",e),e}c["and"]=function(t,n){for(var e,r,o=0;o<t.length;o++){if(!1===(e=s(t[o],n)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},c[a]=function(t,n){for(var e,r=!1,o=0;o<t.length;o++){if(!0===(e=s(t[o],n)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},c[u]=function(t,n){if(1!==t.length)return!1;var e=s(t[0],n);return i.isUndefined(e)?void 0:!e},t.exports={evaluate:s}},205:function(t,n,e){var i=e(7237),r=e(6522);function o(t){if((t=(t||"").toLowerCase())in c)return t;var n=i.keys(c);return i.find(n,(function(n){var e=c[n];return i.includes(e,t)}))||"unknown"}function a(t,n,e){return n||("unknown"===t?"unknown":e?"mobile":"desktop_laptop")}n.parseUA=function(t){var n=new r(t),e=n.getBrowser(),i=n.getOS(),c=n.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(c.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:s[c.model]||"unknown",type:a(l,c.type,d),isMobile:d}}};var u=function(t,n,e){if(i.includes(["mobile","tablet"],t)||i.includes(["opera mini"],n))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},s={iPhone:"iphone",iPad:"ipad"}},4200:function(t,n,e){var i=e(7237);function r(){this.j={}}r.prototype.register=function(t,n){if(1!==arguments.length){if(this.j[t])throw new Error("Module already registered for: "+t);this.j[t]=n}else{var e=this;i.each(t,(function(t,n){e.register(n,t)}))}},r.prototype.get=function(t){return this.j[t]},r.prototype.getModuleKeys=function(){var t=this.j;return i.keys(t)},r.prototype.evaluate=function(t){var n=t.length,e=t.slice(0,n-1),r=t[n-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.j={}},t.exports={create:function(){return new r}}},5424:function(t,n,e){var i=e(7237);function r(t,n,e){this.q=t,this.H=n,this.Y=0,this.K=!1,this.$={},i.extend(this,e),this.W={},this.initialize&&this.initialize()}r.prototype.X=function(t,n){var e=this.$[t];e&&"function"==typeof e&&e.call(this,n,t)},r.prototype.Z=function(){return i.cloneDeep(this.W)},r.prototype.on=function(t,n){this.$[t]=i.bind(n,this)},r.prototype.observe=function(t){return this.H.tt(this.q,t)},r.prototype.emitChange=function(){this.K=!0,this.Y++},r.prototype.hasChanges=function(){return this.K},r.prototype.resetChange=function(){this.K=!1},r.prototype.getStateId=function(){return this.Y},r.prototype.nt=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},t.exports=r},3367:function(t,n,e){var i=e(7237),r=e(5424);function o(t){t=t||{},this.et={},this.it={},this.rt=0,this.ot=[],this.ut=[]}function a(t,n){return function(){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}}o.prototype.registerStores=function(t){i.forOwn(t,i.bind((function(t,n){this.et[n]=new r(n,this,t)}),this))},o.prototype.getStore=function(t){return this.et[t]},o.prototype.dispatch=function(t,n){this.dispatchId++,i.each(this.ot,i.bind((function(e){e.call(this,t,n)}),this)),i.forOwn(this.et,(function(e){e.X(t,n)})),i.each(this.ut,i.bind((function(e){e.call(this,t,n)}),this)),i.forOwn(this.et,i.bind((function(t,n){t.hasChanges()&&this.it[n]&&(t.resetChange(),i.each(this.it[n],(function(n){n(t)})))}),this))},o.prototype.reset=function(){this.it={},i.forOwn(this.et,(function(t,n){t.nt()}))},o.prototype.getState=function(){var t={};return i.forOwn(this.et,(function(n,e){t[e]=n.Z()})),t},o.prototype.onPreAction=function(t){var n=this.ot;return n.push(t),a(n,t)},o.prototype.onPostAction=function(t){var n=this.ut;return n.push(t),a(n,t)},o.prototype.tt=function(t,n){return this.it[t]||(this.it[t]=[]),this.it[t].push(n),a(this.it[t],n)},t.exports={create:function(t){return new o(t)}}},7648:function(t,n,e){var i=e(7237);n.stringify=function(){return function(t){var n,e,r=[Array.prototype],o=[];i.each(r,(function(t){i.isUndefined(t.toJSON)||(o.push(t.toJSON),delete t.toJSON)}));try{n=t()}catch(a){e=a}finally{i.each(o,(function(t,n){r[n].toJSON=t}))}if(e)throw e;return n}(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},n.parse=JSON.parse},2061:function(t,n,e){var i=e(7237);n.hasMatch=function(t,n,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(t)&&null!==t;switch(n||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===t;case"substring":return r&&String(e).indexOf(t)>-1;case"regex":try{return!(!o||!r)&&new RegExp(t).test(String(e))}catch(f){}return!1;case"range":var a=t.split(":"),u=parseFloat(a[0]),c=parseFloat(a[1]),s=parseFloat(e);return s>=u&&s<=c;default:return!1}}},5033:function(t,n,e){t.exports=e(155)},1076:function(t,n,e){var i=e(7237),r=e(3868);function o(t,n){this.ct=t,this.st=n}o.prototype.ft=function(t){return[this.st,t].join("$$")},o.prototype.dt=function(t){return t.replace(this.st+"$$","")},o.prototype.setItem=function(t,n){try{this.ct.setItem(this.ft(t),n)}catch(e){r.warn("Failed to save",t,"to localStorage:",e)}},o.prototype.removeItem=function(t){this.ct.removeItem(this.ft(t))},o.prototype.getItem=function(t){var n=null;try{n=this.ct.getItem(this.ft(t))}catch(e){}return n},o.prototype.keys=function(){var t=i.keys(this.ct);return i.map(i.filter(t,i.bind((function(t){return i.includes(t,this.st)}),this)),i.bind(this.dt,this))},o.prototype.allKeys=function(){return i.keys(this.ct)},o.prototype.allValues=function(){return i.values(this.ct)},t.exports={create:function(t,n){return new o(t,n)},mockStorage:{keys:function(){},getItem:function(t){},removeItem:function(t){},setItem:function(t,n){}}}},504:function(t,n,e){var i=e(7237),r=e(3081),o=e(1968),a=e(7648),u=e(4089).DT,c=e(3868),s=e(820),f=e(6553).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;n.persistPendingEvents=function(){try{var t=f.getEventsString();u.setItem(l,t)}catch(n){c.warn("PendingEvents / Unable to set localStorage key, error was: ",n),r.emitInternalError(n)}},n.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(t){return null}},n.retryPendingEvents=function(t){i.forOwn(t,(function(t,n){s.retryableRequest(t.data,n,t.retryCount)})),i.isEmpty(t)||c.log("Retried pending events: ",t)}},3697:function(t,n,e){var i=e(7237),r=e(856),o=e(6553),a=e(1968),u=e(798),c=e(4361);n.registerApiModule=function(t,n){i.isArray(n)&&(n=o.evaluate(n)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:t,plugin:n})},n.registerDependency=function(t,n){o.get(t)||o.register(t,n)},n.registerVisitorProfileProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:t.provides,plugin:t})},n.registerViewProvider=function(t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:t.provides,plugin:t})},n.registerAudienceMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:t,plugin:n})},n.registerViewMatcher=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:t,plugin:n})},n.registerAnalyticsTracker=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:t,plugin:n})},n.registerViewTagLocator=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:t,plugin:n})},n.registerAudiencePlugin=function(t){t.dependencies&&i.each(t.dependencies,(function(t,e){n.registerDependency(e,t)}));var e,r,a="vendor."+t.vendor;e=i.isString(t.provider)?o.get(t.provider)(t.vendor):i.isFunction(t.provider)?t.provider(t.vendor):i.cloneDeep(t.provider),n.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(t.matcher)?o.get(t.matcher):t.matcher;var u={fieldsNeeded:[a],match:function(t,n){return r(t[a],n)}};n.registerAudienceMatcher(a,u)},n.registerWidget=function(t){return i.isArray(t)&&(t=o.evaluate(t)),{showToken:u.on({filter:{type:"showWidget",name:t.widgetId},handler:t.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:t.widgetId},handler:t.hideFn})}},n.registerChangeApplier=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:t,plugin:n})},n.registerDecider=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:t,plugin:n})},n.registerEventImplementation=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:t,plugin:n})},n.registerViewTrigger=function(t,n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:t,plugin:n})}},4071:function(t,n,e){var i=e(7237),r=e(6553),o=":",a="holdback",u="treatment",c="",s=e(3868),f=e(2550);function l(t){return t.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}n.formatNamesAndIdsForAnalytics=function(t,n,e,o){var a={layer:t.name||c,experiment:n.name||c,variation:e.name||c};o&&(a=i.mapValues(a,l));var u,s=!t.integrationStringVersion||1===t.integrationStringVersion;if(a.experiment===c&&s)if(u=n.audienceIds,!i.isEmpty(u)&&i.includes(["and","or","not"],u[0]))a.experiment="Exp";else{var f=r.get("stores/audience_data");a.experiment=function(t,n){return i.isEmpty(n)?"everyone_else":i.reduce(n,(function(n,e){var i=t.get(e);return i?n+l(i.name?i.name:i.id)+",":n}),"").slice(0,-1)}(f,n.audienceIds)}return{names:a,idStrings:{layer:"("+l(t.id)+")",experiment:"("+l(n.id)+")",variation:"("+l(e.id)+")"}}},n.combineAndTruncateIdAndName=function(t,n,e){var i=e-n.length;if(i<0&&(s.warn("maxLength must be at least long enough to fit the entity ID, which is length"+n.length+". Defaulting to only use entity ID as name."),t=c),t===c)return n;if(t.length>i){var r=Math.min(t.length,i);return(t=t.substring(0,r))+n}return t+" "+n},n.generateAnalyticsString=function(t,e,r,c,s,l){return t.integrationStringVersion&&2===t.integrationStringVersion?function(t,e,r,u,c,s){if(f.isSingleExperimentPolicy(t.policy)&&u)return;var l=!f.isSingleExperimentPolicy(t.policy)&&u,d=n.formatNamesAndIdsForAnalytics(t,e,r,s),v=[d.names.experiment,d.names.variation],h=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(t.policy)||(v.unshift(d.names.layer),h.unshift(d.idStrings.layer));var p=i.reduce(h,(function(t,n){return t+n.length}),0),g=v.length-1+(l?1:0),m=p+1*g;if(l&&(m+=8),m>c)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=c-m,y=v.length,w=[],b=v.length-1;b>=0;b--){var E=v[b],I=Math.min(E.length,Math.floor(_/y));_-=I,y--,w.unshift(E.substring(0,I))}var A=i.map(w,(function(t,n){return t+h[n]}));return l&&A.push(a),A.join(o)}(t,e,r,c,s,l):function(t,e,r,c,s,l){var d=c?a:u,v=3,h=n.formatNamesAndIdsForAnalytics(t,e,r,l),p=h.names,g=h.idStrings,m=i.reduce(g,(function(t,n){return t+n.length}),0);if(m+v+d.length>s)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=s-m-v-d.length,y={};y.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=y.variation,y.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=y.experiment,y.layer=_;var w={};i.each(p,(function(t,n){w[n]=t.substring(0,y[n])}));var b=[];return f.isSingleExperimentPolicy(t.policy)||b.push(w.layer+g.layer),(b=b.concat([w.experiment+g.experiment,w.variation+g.variation,d])).join(o)}(t,e,r,c,s,l)}},9350:function(t,n,e){var i=e(7237);t.exports=function(t,n){t=function(t){var n=t.split("?");if(n[1]){var e=n[1].split("#"),r=e[0],a=e.slice(1).join("#"),u=r.split("&"),c=[];return i.each(u,(function(t){0!==t.indexOf(o)&&c.push(t)})),n[1]="",c.length>0&&(n[1]="?"+c.join("&")),a&&(n[1]+="#"+a),n.join("")}return t}(t);var e=n.value;switch(n.match){case"exact":return(t=c(t))===c(e);case"regex":try{return Boolean(t.match(e))}catch(r){}return!1;case"simple":return(t=u(t))===(e=u(e));case"substring":return t=c(t,!0),e=c(e,!0),-1!==t.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(t){return c(function(t){var n=t.indexOf("?");return-1!==n&&(t=t.substring(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.substring(0,n)),t}(t))}function c(t,n){t=(t=t.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);n||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],c=new RegExp("^"+u);t=t.replace(c,"")}return t}},5998:function(t,n,e){var i=e(7237),r=e(3499).getFieldValue,o=e(2061);t.exports=function(t,n){var e=r(t,n.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,n.value,n.match)):o.hasMatch(n.value,n.match,e)}},8563:function(t,n,e){var i=e(4472),r=e(6563),o="cdn3";n.getIP=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.ip}))},n.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,u).then((function(t){return t.location}))};var a="//cdn3.optimizely.com/js/geo4.js";function u(){r.addScriptAsync(a)}},4252:function(t,n,e){var i=e(7237),r=e(856),o=e(8235),a=e(3868);t.exports={initialize:function(){this.W={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.vt),this.on(r.ACTION_EXECUTED,this.ht),this.on(r.SET_CHANGE_APPLIER,this._t),this.on(r.REMOVE_ACTION_STATE,this.yt)},vt:function(t){var n=this;i.isEmpty(t.data.layers)||(i.each(t.data.layers,(function(t){var e;if(t.changes){var r="layerId:"+t.id;e={id:r,layerId:t.id,changeSet:t.changes,type:"layer"},o.deepFreeze(e),n.W.actions[r]=e}i.each(t.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:t.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),n.W.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,c=r.id+":"+a.id+":"+u;e={id:c,layerId:t.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),n.W.actions[c]=e}))}))}))})),this.emitChange())},ht:function(t){var n=t.actionId;i.isUndefined(n)||this.W.actionState[n]||(this.W.actionState[n]={})},_t:function(t){var n=t.actionId,e=t.changeId;this.W.actionState[n]?this.W.actionState[n][e]=t.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",n)},yt:function(t){delete this.W.actionState[t.actionId]},get:function(t){return o.safeReference(this.W.actions[t])},getActionState:function(t){return o.safeReference(this.W.actionState[t])},getByChangeId:function(t){return i.find(this.W.actions,{changeSet:[{id:t}]})},getAllActionIdsByPageId:function(t){return i.map(i.filter(this.W.actions,{pageId:t}),"id")},getChangeApplier:function(t,n){var e=this.W.actionState[n];if(e)return e[t]},getExperimentVariationActions:function(t,n){return o.safeReference(i.filter(this.W.actions,{experimentId:t,variationId:n}))},getLayerActions:function(t){return o.safeReference(i.filter(this.W.actions,{id:"layerId:"+t}))},getExperimentActions:function(t){return o.safeReference(i.filter(this.W.actions,{id:"experimentId:"+t}))},getAll:function(){return o.safeReference(i.values(this.W.actions))}}},2509:function(t,n,e){var i=e(856);t.exports={initialize:function(){this.W={},this.on(i.REGISTER_ASYNC_DEFERRED,this.wt),this.on(i.RESOLVE_DEFERRED,this.bt),this.on(i.REJECT_DEFERRED,this.Et)},getRequest:function(t){return this.W[t]},getPromise:function(t){var n=this.getRequest(t);if(n)return n.promise},wt:function(t){this.W[t.source]={promise:t.promise,resolver:t.resolver,rejecter:t.rejecter}},bt:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);n.resolver(t.resolveWith)},Et:function(t){var n=this.getRequest(t.source);if(!n)throw new Error("No request registered for source: "+t.source);if(!n.rejecter)throw new Error("No rejecter registered for source: "+t.source);n.rejecter(t.rejectWith)}}},9220:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);function a(t,n){return n||(n={}),t?(i.each(t,(function(t){if(!i.isString(t)){if(i.isObject(t)){var e=t.type,r=t.name||"_";n[e]||(n[e]={}),n[e][r]=!0}i.isArray(t)&&a(t,n)}})),n):n}t.exports={initialize:function(){this.W={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.vt)},vt:function(t){i.isEmpty(t.data.audiences)||(i.each(t.data.audiences,i.bind((function(t){o.deepFreeze(t),i.merge(this.W.featuresNeeded,a(t.conditions)),this.W.audiences[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.W.audiences))},getFeaturesNeeded:function(t){return o.safeReference(this.W.featuresNeeded[t]||{})},getAudiencesMap:function(){return o.safeReference(this.W.audiences)},get:function(t){return o.safeReference(this.W.audiences[t])},getAudienceName:function(t){return i.find(i.values(this.W.audiences),{id:t}).name||"Aud "+t}}},7010:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);t.exports={initialize:function(){this.W={},this.on(r.ADD_CHANGE,this.It),this.on(r.DATA_LOADED,this.vt)},getChange:function(t){return this.W[t]},vt:function(t){i.isEmpty(t.data.changes)||i.each(t.data.changes,i.bind(this.It,this))},It:function(t){o.deepFreeze(t),this.W[t.id]=t,this.emitChange()}}},9883:function(t,n,e){var i=e(7237),r=e(856),o=e(1968);t.exports={initialize:function(){this.W={},i.each(o.Lifecycle,i.bind((function(t){this.W[t]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.At),this.on(r.CLEAR_CLEANUP_FN,this.Tt)},getCleanupFns:function(t){return i.cloneDeep(this.W[t])},At:function(t){this.W[t.lifecycle].push(t.cleanupFn),this.emitChange()},Tt:function(t){var n=this.W[t.lifecycle];if(t.cleanupFn){var e=n.indexOf(t.cleanupFn);e>-1&&(n.splice(e,1),this.emitChange())}else this.W[t.lifecycle]=[],this.emitChange()}}},1486:function(t,n,e){var i=e(856),r=e(7615);t.exports={initialize:function(){this.W={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.St),this.on(i.SET_CLIENT_VERSION,this.kt)},getClientName:function(){return this.W.name},getClientVersion:function(){return this.W.version},St:function(t){t&&(this.W.name=t),this.emitChange()},kt:function(t){t&&(this.W.version=t),this.emitChange()}}},7148:function(t,n,e){var i=e(856);t.exports={initialize:function(){this.W={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Rt),this.on(i.SET_COOKIE_AGE,this.Ct),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Nt)},getCurrentDomain:function(){return this.W.currentDomain},getDefaultAgeInSeconds:function(){return this.W.defaultAgeSeconds},getAutoRefresh:function(){return this.W.autoRefresh},Rt:function(t){this.W.currentDomain=t,this.emitChange()},Ct:function(t){this.W.defaultAgeSeconds=t,this.emitChange()},Nt:function(t){this.W.autoRefresh=t,this.emitChange()}}},4070:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);t.exports={initialize:function(){this.W={},this.on(r.DATA_LOADED,this.vt)},vt:function(t){i.isEmpty(t.data.dimensions)||(i.each(t.data.dimensions,i.bind((function(t){o.deepFreeze(t),this.W[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.W))},getById:function(t){return o.safeReference(this.W[t])},getByApiName:function(t){return o.safeReference(i.find(i.values(this.W),{apiName:t}))}}},9014:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1,requestedEmbeddedEditor:!1},this.on(r.LOAD_DIRECTIVE,this.Dt)},getAll:function(){return i.cloneDeep(this.W)},conflictInObservingChanges:function(){return!this.W.mutationObserverAPISupported},isDisabled:function(){return this.W.disabled},isEditor:function(){return this.W.isEditor},clientHasAlreadyInitialized:function(){return this.W.alreadyInitialized},getForceAudienceIds:function(){return this.W.forceAudienceIds},getForceVariationIds:function(){return this.W.forceVariationIds},getPreviewLayerIds:function(){return this.W.previewLayerIds},getProjectToken:function(){return this.W.projectToken},getForceTracking:function(){return this.W.forceTracking},shouldActivate:function(){return!this.W.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.W.isPreview},shouldBootstrapDataForEditor:function(){return this.W.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.W.isPreview||this.W.isLegacyPreview||!this.getProjectToken()||this.W.isEditor)},shouldLoadEmbeddedEditor:function(){return this.W.requestedEmbeddedEditor&&!this.W.isEditor},shouldBailForDesktopApp:function(){return!this.W.isEditor&&this.W.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.W.isSlave&&!this.W.isEditor&&this.W.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.W.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.W.shouldOptOut},shouldSendTrackingData:function(){return!this.W.trackingDisabled&&(!!this.W.forceTracking||!this.W.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.W.isSlave},isRunningInDesktopApp:function(){return this.W.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.W.isRunningInV2Editor},Dt:function(t){i.extend(this.W,t),this.emitChange()}}},1117:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);t.exports={initialize:function(){this.W={},this.on(r.DATA_LOADED,this.vt)},getAll:function(){return o.safeReference(i.values(this.W))},getEventsMap:function(){return o.safeReference(this.W)},get:function(t){return o.safeReference(this.W[t])},getByApiName:function(t){return o.safeReference(i.find(i.values(this.W),{apiName:t}))},getByPageId:function(t){return o.safeReference(i.filter(this.W,{pageId:t}))},vt:function(t){i.isEmpty(t.data.events)||(i.each(t.data.events,i.bind((function(t){t.pageId||(t.pageId=t.viewId),o.deepFreeze(t),this.W[t.id]=t}),this)),this.emitChange())}}},1250:function(t,n,e){var i=e(7237),r=e(856);function o(t){var n=[];return t&&i.isObject(t)?(t.type&&n.push(t.type),n.push("|"),t.type&&t.name&&n.push(t.name),n.join("")):"|"}t.exports={initialize:function(){this.W={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Ot),this.on(r.REMOVE_EMITTER_HANDLER,this.xt)},getHandlers:function(t,n){var e=[null,{type:t.type},{type:t.type,name:t.name}],r=[];return i.each(e,i.bind((function(t){var n=o(t),e=this.W.handlers[n];e&&(r=r.concat(e))}),this)),n&&(r=i.filter(r,(function(t){return!t.publicOnly}))),r},Ot:function(t){var n=o(t.filter);this.W.handlers[n]||(this.W.handlers[n]=[]),this.W.handlers[n].push({handler:t.handler,token:t.token,publicOnly:!!t.publicOnly,emitErrors:!!t.emitErrors}),this.emitChange()},xt:function(t){var n=!1,e=t.token;i.forOwn(this.W.handlers,i.bind((function(t,r){var o=i.filter(t,(function(t){return t.token!==e}));o.length!==t.length&&(n=!0,this.W.handlers[r]=o)}),this)),n&&this.emitChange()}}},1372:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);t.exports={initialize:function(){this.W={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{},ga4UserId:null},this.on(r.DATA_LOADED,this.Mt),this.on(r.ACTIVATE,this.Pt),this.on(r.RECORD_GLOBAL_DECISION,this.Lt),this.on(r.SET_DOMCONTENTLOADED,this.Ut),this.on(r.SET_GA4_USER_ID,this.Vt)},getRevision:function(){return this.W.revision},getGlobalHoldbackThreshold:function(){return this.W.holdback},getProjectId:function(){return this.W.projectId},getSnippetId:function(){return this.W.snippetId},getAccountId:function(){return this.W.accountId},getNamespace:function(){return this.W.namespace},getActivationId:function(){return this.W.activationId},getActivationTimestamp:function(){return this.W.activationTimestamp},getAnonymizeIP:function(){return this.W.anonymizeIP},isGlobalHoldback:function(){return!!this.W.isGlobalHoldback},getListTargetingKeys:function(){return this.W.listTargetingKeys.slice()},getDCPServiceId:function(){return this.W.dcpServiceId},getDCPKeyfieldLocators:function(){return this.W.dcpKeyfieldLocators},getRecommenderServices:function(){return this.W.recommenderServices},getProjectJS:function(){return this.W.projectJS},getPlugins:function(){return this.W.plugins},getExperimental:function(){return o.safeReference(this.W.experimental)},getGA4UserId:function(){return this.W.ga4UserId},domContentLoadedHasFired:function(){return this.W.domContentLoaded},Pt:function(t){this.W.activationId=t.activationId,this.W.activationTimestamp=t.activationTimestamp,this.W.isGlobalHoldback=null},Lt:function(t){var n=t.isGlobalHoldback;if(null!==this.W.isGlobalHoldback&&this.W.isGlobalHoldback!==n)throw new Error("Attempted to change already set global holdback!");this.W.isGlobalHoldback=n,this.emitChange()},Vt:function(t){var n=t.ga4UserId;if(!n)throw new Error('Argument "payload.ga4UserId" is missing');this.W.ga4UserId=n,this.emitChange()},Mt:function(t){var n=i.pick(t.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental","ga4UserId"]);if(0!==i.keys(n).length){i.extend(this.W,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},n),this.emitChange()}},Ut:function(){this.W.domContentLoaded=!0,this.emitChange()}}},7935:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);t.exports={initialize:function(){this.W={},this.on(r.DATA_LOADED,this.vt)},vt:function(t){i.isEmpty(t.data.groups)||(i.each(t.data.groups,i.bind((function(t){o.deepFreeze(t),this.W[t.id]=t}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.W))},getGroupsMap:function(){return o.safeReference(this.W)},get:function(t){return o.safeReference(this.W[t])}}},3731:function(t,n,e){var i=e(7237),r=e(856),o=e(4750);t.exports={initialize:function(){this.W={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Ft),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.Bt)},getOriginalPushState:function(){return this.W.originalPushState},getOriginalReplaceState:function(){return this.W.originalReplaceState},Ft:function(){this.W.originalPushState||(this.W.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},Bt:function(){this.W.originalReplaceState||(this.W.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},3077:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={},this.on(r.DATA_LOADED,this.vt),this.on(r.SET_INTEGRATION_SETTINGS,this.zt)},vt:function(t){i.isEmpty(t.data.integrationSettings)||(i.each(t.data.integrationSettings,i.bind((function(t){this.W[t.id]=t}),this)),this.emitChange())},zt:function(t){var n=this.W[t.id];n?i.extend(n,t):this.W[t.id]=t},getAll:function(){return i.cloneDeep(i.values(this.W))},get:function(t){return i.cloneDeep(this.W[t])},getReference:function(t){return this.W[t]}}},6526:function(t,n,e){var i=e(7237),r=e(856),o=e(3868),a="*";t.exports={initialize:function(){this.W={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.jt),this.on(r.RECORD_LAYER_DECISION,this.Gt),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.qt)},getLayerState:function(t,n){if(this.W[t]){var e=this.W[t];if(i.keys(e).length>1&&!n)throw new Error("View Id must be specified when more than one layerState for layer.");return n?i.cloneDeep(i.find(e,{pageId:n})):i.cloneDeep(e[a])}},getLayerStates:function(t){var n=[];for(var e in this.W)i.forEach(this.W[e],(function(e){(i.isUndefined(t)||e.namespace===t)&&n.push(i.cloneDeep(e))}));return n},getLayerStatesForAnalytics:function(){var t=[];for(var n in this.W)i.forEach(this.W[n],(function(n){t.push(i.pick(n,["layerId","decision","decisionEventId"]))}));return t},jt:function(t){t.merge||(this.W={}),i.each(t.layerStates,i.bind((function(t){var n=t.layerId;t.pageId||(t.pageId=t.viewId);var e=t.pageId||a,r=this.W[n];if(i.isUndefined(r))this.W[n]={},this.W[n][e]=t;else{var o=r[e];(!o||t.decisionTimestamp>(o.decisionTimestamp||0))&&(this.W[n][e]=t)}}),this)),this.emitChange()},Gt:function(t){var n={layerId:t.layerId,revision:t.revision,namespace:t.namespace,pageId:t.pageId,decisionTicket:t.decisionTicket,decision:t.decision,decisionActivationId:t.activationId,decisionTimestamp:t.timestamp,decisionEventId:null},e=this.W[t.layerId]||{};t.pageId?(delete e[a],e[t.pageId]=n):(e={})[a]=n,this.W[t.layerId]=e,this.emitChange()},qt:function(t){var n=t.layerId,e=t.pageId||a;this.W[n]?this.W[n][e]?(this.W[n][e].decisionEventId=t.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",n)}}},5905:function(t,n,e){var i=e(7237),r=e(856),o=e(8235),a=e(2550);t.exports={initialize:function(){this.W={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.vt)},vt:function(t){if(!i.isEmpty(t.data.layers)){var n=this;i.each(t.data.layers,(function(t){i.each(t.experiments,(function(e){t.pageIds||(t.pageIds=t.viewIds),e.campaignName||a.isSingleExperimentPolicy(t.policy)?a.isSingleExperimentPolicy(t.policy)&&t.groupId&&(e.groupId=t.groupId):e.campaignName=t.name,i.each(e.variations,(function(t){i.each(t.actions,(function(t){t.pageId||(t.pageId=t.viewId)})),n.W.variations[t.id]=t})),n.W.experiments[e.id]=e})),o.deepFreeze(t),n.W.layers[t.id]=t})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.W.layers))},getCampaignsMap:function(){return o.safeReference(this.W.layers)},getExperimentsMap:function(){return o.safeReference(this.W.experiments)},getVariationsMap:function(){return o.safeReference(this.W.variations)},getCount:function(){return i.keys(this.W.layers).length},getAllByPageIds:function(t){return o.safeReference(i.filter(this.W.layers,(function(n){return i.some(t,i.partial(i.includes,n.pageIds))})))},get:function(t){return o.safeReference(this.W.layers[t])},getLayerByExperimentId:function(t){var n=i.find(this.W.layers,(function(n){return i.find(n.experiments,{id:t})}));return o.safeReference(n)},getExperimentByVariationId:function(t){var n;return i.some(this.W.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:t})&&(n=e),n})),n})),o.safeReference(n)}}},3041:function(t,n,e){var i=e(856);t.exports={initialize:function(){this.W={logs:[]},this.on(i.LOG,this.Ht)},getLogs:function(){return this.W.logs},Ht:function(t){this.W.logs.push(t),this.emitChange()},Z:function(){return this.W.logs.slice()}}},978:function(t,n,e){var i=e(856),r=e(8235);t.exports={initialize:function(){this.W={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Yt),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Kt)},get:function(){return r.safeReference(this.W.data)},hasTracked:function(){return this.W.hasTracked},Yt:function(t){r.deepFreeze(t),this.W.data=t,this.W.hasTracked=!1,this.emitChange()},Kt:function(){this.W.hasTracked=!0}}},5258:function(t,n,e){var i=e(7237),r=e(856),o=e(7648);t.exports={initialize:function(){this.W={},this.on(r.SET_PENDING_EVENT,this.$t),this.on(r.REMOVE_PENDING_EVENT,this.Wt),this.on(r.LOAD_PENDING_EVENTS,this.Xt)},getEvents:function(){return this.W},getEventsString:function(){return o.stringify(this.W)},$t:function(t){i.keys(this.W).length>=1e3&&this.Jt();var n=t.id,e=t.retryCount;this.W[n]&&this.W[n].retryCount===e||(this.W[n]={id:n,timeStamp:t.timeStamp,data:t.data,retryCount:e},this.emitChange())},Wt:function(t){delete this.W[t.id],this.emitChange()},Xt:function(t){this.W=t.events,this.Jt(),this.emitChange()},Jt:function(){for(var t=i.sortBy(this.W,"timeStamp"),n=0;n<=t.length-1e3;n++)delete this.W[t[n].id];this.emitChange()}}},4211:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Yt)},isExpectingRedirect:function(){return i.isString(this.W.layerId)},getLayerId:function(){return this.W.layerId},Yt:function(t){this.isExpectingRedirect()||(this.W.layerId=t.layerId,this.emitChange())}}},1021:function(t,n,e){var i=e(7237),r=e(856),o=e(1968);t.exports={initialize:function(){this.W={},this.W[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Qt)},Qt:function(t){i.isUndefined(this.W[o.PerformanceData.performance_marks][t.name])&&(this.W[o.PerformanceData.performance_marks][t.name]=[]),this.W[o.PerformanceData.performance_marks][t.name].push(t.data),this.emitChange()},getMarks:function(){return i.mapValues(this.W[o.PerformanceData.performance_marks],(function(t){return i.map(t,(function(t){return[t.startTime,t.duration]}))}))},getDurationsFor:function(t){return i.reduce(t,i.bind((function(t,n){var e=this.W[o.PerformanceData.performance_marks][n];return e&&(t[n]=Math.round(i.reduce(e,(function(t,n){return t+n.duration}),0))),t}),this),{})}}},4459:function(t,n,e){var i=e(7237),r=e(856),o=e(1968),a=e(3868);t.exports={initialize:function(){this.W=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Zt)},Zt:function(t){var n=t.type,e=t.name,i=t.plugin;if(!n||!e)throw new Error("Missing information needed to register plugins: "+n+":"+e);if(!this.W[n])throw new Error("Invalid plugin type specified: "+n);this.W[n][e]=i,a.debug("Plugin Store: Registering Plugin :",t)},getAllPlugins:function(t){if(!t)return this.W;if(this.W[t])return this.W[t];throw new Error("Invalid plugin type: "+t)},getPlugin:function(t,n){if(!n||!t)throw new Error("Missing plugin parameters");return this.getAllPlugins(t)[n]||null}}},8499:function(t,n,e){var i=e(7237),r=e(856),o=e(3499);t.exports={initialize:function(){this.W={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.tn)},getPendingAttributeValue:function(t){return t=i.isArray(t)?t.concat("pending"):[t,"pending"],o.getFieldValue(this.W,t)},tn:function(t){o.setFieldValue(this.W,t.key,{pending:t.pending}),this.emitChange()}}},7111:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.nn),this.on(r.RECORD_API_USAGE,this.en),this.on(r.INITIALIZE_CHANGE_METRICS,this.rn),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.an),this.on(r.RECORD_AUDIENCE_USAGE,this.un),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.cn),this.on(r.RECORD_CHANGE_OVERHEATED,this.sn),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.fn),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ln),this.on(r.RECORD_INTEGRATION_USAGE,this.dn),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.vn),this.on(r.RECORD_LAYER_POLICY_USAGE,this.hn),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.pn),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.gn),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.mn),this.on(r.RECORD_VISITOR_ID_ERROR,this._n),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this.yn)},nn:function(t){i.merge(this.W,t),this.emitChange()},en:function(t){this.W.apis[t.methodName]||(this.W.apis[t.methodName]=0),this.W.apis[t.methodName]++,this.emitChange()},rn:function(){i.isUndefined(this.W.data.extras.changeMacrotaskRate)&&(this.W.data.extras.changeMacrotaskRate=0),i.isUndefined(this.W.data.extras.numOverheatedChanges)&&(this.W.data.extras.numOverheatedChanges=0)},cn:function(t){i.isUndefined(this.W.data.extras.changeMacrotaskRate)&&(this.W.data.extras.changeMacrotaskRate=0),t.changeMacrotaskRate>this.W.data.extras.changeMacrotaskRate&&(this.W.data.extras.changeMacrotaskRate=t.changeMacrotaskRate),this.emitChange()},sn:function(){i.isUndefined(this.W.data.extras.numOverheatedChanges)&&(this.W.data.extras.numOverheatedChanges=0),this.W.data.extras.numOverheatedChanges++,this.emitChange()},ln:function(t){this.W.DOMObservation[t.counterName]||(this.W.DOMObservation[t.counterName]=0),this.W.DOMObservation[t.counterName]++,this.emitChange()},wn:function(t,n,e){i.isUndefined(this.W.featuresNeeded[t])&&(this.W.featuresNeeded[t]={});var r=this.W.featuresNeeded[t];i.each(n,(function(t){r[t]||(r[t]={}),r[t][e]||(r[t][e]=!0)}))},dn:function(t){this.wn("integrations",t.integrations,t.layerId)},fn:function(t){this.wn("changeTypes",t.changeTypes,t.layerId)},an:function(t){this.wn("activationTypes",[t.activationType],t.entityId),this.emitChange()},pn:function(t){this.wn("viewFeatures",t.featuresUsed,t.entityId),this.emitChange()},vn:function(t){this.wn("layerFeatures",[t.feature],t.entityId),this.emitChange()},hn:function(t){this.wn("policy",[t.policy],t.layerId),this.emitChange()},un:function(t){this.wn("audiences",t.audienceTypes,t.layerId),this.emitChange()},gn:function(t){this.W.data.extras.viewsInitiallyActivatedCount=t.viewsInitiallyActivatedCount,this.emitChange()},mn:function(t){this.wn("visitorIdLocatorType",[t.visitorIdLocatorType],t.entityId),this.emitChange()},_n:function(t){this.W.data.extras.errorCustomVisitorId=t.isError,this.emitChange()},yn:function(t){this.wn("stickyBucketing",[t.feature],t.id)},getSampleRum:function(){return this.W.inRumSample},getRumId:function(){return this.W.id},getRumHost:function(){return this.W.RumHost},getApiData:function(){return this.W.apis},getDOMObservationData:function(){return this.W.DOMObservation},getRumData:function(){return i.cloneDeep(this.W.data)},getScriptSrc:function(){return this.W.src},getFeaturesNeededData:function(){var t=this.W.featuresNeeded,n={};return i.forOwn(t,(function(t,e){var r=i.keys(t);i.isEmpty(r)||(n[e]={}),i.forEach(r,(function(r){n[e][r]=i.keys(t[r]).length}))})),n}}},5932:function(t,n,e){var i=e(856);t.exports={initialize:function(){this.W={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.bn)},bn:function(t){if(!t.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.W.natives=t.sandboxedFunctions,this.W.initialized=!0,this.emitChange()},getAll:function(){return this.W.natives},get:function(t){if(!t)throw new Error("Missing name parameter");return this.W.natives[t]||null},isInitialized:function(){return this.W.initialized}}},8583:function(t,n,e){var i=e(7237),r=e(856),o=e(2074),a=e(1954);t.exports={initialize:function(){this.W={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.En),this.on(r.LOAD_SESSION_STATE,this.In)},getState:function(){return i.cloneDeep(this.W)},getSessionId:function(){return this.W.sessionId},In:function(t){this.W.sessionId=t.sessionId,this.W.lastSessionTimestamp=t.lastSessionTimestamp,this.emitChange()},En:function(){var t=o.now(),n=this.W.lastSessionTimestamp;(!this.W.sessionId||t-n>18e5)&&(this.W.sessionId=a.generate()),this.W.lastSessionTimestamp=t,this.emitChange()}}},838:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.An(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Tn),this.on(r.REGISTER_PREVIOUS_BATCH,this.Sn),this.on(r.REGISTER_TRACKER_VISITOR,this.kn),this.on(r.REGISTER_TRACKER_EVENT,this.Rn),this.on(r.REGISTER_TRACKER_DECISION,this.Cn),this.on(r.RESET_TRACKER_EVENTS,this.Nn),this.on(r.RESET_TRACKER_STORE,this.An),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Dn),this.on(r.SET_TRACKER_POLLING,this.On),this.on(r.SET_TRACKER_BATCHING,this.xn),this.on(r.SET_TRACKER_USE_BEACON,this.Mn),this.on(r.SET_TRACKER_SEND_EVENTS,this.Pn),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Ln),this.on(r.SET_TRACKER_DIRTY,this.Un),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Vn)},getPersistableState:function(){return this.W.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.W.data,decisions:this.W.decisions,decisionEvents:this.W.decisionEvents,previousBatches:this.W.previousBatches}:{}:null},Ln:function(t){i.isEmpty(this.W.data)||i.isEmpty(t.data)||(this.Tn(),this.W.previousBatches.push(this.getEventBatch())),this.W.data=t.data||{},this.W.decisions=t.decisions||[],this.W.decisionEvents=t.decisionEvents||[],i.isEmpty(this.W.previousBatches)||i.isEmpty(t.previousBatches)?this.W.previousBatches=t.previousBatches||[]:this.W.previousBatches=this.W.previousBatches.concat(t.previousBatches),this.emitChange()},Un:function(t){this.W.isDirty=t,this.emitChange()},Rn:function(t){var n=this.Fn();(i.isEmpty(n.snapshots)||!i.isEmpty(this.W.decisionEvents))&&this.Bn(),this.zn().events.push(t.event),this.W.decisions=t.decisions,this.Un(!0)},Cn:function(t){this.W.decisionEvents.push(t.decisionEvent),this.W.decisions=t.decisions,this.Un(!0)},kn:function(t){i.isEmpty(this.W.data)?this.W.data=t.data:this.Tn(),this.W.data.visitors.push(t.visitor),this.W.decisions=t.decisions,this.W.decisionEvents=[],this.Un(!0)},Sn:function(t){this.W.previousBatches.push(t),this.Un(!0)},An:function(){this.W={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Nn:function(){var t=this.Fn();this.W.data.visitors=[t],t.snapshots=[],this.Un(!0)},Dn:function(){this.W.previousBatches=[],this.Un(!0)},On:function(t){this.W.polling=t,this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()},Mn:function(t){this.W.shouldUseBeacon=t,this.emitChange()},Pn:function(t){this.W.canSend=t,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.W.data)},getPreviousBatches:function(){return i.cloneDeep(this.W.previousBatches)},jn:function(){return this.W.decisionEvents.slice()},Gn:function(){this.W.decisionEvents=[]},qn:function(){return this.W.decisions.slice()},isPolling:function(){return this.W.polling},shouldBatch:function(){return this.W.shouldBatch},shouldUseBeacon:function(){return this.W.shouldUseBeacon},zn:function(){return i.last(this.Fn().snapshots)},Fn:function(){return i.last(this.W.data.visitors)},Bn:function(){var t=this.jn();this.Fn().snapshots.push({decisions:this.qn(),events:t}),this.Gn(),this.Un(!0)},Tn:function(){this.W.decisionEvents.length>0&&this.Bn()},hasEventsToSend:function(){if(!i.isEmpty(this.W.decisionEvents))return!0;if(!i.isEmpty(this.W.data)&&i.some(this.W.data.visitors||[],(function(t){return t.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.W.previousBatches)},canSend:function(){return this.W.canSend},Vn:function(t){var n=this.Fn();n&&(n.attributes=t.attributes)}}},5048:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={},this.on(r.SET_UA_DATA,this.vt)},vt:function(t){i.isEmpty(this.W)&&(this.W=t.data)},get:function(){return i.cloneDeep(this.W)}}},5946:function(t,n,e){var i=e(7237),r=e(856),o=e(3868),a={globalTags:{},viewStates:{},shouldBatch:!1};t.exports={initialize:function(){this.W=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.Hn),this.on(r.SET_VIEW_ACTIVE_STATE,this.Yn),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Kn),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.$n),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Wn),this.on(r.SET_GLOBAL_TAGS,this.Xn),this.on(r.RESET_VIEW_STATES,this.Jn),this.on(r.SET_VIEW_BATCHING,this.xn)},getAll:function(){var t={};for(var n in this.W.viewStates)t[n]=this.getViewState(n);return t},getActiveViewIds:function(){return i.reduce(this.W.viewStates,i.bind((function(t,n,e){return this.isViewActive(e)&&t.push(e),t}),this),[])},shouldBatch:function(){return this.W.shouldBatch},getViewState:function(t){var n=i.cloneDeep(this.W.viewStates[t]),e=this.W.globalTags;return n.metadata=i.extend({},n.parsedMetadata,e,n.userSuppliedMetadata),n},getActiveViewTags:function(){var t=this.getActiveViewStates(),n=i.map(t,(function(t){return t.metadata})),e=[{}].concat(n);return i.extend.apply(i,e)},getActivationEventId:function(t){return this.W.viewStates[t]?this.W.viewStates[t].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.W.viewStates,i.bind((function(t,n,e){return this.isViewActive(e)&&t.push(this.getViewState(e)),t}),this),[])},isViewActive:function(t){var n=this.W.viewStates[t];return n||o.warn("No Page registered with id",t),!!n.isActive},getGlobalTags:function(){return i.cloneDeep(this.W.globalTags)},Jn:function(){this.W.viewStates={},this.emitChange()},Hn:function(t){var n=t.forceClean||!1;i.each(t.views,i.bind((function(t){var e=t.id;this.W.viewStates[e]&&!n||(this.W.viewStates[e]={id:e,isActive:i.isBoolean(t.isActive)&&!n?t.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}})}),this)),this.emitChange()},Yn:function(t){var n=t.view.id;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);this.W.viewStates[n].isActive=t.isActive,t.isActive?this.W.viewStates[n].activatedTimestamp=t.timestamp:(this.W.viewStates[n].parsedMetadata={},this.W.viewStates[n].userSuppliedMetadata={}),this.emitChange()},Kn:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);i.assign(this.W.viewStates[n].parsedMetadata,t.metadata),this.emitChange()},$n:function(t){var n=t.pageId;if(!this.W.viewStates[n])throw new Error("No view exists with id "+n);i.assign(this.W.viewStates[n].userSuppliedMetadata,t.metadata),this.emitChange()},Wn:function(t){var n=t.pageId;this.W.viewStates[n]&&(this.W.viewStates[n].activationEventId=t.eventData.eventId,this.emitChange())},Xn:function(t){i.extend(this.W.globalTags,t),this.emitChange()},xn:function(t){this.W.shouldBatch=t,this.emitChange()}}},189:function(t,n,e){var i=e(7237),r=e(856),o=e(8235);t.exports={initialize:function(){this.W={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.vt)},getAll:function(){return o.safeReference(i.values(this.W.views))},getPagesMap:function(){return o.safeReference(this.W.views)},get:function(t){return o.safeReference(this.W.views[t])},getByApiName:function(t){return o.safeReference(this.W.apiNamesToViews[t])},apiNameToId:function(t){var n=this.W.apiNamesToViews[t];if(n)return n.id},idToApiName:function(t){var n=this.W.views[t];if(n)return n.apiName},getNumberOfPages:function(){return i.keys(this.W.views).length},getAllViewsForActivationType:function(t){return i.filter(this.W.views,{activationType:t})},vt:function(t){i.isEmpty(t.data.views)||(i.each(t.data.views,i.bind((function(t){o.deepFreeze(t),this.W.views[t.id]=t,this.W.apiNamesToViews[t.apiName]=t}),this)),this.emitChange())}}},1641:function(t,n,e){var i=e(7237),r=e(856),o=e(3499);t.exports={initialize:function(){this.W={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Qn),this.on(r.SET_VISITOR_ATTRIBUTES,this.Zn),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.te)},getVisitorProfile:function(){return this.W.profile},getVisitorProfileMetadata:function(){return this.W.metadata},getAttribute:function(t){var n=this.W.profile;return i.cloneDeep(o.getFieldValue(n,t))},getAttributeMetadata:function(t){return i.cloneDeep(this.W.metadata[t])},getVisitorIdFromAPI:function(){return this.W.visitorId},te:function(t){this.W.profile=t.profile,this.W.metadata=t.metadata,this.emitChange()},Zn:function(t){i.each(t.attributes,i.bind((function(t){var n=t.key;o.setFieldValue(this.W.profile,n,t.value),t.metadata&&i.forOwn(t.metadata,i.bind((function(t,e){o.setFieldValue(this.W.metadata,n.concat(e),t)}),this))}),this)),this.emitChange()},Qn:function(t){this.W.visitorId=t,this.emitChange()}}},8946:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={},this.on(r.DATA_LOADED,this.ne)},getCustomBehavioralAttributes:function(){return i.filter(this.W,(function(t){return!!t.rule_json}))},getVisitorAttribute:function(t){var n=i.values(this.W);if(t.datasourceId&&(n=i.filter(n,{dcp_datasource_id:String(t.datasourceId)})),t.attributeName&&t.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(t.attributeId){var e=this.W[t.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+t.attributeId);return e}if(t.attributeName){var r=i.filter(n,{name:t.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+t.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+t.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},ne:function(t){i.isEmpty(t.data.visitorAttributes)||(i.each(t.data.visitorAttributes,i.bind((function(t){this.W[t.id]=t}),this)),this.emitChange())}}},3160:function(t,n,e){Object.defineProperty(n,"ee",{value:!0});var i=e(7237),r=e(856),o=e(7648);t.exports={initialize:function(){this.W={variationIdMap:{},preferredLayerMap:{},contextualMabMap:{},odpSegments:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.re),this.on(r.MERGE_VARIATION_ID_MAP,this.oe),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.ae),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.ue),this.on(r.UPDATE_CONTEXTUAL_MAB_MAP,this.ce),this.on(r.MERGE_CONTEXTUAL_MAB_MAP,this.se),this.on(r.SET_ODP_SEGMENTS,this.fe)},fe:function(t){this.W.odpSegments=t,this.emitChange()},getOdpSegments:function(){return this.W.odpSegments},getContextualMabMap:function(){return i.cloneDeep(this.W.contextualMabMap)},getContextualMabMapString:function(){return o.stringify(this.W.contextualMabMap)},ce:function(t){var n=this.W.contextualMabMap[t.layerId]||{};i.isEqual(n[t.experimentId],t.variationData)||(n[t.experimentId]=t.variationData,this.W.contextualMabMap[t.layerId]=n,this.emitChange())},se:function(t){var n=this.W.contextualMabMap;i.forEach(t.contextualMabMap,(function(t,e){n[e]||(n[e]={}),i.forEach(t,(function(t,i){n[e][i]||(n[e][i]=t)}))})),this.W.contextualMabMap=n,this.emitChange()},getVariationIdMap:function(){return i.cloneDeep(this.W.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.W.variationIdMap)},re:function(t){var n=this.W.variationIdMap[t.layerId]||{};n[t.experimentId]!==t.variationId&&(n[t.experimentId]=t.variationId,this.W.variationIdMap[t.layerId]=n,this.emitChange())},oe:function(t){var n=this.getVariationIdMap(),e=t.variationIdMap;i.each(n||{},(function(t,n){e[n]?i.assign(e[n],t):e[n]=t})),this.W.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.W.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.W.preferredLayerMap)},getPreferredLayerId:function(t){return this.W.preferredLayerMap[t]},ae:function(t){this.W.preferredLayerMap[t.groupId]!==t.layerId&&(this.W.preferredLayerMap[t.groupId]=t.layerId,this.emitChange())},ue:function(t){var n=this.getPreferredLayerMap(),e=t.preferredLayerMap;i.assign(e,n),this.W.preferredLayerMap=e,this.emitChange()}}},2101:function(t,n,e){e(7237);var i=e(856);e(9911).J;t.exports={initialize:function(){this.W={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.vt),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.le),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.de)},getEvents:function(){return this.W.events},getForeignEvents:function(){return this.W.foreignEvents},getForeignEventQueues:function(){return this.W.foreignEventQueues},vt:function(t){this.W.events=t,this.emitChange()},le:function(t){this.W.foreignEvents[t.key]=t.value},de:function(t){this.W.foreignEventQueues[t.key]=t.value}}},8017:function(t,n,e){var i=e(856);t.exports={initialize:function(){this.W={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ve)},getBaseMap:function(){return this.W.baseMap},getEventQueue:function(){return this.W.eventQueue},getLastEvent:function(){return this.W.lastEvent},getCleared:function(){return this.W.cleared},getInitialized:function(){return this.W.initialized},ve:function(t){this.W[t.key]=t.value}}},6353:function(t,n,e){var i=e(7237),r=e(856);t.exports={initialize:function(){this.W={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.vt),this.on(r.DATA_LOADED,this.he)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.W.randomId},getVisitorIdLocator:function(){return this.W.visitorIdLocator},vt:function(t){i.extend(this.W,t),this.emitChange()},he:function(t){i.isEmpty(t.data.visitorIdLocator)||(this.W.visitorIdLocator=t.data.visitorIdLocator,this.emitChange())}}},4227:function(t,n,e){var i=e(7237),r=e(3868),o=e(856);t.exports={initialize:function(){this.W={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.pe),this.on(o.XDOMAIN_ADD_FRAME,this.ge),this.on(o.XDOMAIN_SET_MESSAGE,this.me),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this._e),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.ye),this.on(o.XDOMAIN_SET_DISABLED,this.we)},getMessages:function(){return i.cloneDeep(this.W.messages)},getOffset:function(){return 0===this.W.messages.length?0:this.W.messages[0].data.id},getNextMessageId:function(){return this.W.messages.length+this.getOffset()},getMessageById:function(t){return this.W.messages[t-this.getOffset()]},getSubscribers:function(){return this.W.subscribers},getFrames:function(){return this.W.frames},getNextFrameId:function(){return this.W.frames.length},getDefaultFrame:function(){return this.W.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.W.canonicalOrigins)},isDisabled:function(){return this.W.disabled},pe:function(t){this.W.defaultFrame=t},ge:function(t){this.W.frames.push(t)},me:function(t){for(this.W.messages[t.messageId-this.getOffset()]=t.message;this.W.messages.length>1e3;){var n=this.W.messages.shift();r.debug("XDomainStorage: Cleared old message: "+n.data.id)}},_e:function(t){this.W.subscribers.push(t.subscriber)},ye:function(t){this.W.canonicalOrigins=t.canonicalOrigins},we:function(t){this.W.disabled=t.disabled}}},2254:function(t,n){n.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},n.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},n.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},414:function(t,n,e){var i=e(1922).v;n.Error=i("TagError")},852:function(t,n,e){var i=e(1968).PluginTypes,r=e(6553).get("stores/plugins");n.getTagValue=function(t){var e=r.getPlugin(i.viewTagLocators,t.locatorType);if(!e)throw new n.Error("No locator registered for tag locatorType: "+t.locatorType);return e(t)},n.enums=e(2254),n.Error=e(414).Error},4472:function(t,n,e){var i=e(856),r=e(4361),o=e(5033).Promise,a=e(6553).get("stores/async_request");n.makeAsyncRequest=function(t,n){var e,u,c=a.getPromise(t);if(c)return c;var s=new o((function(t,n){e=t,u=n}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:t,promise:s,resolver:e,rejecter:u}),n&&n(),s},n.resolveRequest=function(t,n){r.dispatch(i.RESOLVE_DEFERRED,{source:t,resolveWith:n})},n.rejectRequest=function(t,n){r.dispatch(i.REJECT_DEFERRED,{source:t,rejectWith:n})}},6822:function(t,n,e){var i=e(2314),r=e(4750);n.getLanguage=function(){return r.getNavigatorLanguage()},n.getQueryParams=i.getQueryParams,n.getQueryParamValue=i.getQueryParamValue,n.getUrl=function(){return r.getHref()}},4294:function(t,n,e){var i=e(7237),r=e(1922).v,o=e(2074),a=e(7323),u=e(4750),c=e(856),s=e(6553),f=e(4361),l=s.get("stores/cookie_options"),d=n.SetError=r("CookieSetError"),v=n.MismatchError=r("CookieMismatchError"),h=["co","com","net","org","edu","gov","mil","int","ac","com","net","org"];n.getAll=function(t){var e,r,o,u,c;i.isUndefined(t)&&(t=!0),e=a.getCookieString().split(/\s*;\s*/);var s={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&void 0===s[c=n.safeDecodeURIComponent(r.substring(0,u))]){var f=r.substring(u+1);t&&(f=n.safeDecodeURIComponent(f)),s[c]=f}return s},n.safeDecodeURIComponent=function(t){try{return decodeURIComponent(t)}catch(n){return t}},n.get=function(t,e){return n.getAll(e)[t]},n.set=function(t,e,r,s){r=i.extend({encodeValue:!0},r),!1!==s&&(s=!0);var m=[];if(i.isUndefined(r.domain)){var _=l.getCurrentDomain();_||(_=function(t,e){!1!==e&&(e=!0);for(var r,o,a=t.hostname.split("."),u=[],s=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!(a.length>1&&(1===u.length||2===u.length&&i.includes(h,u[0]))||i.includes(p,r))){o={domain:e?"."+r:r};try{n.set(g,Math.random().toString(),o),n.remove(g,o),s=o.domain;break}catch(d){}}return f.dispatch(c.SET_COOKIE_DOMAIN,s),s}(u.getLocation(),!0)),r.domain=_}if(r.domain&&m.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&m.push("path="+r.path),i.isUndefined(r.expires)){var y=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*y)}if(i.isUndefined(r.expires)||m.push("expires="+r.expires.toUTCString()),r.secure&&m.push("secure"),a.setCookie(t+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+m.join(";")),s){var w=r.encodeValue,b=n.get(t,w);if(b!==e){if(!b)throw new d('Failed to set cookie "'+t+'"');throw new v('Expected "'+e+'" for "'+t+'", got "'+b+'"')}}},n.remove=function(t,e){for(var r=u.getLocation().hostname.split("."),o=1===r.length?0:1;r.length>o&&(2!==r.length||!i.includes(h,r[0]));)n.set(t,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var p=["optimizely.test"],g="optimizelyDomainTestCookie"},1922:function(t,n,e){var i=e(3994),r=i("InternalError");n.C=r,n.v=function(t){return i(t,r)}},5699:function(t,n,e){var i=e(7237),r=e(5033).Promise;t.exports=function(){var t,n,e=new r((function(e,i){t=e,n=i}));return e.resolve=function(){return t.apply(null,i.toArray(arguments)),e},e.reject=function(){return n.apply(null,i.toArray(arguments)),e},e}},8235:function(t,n,e){var i=e(7237);n.deepFreeze=function(t){},n.safeReference=function(t){return i.cloneDeep(t)}},3499:function(t,n,e){var i=e(7237);n.getFieldValue=function(t,n){i.isArray(n)||(n=[n]);for(var e=t,r=0;r<n.length;r++){var o=n[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},n.setFieldValue=function(t,n,e){if(!i.isArray(n)||i.isEmpty(n))throw new Error("Attempted to set an invalid key path: "+n);for(var r=t,o=0;o<n.length-1;o++){var a=n[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[n[n.length-1]]=e}},3868:function(t,n,e){var i=e(7237),r=e(856),o=e(2074),a=e(1968),u=e(4361),c=e(7648);function s(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}s.prototype.be=function(){return!i.isNull(this.logLevel)},s.prototype.setLogLevel=function(t){var n=this.Ee(t);null===n?console.error("Unknown log level: "+t):this.logLevel!==n&&(this.log("Setting log level to "+n),this.logLevel=n,this.flush())},s.prototype.setLogMatcher=function(t){i.isString(t)?this.logMatcher=t:this.logMatcher="",this.logGroup=0},s.prototype.shouldLog=function(t){return this.be()&&this.logLevel>=t},s.prototype.matchesLogMessage=function(t,n){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===t?this.logGroup++:"GROUPEND"===t&&this.logGroup--,!0;var r=i.some(n,(function(t){if(!i.isString(t))try{t=c.stringify(t)}catch(n){}return i.isString(t)&&i.includes(t,e)}));return r&&"GROUPSTART"===t&&this.logGroup++,r},s.prototype.storeLog=function(t,n){var e={logLevel:t,logMessage:n};u.dispatch(r.LOG,e)},s.prototype.flush=function(){var t=e(6553).get("stores/log");this.logGroup=0;var n=t.getLogs();i.each(n,i.bind((function(t){this.Ie(t.logLevel,t.logMessage,!0)}),this))},s.prototype.Ie=function(t,n,e){var r,o=t;if(console)switch(t){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.be()&&!this.shouldLog(o)||(i.isArray(n)&&i.isString(n[0])&&(n=this.Ae(n)),this.storeLog(t,n)),r&&this.shouldLog(o)&&this.matchesLogMessage(t,n)&&r.apply(console,n)}catch(u){console&&(console.error?console.error(u):console.log(u))}},s.prototype.debug=function(){this.Ie(a.LogLevel.DEBUG,[].slice.call(arguments))},s.prototype.log=function(){this.Ie(a.LogLevel.INFO,[].slice.call(arguments))},s.prototype.logAlways=function(){var t=this.Ae([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,t),this.storeLog(a.LogLevel.INFO,t)},s.prototype.warn=function(){this.Ie(a.LogLevel.WARN,[].slice.call(arguments))},s.prototype.error=function(t){var n=[].slice.call(arguments);1===n.length&&t.stack?(this.Ie(a.LogLevel.ERROR,[this.Te(),t]),this.Ie(a.LogLevel.INFO,[t.stack])):this.Ie(a.LogLevel.ERROR,n)},s.prototype.groupCollapsed=function(){this.Ie("GROUPSTART",[].slice.call(arguments))},s.prototype.groupEnd=function(){this.Ie("GROUPEND",[].slice.call(arguments))},s.prototype.Ae=function(t){var n=this.Te().toString();return n.length<6&&(n=("     "+n).slice(-6)),[n+"| Optly / "+t[0]].concat(t.slice(1))},s.prototype.Te=function(){return this.timebase?o.now()-this.timebase:0},s.prototype.Ee=function(t){return t&&("TRUE"===(t=t.toUpperCase())&&(t="INFO"),"FALSE"===t&&(t="OFF"),"ALL"===t&&(t="DEBUG"),!i.isUndefined(a.LogLevel[t]))?a.LogLevel[t]:null},t.exports=new s},6795:function(t,n,e){var i;i=e(4791),t.exports=i},2550:function(t,n){n.isSingleExperimentPolicy=function(t){return"single_experiment"===t||"multivariate"===t}},5833:function(t,n,e){var i=e(7237),r=e(5033).Promise,o=e(4750);n.pollFor=function(t,n,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),n=n||50,new r((function(e,i){!function r(){var a;if(!u()){try{var c=t();if(c)return e(c)}catch(s){a=s}return o.setTimeout(r,n)}i(a||new Error("Poll timed out"))}()}))}},5803:function(t,n,e){var i=e(7237),r=e(5033).Promise;n.firstToResolve=function(t){return new r((function(n){i.each(t,(function(t){r.resolve(t).then(n,(function(){}))}))}))}},2314:function(t,n,e){var i=e(7237),r=e(4750);n.getQueryParams=function(){var t=r.getLocationSearch()||"";if(0===t.indexOf("?")&&(t=t.substring(1)),0===t.length)return[];for(var n=t.split("&"),e=[],i=0;i<n.length;i++){var o="",a="",u=n[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},n.getQueryParamValue=function(t){for(var e=n.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===t)return e[i][1]},n.queryStringFromMap=function(t){return i.map(t,(function(t,n){return n+"="+t})).join("&")}},2512:function(t,n,e){var i=e(7237),r=e(3868),o=e(4750);function a(t){this.windowLength=t,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(t){t()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n)},t.exports=a},7464:function(t,n,e){var i=e(7237),r=e(6553).get("stores/observed_redirect");n.getReferrer=function(){var t=r.get();return t?t.referrer:null},n.getExperimentAndVariation=function(){var t=r.get();return t&&i.isString(t.variationId)?i.pick(t,["experimentId","variationId"]):null}},7318:function(t,n,e){var i=e(7237),r=e(856),o=e(2074),a=e(6553),u=e(7323),c=e(1968),s=e(4361),f=e(3868),l=a.get("stores/sandbox"),d=e(4750);n.shouldSandbox=function(){return!1},n.get=function(t){if(!t)throw new Error("Name is required");if(n.shouldSandbox()){l.isInitialized()||v();var e=l.get(t);if(e)return e}return d.getGlobal(t)};var v=function(){try{var t="optimizely_"+o.now(),n=u.createElement("iframe");n.name=t,n.style.display="none",u.appendToHead(n);var e=n.contentWindow,a=n.contentDocument;a.write("<scr"),a.write("ipt></scr"),a.write("ipt>"),a.close();var l=i.mapValues(c.SandboxedFunctions,(function(t){return e[t]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l})}catch(d){f.warn("Unable to create a sandbox: ",d)}}},6563:function(t,n,e){var i=e(7323),r=e(3868),o=e(820);n.addScriptAsync=function(t,n){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=t,n&&(o.onload=n),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+t)},n.addScriptSync=function(t,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==t.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+t);i.write("<scr"),i.write('ipt id="'+a+'" src="'+t+'"></scr'),i.write("ipt>");var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+t+") synchronously:",i),n.addScriptAsync(t,e)}}catch(c){r.debug("DocumentEnv.write failed for "+t+": "+c.message);return o.request({url:t,async:!1,contentType:"text/plain",success:function(t){new Function(t.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+t+" via synchronous XHR: "+i.message),n.addScriptAsync(t,e)}))}}},2537:function(t,n,e){var i=e(5033).Promise,r=e(4750);n.makeTimeoutPromise=function(t){return new i((function(n,e){r.setTimeout((function(){e(new Error("Timed out after "+t+" ms"))}),t)}))}},7562:function(t,n,e){var i=e(7237),r=e(205),o=e(4750),a=e(856),u=e(6553),c=e(4361),s=u.get("stores/ua_data");n.get=function(){var t=s.get();return i.isEmpty(t)&&(t=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:t})),t}},3143:function(t,n){n.guessDomain=function(t,n){if(!t)return"";try{return n?t.match(/:\/\/(.[^/]+)/)[1]:t.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},3660:function(t,n,e){var i=e(7237),r=e(5033).Promise,o=e(856),a=e(6553),u=e(4361),c=e(3081),s=e(1922).v,f=e(2074),l=e(7323),d=e(7648),v=e(5833),h=e(9213),p=e(4750),g=(e(1968).VisitorStorageKeys,e(3868)),m=a.get("stores/xdomain"),_=n.Error=s("XDomainStorageError");function y(t){var n;if(i.find(m.getFrames(),{origin:t.origin})){try{n=d.parse(t.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",t)}if("ERROR"===n.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),c.emitInternalError(new _("Xdomain Error: "+n.response));else if("SYNC"===n.type)i.each(m.getSubscribers(),(function(t){t(n.response.key,n.response.value)}));else{var e=m.getMessageById(n.id);if(!e){if(g.warn("XDomain","No stored message found for ID",n.id),i.isNumber(n.id)){var r=m.getNextMessageId();n.id>=r?c.emitInternalError(new _("Message ID is greater than expected maximum ID ("+n.id+">"+r+")")):n.id<0?c.emitInternalError(new _("Message ID is < 0: "+n.id)):c.emitInternalError(new _("No stored message found for message ID: "+n.id))}else c.emitInternalError(new _("Message ID is not a number: "+n.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",n.id);e.resolver(n.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.id,message:{data:{id:n.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+t.origin)}function w(t,n){return n||(n=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},t,{id:m.getNextMessageId(),use_cookie:!1}),resolver:e};n?m.isDisabled()||b(r,n):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function b(t,n){var e=t.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.data.id,message:i.extend({},t,{startTime:f.now()})}),n.target.postMessage(d.stringify(e),n.origin)}n.setItem=function(t,n,e){return w({type:"PUT",key:t,value:n},e)},n.getItem=function(t,n){return w({type:"GET",key:t},n)},n.fetchAll=function(t){return w({type:"GETALL"},t)},n.deleteData=function(t,n){return w({type:"DELETE",visitorId:t},n)},n.subscribe=function(t){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:t})},n.loadIframe=function(t,n){return new r((function(e){var i=l.createElement("iframe");i.src=t+n,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:t,path:n};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},n.getXDomainUserId=function(t,n){var e,r={},o=i.keys(t);return i.each(n,(function(t){r[t]=[],i.each(o,(function(n){var o=h.getUserIdFromKey(n,t);!e&&o&&(e=o),o&&!i.includes(r[t],o)&&r[t].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},n.load=function(t,e){p.addEventListener("message",y);return v.pollFor((function(){return!!l.querySelector("body")})).then((function(){return n.loadIframe(t,e)})).then((function(t){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,t),m.isDisabled()||i.each(m.getMessages(),(function(n){n.startTime||b(n,t)}))}))}},820:function(t,n,e){var i=e(7237),r=e(856),o=e(2074),a=e(4361),u=e(7648),c=e(3868),s=e(5033).Promise,f=e(7318);n.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},n.request=function(t){return t=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},t),new s((function(e,r){if(!n.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){t.success&&t.success(o),e(o)},o.onerror=function(){t.error&&t.error(o),r(o)},i.isObject(t.data)&&(t.data=u.stringify(t.data)),o.open(t.method,t.url,t.async),t.withCredentials&&(o.withCredentials=t.withCredentials),o.setRequestHeader("Content-Type",t.contentType),i.isObject(t.headers)&&i.forEach(t.headers,(function(t,n){o.setRequestHeader(n,t)})),o.send(t.data)}))},n.retryableRequest=function(t,e,u,f){if(!e)return s.reject(new Error("No id specified for request."));if(!n.isCORSSupported())return s.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:t,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Sending event ",e),n.request(t).then((function(t){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),t}),(function(t){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Event ",l," failed to send, with error ",t," It will be retried ",f-u," times.")),t}))},n.sendBeacon=function(t,e){if(!t.url||!t.data)return s.reject(new Error("Must provide required options"));if(navigator&&navigator.sendBeacon)try{var r=i.isObject(t.data)?u.stringify(t.data):t.data;if(navigator.sendBeacon(t.url,r))return s.resolve();throw new Error("Unable to sendBeacon")}catch(o){c.warn("sendBeacon failed: ",o)}return t=i.extend({method:"POST"},t),n.request(t,e)}},4396:function(t,n,e){var i=e(7237),r=e(856),o=e(2626),a=e(7693),u=e(2074),c=e(6553),s=e(1968),f=e(2968),l=e(4361),d=e(3868),v=e(852),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),_=c.get("stores/view_data");n.parseViewTags=function(t){var e=n.evaluateViewTags(t);n.setParsedViewTags(t.id,e)},n.updateAllViewTags=function(){var t=m.getActiveViewStates();i.each(t,(function(t){var e=_.get(t.id);n.parseViewTags(e)}))},n.evaluateViewTags=function(t){return t.tags?i.reduce(t.tags,(function(t,n){try{t[n.apiName]=v.getTagValue(n)}catch(r){e=r,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",n,r):d.error(r)}var e,i;return t}),{}):{}},n.createViewTicket=function(){var t={};return i.each(p.getAllPlugins(s.PluginTypes.viewProviders),(function(n){t[n.provides]=c.evaluate(n.getter)})),t},n.registerViews=function(t,n){l.dispatch(r.REGISTER_VIEWS,{views:t,forceClean:n})},n.activateViaAPI=function(t,e){e&&n.setUserSuppliedViewTags(t.id,e),n.activateMultiple([t],e)},n.getViewsAndActivate=function(t){var e=_.getAllViewsForActivationType(t);n.activateMultiple(e)},n.activateMultiple=function(t,e){var a=[];return i.each(t,(function(t){var u=m.getViewState(t.id),c=n.createViewTicket();if(u.isActive)if(t.deactivationEnabled)try{n.hasValidStaticConditions(t,c)||n.deactivate(t)}catch(p){d.error("Page / Error evaluating whether to deactivate page ",n.description(t),p)}else d.log("Not activating Page, already active ",n.description(t));else{try{if(!n.hasValidStaticConditions(t,c))return i.isBoolean(u.isActive)||n.setViewActiveState(t,!1),void d.log("Page / Failed to match page conditions for "+n.description(t),t.staticConditions)}catch(p){return i.isBoolean(u.isActive)||n.setViewActiveState(t,!1),void d.error("Page / Error evaluating whether to activate page ",n.description(t),p)}if(a.push(t),n.setViewActiveState(t,!0),d.log("Activated Page",n.description(t)),o.emitViewActivated({view:t,metadata:e}),g.getSampleRum()){var f=t.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:t.id})}var v=h.getByPageId(t.id);n.toggleEventImplementations(v,!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},n.deactivate=function(t){if(m.getViewState(t.id).isActive){n.setViewActiveState(t,!1),d.log("Deactivated Page",n.description(t)),o.emitPageDeactivated({page:t});var e=h.getByPageId(t.id);n.toggleEventImplementations(e,!1)}else d.log("Not deactivating Page, already inactive ",n.description(t))},n.setViewActiveState=function(t,n){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:t,timestamp:u.now(),isActive:n})},n.setGlobalTags=function(t){l.dispatch(r.SET_GLOBAL_TAGS,t)},n.setParsedViewTags=function(t,n){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:t,metadata:n})},n.setUserSuppliedViewTags=function(t,n){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:t,metadata:n})},n.hasValidStaticConditions=function(t,n){var e={};if(i.isEmpty(t.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",t.staticConditions),d.debug("Matching to current value:",n);var u=a.evaluate(t.staticConditions,(function(t){var i=t.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[t.type]||(e[t.type]=!0)),r.match(n,t)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:t.id}),u},n.description=function(t){return'"'+t.name+'" ('+t.id+")"},n.toggleEventImplementations=function(t,n){i.forEach(t,(function(t){if(t.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,t.eventType);e?n?e.attach(t):e.detach(t):d.warn("No implementation found for event type:",t.eventType,"needed for event:",t)}}))},n.isActivationTypeImmediate=function(t){return t===s.ViewActivationTypes.immediate||!t},n.shouldTriggerImmediately=function(t){return t===s.ViewActivationTypes.DOMChanged||t===s.ViewActivationTypes.URLChanged||t===s.ViewActivationTypes.immediate||!t},n.create=function(t,n){return{id:t,apiName:n,category:"other"}},n.createState=function(t){return{id:t,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},9213:function(t,n,e){Object.defineProperty(n,"ee",{value:!0});var i=e(7237),r=e(4361),o=e(856),a=e(7455),u=e(7274),c=e(4294),s=e(2074),f=e(6553),l=e(1968),d=e(7648),v=e(3499),h=e(4089).DT,p=e(3868),g=e(5033).Promise,m=e(2314),_=e(1968).VisitorStorageKeys,y=e(4750),w=f.get("stores/cookie_options"),b=f.get("stores/global"),E=f.get("stores/layer"),I=f.get("stores/plugins"),A=f.get("stores/rum"),T=f.get("stores/session"),S=f.get("stores/visitor_id"),k=f.get("stores/visitor_bucketing"),R=f.get("stores/visitor"),C=f.get("stores/provider_status");function N(t,n){var e=function(t,e){var i;n.attributionType&&(i=s.now()),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:[{key:t,value:e,metadata:{lastModified:i}}]})};if(n.getter){var a=n.provides;if(i.isArray(a)||(a=[a]),!i.includes(["queryParams","url"],a[0]))if(!(n.isSticky&&!i.isUndefined(v.getFieldValue(t,a)))){var u;try{var c=f.evaluate(n.getter);i.isFunction(c)&&(c=c((function(){return v.getFieldValue(t,a)}),(function(t){e(a,t)}))),i.isUndefined(c)||(n.isAsync?(u=c.then((function(t){e(a,t)}),(function(t){p.warn('Failed to evaluate provider for "'+n.provides+'"; error was:',t)})),r.dispatch(o.SET_VISITOR_ATTRIBUTE_PENDING,{key:a,pending:u})):e(a,c))}catch(l){p.warn('Failed to evaluate getter for provider for "'+n.provides+'"; error was: '+l.message)}return u}}}function D(t){var n=M(t),e=h.getItem(n);return i.isString(e)&&(e=U(e)),e}function O(t){var n;if(t.layerId)n=t;else{var e=t;n={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return n}function x(t,n,e){try{var i=M(t);e||(n=d.stringify(n));try{h.setItem(i,n)}catch(r){throw p.warn("Visitor / Unable to set localStorage key, error was:",r),new Error("Unable to set localStorage")}}catch(r){p.warn("Unable to persist visitor data:",r.message)}}function M(t){var e=S.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=n.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,t].join("$$")}function P(t,e){if(!S.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(L(t)){var a=n.getStorageKeyFromKey(t);if(i.includes(_,a)){var c=M(a);if(!(t.indexOf(c)<=0)&&(e=U(e)))if(a===_.EVENT_QUEUE)r.dispatch(o.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:t,value:u.deserialize(e)});else if(a===_.EVENTS)r.dispatch(o.SET_FOREIGN_VISITOR_EVENTS,{key:t,value:u.deserialize(e)});else if(a===_.LAYER_STATES)r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.map(e,O),merge:!0});else if(a===_.VARIATION_MAP)r.dispatch(o.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(a===_.CONTEXTUAL_MAB)r.dispatch(o.MERGE_CONTEXTUAL_MAB_MAP,{contextualMabMap:e});else if(a===_.VISITOR_PROFILE){var s=e;i.each(["custom"],(function(t){var n=I.getPlugin(l.PluginTypes.visitorProfileProviders,t);if(n){if(s.profile&&s.metadata){var e=function(t,n,e){var r=R.getAttribute(n),o=R.getAttributeMetadata(n),a=t.profile[n],u=t.metadata[n];if(i.isEmpty(r))return{data:a,metadata:u};var c={};return i.forOwn(a,(function(t,n){var r,a;o&&o[n]&&(r=o[n].lastModified),u&&u[n]&&(a=u[n].lastModified),(e===l.AttributionTypes.FIRST_TOUCH&&r>=a||e===l.AttributionTypes.LAST_TOUCH&&a>=r||i.isUndefined(r)&&a)&&(c.data=c.data||{},c.data[n]=t,a&&(c.metadata=c.metadata||{},c.metadata[n]=c.metadata[n]||{},c.metadata[n].lastModified=a))})),c}(s,t,n.attributionType);if(!i.isEmpty(e)){var a=[];i.forOwn(e.data,(function(n,i){var r=e.metadata[i],o={key:[t,i],value:n,metadata:r};a.push(o)})),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:a})}}}else p.debug("Attribute type",t,"not used by any audiences")}))}}}}function L(t){return t.split("$$")[0].indexOf("://")>0}function U(t){try{return d.parse(t)}catch(n){return p.debug("Failed to parse: ",t,n),null}}n.getOrGenerateId=function(){return{randomId:n.getCurrentId()||"oeu"+s.now()+"r"+Math.random()}},n.getCurrentId=function(){var t=S.getVisitorIdLocator();return R.getVisitorIdFromAPI()||(t?function(t){var n,e=t.name;switch(t.type){case l.VisitorIdLocatorType.COOKIE:n=c.get(e);break;case l.VisitorIdLocatorType.JS_VARIABLE:n=y.getGlobalByPath(e);break;case l.VisitorIdLocatorType.LOCALSTORAGE:try{n=y.getGlobal("localStorage").getItem(e)}catch(u){throw new Error("Unable to read localStorage: "+u.toString())}break;case l.VisitorIdLocatorType.QUERY:n=m.getQueryParamValue(e)}try{if(!n)throw p.error("Visitor / Customer provided visitor id cannot be found. Type:",t.type," Name:",e),new Error("Failure to obtain visitor id from "+t.type);if(!i.isString(n)&&!i.isNumber(n))throw p.error("Visitor / Customer provided visitor id is not a string or number. Type:",t.type," Name:",e," Id Type:",(a=n)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a),new Error("Customer provided visitor id is not a string or number")}catch(s){throw A.getSampleRum()&&r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!0}),s}var a;A.getSampleRum()&&(r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!1}),r.dispatch(o.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:t.type,entityId:n}));return String(n)}(t):c.get(l.COOKIES.VISITOR_ID))},n.hasSomeData=function(){return h.keys().length>0},n.setId=function(t){var e,u,s=S.getBucketingId();r.dispatch(o.SET_VISITOR_ID,t),S.getBucketingId()!==s&&(!function(){!function(t,n){0;a.initializeStore(t,n)}(D(_.EVENTS)||[],D(_.EVENT_QUEUE)||[]);var t=(e=_.LAYER_STATES,u=S.getBucketingId(),c=[],s=new RegExp(u+"\\$\\$([^$]+?)\\$\\$"+e),i.each(h.keys(),(function(t){var n=t.match(s);if(n){var e={namespace:n[1],userId:u,item:U(h.getItem(t))};c.push(e)}})),c);var e,u,c,s;i.forEach(t,(function(t){t.item=i.map(t.item,O)})),d=t,v=[],i.each(d,(function(t){i.each(t.item,(function(n){n.namespace=t.namespace,v.push(n)}))})),g=v,r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.filter(g,(function(t){return!!t.decision}))}),p=D(_.SESSION_STATE)||{},p=i.extend({lastSessionTimestamp:0,sessionId:null},p),r.dispatch(o.LOAD_SESSION_STATE,p),function(t){var n,e,a=I.getAllPlugins(l.PluginTypes.visitorProfileProviders),u=i.filter(a,(function(t){return i.isFunction(t.restorer)}));t.profile&&t.metadata?(n=t.profile,e=t.metadata):(n=t,e={});n=i.reduce(n,(function(t,n,e){var r=n,o=i.find(u,{provides:e});return o&&(r=o.restorer(n)),t[e]=r,t}),{}),r.dispatch(o.LOAD_EXISTING_VISITOR_PROFILE,{profile:n,metadata:e})}(D(_.VISITOR_PROFILE)||{});var f=D(_.TRACKER_OPTIMIZELY);f&&(m=f,r.dispatch(o.SET_TRACKER_PERSISTABLE_STATE,m));var d,v;var p;var g;var m;n.loadForeignData(),n.removeLegacySessionStateCookies()}(),n.deleteOldLocalData());try{S.getVisitorIdLocator()||n.maybePersistVisitorId(t)}catch(f){if(p.error("Visitor / Unable to persist visitorId, disabling tracking"),r.dispatch(o.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=f,null!=(u=c.MismatchError)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](e):e instanceof u)throw p.error("Visitor / Cookie not set to correct value:",f),new Error("Cookie mismatch error while persisting visitorId");throw f}n.refreshSession()},n.getVariationIdMap=function(){return D(_.VARIATION_MAP)||{}},n.updateVariationIdMap=function(t,n,e){r.dispatch(o.UPDATE_VARIATION_ID_MAP,{layerId:t,experimentId:n,variationId:e})},n.persistVariationIdMap=function(){var t=k.getVariationIdMapString();x(_.VARIATION_MAP,t,!0)},n.getContextualMabMap=function(){return D(_.CONTEXTUAL_MAB)||{}},n.updateContextualMabMap=function(t,n,e){r.dispatch(o.UPDATE_CONTEXTUAL_MAB_MAP,{layerId:t,experimentId:n,variationData:e})},n.persistContextualMabMap=function(){var t=k.getContextualMabMapString();x(_.CONTEXTUAL_MAB,t,!0)},n.getOdpSegments=function(){return D(_.ODP_SEGMENTS)||{}},n.persistOdpSegments=function(t){x(_.ODP_SEGMENTS,t,!1)},n.getPreferredLayerMap=function(){return D(_.LAYER_MAP)||{}},n.updatePreferredLayerMap=function(t,n){r.dispatch(o.UPDATE_PREFERRED_LAYER_MAP,{groupId:t,layerId:n})},n.persistTrackerOptimizelyData=function(t){x(_.TRACKER_OPTIMIZELY,t)},n.refreshSession=function(){r.dispatch(o.REFRESH_SESSION)},n.populateEagerVisitorData=function(t,e){var r=i.filter(t,(function(t){return!t.isLazy}));return n.populateVisitorData(r,e)},n.populateLazyVisitorData=function(t,e,r){p.debug("Populating lazy visitor. List of all providers",t);var o=i.filter(t,(function(t){return t.isLazy&&r.has(t.provides)}));return p.debug("Filtered list of providers that are lazy and present in audiences",o),n.populateVisitorData(o,e)},n.populateVisitorData=function(t,n){n=n||{};var e=i.partial(N,n),r=i(t).filter({isAsync:!0}).map(e).filter().value();return i.forEach(i.filter(t,(function(t){return!t.isAsync})),e),r.length>0?g.all(r):g.resolve()},n.persistBehaviorEvents=function(t){x(_.EVENTS,t)},n.persistBehaviorEventQueue=function(t){x(_.EVENT_QUEUE,t)},n.getPersistedBehaviorEventCount=function(){var t=D(_.EVENTS)||[],n=D(_.EVENT_QUEUE)||[];return u.deserialize(t).length+u.deserialize(n).length},n.persistLayerStates=function(){var t=E.getLayerStates(n.getNamespace());t=i.map(t,(function(t){return i.omit(t,"namespace")})),x(_.LAYER_STATES,t)},n.persistSessionState=function(){x(_.SESSION_STATE,T.getState())},n.persistVisitorProfile=function(){var t=function(){var t=R.getVisitorProfile(),n=R.getVisitorProfileMetadata(),e=I.getAllPlugins(l.PluginTypes.visitorProfileProviders);if(e){var r=i.reduce(e,(function(t,n){return n.provides&&(t[n.provides]=n),t}),{});t=i.omitBy(t,(function(t,n){var e=r[n];return e&&e.isTransient}))}return{profile:t,metadata:n}}();x(_.VISITOR_PROFILE,t)},n.persistVisitorBucketingStore=function(){var t;n.persistVariationIdMap(),t=k.getPreferredLayerMapString(),x(_.LAYER_MAP,t,!0),n.persistContextualMabMap()},n.getUserIdFromKey=function(t,e){var r;return i.includes(t,e)&&i.includes(t,"_")&&i.includes(t,"$$")&&i.includes(t.slice(t.indexOf("$$")),n.getNamespace())&&(r=t.slice(t.indexOf("_")+1,t.indexOf("$$"))),r},n.maybePersistVisitorId=function(t){t.randomId&&(w.getAutoRefresh()||n.getCurrentId()!==t.randomId?(c.set(l.COOKIES.VISITOR_ID,t.randomId),p.log("Persisting visitorId:",t.randomId)):p.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},n.getAttribute=function(t){return R.getAttribute(t)},n.getPendingAttributeValue=function(t){return C.getPendingAttributeValue(t)},n.isForeignKey=L,n.checkKeyForVisitorId=function(t){var e=S.getBucketingId()||n.getCurrentId(),i=n.getIdFromKey(t);return!i||i===e},n.getIdFromKey=function(t){var e=t.split("$$")[0],r=n.getStorageKeyFromKey(t);if(i.includes(l.StorageKeys,r))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},n.getStorageKeyFromKey=function(t){var n,e=t.split("$$").pop();if(e.indexOf("://")>-1){var r=e.indexOf("_");n=e.substring(r+1)}else n=e;return i.includes(i.values(l.AllStorageKeys),n)?n:null},n.deleteOldLocalData=function(){var t=h.keys();i.each(t,(function(t){n.isForeignKey(t)||n.checkKeyForVisitorId(t)||h.removeItem(t)}))},n.deleteOldForeignData=function(){var t=h.keys();i.each(t,(function(t){n.isForeignKey(t)&&h.removeItem(t)}))},n.loadForeignData=function(){i.each(h.keys(),(function(t){var n=h.getItem(t);n&&P(t,n)}))},n.getNamespace=function(){return b.getNamespace()},n.serializeFieldKey=function(t){return i.isArray(t)?t.join("$$"):t},n.removeLegacySessionStateCookies=function(){var t=c.getAll();i.forEach(i.keys(t),(function(t){0===t.indexOf(l.COOKIES.SESSION_STATE+"$$")&&c.remove(t)}))}},2872:function(t,n,e){var i=e(7237),r=e(1968);n.normalizeClientData=function(t){!t.listTargetingKeys&&t.listTargetingCookies&&(t.listTargetingKeys=i.map(t.listTargetingCookies,(function(t){return{type:r.ListTargetingKeyTypes.COOKIE,key:t}})),delete t.listTargetingCookies)}},2826:function(t,n,e){e(6553).register("env/jquery",e(8874))},8874:function(t,n,e){var i,r=e(4750);try{i=$}catch(a){}var o=r.getGlobal("$");t.exports=i&&i!==o?i:o},1729:function(t,n,e){e(7237),e(1922).C,e(2074);var i=e(6553),r=(e(7323),e(3868));e(4750),e(820),i.get("stores/client_metadata"),i.get("stores/global");n.handleError=function(t,n){n?r.error("Uncaught error:",t,n):r.error("Uncaught error:",t)}},3799:function(t,n,e){var i=e(7237),r=e(856),o=e(3081),a=e(8342),u=e(1922).v,c=e(6458),s=e(5699),f=e(6553).get("stores/directive"),l=e(7323),d=e(9093),v=e(4361),h=e(3868),p=e(2512),g=e(5979),m=e(8047).create(),_=1e3,y=10,w=u("ChangeOverheatError");function b(t,n){if(this.change=t,this.identifier=n.identifier,this.startTime=n.startTime,f.shouldObserveChangesIndefinitely()){v.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(y)?Number.POSITIVE_INFINITY:y;this.rateMeter.addListener(e,i.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),v.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new w("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(t){v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}),u))}}b.prototype.numberOfRootNodes=function(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes.length},b.prototype.getSiblingElements=function(t,n,e){for(var i=t,r=[],o=0;o<n;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},b.prototype.apply=function(){this.applyDeferred=s();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};f.shouldObserveChangesUntilTimeout()?n={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:t}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),n);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},b.prototype.maybeApplyToElement=function(t){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return h.debug("Not applying AppendChange to element",t,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,t,n)(),this.applyDeferred.resolve()},b.prototype.applyOrReapplyToElement=function(t,n){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}t.insertAdjacentHTML(e,this.change.value),t.setAttribute(n,""),c.setData(t,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=t.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=t.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=t.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=t.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(t){var e=t.nodeType===Node.ELEMENT_NODE?t:l.parentElement(t);e.setAttribute(n,"");var r=c.getData(e,this.change.id,this.identifier)||[];r.push(t),c.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(t){t.setAttribute(n,"")}))}),this))},b.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},t.exports=function(t){t.registerChangeApplier(d.changeType.APPEND,b)}},4716:function(t,n,e){var i=e(7237),r=e(9093);n.transformVisibilityAttributesToCSS=function(t){if(!t.attributes)return t;if(t.attributes[r.selectorChangeType.HIDE]||t.attributes[r.selectorChangeType.REMOVE]){var n=i.extend({css:{}},i.cloneDeep(t));return t.attributes[r.selectorChangeType.HIDE]&&(n.css.visibility="hidden",delete n.attributes[r.selectorChangeType.HIDE]),t.attributes[r.selectorChangeType.REMOVE]&&(n.css.display="none",delete n.attributes[r.selectorChangeType.REMOVE]),n}return t},n.createStylesFromChange=function(t,n){if(i.isEmpty(n.css))return n.attributes.style;var e="",r=n.attributes.style||"";return i.each(n.css,(function(t,n){new RegExp(n+"\\s?:").test(r)||(e+=n+":"+t+";")})),i.isUndefined(n.attributes.style)?(t||"")+e:e+r}},1693:function(t,n,e){var i=e(7237),r=(e(5033).Promise,e(856)),o=e(3081),a=e(8342),u=e(1922).v,c=e(6458),s=e(5699),f=e(6553).get("stores/directive"),l=e(7323),d=e(9093),v=e(4361),h=e(3868),p=e(2122),g=e(2512),m=e(5979),_=e(4750),y=e(4716),w=e(8047).create(),b={attributes:!0,childList:!0,subtree:!0,characterData:!0},E=1e3,I=10,A=u("ChangeOverheatError");function T(t,n){if(this.change=i.cloneDeep(t),this.change=y.transformVisibilityAttributesToCSS(this.change),this.identifier=n.identifier,this.startTime=n.startTime,this.disconnectObserverQueue=[],f.shouldObserveChangesIndefinitely()){v.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(E);var e=i.isNull(I)?Number.POSITIVE_INFINITY:I;this.rateMeter.addListener(e,i.bind((function(){h.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),v.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new A("Change "+this.identifier+" has overheated"),{layerId:n.action&&n.action.layerId,experimentId:n.action&&n.action.experimentId,variationId:n.action&&n.action.variationId,changeId:t.id,changeType:t.type,movingWindowMilliseconds:E,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(t){v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:t})}),u))}this.cancelled=!1}T.prototype.apply=function(){this.applyDeferred=s();try{if(i.isEmpty(this.change.attributes)&&i.isEmpty(this.change.css))return h.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var t=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};f.shouldObserveChangesUntilTimeout()?n={timeout:i.partial(m.isTimedOut,this.startTime),onTimeout:t}:f.isEditor()&&w.waitUntil(i.partial(m.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=w.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),n);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},T.prototype.maybeApplyToElement=function(t){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(t.hasAttribute(n))return h.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+t),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=i.bind(this.applyOrReapplyToElement,this,t,n);e(!1);var r=i.bind((function(){var n=i.bind((function(){this.cancelled||p.observe(o,t,b)}),this);return _.setTimeout(n)}),this),o=p.create(i.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),o.disconnect(),e(!0),r()}),this));r(),this.disconnectObserverQueue.push(i.bind(o.disconnect,o)),this.applyDeferred.resolve()},T.prototype.applyOrReapplyToElement=function(t,n,e){void 0===e&&(e=!1);var r={};i.forOwn(this.change.attributes,(function(e,o){switch(o){case d.selectorChangeType.CLASS:i.isUndefined(t.className)||(r[d.selectorChangeType.CLASS]=t.className,t.className=e);break;case d.selectorChangeType.HREF:i.isUndefined(t.href)||(r[d.selectorChangeType.HREF]=t.href,t.href=e);break;case d.selectorChangeType.HTML:i.isUndefined(t.innerHTML)||(r[d.selectorChangeType.HTML]=t.innerHTML,t.innerHTML=e,i.each(l.childrenOf(t),(function(t){t.setAttribute(n,"")})));break;case d.selectorChangeType.SRC:i.isUndefined(t.src)||(r[d.selectorChangeType.SRCSET]=t.src,t.srcset=e);break;case d.selectorChangeType.SRCSET:i.isUndefined(t.srcset)||(r[d.selectorChangeType.SRCSET]=t.srcset,t.srcset=e);break;case d.selectorChangeType.STYLE:break;case d.selectorChangeType.TEXT:i.isUndefined(t.textContent)||(r[d.selectorChangeType.TEXT]=t.textContent,t.textContent=e);break;default:throw new Error("Unrecognized attribute: "+o)}}));var o=y.createStylesFromChange(t.style.cssText,this.change);i.isString(o)&&(r[d.selectorChangeType.STYLE]=t.style.cssText,t.style.cssText=o),t.setAttribute(n,""),e&&c.hasData(t)||c.setData(t,this.change.id,this.identifier,r)},T.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),i.each(this.disconnectObserverQueue,(function(t){try{t()}catch(n){}}))},t.exports=function(t){t.registerChangeApplier(d.changeType.ATTRIBUTE,T)}},1036:function(t,n,e){var i=e(7237),r=e(5699),o=e(9093),a=e(4004);function u(t,n){if(!i.isFunction(t.value))throw new Error("Custom code must be a function");this.change=t}u.prototype.apply=function(){var t=r();try{a.apply(this.change.value),t.resolve()}catch(n){t.reject(n)}return t},t.exports=function(t){t.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},9202:function(t,n,e){var i=e(7237),r=e(8342),o=e(6458),a=e(5699),u=e(6553).get("stores/directive"),c=e(9093),s=e(5033).Promise,f=e(5979),l=e(7323),d=e(8047).create();function v(t,n){this.change=t,this.identifier=n.identifier,this.startTime=n.startTime}v.prototype.apply=function(){this.applyDeferred=a();try{var t=l.querySelector(this.change.selector),n=l.querySelector(this.change.insertSelector);if(t&&n)this.maybeApplyToElement();else{var e=a(),r=a(),o=i.partial(this.applyDeferred.reject,new Error("Unable to find source element")),c=i.partial(this.applyDeferred.reject,new Error("Unable to find destination element")),v={once:!0},h={once:!0};u.shouldObserveChangesUntilTimeout()?(v=i.assign(v,{timeout:i.partial(f.isTimedOut,this.startTime),onTimeout:o}),h=i.assign(h,{timeout:i.partial(f.isTimedOut,this.startTime),onTimeout:c})):u.isEditor()&&(d.waitUntil(i.partial(f.isTimedOut,this.startTime)).then(o,o),d.waitUntil(i.partial(f.isTimedOut,this.startTime)).then(c,c));var p=d.observeSelector(this.change.selector,e.resolve,v),g=d.observeSelector(this.change.insertSelector,r.resolve,h);this.unobserveSelector=function(){p(),g()},s.all([e,r]).then(i.bind(this.maybeApplyToElement,this),this.applyDeferred.reject)}}catch(m){this.applyDeferred.reject(m)}return this.applyDeferred},v.prototype.maybeApplyToElement=function(){var t=l.querySelectorAll(this.change.selector);i.each(t,i.bind((function(t){if(!o.getData(t,this.change.id,this.identifier)){var n={undoElement:t.previousSibling,undoType:c.DOMInsertionType.AFTER};t.parentNode.firstChild===t&&(n.undoElement=t.parentNode,n.undoType=c.DOMInsertionType.PREPEND);var e=t.parentNode.removeChild(t),i=l.querySelector(this.change.insertSelector),a=i.parentNode;switch(n.element=e,this.change.operator){case c.DOMInsertionType.BEFORE:a.insertBefore(e,i);break;case c.DOMInsertionType.AFTER:a.insertBefore(e,i.nextSibling);break;case c.DOMInsertionType.PREPEND:var u=i.firstChild;i.insertBefore(e,u);break;case c.DOMInsertionType.APPEND:i.appendChild(e)}e.setAttribute(r.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,""),o.setData(e,this.change.id,this.identifier,n)}}),this)),this.applyDeferred.resolve()},v.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},t.exports=function(t){t.registerChangeApplier(c.changeType.REARRANGE,v)}},6381:function(t,n,e){var i=e(3371),r=e(6985).b,o={selectExperiment:function(t,n,e){if(t.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=t.experiments[0];if(!i.isValidExperiment(n,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};t.exports=function(t){t.registerDecider("single_experiment",o),t.registerDecider("multivariate",o)}},1496:function(t,n,e){var i=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=e(7237),o=e(3081),a=e(1922).v,u=e(7323),c=e(6795),s=n.Error=a("ClickDelegateError");function f(t){this.handler=t,this.events=[],this.unlistenFn=null,this.clickHandler=r.bind((function(t){r.forEach(this.events,r.bind((function(n){try{var e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector;(function(t,n,e){var a=t.target,u=0;for(;a;){var f;try{f=c(a,n)}catch(d){var l={typeofElementValue:void 0===a?"undefined":i(a),nodeName:r.result(a,["nodeName"],null),nodeType:r.result(a,["nodeType"],null),targetName:r.result(t,["target","nodeName"],null),targetType:r.result(t,["target","nodeType"],null),numParentsTraversed:u,selector:n,errorMessage:d.message,eventId:e.id};return o.emitError(new s("Unable to evaluate match for element"),l),!1}if(f)return!0;a=a.parentElement,u++}return!1})(t,e,n)&&this.handler(n)}catch(a){o.emitError(new s("Unable to handle click for selector"+e+":"+a.message))}}),this))}),this)}f.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},f.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},f.prototype.hasEvents=function(){return this.events.length>0},f.prototype.addEvent=function(t){this.events.push(t)},f.prototype.removeEvent=function(t){this.events=r.filter(this.events,(function(n){return n.apiName!==t.apiName}))},t.exports=f},472:function(t,n,e){var i=e(1203),r=e(1496),o=e(3868),a=e(4396);function u(t){return"apiName: "+t.apiName+", selector: "+t.eventFilter.selector}t.exports=function(t){var n=new r((function(t){a.updateAllViewTags(),i.trackClickEvent(t)?o.log("Tracking click event:",t):o.log("Not tracking click event:",t)}));t.registerEventImplementation("click",{attach:function(t){n.hasEvents()||n.listen(),n.addEvent(t),o.debug("Started listening for click event ("+u(t)+"):",t)},detach:function(t){n.removeEvent(t),n.hasEvents()||n.unlisten(),o.debug("Stopped listening for click event ("+u(t)+"):",t)}})}},2092:function(t,n,e){var i=e(7237),r=e(4732),o=e(3751),a=e(282);function u(t,n){var e=o.buildFromSpecV0_1(n);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],t)}function c(t,n){return i.map(t,(function(t){return i.isFunction(t.toObject)?t.toObject(n):t}))}function s(t,n){if(!t)return["Descriptor not defined"];var e=[];return t.count&&e.push('Unexpected "count" clause specified'),t.pick&&t.pick.modifier&&-1===n.indexOf(t.pick.modifier)&&e.push('Invalid "pick" modifier "'+t.pick.modifier+'"'),i.each(t.filters,(function(t){i.isUndefined(t.modifier)||e.push('Unexpected "filter" modifier "'+t.modifier+'"')})),e.length>0?e:void 0}function f(t,n){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(n))return c(r.getEvents(t),e);if(i.isNumber(n)){if(n<=0)throw new Error("Count must be a positive integer, got "+n);return c(r.getEvents(t).slice(-n),e)}var a=s(n,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return c(u(r.getEvents(t),n),e)}function l(t,n){if(!(n=i.cloneDeep(n)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!n.pick.name)throw new Error('No field name provided in "pick" clause');n.pick.modifier=n.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=s(n,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(t),n)}function d(t,n){var e=o.buildFromSpecV0_2(n),u=r.getEvents(t),s=c(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(n.pick||n.reduce&&"count"===n.reduce.aggregator)&&(s=i.flatten(s)),n.reduce&&(s=s[0]),s}t.exports=["stores/visitor_events",function(t){return{getEvents:i.partial(f,t),getByFrequency:i.partial(l,t),query:i.partial(d,t)}}]},3004:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(2092))}},8270:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9073)),t.registerAudienceMatcher("behavior",e(864))}},864:function(t,n,e){var i=e(7237),r=e(7648),o=e(3751),a=e(282);t.exports={fieldsNeeded:["events"],match:function(t,n){var e,u=r.parse(n.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(n){return a.isSatisfied(n,t.events)}))}}},9073:function(t,n,e){var i=e(4732);t.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},1810:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7137))}},7137:function(t,n,e){var i=e(7237),r=e(1463),o=e(4732),a=e(7648),u=e(3751);t.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(t,n){var e=t.getProjectId(),c=i.filter(i.map(n.getCustomBehavioralAttributes(e),(function(t){try{return{id:t.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(t.rule_json))}}catch(n){return}}))),s=o.getEvents();return r.evaluate(c,s)}]}},489:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(1941)),t.registerAudienceMatcher("first_session",e(948))}},948:function(t){t.exports={fieldsNeeded:["first_session"],match:function(t){return!!t.first_session}}},1941:function(t,n,e){var i=e(6849),r=e(4732),o=e(3499).getFieldValue,a=e(1349).CURRENT_SESSION_INDEX;t.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var t=r.getEvents();if(t&&t.length>0){var n=t[0];return o(n,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},1463:function(t,n,e){var i=e(3868),r={FIELDS:e(6849).FIELDS},o=e(3751),a=e(282);n.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},n.evaluate=function(t,e){var u={};if(0===e.length){for(var c=0;c<t.length;c++)u[t[c].id]=t[c].defaultValue;return u}var s=function(t){if(0===t.length)return[];for(var n=t.length-1,e=r.FIELDS.SESSION_ID,i=t[n][e];n>0&&i===t[n-1][e];)n--;return t.slice(n)}(e),f=function(t,n){if(0===t.length||n<=0)return[];var e=+new Date-n*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=t.length;i>0&&e<=t[i-1][r.FIELDS.TIME];)i--;return t.slice(i)}(e,60);for(c=0;c<t.length;c++){var l=t[c],d=e;l.granularity===n.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===n.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(h){i.error("Behavior / Rule for",l.id,"failed with",h.message||"")}}return u}},4732:function(t,n,e){var i=e(7237),r=e(7274),o=e(6553).get("stores/visitor_events");n.getEvents=function(){var t=r.getEvents(),n=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([t,n,e]);return a.slice(a.length-1e3)}},3751:function(t,n,e){var i=n,r=e(7237),o={FIELDS:e(6849).FIELDS,FIELDS_V0_2:e(6849).FIELDS_V0_2},a=e(7648),u=e(3868),c=e(282);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(t,n){return r.isString(n)&&(n=[n]),n=n||c.DEFAULT_FIELD,[c.generateAlias(t,n)]},i.groupField=function(t){return r.isString(t)&&(t=[t]),[(t=t||c.DEFAULT_FIELD).join(".")]};var s={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(t){return t=(t||"").toString().trim(),s[t]||t}function l(t,n,e){var a={where:n};if(t.count&&(a.limit=t.count),t.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(t.name,e),c=i.aggregate("count"),s=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[c],orderBy:[{field:s,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(t,n,e){return t=f(t),r.isString(n)&&(n=[n]),"exists"===t?{op:t,args:[{field:n}]}:{op:t,args:[{field:n},{value:e}]}},i.relativeTimeComparison=function(t,n){return{op:f(t),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:n*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(t){return r.isArray(t)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[t[0]||+new Date(0),t[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",t),null)},i.groupBy=function(t){for(var n=[],e=0;e<t.length;e++)n[e]={field:t[e]};return n},i.aggregate=function(t,n){return r.isString(n)&&(n=[n]),{op:t,args:[{field:n=n||c.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(t,n){n=n||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(t)?(e=[t],n!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),t)||(e=[o.FIELDS.OPTIONS,t])):e=t,e},i.buildFromSpecV0_1=function(t){if(!(t.action||t.filters&&0!==t.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(t));var n=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],c=[];if(t.action&&(c.push(i.fieldComparison("eq",o.FIELDS.NAME,t.action.value)),t.action.type&&c.push(i.fieldComparison("eq",o.FIELDS.TYPE,t.action.type))),t.time)if("last_days"===t.time.type)c.push(i.relativeTimeComparison("lte",t.time.days));else if("range"===t.time.type){var s=i.rangeTimeComparison([t.time.start,t.time.stop]);s&&c.push(s)}else u.error("Rule builder",'Audience spec has bad "time" type',t.time.type);if(n={op:"and",args:c},t.count&&e.push({where:i.fieldComparison(t.count.comparator,"0",t.count.value),from:{select:[{field:i.aggregateField("count")}],where:n,aggregate:[i.aggregate("count")]}}),t.filters&&r.each(t.filters,(function(r){var a,u,s=i.getFieldKeyPathForSource(r.name,t.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:n,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else c.push(i.fieldComparison(r.comparator,s,r.value))})),t.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(t));return[l(t.pick,n,t.source)]}return e.length>0?e:[{where:n}]},i.buildFromSpecV0_2=function(t){!function(t){var n=[];if(r.isUndefined(t))throw new Error("rule is undefined");if(!r.isObject(t))throw new Error("rule is not an Object");"0.2"!==t.version&&n.push('version: not "0.2"'),t.filter&&(r.isArray(t.filter)?r.each(t.filter,(function(t,e){var r=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.FILTER);r&&n.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(t.comparator,t.value);o&&n.push("filter["+e+"]: "+o)})):n.push("filter: not an array"));var e=[],o=[];t.sort&&(t.reduce&&t.reduce.aggregator&&"nth"!==t.reduce.aggregator&&n.push("sort: superfluous because we can apply aggregator "+a.stringify(t.reduce.aggregator)+" to unsorted items"),r.isArray(t.sort)?r.each(t.sort,(function(t,u){var c=i.validateFieldKeyPathV0_2(t.field,i.FieldPurpose.SORT);c&&n.push("sort["+u+"]: "+c),t.field&&"frequency"===t.field[0]?e.push(t):o.push(t);var s=function(t){var n="direction "+(a.stringify(t)||String(t));if(!r.includes(["ascending","descending"],t))return n+' is not "ascending" or "descending"'}(t.direction);s&&n.push("sort["+u+"]: "+s)})):n.push("sort: not an array"),e.length&&o.length&&n.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!t.pick&&n.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(t.pick){t.reduce&&"count"===t.reduce.aggregator&&n.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(t.pick.field);u&&n.push("pick: "+u)}if(t.reduce){var c=t.reduce.aggregator,s="aggregator "+(a.stringify(c)||String(c)),f=t.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],c)||n.push("reduce: "+s+" is unknown"),r.includes(["sum","avg","max","min"],c)&&(t.pick||n.push("reduce: "+s+" is impossible to use because no values have been picked")),"nth"===c?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&n.push("reduce: "+l+" is not a non-negative integer (mandated by "+s+")"),t.sort||n.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||n.push("reduce: "+l+" is defined (not mandated by "+s+")")}if(n.length)throw new Error(n.join("\n"))}(t);var n={where:{op:"and",args:r.map(t.filter||[],(function(t){return"age"===t.field[0]?i.relativeTimeComparison(t.comparator||"eq",t.value/i.MILLIS_IN_A_DAY):i.fieldComparison(t.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(t.field),t.value)}))}};if(t.reduce&&"count"===t.reduce.aggregator)return r.extend(n,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(t.sort&&(r.each(t.sort,(function(t){r.includes(["ascending","descending"],t.direction)&&(r.includes(["time","age"],t.field[0])&&o.push(t),"frequency"===t.field[0]&&e.push(t))})),o.length&&!e.length&&(n.orderBy=r.filter(r.map(o,(function(t){return"time"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"ASC":"DESC"}:"age"===t.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===t.direction?"DESC":"ASC"}:void 0}))))),t.pick&&t.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(t.pick.field);if(t.reduce&&r.includes(["avg","max","min","sum"],t.reduce.aggregator))return r.extend(n,{aggregate:[{op:t.reduce.aggregator,args:[{field:u}]}],select:[{field:[c.generateAlias(t.reduce.aggregator,u)]}]});n=e.length?r.extend(n,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(n,{select:[{field:u}]})}if(t.reduce&&"nth"===t.reduce.aggregator){var s=t.reduce.n;if(r.isNumber(s)&&s>=0&&Number(s)===Math.floor(Number(s)))return r.extend(n,{offset:s,limit:1})}return n},i.convertFieldKeyPathFromSpecV0_2=function(t){return"tags"===t[0]&&"revenue"===t[1]?["r"]:[o.FIELDS_V0_2[t[0]]].concat(t.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(t,n){var e="field "+(a.stringify(t)||String(t));if(!r.isArray(t)||!r.every(t,r.isString))return e+" is not an array of strings";if("tags"===t[0]&&t.length>2||"tags"!==t[0]&&t.length>1)return e+" includes too many strings";if("tags"===t[0]&&t.length<2)return e+" does not specify an exact tag";if(t.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),c=["age","frequency"];return n===i.FieldPurpose.FILTER&&(u.push("age"),c=["frequency"]),n===i.FieldPurpose.SORT&&(u=["time","age","frequency"],c=["name","type","category","tags"]),r.includes(c,t[0])?e+" is not supported here":r.includes(u,t[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(t,n){var e="comparator "+(a.stringify(t)||String(t)),i="value "+(a.stringify(n)||String(n));if(!r.isString(t)&&!r.isUndefined(t))return e+" is not a string";switch(t){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(n))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(n))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(n)&&2===n.length&&r.isNumber(n[0])&&r.isNumber(n[1])&&n[0]<=n[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(n)||r.isArray(n)&&2===n.length&&r.isString(n[0])&&r.isString(n[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(n))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},282:function(t,n,e){var i=e(7237),r=e(1968),o=e(3868),a=i.bind(o.log,o),u=e(2074),c=e(3499).getFieldValue,s=e(7648),f=function(t,n,e){if(t.getValueOrDefault)return t.getValueOrDefault(n,e);if(!i.isArray(n))return e;var r=c(t,n);return void 0===r&&(r=e),r},l=function(t){return"string"==typeof t?t.trim().toLowerCase():t};n.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},n.DEFAULT_FIELD=["*"],n.booleanOperators={eq:function(t){var n=i.map(t,l);return n[0]==n[1]},is:function(t){return t[0]===t[1]},gt:function(t){return t[0]>t[1]},lt:function(t){return t[0]<t[1]},gte:function(t){return t[0]>=t[1]},lte:function(t){return t[0]<=t[1]},"in":function(t){var n=i.map(t[1]||[],l);return i.includes(n,l(t[0]))},between:function(t){return t[1][0]<=t[0]&&t[0]<=t[1][1]},contains:function(t){var n=i.map(t,(function(t){return"string"==typeof t?t.toLowerCase():t}));return-1!==(n[0]||"").indexOf(n[1])},regex:function(t){try{var n,e;return i.isString(t[1])?(n=t[1],e="i"):(n=t[1][0]||"",e=t[1][1]||""),new RegExp(n,e).test(t[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[n,e].join("/"))),!1}},exists:function(t){return void 0!==t[0]},and:function(t){return i.every(t,(function(t){return t}))},or:function(t){return i.some(t,(function(t){return t}))},not:function(t){return!t[0]}},n.arithmeticOperators={"+":function(t){return(t[0]||0)+(t[1]||0)},"-":function(t){return(t[0]||0)-(t[1]||0)},"/":function(t){return(t[0]||0)/(t[1]||1)},"%":function(t){return(t[0]||0)%(t[1]||1)}},n.aggregateOperators={sum:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(t,e){if(0===e.length)return 0;for(var i=t[0]||n.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(t,e){for(var i=t[0]||n.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(t,n){return n.length}};var d={now:function(){return u.now()}},v=function(t,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(t,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in n.booleanOperators?n.booleanOperators[r]:r in n.arithmeticOperators?n.arithmeticOperators[r]:null;if(a){var u=i.partial(v,t),c=e.args||[];return a(i.map(c,(function(t){return u(t)})),t)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+s.stringify(e))};n.generateAlias=function(t,n){return"_"+t+"_"+n.join(".")};n.rewrite=function(t){var e=[],r={};function a(t,u){if(i.isArray(t)&&("and"!==t[0]&&"or"!==t[0]&&"not"!==t[0]&&o.error("Rules","Unexpected operation "+t[0]+". Continuing optimistically."),t={op:t[0],args:t.slice(1)}),t.hasOwnProperty("field")||t.hasOwnProperty("value")||t.hasOwnProperty("eval"))return t;if(u&&t.op in n.aggregateOperators){var c=(t.args&&t.args[0]||{}).field||n.DEFAULT_FIELD,s=n.generateAlias(t.op,c);return s in r||(e.push({op:t.op,args:t.args}),r[s]=!0),{field:[s]}}for(var f=[],l=t.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:t.op,args:f}}var u={};t.hasOwnProperty(n.clause.WHERE)&&(u[n.clause.WHERE]=a(t[n.clause.WHERE],!1)),t.hasOwnProperty(n.clause.HAVING)&&(u[n.clause.HAVING]=a(t[n.clause.HAVING],!0)),(t.hasOwnProperty(n.clause.AGGREGATE)||e.length>0)&&(u[n.clause.AGGREGATE]=(t[n.clause.AGGREGATE]||[]).concat(e));for(var c=[n.clause.GROUP_BY,n.clause.ORDER_BY,n.clause.SELECT,n.clause.OFFSET,n.clause.LIMIT],s=0;s<c.length;s++)t.hasOwnProperty(c[s])&&(u[c[s]]=t[c[s]]);return t.hasOwnProperty(n.clause.FROM)&&(u[n.clause.FROM]=n.rewrite(t[n.clause.FROM])),u};var h=function(t,e){e=e||0;var r=[];if(t.hasOwnProperty(n.clause.WHERE)?t[n.clause.WHERE].op?t[n.clause.WHERE].op in n.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!t.hasOwnProperty(n.clause.HAVING)||(t[n.clause.HAVING].op?t[n.clause.HAVING].op in n.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),t.hasOwnProperty(n.clause.GROUP_BY)&&!t.hasOwnProperty(n.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),t.hasOwnProperty(n.clause.SELECT)){var o=t[n.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in n.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(t.hasOwnProperty(n.clause.OFFSET)){var u=t[n.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(t.hasOwnProperty(n.clause.LIMIT)){var c=t[n.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(t){return"Sub-rule "+e+": "+t}))),t.hasOwnProperty(n.clause.FROM)&&(r=r.concat(h(t[n.clause.FROM],e+1))),r},p=function(t,e){var r,u,c,l=e;if(t.hasOwnProperty(n.clause.FROM)&&(o.debug("Evaluating FROM clause:",t[n.clause.FROM]),l=p(t[n.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",t[n.clause.WHERE]),l=i.filter(l,(function(e){return v(e,t[n.clause.WHERE])})),o.debug("Results after WHERE:",l),t.hasOwnProperty(n.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",t[n.clause.AGGREGATE]);var d=function(t,n){var e={};if(void 0===t||!i.isArray(t)||0===t.length)return e["*"]={fieldValues:{},events:n},e;for(var r=i.map(t,(function(t){return t.field})),o=0;o<n.length;o++){for(var a=n[o],u=[],c={},l=0;l<r.length;l++){var d=r[l],v=f(a,d),h=d.join(".");c[h]=v,u.push(encodeURIComponent(h)+"="+encodeURIComponent(s.stringify(v)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:c,events:[]}),e[p].events.push(a)}return e}(t[n.clause.GROUP_BY],l);l=function(t,n){var e=[];return i.each(t,(function(t,r){var o=i.extend({},t.fieldValues),a=n[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=t[n.clause.AGGREGATE],u=d,c={},i.each(u,(function(t,e){c[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in n.aggregateOperators){var s=(a.args&&a.args[0]||{}).field||n.DEFAULT_FIELD,f=n.generateAlias(u,s),l=n.aggregateOperators[u]([s],t.events);c[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),c)),o.debug("Results after AGGREGATE:",l)}t.hasOwnProperty(n.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",t[n.clause.HAVING]),l=i.filter(l,(function(e){return v(e,t[n.clause.HAVING])})),o.debug("Results after HAVING:",l)),t.hasOwnProperty(n.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",t[n.clause.ORDER_BY]),l=function(t,n){return i.isArray(t)?0===t.length?n:n.sort((function(n,e){for(var i=0;i<t.length;i++){var r=t[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(n,a,0),c=f(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(a("Rules","groupBy rule must be an array"),n)}(t[n.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var h,g=0;return t.hasOwnProperty(n.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",t[n.clause.OFFSET]),g=Number(t[n.clause.OFFSET])),t.hasOwnProperty(n.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",t[n.clause.LIMIT]),h=g+Number(t[n.clause.LIMIT])),(g>0||!i.isUndefined(h))&&(l=l.slice(g,h),o.debug("Results after OFFSET/LIMIT:",l)),t.hasOwnProperty(n.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",t[n.clause.SELECT]),l=function(t,n){return i.map(n,(function(n){return i.map(t,(function(t){return v(n,t)}))}))}(t[n.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};n.execute=function(t,e){t=n.rewrite(t),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",t,s.stringify(t)),o.debug("Events:",e);var i=h(t);if(i.length>0)throw new Error("Rule "+s.stringify(t)+" has violations: "+i.join("\n"));var a=p(t,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},n.isSatisfied=function(t,e){try{return n.execute(t,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+s.stringify(t)),!1}}},9280:function(t,n,e){t.exports=function(t){t.registerDependency("sources/browser_id",e(7937)),t.registerVisitorProfileProvider(e(8509)),t.registerVisitorProfileProvider(e(1450)),t.registerAudienceMatcher("browser_version",e(3662))}},3662:function(t,n,e){var i=e(6984).G;t.exports={fieldsNeeded:["browserVersion","browserId"],match:function(t,n){var e=n.value,r=t.browserId,o=t.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},8509:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},1450:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},7937:function(t,n,e){var i=e(7562);n.getId=function(){return i.get().browser.id},n.getVersion=function(){return i.get().browser.version}},6787:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6770)),t.registerAudienceMatcher("campaign",e(9685))}},9685:function(t,n,e){var i=e(2061);t.exports={fieldsNeeded:["campaign"],match:function(t,n){return i.hasMatch(n.value,n.match,t.campaign)}}},6770:function(t,n,e){var i=e(6822);t.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},7191:function(t,n,e){var i=e(7237),r=e(7648),o=e(820),a=e(3868),u=e(9213),c=e(8264);n.getCmabPredictionUrl=function(){return"https://prediction.cmab.optimizely.com/predict"},n.getCmabPredictionUrlForExperiment=function(t){return t?n.getCmabPredictionUrl()+"/"+t:""},n.createPayload=function(t,n){var e=i.map(t.variations,"id"),r=c.getVisitorCmabAttributesForExperiment(t),o=c.getDcpCustomerIds(),a=c.getDcpServiceId();return{instances:[{visitorId:u.getCurrentId(),experimentId:t.id,cmabUUID:n,variationIds:e,attributes:r,dcpCustomerIds:o,dcpServiceId:a}]}},n.parseApiResponse=function(t){var n=null;try{n=r.parse(t)}catch(e){return a.error("CMAB API / Error parsing response:",e),null}return n&&n.predictions&&0!==n.predictions.length?n.predictions[0].variation_id.toString():(a.debug("CMAB API / No predictions found in API response",n),null)},n.validateVariationId=function(t,n){return t&&i.find(n.variations,{id:t})?(a.debug("CMAB API / Variation ID:",t,"from API response found in experiment:",n.id),t):(a.debug("CMAB API / Variation ID:",t,"from API response not found in experiment:",n.id),null)},n.handleCmabApiResponse=function(t,e){if(200!==t.status)return a.error("CMAB API / API call failed with status:",t.status,t.statusText),null;a.debug("CMAB API / API call successful:",t.responseText);var i=n.parseApiResponse(t.responseText);return n.validateVariationId(i,e)},n.makeSyncApiCallWithXHR=function(t,e){a.debug("CMAB API / SYNC / Making a synchronous API call to get variation.");try{var i=n.createPayload(t,e),o=n.getCmabPredictionUrlForExperiment(t.id),u=new XMLHttpRequest;return u.open("POST",o,!1),u.send(r.stringify(i)),n.handleCmabApiResponse(u,t)}catch(c){return a.error("CMAB API / SYNC / API call encountered an error:",c),null}},n.makeAsyncApiCall=function(t,e){a.debug("CMAB API / ASYNC / Making an asynchronous API call to get variation.");var i=n.createPayload(t,e),r=n.getCmabPredictionUrlForExperiment(t.id);return o.request({url:r,contentType:"application/json",method:"POST",data:i})}},1303:function(t,n,e){var i=e(3868),r=e(8264),o=e(7191),a=e(4375);n.isCmabEnabled=function(){return!0},n.isExperimentSyncApiEnabled=function(t){return!0},n.defaultToSnippetBucketing=function(t,n,e){i.debug("CMAB / Defaulting to snippet bucketing with variation:",n,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,n,e)},n.processCmabExperiment=function(t,e){if(!n.isCmabEnabled())return i.debug("CMAB / Feature flag is disabled. Defaulting to snippet bucketing with variation:",e,"for experiment:",t.id),e;if(i.debug("CMAB / Feature flag is enabled. Processing CMAB for experiment:",t.id),r.activateTimeoutForNonBucketedCmabExperiments(t),!r.isCmabExperiment(t))return e;var u=r.getCmabVariationDataFromVisitorStore(t);if(!r.isCmabTimeout(t,u))return u.variationId;a.startCmabApiCallPerformanceTimer(t.id);var c=null,s=r.generateCmabUUID();if(n.isExperimentSyncApiEnabled(t))try{return(c=o.makeSyncApiCallWithXHR(t,s))?(r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}catch(f){return i.error("CMAB API / SYNC / API call failed with error:",f),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null}return o.makeAsyncApiCall(t,s).then((function(u){return(c=o.handleCmabApiResponse(u,t))?(i.debug("CMAB API / ASYNC / Variation:",c,"for experiment:",t.id),r.setCmabVariationDataInVisitorStore(t,c,s),a.endCmabApiCallPerformanceTimer(t.id),c):(n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e)}),(function(r){return i.error("CMAB API / ASYNC / API call failed with error:",r),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),null})),n.defaultToSnippetBucketing(t,e,s),a.endCmabApiCallPerformanceTimer(t.id),e},n.getCmabUUIDAndUpdate30MinTimeout=function(t,n){var e=r.getCmabUUIDFromVisitorStore(t,n);return r.updateCmabTimeoutInVisitorStore(t,n),e}},4375:function(t,n,e){e(7794),e(3868);n.startCmabApiCallPerformanceTimer=function(t){0},n.endCmabApiCallPerformanceTimer=function(t){0}},8264:function(t,n,e){var i=e(7237),r=e(5159),o=e(7648),a=e(6553),u=e(1954),c=e(9213),s=e(3868),f=e(1968),l=e(9674),d=a.get("stores/visitor"),v=a.get("stores/plugins"),h=a.get("stores/global");n.generateCmabUUID=function(){return u.generate()},n.getCmabLayerIdFromExperiment=function(t){return t.experimentMetadata&&t.experimentMetadata.layerId||t.id},n.isCmabExperiment=function(t){var n=t.experimentMetadata&&t.experimentMetadata.allocationPolicy;return n?n===f.AllocationPolicyEnum.CMAB:(s.debug("No allocation policy found in metadata for experiment:",t.id),!1)},n.isCmabTimeout=function(t,e){if(!n.isCmabVariationStorageDataValid(e))return s.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var r=e.variationId;return i.find(t.variations,{id:r})?e.isTimeout?(s.debug("CMAB / Timeout flag is set:",e.cmabUUID),!0):n.hasAttributesChanged(t,e)?(s.debug("CMAB / Timeout User attributes have changed"),!0):n.has30MinOr24HrTimeoutOccurred(e)?(s.debug("CMAB / Timeout for 30 minutes or 24 hours:",e.cmabUUID),!0):(s.debug("CMAB / No timeout happened for:",e.cmabUUID),!1):(s.debug("CMAB / Timeout Variation ID:",r,"not found in experiment:",t.id),!0)},n.has30MinOr24HrTimeoutOccurred=function(t){if(!n.isCmabVariationStorageDataValid(t))return s.debug("CMAB / Timeout CMAB Storage Variation Data is invalid"),!0;var e=(new Date).getTime(),i=new Date(t.st30MinTimeout).getTime(),r=new Date(t.st24HrTimeout).getTime();return e-i>18e5||e-r>864e5},n.isCmabVariationStorageDataValid=function(t){if(!t)return!1;for(var n=["variationId","visitorId","cmabUUID","st30MinTimeout","st24HrTimeout","userAttributeHash"],e=0;e<n.length;e++){var i=n[e];if(!t[i])return s.debug("CMAB / Storage data not found: "+i+" is missing"),!1}return!0},n.activateTimeoutForNonBucketedCmabExperiments=function(t){var e=n.getCmabLayerIdFromExperiment(t),r=t.id;s.debug("CMAB / Visitor is bucketed into experiment id:",r+" from layer id:",e);var o=c.getContextualMabMap();if(o&&o[e]){var a=o[e];s.debug("CMAB / All CMAB experiments found for the layer id:",e,"are:",a),s.debug("CMAB / Excluding the currently bucketed experiment id: ",r," from all CMAB experiments found for the current layer id: ",e);var u=i.omit(a,r);u=i.omitBy(u,(function(t){return t.isTimeout})),s.debug("CMAB / Non-bucketed CMAB experiments which will be timed out:",u),i.forEach(u,(function(t,n){t.isTimeout=!0,c.updateContextualMabMap(e,n,t)})),c.persistContextualMabMap()}else s.debug("CMAB / No CMAB experiments found for the current layer id:",e)},n.getCmabUUIDFromVisitorStore=function(t,n){if(!n||!t)return null;var e=c.getContextualMabMap();return e&&e[t]&&e[t][n]?e[t][n].cmabUUID:null},n.updateCmabTimeoutInVisitorStore=function(t,e){var i;if(!e||!t)return null;var r=c.getContextualMabMap();if(null==r||null==(i=r[t])?void 0:i[e]){var o=r[t][e];o.isTimeout||n.has30MinOr24HrTimeoutOccurred(o)||(o.st30MinTimeout=(new Date).toISOString(),c.updateContextualMabMap(t,e,o),c.persistContextualMabMap())}},n.getCmabVariationDataFromVisitorStore=function(t){var e,i=n.getCmabLayerIdFromExperiment(t),r=c.getContextualMabMap();if(!(null==r||null==(e=r[i])?void 0:e[t.id]))return s.debug("CMAB / No CMAB store found for experiment:",t.id),null;s.debug("CMAB / CMAB store found for experiment:",t.id);var o=r[i][t.id];return s.debug("CMAB / Contextual MAB Variation Data:",o),o},n.setCmabVariationDataInVisitorStore=function(t,e,i){s.debug("CMAB / Setting CMAB store for experiment:",t.id+" with variation:",e+" and cmabUUID:",i);var r=(new Date).toISOString(),o=n.getCmabLayerIdFromExperiment(t),a=n.getVisitorAttributesHash(t),u={variationId:e,visitorId:c.getCurrentId(),cmabUUID:i,st30MinTimeout:r,st24HrTimeout:r,userAttributeHash:a,isTimeout:!1};c.updateContextualMabMap(o,t.id,u),c.persistContextualMabMap()},n.getStringifiedValue=function(t){if("string"==typeof t)return t;var n="";try{n=o.stringify(t)}catch(e){s.error("CMAB / Failed to stringify value for attributes:",t,e)}return n},n.getVisitorCmabAttributesForExperiment=function(t){var e,r=[],o=v.getAllPlugins(f.PluginTypes.audienceMatchers);if(!(null==t||null==(e=t.experimentMetadata)?void 0:e.cmabAttributes))return r;var a=t.experimentMetadata.cmabAttributes,u=a.customAttributes,c=a.standardAttributes;return i.forEach(u,(function(t){var e,i=(null==(e=d.getAttribute(["custom",t.id]))?void 0:e.value)||"";i=n.getStringifiedValue(i),r.push({id:t.id,type:t.type,value:i,client_api_name:t.clientApiName})})),i.forEach(c,(function(t){var e,i,a=(null==(e=o[t.id])||null==(i=e.fieldsNeeded)?void 0:i[0])||t.id,u=d.getAttribute(a)||"";u=n.getStringifiedValue(u),r.push({id:t.id,type:t.type,value:u})})),s.debug("CMAB / Current Visitor CMAB Attributes for Experiment:",t.id,"are:",r),r},n.generateAttributesHash=function(t){return r.hashToHex(r.toByteString(o.stringify(t)),r.Seed.BEHAVIOR_EVENT)},n.getVisitorAttributesHash=function(t){var e=n.getVisitorCmabAttributesForExperiment(t);return n.generateAttributesHash(e)},n.hasAttributesChanged=function(t,e){var i=n.getVisitorAttributesHash(t);return i!==e.userAttributeHash&&(s.debug("CMAB / User attributes hash has changed from:",e.userAttributeHash," to ",i),!0)},n.getDcpCustomerIds=function(){var t=h.getDCPKeyfieldLocators(),n=c.getCurrentId();return l.getCurrentAliases(t,n)},n.getDcpServiceId=function(){return h.getDCPServiceId()}},9980:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8974)),t.registerAudienceMatcher("cookies",e(1))}},1:function(t,n,e){var i=e(2061);t.exports={fieldsNeeded:["cookies"],match:function(t,n){var e=n.name,r=n.value,o=n.match,a=t.cookies[e];return i.hasMatch(r,o,a)}}},8974:function(t,n,e){var i=e(7237),r=e(4294),o=e(6553).get("stores/audience_data");t.exports={provides:"cookies",isLazy:!0,getter:[function(){var t=r.getAll(),n=o.getFeaturesNeeded("cookies");return i.reduce(t,(function(t,e,r){return i.has(n,r)&&(t[r]=e),t}),{})}]}},1077:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(2140));var n=e(17);t.registerAudienceMatcher("custom_attribute",n),t.registerAudienceMatcher("custom_dimension",n)}},17:function(t,n,e){var i=e(7237),r=e(2061);n.match=function(t,n){var e;return t.custom&&(e=t.custom[n.name]),i.isObject(e)&&(e=e.value),r.hasMatch(n.value,n.match,e)}},2140:function(t,n,e){var i=e(7237),r=e(1968),o=e(3868),a=e(6553).get("stores/dimension_data");t.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(t){return i.reduce(t,(function(t,n,e){var r=e,u=a.getByApiName(e),c=a.getById(e);return i.isObject(n)?(!n.id&&u&&(c=u,r=u.id,i.extend(n,{id:c.segmentId||c.id})),!n.name&&c&&c.apiName&&(n.name=c.apiName),n.id||c||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),t[r]=n,t):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),t)}),{})},shouldTrack:!0}},9674:function(t,n,e){var i=e(7237),r=e(6822),o=e(4294),a=e(3868),u=e(4750),c="cookie",s="js_variable",f="query_param",l="uid";n.getCurrentAliases=function(t,n){var e={};return i.each(t,(function(t){if(!t.is_optimizely){var d=t.dcp_datasource_id,v=t.type,h=t.name||"";if(d){var p=null;switch(v){case c:p=o.get(h);break;case s:try{p=u.getGlobal(h)}catch(g){a.warn("Failed getting global DCP keyfieldLocator:",h)}break;case f:p=r.getQueryParamValue(h);break;case l:p=n}(i.isNumber(p)||i.isString(p))&&(e[d]=p)}else a.error("DCP / No DCP datasource id specified")}})),e}},5071:function(t,n,e){t.exports=function(t){t.registerDependency("sources/device",e(742)),t.registerVisitorProfileProvider(e(4422)),t.registerAudienceMatcher("device",e(3429))}},3429:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},4422:function(t){t.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(t){return t.getDevice()}]}},742:function(t,n,e){var i=e(7562);n.getDevice=function(){var t=i.get().device;return"unknown"!==t.model?t.model:"tablet"===t.type?"tablet":t.isMobile?"mobile":"desktop"}},1332:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(4734)),t.registerAudienceMatcher("device_type",e(2465))}},2465:function(t){t.exports={fieldsNeeded:["device_type"],match:function(t,n){return t.device_type===n.value}}},4734:function(t,n,e){var i=e(7562);t.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var t=i.get().device;switch(t.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return t.type;default:return"other"}}]}},6558:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6816)),t.registerAudienceMatcher("location",e(8313))}},8313:function(t,n){n.fieldsNeeded=["location"],n.match=function(t,n){if(!t.hasOwnProperty("location"))return!1;var e=t.location,i=n.value.split("|"),r=(i[0]||"").trim(),o=(i[1]||"").trim(),a=(i[2]||"").trim(),u=(i[3]||"").trim(),c=(i.length>4&&i[4]||"").trim();if("GB"===r){o={EN:"ENG",NI:"NIR",SC:"SCT",WA:"WLS"}[o]||o}switch(i.length){case 1:if(e.country===r)return!0;break;case 2:if(e.region===o&&e.country===r)return!0;break;case 3:if(e.city===a&&(e.region===o||""===o)&&e.country===r)return!0;break;case 4:if(e.continent===u)return!0;break;case 5:if(e.dma===c)return!0}return!1}},6816:function(t,n,e){var i=e(8563);t.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}},8354:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(9012)),t.registerAudienceMatcher("referrer",e(833))}},833:function(t,n,e){var i=e(9350);n.fieldsNeeded=["referrer"],n.match=function(t,n){return null!==t.referrer&&i(t.referrer,n)}},9012:function(t,n,e){var i=e(7323),r=e(7464);t.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var t=r.getReferrer()||i.getReferrer();return""===t&&(t=null),t}]}},3313:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6578)),t.registerAudienceMatcher("source_type",e(1631))}},1631:function(t,n,e){var i=e(2061);n.fieldsNeeded=["source_type"],n.match=function(t,n){return i.hasMatch(n.value,n.match,t.source_type)}},6578:function(t,n,e){var i=e(6822),r=e(7323),o=e(7464),a=e(3143),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];t.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(t,n){var e,c=t(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("utm_campaign")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var t=o.getReferrer()||r.getReferrer(),n=0;n<u.length;n++){var e=u[n];if(t.match(e))return"search"}return t&&a.guessDomain(t)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&n(s)}}]}},7011:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6924)),t.registerVisitorProfileProvider(e(3323)),t.registerAudienceMatcher("time_and_day",e(2533))}},2533:function(t,n,e){var i=e(7185);n.fieldsNeeded=["currentTimestamp"],n.match=function(t,n){return i.test(n.value,new Date(t.currentTimestamp))}},6924:function(t,n,e){var i=e(2074);t.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},3323:function(t){t.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},7185:function(t,n,e){var i=e(7237);function r(t){var n=t.split(":");if(2!==n.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+t);return 60*parseInt(n[0],10)+parseInt(n[1],10)}n.test=function(t,n){var e=function(t){var n=t.split("_");if(3!==n.length)throw new Error("Invalid time and day string "+t);var e=n[2].split(",");return{start_time:n[0],end_time:n[1],days:e}}(t),o=r(e.start_time),a=r(e.end_time),u=60*n.getHours()+n.getMinutes(),c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()];return u>=o&&u<=a&&i.includes(e.days,c)}},6111:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(3862))}},3862:function(t){t.exports={provides:"visitorId",getter:["stores/visitor_id",function(t){return t.getRandomId()}]}},5391:function(t,n,e){var i=e(7237),r=e(3081),o=e(1954),a=e(856),u=e(1922).v,c=e(7648),s=e(3868),f=e(7642),l=e(9213),d=e(4750),v=e(820),h=e(6553),p=(e(7323),e(798)),g=e(1591),m=e(4361),_=h.get("stores/global"),y=h.get("stores/tracker_optimizely"),w=e(1303),b=n.Error=u("OptimizelyTrackerError"),E="client_activation",I="campaign_activated",A="view_activated",T={revenue:{validate:M,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:M,sanitize:Math.floor,excludeFeature:!0},value:{validate:M,sanitize:i.identity}},S="AUTO",k=[function(){return function(t){L(function(t){var n=i.extend({entity_id:t.pageId,key:t.pageApiName,timestamp:t.timestamp,uuid:t.eventId,type:A},D(t.eventTags));return n}(t),t.userFeatures,W(t.layerStates))}}],R=[function(){return function(t){!function(t){var n=i.isNull(_.getAnonymizeIP())?void 0:_.getAnonymizeIP(),e={account_id:t.accountId,anonymize_ip:n,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[]};e.revision=t.revision,e.enrich_decisions=!0;var r={session_id:V(t.sessionId),visitor_id:t.visitorId,attributes:[],snapshots:[]},o=W(t.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),$()}(t),L(function(t){return{entity_id:null,type:E,uuid:t.eventId,timestamp:t.timestamp}}(t),t.userFeatures,W(t.layerStates))}}],C=[function(){return function(t){var n;L((n=t,i.extend({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory,properties:O(n.eventProperties)},D(n.eventTags))),t.userFeatures,W(t.layerStates))}}],N=[function(){return function(t){var n;L((n=t,i.extend({entity_id:n.eventEntityId,key:n.eventApiName,timestamp:n.timestamp,uuid:n.eventId,type:n.eventCategory},D(n.eventTags))),t.userFeatures,W(t.layerStates))}}];function D(t){var n=function(t,n,e){try{x(n),t[e]=n}catch(i){r.emitError(new b("Bad value for eventTags["+e+"]: "+i.message))}return t},e=i.keys(T),o=i.omit(t,e),a=i.pick(t,e),u=i.reduce(o,n,{}),c=i.reduce(a,(function(t,e,i){var o=T[i];o.excludeFeature||n(u,e,i);try{o.validate(e),t[i]=o.sanitize(e),u[i]=t[i]}catch(a){r.emitError(new b("Bad value for eventMetrics["+i+"]: "+a.message))}return t}),{});return c.tags=u,c}function O(t){if(i.keys(t).length<=15)return t;var n={},e={},r=0;for(var o in t)r<15?n[o]=t[o]:e[o]=t[o],r++;return s.log("Custom event has more than 15 properties. The following properties were not pushed",e),n}function x(t){if(null==t)throw new Error("Feature value is null");if("object"==typeof t){var n;try{n=c.stringify(t)}catch(e){}throw new Error('Feature value is complex: "'+n)}}function M(t){if(null==t)throw new Error("Metric value is null");if(!i.isNumber(t))throw new Error("Metric value is not numeric")}function P(t){return i.reduce(t,(function(t,n){try{x(n.value),t.push({entity_id:n.id||null,key:n.name,type:n.type,value:n.value})}catch(e){s.warn("Error evaluating user feature",n,e)}return t}),[])}function L(t,n,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:t,decisions:e}),U(n),$()}function U(t){var n=P(t);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:n})}function V(t){return S}function F(){if(y.canSend()){var t=y.hasEventsToSend(),n=y.hasPreviousBatchesToSend();t||n?(n&&(i.each(y.getPreviousBatches(),B),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),t&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),B(y.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):s.debug("Not sending events because there are no events to send")}else s.debug("Not sending events (holding)")}function B(t){s.debug("Sending ticket:",t);var n=o.generate(),e={url:"https://logx.optimizely.com/v1/events",method:"POST",data:z(t)};y.shouldUseBeacon()?v.sendBeacon(e,n):v.retryableRequest(e,n)}function z(t){return i.extend({},i.pick(t,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(t.visitors,j)})}function j(t){return{visitor_id:t.visitor_id,session_id:S,attributes:i.map(t.attributes,G),snapshots:i.map(t.snapshots,q)}}function G(t){return K(t,{entity_id:"e",key:"k",type:"t",value:"v"})}function q(t){var n=t.events;return n=function(t){var n=i.reduce(t,(function(t,n){var e;if(t[e=n.type===A&&i.isEmpty(n.tags)&&i.isEmpty(i.pick(n,i.keys(T)))?n.type:n.uuid]){var r=t[e].timestamp;n.timestamp>r&&(r=n.timestamp),t[e]=i.extend({},t[e],{key:t[e].key+"-"+(n.key||""),entity_id:t[e].entity_id+"-"+n.entity_id,timestamp:r})}else t[e]=n;return t}),{});return i.values(n)}(n),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(t.decisions,H),events:i.map(n,Y)}}function H(t){var n=K(t,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"});return n.m=t.metadata?K(t.metadata,{cmab_uuid:"cmab_uuid"}):{},n}function Y(t){return t.key===I&&(t.type=I,delete t.key),K(t,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",properties:"p",timestamp:"t",uuid:"u",value:"v",type:"y"})}function K(t,n){return i.reduce(t,(function(t,e,i){return i in n&&(t[n[i]||i]=e),t}),{})}function $(){if(y.shouldBatch()){if(!y.isPolling()){d.setTimeout((function t(){F(),y.isPolling()&&d.setTimeout(t,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else F()}function W(t){return i.map(t,(function(t){var n=w.getCmabUUIDAndUpdate30MinTimeout(t.layerId,t.decision.experimentId),e=n?{cmab_uuid:n}:{};return{campaign_id:t.layerId,experiment_id:t.decision.experimentId,variation_id:t.decision.variationId,is_campaign_holdback:t.decision.isLayerHoldback,metadata:e}}))}function X(){var t=y.getPersistableState();if(t)try{s.debug("Persisting pending batch:",t),l.persistTrackerOptimizelyData(t),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(n){s.debug("Failed to persist pending batch:",n)}}var J={trackLayerDecision:function(t){t.isLayerConcluded?s.debug("Layer is already concluded, skipping decision tracking"):t.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(t){var n=P(t.userFeatures),e={account_id:t.accountId,anonymize_ip:t.anonymizeIP,client_name:t.clientName,client_version:t.clientVersion,project_id:t.projectId,visitors:[{session_id:V(t.sessionId),visitor_id:t.visitorId,attributes:n,snapshots:[{decisions:[{campaign_id:t.layerId,experiment_id:t.experimentId,variation_id:t.variationId,is_campaign_holdback:t.isLayerHoldback}],events:[{uuid:t.decisionId,entity_id:t.layerId,timestamp:t.timestamp,type:I}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),$()}(t):function(t){var n={entity_id:t.layerId,type:I,uuid:t.decisionId,timestamp:t.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:n,decisions:W(t.layerStates)}),U(t.userFeatures),$()}(t)},preRedirectPolicy:f.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:k,onClientActivation:R,onClickEvent:N,onCustomEvent:C};t.exports=function(t){t.registerAnalyticsTracker("optimizely",J),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),F()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"maybeSendEvents"},handler:function(){F()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var n=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){y.observe(X),p.off(n)}})}},3240:function(t,n,e){var i=e(4004),r={match:function(t,n){return i.apply(n.value)}};t.exports=function(t){t.registerViewMatcher("custom_code",r)}},4812:function(t,n,e){t.exports=function(t){t.registerViewProvider(e(2800)),t.registerViewMatcher("url",e(7115))}},7115:function(t,n,e){var i=e(9350);t.exports={fieldsNeeded:["url"],match:function(t,n){return i(t.url,n)}}},2800:function(t,n,e){var i=e(6822);t.exports={provides:"url",getter:[function(){return i.getUrl()}]}},4383:function(t,n,e){var i=e(7237),r=e(6553),o=e(798),a=e(1591),u=e(4750),c=r.get("stores/directive"),s="optimizelyPreview",f=function(t){u.getGlobal(s).push(t)};n.initialize=function(t){c.isSlave()&&function(t){var n=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===t&&(n=!0)})),!n)throw new Error("Preview projectId: "+t+" does not match expected")}(t),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},n.setupPreviewGlobal=function(){u.getGlobal(s)||u.setGlobal(s,[])},n.pushToPreviewGlobal=function(t){f(t)}},8930:function(t,n,e){var i=e(7237),r=e(1954),o=e(4472),a=e(7455),u=e(2074),c=e(7323),s=e(4361),f=e(4089).DT,l=e(3868),d=e(433),v=e(5033).Promise,h=e(9213),p=e(4750),g=e(820),m=e(856),_=e(1968),y=e(6553),w=y.get("stores/async_request"),b=y.get("stores/client_metadata"),E=y.get("stores/global"),I=y.get("stores/rum"),A=y.get("stores/performance"),T=(y.get("stores/xdomain"),y.get("stores/view_data")),S=(e(137),"https://rum.optimizely.com/rum"),k="1.0";function R(t){return i.isEmpty(t)?v.resolve():(n=function(){return g.request({url:S,method:"POST",data:t,withCredentials:!0}).then((function(t){return o.resolveRequest("RUM_FIRST_BEACON",t),t}))["catch"]((function(t){throw l.error("POST to client-rum failed:",t),o.rejectRequest("RUM_FIRST_BEACON",t),t}))},(e=w.getPromise("RUM_FIRST_BEACON"))?e.then(n):o.makeAsyncRequest("RUM_FIRST_BEACON",n));var n,e}function C(){try{return!c.querySelector("body")}catch(t){return null}}function N(){var t=p.getGlobal("performance"),n=t?t.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=I.getFeaturesNeededData(),u=c.parseUri(I.getScriptSrc()),s=I.getRumData()||{},l=s.extras||{};i.assign(l,{apiCalls:r,DOMObservationData:o,paintTimings:O(),activeExperimentIds:null,numPages:T.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:D(),experimental:E.getExperimental(),featuresNeeded:a,beacon:{cjsOnload:!0}});var v=p.getGlobal("Prototype");v&&!i.isUndefined(v.Version)&&(l.prototypeJS=v.Version);var g={id:I.getRumId(),v:k,project:E.getSnippetId()||E.getProjectId(),navigationTimings:n,userTimings:e,xd:!1,apis:i.keys(r),extras:l,sampleRate:s.sampleRate};(function(){var t=f.keys(),n=i.filter(i.map(t,(function(t){var n=h.getStorageKeyFromKey(t);return n?{key:t,isForeign:h.isForeignKey(t),category:n,size:t.length+f.getItem(t).length}:null}))),e=i.reduce(n,(function(t,n){var e=n.key,i=h.getIdFromKey(e);return i?((n.isForeign?t.foreign:t.local)[i]=!0,t):t}),{local:{},foreign:{}}),r=i.chain(n).filter({isForeign:!0}).reduce((function(t,n){return t[n.key.split("_")[0]]=!0,t}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(n,(function(t){var n=t.isForeign?"foreign":"local";o[n]+=t.size,a[n][t.category]||(a[n][t.category]=0),a[n][t.category]+=t.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(t){return i.assign(u,{storageEstimate:t})}))})().then((function(t){R(i.assign(g,{lsMetrics:t}))}))}function D(){var t=p.getGlobal("navigator");if(t&&t.connection)return i.pick(t.connection,["downlink","rtt","effectiveType"])}function O(){var t=p.getGlobal("performance");if(t)try{var n=t.getEntriesByType("paint");if(i.isEmpty(n))return;return i.reduce(n,(function(t,n){return t[n.name]=Math.round(n.startTime),t}),{})}catch(e){return}}n.initialize=function(){var t,n=r.generate().replace(/-/g,"");t=Math.random()<.01;var e=function(){var t=c.getCurrentScript();if(t)return t.src}();s.dispatch(m.SET_RUM_DATA,{id:n,RumHost:S,inRumSample:t,src:e,data:{id:n,sync:C(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:c.getReadyState()}}})},n.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var t=I.getRumData().timebase;s.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(t||0)}})}))}catch(t){return}}(),c.isLoaded()?p.setTimeout(N,10):p.addEventListener("load",N),new v((function(t,n){p.setTimeout((function(){(function(){!function(){var t={id:I.getRumId(),v:k,account:E.getAccountId(),project:E.getSnippetId()||E.getProjectId(),snippet:E.getSnippetId(),revision:E.getRevision(),clientVersion:b.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},n=h.getPersistedBehaviorEventCount(),e=a.getEventCount();t.numBehaviorEvents=e;var r=e-n;i.extend(t.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(t,function(){var t=p.getGlobal("performance");if(!t)return;var n,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=t.getEntriesByName(e);r.length>0&&(n=r[0])}if(!n){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=t.getEntriesByType("resource");n=i.find(a,(function(t){return o.test(t.name)}))}if(n)return i.mapValues(_.ResourceTimingAttributes,(function(t,e){var i=n[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),s.dispatch(m.SET_RUM_DATA,{data:t})}();var t=I.getRumData(),n=A.getMarks()||{};return t.extras=t.extras||{},t.extras.beacon={cjsTimeout:!0},t.userTimings=n,R(t=i.pickBy(t,(function(t){return!i.isUndefined(t)})))})().then(t,n)}),10)}))["catch"]((function(t){l.warn("RUM / Error sending data:",t)}))):v.resolve()}},2623:function(t,n,e){function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"ee",{value:!0}),n.StickyProcesor=void 0;var o=e(7237),a=e(137),u=e(9035),c=e(1203),s=e(8138),f=e(4396),l=e(4361),d=e(798),v=e(1591),h=e(856),p=e(5033).Promise,g=e(2626),m=e(3868),_=e(4294),y=e(7648),w=e(1644),b=e(9213),E=e(6553),I=E.get("stores/action_data"),A=E.get("stores/directive"),T=E.get("stores/view"),S=E.get("stores/view_data"),k=E.get("stores/global"),R=E.get("stores/visitor_id"),C=E.get("stores/layer_data"),N=E.get("stores/event_data"),D=E.get("stores/visitor_bucketing");function O(t){var n;(null==(n=t.metadata)?void 0:n.visitorData)&&(t.metadata.visitorData.id&&(m.log("API / Setting visitor Id from edge:",t.metadata.visitorData.id),b.setId({randomId:t.metadata.visitorData.id})),function(){var t=U(),n=t.getValue(x.VARIATION_MAP);n&&l.dispatch(h.MERGE_VARIATION_ID_MAP,{variationIdMap:n});var e=t.getValue(x.VISITOR_PROFILE);e&&l.dispatch(h.LOAD_EXISTING_VISITOR_PROFILE,{profile:e.profile||{},metadata:e.metadata||{}})}())}var x={VISITOR_PROFILE:"VPROF",VARIATION_MAP:"VMAP"},M={parse:function(t){if(t.includes("{"))return y.parse(t);for(var n={},e=t.split("_"),i=0;i<e.length;i+=3){var r=e[i],o=e[i+1],a=e[i+2];n[r]||(n[r]={}),n[r][o]||(n[r][o]={}),n[r][o]=a}return n},stringify:function(t){var n=[];for(var e in t)if(t.hasOwnProperty(e))for(var i in t[e])t[e].hasOwnProperty(i)&&(n.push(e),n.push(i),n.push(t[e][i]));return n.join("_")}},P={parse:function(t){if(t.startsWith("{"))return y.parse(t);for(var n={profile:{},metadata:{}},e=t.split("~~"),i=0;i<e.length;i+=3){var r=e[i],o=e[i+1],a=e[i+2];o.startsWith("-*")?n.profile[r]=y.parse(o.substring(2)):n.profile[r]=o,a.startsWith("-*")?n.metadata[r]=y.parse(a.substring(2)):n.metadata[r]=a}return n},stringify:function(t){var n=[];for(var e in t.profile)if(t.profile.hasOwnProperty(e)){var i=t.profile[e],r=t.metadata[e];"object"==typeof i&&(i="-*"+y.stringify(i)),"object"==typeof r&&(r="-*"+y.stringify(r)),n.push(e),n.push(i),n.push(r)}return n.join("~~")}},L=function(){function t(t,n,e){var i;this.transformers=((i={})[x.VARIATION_MAP]=M,i[x.VISITOR_PROFILE]=P,i),this.visitorId=t,this.namespace=n,this.cookies=e||{}}var n=t.prototype;return n.getKey=function(n){return["OPTY",this.visitorId,this.namespace,n].join(t.SEPARATOR)},n.getStringValue=function(t){return this.cookies[t]||"{}"},n.getValue=function(t){var n=this.getKey(t),e=this.getStringValue(n),i=this.transformers[t]||y;return e?i.parse(e):null},n.setValue=function(t,n){var e=this.getKey(t),i=this.transformers[t]||y;_.set(e,i.stringify(n))},t}();function U(){return new L(R.getRandomId(),k.getNamespace(),_.getAll())}n.StickyProcesor=L,L.SEPARATOR="$$",t.exports={STICKY_STORAGE_KEY:x,processWebSdk:function(t){var n=d.on({filter:{type:v.TYPES.LIFECYCLE,name:"initialized"},handler:function(){!function(t){var n,e;if(t.logs||(null==(n=t.metadata)?void 0:n.logs)){var i=t.logs||(null==(e=t.metadata)?void 0:e.logs);m.groupCollapsed("Logs from Edge"),(i||[]).forEach((function(t){switch(t.level){case 1:var n;(n=m).debug.apply(n,["[EDGE] "+t.message].concat(r(t.rest)));break;case 2:var e;(e=m).log.apply(e,["[EDGE] "+t.message].concat(r(t.rest)));break;case 3:var i;(i=m).warn.apply(i,["[EDGE] "+t.message].concat(r(t.rest)));break;case 4:var o;(o=m).error.apply(o,["[EDGE] "+t.message].concat(r(t.rest)))}})),m.groupEnd()}}(t),O(t),function(t){var n,e,i=[];((null==(n=t.result)?void 0:n.activeViewsIds)||[]).forEach((function(t){i.push({id:t,isActive:!0})})),((null==(e=t.result)?void 0:e.inactiveViewsIds)||[]).forEach((function(t){i.push({id:t,isActive:!1})})),f.registerViews(i)}(t),function(t){(t.result.activeViewsIds||[]).forEach((function(t){var n=N.getByPageId(t);f.toggleEventImplementations(n,!0)}))}(t),a.push({type:"clientMetadata",clientName:"ed-js"}),function(t){if(0!==(t.queue.unappliedChangesetsIds||[]).length){var n=t.queue.unappliedChangesetsIds,e=[];t.result.decisions.map((function(t){for(var i=["layerId:"+t.layerId,t.experimentId+":"+t.variationId+":"+t.viewId],r=0;r<i.length;r++){var a=i[r],u=I.get(a);u&&0!==((null==u?void 0:u.changeSet)||[]).length&&(u.changeSet=u.changeSet.filter((function(t){var e=o.isObject(t)?t.id:t;return n.includes(e)})),e=e.concat(u))}})),o.forEach(e,u.prepareAction),p.all(o.map(e,(function(t){return u.executePreparedAction(t).then(o.partial(g.emitActionAppliedEvent,t))}))).then((function(){m.log("All pending page actions for applied:",e)}))["catch"]((function(t){m.warn("Error evaluating pending page actions for decision because:",t)}))}}(t);var e=d.on({filter:{type:v.TYPES.LIFECYCLE,name:"activate"},handler:function(){!function(t){var n=A.getForceVariationIds(),e=A.getForceAudienceIds();p.all[(t.queue.undecidedLayerIds||[]).map((function(t){var i=C.get(t),r=T.getActiveViewStates().map((function(t){return t.id})).filter((function(t){return i.viewIds.includes(t)}));return w.decideAndExecuteLayerASAP(n,e,r,i)}))]}(t),function(t){var n,e;((null==(n=t.result)?void 0:n.activeViewsIds)||[]).forEach((function(t){a.push({type:"event",eventType:"pageview",eventData:{id:t,apiName:S.idToApiName(t)}})}));var i=D.getVariationIdMap(),r=k.getActivationId(),o=R.getBucketingId();((null==(e=t.result)?void 0:e.decisions)||[]).forEach((function(t){t.isLayerHoldback=t.isLayerHoldback||!1,t.isLayerConcluded=t.isLayerConcluded||!1;var n={activationId:r,bucketingId:o,audienceIds:[],globalHoldback:t.isGlobalHoldback,preferredVariationMap:i[t.layerId]||{}},e=C.get(t.layerId);s.recordLayerDecision(e.id,n,t),c.trackDecisionEvent(t,n,e),g.emitLayerDecided({layer:e,decisionTicket:n,decision:t})}))}(t),d.off(e)}});d.off(n)}})},getCurrentStickyEdgeData:function(t){return U().getValue(t)},setCurrentStickyEdgeData:function(t,n){U().setValue(t,n)}}},6422:function(){}},__webpack_module_cache__={};function __webpack_require__(t){var n=__webpack_module_cache__[t];if(n!==undefined)return n.exports;var e=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t};var __webpack_exports__={};function main(){var t=function(t){var n=[__webpack_require__(6111)];n.push(__webpack_require__(8270)),n.push(__webpack_require__(1810)),n.push(__webpack_require__(489)),n.push(__webpack_require__(3004)),n.push(__webpack_require__(9280)),n.push(__webpack_require__(6787)),n.push(__webpack_require__(9980)),n.push(__webpack_require__(1077)),n.push(__webpack_require__(5071)),n.push(__webpack_require__(1332)),n.push(__webpack_require__(6558)),n.push(__webpack_require__(8354)),n.push(__webpack_require__(3313)),n.push(__webpack_require__(7011)),n.push(__webpack_require__(5391)),n.push(__webpack_require__(4812)),n.push(__webpack_require__(3240)),n.push(__webpack_require__(472)),n.push(__webpack_require__(3799)),n.push(__webpack_require__(1693)),n.push(__webpack_require__(1036)),n.push(__webpack_require__(9202)),n.push(__webpack_require__(6381)),l.initializePlugins(n)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(8930).initialize();var n=__webpack_require__(7794);n.time("gtagReady");var e=__webpack_require__(3868),i=__webpack_require__(6553);__webpack_require__(2826);var r=i.get("stores/directive");if(!__webpack_require__(820).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(4294),u=__webpack_require__(1205),c=__webpack_require__(5046),s=__webpack_require__(6563),f={"accountId": "148927072", "namespace": "17796810052", "revision": "20268", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": false}, "projectId": "17796810052", "layers": [{"changes": null, "id": "4608369323933696", "name": null, "commitId": "6188621456211968", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "5010347677974528"], "audienceName": null, "changes": null, "id": "6310244192616448", "integrationSettings": null, "variations": [{"id": "4902869309063168", "name": null, "actions": [{"viewId": "6458308895178752", "changes": [{"id": "1a936a934cee4756af63274cd2552262", "type": "custom_code", "value": function($){var eventExpName = "cyberPilotPromo_"; 
function pushTrackingEvent(customEventName, eventProperties = {}) {
        window.optimizelyEdge = window.optimizelyEdge || [];
        window.optimizelyEdge.push({
            type: "event",                           // required — denotes a custom event
            eventName: eventExpName + customEventName,  // e.g. "genai_Search_searchCompleted"
            properties: eventProperties                      // any JSON-serializable metadata you want to attach
        });
    }


jQuery(function ($) {
  window.$(document).ready(function () {
    console.log(`Cyber Pilot Promo Control - Document READY`);
    pushTrackingEvent("varStart", {variation: "control"});
    
    // Configuration Settings   
    var config = {
      experimentName: "cyberPilotPromo",
      variation: "ab_ss_reeng_plt_ctrl",
      offerCode: "ab_ss_reeng_plt_ctrl",
      utm: {
        source: "searchsecurity",
        medium: "web",
        campaign: "ab_ss_reeng_plt_ctrl"
      },
      asrc: "ab_ss_reeng_plt_ctrl",
    };

addQueryParam('Offer', 'ab_ss_reeng_plt_ctrl');
    
    const currentUrl = window.location.href;
    if (currentUrl.includes('/definition/')) {
      pushTrackingEvent('definitionDisplayed', {type: config.experimentName, page: 'definition', url: currentUrl});
    } else if (/(\/feature\/|\/news\/|\/tip\/|\/answer\/|\/opinion\/)/.test(currentUrl)) {
      pushTrackingEvent('EOCDisplayed', {type: config.experimentName,page: 'EOC', url: currentUrl});      
    }
function addQueryParam(key, value) {
        // Select all <a> within #content-body, excluding those inside .o-cyber-pilot-splash
        const links = document.querySelectorAll('#content-body a');
        
        links.forEach(link => {
          if (link.closest('.o-cyber-pilot-splash')) return;
          
          const href = link.getAttribute('href');
          if (!href) return;
      
          const urlObj = new URL(href, window.location.origin);
      
          if (urlObj.searchParams.has(key)) return;
      
          urlObj.searchParams.set(key, value);
      
          link.setAttribute('href', urlObj.toString());
        });
      } 

/*function addQueryParam(key, value) {
  // Get the current URL
  var currentUrl = window.location.href;
  var url = new URL(currentUrl);
 
  // Add or update the query parameter
  url.searchParams.set(key, value);
 
  // Update the URL without reloading the page
  history.pushState({}, '', url.toString());
}*/
  });
                           });
}, "dependencies": []}]}]}, {"id": "5547384449531904", "name": null, "actions": [{"viewId": "6458308895178752", "changes": [{"id": "8d79d2c73ecd4f1980c996451a0158fa", "type": "custom_code", "value": function($){console.log("Cyber Pilot Promo - Start variation");
console.log("Cyber Pilot Promo - topic: " + window.topicName);

var eventExpName = "cyberPilotPromo_";
function pushTrackingEvent(customEventName, eventProperties = {}) {
  // pull out the two “send” flags so they don't end up in the payload
  var sendToGA      = eventProperties.sendToGA;
  var sendToOptEdge = eventProperties.sendToOptEdge;
  // make a clean copy of the rest
  var props = {};
  Object.keys(eventProperties).forEach(function(key) {
    if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
      props[key] = eventProperties[key];
    }
  });

  //  Optimizely Edge 
  if (sendToOptEdge !== false) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type:       'event',
      eventName:  eventExpName + customEventName,
      properties: props
    });
  }

  //  Google Analytics 4 
  if (sendToGA === false) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  var ga4Payload = {
    event:  'optly_generic',
    type:   eventExpName,
    value1: customEventName
  };

  // allow overriding the "type" field
  if (props.hasOwnProperty('type')) {
    ga4Payload.type = props.type;
  }

  // pull out up to two more values
  var otherKeys = Object.keys(props).filter(function(k) { return k !== 'type'; });
  if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
  if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

  window.dataLayer.push(ga4Payload);
}

  

var topicName;
TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
  topicName = ctx.topicName || ''; 
});

// Cyber Pilot Promo - variation Start - 05/22/2025
jQuery(function ($) {
  $(document).ready(function () {
    console.log(`Cyber Pilot Promo - Document READY`);
    pushTrackingEvent("varStart", {variation: "1", sendToGA: false});

    // Configuration Settings   
    var config = {
      experimentName: "cyberPilotPromo",
      variation: "ab_ss_reeng_plt_var1",
      offerCode: "ab_ss_reeng_plt_var1Pro",
      utm: {
        source: "searchsecurity",
        medium: "web",
        campaign: "ab_ss_reeng_plt_var1"
      },
      asrc: "ab_ss_reeng_plt_var1Pro",
      numSplashes: 1,
      slotOverrides: {
        1:4
        // e.g. 1: 3 - “slot 1 always appears at paragraph 3”
      }
    };
    addQueryParam('Offer', 'ab_ss_reeng_plt_var1');
    var ga4_slot = '';
    var skipTopP = 3; // The number of paragraphs at the top of the page that should be skipped when inserting these splashes
    var fallbackOveride = true; //wave 2 logic to default to fallbacks
    var fallbackTopic = "Fallback";



    // Pull wordCount from dataLayer
    const dl = window.dataLayer || [];
    const pageInfo = dl.find(o => typeof o.wordCount === 'number') || {};
    const wordCount = pageInfo.wordCount || 0;
    if (wordCount < 500) {
      config.numSplashes = 1;
    }

    //  SPLASH RESOURCES 

    const page2Resource = {
      urls: [{
        url: "",
        ids: [
          { id: "id13", displayType: "Tall" },
          { id: "id1",  displayType: "Tall" },
          { id: "id2",  displayType: "Tall" },
        ]
      }]
    };

    // topic lookup data
    const topicsData = {
      "topics": [
        { "primaryTopic": "Analytics and Automation",       "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Application and platform security", "distilledTopic": "Application and platform security" },
        { "primaryTopic": "Cloud security",                  "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Compliance",                      "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Data security and privacy",        "distilledTopic": "Data security and privacy" },
        { "primaryTopic": "IAM",                              "distilledTopic": "Threat detection and response" },
        { "primaryTopic": "Network security",                 "distilledTopic": "Threat detection and response" },
        { "primaryTopic": "Operations & Management",          "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Risk management",                  "distilledTopic": "Threats and vulnerabilities" },
        { "primaryTopic": "Fallback",                          "distilledTopic": "Fallback" },
        { "primaryTopic": "Fallback2",                          "distilledTopic": "Fallback2" }
      ]
    };

    // All of the content for the splashes being inserted
    const resourceMetadata = {
      "Fallback": [
        {
          "title": "AI-powered attacks: What CISOs need to know now",
          "summary": "Threat actors are already targeting your organization with hyper-personalized deception at massive scale. CISOs who don't adapt immediately risk catastrophic breaches.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/feature/AI-powered-attacks-What-CISOSs-need-to-know-now",
          "btnText":  "Read Now",
          "topic":    "Threats and vulnerabilities",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Fallback2": [
        {
          "title": "Why identity is the new perimeter – and how to defend it",
          "summary": "Hackers aren't breaching your walls—they're walking through your front door with stolen credentials. Learn the critical identity protection strategies most companies are dangerously overlooking.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/feature/identity-new-perimeter-enterprise-security",
          "btnText":  "Read Now",
          "topic":    "Identity and Access Management",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Application and platform security": [
        {
          "title": "10 leading open source application security testing tools",
          "summary": "Security testing enables companies to discover and remediate vulnerabilities and weaknesses in apps before malicious actors find them. This article reviews the top 10 tools chosen on firsthand experience -- including their Pros and Cons.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Leading-open-source-application-security-testing-tools",
          "btnText":  "Learn More",
          "topic":    "Application and platform security",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top 15 email security best practices",
          "summary": "Attackers exploit email every day to break into corporate networks, but the risk can be reduced by adhering to these 15 email security best practices.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/2019s-top-email-security-best-practices-for-employees",
          "btnText":  "See the Best Practices Now",
          "topic":    "Application and platform security",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Will AI replace cybersecurity jobs?",
          "summary": "Although AI can enhance cybersecurity practices like threat detection and vulnerability management, the technology's limitations ensure a continued need for human security pros.",
          "btnUrl":   "https://www.techtarget.com/searchenterpriseai/feature/Will-AI-replace-cybersecurity-jobs",
          "btnText":  "Read On",
          "topic":    "Application and platform security",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Careers and certifications": [
        {
          "title": "Automated Pen Testing 101",
          "summary": "Automated penetration testing, which speeds up the process for companies and vendors, is maturing. Is it ready to close the time gap between vulnerability discovery and mitigation?",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Introduction-to-automated-penetration-testing",
          "btnText":  "Read On",
          "topic":    "Careers and certifications",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[2025 Career Focus] 10 cybersecurity certifications career boosters",
          "summary": "A consensus of industry professionals rank these 10 security certifications as the most coveted by employers and security pros -- plus links to 10 vendor security certifications.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/10-cybersecurity-certifications-to-boost-your-career-in-2021",
          "btnText":  "Learn More",
          "topic":    "Careers and certifications",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[2025 Career Focus] Top 12 online cybersecurity courses (Free and Paid)",
          "summary": "Our panel of experts picked the best free and paid online cybersecurity courses for professionals looking to advance their careers and for newbies breaking into the field.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-10-cybersecurity-online-courses",
          "btnText":  "Read More",
          "topic":    "Careers and certifications",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[2025 Career Focus] 10 must-have cybersecurity skills for career success",
          "summary": "Looking to advance your cybersecurity career? Here are the skills you need to win a CISO job, land a threat hunter gig and snag other security positions in high demand.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/10-must-have-cybersecurity-skills-for-career-success",
          "btnText":  "Learn More",
          "topic":    "Careers and certifications",
          "id":       "id4",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "2025's 10 best cloud security certifications for IT pros",
          "summary": "Certifications can help security pros prove their baseline knowledge of infosec topics. Consider adding these top cloud security certifications to your arsenal.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/The-best-cloud-security-certifications-for-IT-professionals",
          "btnText":  "See The List",
          "topic":    "Careers and certifications",
          "id":       "id5",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top AI security certifications to consider",
          "summary": "AI security certifications, much like AI itself, are evolving. Does it make sense to go through the time and money to obtain a credential, given how quickly the field is changing?",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-AI-security-certifications-to-consider",
          "btnText":  "Read On",
          "topic":    "Careers and certifications",
          "id":       "id6",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "6 cybersecurity soft skills to elevate your career",
          "summary": "Cybersecurity professionals have the technical skills to protect their corporate networks, but they also need to master certain soft skills if they truly want to be effective.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Cybersecurity-soft-skills-to-elevate-your-career",
          "btnText":  "See the Skills",
          "topic":    "Careers and certifications",
          "id":       "id7",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Data security and privacy": [
        {
          "title": "How to prevent a data breach: 11 best practices and tactics",
          "summary": "When it comes to data breach prevention, the stakes are high. While it's impossible to eliminate the risk, organizations can minimize it by following these best practices.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-to-prevent-a-data-breach-10-best-practices-and-tactics",
          "btnText":  "See the Best Practices Now",
          "topic":    "Data security and privacy",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top 7 data loss prevention tools for 2025",
          "summary": "Data loss prevention software is a necessity for most companies. Our guide gives you a quick overview of seven top DLP providers and tells you what works -- and what doesn't.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-7-data-loss-prevention-tools",
          "btnText":  "Read More",
          "topic":    "Data security and privacy",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "3 key generative AI data privacy and security concerns",
          "summary": "Those charged with protecting and ensuring the privacy of user data are facing new challenges in the age of generative AI.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Key-generative-AI-data-privacy-and-security-concerns",
          "btnText":  "Learn More",
          "topic":    "Data security and privacy",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Threat detection and response": [
        {
          "title": "[How to] Building an effective purple team playbook",
          "summary": "Enterprises across a wide variety of vertical industries can benefit from purple team exercises that harness red and blue teams toward a common goal: reducing vulnerabilities.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-to-build-an-effective-purple-team-playbook",
          "btnText":  "Learn More",
          "topic":    "Threat detection and response",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "How AI is reshaping threat intelligence",
          "summary": "As promising as AI technology is for threat intelligence, organizations grapple with a long learning curve and other challenges that could impede successful adoption.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-AI-is-reshaping-threat-intelligence",
          "btnText":  "Find Out More",
          "topic":    "Threat detection and response",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "DDoS mitigation: How to stop DDoS attacks",
          "summary": "A DDoS attack can wreak havoc on an organization, but a number of strategies can help stop such attacks and minimize their damage.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/DDoS-mitigation-How-to-stop-DDoS-attacks",
          "btnText":  "Learn More",
          "topic":    "Threat detection and response",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Threats and vulnerabilities": [
        {
          "title": "15 of the biggest ransomware attacks in history",
          "summary": "From attacks on private organizations and manufacturers to healthcare organizations and even entire countries, ransomware has done extensive damage in recent years. Here we review 15 of the biggest.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/The-biggest-ransomware-attacks-in-history",
          "btnText":  "Explore the List",
          "topic":    "Threats and vulnerabilities",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Ransomware Guide",
          "summary": "We cover ransomware from how it works, what types there are, its targets, and tips on how to protect and detect ransomware so your organization can be on the defense rather than the offense when it comes to these threats.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/definition/ransomware",
          "btnText":  "Get the Guide",
          "topic":    "Threats and vulnerabilities",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top 5 ransomware attack vectors and how to avoid them",
          "summary": "Protecting your organization against ransomware attack entryways could mean the difference between staying safe or falling victim to a devastating breach.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-3-ransomware-attack-vectors-and-how-to-avoid-them",
          "btnText":  "Read More",
          "topic":    "Threats and vulnerabilities",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[How to] Securing AI infrastructure",
          "summary": "AI tools are creating an even greater attack surface for malicious hackers to penetrate. But there are steps you can take to ensure your organization's AI foundation remains safe.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-to-secure-AI-infrastructure-Best-practices",
          "btnText":  "Learn More",
          "topic":    "Threats and vulnerabilities",
          "id":       "id4",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Pen Testing: Pros and cons of manual vs. automated",
          "summary": "Automated penetration testing capabilities continue to improve, but how do they compare to manual pen testing? Get help finding which is a better fit for your organization.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/feature/Pros-and-cons-of-manual-vs-automated-penetration-testing",
          "btnText":  "Explore Now",
          "topic":    "Threats and vulnerabilities",
          "id":       "id5",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "14 top open source penetration testing tools",
          "summary": "From Aircrack-ng to ZAP, these open source penetration testing tools are essential additions to any security pro's toolbox.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/11-open-source-automated-penetration-testing-tools",
          "btnText":  "Find Out More",
          "topic":    "Threats and vulnerabilities",
          "id":       "id6",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ]
    };

    const exclusionList = [
  "techtarget.com/some-page",
  "techtarget.com/another-section",
  "/newspapers/",           // partial paths OK too
];


    // skip excluded URLs
    if (isExcludedUrl()) {
    console.log("Cyber Pilot Promo – skipped on excluded URL:", window.location.href);
    return;
  }

    //  Build matchedTopic & matchedArticles 

    const mappedTopic = findMatchingTopic(topicsData);
    console.log('Cyber Pilot Mapped Topic:', mappedTopic);

    const matchedArticles = getArticlesByTopic(resourceMetadata, mappedTopic);
    console.log('Cyber Pilot Matched Articles:');
    console.log(matchedArticles);

    // current Offer code 
    var currentOfferCode = config.offerCode;


    //  Functions 

    function isExcludedUrl() {
  const currentUrl = window.location.href;
  return exclusionList.some(substr => currentUrl.includes(substr));
}

    function getzone() {
      try {
        var z;
        TT(['context'], ctx => { z = ctx.zone.trim(); });
        return z || "";
      } catch (err) {
        console.error("[ERROR] getzone:", err);
        return "";
      }
    }

    function getcollection() {
      try {
        var c;
        TT(['context'], ctx => { c = ctx.collection.trim(); });
        return c || "";
      } catch (err) {
        console.error("[ERROR] getcollection:", err);
        return "";
      }
    }

    function getTargetIndices() {
      var paras     = $('#content-body p');
      var paraCount = paras.length;
      var slots     = config.numSplashes;
      var indices   = [];
    
      if (!paraCount) {
        console.warn('No paragraphs to target');
        return indices;
      }
    
      // tiny pages: always after last <p>
      if (paraCount < 3) {
        slots = 1;
        config.numSplashes = 1;
        pushTrackingEvent("display_slot1of3");
        return [ paraCount - 1 ];
      }
    
      var minIdx = skipTopP;                              // skip first skipTopP paras
      var maxIdx = Math.max(skipTopP, paraCount - 3);     // avoid last two paras
    
      // forced overrides
      for (var slotNum = 1; slotNum <= slots; slotNum++) {
        if (config.slotOverrides && typeof config.slotOverrides[slotNum] === 'number') {
          var rawIdx    = config.slotOverrides[slotNum];
          var forcedIdx = Math.min(Math.max(rawIdx, minIdx), maxIdx);
          var $p        = paras.eq(forcedIdx);
          var inPillar  = $p.closest('#pillar-cluster-splash').length;
          var inExtra   = $p.closest('.extra-info').length;
          var inTable   = $p.closest('.main-article-table').length;
    
          if (inPillar || inExtra || inTable) {
            console.warn(
              'Forced slot ' + slotNum +
              ' → paragraph ' + rawIdx +
              ' clamped to ' + forcedIdx +
              ' but sits inside ' +
              (inPillar   ? '#pillar-cluster-splash' :
               inExtra    ? '.extra-info' :
               '.main-article-table') +
              '; it will be randomized instead.'
            );
          } else if ($p.length) {
            indices.push(forcedIdx);
          }
        }
      }
    
      // Build the pool of random slots
      var eligible = [];
      paras.each(function(i, el) {
        if (i < skipTopP)                     return;
        if (i > paraCount - 3)                return;
        if ($(el).closest('#pillar-cluster-splash').length) return;
        if ($(el).closest('.extra-info').length)          return;
        if ($(el).closest('.main-article-table').length)  return;
        if (indices.indexOf(i) !== -1)                  return;
        eligible.push(i);
      });
    
      if (!eligible.length && indices.length < slots) {
        console.warn(
          'No eligible paragraphs for random insertion—only forced overrides (if any) will be used.'
        );
      }
    
      // Fill remaining slots
      while (indices.length < slots && eligible.length) {
        var randPos = Math.floor(Math.random() * eligible.length);
        var pick    = eligible[randPos];
        var tooClose = indices.some(function(prev) {
          return Math.abs(prev - pick) < 3;
        });
        if (!tooClose) {
          indices.push(pick);
        }
        eligible.splice(randPos, 1);
      }
    
      // Final fallback: after last paragraph
      if (indices.length < slots) {
        indices.push(paraCount - 2);
        pushTrackingEvent("display_slot1of1", {variation: "1", sendToOptEdge: false});
      }
    
      console.log('getTargetIndices → [' + indices.join(', ') + ']');
      return indices.sort(function(a, b) { return a - b; });
    }
    
    
    
    
    
    
    
    

    //  Build & Insert Splashes DOM
    var zone = getzone(),
      coll = getcollection(),
      indices = getTargetIndices();
    var ids = pickRandomResources(config.numSplashes);

    indices.forEach(function (idx, i) {
      try {
        var snippetDiv = $(`
          <section 
            id="optly-cyberPromo-custom-div-${i + 1}of${indices.length}"
            class="custom-div-${i + 1} ${zone} ${coll.replace(/\s+/g, '')}"
          ></section>`);
        var snippetContent = $('<div></div>').appendTo(snippetDiv);

        $(`
          <div class="o-type o-type-top"></div>
          <a target="_blank" class="o-image-link" id="o-linkUrl-${i + 1}"></a>
          <div class="o-rightContainer">
            <div class="o-type o-type-right" id="o-type-${i + 1}"></div>
            <div id="o-title-${i + 1}">
              <a target="_blank" class="o-title-link"></a>
            </div>
            <div id="o-summary-${i + 1}"></div>
            <a id="o-btnText-${i + 1}"></a>
          </div>
        `).appendTo(snippetContent);

        $('#content-body p').eq(idx).after(snippetDiv);

      } catch (err) {
        console.error(`[ERROR] injecting splash ${i + 1}:`, err);
      }
    });

    function pickRandomFromMatched(n) {
      const articleIds = Object.keys(matchedArticles);
      if (n >= articleIds.length) {
        // Return every ID, defaulting displayType="Tall"
        return articleIds.map(id => ({ id, displayType: 'Tall' }));
      }
      // Shuffle the IDs array in‐place
      const shuffled = articleIds.slice().sort(() => Math.random() - 0.5);
      return shuffled.slice(0, n).map(id => ({ id, displayType: 'Tall' }));
    }



    //   fill & style each splash 

    function updatePageContent() {
      try {
        const currentUrl = window.location.href;
        let idObjs;

        const pageMatch = page2Resource.urls.find(u => u.url && currentUrl.includes(u.url));
        if (pageMatch) {
          idObjs = pageMatch.ids.slice(0, config.numSplashes);
        } else {
          idObjs = pickRandomFromMatched(config.numSplashes);
          console.log('Cyber Pilot - Update Page Content - idObjs', idObjs);
        }

        idObjs.forEach((idObj, i) => {
          const slot = i + 1;
          const md   = matchedArticles[idObj.id];
          if (!md) return;

          // Link
          $(`#o-linkUrl-${slot}`).attr('href', md.btnUrl);

          // Image as background
          const imgSrc = md.imgUrl || getFallbackImageUrl();
          $(`#o-linkUrl-${slot}`).css({
            'background-image': `url(${imgSrc})`
          });

          // Title, summary, button
          $(`#o-title-${slot} .o-title-link`)
            .attr('href', md.btnUrl)
            .text(md.title);
          $(`#o-summary-${slot}`).html(md.summary);
          $(`#o-btnText-${slot}`)
            .attr('href', md.btnUrl)
            .text(md.btnText);

          const div = $(`.custom-div-${slot}`);
          div.addClass('o-cyber-pilot-splash')
             .removeClass('optlyShort optlyLong optlyLandscape optlyPortrait')
             .addClass(idObj.displayType === "Short" ? 'optlyShort' : 'optlyLong')
             .addClass((md.imgOrien || 'landscape') === "landscape" 
                       ? 'optlyLandscape' 
                       : 'optlyPortrait');

         // pushTrackingEvent("display_slot" + slot, { type: config.experimentName});

          ga4_slot   = $(this).closest('section').attr('id') || '';
        //var snippetDiv = $(`#optly-cyberPromo-custom-div-${slot}of${idObjs.length}`);
  const clickedUrl = $(this).attr('href') || '';
          pushTrackingEvent(
            `display_slot${slot}of3`,              
            {
              type:  config.experimentName, 
              url:   md.btnUrl,      
              slot:  ga4_slot               
            }
          );
        });
      } catch (err) {
        console.error("[ERROR] updatePageContent failed:", err);
      }
    }


    function addSharedClasses() {
      try {
        $('[id^="o-"]').each(function () {
          var id = this.id;
          if (id.startsWith("o-summary"))   $(this).addClass("o-summary");
          if (id.startsWith("o-imgUrl"))    $(this).addClass("o-imgUrl");
          if (id.startsWith("o-title"))     $(this).addClass("o-title");
          if (id.startsWith("o-btnText"))   $(this).addClass("o-btnText");
          if (id.startsWith("o-type"))      $(this).addClass("o-type");
        });
      } catch (err) {
        console.error("[ERROR] addSharedClasses:", err);
      }
    }

    function moveSplashDivs() {
      try {
        $(
          '.extra-info .o-cyber-pilot-splash, ' +
          'section#pillar-cluster-splash .o-cyber-pilot-splash, ' +
          '.main-article-table .o-cyber-pilot-splash'
        ).each(function () {
          var $s = $(this),
              // look for the closest section or main-article-table wrapper
              $container = $s.closest('section, .main-article-table');
          if ($container.length) {
            $s.insertAfter($container);
          }
        });
      } catch (err) {
        console.error("[ERROR] moveSplashDivs:", err);
      }
    }
    

    function appendTrackingParams() {
      try {
        $('.download-button, .cluster-download, .o-btnText, .o-title-link, .o-image-link').each(function () {
          try {
            const $el = $(this);
            const href = ($el.attr('href') || '').split('?')[0];

            // base params
            const params = [
              "Offer=" + encodeURIComponent(currentOfferCode),
              "utm_source=" + encodeURIComponent(config.utm.source),
              "utm_medium=" + encodeURIComponent(config.utm.medium),
              "utm_campaign=" + encodeURIComponent(config.utm.campaign)
            ];

            // detect type and conditionally insert asrc
            const type = detectResourceType(href);
            if (type === 'BrightTalk') {
              params.splice(1, 0, "asrc=" + encodeURIComponent(config.asrc));
            }

            $el.attr('href', href + "?" + params.join("&"));
          } catch (e) {
            console.error("[ERROR] appendTrackingParams element:", e);
          }
        });
      } catch (err) {
        console.error("[ERROR] appendTrackingParams:", err);
      }
    }


    ;(function trackSplashOnScroll() {
      var splashEls = document.querySelectorAll('section[id^="optly-cyberPromo-custom-div-"][id$="of3"]');
      
     if (fallbackOveride) {
        splashEls = document.querySelectorAll('section[id^="optly-cyberPromo-custom-div-"][id$="of1"]');      
      } 
     
      if (!splashEls.length) return;
    
      const hasFired = new Set();
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
    
          const el = entry.target;
          const id = el.id; // e.g. "optly-cyberPromo-custom-div-2of3"
          if (hasFired.has(id)) return;
          hasFired.add(id);
    
          const match = id.match(/custom-div-(\d+)of/);
          const slotNumber = match ? match[1] : null;
          if (!slotNumber) return;
    
          // Build the payload; add sendToGA:false for every slot ≠ 1
          const payload = {
            type: config.experimentName,
            slot: id
          };
          if (slotNumber !== "1") {
            payload.sendToGA = false;
          }
    
          pushTrackingEvent(`splash${slotNumber}_in_view`, payload);
          obs.unobserve(el);
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });
    
      splashEls.forEach(el => observer.observe(el));
    })();
  

    function getIdsForCurrentPage() {
      const currentUrl = window.location.href;
      let match = page2Resource.urls.find(u => currentUrl.includes(u.url));

      if (match) {
        return match.ids.slice(0, config.numSplashes);
      }

      const allIds = Object.keys(resourceMetadata);
      const shuffled = allIds.slice().sort(() => 0.5 - Math.random());
      const randomIds = shuffled
        .slice(0, config.numSplashes)
        .map(id => ({ id, displayType: 'Tall' }));

      const newEntry = {
        url: currentUrl,
        ids: randomIds
      };
      page2Resource.urls.push(newEntry);
      return randomIds;
    }

    function detectResourceType(url) {
      if (/bitpipe\.com/.test(url))            return 'Bitpipe';
      if (/\bOffer=/.test(url))                 return 'MarketingOffer';
      if (/brighttalk\.com\/webcast/.test(url))  return 'BrightTalk';
      return 'Unknown';
    }

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function getFallbackImageUrl() {
      const rndInt = randomIntFromInterval(1, 60);
      const formattedNumber = rndInt < 10 ? `0${rndInt}` : `${rndInt}`;
      return `https://media.techtarget.com/devUx/custom-1044/hero${formattedNumber}.jpg`;
    }

    function pickRandomResources(n) {
      const keys = Object.keys(resourceMetadata);
      if (n >= keys.length) {
        return keys.map(id => ({ id, displayType: 'Tall' }));
      }
      const shuffled = keys.slice().sort(() => Math.random() - 0.5);
      return shuffled
        .slice(0, n)
        .map(id => ({ id, displayType: 'Tall' }));
    }

    //  Find and return exactly the string that matches one of resourceMetadata’s keys 
function findMatchingTopic(topicsData) {
  var currentTopicName = topicName || window.topicName;
  if (!currentTopicName) {
    console.error('findMatchingTopic: topicName is not defined');
    return null;
  }

  if(fallbackOveride) {
    currentTopicName = fallbackTopic;
  }


  // Search for a matching primaryTopic or distilledTopic
  const matched = topicsData.topics.find(t => 
    t.primaryTopic === currentTopicName || 
    t.distilledTopic === currentTopicName
  );

  if (matched) {
    return matched.distilledTopic;
  } else {
    console.log('findMatchingTopic: no match found for', currentTopicName, '. Replacing with "Careers and Certifications"');
    return "Careers and certifications";
  }
}


    function addQueryParam(key, value) {
        // Select all <a> within #content-body, excluding those inside .o-cyber-pilot-splash
        const links = document.querySelectorAll('#content-body a');
        
        links.forEach(link => {
          if (link.closest('.o-cyber-pilot-splash')) return;
          
          const href = link.getAttribute('href');
          if (!href) return;
      
          const urlObj = new URL(href, window.location.origin);
      
          if (urlObj.searchParams.has(key)) return;
      
          urlObj.searchParams.set(key, value);
      
          link.setAttribute('href', urlObj.toString());
        });
      }
      

    //  Tracking Events 
    //ga4_slot = `optly-cyberPromo-custom-div-${slot}of${idObjs.length}`;
    const currentUrl = window.location.href;
    if (currentUrl.includes('/definition/')) {
      pushTrackingEvent('definitionDisplayed', {type: config.experimentName, page: 'definition', url: currentUrl});
    } else if (/(\/feature\/|\/news\/|\/tip\/|\/answer\/|\/opinion\/)/.test(currentUrl)) {
      pushTrackingEvent('EOCDisplayed', {type: config.experimentName,page: 'EOC', url: currentUrl});      
    }
    $(document).on('click', '.o-cyber-pilot-splash a', function (e) {
      if (currentUrl.includes('/definition/')) {
        const clickedUrl = $(this).attr('href') || '';
        pushTrackingEvent('definitionClicked', {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
      } else if (/(\/feature\/|\/news\/|\/tip\/|\/answer\/|\/opinion\/)/.test(currentUrl)) {
       // ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
        pushTrackingEvent('EOCClicked', {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
      }
    });

    // Content Body Click Handler
    $(document).on('click', '#content-body', function (e) {
      if ($(e.target).closest('.o-cyber-pilot-splash').length) {
        return;
      }
      pushTrackingEvent('contentBody_clicked', { type: config.experimentName, page: 'contentBody',  url: currentUrl, sendToGA: false  });
    });

    // Button click handlers
    $(document).on('click', '.o-btnText', function () {
        //ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
      pushTrackingEvent("splash_btn_clicked", {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
    });
    $(document).on('click', '.o-image-link', function () {
       // ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
      pushTrackingEvent("splash_img_clicked", {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
    });
    $(document).on('click', '.o-title', function () {
      //  ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
      pushTrackingEvent("splash_link_clicked", {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
    });


    //  Fill & Style Promo Logic 
    updatePageContent();
    addSharedClasses();
    moveSplashDivs();
    appendTrackingParams();

    console.log(`${config.experimentName}: all functions executed`);
    pushTrackingEvent("elementsAdded", {sendToGA: false});





  });
});

//  Return a lookup  for whichever topicKey matches 
function getArticlesByTopic(data, topicKey) {
  if (!topicKey) {
    console.warn("getArticlesByTopic: no topicKey provided");
    return {};
  }
  if (data.hasOwnProperty(topicKey)) {
    const arr = data[topicKey];
    const mapById = {};
    arr.forEach(item => { mapById[item.id] = item; });
    return mapById;
  } else {
    console.log(`Topic "${topicKey}" not found in resourceMetadata.`);
    return {};
  }
}

/*
//  Find and return exactly the string that matches one of resourceMetadata’s keys 
function findMatchingTopic(topicsData) {
  if(fallbackOveride) {
    return fallbackTopic;
  }



  const currentTopicName = topicName || window.topicName;
  if (!currentTopicName) {
    console.error('findMatchingTopic: topicName is not defined');
    return null;
  }

  // Search for a matching primaryTopic or distilledTopic
  const matched = topicsData.topics.find(t => 
    t.primaryTopic === currentTopicName || 
    t.distilledTopic === currentTopicName
  );

  if (matched) {
    return matched.distilledTopic;
  } else {
    console.log('findMatchingTopic: no match found for', currentTopicName, '. Replacing with "Careers and Certifications"');
    return "Careers and certifications";
  }
}
*/
}, "dependencies": []}, {"id": "68af78c5f4ce481a93bb2359035ff770", "type": "append", "selector": "head", "value": "<style>.o-cyber-pilot-splash > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.o-image-link, .o-rightContainer {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 1;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-type {display:none}\nsection.o-cyber-pilot-splash { \n\tmargin:25px 0;\n  padding:20px;\n  clear:right;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,.25);\n  display:flex;\n}\n\n\nsection.o-cyber-pilot-splash:before,\nsection.o-cyber-pilot-splash:after { \n\tclear:both;\n}\n.optlyLandscape .o-rightContainer {\n\t/*margin-left: 260px;*/\n  position: relative;\n}\n.optlyPortrait .o-rightContainer {\n\t/*margin-left: 170px;*/\n  position: relative;\n}\nsection.o-cyber-pilot-splash a {\n  display:block;\n  cursor:pointer !important;\n}\n\nsection.o-cyber-pilot-splash .o-image-link {\n\tposition: absolute;\n  display: inline-block !important;\n  margin-right:20px;\n}\nsection.o-cyber-pilot-splash.optlyLong {\n background: #FFFFFF 0% 0% no-repeat padding-box;\n  opacity: 1;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  color: #323232;\n  /*min-height: 210px*/\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-title:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-title{\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: relative;\n  text-decoration: none;\n  text-transform: none;\n  display: block;\n  color: #007a76;\n}\nsection.o-cyber-pilot-splash .o-summary {\n\tline-height:1.3em;\n  margin-top:10px;\n  margin-bottom:20px;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-summary {\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  list-style: none;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  position: relative;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText:hover {\n    color: #ffffff;\n  background-color:#323232\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n  color: #fff;\n  height: 40px;\n  width: 255px;\n  line-height: 40px;\n  text-align: center;\n  background-color: teal;\n  text-decoration: none;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  text-align: center;\n  border-radius: 3px;\n  transition: background-color .2s;\n  background: teal;\n  font-size: 14px;\n  font-weight: 700;\n  display:block;\n}\n\n\n#sdef .definition-section section.o-cyber-pilot-splash.optlyLandscape img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyLandscape img {\n  width:  240px !important;\n  max-width:  240px !important;\n  border:1px solid #e3e3e3;\n  max-width: 100%;\n    height: auto;\n    width: 32.5%;\n }\n#sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\n  max-height:  180px !important;\n  width: 100%;\n  border:1px solid #e3e3e3;\n }\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-type {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n}\n/*o-type conditional display*/\nsection.o-cyber-pilot-splash.optlyLong .o-type-top {\npadding-bottom:10px;\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-right {\npadding-bottom:10px;\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-top,\nsection.o-cyber-pilot-splash.optlyLong .o-type-right{\ndisplay:block;\npadding-bottom:10px\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-right,\nsection.o-cyber-pilot-splash.optlyLong .o-type-top{\ndisplay:none;\n}\n/*Short Portrait*/\nsection.o-cyber-pilot-splash.optlyShort .o-type-top,\nsection.o-cyber-pilot-splash.optlyLong .o-type-right{\ndisplay:block;\npadding-bottom:10px\n\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-right,\nsection.o-cyber-pilot-splash.optlyLong .o-type-top{\ndisplay:none;\n}\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n\tbackground: #E6E6E6 0% 0% no-repeat padding-box;\n  opacity: 1;\n  /*min-height:123px*/\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait p.o-type {\n  font-size: 12px;\n  font-weight: 700;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-summary {\n  display: none\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait img {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  height: auto;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait a.o-btnText {\n  display: none;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-title:hover {\n    color: #323232;\n}\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n}\n\n\n/*Short Landscape*/\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  background: #f2f2f2;\n  /*min-height:123px;*/\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape p.o-type {\n\n\n  font-size: 12px;\n  font-weight: 700;\n\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-summary {\n\n  display: none\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape img {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape a.o-btnText {\n  display: none;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-title:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n}\n\n\n/* no orientation optlyLong  */\n\nsection.o-cyber-pilot-splash.optlyLong .o-title:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-title{\n position: relative;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: relative;\n  text-decoration: none;\n  text-transform: none;\n  display: block;\n  color: #007a76;\n  margin: 0;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-summary {\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  list-style: none;\n  font-size: 15px;\n  color: #666;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-btnText:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-btnText {\n  color: #fff;\n  height: 40px;\n  width: 255px;\n  line-height: 40px;\n  text-align: center;\n  background-color: teal;\n  text-decoration: none;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  letter-spacing: -.02em;\n  text-align: center;\n  border-radius: 3px;\n  transition: background-color .2s;\n  background: teal;\n  font-size: 14px;\n  font-weight: 700;\n  display:block;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyLong .o-type {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  color: #666;\n\n\n}\n\n/* no orientation optlyShort  */\n\nsection.o-cyber-pilot-splash.optlyShort {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  clear: both;\n  background: #f2f2f2;\n}\n\nsection.o-cyber-pilot-splash.optlyShort .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n\n}\n\nsection.o-cyber-pilot-splash.optlyShort p.o-type {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort .o-summary {\n\n  display: none\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort a.o-btnText {\n  display: none;\n}\n\nsection.o-cyber-pilot-splash.optlyShort .o-title:hover {\n    color: #323232;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n     \n}\n\n/*PILLAR MAIN */\nsection.o-cyber-pilot-splash.optlyLong.PILLARMain .o-type{\n  /*margin-top: 2.5% !important;*/\n}\n\ndiv.custom-div-2.PILLAR.PILLARMain.o-cyber-pilot-splash.optlyShort.optlyLandscape{\n/*min-height:98px*/\n}\n\n\n/* Media Queries */\n@media screen and (max-width: 1020px) {\n  section.o-cyber-pilot-splash.optlyLong,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape,\n  section.o-cyber-pilot-splash.optlyShort,\n  section.o-cyber-pilot-splash.optlyShort.optlyLandscape {\n    margin: 20px 10px; \n    clear: both\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  \n  #sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\n  max-height: 100% !important;\n  height: 150px;\n  width: auto;\n  border:1px solid #e3e3e3;\n }\n  \n  #sdef .definition-section section.o-cyber-pilot-splash.optlyLandscape img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyLandscape img {\n  border:1px solid #e3e3e3;\n  max-width: 100% !important;\n    height: auto;\n    width: 32.5% !important;\n }\n#sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\n  max-height:  200px !important;\n  border:1px solid #e3e3e3;\n }\n  \n  .optlyLandscape .o-rightContainer {\n    width: 63%;\n    margin-left: 250px;\n    display: block;\n    height: 100%;\n    max-height: min-content;\n    /* flex-direction: column; */\n    float: right;\n}\n \n  .optlyPortrait .o-rightContainer {\n   \n        margin-left: 20%;\n\n}\n  \n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-summary,\n  section.o-cyber-pilot-splash.optlyLong .o-summary {\n    /*font-size: calc(0.8vw + .7px);*/\n}\n  section.o-cyber-pilot-splash.optlyLong .o-btnText,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    /*font-size: calc(0.8vw + 4.1px);*/\n}\n}\n\n@media screen and (max-width: 960px) {\n   \n  .optlyPortrait .o-rightContainer {\n   \n        margin-left: 130px;\n\n}\n  \n section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-summary,\n  section.o-cyber-pilot-splash.optlyLong .o-summary {\n    /*font-size: calc(0.8vw + 4.8px);*/\n    font-size: 14px;\n}\n  section.o-cyber-pilot-splash.optlyLong .o-btnText,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    /*font-size: calc(0.8vw + 5.8px);*/\n}\n\n}\n\n@media screen and (max-width: 480px) {\n#sdef .definition-section section.o-cyber-pilot-splash.optlyLandscape img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyLandscape img,\n  #sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\ndisplay:none\n      \n}\n  .optlyPortrait .o-rightContainer, \n  .optlyLandscape .o-rightContainer {\n    width: 100%;\n    float:none;\n    margin:0;\n}\n  \nsection.o-cyber-pilot-splash.optlyLong {\n\n  min-height: auto; \n  }\n   section.o-cyber-pilot-splash.optlyLong .o-btnText,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    font-size: 14px;\n    /*font-size: calc(0.8vw + 7.8px);*/\n}\n}\n\n.optlyLandscape .o-rightContainer {\n    margin-left: 205px !important;    \n  \tposition: relative !important;\n}\n\n.o-image-link {\n  display: block;\n  height: 110px;\n  width: 180px;\n  border: 1px solid #e3e3e3;\n  background-size: auto 180px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  section.o-cyber-pilot-splash .o-image-link {width:140px;}\n  .optlyLandscape .o-rightContainer {margin-left:160px !important;}\n}\n@media only screen and (max-width: 600px) {\n  section.o-cyber-pilot-splash .o-image-link {width:100px;height:100px;}\n  .optlyLandscape .o-rightContainer {margin-left:120px !important;}\n}\n@media only screen and (max-width: 320px) {\n  section.o-cyber-pilot-splash .o-image-link {width:50px;height:50px;}\n  .optlyLandscape .o-rightContainer {margin-left:65px !important;}\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "32a6afd2f68440f4a6afe72bdc724471", "selector": ".custom-div-1 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "3dc2c98f993d44898e3bd1d506a367ae", "selector": ".custom-div-2 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "8525d3cc7752488bb125e00e6b1b7556", "selector": ".custom-div-3 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "565ee5baff3d4f128775c12ba8094f87", "selector": ".o-btnText"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "a1688b30aac543fc88f8ee0ea62c272b", "selector": ".o-title"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "48a4ed540328413f9388816111d30023", "selector": ".o-cyber-pilot-splash a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "e9fabf4ac43b48a39faca00b2723b081", "selector": ".o-image-link img"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "b9464f2d397d44dd9beaa65f28784c29", "selector": "#content-body a:not(.o-cyber-pilot-splash a)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "0c73f1c6ee4f4e2bbc788f30f9212838", "selector": "#content-body a"}]}]}, {"id": "6250686350884864", "name": null, "actions": [{"viewId": "6458308895178752", "changes": [{"id": "47821578-870A-4D41-91A4-29C9BE980691", "type": "custom_code", "value": function($){console.log("Cyber Pilot Promo - Start variation");
console.log("Cyber Pilot Promo - topic: " + window.topicName);

var eventExpName = "cyberPilotPromo_";
function pushTrackingEvent(customEventName, eventProperties = {}) {
  // pull out the two “send” flags so they don't end up in the payload
  var sendToGA      = eventProperties.sendToGA;
  var sendToOptEdge = eventProperties.sendToOptEdge;
  // make a clean copy of the rest
  var props = {};
  Object.keys(eventProperties).forEach(function(key) {
    if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
      props[key] = eventProperties[key];
    }
  });

  //  Optimizely Edge 
  if (sendToOptEdge !== false) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type:       'event',
      eventName:  eventExpName + customEventName,
      properties: props
    });
  }

  //  Google Analytics 4 
  if (sendToGA === false) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  var ga4Payload = {
    event:  'optly_generic',
    type:   eventExpName,
    value1: customEventName
  };

  // allow overriding the "type" field
  if (props.hasOwnProperty('type')) {
    ga4Payload.type = props.type;
  }

  // pull out up to two more values
  var otherKeys = Object.keys(props).filter(function(k) { return k !== 'type'; });
  if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
  if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

  window.dataLayer.push(ga4Payload);
}

  

var topicName;
TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
  topicName = ctx.topicName || ''; 
});

// Cyber Pilot Promo - variation Start - 05/22/2025
jQuery(function ($) {
  $(document).ready(function () {
    console.log(`Cyber Pilot Promo - Document READY`);
    pushTrackingEvent("varStart", {variation: "2", sendToGA: false});

    // Configuration Settings   
    var config = {
      experimentName: "cyberPilotPromo",
      variation: "ab_ss_reeng_plt_var2",
      offerCode: "ab_ss_reeng_plt_var2Pro",
      utm: {
        source: "searchsecurity",
        medium: "web",
        campaign: "ab_ss_reeng_plt_var2"
      },
      asrc: "ab_ss_reeng_plt_var2Pro",
      numSplashes: 1,
      slotOverrides: {
        1:4
        // e.g. 1: 3 - “slot 1 always appears at paragraph 3”
      }
    };
    addQueryParam('Offer', 'ab_ss_reeng_plt_var2');
    var ga4_slot = '';
    var skipTopP = 3; // The number of paragraphs at the top of the page that should be skipped when inserting these splashes
    var fallbackOveride = true; //wave 2 logic to default to fallbacks
    var fallbackTopic = "Fallback2";



    // Pull wordCount from dataLayer
    const dl = window.dataLayer || [];
    const pageInfo = dl.find(o => typeof o.wordCount === 'number') || {};
    const wordCount = pageInfo.wordCount || 0;
    if (wordCount < 500) {
      config.numSplashes = 1;
    }

    //  SPLASH RESOURCES 

    const page2Resource = {
      urls: [{
        url: "",
        ids: [
          { id: "id13", displayType: "Tall" },
          { id: "id1",  displayType: "Tall" },
          { id: "id2",  displayType: "Tall" },
        ]
      }]
    };

    // topic lookup data
    const topicsData = {
      "topics": [
        { "primaryTopic": "Analytics and Automation",       "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Application and platform security", "distilledTopic": "Application and platform security" },
        { "primaryTopic": "Cloud security",                  "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Compliance",                      "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Data security and privacy",        "distilledTopic": "Data security and privacy" },
        { "primaryTopic": "IAM",                              "distilledTopic": "Threat detection and response" },
        { "primaryTopic": "Network security",                 "distilledTopic": "Threat detection and response" },
        { "primaryTopic": "Operations & Management",          "distilledTopic": "Careers and certifications" },
        { "primaryTopic": "Risk management",                  "distilledTopic": "Threats and vulnerabilities" },
        { "primaryTopic": "Fallback",                          "distilledTopic": "Fallback" },
        { "primaryTopic": "Fallback2",                          "distilledTopic": "Fallback2" }
      ]
    };

    // All of the content for the splashes being inserted
    const resourceMetadata = {
      "Fallback": [
        {
          "title": "AI-powered attacks: What CISOs need to know now",
          "summary": "Threat actors are already targeting your organization with hyper-personalized deception at massive scale. CISOs who don't adapt immediately risk catastrophic breaches.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/feature/AI-powered-attacks-What-CISOSs-need-to-know-now",
          "btnText":  "Read Now",
          "topic":    "Threats and vulnerabilities",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Fallback2": [
        {
          "title": "Why identity is the new perimeter – and how to defend it",
          "summary": "Hackers aren't breaching your walls—they're walking through your front door with stolen credentials. Learn the critical identity protection strategies most companies are dangerously overlooking.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/feature/identity-new-perimeter-enterprise-security",
          "btnText":  "Read Now",
          "topic":    "Identity and Access Management",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Application and platform security": [
        {
          "title": "10 leading open source application security testing tools",
          "summary": "Security testing enables companies to discover and remediate vulnerabilities and weaknesses in apps before malicious actors find them. This article reviews the top 10 tools chosen on firsthand experience -- including their Pros and Cons.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Leading-open-source-application-security-testing-tools",
          "btnText":  "Learn More",
          "topic":    "Application and platform security",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top 15 email security best practices",
          "summary": "Attackers exploit email every day to break into corporate networks, but the risk can be reduced by adhering to these 15 email security best practices.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/2019s-top-email-security-best-practices-for-employees",
          "btnText":  "See the Best Practices Now",
          "topic":    "Application and platform security",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Will AI replace cybersecurity jobs?",
          "summary": "Although AI can enhance cybersecurity practices like threat detection and vulnerability management, the technology's limitations ensure a continued need for human security pros.",
          "btnUrl":   "https://www.techtarget.com/searchenterpriseai/feature/Will-AI-replace-cybersecurity-jobs",
          "btnText":  "Read On",
          "topic":    "Application and platform security",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Careers and certifications": [
        {
          "title": "Automated Pen Testing 101",
          "summary": "Automated penetration testing, which speeds up the process for companies and vendors, is maturing. Is it ready to close the time gap between vulnerability discovery and mitigation?",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Introduction-to-automated-penetration-testing",
          "btnText":  "Read On",
          "topic":    "Careers and certifications",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[2025 Career Focus] 10 cybersecurity certifications career boosters",
          "summary": "A consensus of industry professionals rank these 10 security certifications as the most coveted by employers and security pros -- plus links to 10 vendor security certifications.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/10-cybersecurity-certifications-to-boost-your-career-in-2021",
          "btnText":  "Learn More",
          "topic":    "Careers and certifications",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[2025 Career Focus] Top 12 online cybersecurity courses (Free and Paid)",
          "summary": "Our panel of experts picked the best free and paid online cybersecurity courses for professionals looking to advance their careers and for newbies breaking into the field.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-10-cybersecurity-online-courses",
          "btnText":  "Read More",
          "topic":    "Careers and certifications",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[2025 Career Focus] 10 must-have cybersecurity skills for career success",
          "summary": "Looking to advance your cybersecurity career? Here are the skills you need to win a CISO job, land a threat hunter gig and snag other security positions in high demand.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/10-must-have-cybersecurity-skills-for-career-success",
          "btnText":  "Learn More",
          "topic":    "Careers and certifications",
          "id":       "id4",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "2025's 10 best cloud security certifications for IT pros",
          "summary": "Certifications can help security pros prove their baseline knowledge of infosec topics. Consider adding these top cloud security certifications to your arsenal.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/The-best-cloud-security-certifications-for-IT-professionals",
          "btnText":  "See The List",
          "topic":    "Careers and certifications",
          "id":       "id5",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top AI security certifications to consider",
          "summary": "AI security certifications, much like AI itself, are evolving. Does it make sense to go through the time and money to obtain a credential, given how quickly the field is changing?",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-AI-security-certifications-to-consider",
          "btnText":  "Read On",
          "topic":    "Careers and certifications",
          "id":       "id6",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "6 cybersecurity soft skills to elevate your career",
          "summary": "Cybersecurity professionals have the technical skills to protect their corporate networks, but they also need to master certain soft skills if they truly want to be effective.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Cybersecurity-soft-skills-to-elevate-your-career",
          "btnText":  "See the Skills",
          "topic":    "Careers and certifications",
          "id":       "id7",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Data security and privacy": [
        {
          "title": "How to prevent a data breach: 11 best practices and tactics",
          "summary": "When it comes to data breach prevention, the stakes are high. While it's impossible to eliminate the risk, organizations can minimize it by following these best practices.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-to-prevent-a-data-breach-10-best-practices-and-tactics",
          "btnText":  "See the Best Practices Now",
          "topic":    "Data security and privacy",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top 7 data loss prevention tools for 2025",
          "summary": "Data loss prevention software is a necessity for most companies. Our guide gives you a quick overview of seven top DLP providers and tells you what works -- and what doesn't.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-7-data-loss-prevention-tools",
          "btnText":  "Read More",
          "topic":    "Data security and privacy",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "3 key generative AI data privacy and security concerns",
          "summary": "Those charged with protecting and ensuring the privacy of user data are facing new challenges in the age of generative AI.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Key-generative-AI-data-privacy-and-security-concerns",
          "btnText":  "Learn More",
          "topic":    "Data security and privacy",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Threat detection and response": [
        {
          "title": "[How to] Building an effective purple team playbook",
          "summary": "Enterprises across a wide variety of vertical industries can benefit from purple team exercises that harness red and blue teams toward a common goal: reducing vulnerabilities.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-to-build-an-effective-purple-team-playbook",
          "btnText":  "Learn More",
          "topic":    "Threat detection and response",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "How AI is reshaping threat intelligence",
          "summary": "As promising as AI technology is for threat intelligence, organizations grapple with a long learning curve and other challenges that could impede successful adoption.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-AI-is-reshaping-threat-intelligence",
          "btnText":  "Find Out More",
          "topic":    "Threat detection and response",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "DDoS mitigation: How to stop DDoS attacks",
          "summary": "A DDoS attack can wreak havoc on an organization, but a number of strategies can help stop such attacks and minimize their damage.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/DDoS-mitigation-How-to-stop-DDoS-attacks",
          "btnText":  "Learn More",
          "topic":    "Threat detection and response",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ],
      "Threats and vulnerabilities": [
        {
          "title": "15 of the biggest ransomware attacks in history",
          "summary": "From attacks on private organizations and manufacturers to healthcare organizations and even entire countries, ransomware has done extensive damage in recent years. Here we review 15 of the biggest.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/The-biggest-ransomware-attacks-in-history",
          "btnText":  "Explore the List",
          "topic":    "Threats and vulnerabilities",
          "id":       "id1",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Ransomware Guide",
          "summary": "We cover ransomware from how it works, what types there are, its targets, and tips on how to protect and detect ransomware so your organization can be on the defense rather than the offense when it comes to these threats.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/definition/ransomware",
          "btnText":  "Get the Guide",
          "topic":    "Threats and vulnerabilities",
          "id":       "id2",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Top 5 ransomware attack vectors and how to avoid them",
          "summary": "Protecting your organization against ransomware attack entryways could mean the difference between staying safe or falling victim to a devastating breach.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/Top-3-ransomware-attack-vectors-and-how-to-avoid-them",
          "btnText":  "Read More",
          "topic":    "Threats and vulnerabilities",
          "id":       "id3",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "[How to] Securing AI infrastructure",
          "summary": "AI tools are creating an even greater attack surface for malicious hackers to penetrate. But there are steps you can take to ensure your organization's AI foundation remains safe.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/How-to-secure-AI-infrastructure-Best-practices",
          "btnText":  "Learn More",
          "topic":    "Threats and vulnerabilities",
          "id":       "id4",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "Pen Testing: Pros and cons of manual vs. automated",
          "summary": "Automated penetration testing capabilities continue to improve, but how do they compare to manual pen testing? Get help finding which is a better fit for your organization.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/feature/Pros-and-cons-of-manual-vs-automated-penetration-testing",
          "btnText":  "Explore Now",
          "topic":    "Threats and vulnerabilities",
          "id":       "id5",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        },
        {
          "title": "14 top open source penetration testing tools",
          "summary": "From Aircrack-ng to ZAP, these open source penetration testing tools are essential additions to any security pro's toolbox.",
          "btnUrl":   "https://www.techtarget.com/searchsecurity/tip/11-open-source-automated-penetration-testing-tools",
          "btnText":  "Find Out More",
          "topic":    "Threats and vulnerabilities",
          "id":       "id6",
          "imgUrl":   "",
          "imgOrien": "landscape",
          "type":     "Editorial Content",
          "site":     "TechTarget"
        }
      ]
    };

    const exclusionList = [
  "techtarget.com/some-page",
  "techtarget.com/another-section",
  "/newspapers/",           // partial paths OK too
];


    // skip excluded URLs
    if (isExcludedUrl()) {
    console.log("Cyber Pilot Promo – skipped on excluded URL:", window.location.href);
    return;
  }

    //  Build matchedTopic & matchedArticles 

    const mappedTopic = findMatchingTopic(topicsData);
    console.log('Cyber Pilot Mapped Topic:', mappedTopic);

    const matchedArticles = getArticlesByTopic(resourceMetadata, mappedTopic);
    console.log('Cyber Pilot Matched Articles:');
    console.log(matchedArticles);

    // current Offer code 
    var currentOfferCode = config.offerCode;


    //  Functions 

    function isExcludedUrl() {
  const currentUrl = window.location.href;
  return exclusionList.some(substr => currentUrl.includes(substr));
}

    function getzone() {
      try {
        var z;
        TT(['context'], ctx => { z = ctx.zone.trim(); });
        return z || "";
      } catch (err) {
        console.error("[ERROR] getzone:", err);
        return "";
      }
    }

    function getcollection() {
      try {
        var c;
        TT(['context'], ctx => { c = ctx.collection.trim(); });
        return c || "";
      } catch (err) {
        console.error("[ERROR] getcollection:", err);
        return "";
      }
    }

    function getTargetIndices() {
      var paras     = $('#content-body p');
      var paraCount = paras.length;
      var slots     = config.numSplashes;
      var indices   = [];
    
      if (!paraCount) {
        console.warn('No paragraphs to target');
        return indices;
      }
    
      // tiny pages: always after last <p>
      if (paraCount < 3) {
        slots = 1;
        config.numSplashes = 1;
        pushTrackingEvent("display_slot1of3");
        return [ paraCount - 1 ];
      }
    
      var minIdx = skipTopP;                              // skip first skipTopP paras
      var maxIdx = Math.max(skipTopP, paraCount - 3);     // avoid last two paras
    
      // forced overrides
      for (var slotNum = 1; slotNum <= slots; slotNum++) {
        if (config.slotOverrides && typeof config.slotOverrides[slotNum] === 'number') {
          var rawIdx    = config.slotOverrides[slotNum];
          var forcedIdx = Math.min(Math.max(rawIdx, minIdx), maxIdx);
          var $p        = paras.eq(forcedIdx);
          var inPillar  = $p.closest('#pillar-cluster-splash').length;
          var inExtra   = $p.closest('.extra-info').length;
          var inTable   = $p.closest('.main-article-table').length;
    
          if (inPillar || inExtra || inTable) {
            console.warn(
              'Forced slot ' + slotNum +
              ' → paragraph ' + rawIdx +
              ' clamped to ' + forcedIdx +
              ' but sits inside ' +
              (inPillar   ? '#pillar-cluster-splash' :
               inExtra    ? '.extra-info' :
               '.main-article-table') +
              '; it will be randomized instead.'
            );
          } else if ($p.length) {
            indices.push(forcedIdx);
          }
        }
      }
    
      // Build the pool of random slots
      var eligible = [];
      paras.each(function(i, el) {
        if (i < skipTopP)                     return;
        if (i > paraCount - 3)                return;
        if ($(el).closest('#pillar-cluster-splash').length) return;
        if ($(el).closest('.extra-info').length)          return;
        if ($(el).closest('.main-article-table').length)  return;
        if (indices.indexOf(i) !== -1)                  return;
        eligible.push(i);
      });
    
      if (!eligible.length && indices.length < slots) {
        console.warn(
          'No eligible paragraphs for random insertion—only forced overrides (if any) will be used.'
        );
      }
    
      // Fill remaining slots
      while (indices.length < slots && eligible.length) {
        var randPos = Math.floor(Math.random() * eligible.length);
        var pick    = eligible[randPos];
        var tooClose = indices.some(function(prev) {
          return Math.abs(prev - pick) < 3;
        });
        if (!tooClose) {
          indices.push(pick);
        }
        eligible.splice(randPos, 1);
      }
    
      // Final fallback: after last paragraph
      if (indices.length < slots) {
        indices.push(paraCount - 2);
        pushTrackingEvent("display_slot1of1", {variation: "1", sendToOptEdge: false});
      }
    
      console.log('getTargetIndices → [' + indices.join(', ') + ']');
      return indices.sort(function(a, b) { return a - b; });
    }
    
    
    
    
    
    
    

    //  Build & Insert Splashes DOM
    var zone = getzone(),
      coll = getcollection(),
      indices = getTargetIndices();
    var ids = pickRandomResources(config.numSplashes);

    indices.forEach(function (idx, i) {
      try {
        var snippetDiv = $(`
          <section 
            id="optly-cyberPromo-custom-div-${i + 1}of${indices.length}"
            class="custom-div-${i + 1} ${zone} ${coll.replace(/\s+/g, '')}"
          ></section>`);
        var snippetContent = $('<div></div>').appendTo(snippetDiv);

        $(`
          <div class="o-type o-type-top"></div>
          <a target="_blank" class="o-image-link" id="o-linkUrl-${i + 1}"></a>
          <div class="o-rightContainer">
            <div class="o-type o-type-right" id="o-type-${i + 1}"></div>
            <div id="o-title-${i + 1}">
              <a target="_blank" class="o-title-link"></a>
            </div>
            <div id="o-summary-${i + 1}"></div>
            <a id="o-btnText-${i + 1}"></a>
          </div>
        `).appendTo(snippetContent);

        $('#content-body p').eq(idx).after(snippetDiv);

      } catch (err) {
        console.error(`[ERROR] injecting splash ${i + 1}:`, err);
      }
    });

    function pickRandomFromMatched(n) {
      const articleIds = Object.keys(matchedArticles);
      if (n >= articleIds.length) {
        // Return every ID, defaulting displayType="Tall"
        return articleIds.map(id => ({ id, displayType: 'Tall' }));
      }
      // Shuffle the IDs array in‐place
      const shuffled = articleIds.slice().sort(() => Math.random() - 0.5);
      return shuffled.slice(0, n).map(id => ({ id, displayType: 'Tall' }));
    }



    //   fill & style each splash 

    function updatePageContent() {
      try {
        const currentUrl = window.location.href;
        let idObjs;

        const pageMatch = page2Resource.urls.find(u => u.url && currentUrl.includes(u.url));
        if (pageMatch) {
          idObjs = pageMatch.ids.slice(0, config.numSplashes);
        } else {
          idObjs = pickRandomFromMatched(config.numSplashes);
          console.log('Cyber Pilot - Update Page Content - idObjs', idObjs);
        }

        idObjs.forEach((idObj, i) => {
          const slot = i + 1;
          const md   = matchedArticles[idObj.id];
          if (!md) return;

          // Link
          $(`#o-linkUrl-${slot}`).attr('href', md.btnUrl);

          // Image as background
          const imgSrc = md.imgUrl || getFallbackImageUrl();
          $(`#o-linkUrl-${slot}`).css({
            'background-image': `url(${imgSrc})`
          });

          // Title, summary, button
          $(`#o-title-${slot} .o-title-link`)
            .attr('href', md.btnUrl)
            .text(md.title);
          $(`#o-summary-${slot}`).html(md.summary);
          $(`#o-btnText-${slot}`)
            .attr('href', md.btnUrl)
            .text(md.btnText);

          const div = $(`.custom-div-${slot}`);
          div.addClass('o-cyber-pilot-splash')
             .removeClass('optlyShort optlyLong optlyLandscape optlyPortrait')
             .addClass(idObj.displayType === "Short" ? 'optlyShort' : 'optlyLong')
             .addClass((md.imgOrien || 'landscape') === "landscape" 
                       ? 'optlyLandscape' 
                       : 'optlyPortrait');

         // pushTrackingEvent("display_slot" + slot, { type: config.experimentName});

          ga4_slot   = $(this).closest('section').attr('id') || '';
        //var snippetDiv = $(`#optly-cyberPromo-custom-div-${slot}of${idObjs.length}`);
  const clickedUrl = $(this).attr('href') || '';
          pushTrackingEvent(
            `display_slot${slot}of3`,              
            {
              type:  config.experimentName, 
              url:   md.btnUrl,      
              slot:  ga4_slot               
            }
          );
        });
      } catch (err) {
        console.error("[ERROR] updatePageContent failed:", err);
      }
    }


    function addSharedClasses() {
      try {
        $('[id^="o-"]').each(function () {
          var id = this.id;
          if (id.startsWith("o-summary"))   $(this).addClass("o-summary");
          if (id.startsWith("o-imgUrl"))    $(this).addClass("o-imgUrl");
          if (id.startsWith("o-title"))     $(this).addClass("o-title");
          if (id.startsWith("o-btnText"))   $(this).addClass("o-btnText");
          if (id.startsWith("o-type"))      $(this).addClass("o-type");
        });
      } catch (err) {
        console.error("[ERROR] addSharedClasses:", err);
      }
    }

    function moveSplashDivs() {
      try {
        $('.extra-info .o-cyber-pilot-splash, section#pillar-cluster-splash .o-cyber-pilot-splash')
          .each(function () {
            var $s = $(this),
              $sec = $s.closest('section');
            if ($sec.length) {
              $s.insertAfter($sec);
            }
          });
      } catch (err) {
        console.error("[ERROR] moveSplashDivs:", err);
      }
    }

    function appendTrackingParams() {
      try {
        $('.download-button, .cluster-download, .o-btnText, .o-title-link, .o-image-link').each(function () {
          try {
            const $el = $(this);
            const href = ($el.attr('href') || '').split('?')[0];

            // base params
            const params = [
              "Offer=" + encodeURIComponent(currentOfferCode),
              "utm_source=" + encodeURIComponent(config.utm.source),
              "utm_medium=" + encodeURIComponent(config.utm.medium),
              "utm_campaign=" + encodeURIComponent(config.utm.campaign)
            ];

            // detect type and conditionally insert asrc
            const type = detectResourceType(href);
            if (type === 'BrightTalk') {
              params.splice(1, 0, "asrc=" + encodeURIComponent(config.asrc));
            }

            $el.attr('href', href + "?" + params.join("&"));
          } catch (e) {
            console.error("[ERROR] appendTrackingParams element:", e);
          }
        });
      } catch (err) {
        console.error("[ERROR] appendTrackingParams:", err);
      }
    }


    ;(function trackSplashOnScroll() {
      var splashEls = document.querySelectorAll('section[id^="optly-cyberPromo-custom-div-"][id$="of3"]');
      if (fallbackOveride) {
        splashEls = document.querySelectorAll('section[id^="optly-cyberPromo-custom-div-"][id$="of1"]');      
      } 
     
      if (!splashEls.length) return;
    
      const hasFired = new Set();
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
    
          const el = entry.target;
          const id = el.id; // e.g. "optly-cyberPromo-custom-div-2of3"
          if (hasFired.has(id)) return;
          hasFired.add(id);
    
          const match = id.match(/custom-div-(\d+)of/);
          const slotNumber = match ? match[1] : null;
          if (!slotNumber) return;
    
          // Build the payload; add sendToGA:false for every slot ≠ 1
          const payload = {
            type: config.experimentName,
            slot: id
          };
          if (slotNumber !== "1") {
            payload.sendToGA = false;
          }
    
          pushTrackingEvent(`splash${slotNumber}_in_view`, payload);
          obs.unobserve(el);
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });
    
      splashEls.forEach(el => observer.observe(el));
    })();
  

    function getIdsForCurrentPage() {
      const currentUrl = window.location.href;
      let match = page2Resource.urls.find(u => currentUrl.includes(u.url));

      if (match) {
        return match.ids.slice(0, config.numSplashes);
      }

      const allIds = Object.keys(resourceMetadata);
      const shuffled = allIds.slice().sort(() => 0.5 - Math.random());
      const randomIds = shuffled
        .slice(0, config.numSplashes)
        .map(id => ({ id, displayType: 'Tall' }));

      const newEntry = {
        url: currentUrl,
        ids: randomIds
      };
      page2Resource.urls.push(newEntry);
      return randomIds;
    }

    function detectResourceType(url) {
      if (/bitpipe\.com/.test(url))            return 'Bitpipe';
      if (/\bOffer=/.test(url))                 return 'MarketingOffer';
      if (/brighttalk\.com\/webcast/.test(url))  return 'BrightTalk';
      return 'Unknown';
    }

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function getFallbackImageUrl() {
      const rndInt = randomIntFromInterval(1, 60);
      const formattedNumber = rndInt < 10 ? `0${rndInt}` : `${rndInt}`;
      return `https://media.techtarget.com/devUx/custom-1044/hero${formattedNumber}.jpg`;
    }

    function pickRandomResources(n) {
      const keys = Object.keys(resourceMetadata);
      if (n >= keys.length) {
        return keys.map(id => ({ id, displayType: 'Tall' }));
      }
      const shuffled = keys.slice().sort(() => Math.random() - 0.5);
      return shuffled
        .slice(0, n)
        .map(id => ({ id, displayType: 'Tall' }));
    }

    //  Find and return exactly the string that matches one of resourceMetadata’s keys 
function findMatchingTopic(topicsData) {
  var currentTopicName = topicName || window.topicName;
  if (!currentTopicName) {
    console.error('findMatchingTopic: topicName is not defined');
    return null;
  }

  if(fallbackOveride) {
    currentTopicName = fallbackTopic;
  }


  // Search for a matching primaryTopic or distilledTopic
  const matched = topicsData.topics.find(t => 
    t.primaryTopic === currentTopicName || 
    t.distilledTopic === currentTopicName
  );

  if (matched) {
    return matched.distilledTopic;
  } else {
    console.log('findMatchingTopic: no match found for', currentTopicName, '. Replacing with "Careers and Certifications"');
    return "Careers and certifications";
  }
}


    function addQueryParam(key, value) {
        // Select all <a> within #content-body, excluding those inside .o-cyber-pilot-splash
        const links = document.querySelectorAll('#content-body a');
        
        links.forEach(link => {
          if (link.closest('.o-cyber-pilot-splash')) return;
          
          const href = link.getAttribute('href');
          if (!href) return;
      
          const urlObj = new URL(href, window.location.origin);
      
          if (urlObj.searchParams.has(key)) return;
      
          urlObj.searchParams.set(key, value);
      
          link.setAttribute('href', urlObj.toString());
        });
      }
      

    //  Tracking Events 
    //ga4_slot = `optly-cyberPromo-custom-div-${slot}of${idObjs.length}`;
    const currentUrl = window.location.href;
    if (currentUrl.includes('/definition/')) {
      pushTrackingEvent('definitionDisplayed', {type: config.experimentName, page: 'definition', url: currentUrl});
    } else if (/(\/feature\/|\/news\/|\/tip\/|\/answer\/|\/opinion\/)/.test(currentUrl)) {
      pushTrackingEvent('EOCDisplayed', {type: config.experimentName,page: 'EOC', url: currentUrl});      
    }
    $(document).on('click', '.o-cyber-pilot-splash a', function (e) {
      if (currentUrl.includes('/definition/')) {
        const clickedUrl = $(this).attr('href') || '';
        pushTrackingEvent('definitionClicked', {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
      } else if (/(\/feature\/|\/news\/|\/tip\/|\/answer\/|\/opinion\/)/.test(currentUrl)) {
       // ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
        pushTrackingEvent('EOCClicked', {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
      }
    });

    // Content Body Click Handler
    $(document).on('click', '#content-body', function (e) {
      if ($(e.target).closest('.o-cyber-pilot-splash').length) {
        return;
      }
      pushTrackingEvent('contentBody_clicked', { type: config.experimentName, page: 'contentBody',  url: currentUrl, sendToGA: false  });
    });

    // Button click handlers
    $(document).on('click', '.o-btnText', function () {
        //ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
      pushTrackingEvent("splash_btn_clicked", {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
    });
    $(document).on('click', '.o-image-link', function () {
       // ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
      pushTrackingEvent("splash_img_clicked", {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
    });
    $(document).on('click', '.o-title', function () {
      //  ga4_slot   = $(this).closest('section').attr('id') || '';
  const clickedUrl = $(this).attr('href') || '';
      pushTrackingEvent("splash_link_clicked", {  url: clickedUrl, slot: ga4_slot, sendToGA: false});
    });


    //  Fill & Style Promo Logic 
    updatePageContent();
    addSharedClasses();
    moveSplashDivs();
    appendTrackingParams();

    console.log(`${config.experimentName}: all functions executed`);
    pushTrackingEvent("elementsAdded", {sendToGA: false});





  });
});

//  Return a lookup  for whichever topicKey matches 
function getArticlesByTopic(data, topicKey) {
  if (!topicKey) {
    console.warn("getArticlesByTopic: no topicKey provided");
    return {};
  }
  if (data.hasOwnProperty(topicKey)) {
    const arr = data[topicKey];
    const mapById = {};
    arr.forEach(item => { mapById[item.id] = item; });
    return mapById;
  } else {
    console.log(`Topic "${topicKey}" not found in resourceMetadata.`);
    return {};
  }
}

/*
//  Find and return exactly the string that matches one of resourceMetadata’s keys 
function findMatchingTopic(topicsData) {
  if(fallbackOveride) {
    return fallbackTopic;
  }



  const currentTopicName = topicName || window.topicName;
  if (!currentTopicName) {
    console.error('findMatchingTopic: topicName is not defined');
    return null;
  }

  // Search for a matching primaryTopic or distilledTopic
  const matched = topicsData.topics.find(t => 
    t.primaryTopic === currentTopicName || 
    t.distilledTopic === currentTopicName
  );

  if (matched) {
    return matched.distilledTopic;
  } else {
    console.log('findMatchingTopic: no match found for', currentTopicName, '. Replacing with "Careers and Certifications"');
    return "Careers and certifications";
  }
}
*/
}, "dependencies": []}, {"id": "8D2917ED-91F3-45C9-A8BC-C8FA9580B1A1", "type": "append", "selector": "head", "value": "<style>.o-cyber-pilot-splash > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.o-image-link, .o-rightContainer {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 1;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-type {display:none}\nsection.o-cyber-pilot-splash { \n\tmargin:25px 0;\n  padding:20px;\n  clear:right;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,.25);\n  display:flex;\n}\n\n\nsection.o-cyber-pilot-splash:before,\nsection.o-cyber-pilot-splash:after { \n\tclear:both;\n}\n.optlyLandscape .o-rightContainer {\n\t/*margin-left: 260px;*/\n  position: relative;\n}\n.optlyPortrait .o-rightContainer {\n\t/*margin-left: 170px;*/\n  position: relative;\n}\nsection.o-cyber-pilot-splash a {\n  display:block;\n  cursor:pointer !important;\n}\n\nsection.o-cyber-pilot-splash .o-image-link {\n\tposition: absolute;\n  display: inline-block !important;\n  margin-right:20px;\n}\nsection.o-cyber-pilot-splash.optlyLong {\n background: #FFFFFF 0% 0% no-repeat padding-box;\n  opacity: 1;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  color: #323232;\n  /*min-height: 210px*/\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-title:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-title{\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: relative;\n  text-decoration: none;\n  text-transform: none;\n  display: block;\n  color: #007a76;\n}\nsection.o-cyber-pilot-splash .o-summary {\n\tline-height:1.3em;\n  margin-top:10px;\n  margin-bottom:20px;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-summary {\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  list-style: none;\n  font-size: 15px;\n  color: #666;\n  display: block;\n  position: relative;\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText:hover {\n    color: #ffffff;\n  background-color:#323232\n}\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n  color: #fff;\n  height: 40px;\n  width: 255px;\n  line-height: 40px;\n  text-align: center;\n  background-color: teal;\n  text-decoration: none;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  text-align: center;\n  border-radius: 3px;\n  transition: background-color .2s;\n  background: teal;\n  font-size: 14px;\n  font-weight: 700;\n  display:block;\n}\n\n\n#sdef .definition-section section.o-cyber-pilot-splash.optlyLandscape img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyLandscape img {\n  width:  240px !important;\n  max-width:  240px !important;\n  border:1px solid #e3e3e3;\n  max-width: 100%;\n    height: auto;\n    width: 32.5%;\n }\n#sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\n  max-height:  180px !important;\n  width: 100%;\n  border:1px solid #e3e3e3;\n }\n\nsection.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-type {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n}\n/*o-type conditional display*/\nsection.o-cyber-pilot-splash.optlyLong .o-type-top {\npadding-bottom:10px;\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-right {\npadding-bottom:10px;\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-top,\nsection.o-cyber-pilot-splash.optlyLong .o-type-right{\ndisplay:block;\npadding-bottom:10px\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-right,\nsection.o-cyber-pilot-splash.optlyLong .o-type-top{\ndisplay:none;\n}\n/*Short Portrait*/\nsection.o-cyber-pilot-splash.optlyShort .o-type-top,\nsection.o-cyber-pilot-splash.optlyLong .o-type-right{\ndisplay:block;\npadding-bottom:10px\n\n}\nsection.o-cyber-pilot-splash.optlyShort .o-type-right,\nsection.o-cyber-pilot-splash.optlyLong .o-type-top{\ndisplay:none;\n}\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n\tbackground: #E6E6E6 0% 0% no-repeat padding-box;\n  opacity: 1;\n  /*min-height:123px*/\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait p.o-type {\n  font-size: 12px;\n  font-weight: 700;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-summary {\n  display: none\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait img {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  height: auto;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait a.o-btnText {\n  display: none;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-title:hover {\n    color: #323232;\n}\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyPortrait .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n}\n\n\n/*Short Landscape*/\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  background: #f2f2f2;\n  /*min-height:123px;*/\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape p.o-type {\n\n\n  font-size: 12px;\n  font-weight: 700;\n\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-summary {\n\n  display: none\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape img {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape a.o-btnText {\n  display: none;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-title:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyShort.optlyLandscape .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n}\n\n\n/* no orientation optlyLong  */\n\nsection.o-cyber-pilot-splash.optlyLong .o-title:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-title{\n position: relative;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: relative;\n  text-decoration: none;\n  text-transform: none;\n  display: block;\n  color: #007a76;\n  margin: 0;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-summary {\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  list-style: none;\n  font-size: 15px;\n  color: #666;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-btnText:hover {\n    color: #323232;\n}\n\nsection.o-cyber-pilot-splash.optlyLong .o-btnText {\n  color: #fff;\n  height: 40px;\n  width: 255px;\n  line-height: 40px;\n  text-align: center;\n  background-color: teal;\n  text-decoration: none;\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  letter-spacing: -.02em;\n  text-align: center;\n  border-radius: 3px;\n  transition: background-color .2s;\n  background: teal;\n  font-size: 14px;\n  font-weight: 700;\n  display:block;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyLong .o-type {\n   -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  color: #666;\n\n\n}\n\n/* no orientation optlyShort  */\n\nsection.o-cyber-pilot-splash.optlyShort {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  clear: both;\n  background: #f2f2f2;\n}\n\nsection.o-cyber-pilot-splash.optlyShort .o-type {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #666;\n\n}\n\nsection.o-cyber-pilot-splash.optlyShort p.o-type {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort .o-summary {\n\n  display: none\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort a.o-btnText {\n  display: none;\n}\n\nsection.o-cyber-pilot-splash.optlyShort .o-title:hover {\n    color: #323232;\n}\n\n\n\nsection.o-cyber-pilot-splash.optlyShort .o-title {\n  -webkit-text-size-adjust: 100%;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  transition: color .2s;\n  position: static;\n  text-decoration: none;\n  text-transform: none;\n  color: #007a76;\n     \n}\n\n/*PILLAR MAIN */\nsection.o-cyber-pilot-splash.optlyLong.PILLARMain .o-type{\n  /*margin-top: 2.5% !important;*/\n}\n\ndiv.custom-div-2.PILLAR.PILLARMain.o-cyber-pilot-splash.optlyShort.optlyLandscape{\n/*min-height:98px*/\n}\n\n\n/* Media Queries */\n@media screen and (max-width: 1020px) {\n  section.o-cyber-pilot-splash.optlyLong,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape,\n  section.o-cyber-pilot-splash.optlyShort,\n  section.o-cyber-pilot-splash.optlyShort.optlyLandscape {\n    margin: 20px 10px; \n    clear: both\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  \n  #sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\n  max-height: 100% !important;\n  height: 150px;\n  width: auto;\n  border:1px solid #e3e3e3;\n }\n  \n  #sdef .definition-section section.o-cyber-pilot-splash.optlyLandscape img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyLandscape img {\n  border:1px solid #e3e3e3;\n  max-width: 100% !important;\n    height: auto;\n    width: 32.5% !important;\n }\n#sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\n  max-height:  200px !important;\n  border:1px solid #e3e3e3;\n }\n  \n  .optlyLandscape .o-rightContainer {\n    width: 63%;\n    margin-left: 250px;\n    display: block;\n    height: 100%;\n    max-height: min-content;\n    /* flex-direction: column; */\n    float: right;\n}\n \n  .optlyPortrait .o-rightContainer {\n   \n        margin-left: 20%;\n\n}\n  \n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-summary,\n  section.o-cyber-pilot-splash.optlyLong .o-summary {\n    /*font-size: calc(0.8vw + .7px);*/\n}\n  section.o-cyber-pilot-splash.optlyLong .o-btnText,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    /*font-size: calc(0.8vw + 4.1px);*/\n}\n}\n\n@media screen and (max-width: 960px) {\n   \n  .optlyPortrait .o-rightContainer {\n   \n        margin-left: 130px;\n\n}\n  \n section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-summary,\n  section.o-cyber-pilot-splash.optlyLong .o-summary {\n    /*font-size: calc(0.8vw + 4.8px);*/\n    font-size: 14px;\n}\n  section.o-cyber-pilot-splash.optlyLong .o-btnText,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    /*font-size: calc(0.8vw + 5.8px);*/\n}\n\n}\n\n@media screen and (max-width: 480px) {\n#sdef .definition-section section.o-cyber-pilot-splash.optlyLandscape img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyLandscape img,\n  #sdef .definition-section section.o-cyber-pilot-splash.optlyPortrait img,\n.eoc_v2 .content-center section.o-cyber-pilot-splash.optlyPortrait img {\ndisplay:none\n      \n}\n  .optlyPortrait .o-rightContainer, \n  .optlyLandscape .o-rightContainer {\n    width: 100%;\n    float:none;\n    margin:0;\n}\n  \nsection.o-cyber-pilot-splash.optlyLong {\n\n  min-height: auto; \n  }\n   section.o-cyber-pilot-splash.optlyLong .o-btnText,\n  section.o-cyber-pilot-splash.optlyLong.optlyLandscape .o-btnText {\n    height: 40px;\n    width: auto;\n    max-width: 255px;\n    font-weight: 700;\n    display: block;\n    font-size: 14px;\n    /*font-size: calc(0.8vw + 7.8px);*/\n}\n}\n\n.optlyLandscape .o-rightContainer {\n    margin-left: 205px !important;    \n  \tposition: relative !important;\n}\n\n.o-image-link {\n  display: block;\n  height: 110px;\n  width: 180px;\n  border: 1px solid #e3e3e3;\n  background-size: auto 180px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  section.o-cyber-pilot-splash .o-image-link {width:140px;}\n  .optlyLandscape .o-rightContainer {margin-left:160px !important;}\n}\n@media only screen and (max-width: 600px) {\n  section.o-cyber-pilot-splash .o-image-link {width:100px;height:100px;}\n  .optlyLandscape .o-rightContainer {margin-left:120px !important;}\n}\n@media only screen and (max-width: 320px) {\n  section.o-cyber-pilot-splash .o-image-link {width:50px;height:50px;}\n  .optlyLandscape .o-rightContainer {margin-left:65px !important;}\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "F263A1A4-829C-4BE3-8CB5-BB0AD733FF48", "selector": ".custom-div-1 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "6A3C09A7-9102-459C-B52B-FEA99B1D40F1", "selector": ".custom-div-2 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "AA3A52C0-6F76-434E-8F15-D465A0553C70", "selector": ".custom-div-3 a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "B3B64B9D-16B4-4351-9AB7-86FE45090E00", "selector": ".o-btnText"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "D72C2766-7D07-4A40-98FD-A72D90667672", "selector": ".o-title"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "DF49642E-48E1-4622-9B5B-6ACFFAEFC0EB", "selector": ".o-cyber-pilot-splash a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "7B850EBF-4A01-4363-AABA-F04238AFA45B", "selector": ".o-image-link img"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "6362D194-C477-4037-A045-9230A1766C35", "selector": "#content-body a:not(.o-cyber-pilot-splash a)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "1AA353DC-FDB7-4C94-82F5-A0718932ABD1", "selector": "#content-body a"}]}]}], "weightDistributions": [{"entityId": "4902869309063168", "endOfRange": 2000}, {"entityId": "5547384449531904", "endOfRange": 6000}, {"entityId": "6250686350884864", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4608369323933696"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["6458308895178752"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4628725250129920", "name": null, "commitId": "6098686732664832", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204", "17892952386"], "audienceName": null, "changes": null, "id": "4688747673944064", "integrationSettings": null, "variations": [{"id": "5814647580786688", "name": null, "actions": [{"viewId": "5736420669652992", "changes": [{"id": "ab0444ea73cd4be6ac4bf9110bdb3c4e", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w1_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 1 Ready - 5/22/25 1");
    var $                       = window.$,
        DDHasBeenSeen           = false;

    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            pushTrackingEvent("dig_deeper_in_view");
            DDHasBeenSeen = true;
            return;
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
});
}, "dependencies": []}]}]}, {"id": "5480666373029888", "name": null, "actions": [{"viewId": "5736420669652992", "changes": [{"id": "4be2d25fae88438b8edab0ead1039c3e", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w3_";
// var tag_error_message = "none";

function pushTrackingEvent(customEventName, eventProperties = {}) {
  // pull out the two “send” flags so they don't end up in the payload
  var sendToGA      = eventProperties.sendToGA;
  var sendToOptEdge = eventProperties.sendToOptEdge;
  // make a clean copy of the rest
  var props = {};
  Object.keys(eventProperties).forEach(function(key) {
    if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
      props[key] = eventProperties[key];
    }
  });

  //  Optimizely Edge 
  if (sendToOptEdge !== false) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type:       'event',
      eventName:  eventExpName + customEventName,
      properties: props
    });
  }

  //  Google Analytics 4 
  if (sendToGA === false) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  var ga4Payload = {
    event:  'optly_generic',
    type:   eventExpName,
    value1: customEventName
  };

  // allow overriding the "type" field
  if (props.hasOwnProperty('type')) {
    ga4Payload.type = props.type;
  }

  // pull out up to two more values
  var otherKeys = Object.keys(props).filter(function(k) { return k !== 'type'; });
  if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
  if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

  window.dataLayer.push(ga4Payload);
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 3 Variation 4 Ready - 8/18/25 18");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        page_summary            = '',
        currentUrl              = window.location.href,
        recommendationsCompleted = false,
        firstSummaryCompleted    = false,
        endResultPComplete      = false,
        recommendationsToAnalyze;

    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 3: DDIsInViewport');
            pushTrackingEvent("dig_deeper_in_view");
            DDHasBeenSeen = true;
            return;
        }
    }
    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 3: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 3: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
    
    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }

    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }
    // Helper function to log request and error details
    function logRequestError(endpoint, requestData, error, response = null) {
        console.error("Request to endpoint:", endpoint);
        console.error("Request data:", requestData);
        console.error("Error message:", error.message);
        if (response) {
            console.error("Response status:", response.status);
            console.error("Response details:", response);
        }
    }
    

    var libraryContent = {};
    var maxCards = 5;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    var pastDate = new Date(today.setDate(today.getDate() - 1080)).toISOString().split('T')[0]; // Subtract 180 days and format

    function getRecommendations(content) {
        // console.log("Content Recommendations Wave 3: getRecommendations: todayDate " + todayDate + " and pastDate is " + pastDate); // Log the full response object here
        // console.log("Content Recommendations Wave 3: getRecommendations: content " + content); // Log the full response object here

        var inputThis = [];
        inputThis.push(content);

        // console.log("Content Recommendations Wave 3: getRecommendations: inputThis " + inputThis); // Log the full response object here
        
        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            "documents_to_return": maxCards,
            "input_documents": inputThis,
          	"rank_service": "google_semantic_ranker",
            "input_filter": {
                "content_format": ["Web"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
            },
            "metadata": [
                "content_title",
                "content_author",
                "content_web_url",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            // "llm": "claude-3-haiku@20240307",
            // "persist_prompt": true,
            "source": "abtest-genai-contentRecommend"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                // showPagePromptErrors("1");
                $('#DigDeeperSplash').hide();
                pushTrackingEvent("recommendationsResponseErrorShown", {sendToGA: false});
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // console.log("Content Recommendations Wave 3: Recommendation Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                pushTrackingEvent("emptyRecommendationsError", {sendToGA: false});
                // showPagePromptErrors("1");
                console.log("Content Recommendations Wave 3: No recommendations found.");
                $('#DigDeeperSplash').hide();
                // showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                var recommendations = data["input_document 0"].Documents;
                var recommendationsToDisplay = [];
                var newURLs = [];
                var ddIndex = 0;
                var numToReplace = 4;

                $.each(recommendations, function(index) {
                    recommendationsToDisplay.push({
                            "title": recommendations[index].content_title,
                            "urlPath": recommendations[index].content_web_url
                    });
                });

                $('#DigDeeperSplash .dig-deeper-list li').each(function(index){
                    while(ddIndex < recommendations.length && numToReplace > 0){
                        var checkURL = recommendationsToDisplay[ddIndex].urlPath;    

                        if(!checkURL) {
                            ddIndex++;
                            continue;
                        }
                        if(currentUrl.includes(checkURL)){
                            // console.log('Content Recommendations Wave 3: checkURL ' + checkURL + ' is currentUrl ' + currentUrl);
                            ddIndex++;
                            continue;
                        }

                        if(newURLs.includes(checkURL)){
                            // console.log('Content Recommendations Wave 3: checkURL ' + checkURL + ' is part of newURLs');
                            ddIndex++;
                            continue;
                        }

                        // var replacementAuthorByline = "Replaced title(" + $(this).find('h5').text() +")";
                        // $(this).find('.author span').text(replacementAuthorByline);
                        newURLs.push(checkURL);
                        var newTitle = recommendationsToDisplay[ddIndex].title;
                        var replacementURL = recommendationsToDisplay[ddIndex].urlPath;

                        $(this).find('h5').text(newTitle);
                        $(this).find('a').attr('href',replacementURL);
                        $('.author').hide();

                        ddIndex++;
                        numToReplace--;
                        pushTrackingEvent("dd_updated", {sendToGA: false});
                    }

                })                

                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                });

                function transformData(data) {
                    return data.map((item, i) => ({
                        index: i + 1,
                        title: (item.metadata && item.metadata.content_title) || "Untitled",
                        url: (item.metadata && item.metadata.content_web_url) || "No URL",
                        description: (item.top_chunk_text || "No Description").replace(/\n+/g, " ").trim()
                        // description: (item && item.top_chunk_text) || "No Description"
                    }));
                }
                
                recommendationsToAnalyze = transformData(recommendations);
                // console.log("Content Recommendations Wave 3 getRecommendations(): recommendationsToAnalyze is " + recommendationsToAnalyze);
                recommendationsCompleted = true;

                return Promise.all(fetchPromises).then(() => {
                    console.log("Content Recommendations Wave 3: Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data

                    return libraryContent;
                });
            }

        }).catch(error => {
            // console.log("Content Recommendations Wave 3: logFetchError response. caught error... endpoint is " + "endpoint" + " requestOptions is " + requestOptions); // Log the full response object here
            console.error('Error fetching recommendations:', error);
            // tag_error_message = eventExpName + "recommendationsFetchError: " + error;
            $('#DigDeeperSplash').hide();
            pushTrackingEvent('recommendationsFetchError', {
                error: error,
                currentUrl: currentUrl
            });
            // pushTrackingEvent("recommendationsFetchError");
            // showPagePromptErrors("1");
            return null;
        });
    }

    page_summary = getContent();
    getRecommendations(page_summary);
    var cleanrecommendationsToAnalyze;
    var firstThree;

    function waitForRecommendations() {
        if(recommendationsCompleted == true) {
            console.log("Content Recommendations Wave 3: Recommendations completed");
            // console.log("Content Recommendations Wave 3 waitForRecommendations(): recommendationsToAnalyze is " + recommendationsToAnalyze);

            firstThree = recommendationsToAnalyze.slice(0, 5);
            
            console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree is " + firstThree);

            firstThree.forEach(item => {
                console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree Index:", item.index);
                console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree Title:", item.title);
                console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree URL:", item.url);
            });

            try {
                cleanrecommendationsToAnalyze = JSON.stringify(recommendationsToAnalyze); // Will throw if malformed
                // console.log("Valid recommendationsToAnalyze:", cleanrecommendationsToAnalyze);
            } catch (err) {
                console.error("Invalid recommendationsToAnalyze:", err);
            }

            var promptRecommendationsIntoParagraphs = `
                <task>
            <role>
                You are "Research Assistant," an IT-focused assistant designed to analyze and understand the provided technical article and the 3 recommended articles. Summarize these 3 recommended articles into 2 paragraphs that naturally flow as last two paragraphs of the content body of the provided technical article.
            </role>
            <context>
                Analyze the following provided technical article: ${page_summary}
                Analyze the following provided 3 recommended articles: ${recommendationsToAnalyze}
                The recommendationsToAnalyze is a separate list of linkable recommendations, each with index, title, description, and url and can be found here: ${cleanrecommendationsToAnalyze}  
                Each item in recommendationsToAnalyze is an object with these fields:
                - "index": number
                - "title": string
                - "url": string
                - "description": string    
                </context>
            <instructions>
                - Include the title of the 3 recommendations in the final summary.
                - Wrap the title of the recommendation in an anchor tag with the exact URL of that recommendation as the href value.
                - Do NOT create or invent any URLs.
                - Do NOT add or rewrite the text itself — only wrap the title in the anchor tags.
                - Do NOT link the same recommendation more than once.
            </instructions>
            <formatting>
                - Return a JSON object with **exactly these fields**:
                - "linkedResult": (a string containing the two enhanced paragraphs with anchor tags inserted)
                - "usedLinks": (an array of strings, each describing the recommendation used)
                - "first3Links": (an array of strings showing the first three recommendations)
                - Do not return plain text or any explanation. Only return a valid JSON object.
                - Do not summarize. Do not return an array of paragraphs or objects. Wrap the entire response in a JSON object with the above fields.
            </formatting>
            <verification>
                - Ensure all href values match a URL from outputData.
                - Ensure no external links or hallucinations appear.
                - Return nothing except a valid JSON object with exactly the fields "linkedResult", "usedLinks", and "first3Links". Do not return plain text or markdown.
                - If any part of the response does not align with the instructions or fails verification, rewrite the response to fulfill these requirements.
            </verification>
            </task>`;

            function processPrompt(promptText) {
                requestType = 'exact-match-summary';
                const endpoint = 'https://litellm.techtarget.com/chat/completions'; 
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': 'Bearer sk-6k-vXHOlM4J6kwjnRDTqsA',
                        'Authorization': 'Bearer sk-XN0C3gvZKSzcwZZmHNLJEg'
                    },
                    body: JSON.stringify({
                        "model": "gemini-2.0-flash-001",
                        // "messages": promptText,
                        "messages": promptText,
                        "metadata": {
                            "trace_name": "optimizely",
                            "trace_user_id": "Content Recommends - w2",
                            "tags": ["request: " + requestType + "", "gemini-2.0-flash-001"]
                        },
                    })
                };
                return logFetchError(fetch(endpoint, requestOptions), endpoint, requestOptions)
                    .then(response => {
                        // console.log("Content Recommendations Wave 3: logFetchError response. endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
                        if (!response.ok) {
                            pushTrackingEvent("responseErrorShown", {sendToGA: false});
                            $('#DigDeeperSplash').hide();
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        // console.log("Content Recommendations Wave 3: Summary Fetch Response:", response);
                        return response.json();
                    }).then(data => {
                        console.log("Content Recommendations Wave 3: Summary Object:", data); // Log the full response object here
                        // var stringifyData = JSON.stringify(data);
                        return data; // Proceed with the rest of the logic
                    })
                    .catch(error => {
                        console.error('Content Recommendations Wave 3: Error:', error);
                        $('#DigDeeperSplash').hide();
                        pushTrackingEvent('fetchError', {
                            error: error,
                            currentUrl: currentUrl
                        });
                        // pushTrackingEvent("fetchError");
                        return error; // Return the error
                    });
            }

            recommendationsLastParagraphs = [{"content": promptRecommendationsIntoParagraphs, "role": "user"}],

            processPrompt(recommendationsLastParagraphs).then(result => {
                if (result instanceof Error) {
                    console.error('Content Recommendations Wave 3: An error occurred:', result.message);
                    // pushTrackingEvent("responseErrorShown");
                } else {
                    var response = result.choices[0].message.content;
                    // $('<section class="appendedContent processPromptResponse">' + response + '</section>').insertAfter('#content-body');
                    
                    content_summary = response;
                    // original_content = JSON.stringify(content_summary);
                    // console.log('original_content is ' + original_content);
                    endResultPComplete = true;

                    var h2 = '<section class="section main-article-chapter" data-menu-title="More on This"><h2 class="section-title"><i class="icon" data-icon="1"></i>Further Insights</h2><div class="optly-genAI-statement">The content below was generated by AI using Informa TechTarget\'s award-winning IT content.</div></section>'  ;

                    $(h2).appendTo('#content-body');


        
                    const cleanedJsonString = response.replace(/```json|```/g, '').trim();
        
                    // Parse the cleaned JSON string into a JavaScript object
                    var jsonData = JSON.parse(cleanedJsonString);


                    // Output the `endResult`
                    var linkedResult = jsonData.linkedResult;
                    console.log('Content Recommendations Wave 4: linkedResult ' + linkedResult);
                    var usedLinks = jsonData.usedLinks;
                    console.log('Content Recommendations Wave 4: usedLinks ' + usedLinks);
                    var first3Links = jsonData.first3Links;
                    console.log('Content Recommendations Wave 4: first3Links ' + first3Links);
                    $('<p class="linkedResult">' + linkedResult + '</p>').appendTo('#content-body');

                    const validation = validateAnchorUrls(linkedResult, outputData);
                    const cleanedHtml = removeInvalidAnchorsByUrl(linkedResult, validation.invalidUrls);

                    if(hasInvalidURL == true){
                        console.log("Content Recommendations Wave 4: removed urls, inserting new linkedResult");
                        $('p.linkedResult').remove();
                        $('<p class="linkedResult">' + cleanedHtml + '</p>').appendTo('#content-body');    
                    } else {
                        console.log("Content Recommendations Wave 4: no invalid urls");
                    }
                    getAndMoveItalicParagraphs();
                }
            });

            function validateAnchorUrls(htmlString, outputData) {
                // console.log("Content Recommendations Wave 4: validateAnchorUrls " + htmlString + " , " + outputData);
                const validUrls = new Set(outputData.map(item => item.url.trim()));
                const hrefRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>/gi;
                const invalidUrls = [];
                let match;
                
                while ((match = hrefRegex.exec(htmlString)) !== null) {
                    const foundUrl = match[1].trim();
                    if (!validUrls.has(foundUrl)) {
                        invalidUrls.push(foundUrl);
                        hasInvalidURL = true;
                        // Remove anchor tag around this false URL
                    }
                    // console.log("Content Recommendations Wave 4: validUrls " + validUrls);
                    // console.log("Content Recommendations Wave 4: foundUrl " + foundUrl);
                    // console.log("Content Recommendations Wave 4: invalidUrls " + invalidUrls);
                }
                
                return {
                    isValid: invalidUrls.length === 0,
                    invalidUrls: Array.from(invalidUrls)
                };
            }

            function removeInvalidAnchorsByUrl(htmlString, invalidUrls) {
                const invalidSet = new Set(invalidUrls.map(url => url.trim()));
                const anchorRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
                console.log("Content Recommendations Wave 4: removeInvalidAnchorsByUrl " + invalidUrls);
                return htmlString.replace(anchorRegex, (match, href, innerText) => {
                    return invalidSet.has(href.trim()) ? innerText : match;
                });
            }



        } else {
            console.log("Content Recommendations Wave 3: waitForRecommendations waiting");
            setTimeout(waitForRecommendations, 100); // Check every 100ms
        }
    }
    if(recommendationsCompleted == false) {
        waitForRecommendations();
    }

    function waitForEndResult() {
        if (endResultPComplete == true) {
        console.log("Content Recommendations Wave 3: End Result completed");

        // var recommendationsFormatted = JSON.stringify(recommendationsToAnalyze, null, 2);
        console.log("Content Recommendations Wave 3: content_summary is " + content_summary);
        // console.log("Content Recommendations Wave 3 waitForEndResult(): recommendationsToAnalyze is " + recommendationsToAnalyze);

        // var firstThree = recommendationsToAnalyze.slice(0, 5);
        
        // console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree is " + firstThree);

        // firstThree.forEach(item => {
        //     console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree Index:", item.index);
        //     console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree Title:", item.title);
        //     console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree URL:", item.url);
        // });

        // try {
        //     var cleanrecommendationsToAnalyze = JSON.stringify(recommendationsToAnalyze); // Will throw if malformed
        //     console.log("Valid recommendationsToAnalyze:", cleanrecommendationsToAnalyze);
        // } catch (err) {
        //     console.error("Invalid recommendationsToAnalyze:", err);
        // }

        // var endResultAddLinksPromptText = `
        // <task>
        // <role>
        //     You are a semantic linker. Your job is to scan provided text and intelligently insert anchor tags for any semantically relevant concepts that match the titles or descriptions from a recommendation list.
        // </role>

        // <context>
        //     The endResult is the text to enhance with links are here: ${endResult}   
        //     The recommendationsToAnalyze is a separate list of linkable recommendations, each with index, title, description, and url and can be found here: ${cleanrecommendationsToAnalyze}  
        //     Each item in recommendationsToAnalyze is an object with these fields:
        //     - "index": number
        //     - "title": string
        //     - "url": string
        //     - "description": string
        // </context>

        // <instructions>
        //     - Find up to 5 semantically relevant places in the text to add links.
        //     - Only link phrases when the phrase’s meaning and context closely and specifically align with the core topic or focus of a recommendation’s title or description. Do not force a link if the connection is vague, partial, or interpretive; links should feel natural, accurate, and direct based on the article's wording.
        //     - For each anchor tag, use the actual URL from the matching recommendation object.
        //     Do not use the word "url" as a placeholder.
        //     You must copy the exact url value from the recommendation's url field into the href="".
        //     - Do NOT create or invent any URLs.
        //     - Do NOT add or rewrite the text itself — only wrap phrases in anchor tags.
        //     - Do NOT link the same recommendation more than once.
        //     - If no match is found for a recommendation, skip it.
        // </instructions>

        // <formatting>
        //     - Return a JSON object with **exactly these fields**:
        //     - "linkedResult": (a string containing the two enhanced paragraphs with anchor tags inserted)
        //     - "usedLinks": (an array of strings, each describing the recommendation used)
        //     - "first3Links": (an array of strings showing the first five recommendations)
        //     - Do not return plain text or any explanation. Only return a valid JSON object.
        //     - Do not summarize. Do not return an array of paragraphs or objects. Wrap the entire response in a JSON object with the above fields.
        // </formatting>

        // <verification>
        //     - Ensure all href values match a URL from recommendationsToAnalyze.
        //     - Ensure each class uses the correct index (e.g., recommendation-2).
        //     - Ensure no external links or hallucinations appear.
        //     - Return nothing except a valid JSON object with exactly the fields "linkedResult", "usedLinks", and "first3Links". Do not return plain text or markdown.
        // </verification>
        // </task>`;

        // pagePrompt3 = [{"content": endResultAddLinksPromptText, "role": "user"}];

        // processPrompt(pagePrompt3).then(result => {
        //     if (result instanceof Error) {
        //         console.error('Content Recommendations Wave 3: An error occurred for pagePrompt2:', result.message);
        //         // pushTrackingEvent("responseErrorShown");
        //     } else {
        //         var response = result.choices[0].message.content;
        //         console.log("Linked Result from model:", response.linkedResult);
        //         // console.log('Content Recommendations Wave 3: processPrompt response for pagePrompt2' + response);
        //         // $('<section class="appendedContent processPromptResponse2">1. processPrompt response' + response + '</section>').insertAfter('#content-body');

        //         var h2 = '<section class="section main-article-chapter" data-menu-title="More on This"><h2 class="section-title"><i class="icon" data-icon="1"></i>Further Insights</h2><div class="optly-genAI-statement">The content below was generated by AI using Informa TechTarget\'s award-winning IT content.</div></section>'  ;

        //         $(h2).appendTo('#content-body');


    
        //         const cleanedJsonString = response.replace(/```json|```/g, '').trim();
    
        //         // Parse the cleaned JSON string into a JavaScript object
        //         var jsonData = JSON.parse(cleanedJsonString);

        //         // console.log('Content Recommendations Wave 3: jsonData ' + jsonData);
    
        //         // // Output the `endResult`
        //         var linkedResult = jsonData.linkedResult;
        //         console.log('Content Recommendations Wave 3: linkedResult ' + linkedResult);
        //         var usedLinks = jsonData.usedLinks;
        //         console.log('Content Recommendations Wave 3: usedLinks ' + usedLinks);
        //         var first3Links = jsonData.first3Links;
        //         console.log('Content Recommendations Wave 3: first3Links ' + first3Links);
        //         $('<p class="linkedResult">' + linkedResult + '</p>').appendTo('#content-body');

        //         const validation = validateAnchorUrls(linkedResult, recommendationsToAnalyze);
        //         const cleanedHtml = removeInvalidAnchorsByUrl(linkedResult, validation.invalidUrls);

        //         if(hasInvalidURL == true){
        //             console.log("Content Recommendations Wave 3: removed urls, inserting new linkedResult");
        //             $('p.linkedResult').remove();
        //             $('<p class="linkedResult">' + cleanedHtml + '</p>').appendTo('#content-body');    
        //         } else {
        //             console.log("Content Recommendations Wave 3: no invalid urls");
        //         }
        //         getAndMoveItalicParagraphs();
        //     }
        // });
            } else {
            console.log("Content Recommendations Wave 3: waitForEndResult waiting");
            setTimeout(waitForEndResult, 100); // Check every 100ms
        }
    }

    if(endResultPComplete == false) {
        waitForEndResult();
    }


});
}, "dependencies": []}, {"id": "29F01B5F-C919-40F8-90A3-E5209D0DDB40", "type": "append", "selector": "head", "value": "<style>.appendedContent a {\n    text-decoration: underline;\n    color: #007cad;\n}</style>", "dependencies": []}]}]}, {"id": "5439613800546304", "name": null, "actions": [{"viewId": "5736420669652992", "changes": [{"id": "BE8611DA-78FB-429A-8DA2-FB13DD7848CF", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w3_";
// var tag_error_message = "none";

function pushTrackingEvent(customEventName, eventProperties = {}) {
  // pull out the two “send” flags so they don't end up in the payload
  var sendToGA      = eventProperties.sendToGA;
  var sendToOptEdge = eventProperties.sendToOptEdge;
  // make a clean copy of the rest
  var props = {};
  Object.keys(eventProperties).forEach(function(key) {
    if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
      props[key] = eventProperties[key];
    }
  });

  //  Optimizely Edge 
  if (sendToOptEdge !== false) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type:       'event',
      eventName:  eventExpName + customEventName,
      properties: props
    });
  }

  //  Google Analytics 4 
  if (sendToGA === false) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  var ga4Payload = {
    event:  'optly_generic',
    type:   eventExpName,
    value1: customEventName
  };

  // allow overriding the "type" field
  if (props.hasOwnProperty('type')) {
    ga4Payload.type = props.type;
  }

  // pull out up to two more values
  var otherKeys = Object.keys(props).filter(function(k) { return k !== 'type'; });
  if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
  if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

  window.dataLayer.push(ga4Payload);
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 3 Variation 5 Ready - 8/26/25 6");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        page_summary            = '',
        currentUrl              = window.location.href,
        content_summary         = '',
        recommendationsCompleted = false,
        futureKeywordsToQuery   = '',
        endResultPComplete      = false,
        recommendationsToAnalyze;

    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            console.log('Content Recommendations Wave 3: DDIsInViewport');
            pushTrackingEvent("dig_deeper_in_view");
            DDHasBeenSeen = true;
            return;
        }
    }
    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 3: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        console.log('Content Recommendations Wave 3: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
    
    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }

    page_summary = getContent();

    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }
    // Helper function to log request and error details
    function logRequestError(endpoint, requestData, error, response = null) {
        console.error("Request to endpoint:", endpoint);
        console.error("Request data:", requestData);
        console.error("Error message:", error.message);
        if (response) {
            console.error("Response status:", response.status);
            console.error("Response details:", response);
        }
    }
    

    var libraryContent = {};
    var maxCards = 5;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    var pastDate = new Date(today.setDate(today.getDate() - 1080)).toISOString().split('T')[0]; // Subtract 180 days and format

    function getRecommendations(content) {
        // console.log("Content Recommendations Wave 3: getRecommendations: todayDate " + todayDate + " and pastDate is " + pastDate); // Log the full response object here
        // console.log("Content Recommendations Wave 3: getRecommendations: content " + content); // Log the full response object here

        var inputThis = [];
        inputThis.push(content);

        console.log("Content Recommendations Wave 3: getRecommendations: inputThis " + inputThis); // Log the full response object here
        
        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            "documents_to_return": maxCards,
            "input_documents": inputThis,
          	"rank_service": "google_semantic_ranker",
            "input_filter": {
                "content_format": ["Web"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
            },
            "metadata": [
                "content_title",
                "content_author",
                "content_web_url",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            // "llm": "claude-3-haiku@20240307",
            // "persist_prompt": true,
            "source": "abtest-genai-contentRecommend"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                // showPagePromptErrors("1");
                $('#DigDeeperSplash').hide();
                pushTrackingEvent("recommendationsResponseErrorShown", {sendToGA: false});
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // console.log("Content Recommendations Wave 3: Recommendation Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                pushTrackingEvent("emptyRecommendationsError", {sendToGA: false});
                // showPagePromptErrors("1");
                console.log("Content Recommendations Wave 3: No recommendations found.");
                $('#DigDeeperSplash').hide();
                return null;
                // showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                var recommendations = data["input_document 0"].Documents;
                var recommendationsToDisplay = [];
                var newURLs = [];
                var ddIndex = 0;
                var numToReplace = 4;

                $.each(recommendations, function(index) {
                    recommendationsToDisplay.push({
                            "title": recommendations[index].content_title,
                            "urlPath": recommendations[index].content_web_url
                    });
                });

                $('#DigDeeperSplash .dig-deeper-list li').each(function(index){
                    while(ddIndex < recommendations.length && numToReplace > 0){
                        var checkURL = recommendationsToDisplay[ddIndex].urlPath;    

                        if(!checkURL) {
                            ddIndex++;
                            continue;
                        }
                        if(currentUrl.includes(checkURL)){
                            // console.log('Content Recommendations Wave 3: checkURL ' + checkURL + ' is currentUrl ' + currentUrl);
                            ddIndex++;
                            continue;
                        }

                        if(newURLs.includes(checkURL)){
                            // console.log('Content Recommendations Wave 3: checkURL ' + checkURL + ' is part of newURLs');
                            ddIndex++;
                            continue;
                        }

                        // var replacementAuthorByline = "Replaced title(" + $(this).find('h5').text() +")";
                        // $(this).find('.author span').text(replacementAuthorByline);
                        newURLs.push(checkURL);
                        var newTitle = recommendationsToDisplay[ddIndex].title;
                        var replacementURL = recommendationsToDisplay[ddIndex].urlPath;

                        $(this).find('h5').text(newTitle);
                        $(this).find('a').attr('href',replacementURL);
                        $('.author').hide();

                        ddIndex++;
                        numToReplace--;
                        pushTrackingEvent("dd_updated", {sendToGA: false});
                    }

                })                

                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                });

                function transformData(data) {
                    return data.map((item, i) => ({
                        index: i + 1,
                        title: (item.metadata && item.metadata.content_title) || "Untitled",
                        url: (item.metadata && item.metadata.content_web_url) || "No URL",
                        description: (item.top_chunk_text || "No Description").replace(/\n+/g, " ").trim()
                        // description: (item && item.top_chunk_text) || "No Description"
                    }));
                }
                
                recommendationsToAnalyze = transformData(recommendations);
                // console.log("Content Recommendations Wave 3 getRecommendations(): recommendationsToAnalyze is " + recommendationsToAnalyze);
                recommendationsCompleted = true;

                return Promise.all(fetchPromises).then(() => {
                    console.log("Content Recommendations Wave 3: Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data

                    return libraryContent;
                });
            }

        }).catch(error => {
            // console.log("Content Recommendations Wave 3: logFetchError response. caught error... endpoint is " + "endpoint" + " requestOptions is " + requestOptions); // Log the full response object here
            console.error('Error fetching recommendations:', error);
            // tag_error_message = eventExpName + "recommendationsFetchError: " + error;
            $('#DigDeeperSplash').hide();
            pushTrackingEvent('recommendationsFetchError', {
                error: error,
                currentUrl: currentUrl
            });
            // pushTrackingEvent("recommendationsFetchError");
            // showPagePromptErrors("1");
            return null;
        });
    }

    futureKeywords = `
    <task>
    <role>
        You are an IT editorial assistant. Considering this article ${page_summary}, what concepts would a user read next? use keywords to send to recommendations - to find new articles (we want to use keywords to send to recommendations api to find related articles tied to topic areas)
    </role>
    <context>
        The article is here: ${page_summary}
    </context>
    <instructions>
        - Do NOT include any links.
        - Focus on generating keywords based on the concepts a user would read next.
    </instructions>
    <formatting>
        - Return a JSON object with only the field "endResult", containing the two paragraphs as a string.
    </formatting>
    </task>`;

    futureKeywordsPrompt = [{"content": futureKeywords, "role": "user"}];

    processPrompt(futureKeywordsPrompt).then(result => {
        if (result instanceof Error) {
            console.error('Content Recommendations Wave 3: An error occurred for futureKeywordsPrompt:', result.message);
            // pushTrackingEvent("responseErrorShown");
        } else {
            var response = result.choices[0].message.content;
            console.log('Content Recommendations Wave 3: processPrompt response for futureKeywordsPrompt' + response);
            futureKeywordsToQuery = response;
            endResultPComplete = true;
            getRecommendations(futureKeywordsToQuery);
        }
    });

    var cleanrecommendationsToAnalyze;
    var firstThree;

    function processPrompt(promptText) {
        requestType = 'exact-match-summary';
        const endpoint = 'https://litellm.techtarget.com/chat/completions'; 
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer sk-6k-vXHOlM4J6kwjnRDTqsA',
                'Authorization': 'Bearer sk-XN0C3gvZKSzcwZZmHNLJEg'
            },
            body: JSON.stringify({
                "model": "gemini-2.0-flash-001",
                // "messages": promptText,
                "messages": promptText,
                "metadata": {
                    "trace_name": "optimizely",
                    "trace_user_id": "Content Recommends - w2",
                    "tags": ["request: " + requestType + "", "gemini-2.0-flash-001"]
                },
            })
        };
        return logFetchError(fetch(endpoint, requestOptions), endpoint, requestOptions)
            .then(response => {
                // console.log("Content Recommendations Wave 3: logFetchError response. endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
                if (!response.ok) {
                    pushTrackingEvent("responseErrorShown", {sendToGA: false});
                    $('#DigDeeperSplash').hide();
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // console.log("Content Recommendations Wave 3: Summary Fetch Response:", response);
                return response.json();
            }).then(data => {
                console.log("Content Recommendations Wave 3: Summary Object:", data); // Log the full response object here
                // var stringifyData = JSON.stringify(data);
                return data; // Proceed with the rest of the logic
            })
            .catch(error => {
                console.error('Content Recommendations Wave 3: Error:', error);
                $('#DigDeeperSplash').hide();
                pushTrackingEvent('fetchError', {
                    error: error,
                    currentUrl: currentUrl
                });
                // pushTrackingEvent("fetchError");
                return error; // Return the error
            });
    }

    function waitForRecommendations() {
        if(recommendationsCompleted == true) {
            console.log("Content Recommendations Wave 3: Recommendations completed");
            // console.log("Content Recommendations Wave 3 waitForRecommendations(): recommendationsToAnalyze is " + recommendationsToAnalyze);

            firstThree = recommendationsToAnalyze.slice(0, 5);
            
            console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree is " + firstThree);

            firstThree.forEach(item => {
                console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree Index:", item.index);
                console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree Title:", item.title);
                console.log("Content Recommendations Wave 3 waitForRecommendations(): firstThree URL:", item.url);
            });

            try {
                cleanrecommendationsToAnalyze = JSON.stringify(recommendationsToAnalyze); // Will throw if malformed
                // console.log("Valid recommendationsToAnalyze:", cleanrecommendationsToAnalyze);
            } catch (err) {
                console.error("Invalid recommendationsToAnalyze:", err);
            }

            var promptRecommendationsIntoParagraphs = `
                <task>
            <role>
                You are "Research Assistant," an IT-focused assistant designed to analyze and understand the provided technical article and the 3 recommended articles. Summarize these 3 recommended articles into 2 paragraphs that naturally flow as last two paragraphs of the content body of the provided technical article.
            </role>
            <context>
                Analyze the following provided technical article: ${page_summary}
                Analyze the following provided 3 recommended articles: ${recommendationsToAnalyze}
                The recommendationsToAnalyze is a separate list of linkable recommendations, each with index, title, description, and url and can be found here: ${cleanrecommendationsToAnalyze}  
                Each item in recommendationsToAnalyze is an object with these fields:
                - "index": number
                - "title": string
                - "url": string
                - "description": string    
                </context>
            <instructions>
                - Include the title of the 3 recommendations in the final summary.
                - Wrap the title of the recommendation in an anchor tag with the exact URL of that recommendation as the href value.
                - Do NOT create or invent any URLs.
                - Do NOT add or rewrite the text itself — only wrap the title in the anchor tags.
                - Do NOT link the same recommendation more than once.
            </instructions>
            <formatting>
                - Return a JSON object with **exactly these fields**:
                - "linkedResult": (a string containing the two enhanced paragraphs with anchor tags inserted)
                - "usedLinks": (an array of strings, each describing the recommendation used)
                - "first3Links": (an array of strings showing the first three recommendations)
                - Do not return plain text or any explanation. Only return a valid JSON object.
                - Do not summarize. Do not return an array of paragraphs or objects. Wrap the entire response in a JSON object with the above fields.
            </formatting>
            <verification>
                - Ensure all href values match a URL from outputData.
                - Ensure no external links or hallucinations appear.
                - Return nothing except a valid JSON object with exactly the fields "linkedResult", "usedLinks", and "first3Links". Do not return plain text or markdown.
                - If any part of the response does not align with the instructions or fails verification, rewrite the response to fulfill these requirements.
            </verification>
            </task>`;



            recommendationsLastParagraphs = [{"content": promptRecommendationsIntoParagraphs, "role": "user"}],

            processPrompt(recommendationsLastParagraphs).then(result => {
                if (result instanceof Error) {
                    console.error('Content Recommendations Wave 3: An error occurred:', result.message);
                    // pushTrackingEvent("responseErrorShown");
                } else {
                    var response = result.choices[0].message.content;
                    // $('<section class="appendedContent processPromptResponse">' + response + '</section>').insertAfter('#content-body');
                    
                    content_summary = response;
                    // original_content = JSON.stringify(content_summary);
                    // console.log('original_content is ' + original_content);
                    endResultPComplete = true;

                    var h2 = '<section class="section main-article-chapter" data-menu-title="More on This"><h2 class="section-title"><i class="icon" data-icon="1"></i>Further Insights</h2><div class="optly-genAI-statement">The content below was generated by AI using Informa TechTarget\'s award-winning IT content.</div></section>'  ;

                    $(h2).appendTo('#content-body');


        
                    const cleanedJsonString = response.replace(/```json|```/g, '').trim();
        
                    // Parse the cleaned JSON string into a JavaScript object
                    var jsonData = JSON.parse(cleanedJsonString);


                    // Output the `endResult`
                    var linkedResult = jsonData.linkedResult;
                    console.log('Content Recommendations Wave 4: linkedResult ' + linkedResult);
                    var usedLinks = jsonData.usedLinks;
                    console.log('Content Recommendations Wave 4: usedLinks ' + usedLinks);
                    var first3Links = jsonData.first3Links;
                    console.log('Content Recommendations Wave 4: first3Links ' + first3Links);
                    $('<p class="linkedResult">' + linkedResult + '</p>').appendTo('#content-body');

                    const validation = validateAnchorUrls(linkedResult, outputData);
                    const cleanedHtml = removeInvalidAnchorsByUrl(linkedResult, validation.invalidUrls);

                    if(hasInvalidURL == true){
                        console.log("Content Recommendations Wave 4: removed urls, inserting new linkedResult");
                        $('p.linkedResult').remove();
                        $('<p class="linkedResult">' + cleanedHtml + '</p>').appendTo('#content-body');    
                    } else {
                        console.log("Content Recommendations Wave 4: no invalid urls");
                    }
                    getAndMoveItalicParagraphs();
                }
            });

            function validateAnchorUrls(htmlString, outputData) {
                // console.log("Content Recommendations Wave 4: validateAnchorUrls " + htmlString + " , " + outputData);
                const validUrls = new Set(outputData.map(item => item.url.trim()));
                const hrefRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>/gi;
                const invalidUrls = [];
                let match;
                
                while ((match = hrefRegex.exec(htmlString)) !== null) {
                    const foundUrl = match[1].trim();
                    if (!validUrls.has(foundUrl)) {
                        invalidUrls.push(foundUrl);
                        hasInvalidURL = true;
                        // Remove anchor tag around this false URL
                    }
                    // console.log("Content Recommendations Wave 4: validUrls " + validUrls);
                    // console.log("Content Recommendations Wave 4: foundUrl " + foundUrl);
                    // console.log("Content Recommendations Wave 4: invalidUrls " + invalidUrls);
                }
                
                return {
                    isValid: invalidUrls.length === 0,
                    invalidUrls: Array.from(invalidUrls)
                };
            }

            function removeInvalidAnchorsByUrl(htmlString, invalidUrls) {
                const invalidSet = new Set(invalidUrls.map(url => url.trim()));
                const anchorRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
                console.log("Content Recommendations Wave 4: removeInvalidAnchorsByUrl " + invalidUrls);
                return htmlString.replace(anchorRegex, (match, href, innerText) => {
                    return invalidSet.has(href.trim()) ? innerText : match;
                });
            }



        } else {
            console.log("Content Recommendations Wave 3: waitForRecommendations waiting");
            setTimeout(waitForRecommendations, 100); // Check every 100ms
        }
    }
    if(recommendationsCompleted == false) {
        waitForRecommendations();
    }

    function waitForEndResult() {
        if (endResultPComplete == true) {
        console.log("Content Recommendations Wave 3: End Result completed");

        // var recommendationsFormatted = JSON.stringify(recommendationsToAnalyze, null, 2);
        console.log("Content Recommendations Wave 3: content_summary is " + content_summary);
        // console.log("Content Recommendations Wave 3 waitForEndResult(): recommendationsToAnalyze is " + recommendationsToAnalyze);

        // var firstThree = recommendationsToAnalyze.slice(0, 5);
        
        // console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree is " + firstThree);

        // firstThree.forEach(item => {
        //     console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree Index:", item.index);
        //     console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree Title:", item.title);
        //     console.log("Content Recommendations Wave 3 waitForEndResult(): firstThree URL:", item.url);
        // });

        // try {
        //     var cleanrecommendationsToAnalyze = JSON.stringify(recommendationsToAnalyze); // Will throw if malformed
        //     console.log("Valid recommendationsToAnalyze:", cleanrecommendationsToAnalyze);
        // } catch (err) {
        //     console.error("Invalid recommendationsToAnalyze:", err);
        // }

        // var endResultAddLinksPromptText = `
        // <task>
        // <role>
        //     You are a semantic linker. Your job is to scan provided text and intelligently insert anchor tags for any semantically relevant concepts that match the titles or descriptions from a recommendation list.
        // </role>

        // <context>
        //     The endResult is the text to enhance with links are here: ${endResult}   
        //     The recommendationsToAnalyze is a separate list of linkable recommendations, each with index, title, description, and url and can be found here: ${cleanrecommendationsToAnalyze}  
        //     Each item in recommendationsToAnalyze is an object with these fields:
        //     - "index": number
        //     - "title": string
        //     - "url": string
        //     - "description": string
        // </context>

        // <instructions>
        //     - Find up to 5 semantically relevant places in the text to add links.
        //     - Only link phrases when the phrase’s meaning and context closely and specifically align with the core topic or focus of a recommendation’s title or description. Do not force a link if the connection is vague, partial, or interpretive; links should feel natural, accurate, and direct based on the article's wording.
        //     - For each anchor tag, use the actual URL from the matching recommendation object.
        //     Do not use the word "url" as a placeholder.
        //     You must copy the exact url value from the recommendation's url field into the href="".
        //     - Do NOT create or invent any URLs.
        //     - Do NOT add or rewrite the text itself — only wrap phrases in anchor tags.
        //     - Do NOT link the same recommendation more than once.
        //     - If no match is found for a recommendation, skip it.
        // </instructions>

        // <formatting>
        //     - Return a JSON object with **exactly these fields**:
        //     - "linkedResult": (a string containing the two enhanced paragraphs with anchor tags inserted)
        //     - "usedLinks": (an array of strings, each describing the recommendation used)
        //     - "first3Links": (an array of strings showing the first five recommendations)
        //     - Do not return plain text or any explanation. Only return a valid JSON object.
        //     - Do not summarize. Do not return an array of paragraphs or objects. Wrap the entire response in a JSON object with the above fields.
        // </formatting>

        // <verification>
        //     - Ensure all href values match a URL from recommendationsToAnalyze.
        //     - Ensure each class uses the correct index (e.g., recommendation-2).
        //     - Ensure no external links or hallucinations appear.
        //     - Return nothing except a valid JSON object with exactly the fields "linkedResult", "usedLinks", and "first3Links". Do not return plain text or markdown.
        // </verification>
        // </task>`;

        // pagePrompt3 = [{"content": endResultAddLinksPromptText, "role": "user"}];

        // processPrompt(pagePrompt3).then(result => {
        //     if (result instanceof Error) {
        //         console.error('Content Recommendations Wave 3: An error occurred for pagePrompt2:', result.message);
        //         // pushTrackingEvent("responseErrorShown");
        //     } else {
        //         var response = result.choices[0].message.content;
        //         console.log("Linked Result from model:", response.linkedResult);
        //         // console.log('Content Recommendations Wave 3: processPrompt response for pagePrompt2' + response);
        //         // $('<section class="appendedContent processPromptResponse2">1. processPrompt response' + response + '</section>').insertAfter('#content-body');

        //         var h2 = '<section class="section main-article-chapter" data-menu-title="More on This"><h2 class="section-title"><i class="icon" data-icon="1"></i>Further Insights</h2><div class="optly-genAI-statement">The content below was generated by AI using Informa TechTarget\'s award-winning IT content.</div></section>'  ;

        //         $(h2).appendTo('#content-body');


    
        //         const cleanedJsonString = response.replace(/```json|```/g, '').trim();
    
        //         // Parse the cleaned JSON string into a JavaScript object
        //         var jsonData = JSON.parse(cleanedJsonString);

        //         // console.log('Content Recommendations Wave 3: jsonData ' + jsonData);
    
        //         // // Output the `endResult`
        //         var linkedResult = jsonData.linkedResult;
        //         console.log('Content Recommendations Wave 3: linkedResult ' + linkedResult);
        //         var usedLinks = jsonData.usedLinks;
        //         console.log('Content Recommendations Wave 3: usedLinks ' + usedLinks);
        //         var first3Links = jsonData.first3Links;
        //         console.log('Content Recommendations Wave 3: first3Links ' + first3Links);
        //         $('<p class="linkedResult">' + linkedResult + '</p>').appendTo('#content-body');

        //         const validation = validateAnchorUrls(linkedResult, recommendationsToAnalyze);
        //         const cleanedHtml = removeInvalidAnchorsByUrl(linkedResult, validation.invalidUrls);

        //         if(hasInvalidURL == true){
        //             console.log("Content Recommendations Wave 3: removed urls, inserting new linkedResult");
        //             $('p.linkedResult').remove();
        //             $('<p class="linkedResult">' + cleanedHtml + '</p>').appendTo('#content-body');    
        //         } else {
        //             console.log("Content Recommendations Wave 3: no invalid urls");
        //         }
        //         getAndMoveItalicParagraphs();
        //     }
        // });
            } else {
            console.log("Content Recommendations Wave 3: waitForEndResult waiting");
            setTimeout(waitForEndResult, 100); // Check every 100ms
        }
    }

    if(endResultPComplete == false) {
        // waitForEndResult();
    }


});
}, "dependencies": []}, {"id": "EC99A437-6FEF-4F28-A572-D1B94ED82D76", "type": "append", "selector": "head", "value": "<style>.appendedContent a {\n    text-decoration: underline;\n    color: #007cad;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "5439613800546304", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4628725250129920"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5736420669652992"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "4784088645632000", "name": null, "commitId": "4566432655081472", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204"], "audienceName": null, "changes": null, "id": "6458968776638464", "integrationSettings": null, "variations": [{"id": "4640499420626944", "name": null, "actions": [{"viewId": "4699247325478912", "changes": [{"id": "1930b815ca134c93ace03c182b7e0ee9", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w1_";
function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
}

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 1 Ready - 5/22/25 1");
    var $                       = window.$,
        DDHasBeenSeen           = false;

    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            pushTrackingEvent("dig_deeper_in_view");
            DDHasBeenSeen = true;
            return;
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        pushTrackingEvent("content_body_anchor_clicked");
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        pushTrackingEvent("dig_deeper_anchor_clicked");
    });
});
}, "dependencies": []}]}]}, {"id": "5766399327469568", "name": null, "actions": [{"viewId": "4699247325478912", "changes": [{"id": "0d90757f863641838c1ba83d56005435", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w1_";

function pushTrackingEvent(customEventName, eventProperties = {}) {
    // pull out the two “send” flags so they don't end up in the payload
  var sendToGA      = eventProperties.sendToGA;
  var sendToOptEdge = eventProperties.sendToOptEdge;
  // make a clean copy of the rest
  var props = {};
  Object.keys(eventProperties).forEach(function(key) {
    if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
      props[key] = eventProperties[key];
    }
  });

  //  Optimizely Edge 
  if (sendToOptEdge !== false) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type:       'event',
      eventName:  eventExpName + customEventName,
      properties: props
    });
  }

  //  Google Analytics 4 
  if (sendToGA === false) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  var ga4Payload = {
    event:  'optly_generic',
    type:   eventExpName,
    value1: customEventName
  };

  // allow overriding the "type" field
  if (props.hasOwnProperty('type')) {
    ga4Payload.type = props.type;
  }

  // pull out up to two more values
  var otherKeys = Object.keys(props).filter(function(k) { return k !== 'type'; });
  if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
  if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

  window.dataLayer.push(ga4Payload);
}

// function pushTrackingEvent(customEventName) {
//     window.optimizelyEdge = window.optimizelyEdge || [];
//     window.optimizelyEdge.push({
//       type: "event",
//       eventName: eventExpName+customEventName
//     });
// }

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 2 Ready - 8/19/25 1");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        content_summary         = '',
        recommendations,
        currentUrl              = window.location.href;


    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            pushTrackingEvent("dig_deeper_in_view", {sendToGA: false});
            DDHasBeenSeen = true;
            return;
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        // console.log('Content Recommendations Variation 2: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked", {sendToGA: false});
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        // console.log('Content Recommendations Variation 2: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked", {sendToGA: false});
    });


    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }

    var libraryContent          = {},
    maxCards                    = 100,
    today                       = new Date(),
    todayDate                   = today.toISOString().split('T')[0], // Format today to "YYYY-MM-DD"
    pastDate                    = new Date(today.setDate(today.getDate() - 1080)).toISOString().split('T')[0]; // Subtract 180 days and format

    function getRecommendations(content) {
        var inputThis = [];
        inputThis.push(content);

        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            "documents_to_return": maxCards,
            "input_documents": inputThis,
            "rank_score": "max_similarity_score",
            "input_filter": {
                "content_format": ["Web"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
            },
            "metadata": [
                "content_title",
                "content_author",
                "content_web_url",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            // "llm": "claude-3-haiku@20240307",
            "source": "abtest-genai-contentRecommend"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                // showPagePromptErrors("1");
                $('#DigDeeperSplash').hide();
                pushTrackingEvent("recommendationsResponseErrorShown", {sendToGA: false});
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                pushTrackingEvent("emptyRecommendationsError", {sendToGA: false});
                // showPagePromptErrors("1");
                $('#DigDeeperSplash').hide();
                console.log("Content Recommendations Variation 2: No recommendations found.");
                // showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                var recommendations = data["input_document 0"].Documents;
                var recommendationsToDisplay = [];
                var newURLs = [];
                var ddIndex = 0;
                var numToReplace = 4;

                $.each(recommendations, function(index) {
                    recommendationsToDisplay.push({
                            "title": recommendations[index].content_title,
                            "urlPath": recommendations[index].content_web_url
                    });
                });

                var numDDItems = $('#DigDeeperSplash .dig-deeper-list li').length;        
                $('#DigDeeperSplash .dig-deeper-list li').each(function(index){
                    while(ddIndex < recommendations.length && numToReplace > 0){
                        var checkURL = recommendationsToDisplay[ddIndex].urlPath;    

                        if(!checkURL) {
                            ddIndex++;
                            continue;
                        }
                        if(currentUrl.includes(checkURL)){
                            // console.log('Content Recommendations Wave 2: checkURL ' + checkURL + ' is currentUrl ' + currentUrl);
                            ddIndex++;
                            continue;
                        }

                        if(newURLs.includes(checkURL)){
                            // console.log('Content Recommendations Wave 2: checkURL ' + checkURL + ' is part of newURLs');
                            ddIndex++;
                            continue;
                        }

                        // var replacementAuthorByline = "Replaced title(" + $(this).find('h5').text() +")";
                        // $(this).find('.author span').text(replacementAuthorByline);
                        newURLs.push(checkURL);
                        var newTitle = recommendationsToDisplay[ddIndex].title;
                        var replacementURL = recommendationsToDisplay[ddIndex].urlPath;

                        $(this).find('h5').text(newTitle);
                        $(this).find('a').attr('href',replacementURL);
                        $('.author').hide();

                        ddIndex++;
                        numToReplace--;
                        pushTrackingEvent("dd_updated", {sendToGA: false});
                    }

                })                

                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                });

                return Promise.all(fetchPromises).then(() => {
                    console.log("Content Recommendations Wave 2: Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data

                    return libraryContent;
                });
            }

        }).catch(error => {
            // console.log("Content Recommendations Variation 2: logFetchError response. caught error... endpoint is " + "endpoint" + " requestOptions is " + "requestOptions"); // Log the full response object here
            console.error('Error fetching recommendations:', error);
            $('#DigDeeperSplash').hide();
            pushTrackingEvent('recommendationsFetchError', {
                // error: error,
                currentUrl: currentUrl
            });
            // pushTrackingEvent("recommendationsFetchError");
            // showPagePromptErrors("1");
            return null;
        });
    }

    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }

    content_summary = getContent();
    getRecommendations(content_summary);
});
}, "dependencies": []}]}]}, {"id": "4551005992386560", "name": null, "actions": [{"viewId": "4699247325478912", "changes": [{"id": "88e693cd43d34fcb9b4116b93874ec3c", "type": "custom_code", "value": function($){var eventExpName = "abt_genai_contentRec_w1_";
// var tag_error_message = "none";

function pushTrackingEvent(customEventName, eventProperties = {}) {
    // pull out the two “send” flags so they don't end up in the payload
  var sendToGA      = eventProperties.sendToGA;
  var sendToOptEdge = eventProperties.sendToOptEdge;
  // make a clean copy of the rest
  var props = {};
  Object.keys(eventProperties).forEach(function(key) {
    if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
      props[key] = eventProperties[key];
    }
  });

  //  Optimizely Edge 
  if (sendToOptEdge !== false) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type:       'event',
      eventName:  eventExpName + customEventName,
      properties: props
    });
  }

  //  Google Analytics 4 
  if (sendToGA === false) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  var ga4Payload = {
    event:  'optly_generic',
    type:   eventExpName,
    value1: customEventName
  };

  // allow overriding the "type" field
  if (props.hasOwnProperty('type')) {
    ga4Payload.type = props.type;
  }

  // pull out up to two more values
  var otherKeys = Object.keys(props).filter(function(k) { return k !== 'type'; });
  if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
  if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

  window.dataLayer.push(ga4Payload);
}

// function pushTrackingEvent(customEventName) {
//     window.optimizelyEdge = window.optimizelyEdge || [];
//     window.optimizelyEdge.push({
//     type: "event",
//     eventName: eventExpName+customEventName,
//     });
// }

$(document).ready(function() {
    console.log("Content Recommendations Wave 2 Variation 3b Ready - 7/29/25 1");
    var $                       = window.$,
        DDHasBeenSeen           = false,
        content_summary         = '',
        requestType,
        recommendations,
        pagePrompt,
        currentUrl              = window.location.href;

    function moveDigDeeper() {
        $('#DigDeeperSplash').insertAfter('#content-body');
        // $('#DigDeeperSplash .section-title').append('<span style="color: red;">Experiment 3B</span>');
    }
    moveDigDeeper();

    function DDIsInViewport() {
        var elem = $('#DigDeeperSplash').first();
        var elemTop = elem.offset().top;
        var bottom_of_element = elemTop + elem.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if (!DDHasBeenSeen && (bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element)){
            pushTrackingEvent("dig_deeper_in_view", {sendToGA: false});
            DDHasBeenSeen = true;
            return;
        }
    }

    $(window).scroll(function () {
        DDIsInViewport();
    });

    $('#content-center a').not('#DigDeeperSplash a').on('click', function(event) {
        // console.log('Content Recommendations Variation 2: content_body_anchor_clicked');
        pushTrackingEvent("content_body_anchor_clicked", {sendToGA: false});
    });

    $('#DigDeeperSplash a').on('click', function(event) {
        // console.log('Content Recommendations Variation 2: dig_deeper_anchor_clicked');
        pushTrackingEvent("dig_deeper_anchor_clicked", {sendToGA: false});
    });

    function getContent() {
        var element = document.getElementById('content-body');
        return element ? element.textContent : '';
    }
    var page_summary = getContent();
	
  // The article is here: ${page_summary}. The questions should not be too niche where only a section of the article answers the question but specific enough to the article general topic coverage.
  
  
    var promptText = `
        <task>
      <role>
        You are "Research Assistant," an IT-focused assistant designed to analyze and understand the provided technical article. 
      </role>
      <context>
      Please analyze the following content and provide: 1. Identify 5-7 related topics or concepts that would be logical next areas to explore based on this content 2. For each suggested topic, briefly explain why it connects to the original content and what additional value it might provide 3. Suggest 2-3 specific questions that could guide further research into these related areas Content to analyze:${page_summary}
       </context>
      <formatting>
        - Return the response in JSON format.
      </formatting>
      <verification>
        - If any part of the response does not align with the instructions or fails verification, rewrite the response to fulfill these requirements.
      </verification>
    </task>`;

    function processPrompt(promptText) {
        requestType = 'forward-thinking-questions';
        const endpoint = 'https://litellm.techtarget.com/chat/completions'; 
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer sk-6k-vXHOlM4J6kwjnRDTqsA',
                'Authorization': 'Bearer sk-XN0C3gvZKSzcwZZmHNLJEg'
            },
            body: JSON.stringify({
                "model": "gemini-2.0-flash-001",
                // "messages": promptText,
                "messages": promptText,
                "metadata": {
                    "trace_name": "optimizely",
                    "trace_user_id": "Content Recommends - w2",
                    "tags": ["request: " + requestType + "", "gemini-2.0-flash-001"]
                },
            })
        };
        return logFetchError(fetch(endpoint, requestOptions), endpoint, requestOptions)
            .then(response => {
                // console.log("Content Recommendations Wave 2: logFetchError response. endpoint is " + endpoint + " requestOptions is " + requestOptions); // Log the full response object here
                if (!response.ok) {
                    pushTrackingEvent("responseErrorShown", {sendToGA: false});
                    $('#DigDeeperSplash').hide();
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // console.log("Content Recommendations Wave 2: Summary Fetch Response:", response);
                return response.json();
            }).then(data => {
                // console.log("Content Recommendations Wave 2: Summary Object:", data); // Log the full response object here
                // var stringifyData = JSON.stringify(data);
                return data; // Proceed with the rest of the logic
            })
            .catch(error => {
                console.error('Content Recommendations Wave 2: Error:', error);
                $('#DigDeeperSplash').hide();
                pushTrackingEvent('fetchError', {
                    // error: error,
                    currentUrl: currentUrl
                });
                // pushTrackingEvent("fetchError");
                return error; // Return the error
            });
    }
    function logFetchError(fetchPromise, endpoint, requestData) {
        return fetchPromise.catch(error => {
            logRequestError(endpoint, requestData, error);
            throw error; // Rethrow the error to maintain original behavior
        });
    }

    // Helper function to log request and error details
    function logRequestError(endpoint, requestData, error, response = null) {
        console.error("Request to endpoint:", endpoint);
        console.error("Request data:", requestData);
        console.error("Error message:", error.message);
        if (response) {
            console.error("Response status:", response.status);
            console.error("Response details:", response);
        }
    }
    
    var libraryContent = {};
    var maxCards = 100;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    // var pastDate = new Date(today.setDate(today.getDate() - 540)).toISOString().split('T')[0]; // Subtract 180 days and format
    var pastDate = new Date(today.setDate(today.getDate() - 1080)).toISOString().split('T')[0]; // Subtract 180 days and format

    function getRecommendations(content) {
        console.log("Content Recommendations Wave 2: getRecommendations: todayDate " + todayDate + " and pastDate is " + pastDate); // Log the full response object here
        console.log("Content Recommendations Wave 2: getRecommendations: content " + content); // Log the full response object here
        console.log("Content Recommendations Wave 2: getRecommendations: page_summary " + page_summary); // Log the full response object here

        var inputThis = [];
        inputThis.push(content);
        inputThis.push(page_summary);
        
        console.log("Content Recommendations Wave 2: getRecommendations: inputThis " + inputThis); // Log the full response object here


        var requestBody = {
            "input_document_type": "document_snippet", // Original request
            "documents_to_return": maxCards,
            "input_documents": inputThis,
          	//"rank_score": "max_similarity_score",  
          	"rank_service": "google_semantic_ranker",
            "input_filter": {
                "content_format": ["Web"],  // Adjust for content format ("text", "pdf", "Video") ["PDF", "Video"]
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""], // Adjust for date window
                "content_language": ["en"], // Adjust for langauge ("fr", "es")
            },
            "metadata": [
                "content_title",
                "content_author",
                "content_web_url",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            // "llm": "claude-3-haiku@20240307",
            // "persist_prompt": true,
            "source": "abtest-genai-contentRecommend"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody
        ).then(response => {
            if (!response.ok) {
                // showPagePromptErrors("1");
                $('#DigDeeperSplash').hide();
                pushTrackingEvent("recommendationsResponseErrorShown", {sendToGA: false});
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // console.log("Content Recommendations Wave 2: Recommendation Fetch Response:", response);
            return response.json();
        }).then(data => {
            if (!data || data["input_document 0"].Documents.length === 0) {
                pushTrackingEvent("emptyRecommendationsError", {sendToGA: false});
                // showPagePromptErrors("1");
                console.log("Content Recommendations Wave 2: No recommendations found.");
                $('#DigDeeperSplash').hide();
                // showSystemResponse("Sorry, I'm not able to recommend any content");
            } else {
                var recommendations = data["input_document 0"].Documents;
                var recommendationsToDisplay = [];
                var newURLs = [];
                var ddIndex = 0;
                var numToReplace = 4;

                $.each(recommendations, function(index) {
                    recommendationsToDisplay.push({
                            "title": recommendations[index].content_title,
                            "urlPath": recommendations[index].content_web_url
                    });
                });

                var numDDItems = $('#DigDeeperSplash .dig-deeper-list li').length;        
                $('#DigDeeperSplash .dig-deeper-list li').each(function(index){
                    while(ddIndex < recommendations.length && numToReplace > 0){
                        var checkURL = recommendationsToDisplay[ddIndex].urlPath;    

                        if(!checkURL) {
                            ddIndex++;
                            continue;
                        }
                        if(currentUrl.includes(checkURL)){
                            // console.log('Content Recommendations Wave 2: checkURL ' + checkURL + ' is currentUrl ' + currentUrl);
                            ddIndex++;
                            continue;
                        }

                        if(newURLs.includes(checkURL)){
                            // console.log('Content Recommendations Wave 2: checkURL ' + checkURL + ' is part of newURLs');
                            ddIndex++;
                            continue;
                        }

                        // var replacementAuthorByline = "Replaced title(" + $(this).find('h5').text() +")";
                        // $(this).find('.author span').text(replacementAuthorByline);
                        newURLs.push(checkURL);
                        var newTitle = recommendationsToDisplay[ddIndex].title;
                        var replacementURL = recommendationsToDisplay[ddIndex].urlPath;

                        $(this).find('h5').text(newTitle);
                        $(this).find('a').attr('href',replacementURL);
                        $('.author').hide();

                        ddIndex++;
                        numToReplace--;
                        pushTrackingEvent("dd_updated", {sendToGA: false});
                    }

                })                

                var contentKeys = [];
                var fetchPromises = recommendations.map(doc => {
                    var contentURL = doc.content_web_url;
                });

                return Promise.all(fetchPromises).then(() => {
                    console.log("Content Recommendations Wave 2: Mapped libraryContent:", libraryContent);
                    // The libraryContent is now ready with processed data

                    return libraryContent;
                });
            }

        }).catch(error => {
            // console.log("Content Recommendations Wave 2: logFetchError response. caught error... endpoint is " + "endpoint" + " requestOptions is " + requestOptions); // Log the full response object here
            console.error('Error fetching recommendations:', error);
            // tag_error_message = eventExpName + "recommendationsFetchError: " + error;
            $('#DigDeeperSplash').hide();
            pushTrackingEvent('recommendationsFetchError', {
                // error: error,
                currentUrl: currentUrl
            });
            // pushTrackingEvent("recommendationsFetchError");
            // showPagePromptErrors("1");
            return null;
        });
    }

    pagePrompt = [{"content": promptText, "role": "user"}],

    processPrompt(pagePrompt).then(result => {
        if (result instanceof Error) {
            console.error('Content Recommendations Wave 2: An error occurred:', result.message);
            // pushTrackingEvent("responseErrorShown");
        } else {
            var response = result.choices[0].message.content;
            console.log('Content Recommendations Wave 2: processPrompt response ' + response);
            // $('<section class="appendedContent processPromptResponse">1. processPrompt response' + response + '</section>').insertAfter('#content-body');

            content_summary = response;
            getRecommendations(content_summary);
        }
    });
});
}, "dependencies": []}, {"id": "64c11091de5c4ab48ec7bb211890146d", "type": "append", "selector": "head", "value": "<style>.appendedContent {\n    border: 1px solid #000;\n    padding: 10px;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "4640499420626944", "endOfRange": 3400}, {"entityId": "5766399327469568", "endOfRange": 6700}, {"entityId": "4551005992386560", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "4784088645632000"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4699247325478912"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "5231319630741504", "name": null, "commitId": "6471171986685952", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204"], "audienceName": null, "changes": null, "id": "5183303104331776", "integrationSettings": null, "variations": [{"id": "6014542283538432", "name": null, "actions": [{"viewId": "4740162995879936", "changes": [{"id": "459de566dd34453d8d8f92e8bbd69b42", "type": "custom_code", "value": function($){//  GLOBALS 
var eventExpName = "genai_Search_";
var promoCode    = "genai_search_ctrl";

var utm_medium   = "web";
var utm_source   = "techtarget-teal";
var utm_campaign = "genai_search_ctrl";

jQuery(function($) {

  // OFFER/ASRC
  function updatePromoParam(href) {
    var isHubOrBitpipe = href.includes('www.techtarget.com/hub/') || href.includes('bitpipe.com');
    var paramName      = isHubOrBitpipe ? 'asrc' : 'Offer';
    var otherName      = isHubOrBitpipe ? 'Offer' : paramName;

    var hasOther = new RegExp('([?&])' + otherName + '=', 'i').test(href);
    var hasParam = new RegExp('([?&])' + paramName + '=', 'i').test(href);

    if (isHubOrBitpipe && hasOther) {
      href = href.replace(
        new RegExp('([?&])' + otherName + '=', 'i'),
        '$1' + paramName + '='
      );
    }
    else if (!hasParam) {
      var sep = href.indexOf('?') > -1 ? '&' : '?';
      href = href + sep + paramName + '=' + promoCode;
    }

    return href;
  }

  //  UTMs
function appendUtmParams(href) {
  try {
    const url = new URL(href, window.location.href);
    // if it's a BrightTALK link, switch medium
    const medium = url.hostname.includes("brighttalk.com")
      ? "BRIGHTTALK4"
      : utm_medium;

    url.searchParams.set("utm_medium",   medium);
    url.searchParams.set("utm_source",   utm_source);
    url.searchParams.set("utm_campaign", utm_campaign);
    return url.toString();
  } catch (e) {
    return href;
  }
}


  function processAllLinks() {
    $('a').each(function() {
      var $link = $(this);
      var href  = $link.attr('href');
      if (!href || href.indexOf('#')   === 0 || href.indexOf('mailto:') === 0) {
        return;
      }
      href = updatePromoParam(href);
      href = appendUtmParams(href);
      $link.attr('href', href);
    });
  }
  processAllLinks();

  var linkSelector = 'a';
  $(document).on('click contextmenu', linkSelector, function(e) {
    var $link = $(this);
    var href  = $link.attr('href');
    if (!href || href.indexOf('#')   === 0 || href.indexOf('mailto:') === 0) {
      return; // ignore anchors & mailto:
    }

    href = updatePromoParam(href);
    href = appendUtmParams(href);

    e.preventDefault();
    $link.attr('href', href);
    if (e.type === 'click') {
      window.location = href;
    }
  });

  $(document).on('click', '.search-results-load-more, .header-search-submit', function() {
    setTimeout(processAllLinks, 100);
  });

});
}, "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "83abc010b3424cee907c87fb92f49b2c", "selector": "#main-content a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "1f8a7d5108cf43d78835e4a3461c9690", "selector": ".header-search-submit"}]}]}, {"id": "6309203011174400", "name": null, "actions": [{"viewId": "4740162995879936", "changes": [{"id": "2bc607ef7bd34f98bdd6083262bf0e02", "type": "custom_code", "value": function($){console.log("(GenAI) Search - Start variation");

$(document).ready(function () {
    console.log("Document Ready - Initializing Search Form Handling");



    //  CONFIGS 
    var maxContextDocuments = 50;
    var documentsToUse = 10;
    var minDocRelevancy = 0.4;
    var maxCards = 50;
    var promoCode = "ab_genaisearch_var";
    var interactionCount = parseInt(localStorage.getItem('interactionCount')) || 0;
    var maxChatHistory = 5;
    var today = new Date();
    var todayDate = today.toISOString().split('T')[0]; // Format today to "YYYY-MM-DD"
    // var pastDate = new Date(today.setDate(today.getDate() - 540)).toISOString().split('T')[0]; // Subtract 180 days and format
    var defaultDays = 540;
    var now = new Date();
    var pastDate = new Date(now.setDate(now.getDate() - defaultDays)).toISOString().split('T')[0];
    var asrc = "ab_genaisearch_var";  											 // ASRC value
    var utm_medium = "web"; 													// UTM medium value
    var utm_source = "techtarget-teal"; 										 // UTM source value
    var utm_campaign = "ab_genaisearch_var"; 							// UTM campaign value
    var eventExpName = "genai_Search_";             // used for custom event tracking
    var sessionManagementKey = 'sessionManagement';
    var contextStorageKey = 'contextStorage';
    var sessionTimer = 2 * 60 * 60 * 1000;           // 2 hours in milliseconds
    var sessionData = JSON.parse(localStorage.getItem(sessionManagementKey));
    var interactionCount = parseInt(localStorage.getItem('interactionCount')) || 0;
    var storedSearchTerm = localStorage.getItem('searchTerm');
    var minDocCount = 1;
    var promoCode = "ab_genaisearch_var";          // appended to links/urls for PV. and N2N tracking
    var offerCode = "?Offer=" + promoCode;
    var offer = "ab_genaisearch_var";
    var authBearer = 'Bearer sk-_alQs5SKdgsEAy3xXW9haQ';
    var placeholderImage = getFallbackImageUrl() || "https://cdn.ttgtmedia.com/visuals/digdeeper/1.jpg";
    var uid2;
    var maxUserSubmits;
    var embeds;
    var buttonDelay = 2000; 													//expand initial button after this many seconds (5000 = 5 seconds)
    var minDocThreshold = 0.4;                           // minimum relevancy score to display a systemOptions 
    var maxValidOptions = 2;                            // maximum number of systemOptions above the relevancy threshold that get shown
    var minRagRelevancy = 0.4;                            // minimum relevancy score to show content card/add to content library
    var documentsToUse = 10;													// number of retrieved documents for chat to use when answering question
    var maxContextDocuments = 50;										// max number of documents to request from context fetch 
    var systemOptionClickCountAsSubmit = false;      // config that ifc set to true, makes clicks on system suggested responses count towards user submits
    var maxChatHistory = 5; 															// how far back in the conversation the chat history should go when it is included
    var maxCharCount = 400;                          // max number of characters we want to allow the user to submit
    var maxLibraryContent = 2;                       // max number of recommended items that we want to display to a user in the interface
    var promptText;
    let citationCounter = 1;
    const DISABLED_CLASS = 'btn--disabled';
    var mobileBreakpoint = 960;                   // px threshold for “sized down” ad logic
    var adSelector = 'div.ad-wrapper.ad-inline.ad-mobile, div.ad-wrapper.ad-inline.ad-x-desktop-w'; //ads targeted by “sized down” ad logic
    var loadingTimeoutMs = 90 * 1000;      // 90 seconds timeout for loading blur
    var latestSearch;

    //  FLAGS 
    var shouldFetchRecommendations = true;
    var clearChatHistoryEnabled = false;
    var removeRankServiceEnabled = false;
    var chatComplete = true;
    var blankSearch = true;
    var oldInputShown = true;
    var hideAdsOnResize = true;                     // toggle this on/off to enable the ads on resize
    var useTechnicalError = false;
    let __aiDisplayedOnce = false;

    //  VARIABLES 
    var referenceMetadata = [];
    let fetchedSummaries = {};
    var systemOptions = [];
    var documentMetadata = [];
    var currentChatHistory = [];
    var completeChatHistory = [];
    var referenceList = [];
    var contentUrls = [];
    var charCount = 0;                               // number of characters currently counted in input. We want this to be 0 to start
    var isMem;                                       // if user is site member
    var isMemProtected;                              // if page has inline reg/member protection
    var recommendUrls;
    var parsedResponse;
    var summaryNoCitations;
    var processedSummary;
    var context;
    var extractImageUrls;
    var currentChatHistory;
    var completeChatHistory = [];
    var documentMetadata = [];
    var referenceMetadata = [];
    var pageFeatures = [];                           // Array to store all features links in DOM for default display of Content Library
    var pageSystemResponseCounter = 1;               // this counter is used to append to system generated clickable questions and append to the "user" display of those questions after they are clicked to allow a user to click on a past question and anchor to the question; defaults to 1 per pageview.
    //  var remainingUserSubmits = maxUserSubmits;   // for initial load, we want remaining user submits to be the max config
    var contentLibraryHistory = [];                  // Array to store all content recommended to the user. Used to grab latest two.
    var systemOptionsSubmitted = [];                 // Array to store system responses submitted by user -> used for context
    var systemOptionsNotClicked = [];                // Object to store system responses not yet clicked by user to display again
    const clickedOptions = new Set();
    //var maxUserSubmits = sessionStorage.getItem('maxUserSubmits') ? parseInt(sessionStorage.getItem('maxUserSubmits')) : 2; // max times a user can submit chat (note: need to determine if we need toset this per session/per page??
    var remainingUserSubmits = localStorage.getItem('remainingUserSubmits') ? parseInt(localStorage.getItem('remainingUserSubmits')) : maxUserSubmits; // for initial load, we want remaining user submits to be the max config
    var existingInteractions = JSON.parse(sessionStorage.getItem('chatInteractions')) || [];
    var currentPageURL = window.location.href;
    var currentPageSummary = '';
    var newText;
    var constructedImageUrl;
    var contentKeys = [];
    var contentUrls = [];
    var currentChatQuestions = [];
    var recommendUrls = [];
    var chatData;
    var lastQuery = "";
    var libraryContent = {};
    var citations = [];
    var card;
    var evaluationFailed;
    var documentsJson;
    var userInputOriginal;
    var currentChatQuestions = [];
    var libraryContent2 = [];
    var validSystemOptions = [];
    var allSystemOptions = [];
    // Additional RAGAS criteria toggles
    var additionalCriteriaFlags = {
        instruction_compliance: false,
        citation_faithfulness: false,
        faithfulness: false,
        answer_relevancy: false,
        context_recall: false,
        context_relevancy: false,
        user_restrictions: false,
        citation_exists: false
    };
    let matchedCitations = [];
    let processedRecommendations = [];
    const SUGGESTED_QUESTIONS = [ "What are the top CIO skills?",
"What are the top CISO skills?",
"How do I manage legacy systems while innovating?",
"How can I create a digital transformation roadmap?",
"What is the AI impact on IT teams?",
"How do I prevent security team burnout?",
"How do I implement zero trust security?",
"What are the best IT governance frameworks?",
"How do I align data strategy with business goals?",
"How do I manage hybrid workforce challenges?",
"Please provide a technology budget planning template?",
"What are the latest cloud security best practices?",
"How do I manage a multi cloud security strategy?",
"What are the storage requirements for AI workloads?",
"What are the networking requirements for AI workloads?",
"Please provide data governance guidelines for AI?",
"Please provide a cloud security automation tools comparison?",
"Compare enterprise cloud storage options?",
"How do I reduce cloud costs?",
"How do I integrate AI into data center management?",
"How do I optimize our data center for AI workloads?",
"How do I defend against AI powered security attacks?",
"What are container security best practices?",
"What are the top cloud security management tools?",
"Provide a plan to implement zero trust step by step?",
"What are the GDPR compliance requirements?",
"How do I secure data across hybrid environments?",
"What are the emerging cybersecurity threats?",
"How do AI agents compare to RPA?",
"Provide information on cloud security posture management?",
"Provide an AI security risk assessment template?",
"Provide a devops implementation guide?",
"What are the top AI devops tools?",
"How can I modernize legacy apps?",
"How can I simplify kubernetes management?",
"What are the top devops challenges?",
"What are the top supply chain security tools?",
"What are the best tools for container monitoring?",
"How do I create an effective security policy?",
"What are the benefits of devsecops?",
"What is the difference between AI and machine learning?",
"How is AI being adopted in networking?",
"What AI models are best for enterprises?",
"How do I create a disaster recovery plan?",
"What is a microservices architecture?",
"How do I implement data backup best practices?",
"What are some practical uses of augmented intelligence?",
"Provide examples of agentic AI use in enterprises?",
"What are the top AI data center management tools?",
"Provide an AI governance framework template?",
"What are the benefits of digital transformation?",
"How do I build an incident response plan?",
"How do I control cloud costs?",
"How do I reduce IT infrastructure costs?",
"What are the top IT risk management tools?",
"What do I need to know about edge computing?",
"How does quantum computing work?",
"How does Chatgpt compare to Gemini and Claude?",
"What are the top large language models?",
"How do I choose the right LLM?",
"Should I use an open source AI model?"
];
      
      
    var optionText; // Global for the current option being processed
    var errorHtmlChat1 = `<div class="ai-error-container"><div class="ai-error-content"><h2>Your search for "` + latestSearch + `" returned no results.</h2><p>Try rephrasing your query using complete sentences or breaking down complex queries into simpler ones. You can ask questions in a conversational way, just as you would ask a colleague.</p><p class="ai-error-suggestions">Here are a few suggestions:</p><ul class="ai-error-suggestions-list"><li>"How can implementing AI reduce our operational costs?"</li><li>"What products or tools should we use for monitoring distributed systems?"</li><li>"What is containerization and how does it work?"</li></ul></div></div>`;
    var errorHtmlChat2 = `<div class="ai-error-container"><div class="ai-error-icon"></div><div class="ai-error-content"><h2>We’re sorry!</h2><p>We’re having technical difficulties. Please try again later.</p></div></div>`;
    //var blankHtmlChat = `<div class="ai-error-container"><div class="ai-error-content"><h2>What would you like to research today?</h2><p class="ai-error-suggestions">Here are a few suggestions:</p><ul class="ai-error-suggestions-list"><li>"How can implementing AI help reduce operational costs?"</li><li>"How can machine learning enhance our decision-making process?"</li><li>"What is containerization and why is it important?"</li></ul></div></div>`;
    var blankHtmlChat = buildBlankHtmlChat();
    var errorObject = [{
        "errorCode": "1",
        "errorHtmlChat": `
    <div class="ai-error-container">
      <div class="ai-error-icon"></div>
      <div class="ai-error-content">
        <h2>We’re sorry!</h2>
        <p>Your search returned no results. Double check your search term for errors or try a different search term</p>
      </div>
    </div>
  `,
        // The form/inline version of the error message
        "errorHtmlForm": `
    <div class="ai-error-container">
      <div class="ai-error-icon"></div>
      <div class="ai-error-content">
        <h2>We’re sorry!</h2>
        <p>Your search returned no results. Double check your search term for errors or try a different search term.</p>
      </div>
    </div>
  `
    }
    ];
    const tabDescriptors = {
        'terms-tab': 'Quick definitions of the most important terms for your query.',
        'whitepapers-tab': 'In-depth eGuides, webcasts and white papers to dive deeper.',
        'news-tab': 'The latest news stories related to your search topic.',
        'tips-tab': 'Expert tips & tricks to help you implement best practices.',
        'features-tab': 'Featured articles and analysis handpicked by our editors.',
        'answers-tab': 'Short Q&A style answers to common questions.'
    };
    const openEndedPatterns = [
        /which (is|one|option|choice|of these|of those|is faster|should I choose)/i,
        /what should I (choose|do)/i,
        /can you clarify/i,
        /do you think/i,
        /what is your opinion/i,
        /is (this|that|it|a better option|better|safe)/i,
        /are (they|both able to|both options|these options)/i,
        /would (this|that|these|those) support/i,
        /should (I choose|we)/i
    ];
    var shouldIncludeChatHistory;
    var userInput, chatHistory;
    var relevantDocuments;
    var query;
    var relevantChatHistory;
    var promptJSON;
    var referenceList;
    var includeChatHistory = false;
    var duplicateSearch = false;
    var recommendationCounter = 1;
    var libraryContent = [];

    // Global query for capturing all searches

    var initialQuery = window.AI_INITIAL_QUERY || "";
    if (initialQuery) {
        console.log("Running Initial Query bypass of keyword: ", initialQuery);
        handleSearch(initialQuery);
    }

    //  SEARCH FORM HANDLING 
    var searchForm = $(".header-search");
    var searchButton = $(".header-search-submit");
    var searchInput = $("#header-search-input");

    var queryPrompt = `<task>
  <role>
    You are "Research Assistant," an IT-focused assistant designed to provide complete answers, citations, and structured content to help users explore related topics.
  </role>
  <context>
    Respond using only the provided content in <myKnowledge>. Do not include external information, assumptions, or interpretations. Use as many "top_chunk_text" fields as necessary to fully answer <currentQuestion>. Ensure temporal accuracy when time-sensitive information is referenced.
  </context>
  <instructions>
    - Identify and explain the most prominent topics related to user content in great detail.
    - Ensure that responses are **concise, readable in under 300 seconds**, and well-structured.
    - Use **citations** in the format "[ID:<content_key>]" for every statement based on <myKnowledge>.
    - Use **markdown** for readability (bolded titles, structured sections, and bullet points where needed).
    - Provide **three systemOptions** (forward-thinking questions that expand on the content).
    - Include **three important terms with definitions** (concise 1-2 sentence explanations).
  </instructions>
  <formatting>
    - Return the response in JSON format with **three main fields**: "summary", "systemOptions", and "importantTerms".
    - The "summary" field should contain:
      1. a short summarized response to the query
      2. Key points that they should know on the subject.
    - The "systemOptions" field should list **three** well-crafted follow-up questions.
    - The "importantTerms" field should list **three** critical terms with definitions.
    - **Ensure proper escaping of JSON characters**, including newlines (\\n), double quotes ("), and tabs.
    - Use the <example> to format the response JSON. It should always start with the "summary" section first.
  </formatting>
  <verification>
    - Verify that all content in "summary" is strictly derived from <myKnowledge>.
    - Confirm that "systemOptions" are **relevant, insightful, and build on core themes**.
    - Validate "importantTerms" definitions against <myKnowledge> to ensure accuracy.
    - If verification fails, return "promptError": 0.
  </verification>
  <errorHandling>
    - If no relevant content exists in <myKnowledge>, return: {"promptError": 0}.
    - If partially answerable, specify what is missing.
    - If **any content cannot be verified**, return: {"promptError": 0}.
  </errorHandling>
  <example>
    <response>
      {
        "summary": "Cloud security strategies are explored, focusing on best practices and compliance requirements [ID:366596579]\\n- **Regulatory Compliance**: Adhering to SOC 2, GDPR, and other standards helps maintain trust and avoid legal risks. [ID:2240117288]\\n- **Zero Trust Architecture**: Modern enterprises increasingly adopt Zero Trust to secure cloud environments. [ID:325487123]\\n",
        "systemOptions": [
          "How can enterprises balance cloud security with usability for employees?",
          "What role does AI play in strengthening cloud security frameworks?",
          "How can businesses ensure continuous compliance with evolving security regulations?"
        ],
        "importantTerms": [
          { "term": "Zero Trust Architecture", "definition": "A security framework requiring verification of all users and devices before granting access to cloud resources. [ID:325487123]" },
          { "term": "SOC 2 Compliance", "definition": "A set of security controls ensuring data is securely managed in cloud environments, commonly used in enterprise IT. [ID:2240117288]" },
          { "term": "Cloud Encryption", "definition": "A method of protecting data by converting it into a secure format that requires a key to decrypt. [ID:366596579]" }
        ]
      }
    </response>
  </example>
</task>`;

    var contentSearchHtml = `
   <!--<div class="content-center">-->
   <div class="content-search-container">   
   <div class="content-search">
        
   <!-- AI Overview & References -->
        <div class="ai-overview-container blank">
            <h2 class="ai-overview-title">
            <span class="ai-icon-large"></span> AI Overview:
            </h2>  
            <div class="ai-overview-columns">
                <div class="ai-overview-left">
                    <div class="ai-overview-content">
                        <p id="ai-overview-text">Loading AI response...</p>              
                    </div> 
                    
                    <!-- Definition Section -->
                    <div class="definition-section">
                        <h2 class="definition-title">Definition: <span id="definition-term">Fetching definition...</span></h2>
                        <p id="definition-text">Fetching definition...</p>
                    </div>
                </div>
                <div class="ai-overview-right">
                    <div id="reference-list-container" class="reference-list">
                        <h3 class="reference-header">References</h3>
                        <ul id="reference-list"></ul>
                    </div>
                </div>
            </div>
            <div class="gradientWhite"></div>
        </div>
        
        <div class="ai-overview-show-more-container">
         <button class="ai-overview-show-more">+ Show More</button>
        </div>
        <div class="aiDisclaimer2">* AI-generated responses may not be fully accurate. Please verify important information.</div>  
          
        </div>
                `;
    var relatedHtml = `
        <!-- People also ask (Placeholder) -->
        <div class="related-search-container">
            <h2>Asked by your peers</h2>
            <div class="related-search-content">
            <img src="https://via.placeholder.com/300x150" alt="Placeholder Image" />
            <p>Placeholder text for "People also ask" content.</p>
            </div>
        </div>`;
        var tabsHtml = `<!-- Tabs -->
        <div class="tabs-container">
        <div class="ai-search-results-header"><h2>Related Content</h2></div>
          <ul class="tabs">
            <!-- "All" is the default active tab -->
            <li class="tab active" data-tab="all-tab">All</li>
            <li class="tab" data-tab="features-tab">Features</li>
            <li class="tab" data-tab="tips-tab">Tips</li>
            <li class="tab" data-tab="news-tab">News</li>
            <li class="tab" data-tab="answers-tab">Answers</li>
            <li class="tab" data-tab="whitepapers-tab">Whitepapers & Webinars</li>
            <li class="tab" data-tab="terms-tab">Definitions</li>
          </ul>
        </div>
    
        <!-- Tab Content Container -->
        <div id="tab-content-container">
          <!-- ALL TAB (default) - Minimzed/preview of each section -->
          <div id="all-tab" class="tab-content active">
            <!-- Features (preview) -->
            <div class="features-preview">
              <h2>Featured Content</h2>
              <p>Loading...</p>
              <a href="#" class="see-more-link" data-tab="features-tab">See More</a>
            </div>
    <hr class="separator-line">
            <!-- Tips (preview) -->
            <div class="tips-preview">
              <h2>Expert Tips</h2>
              <p>Loading...</p>
              <a href="#" class="see-more-link" data-tab="tips-tab">See More</a>
            </div>
    <hr class="separator-line">
            <!-- News (preview) -->
            <div class="news-preview">
              <h2>Related News</h2>
              <p>Loading...</p>
              <a href="#" class="see-more-link" data-tab="news-tab">See More</a>
            </div>
    <hr class="separator-line">
            <!-- Answers (preview) -->
            <div class="answers-preview">
              <h2>Answers</h2>
              <p>Loading...</p>
              <a href="#" class="see-more-link" data-tab="answers-tab">See More</a>
            </div>
    <hr class="separator-line">
            <!-- Whitepapers (preview) -->
            <div class="whitepapers-preview">
              <h2>Whitepapers & Webinars</h2>
              <p>Brief snippet or summary of Whitepapers...</p>
              <a href="#" class="see-more-link" data-tab="whitepapers-tab">See More</a>
            </div>
    <hr class="separator-line">
            <!-- Terms (preview) -->
            <h2>Terms You Should Know</h2>
            <div class="terms-preview">          
              <p>Here is a brief snippet of Terms content...</p>
              <a href="#" class="see-more-link" data-tab="terms-tab">See More</a>
            </div>
          </div>
    
      <!-- Features Tab -->
      <div id="features-tab" class="tab-content">
        <h2>Featured Content</h2>
        <ul id="features-tab" class="content-list"></ul>
      </div>
    
      <!-- Tips Tab -->
      <div id="tips-tab" class="tab-content">
        <h2>Expert Tips</h2>
        <ul id="tips-tab" class="content-list"></ul>
      </div>
    
      <!-- News Tab -->
      <div id="news-tab" class="tab-content">
        <h2>Related News</h2>
        <ul id="news-tab" class="content-list"></ul>
      </div>
    
      <!-- Answers Tab -->
      <div id="answers-tab" class="tab-content">
        <h2>Answers</h2>
        <ul id="answers-tab" class="content-list"></ul>
      </div>
    
      <!-- Whitepapers & Webinars Tab -->
      <div id="whitepapers-tab" class="tab-content">
        <h2>Whitepapers & Webinars</h2>
        <ul id="whitepapers-tab" class="content-list"></ul>
      </div>
    
      <!-- Definitions Tab -->
      <div id="terms-tab" class="tab-content">
        <h2>Definitions</h2>
        <ul id="terms-list" class="terms-list"></ul>
      </div>
    </div> 
    <!-- End #tab-content-container -->
        `;
    



    var containerHtml = `
   <div class="content-center">
      <div class="content-search">
        <!-- AI Overview & References -->
        <div class="ai-overview-container blank">
            <h2 class="ai-overview-title">
                <span class="ai-icon-large"></span> AI Overview:
            </h2>
            <div class="ai-overview-content">
              <p id="ai-overview-text">Loading AI response...</p>              
          </div> <!-- Definition Section -->
        <div class="definition-section">
            <h2 class="definition-title">Definition: <span id="definition-term">Fetching definition...</span></h2>
            <p id="definition-text">Fetching definition...</p>
        </div>
        <div class="gradientWhite"></div>
        <div class="gradientSpacer"></div>
        <div class="ai-overview-show-more-container">
         <button class="ai-overview-show-more">Show More</button>
        </div>
        
        
        <div id="reference-list-container" class="reference-list">
              <h3 class="reference-header">References</h3>
              <ul id="reference-list"></ul>
          </div>
      </div>
          
        </div>
<hr class="separator-line">  <!-- Separator line --><div class="aiDisclaimer2">* AI-generated responses may not be fully accurate. Please verify important information.</div>  
        <!-- People also ask (Placeholder) -->
        <div class="related-search-container">
          <h2>People also ask</h2>
          <div class="related-search-content">
            <img src="https://via.placeholder.com/300x150" alt="Placeholder Image" />
            <p>Placeholder text for "People also ask" content.</p>
          </div>
        </div>
<!-- Tabs -->
    <div class="tabs-container">
        <div class="ai-search-results-header"><h2>Related Content</h2></div>
      <ul class="tabs">
        <!-- "All" is the default active tab -->
        <li class="tab active" data-tab="all-tab">All</li>
        <li class="tab" data-tab="features-tab">Features</li>
        <li class="tab" data-tab="tips-tab">Tips</li>
        <li class="tab" data-tab="news-tab">News</li>
        <li class="tab" data-tab="answers-tab">Answers</li>
        <li class="tab" data-tab="whitepapers-tab">Whitepapers & Webinars</li>
        <li class="tab" data-tab="terms-tab">Definitions</li>    
       <!-- Add more tabs as needed (Answers, Definitions, etc.) -->
      </ul>
    </div>

    <!-- Tab Content Container -->
    <div id="tab-content-container">
      <!-- ALL TAB (default) - Minimzed/preview of each section -->
      <div id="all-tab" class="tab-content active">
        <!-- Terms (preview) -->
        <h2>Terms You Should Know</h2>
        <div class="terms-preview">          
          <p>Here is a brief snippet of Terms content...</p>
          <!-- 'See More' triggers the 'terms-tab' -->
          <a href="#" class="see-more-link" data-tab="terms-tab">See More</a>
        </div>
<hr class="separator-line">
    <!-- Features (preview) -->
    <div class="features-preview">
      <h2>Featured Content</h2>
      <p>Loading...</p>
      <a href="#" class="see-more-link" data-tab="features-tab">See More</a>
    </div>
<hr class="separator-line">
    <!-- Tips (preview) -->
    <div class="tips-preview">
      <h2>Expert Tips</h2>
      <p>Loading...</p>
      <a href="#" class="see-more-link" data-tab="tips-tab">See More</a>
    </div>
<hr class="separator-line">
            <!-- News (preview) -->
    <div class="news-preview">
      <h2>Related News</h2>
      <p>Loading...</p>
      <a href="#" class="see-more-link" data-tab="news-tab">See More</a>
    </div>
<hr class="separator-line">
    <!-- Answers (preview) -->
    <div class="answers-preview">
      <h2>Answers</h2>
      <p>Loading...</p>
      <a href="#" class="see-more-link" data-tab="answers-tab">See More</a>
    </div>
<hr class="separator-line">
        <!-- Whitepapers (preview) -->
        <div class="whitepapers-preview">
          <h2>Whitepapers & Webinars</h2>
          <p>Brief snippet or summary of Whitepapers...</p>
          <a href="#" class="see-more-link" data-tab="whitepapers-tab">See More</a>
        </div>
  </div>

    <!-- Features Tab -->
  <div id="features-tab" class="tab-content">
    <h2>Featured Content</h2>
    <ul id="features-tab" class="content-list"></ul>
  </div>

  <!-- Tips Tab -->
  <div id="tips-tab" class="tab-content">
    <h2>Expert Tips</h2>
    <ul id="tips-tab" class="content-list"></ul>
  </div>

 <!-- News Tab -->
  <div id="news-tab" class="tab-content">
    <h2>Related News</h2>
    <ul id="news-tab" class="content-list"></ul>
  </div>

  <!-- Answers Tab -->
  <div id="answers-tab" class="tab-content">
    <h2>Answers</h2>
    <ul id="answers-tab" class="content-list"></ul>
  </div>   

  <!-- Whitepapers & Webinars Tab -->
  <div id="whitepapers-tab" class="tab-content">
    <h2>Whitepapers & Webinars</h2>
    <ul id="whitepapers-tab" class="content-list"></ul>
  </div>

    <!-- Definitions Tab -->
  <div id="terms-tab" class="tab-content">
    <h2>Definitions</h2>
    <ul id="terms-list" class="terms-list"></ul>
  </div>

</div> <!-- End #tab-content-container -->
    `;

    // HTML for the search + viewing range controls
    var searchControlsHtml = `
  <!-- Viewing Range Dropdown -->
  <div class="viewing-range-section">
    <label for="dateRangeSelect">Viewing:</label>
    <select id="dateRangeSelect" name="dateRangeSelect">
      <option value="30">Last 30 days</option>
      <option value="90">Last 3 months</option>
      <option value="180">Last 6 months</option>
      <option value="365">Last 12 months</option>
      <option value="540" selected>Last 18 months</option>
      <option value="730">Last 24 months</option>
    </select>
  </div>

  <div class="search-controls">
    <!-- Search Box Section -->
    <div class="searchbox-section">
      <form action="https://www.techtarget.com/search" method="get" class="header-search">
        <label for="header-search-input" class="visuallyhidden">
          Search the TechTarget Network
        </label>

        <textarea
          class="header-search-input"
          id="header-search-input"
          name="q"
          placeholder="Search the TechTarget Network"
          rows="2"
          style="
            resize: none;
            box-sizing: border-box;
            width: 100%;
            height: auto;
          "
        ></textarea>

        <!-- new second-line sample question -->
        <div class="search-sample-question">
          e.g. How does cloud computing work?
        </div>

        <button type="submit" aria-label="Search" class="header-search-submit">
          <i class="icon" data-icon="g"></i>
        </button>
      </form>

      <div class="aiDisclaimer">
        <p class="aiDisclaimer-text">
          <span class="ai-icon"></span>
          Powered by AI and TechTarget's Award winning Content
        </p>
      </div>
    </div>
  </div>
`;






    if (searchForm.length === 0 || searchButton.length === 0 || searchInput.length === 0) {
        console.error("ERROR: Search form, button, or input field not found.");
        return;
    }

    console.log(" Search elements successfully found");

    //  ——— placeholder‐cycle for #header-search-input ———
    const $inp = $(".search-controls").find("#header-search-input");
    const suggestions = [
        "Search the TechTarget Network…",
        "How can implementing AI reduce our operational costs?",
        "What products or tools should we use for monitoring distributed systems?",
        "What is containerization and how does it work?",
        "Search the TechTarget Network…"
    ];
    var idx = 0, phTimeout;
    const DISPLAY = 2000, FADE = 500;
    const FINAL = "Search the TechTarget Network…";

    function cyclePlaceholder() {
        // once we exhaust the list, lock on the final text
        if (idx >= suggestions.length) {
            $inp
                .attr("placeholder", FINAL)
                .addClass("fade-in");
            return;
        }

        // fade‐out
        $inp.removeClass("fade-in");

        // after FADE ms, swap text & fade back in
        phTimeout = setTimeout(() => {
            $inp
                .attr("placeholder", suggestions[idx++])
                .addClass("fade-in");

            // schedule next cycle
            if (idx < suggestions.length) {
                phTimeout = setTimeout(cyclePlaceholder, DISPLAY);
            }
        }, FADE);
    }

    // stop the cycle on focus, clear placeholder
    $inp.on("focus", () => {
        clearTimeout(phTimeout);
        $inp.removeClass("fade-in").attr("placeholder", "");
    });

    // on blur (if still empty) restart
    $inp.on("blur", () => {
        if (!$inp.val().trim()) cyclePlaceholder();
    });

    // kick it off
    cyclePlaceholder();



    // Listen for form submission
    searchForm.on("submit", function (event) {
        //event.preventDefault();
        console.log(" Search form submitted - Preventing default action");
        handleSearch();
    });
    /*
        // Also listen for search button click
        searchButton.on("click", function (event) {
            //event.preventDefault();
            console.log(" Search button clicked - Preventing default action");
            handleSearch();
        });
    */


    // SEARCH FORM HANDLING 
    var searchForm = $(".header-search");
    var searchButton = $(".header-search-submit");
    var searchInput = $("#header-search-input");

    if (searchForm.length === 0 || searchButton.length === 0 || searchInput.length === 0) {
        console.error(" ERROR: Search form, button, or input field not found.");
        return;
    }


    $(document)
        .on("input", "#header-search-input", updateSearchButtonState)
        .on("submit", "form.header-search", updateSearchButtonState)
        .on("click", ".header-search-submit", updateSearchButtonState);

    updateSearchButtonState();


    console.log("Search form found, adding event listeners");
    /*
        // Listen for form submission
        searchForm.on("submit", function (event) {
            event.preventDefault();
            console.log(" Search form submitted - Fetching AI response");
            handleSearch();
        });
    
        // Also listen for search button click
        searchButton.on("click", function (event) {
            event.preventDefault();
            console.log(" Search button clicked - Fetching AI response");
            handleSearch();
        });
        */
    /*
        // run a default search on page load
      $("#header-search-input").val("cloud computing");
      //blankSearch = true;
      handleSearch();
    */

    // REMOVE EXISTING LAYOUT & REPLACE WITH NEW ONE 
    /*  
    if ($("#content-left, #content-center, #content-right").length) {
  
          const $detachedAds = $('#content-left .ad-wrapper').detach();
  
  
          console.log("Removing old content layout...");
          $("#content-left, #content-center, #content-right").empty().hide();
          if (!$(".content-search").length) {
              console.log("Injecting new layout...");
              $(".top-gradient-bar").append(containerHtml);
  
              $(".top-gradient-bar").prepend(searchControlsHtml);
       
  $('#content-left, #content-center').empty().show();
  const $mainCenter = $('#content-columns .content-center').first();
  
  const $all = $mainCenter.children();
  
  const $related = $all.filter('.related-search-container');
  const relatedIndex = $all.index($related);
  
  $all.each(function(i, el) {
    if (i <= relatedIndex) {
      $('#content-left').append(el);
    } else {
      $('#content-center').append(el);
    }
  });
  
  
  $('#content-left')
    .css('float','right')
    .removeClass('narrow-search');
  
  if ($detachedAds.length) {
      $('#content-left')
        .find('#reference-list-container')
        .after($detachedAds);
    }
  
  
  
  $('head').append(`
      <style>
        .content-search {
          display: flex;
          align-items: flex-start;
          gap: 20px;            
        }      
        .content-search .ai-overview-container {
          flex: 1;
        }      
        .content-search .reference-list {
          flex: 0 0 300px;
          margin: 0;            
        }
      </style>
    `);
  */

    if (
        $("#content-left, #content-center, #content-right").length &&
        !$(".content-search").length        // only once
    ) {
        console.log("Removing old content layout…");

        $("#content-center, #content-right").empty();
        $(".narrow-search").remove();

        $('#content-left, #content-center')
            .wrapAll('<div class="cg-tabs-container"></div>');

        // remove the old input’s handlers, just in case:
        $("#header-search-input")
            .off("focus blur input")   // unbind any existing focus/blur handlers
            .removeClass("fade-in");    // clear any leftover CSS classes

        $(searchControlsHtml).insertBefore(".cg-tabs-container");
        $(contentSearchHtml).insertBefore(".cg-tabs-container");

        $(relatedHtml).appendTo("#content-center");
        $(tabsHtml).appendTo("#content-center");

        $('.related-search-container, .tabs-container, #tab-content-container')
            .wrapAll('<div class="content-left-wrapper"></div>');



        $('head').append(`
      <style>
        .content-search { display: flex; flex-direction: column; /* …etc… */ }
        /* your other “.content-search .ai-overview-container { flex: 1 }” rules… */
      </style>
    `);

        $('.viewing-range-section, .search-controls')
            .wrapAll('<div class="search-row"></div>');

        //Button Status       
        const $searchInput = $("#header-search-input");
        const $searchButton = $(".header-search-submit");
        $searchButton.prop("disabled", true).addClass("btn--disabled");
        $searchInput.on("input", updateSearchButtonState);
        updateSearchButtonState();

        const $newInp = $(".search-controls").find("#header-search-input");
        const suggestions = [
            "Search the TechTarget Network…",
            "How can implementing AI reduce our operational costs?",
            "What products or tools should we use for monitoring distributed systems?",
            "What is containerization and how does it work?",
            "Search the TechTarget Network…"
        ];

        // Wrap the placeholder animation into a function that takes the element as an argument:
        function bindPlaceholderCycle($inp) {
            let idx = 0, phTimeout;
            const DISPLAY = 2000, FADE = 500;
            const FINAL = "Search the TechTarget Network…";

            function cycle() {
                if (idx >= suggestions.length) {
                    $inp.attr("placeholder", FINAL).addClass("fade-in");
                    return;
                }
                $inp.removeClass("fade-in");
                phTimeout = setTimeout(() => {
                    $inp
                        .attr("placeholder", suggestions[idx++])
                        .addClass("fade-in");
                    if (idx < suggestions.length) {
                        phTimeout = setTimeout(cycle, DISPLAY);
                    }
                }, FADE);
            }

            // stop on focus
            $inp.on("focus", () => {
                clearTimeout(phTimeout);
                $inp.removeClass("fade-in").attr("placeholder", "");
            });
            // restart on blur
            $inp.on("blur", () => {
                if (!$inp.val().trim()) cycle();
            });

            // kick it off
            cycle();
        }

        // Finally bind the cycle to the new input:
        bindPlaceholderCycle($newInp);


        $('.header-search-input').each(function (index) {
            $(this).addClass('header-search-input-' + (index + 1));
        });



        // Delegated event binding for the Viewing Range Dropdown
        $(document).on("change", "#dateRangeSelect", function () {
            var days = parseInt($(this).val(), 10);
            var now = new Date();
            pastDate = new Date(now.setDate(now.getDate() - days)).toISOString().split('T')[0];
            console.log("Updated pastDate to:", pastDate);

            // Optionally, automatically re-run the search if desired:
            // handleSearch();
        });
    }



    if (storedSearchTerm) {
        // If we have a previous search term, trigger the AI search
        //handleSearch(storedSearchTerm);
        showBlankState();
        // blankSearch = true;
        if (storedSearchTerm !== "null") {
            onSearchyBypass();
        }
    } else {
        showBlankState();
        //showErrorState();
        pushTrackingEvent("defaultPageDisplay");
    }


    blankSearch = true;



    $('.searchbox-section').append(`
    <div id="processing-modal" style="display:none;">
      <div class="modal-content ellipses">
        <p id="processing-message"></p>
      </div>
    </div>
  `);

    // now wire up the logic…
    const processingMessages = [
        "Searching…"
    ];
    let msgIdx = 0;
    let msgTimerId = null;

    function cycleProcessingMessages() {
        $('#processing-message').text(processingMessages[msgIdx]);
        msgIdx = (msgIdx + 1) % processingMessages.length;
        msgTimerId = setTimeout(cycleProcessingMessages, 2000);
    }

    window.showProcessingModal = function () {
        clearTimeout(msgTimerId);
        msgIdx = 0;
        $('#processing-modal').show();
        cycleProcessingMessages();
    };

    window.hideProcessingModal = function () {
        clearTimeout(msgTimerId);
        $('#processing-modal').hide();
    };









    function onSearchyBypass() {
        if (storedSearchTerm === "null") {
            storedSearchTerm = "what is an AI feature that I should be using?"
        }
        var userQuery = storedSearchTerm;
        console.log("stored Search Term bypassing", storedSearchTerm);

        $("#blank-recs").remove();
        $(".blank-overview-caution").remove();
        $(".blank-overview").removeClass();
        $(".reference-list, .related-search-container, .tabs-container, #tab-content-container, .definition-section, .ai-overview-show-more-container")
            .show();
        blankSearch = false;

        $(".content-search").addClass("loading-blur");
        $("#blank-recs").addClass("loading-blur");
        $(".related-search-container").addClass("loading-blur");
        $(".tabs-container").addClass("loading-blur");
        $("#tab-content-container").addClass("loading-blur");
        $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w')
            .hide();

        let storedRaw = localStorage.getItem('searchTerm') || '';
        let fallback = '';
        try {
            let parsed = JSON.parse(storedRaw);
            fallback = parsed.value || '';
        } catch (e) {
            // not JSON, use the raw string
            fallback = storedRaw;
        }

        const term = userQuery.trim() || fallback;
        const $input = $('.header-search-input-2');
        $input.val(term);

        $input.trigger('input');

        handleSearch(userQuery);

    }



    function onSearchTriggered(e) {
        e.preventDefault();

        // figure out which form was acted on
        var $form = $(this).is("form")
            ? $(this)
            : $(this).closest("form");

        var userQuery = $form.find(".header-search-input").val().trim() || localStorage.getItem('searchTerm');
        if (userQuery === lastQuery) {
            console.log("Duplicate query – skipping");
            return;
        }
        if (blankSearch) {
            $("#blank-recs").remove();
            $(".blank-overview-caution").removeClass();
            $(".blank-overview").removeClass();
            $(".reference-list, .related-search-container, .tabs-container, #tab-content-container, .definition-section, .ai-overview-show-more-container")
                .show();
            blankSearch = false;
        }

        // show the blur
        $(".content-search").addClass("loading-blur");
        $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w')
            .hide();
        // bail out on empty
        if (!userQuery) {
            console.warn(" Search query is empty.");
            $(".content-search").removeClass("loading-blur");
            return;
        }

        // Hand off to search logic:
        handleSearch(userQuery);
        //localStorage.setItem('searchTerm', userQuery);
        //localStorage.removeItem('searchTerm');

    }

    // bind the two events separately:
    //  searchForm.on("submit", onSearchTriggered);
    //  searchButton.on("click", onSearchTriggered);

    function onSearchTriggered(e) {
        e.preventDefault();
        var $form = $(this).closest('form');
        var userQuery = $form.find('#header-search-input').val().trim();

        if (userQuery === lastQuery) {
            console.log("Duplicate query – skipping");
            duplicateSearch = true;
            return;
        }
        else if (blankSearch) {
            $("#blank-recs").remove();
            $(".blank-overview-caution").remove();
            $(".blank-overview").removeClass();
            $(".reference-list, .related-search-container, .tabs-container, #tab-content-container, .definition-section, .ai-overview-show-more-container")
                .show();
            blankSearch = false;
        }
        if (!duplicateSearch) {
            $('.preview-item, .tabs li.tab .tab-count').remove();
            $(".content-search").addClass("loading-blur");
            $("#blank-recs").addClass("loading-blur");
            $(".related-search-container").addClass("loading-blur");
            $(".tabs-container").addClass("loading-blur");
            $("#tab-content-container").addClass("loading-blur");
            $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w')
                .hide();
            //showProcessingModal();
        }


        // figure out which form was acted on
        var $form = $(this).is("form")
            ? $(this)
            : $(this).closest("form");

        var userQuery = $form.find(".header-search-input").val().trim();
        if (userQuery !== lastQuery) {
            handleSearch(userQuery);
        }
    }


    $(document).on("submit", "form.header-search", onSearchTriggered);
    $(document).on("click", ".header-search-submit", onSearchTriggered);
    $(document).on("submit", "form.header-search", updateSearchButtonState);
    $(document).on("click", ".header-search-submit", updateSearchButtonState);

    updateSearchButtonState();


    document.getElementById('header-search-input')
        .addEventListener('focus', () => document.querySelector('.search-sample-question').style.display = 'none');

    document
        .getElementsByClassName('searchbox-section')[0]
        .addEventListener('focusin', () => {
            document.querySelector('.search-sample-question').style.display = 'none';
        });

    $(document).on('keydown', '#header-search-input', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();

            var $form = $(this).is("form")
                ? $(this)
                : $(this).closest("form");

            var userQuery = $form.find(".header-search-input").val().trim();

            storedSearchTerm = userQuery;

            

            if (typeof userQuery !== "string" || userQuery.trim() === "") {
                return
            }

            if (userQuery !== lastQuery) {
                // handleSearch(userQuery);
                onSearchyBypass();
                //$searchButton.prop("disabled", true).addClass("btn--disabled");
                updateSearchButtonState();
            }


            //$(this).closest('form')[0].dispatchEvent(new Event('submit', { cancelable: true }));

        }
    });




    /*
            document.getElementById('header-search-input')
            .addEventListener('keydown', function(e) {
        // If it’s plain Enter (no Shift), block the newline…
        if (e.key === 'Enter') {
          e.preventDefault();
          console.log("Josue");
          // …and submit the form
          this.form.submit();
        }
      });
    */

    document
        .querySelector('form.header-search')
        .addEventListener('submit', function (e) {
            e.preventDefault();
            handleSearch(this.querySelector('#header-search-input').value.trim());
        });





    // HANDLE SEARCH & FETCH AI OVERVIEW 
    function handleSearch(userQuery) {
        /*
                // Grab and move the two ad wrappers
                const $ads = $("#mu-2, #halfpage-top")
                    .closest(".ad-wrapper")
                    .detach();             // remove them from the DOM (but keep handlers)
        
                const $rail = $("<div class='search-sidebar'></div>")
                    .insertAfter(".tabs-container");
        
                $rail.append($ads);
        
        */
        /*
      // REMOVE EXISTING LAYOUT & REPLACE WITH NEW ONE //
    if ($("#content-left, #content-center, #content-right").length) {
        console.log("Removing old content layout...");
        $("#content-left, #content-center, #content-right").empty().hide();
        if (!$(".content-search").length) {
            console.log("Injecting new layout...");
            $(".top-gradient-bar").append(containerHtml);
                $(".top-gradient-bar").prepend(searchControlsHtml);

                  // Delegated event binding for the Viewing Range Dropdown
$(document).on("change", "#dateRangeSelect", function() {
  var days = parseInt($(this).val(), 10);
  var now = new Date();
  pastDate = new Date(now.setDate(now.getDate() - days)).toISOString().split('T')[0];
  console.log("Updated pastDate to:", pastDate);

  // Optionally, automatically re-run the search if desired:
  // handleSearch();
});
        }
    }
     */

        pushTrackingEvent("processingStarted");
        latestSearch = userQuery || "''";
        console.log(latestSearch, ": this is your last search")
        // Prevent duplicate calls
        if (userQuery === lastQuery) {
            console.log("Duplicate query – skipping");
            return;
        }
        lastQuery = userQuery;
        storedSearchTerm = lastQuery;
        

        if (!userQuery) {
            console.warn(" Search query is empty.");
            //blankSearch = false;

            return;
        }

        __aiDisplayedOnce = false; 

        $('.ai-overview-container').removeClass('error-shown');
        $('.aiDisclaimer2').removeClass('error-shown');
        $('.ai-overview-content').removeClass('error-message');
        $('.ai-overview-container.expanded').length && $('.ai-overview-show-more').trigger('click');

        console.log(" Triggering AI Overview Fetch");

        let storedRaw = localStorage.getItem('searchTerm') || '';
        let fallback = '';
        try {

            let parsed = JSON.parse(storedRaw);
            fallback = parsed.value || '';
        } catch (e) {

            fallback = storedRaw;
        }


        const term = userQuery.trim() || fallback;
        const $input = $('#header-search-input');
        $input.val(term);

        $input.trigger('input');
        showProcessingModal();

        fetchAIOverview(userQuery);

    }
    window.handleSearch = handleSearch;


    function onResultsRendered() {
        hideProcessingModal();
        // always clear any global blur
        $(".content-search").removeClass("loading-blur");
        $('.viewing-range-section').addClass('search-complete');
        $('.ai-overview-container').removeClass('error-shown');
        $('.aiDisclaimer2').removeClass('error-shown');
        $("#content-columns").removeClass("blank-state");
        //  Summary ready?
        const overviewText = $("#ai-overview-text").text().trim();
        if (overviewText && overviewText !== "Loading AI response...") {
            $('.ai-overview-container')
                .removeClass('blank')
                .removeClass('loading-blur');
                if (!__aiDisplayedOnce) {
                    const overviewText = $("#ai-overview-text").text().trim();
                    if (overviewText && overviewText !== "Loading AI response...") {
                      pushTrackingEvent("AIODisplayed");
                      __aiDisplayedOnce = true;
                      var $searchBox = $('#main-content .header-search-input-2');
                      if ($('.ai-error-container').is(':visible')) {
                        if (!$searchBox.hasClass('errorSearchBox')) {
                            $searchBox.addClass('errorSearchBox');
                        }
                    } else {
                        $searchBox.removeClass('errorSearchBox');
                    }
                    }
                  }
        }

        //  References / related-search ready?
        if ($("#reference-list li").length) {
            $(".reference-list")
                .removeClass('loading-blur');
        }
/*
        if ($(".related-search-item").length) {
            $(".related-search-container")
                .removeClass('loading-blur');
        checkAndRebindSearchQuestionHandler();
        }
*/
        //  Definitions ready?
        const defText = $("#definition-text").text().trim();
        if (defText && defText !== "Fetching definition...") {
            $(".definition-section")
                .removeClass('loading-blur');
        }

        //  Tabs / recommendations ready?


        if ($('.preview-item').length > 0 || $('.tabs li.tab .tab-count').length > 0) {
            // remove the blur, then in the .then show the ads
            $(".tabs-container, #tab-content-container")
                .removeClass('loading-blur')
                .promise()              // returns a resolved promise once all fx queues complete
                .then(function () {
                    // now that “tabs” are un‑blurred, show the ads
                    $('#search .ad-wrapper.ad-inline.ad-desktop, ' +
                        '#search .ad-wrapper.page-header-ad.ad-desktop-w')
                        .show();
                      //  $('<div class="ai-search-results-header"><h2>Search Results</h2></div>').insertBefore('.tabs-container');

                });
                setupFirstLinkInViewportTracking();
                openAllTab();
                $(".related-search-container")
                .removeClass('loading-blur');
        checkAndRebindSearchQuestionHandler();
        }

        // finally, show  disclaimers
        $(".aiDisclaimer, .aiDisclaimer2").show();

        /* $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w')
         .show(); */
    }

    function resetOverviewHeight() {
        const $overview = $('#ai-overview-text');
        const $refs = $('#reference-list-container');

        $('.definition-section').hide();
        $overview.css({ overflow: 'hidden', maxHeight: '210px' });
        $refs.css({ overflowY: 'auto', maxHeight: '200px' });
    }

    //  Fetches the AI overview and updates the UI.
    function fetchAIOverview(userQuery) {
        console.log(" Fetching AI Overview for:", userQuery);
        $(".content-search").addClass("loading-blur");
        $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w')
            .hide();

        // resetOverviewHeight();
        updateSearchButtonState();
        setLoading(true);

        fetchSummary(userQuery)
            .then(llmResponse => {
                if (!llmResponse || !llmResponse.choices || !llmResponse.choices[0].message) {
                    throw new Error("ERROR: Invalid AI response object.");
                }
                const rawContent = llmResponse.choices[0].message.content;
                console.log("Raw LLM content:", rawContent);

                const parsed = parseLLMResponse(rawContent);
                if (!parsed) {
                    console.error("Failed to parse JSON payload from LLM:", rawContent);
                    throw new Error("ERROR: Malformed JSON from AI.");
                }
                return parsed;
            })
            .then(parsedResponse => {
                if (!parsedResponse) {
                    throw new Error("ERROR: Invalid or empty AI response.");
                }

                //  Build and render the summary
                let summaryText = "";
                if (parsedResponse.summary) {
                    summaryText = (typeof parsedResponse.summary === 'object')
                        ? (parsedResponse.summary["Executive Summary"] || "")
                        : parsedResponse.summary;
                }
                let summaryFormatted = parseAndReplaceCitations(summaryText);
                if (summaryFormatted.startsWith("<p>") && summaryFormatted.endsWith("</p>")) {
                    summaryFormatted = convertTextToHTML(summaryFormatted.slice(3, -4));
                } else {
                    summaryFormatted = convertTextToHTML(summaryFormatted);
                }

                onResultsRendered();
                updateSearchButtonState();
                $("#ai-overview-text").html(summaryFormatted);
                checkOverviewOverflow();

                //  References & related-search
                displayReferenceList();
                displayRelatedSearch();
                $('.definition-section').hide(); //JF

                //   fetch and render definitions 
                return fetchDefinitions(userQuery)
                    .then(defs => {
                        // definition-section header + body
                        if (defs.length > 0) {
                            const def = defs[0];
                            const termLink = `<a href="${def.url}" target="_blank" rel="noopener">${def.term}</a>`;

                            $("#definition-term").html(termLink);
                            $("#definition-text").html(parseAndReplaceCitations(def.definition));
                        }
                        else {
                            $("#definition-term").text("No definition available.");
                            $("#definition-text").text("");
                        }
                        // full Definitions tab
                        displayTermsList(defs);
                        $('#terms-list').on('click', false);
                        //  now kick off recommendations
                        return fetchRecommendation(userQuery, summaryText);
                    });
            })
            .then(recommendationResults => {
                if (!recommendationResults || recommendationResults.length === 0) {
                    console.warn("No recommendations available.");
                    return;
                }
                let categorizedResults = categorizeRecommendation(recommendationResults);
                onResultsRendered();
                // unhide tabs
                $('.tabs li.tab').show();
                $('#all-tab .answers-preview h2').show();
                $('#all-tab .answers-preview h2').show();
                $('.whitepapers-preview').show();
                $('.news-preview').show();
                $('.tips-preview').show();
                $('.features-preview').show();
                $('.answers-preview').show();
                $('.separator-line').show();

                //showAllSections();
                displayCategorizedContent(categorizedResults);
                updateSearchButtonState();
                setLoading(false);
            })
            .catch(error => {
                console.error("ERROR fetching AI Overview:", error);
                //lastQuery = null;   // on error, don’t lock out that same query
                onResultsRendered();
                updateSearchButtonState();
                showErrorState();
                //$("#ai-overview-text").html(errorHtmlChat2);
                $('.ai-overview-container #ai-overview-text').addClass('error-message');
                showPagePromptErrors("1");
                pushTrackingEvent('responseErrorShown', {
                    errorMessage: errorHtmlChat2,
                    error: error,
                    userQuery: userQuery
                });
                checkOverviewOverflow();
            });
        // ensure the visible input matches the query (or falls back to last stored term)
        const $input = $('#header-search-input');
        const current = $input.val().trim();
        const stored = localStorage.getItem('searchTerm') || '';
        if (current !== userQuery) {
            $input.val(userQuery || stored);
        }

        localStorage.removeItem("searchTerm");
        updateSearchButtonState();
    }

    function showAllSections() {
        $('.tabs li.tab').each(function () {
            var dataTab = $(this).data('tab');           // e.g. "news-tab", "answers-tab", etc.

            // show tab button + panel
            $(this).show();
            $('#' + dataTab).show();

            // show preview + its H2 in #all-tab
            var previewClass = dataTab.replace('-tab', '') + '-preview';
            var $preview = $('#all-tab').find('.' + previewClass);
            $preview.show();
            $preview.children('h2').show();
        });
    }

    // Call once whenever it need to redisplay everything:
    showAllSections();



    // DISPLAY REFERENCE LIST 
    function displayReferenceList() {
        let referenceListContainer = $("#reference-list");
        referenceListContainer.empty();

        // Iterate through the referenceMetadata array and populate each reference item
        matchedCitations.forEach((ref, index) => {
            // Append each reference in the structure defined above
            referenceListContainer.append(`
      <li class="reference-item">
        <span class="reference-number">[${index + 1}]</span>  <!-- This adds the numbering -->
        <a href="${ref.url}" target="_blank" class="reference-title">${ref.title}</a>
        <p class="reference-text">${ref.text}</p>  <!-- Short description of the reference -->
        <hr class="separator-line">  <!-- Separator line -->
      </li>
    `);
        });
    }


    // DISPLAY TERMS LIST 
    function displayTermsList(importantTerms) {
        const count = importantTerms.length;
        const $termsTab = $('.tabs li.tab[data-tab="terms-tab"]');
        const $preview = $('.terms-preview').empty();
        $termsTab.find('.tab-count').remove();
        if (count > 0) {
            $termsTab.append(`<span class="tab-count">${count}</span>`);
        }
        let termsListContainer = $("#terms-list");
        termsListContainer.empty();

        importantTerms.forEach(term => {
            termsListContainer.append(`
      <li><strong>${term.term}:</strong> ${term.definition}</li>`
            );
        });


        termsListContainer = $(".terms-preview");
        termsListContainer.empty(); // Clear existing content

        var termList = $('#terms-list');
        termList.empty();  // Clear existing content

        importantTerms.forEach(term => {
            // Create an individual list item for each term
            const termItem = $(`
      <li class="term-item">
        <a
        href="${term.url}"
        target="_blank"  rel="noopener"  class="term-title">${term.term}</a>
        <p class="term-description">${parseAndReplaceCitations(term.definition)}</p>
      </li>
    `);


            // Append the term item to the list
            termsListContainer.append(termItem);
        });


        importantTerms.forEach(({ term, definition, url }) => {
            // build each <li>
            const $termItem = $(`
      <li class="term-item">
        <a href="${url}" target="_blank" rel="noopener" class="term-title">${term}</a>
        <p class="term-description">${parseAndReplaceCitations(definition)}</p>
      </li>
    `);

            // hide the description initially
            $termItem.find('.term-description').show();


            // add it to the list
            termList.append($termItem);
        });

        const previewTerms = importantTerms.slice(0, 3);

        $preview.empty();
        previewTerms.forEach(({ term, definition, url }) => {
            const $item = $(`
              <li class="term-item">
                <a href="${url}" target="_blank" rel="noopener" class="term-title">${term}</a>
                <p class="term-description">${parseAndReplaceCitations(definition)}</p>
              </li>
            `);


            $preview.append($item);
        });


        if (count > 0) {
            $preview.append(`
            <a href="#"
               class="see-more-link"
               data-tab="terms-tab">
              View More Definitions <span class="right-arrow-icon"></span>
            </a>
          `);
        }

    }

    // UTILITIES 

    function parseAndReplaceCitations(text) {
        if (!text || typeof text !== 'string') {
            console.warn("parseAndReplaceCitations received non-string input:", text);
            return "";
        }

        console.log("Processing citations in text...");

        const citationRegex = /\[ID:(\d+(?:,\s*(?:ID:)?\d+)*)\]/g;
        let citations = {};
        matchedCitations = [];  // Reset matchedCitations
        citationCounter = 1;

        const citationMatches = text.match(citationRegex);
        if (citationMatches) {
            citationMatches.forEach(citationMatch => {
                const citationIDs = citationMatch.match(/\d+/g);

                // Ensure each citation ID is processed only once, even if it appears multiple times in the same reference
                citationIDs.forEach(citationID => {
                    if (!citations[citationID]) {
                        let doc = referenceMetadata.find(doc => doc.citationNumber === citationID);
                        if (doc) {
                            /* 
                            let urlObj = new URL(doc.url);
                              urlObj.searchParams.append("Offer", promoCode);
                            */

                            // build URL with promoCode or asrc
                            const urlObj = new URL(doc.url);
                            // decide param name based on domain
                            const isHubOrBitpipe = urlObj.href.includes('www.techtarget.com/hub/')
                                || urlObj.href.includes('bitpipe.com');
                            const paramName = isHubOrBitpipe ? 'asrc' : 'Offer';
                            urlObj.searchParams.append(paramName, promoCode);

                            citations[citationID] = {
                                number: citationCounter++,  // Increment the counter only once for unique citation
                                title: doc.title || "Unknown Title",
                                url: urlObj.toString(),
                                score: ((doc.score * 100) + "%") || "N/A"
                            };

                            // Add to matchedCitations array
                            matchedCitations.push({
                                number: citations[citationID].number,
                                title: citations[citationID].title,
                                url: citations[citationID].url,
                                text: doc.text
                            });

                            console.log(`Mapped citation [ID:${citationID}] to document - Title: ${citations[citationID].title}, URL: ${citations[citationID].url}`);
                        } else {
                            console.warn(`No document found in documentMetadata for citation [ID:${citationID}]`);
                        }
                    }
                });
            });
        }

        console.log("Replacing citations with links...");
        let newText = text.replace(citationRegex, (match, citationIDs) => {
            const ids = citationIDs.split(/,\s*(?:ID:)?/);
            const links = ids.map(citationID => {
                citationID = citationID.trim();
                if (citations[citationID]) {
                    const citation = citations[citationID];
                    return `<sup><span class="citation">[<a href="${citation.url}" target="_blank" title="${citation.title}">${citation.number}</a>]</span></sup>`;
                } else {
                    console.warn(`Citation [ID:${citationID}] not found.`);
                    return `[ID:${citationID}]`;
                }
            });
            return links.join(', ');
        });

        return newText;
    }


    function fetchSummary(userInput, chatHistory) {
        chatComplete = false;
        console.log("Processing response to:", userInput);
        var userQuery = userInput;
        if (clearChatHistoryEnabled) {
            completeChatHistory = [];
            console.log("Chat history cleared.");
        }

        // Fetch context documents first
        return fetchContext(userInput).then(contextDocuments => {
            if (!contextDocuments || contextDocuments.length === 0) {
                console.log("No documents returned from fetchContext.");
                showSystemResponse("Sorry, I couldn't find any relevant documents.");
                //showSystemOptions(validSystemOptions, 'systemOption');
                return null;
            }

            console.log("Fetched context documents:", contextDocuments);
            const contextStr = JSON.stringify(contextDocuments);

            // Build reference metadata from context documents
            documentMetadata = contextDocuments.map(doc => ({
                title: doc.title,
                url: doc.url,
                score: doc.score,
                citationNumber: doc.citation,
                text: doc.text
            }));
            referenceMetadata.push(...documentMetadata);

            // Construct  prompt text and request body 
            promptText = constructPrompt(JSON.stringify(promptJSON));

            const requestBody = {
                model: "gemini-2.0-flash-001",
                messages: [
                    { role: "system", content: promptText },
                    // ...completeChatHistory, //Do we want Chat history?
                    { role: "user", content: userInput }
                ],
                metadata: {
                    trace_name: "optimizely",
                    trace_user_id: "Gen AI Search",
                    tags: ["request: search query", "model: gemini-2.0-flash"]
                },
                temperature: 0,
                max_tokens: 4096
            };

            return logFetchError(
                fetch('https://litellm.techtarget.com/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authBearer,
                    },
                    body: JSON.stringify(requestBody)
                }),
                'https://litellm.techtarget.com/chat/completions',
                requestBody,
                'fetchChat'
            )
                .then(response => {
                    console.log("Summary Response:", response);
                    if (!response.ok) {
                        showPagePromptErrors("1");
                        pushTrackingEvent("responseErrorShown", {
                            userQuery: userInput,
                            error: response.status
                        });
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data || Object.keys(data).length === 0) {
                        pushTrackingEvent("emptySummary", {
                            userQuery: userInput
                        });
                        console.log("No summary available.");
                        showSystemResponse("Sorry, I'm not able to answer that question.");
                        return null;
                    } else {
                        console.log("Summary fetched successfully.");
                        console.log("Chat API Response Object:", data);
                        var assistantResponse = data.choices[0].message.content;
                        console.log("Chat API Response Text:", assistantResponse);


                        return evaluateChatResponse(
                            userInput,
                            assistantResponse,
                            contextStr
                        )
                            .then(evaluationResult => {
                                console.log("Evaluation Result:", evaluationResult);
                                if (evaluationResult.promptError === 0) {
                                    pushTrackingEvent("evaluationError");
                                    evaluationFailed = true;
                                    containsErrorWords = true;
                                    // Evaluation error (content or citation mismatch) – show error to user
                                    var errorMessage = getErrorMessage("1");
                                    showSystemResponse(errorHtmlChat2, 'system', 'systemAnswer');
                                    isProcessing = false;
                                    showSystemOptions(validSystemOptions, 'systemOption');
                                    return { promptError: 0 };
                                } else {
                                    console.log("Summary fetched successfully.");
                                    console.log("Chat API Response Object:", data);

                                    // Get the raw response string from the API
                                    var rawResponse = data.choices[0].message.content;
                                    console.log("Raw LLM Response:", rawResponse);

                                    // Use the new parseLLMResponse function to extract and parse the JSON
                                    var parsedResponse = parseLLMResponse(rawResponse);
                                    if (!parsedResponse) {
                                        console.error("Failed to parse JSON from the LLM response.");
                                        showSystemResponse("There was an error processing the answer.");
                                        return null;
                                    }

                                    // Now itcan access the parsed JSON fields:
                                    console.log("Parsed Summary:", parsedResponse.summary);
                                    console.log("Parsed System Options:", parsedResponse.systemOptions);
                                    systemOptions = parsedResponse.systemOptions;
                                    console.log("Parsed Important Terms:", parsedResponse.importantTerms);
                                    // Evaluation passed; update chat history and return the successful response
                                    if (!clearChatHistoryEnabled) {
                                        completeChatHistory.push({
                                            role: "user",
                                            content: userInput
                                        });
                                        completeChatHistory.push({
                                            role: "assistant",
                                            content: assistantResponse
                                        });
                                    }
                                    chatComplete = true;
                                    updateContextStorage(null, chatData);
                                    console.log("Paul Chat request logged:", requestBody);
                                    return data;
                                }
                            });
                    }
                })
                .catch(error => {
                    console.error("Error fetching summary:", error);
                    showPagePromptErrors("1");
                    pushTrackingEvent('fetchError', {
                        errorMessage: errorHtmlChat2,
                        error: error,
                        userQuery: userQuery
                    });
                    return null;
                });
        });
    }

    // Parses the JSON block from an LLM response string.

    function parseLLMResponse(rawContent) {
        try {
            // Extract the JSON portion from the rawContent
            const startIndex = rawContent.indexOf("{");
            const endIndex = rawContent.lastIndexOf("}");

            if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
                console.warn("No valid JSON block found in the response.");
                return null;
            }

            // Extract the JSON string
            let jsonString = rawContent.substring(startIndex, endIndex + 1).trim();

            // Fix for HTML tags and control characters
            //jsonString = jsonString.replace(/<[^>]+>/g, '');  // Strip out HTML tags
            jsonString = jsonString.replace(/[\x00-\x1F\x7F]/g, ' '); // Replace control characters with space
            //jsonString = jsonString.replace(/\\n/g, ' ').replace(/\\r/g, ' '); // Clean up line breaks

            // Parse the cleaned JSON string
            const parsed = JSON.parse(jsonString);
            return parsed;
        } catch (err) {
            console.error("Error parsing LLM response JSON:", err);
            return null;
        }
    }







    function fetchContext(userInput) {
        console.log("fetch context started");


        var requestBody = {
            "input_document_type": "document_snippet",
            "input_documents": [userInput],
            "documents_to_return": maxContextDocuments,
            "rank_score": "max_similarity_score",
            "rank_service": "google_semantic_ranker",
            "input_filter": {
                "content_format": ["Web"],
                "content_language": ["en"],
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""],
            },
            "metadata": [
                "content_key",
                "content_title",
                "content_summary",
                "content_format",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language"
            ],
            "llm": "gemini-1.5-flash-001",
            "top_k": 1,
            "source": "Gen AI Search"
        };

        // If rank service removal is toggled
        if (removeRankServiceEnabled) {
            delete requestBody.rank_service;
            console.log("Rank service removed from fetchContext.");
        }

        // Make the fetch call
        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody,
            'fetchRecommendations'
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log("Context Fetch Response:", response);
                return response.json();
            })
            .then(data => {
                if (!data || Object.keys(data).length === 0) {
                    console.log("No context documents available.");
                    return [];
                } else {
                    console.log("Full context object returned.", data);

                    // We only want to use the top N documents
                    const totalDocuments = data['input_document 0'].Documents;
                    const selectedDocuments = totalDocuments.slice(0, documentsToUse);

                    // Filter by minDocRelevancy
                    const filteredDocuments = selectedDocuments.filter(doc => doc.rank_score > minDocRelevancy);
                    if (filteredDocuments.length < minDocCount) {
                        console.warn("No relevant documents found after filtering by score.");
                        var errorMessage = getErrorMessage("4");
                        showSystemResponse(errorHtmlChat1, 'system');
                        showErrorState();
                        shouldFetchRecommendations = false;
                        pushTrackingEvent("noRelevantDocuments", {
                            userQuery: userInput
                        });
                        trackRequestErrors();
                        return [];
                    }

                    // Clone the original object using Object.assign and modify it to include the reduced documents
                    const reducedResponse = Object.assign({}, data, {
                        'input_document 0': Object.assign({}, data['input_document 0'], {
                            Documents: filteredDocuments  // Replace with reduced documents
                        })
                    });
                    promptJSON = reducedResponse;
                    console.log("Reduced context object for the prompt:", promptJSON);

                    // Convert each doc into the shape we need for referenceMetadata
                    const context = filteredDocuments.map(doc => {
                        contentUrls.push(doc.content_web_url);
                        return {
                            title: doc.metadata.content_title,
                            url: doc.content_web_url,
                            score: doc.rank_score,
                            citation: doc.metadata.content_key, // e.g. "123456"
                            text: doc.top_chunk_text
                        };
                    });
                    // For logging or reference if needed
                    console.log("Context documents used:", context);

                    pushTrackingEvent("contextDocumentsFetched", {
                        userQuery: userInput
                    });
                    return context; // Return an array of relevant doc objects
                }
            })
            .catch(error => {
                console.error("Error fetching context documents:", error);
                pushTrackingEvent('fetchError', {
                    errorMessage: errorHtmlChat2,
                    error: error,
                    userQuery: userInput
                });
                showSystemOptions(validSystemOptions, 'systemOption');
                return [];
            });
    }



    function logFetchError(fetchPromise, url, requestBody, trackingPrefix) {

        return (function () {
            const firedEvents = new Set(); // Scoped to this function invocation

            return fetchPromise
                .then(function (response) {
                    if (!response.ok) {

                        useTechnicalError = true;

                        return response.json().catch(function () {

                            // If the error body cannot be parsed, return a default structure
                            return { error: { message: "Unable to parse error body", type: null } };
                        }).then(function (errorBody) {
                            trackRequestErrors();
                            var errorDetails = {
                                status: response.status,
                                statusText: response.statusText || null,
                                url: response.url,
                                requestBody: JSON.stringify(requestBody),
                                errorMessage: errorBody.error && errorBody.error.message ? errorBody.error.message : null,
                                errorType: errorBody.error && errorBody.error.type ? errorBody.error.type : null,
                            };

                            const eventKey = `${trackingPrefix}HttpError:${response.status}`;
                            if (!firedEvents.has(eventKey)) {
                                console.error(`${trackingPrefix} HTTP error occurred:, errorDetails`);
                                pushTrackingEvent(`${trackingPrefix}HttpError, errorDetails`);
                                saveErrorToLocalStorage(`${trackingPrefix}HttpError, errorDetails`);
                                firedEvents.add(eventKey); // Mark the event as fired
                            }

                            throw new Error(`HTTP error: ${response.status} - ${response.statusText}`);
                        });
                    }
                    return response;
                })
                .catch(function (error) {
                    // Extract potential HTTP status code from the error message
                    trackRequestErrors();
                    const httpStatusMatch = error.message.match(/HTTP error: (\d+)/);
                    if (httpStatusMatch) {
                        const statusCode = parseInt(httpStatusMatch[1], 10);
                        const errorDetails = {
                            errorMessage: error.message,
                            url: url,
                            requestBody: JSON.stringify(requestBody),
                            status: statusCode,
                        };

                        const eventKey = `${trackingPrefix}HttpError:${statusCode}`;
                        if (!firedEvents.has(eventKey)) {
                            console.error(`${trackingPrefix} HTTP error reclassified:, errorDetails`);
                            pushTrackingEvent(`${trackingPrefix}HttpError, errorDetails`);
                            saveErrorToLocalStorage(`${trackingPrefix}HttpError, errorDetails`);
                            firedEvents.add(eventKey); // Mark the event as fired
                        }

                        throw new Error(`Reclassified HTTP error: ${statusCode}`);
                    } else if (error.name === "TypeError") {
                        // Network errors
                        const errorDetails = {
                            errorMessage: error.message,
                            url: url,
                            requestBody: JSON.stringify(requestBody),
                        };

                        const eventKey = `${trackingPrefix}NetworkError`;
                        if (!firedEvents.has(eventKey)) {
                            console.error(`${trackingPrefix} Network error occurred:, errorDetails`);
                            pushTrackingEvent(`${trackingPrefix}NetworkError, errorDetails`);
                            saveErrorToLocalStorage(`${trackingPrefix}NetworkError, errorDetails`);
                            firedEvents.add(eventKey); // Mark the event as fired
                        }
                    } else {
                        trackRequestErrors();
                        // Unexpected errors
                        const errorDetails = {
                            errorMessage: error.message,
                            url: url,
                            requestBody: JSON.stringify(requestBody),
                        };

                        const eventKey = `${trackingPrefix}UnexpectedError`;
                        if (!firedEvents.has(eventKey)) {
                            console.error(`${trackingPrefix} Unexpected error occurred:, errorDetails`);
                            pushTrackingEvent(`${trackingPrefix}UnexpectedError, errorDetails`);
                            saveErrorToLocalStorage(`${trackingPrefix}UnexpectedError, errorDetails`);
                            firedEvents.add(eventKey); // Mark the event as fired
                        }
                    }

                    throw error;
                });
        })();
    }
    // Utility function to handle error counting and increment interactionCount
    function trackRequestErrors() {
        var sessionErrorCount = parseInt(localStorage.getItem('sessionErrorCount')) || 0;
        sessionErrorCount++;
        localStorage.setItem('sessionErrorCount', sessionErrorCount); // Persist sessionErrorCount

        if (sessionErrorCount >= 2) {
            // Retrieve current interactionCount from localStorage or initialize to 0
            interactionCount = parseInt(localStorage.getItem('interactionCount')) || 0;
            interactionCount++;
            // Update localStorage with the incremented value
            localStorage.setItem('interactionCount', interactionCount);
            //localStorage.setItem('interactionCount', interactionCount);
            console.log(`Interaction count incremented. New value: ${interactionCount}`);
            //getUserSubmits('chat-status-attempt-counter');
            var errorMessage = getErrorMessage("1");
            showSystemResponse(errorHtmlChat1, 'system');
            shouldFetchRecommendations = false;
            pushTrackingEvent("promptError");


            // Reset the session error count
            sessionErrorCount = 0;
            localStorage.setItem('sessionErrorCount', sessionErrorCount);
            console.log(`sessionErrorCount count incremented. New value: ${sessionErrorCount}`);
            return;
        }
    }
    function showSystemResponse(chatResponse, messageType, subtype) {
        console.log('start showSystemResponse');
        var processedResponse;
        var lastMessage = $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message');
        var lastMessageContainer = $('#chatDisplay .chat-message-container.' + messageType + ':last');
        var copyIconHtml = `<div class="copy-icon"><i class="icon-copy"></i></div>`;

        if (subtype === 'systemOption') {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + subtype + ':last .chat-message:last .text').html(chatResponse);
        } else if (subtype === 'summary') {
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message:last .text').html(chatResponse);
            lastMessage.append(copyIconHtml);
        } else if (subtype === 'systemAnswer') {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(processedResponse);
            lastMessage.append(copyIconHtml);
            $('.chat-message-container:last-child').addClass('userQuestion');
        } else if (subtype === 'systemOptionAnswer') {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(processedResponse);
            lastMessage.append(copyIconHtml);
            $('.chat-message-container:last-child').addClass('systemOptionAnswer');
        } else if (subtype === 'intro') {
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(chatResponse);
        } else {
            processedResponse = convertTextToHTML(chatResponse);
            $('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message .text').html(processedResponse);
            //$('#chatDisplay .chat-message-container.' + messageType + ':last .chat-message:last .text').html(chatResponse);
        }
        //var copyElement = $('.copy-icon');
        //var combinedElements = lastMessage.add(copyElement);

        // Add hover and copy behavior to the copy icon 

        lastMessageContainer.find('.copy-icon').on('click', function (e) {
            const textToCopy = lastMessageContainer.find('.text').text(); // Get the response text
            const html = lastMessageContainer.find('.text').html();
            console.log('HTML to copy: ' + html);

            copyToClipboard(textToCopy, html); // Call the copy function
            $(this).addClass('copied');

        });
        lastMessageContainer.on('mouseleave', function (e) {
            $(this).find('.copy-icon').removeClass('copied');
        });
        updateSearchButtonState();
        // hideLoader();
        // setButtonStatus();
        //currentMessageIndex = null;
    }
    // Function to save errors to local storage
    function saveErrorToLocalStorage(errorType, errorDetails) {
        const errorLog = JSON.parse(localStorage.getItem('errorLog')) || [];
        const timestampedError = Object.assign(
            { type: errorType, timestamp: new Date().toISOString() },
            errorDetails
        );
        errorLog.push(timestampedError);

        // Keep the log manageable (e.g., store the last 100 errors)
        if (errorLog.length > 100) {
            errorLog.shift();
        }
        localStorage.setItem('errorLog', JSON.stringify(errorLog));
        sendErrorLogToGoogleForm(timestampedError);
    }


    function constructPrompt(relevantDocuments) {
        return `<task>
  <role> You are an enterprise search engine that helps users to get the most thorough information from their search query using solely the information from <ttSources>. </role>
  <tone> Formal, technical, and precise.</tone>
  <steps>
    - Analyze the user content to identify the core topic and any supplemental topics
    - Rewrite the user's search query into a well-formed question if necessary.
    - Expand on the query as much as possible, like with related follow-up questions, expanding on relevant topics, and refining the scope for clarity.
    - Answer the expanded version of the question in JSON format using only the provided content from <ttSources>.
    - Follow the example JSON format below from the example when formatting the responses. Field titles should always use quotes, like "summary".
    - The JSON output must contain these 4 fields:
      1. \"summary\": A short summarized response that includes key points. Answer in as much detail as possible, and cover as many topics as required to fully breakdown the user query. Structure this for easy reading by separating topics with newline characters (\\n\\n) to create paragraphs. Format the response using proper grammar, sentence structure, punctuation, and clarity. Use html tags to include visual enhancements, like bolded keywords and titles, to improve readability. When needed, make use of lists as well. Include the corresponding "content_key" as a reference at the end of any sentence or paragraph derived from a "top_chunk_text," e.g., [ID:123456].
      2. \"systemOptions\": An array of three well-crafted follow-up questions.
      3. \"importantTerms\": An array of three key IT-related terms with definitions.
      4. \"definition\": a single definition of the main topic of the user's query.
  </steps>
  <example>
  {\n  \"summary\": \"Cloud security is a critical component in the modern business landscape, offering scalable and on-demand resources that enhance operational efficiency and minimize security risks. [ID:xxxxxxxxx]\<br>\\<br>\\<h2>\Introduction to Cloud Security\</h2>\\<br>\Cloud security is essential for safeguarding sensitive data and ensuring that cloud services remain compliant with privacy and regulatory standards. [ID:xxxxxxxxx]\<br>\As businesses increasingly rely on cloud-based solutions for their operations, the need for robust security frameworks becomes more urgent. AI is playing an increasing role in \<strong>\cloud security\</strong>\, helping organizations identify and mitigate threats more effectively by analyzing vast amounts of data in real-time. [ID:xxxxxxxxx]\<br>\\<br>\\<h2>\Key Components of Cloud Security\</h2>\\<br>\Cloud security encompasses several core elements to protect against data breaches, cyberattacks, and other threats:\<br>\\<br>\- \<strong>\Identity and Access Management (IAM)\</strong>\: Ensuring only authorized users can access cloud resources.\<br>\- \<strong>\Data Encryption\</strong>\: Encrypting data both at rest and in transit to protect it from unauthorized access.\<br>\- \<strong>\Firewalls and Intrusion Detection Systems (IDS)\</strong>\: Blocking malicious traffic and detecting suspicious activities within the cloud environment.\<br>\\<br>\\<h2>\AI and Cloud Security\</h2>\\<br>\AI's role in \<strong>\cloud security\</strong>\ is becoming increasingly pivotal. AI technologies, such as machine learning (ML) and behavioral analytics, are used to monitor user behaviors, detect anomalies, and predict potential security incidents before they occur. With AI, organizations can automate threat detection, reducing response times and improving the overall security posture. However, the integration of AI also brings challenges related to data privacy, algorithm transparency, and the potential for false positives or negatives in threat detection. [ID:xxxxxxxxx]\<br>\\<br>\\<h2>\Conclusion\</h2>\\<br>\As businesses continue to migrate to the cloud, implementing a comprehensive cloud security strategy is paramount to mitigate risks. While AI plays a vital role in advancing cloud security, human oversight remains essential in developing and refining these tools to ensure they operate effectively and ethically.\",\n  \"systemOptions\": [\n    \"What are the key differences between public and private cloud security?\",\n    \"How does AI improve cybersecurity in cloud environments?\",\n    \"What best practices can enterprises follow to ensure secure cloud adoption?\",\n    \"How does the integration of AI influence the overall security landscape in cloud environments?\",\n    \"What are the potential risks of AI in cloud security, and how can they be mitigated?\"\n  ],\n  \"importantTerms\": [\n    {\n      \"term\": \"Zero Trust Architecture\",\n      \"definition\": \"A security framework that mandates verification of all users and devices before granting access to any resource, regardless of whether they are inside or outside the network perimeter. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"SOC 2 Compliance\",\n      \"definition\": \"A set of security standards that ensures companies securely manage data to protect the privacy and interests of their clients. It is particularly important for cloud service providers. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"Cloud Encryption\",\n      \"definition\": \"A process of transforming data into a secure format that can only be read or decrypted by those with the correct access credentials or decryption keys. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"IAM (Identity and Access Management)\",\n      \"definition\": \"A framework of policies and technologies to ensure that the right users and devices can access the right resources at the right times and for the right reasons in a cloud environment.\"\n    }\n  ],\n  \"definition\": [\n    {\n      \"term\": \"Cloud Security\",\n      \"definition\": \"Cloud security, also known as cloud computing security, is a set of policies, practices, and technologies designed to protect cloud-based data, applications, and infrastructure from cyberattacks, data breaches, and other security threats. As cloud computing services are increasingly used for business-critical processes, cloud security is essential for safeguarding both organizational and customer data. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"AI in Cloud Security\",\n      \"definition\": \"AI-driven cloud security uses advanced algorithms and machine learning models to predict, detect, and respond to security threats in real-time. By analyzing data patterns and behaviors, AI can automate threat identification and help reduce response times. However, it also raises concerns about privacy, biases in AI models, and over-reliance on automated systems. [ID:xxxxxxxxx]\"\n    }\n  ]\n}
  </example>
  <verification>
      - All responses must be strictly based on \"ttSources\". No external knowledge, speculation, or assumptions are allowed.
    	- Verify that the response is a JSON and compare it's structure to format from the example to make sure it's a valid JSON. If it is does not match the example formatting below, then fix the JSON and retest it. For example, correct the field <summary> to \"summary\" with quotes instead of tags. Also, replace any missing commas from the JSON when necessary.
    - Verify the in-line citations in brackets [ID:<content_key>] after all sentences containing information from <ttSources>.
    </verification>
</task>
        <ttSources>${relevantDocuments}</ttSources>`
            ;
    }

    function constructPrompt2(relevantDocuments) {
        return `<task>
  <role> You are an enterprise search engine that helps users to get the most thorough information from their search query using solely the information from <ttSources>. </role>
  <tone> Formal, technical, and precise.</tone>
  <steps>
    - Analyze the user content to identify the core topic and any supplemental topics
    - Rewrite the user's search query into a well-formed question if necessary.
    - Expand on the query as much as possible, like with related follow-up questions, expanding on relevant topics, and refining the scope for clarity.
    - Answer the expanded version of the question in JSON format using only the provided content from <ttSources>.
    - Follow the example JSON format below from the example when formatting the responses. Field titles should always use quotes, like "summary".
    - The JSON output must contain these 4 fields:
      1. \"summary\": A short, succint response covering the key points.   
         • Use proper grammar, punctuation, and markup.  
         • Include inline citations (e.g. [ID:<content_key>]) at the end of any facts or ideas taken from <ttSources>.
  </steps>
  <example>
  {\n  \"summary\": \"Cloud security is a critical component in the modern business landscape, offering scalable and on-demand resources that enhance operational efficiency and minimize security risks. [ID:xxxxxxxxx]\<br>\\<br>\\<h2>\Introduction to Cloud Security\</h2>\\<br>\Cloud security is essential for safeguarding sensitive data and ensuring that cloud services remain compliant with privacy and regulatory standards. [ID:xxxxxxxxx]\<br>\As businesses increasingly rely on cloud-based solutions for their operations, the need for robust security frameworks becomes more urgent. AI is playing an increasing role in \<strong>\cloud security\</strong>\, helping organizations identify and mitigate threats more effectively by analyzing vast amounts of data in real-time. [ID:xxxxxxxxx]\<br>\\<br>\\<h2>\Key Components of Cloud Security\</h2>\\<br>\Cloud security encompasses several core elements to protect against data breaches, cyberattacks, and other threats:\<br>\\<br>\- \<strong>\Identity and Access Management (IAM)\</strong>\: Ensuring only authorized users can access cloud resources.\<br>\- \<strong>\Data Encryption\</strong>\: Encrypting data both at rest and in transit to protect it from unauthorized access.\<br>\- \<strong>\Firewalls and Intrusion Detection Systems (IDS)\</strong>\: Blocking malicious traffic and detecting suspicious activities within the cloud environment.\<br>\\<br>\\<h2>\AI and Cloud Security\</h2>\\<br>\AI's role in \<strong>\cloud security\</strong>\ is becoming increasingly pivotal. AI technologies, such as machine learning (ML) and behavioral analytics, are used to monitor user behaviors, detect anomalies, and predict potential security incidents before they occur. With AI, organizations can automate threat detection, reducing response times and improving the overall security posture. However, the integration of AI also brings challenges related to data privacy, algorithm transparency, and the potential for false positives or negatives in threat detection. [ID:xxxxxxxxx]\<br>\\<br>\\<h2>\Conclusion\</h2>\\<br>\As businesses continue to migrate to the cloud, implementing a comprehensive cloud security strategy is paramount to mitigate risks. While AI plays a vital role in advancing cloud security, human oversight remains essential in developing and refining these tools to ensure they operate effectively and ethically.\",\n  \"systemOptions\": [\n    \"What are the key differences between public and private cloud security?\",\n    \"How does AI improve cybersecurity in cloud environments?\",\n    \"What best practices can enterprises follow to ensure secure cloud adoption?\",\n    \"How does the integration of AI influence the overall security landscape in cloud environments?\",\n    \"What are the potential risks of AI in cloud security, and how can they be mitigated?\"\n  ],\n  \"importantTerms\": [\n    {\n      \"term\": \"Zero Trust Architecture\",\n      \"definition\": \"A security framework that mandates verification of all users and devices before granting access to any resource, regardless of whether they are inside or outside the network perimeter. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"SOC 2 Compliance\",\n      \"definition\": \"A set of security standards that ensures companies securely manage data to protect the privacy and interests of their clients. It is particularly important for cloud service providers. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"Cloud Encryption\",\n      \"definition\": \"A process of transforming data into a secure format that can only be read or decrypted by those with the correct access credentials or decryption keys. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"IAM (Identity and Access Management)\",\n      \"definition\": \"A framework of policies and technologies to ensure that the right users and devices can access the right resources at the right times and for the right reasons in a cloud environment.\"\n    }\n  ],\n  \"definition\": [\n    {\n      \"term\": \"Cloud Security\",\n      \"definition\": \"Cloud security, also known as cloud computing security, is a set of policies, practices, and technologies designed to protect cloud-based data, applications, and infrastructure from cyberattacks, data breaches, and other security threats. As cloud computing services are increasingly used for business-critical processes, cloud security is essential for safeguarding both organizational and customer data. [ID:xxxxxxxxx]\"\n    },\n    {\n      \"term\": \"AI in Cloud Security\",\n      \"definition\": \"AI-driven cloud security uses advanced algorithms and machine learning models to predict, detect, and respond to security threats in real-time. By analyzing data patterns and behaviors, AI can automate threat identification and help reduce response times. However, it also raises concerns about privacy, biases in AI models, and over-reliance on automated systems. [ID:xxxxxxxxx]\"\n    }\n  ]\n}
  </example>
  <verification>
      - All responses must be strictly based on \"ttSources\". No external knowledge, speculation, or assumptions are allowed.
    	- Verify that the response is a JSON and compare it's structure to format from the example to make sure it's a valid JSON. If it is does not match the example formatting below, then fix the JSON and retest it. For example, correct the field <summary> to \"summary\" with quotes instead of tags. Also, replace any missing commas from the JSON when necessary.
    - Verify the in-line citations in brackets [ID:<content_key>] after all sentences containing information from <ttSources>.
    </verification>
</task>
        <ttSources>${relevantDocuments}</ttSources>`
            ;
    }
    function showPagePromptErrors(errorId) {
        console.log("showPagePromptErrors() start: " + errorId);

        if ($('#chat-form-container').data('errorId') === errorId) {
            console.log("Error already displayed. Skipping.");
            return;
        }

        var errorMessage = getErrorMessage(errorId);

        if (errorId === "1") {
            showSystemResponse(errorHtmlChat2, 'system');
            $('.chat-message-container:last-child').addClass('error');
        }

        // the existing error‐UI logic:
        $('#chatInput').hide();
        $('#chat-status-container').hide();
        $('#chatModal #chatForm .chat-form-textarea-wrapper').addClass('disabled');
        $('#aiDisclaimer').hide();
        $('<div class="error-wrapper">' + errorMessage.errorHtmlForm + '</div>')
            .insertBefore('#chatInput');

        $('#chat-form-container').data('errorId', errorId);

        // the- NEW: clear any loading state so updateSearchButtonState can re-enable the-
        $('.content-search, .related-search-container, .tabs-container, #tab-content-container, #blank-recs')
            .removeClass('loading-blur');

    }





    // Function to update contextStorage in localStorage with new system options and page summary
    function updateContextStorage(systemOption, chatData) {
        // Retrieve existing contextStorage from localStorage
        var contextStorage = JSON.parse(localStorage.getItem('contextStorage')) || { pageviews: [] };

        // Check if the current page is already recorded
        var currentPageView = contextStorage.pageviews.find(page => page.pageURL === window.location.href);

        // If the current page is not recorded yet, create a new page view
        if (!currentPageView) {
            currentPageView = {
                pageURL: window.location.href,
                pageSummary: currentPageSummary,
                chatQuestions: [],
                userInteractions: []
            };
            contextStorage.pageviews.push(currentPageView);
        }

        // Add the new system option to the chat questions if systemOption is not null

        if (chatData) {
            currentPageView.userInteractions.push(chatData);
        }

        // Save the updated contextStorage back to localStorage
        localStorage.setItem('contextStorage', JSON.stringify(contextStorage));
    }


    // Function to conditionally populate chatHistory based on the user's input using if statement
    function getChatHistory(userInput) {
        let chatHistory = "";  // Initialize chatHistory as an empty string
        currentChatHistory = $(".chat-message-container").slice(-maxChatHistory).map(function () {
            return $(this).text().trim();
        }).get().join("\n\n");
        // console.log('potential chat history (not included):', currentChatHistory);
        // Check if the question is open-ended
        if ((isOpenEndedQuestion(userInput)) || includeChatHistory) {
            // If true, populate chatHistory with the current chat history
            chatHistory = currentChatHistory;
        }
        return chatHistory;
    }
    // Function to determine if the question is open-ended and requires chat history
    function isOpenEndedQuestion(question) {
        return openEndedPatterns.some(pattern => pattern.test(question));
    }
    // Toggle function that expands/collapses both the AI overview text and the reference list.

    // Bind once, up front
    $(document).on('click', '.ai-overview-show-more', function () {
        const $btn = $(this);
        const $container = $('.ai-overview-container');
        const $overview = $('#ai-overview-text');
        const $refs = $('#reference-list-container');
        const $gradient = $('.gradientWhite');
        const $showMore = $('.ai-overview-show-more-container');

        // Toggle our "expanded" flag class
        $container.toggleClass('expanded');
        $showMore.toggleClass('expanded');

        if ($container.hasClass('expanded')) {
            // Expanded state
            $btn.text('- Show Less');
            $('.definition-section').show();

            $overview.css({ overflow: 'visible', maxHeight: 'none' });
            $refs.css({ overflowY: 'visible', maxHeight: 'none' });
            $gradient.css({ display: 'none' });
        } else {
            // Collapsed state
            $btn.text('+ Show More');
            $('.definition-section').hide();
            $overview.css({ overflow: 'hidden', maxHeight: '210px' });
            $refs.css({ overflowY: 'auto', maxHeight: '200px' });
            $gradient.css({ display: 'block' });
            $showMore.css({ paddingTop: 'unset' });
        }
    });



    // Helper function to check if the overview text overflows.
    function checkOverviewOverflow() {
        const overviewText = document.getElementById('ai-overview-text');
        const toggleButton = document.getElementById('toggleOverviewButton');
        if (overviewText && toggleButton) {
            // Temporarily remove any collapsed styles to get the full scrollHeight.
            overviewText.style.maxHeight = 'none';
            overviewText.style.overflow = 'visible';

            // Compare the scrollHeight (full height) with clientHeight (visible height).
            if (overviewText.scrollHeight <= overviewText.clientHeight + 1) { // add a pixel buffer
                toggleButton.style.display = 'none';
            } else {
                toggleButton.style.display = 'block';
            }
        }
    }

    // Switch tabs when user clicks a tab in the nav
    $(document).on('click', '.tabs li.tab', function (e) {
        e.preventDefault(); // optional
        // Remove 'active' from all tabs
        $('.tabs li.tab').removeClass('active');
        // Add 'active' to the clicked tab
        $(this).addClass('active');

        // Hide all tab-content
        $('.tab-content').removeClass('active');

        // Show the matching tab-content
        var tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });


    function updateTabDescriptor() {
        // remove any old descriptors everywhere
        $('.tab-descriptor').remove();

        // find the currently active pane
        const $activePane = $('.tab-content.active');
        if (!$activePane.length) return;

        const id = $activePane.attr('id');
        // skip the "All" tab entirely
        if (id === 'all-tab') return;

        const text = tabDescriptors[id];
        if (!text) return;

        // inject right after the first <h2>
        $activePane
            .find('h2')
            .first()
            .after(`<p class="tab-descriptor">${text}</p>`);
    }


    $(document).on('click', '.tabs li.tab', function (e) {
        e.preventDefault();
        $('.tabs li.tab').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').removeClass('active');
        const tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');

        updateTabDescriptor();
    });

    $(document).ready(updateTabDescriptor);


    // Switch tabs when user clicks "See More" link in the "All" tab
    $(document).on('click', '.see-more-link', function (e) {
        e.preventDefault();
        // The data-tab attribute tells us which tab to open
        var tabId = $(this).data('tab');

        // Deactivate 'All' tab
        $('.tabs li.tab').removeClass('active');
        $('.tab-content').removeClass('active');

        // Activate the chosen tab
        $('.tabs li.tab[data-tab="' + tabId + '"]').addClass('active');
        $('#' + tabId).addClass('active');

        // Smooth-scroll the tabs bar into view
        $('html, body').animate({
            scrollTop: $('.tabs-container').offset().top - 150
        }, 300);

        updateTabDescriptor();
    });

    function loadMarkedLibrary(callback) {
        var script = document.createElement('script');
        script.onload = function () {
            console.log("GenAIChat- Marked library loaded successfully.");
            // console.log(marked); // shows the marked function is available
            window.markedAvailable = true;
            if (callback) callback();
        };
        script.onerror = function () {
            console.error("GenAIChat- Failed to load marked library.");
        };
        script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
        document.head.appendChild(script);
    }

    loadMarkedLibrary(function () {
        // console.log("Marked library loaded successfully.");
        // console.log(marked); // Check if marked is defined
        window.marked = marked; // Explicitly assign to window
        window.markedAvailable = true;
    });

    function setupCustomMarkedRenderer() {
        var renderer = new marked.Renderer();


        marked.setOptions({
            renderer: renderer,
            gfm: true,
            breaks: true,
            sanitize: true,
        });
    }
    //Markup function
    function convertTextToHTML(markdownText) {
        let processedText;

        if (window.markedAvailable && marked.parse) {
            processedText = marked.parse(markdownText);
        } else if (window.markedAvailable) {
            console.warn("GenAIChat- Marked.parse is not available, falling back to marked if possible.");
            processedText = marked(markdownText); // Fallback
        } else {
            console.warn("GenAIChat- Marked library is not yet available.");
            processedText = markdownText; // Return the markdown text as is
        }

        // Remove empty <p> tags
        processedText = processedText.replace(/<p>\s*<\/p>/g, '');

        //Close any unclosed <p> tags before certain block elements
        processedText = processedText.replace(/<p>(?!<\/p>)([^<]+?)(?=<div|<ul|<ol|<blockquote|<h\d)/g, function (match, content) {
            return `<p>${content.trim()}</p>`;
        });
        if (processedText.endsWith("<p>")) {
            processedText = processedText.slice(0, -3) + "</p>";
        }

        // Convert numbered lists but skip those inside <a> tags
        processedText = processedText.replace(/(^|\n)(\d+\.\s.*?)(?=\n\d+\.|\n$|\n\n)/g, function (match, p1, p2) {
            if (p2.includes('<a')) return match;
            return `${p1}<ol><li>${p2.trim()}</li></ol>`;
        });

        // Convert bulleted lists (-) outside of <a> tags
        processedText = processedText.replace(/(^|\n)-\s(.*?)(?=\n-|$)/g, function (match, p1, p2) {
            if (p2.includes('<a')) return match;
            return `${p1}<ul><li>${p2.trim()}</li></ul>`;
        });

        // Merge adjacent <ul> and <ol> lists
        processedText = processedText.replace(/<\/ul>\s*<ul>/g, '').replace(/<\/ol>\s*<ol>/g, '');

        // Ensure correct nesting of <ul> inside <ol> and vice versa
        processedText = processedText.replace(/<\/ul>\s*<\/ol>/g, '</ul>').replace(/<\/ol>\s*<\/ul>/g, '</ul>');

        // Correct list item tags and remove redundant <li> elements
        processedText = processedText.replace(/<\/li>\s*<li>/g, '</li><li>');

        // Clean up wrapping <p> tags around lists
        processedText = processedText.replace(/<p>\s*(<ol>|<ul>)/g, '$1').replace(/(<\/ol>|<\/ul>)\s*<\/p>/g, '$1');

        //  Remove any trailing <p></p> at the end of the processedText
        processedText = processedText.replace(/<p><\/p>\s*$/, '');

        return processedText;
    }

    // call setupCustomMarkedRenderer after marked is loaded
    loadMarkedLibrary(function () {
        setupCustomMarkedRenderer();
    });

    // Function to display the related search questions
    function displayRelatedSearch() {
        const relatedSearchContainer = $(".related-search-content");
        relatedSearchContainer.empty();
    
        // Icon URLs
        const ICON_EXPANDED = "https://media.techtarget.com/ux/apps/genai/chevron-up-solid.svg";
        const ICON_CLOSED = "https://media.techtarget.com/ux/apps/genai/chevron-down-solid.svg";
    
        systemOptions.forEach((option, index) => {
            relatedSearchContainer.append(`
            <div class="related-search-item">
              <div class="search-question">
                <span class="expand-title" data-index="${index}">${option}</span>
                <button class="expand-arrow expand-summary" data-index="${index}">
                  <img src="${ICON_CLOSED}" alt="Toggle summary" class="arrow-icon">
                </button>
              </div>
              <div class="summary-container" id="summary-${index}" style="display:none;">
                <p class="loading-text loading-blur">Loading...</p>
                <p class="summary-text" data-index="${index}"></p>
               
              </div>
              <hr class="separator-line">
            </div>
          `);
        });
        
        // After all items are added, check count and apply margin
        var relatedSearchItemsCount = $('.related-search-item').length;
        if (relatedSearchItemsCount > 3) {
            // Apply the CSS change properly
            $(".search-bar.desktop-search-bar").attr('style', 'margin-top: 600px !important');
        }
    
        $(document).on("click", ".search-question", function () {

            if ($('.related-search-container').hasClass('loading-blur')) return;
            // grab whatever data-index we can find
            var idx = $(this).data("index");
            if (idx === undefined) {
                idx = $(this).find(".expand-summary").data("index");
            }
    
            var $btn = $(".expand-summary[data-index=" + idx + "]");
            var $summary = $("#summary-" + idx);
            var $img = $btn.find("img");
            var isOpen = $summary.is(":visible");
    
            if (isOpen) {
                $summary.hide();
                $img.attr("src", ICON_CLOSED);
            } else {
                $summary.show();
                $img.attr("src", ICON_EXPANDED);
    
                var $text = $summary.find(".summary-text");
                var $loading = $summary.find(".loading-text");
    
                if (!fetchedSummaries[idx]) {
                    fetchRelatedSearchSummary(systemOptions[idx], idx, $text, $loading);
                } else {
                    $text.html(fetchedSummaries[idx]);
                    $loading.hide();
                }
            }
    
            // Consider integrating the "more than 3" logic here
            var openCount = $(".summary-container:visible").length;
            var base = relatedSearchItemsCount > 3 ? 600 : 450;  // Adjust base if more than 3 items
            var shift = 600;  // per-open increment
    
            $(".search-bar.desktop-search-bar")
              .attr('style', 'margin-top: ' + (base + openCount * shift) + 'px !important');
        });
    }

    // Function to fetch the summary for each related search item
    function fetchRelatedSearchSummary(userQuery, index, summaryText, loadingText) {
        loadingText.text("Loading…");

        fetchLLMOnly(userQuery)
            .then(function (rawResp) {
                // Validate 
                if (!rawResp
                    || !rawResp.choices
                    || !Array.isArray(rawResp.choices)
                    || rawResp.choices.length === 0
                    || !rawResp.choices[0].message
                    || typeof rawResp.choices[0].message.content !== 'string') {
                    throw new Error("Invalid AI response envelope.");
                }

                //Parse the JSON block from the assistant's content
                var parsed = parseLLMResponse(rawResp.choices[0].message.content);
                if (!parsed || typeof parsed.summary !== 'string') {
                    throw new Error("Couldn’t parse LLM JSON payload.");
                }
                return parsed;
            })
            .then(function (parsedResponse) {
                //Replace citation tokens with links
                var withCites = parseAndReplaceCitations2(parsedResponse.summary);

                // Strip an outer <p>..</p> if present
                if (withCites.indexOf('<p>') === 0 && withCites.lastIndexOf('</p>') === withCites.length - 4) {
                    withCites = withCites.slice(3, -4);
                }

                //Convert markdown/HTML cleanup
                var html = convertTextToHTML(withCites);

                //  Limit to 8 lines
                var snippet = limitSummaryLines(html, 8);

                // Render and cache
                summaryText.html(snippet);
                fetchedSummaries[index] = snippet;
                loadingText.text('');
                loadingText.hide();
            })
            .catch(function (err) {
                console.error('Error fetching related search summary:', err);
                loadingText.text('Failed to load summary.');
            });
    }



    // Function to fetch recommendations based on the userInput & chat response
    function fetchRecommendation(userInput, summary) {
        //chatHistory = chatDisplay.innerText;
        console.log("Summary without citations for recommendation API:", summary);
        console.log("User Input sent to recommendation API:", userInput);
        // console.log("URLs returned from context fetch for recommendation API: ", contentUrls);
        //promptComplete = false;
        var requestBody = {
            "input_document_type": "document_snippet",
            "documents_to_return": maxCards,
            "rank_score": "max_similarity_score",
            "rank_service": "google_semantic_ranker",
            // "input_documents": [userInput + summary], 
            "input_documents": [userInput], //no summary
            "input_filter": {
                "content_publish_date": ["" + pastDate + "", "" + todayDate + ""],
                "content_language": ["en"],
                "content_type": ["eGuide", "Video", "Webcast", "News", "Tip", "Feature", "Answer", "White Paper", "Whitepaper"] // Expanded types
            },
            "metadata": [
                "content_key",
                "content_title",
                "content_author",
                "content_summary",
                "content_format",
                "content_image_url",
                "content_publish_date",
                "content_type",
                "content_language",
                "content_primary_site_name",
                "content_web_url"
            ],
            "llm": "gemini-1.5-flash-001",
            "top_k": 1,
            "source": "Gen AI Search"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody,
            'fetchRecommendation'
        )
            .then(response => {
                if (!response.ok) {
                    showPagePromptErrors("1");
                    pushTrackingEvent("responseErrorShown", {
                        userQuery: userInput
                    });
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data || !data["input_document 0"] || !data["input_document 0"].Documents.length) {
                    console.warn("No recommendations found.");
                    pushTrackingEvent("emptyRecommendations", {
                        userQuery: userInput
                    });
                    showSystemResponse("Sorry, I'm not able to recommend any content at this time.");
                    return [];
                }

                let recommendations = data["input_document 0"].Documents;
                console.log("📄 Recommendation Data:", recommendations);

                console.log("Processed Recommendations:", recommendations);
                return recommendations;
                // });
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
                showPagePromptErrors("1");
                return [];
            });
    }

    function getErrorMessage(errorId) {
        for (var i = 0; i < errorObject.length; i++) {
            if (errorObject[i].errorCode === errorId) {
                return errorObject[i];
            }
        }
    }

    function categorizeRecommendation(recommendations) {
        // Define the buckets & matching keywords
        var RULES = [
            {
                key: 'whitepapersWebinars',
                types: ['white paper', 'e guide', 'eguide', 'ebook', 'case study', 'buyers guide', 'webinar'],
                formats: ['pdf', 'video']
            },
            {
                key: 'tips',
                types: ['tip', 'technical article', 'training guide', 'tutorial', 'assessment tool', 'faq']
            },
            {
                key: 'news',
                types: ['news', 'product news', 'press release', 'analyst news', 'conference', 'event'],
                sources: ['tt contributor']
            },
            {
                key: 'features',
                types: ['feature', 'analysis', 'opinion', 'blog', 'expert']
            },
            {
                key: 'answers',
                types: ['answer', 'q&a', 'definition', 'forrester research report', 'gartner magic quadrant']
            }
        ];

        // Prepare the output object (plus a temporary "uncategorized" bucket)
        var categorized = {
            whitepapersWebinars: [],
            tips: [],
            news: [],
            features: [],
            answers: [],
            uncategorized: []
        };

        // Normalization helper
        function norm(str) {
            if (!str) return '';
            return str.toString()
                .trim()
                .toLowerCase()
                .replace(/[-_]/g, ' ');
        }

        // Walk each doc
        for (var i = 0; i < recommendations.length; i++) {
            var doc = recommendations[i];
            var type = norm(doc.metadata && doc.metadata.content_type);
            var format = norm(doc.metadata && doc.metadata.content_format);
            var source = norm(doc.metadata && doc.metadata.content_source);
            var placed = false;

            // Try each rule
            for (var j = 0; j < RULES.length; j++) {
                var r = RULES[j];
                if (
                    (r.types && r.types.indexOf(type) !== -1) ||
                    (r.formats && r.formats.indexOf(format) !== -1) ||
                    (r.sources && r.sources.indexOf(source) !== -1)
                ) {
                    categorized[r.key].push(doc);
                    placed = true;
                    break;
                }
            }

            // If nothing matched, stash in uncategorized
            if (!placed) {
                console.warn('Unclassified "' + type + '", falling back to features:', doc);
                categorized.uncategorized.push(doc);
            }
        }

        // Merge any uncategorized into features, then drop the helper bucket
        if (categorized.uncategorized.length) {
            Array.prototype.push.apply(categorized.features, categorized.uncategorized);
        }
        delete categorized.uncategorized;

        console.log('Categorized Recommendations:', categorized);
        return categorized;
    }





    function displayCategorizedContent(categorizedResults) {
        var tabMappings = {
            whitepapersWebinars: { tab: "whitepapers-tab", listId: "whitepapers-tab", previewClass: "whitepapers-preview" },
            news: { tab: "news-tab", listId: "news-tab", previewClass: "news-preview" },
            tips: { tab: "tips-tab", listId: "tips-tab", previewClass: "tips-preview" },
            features: { tab: "features-tab", listId: "features-tab", previewClass: "features-preview" },
            answers: { tab: "answers-tab", listId: "answers-tab", previewClass: "answers-preview" }
        };

        Object.keys(tabMappings).forEach(function (catKey) {
            var cfg = tabMappings[catKey];
            var count = (categorizedResults[catKey] || []).length;
            var $tab = $('.tabs li.tab[data-tab="' + cfg.tab + '"]');

            // remove any existing badge
            $tab.find('.tab-count').remove();

            // only show if >0
            if (count > 0) {
                $tab.append(
                    '<span class="tab-count">' + count + '</span>'
                );
            }
        });




        // Clear out old items but keep each section’s <h2>
        Object.keys(tabMappings).forEach(function (key) {
            var cfg = tabMappings[key];
            var listEl = document.getElementById(cfg.listId);
            var previewEl = document.querySelector("." + cfg.previewClass);
            if (listEl) {
                var oldItems = listEl.querySelectorAll(".content-item");
                for (var i = 0; i < oldItems.length; i++) {
                    oldItems[i].parentNode.removeChild(oldItems[i]);
                }
            }
            if (previewEl) {
                var children = Array.prototype.slice.call(previewEl.children);
                children.forEach(function (child) {
                    if (child.tagName !== "H2") {
                        child.parentNode.removeChild(child);
                    }
                });
            }
        });

        // Walk each category in the results
        Object.keys(categorizedResults).forEach(function (category) {
            var mapping = tabMappings[category];
            if (!mapping) return;

            var listEl = document.getElementById(mapping.listId);
            var previewEl = document.querySelector("." + mapping.previewClass);
            var items = categorizedResults[category] || [];

            // the Whitepapers Preview (first 2) the
            if (category === "whitepapersWebinars" && previewEl) {
                items.slice(0, 2).forEach(function (item, idx) {
                    var md = item.metadata || {};
                    var title = md.content_title || item.content_title;
                    var author = md.content_primary_site_name || md.content_author;
                    var date = md.content_publish_date
                        ? new Date(md.content_publish_date)
                            .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
                        : "Unknown Date";
                    var type = (md.content_type || "WHITE PAPER").toUpperCase();
                    var run = md.content_format === "Video" ? "60 mins" : "";
                    var img = md.content_image_url || getFallbackImageUrl();
                    var snippet = limitSummaryLines(item.top_chunk_text || "", 1);
                    var url = item.content_web_url;

                    // if it’s a bitpipe URL change the author
                    if (url.match(/bitpipe\.com/)) {
                        author = "TechTarget Content Hub";
                    }

                    var wrapper = document.createElement("div");
                    wrapper.className = "preview-item whitepaper-item";
                    wrapper.innerHTML =
                        '<div class="whitepaper-container">' +
                        (idx === 0
                            ? '<a href="' + url + '" target="_blank" rel="noopener">' +
                            '<img src="' + img + '" class="whitepaper-image" alt="Thumbnail">' +
                            '</a>'
                            : ''
                        ) +
                        '<div class="whitepaper-details">' +
                        '<a href="' + url + '" target="_blank" class="whitepaper-title">' + title + '</a>' +
                        '<p class="whitepaper-meta">' +
                        author + ' |  ' + date + ' | <span class="whitepaper-description">' + type + '</span>' +
                        '</p>' +
                        (run ? '<p class="whitepaper-runtime">' + run + '</p>' : '') +
                        '<p class="whitepaper-snippet">' + snippet + '</p>' +
                        '<a href="' + url + '" target="_blank" class="view-more-button">VIEW MORE</a>' +
                        '</div>' +
                        '</div>';

                    previewEl.appendChild(wrapper);

                    // swap in fetched thumbnail if needed
                    if (url.match(/brighttalk\.com|bitpipe\.com/)) {
                        fetchAndExtractImageUrls(url).then(function (fetched) {
                            if (fetched) {
                                var imgEl = wrapper.querySelector("img.whitepaper-image");
                                if (imgEl) imgEl.src = fetched;
                            }
                        });
                    }
                });

                // add “View More” link
                var more = document.createElement("a");
                more.href = "#";
                more.className = "see-more-link";
                more.setAttribute("data-tab", "whitepapers-tab");
                more.textContent = "View More Whitepapers & Webinars";

                var icon = document.createElement("div");
                icon.className = "right-arrow-icon";

                more.appendChild(icon);

                previewEl.appendChild(more);
            }

            // the Whitepapers Full List the
            if (category === "whitepapersWebinars" && listEl) {
                items.forEach(function (item) {
                    var md = item.metadata || {};
                    var title = md.content_title || item.content_title;
                    var author = md.content_primary_site_name || md.content_author;
                    var date = md.content_publish_date
                        ? new Date(md.content_publish_date)
                            .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
                        : "Unknown Date";
                    var type = (md.content_type || "WHITE PAPER").toUpperCase();
                    var run = md.content_format === "Video" ? "60 mins" : "";
                    var img = md.content_image_url || getFallbackImageUrl();
                    var snippet = limitSummaryLines(item.top_chunk_text || "", 3);
                    var url = item.content_web_url;

                    // if it’s a bitpipe URL
                    if (url.match(/bitpipe\.com/)) {
                        author = "TechTarget Content Hub";
                    }

                    var wrapper = document.createElement("div");
                    wrapper.className = "content-item whitepaper-item";
                    wrapper.innerHTML =
                        '<div class="whitepaper-container">' +
                        '<a href="' + url + '" target="_blank" rel="noopener">' +
                        '<img src="' + img + '" class="whitepaper-image" alt="Thumbnail">' +
                        '</a>' +
                        '<div class="whitepaper-details">' +
                        '<a href="' + url + '" target="_blank" class="whitepaper-title">' + title + '</a>' +
                        '<p class="whitepaper-meta">' +
                        author + ' |  ' + date + ' | <span class="whitepaper-description">' + type + '</span>' +
                        '</p>' +
                        (run ? '<p class="whitepaper-runtime">' + run + '</p>' : '') +
                        '<p class="whitepaper-snippet">' + snippet + '</p>' +
                        '<a href="' + url + '" target="_blank" class="view-more-button">VIEW MORE</a>' +
                        '</div>' +
                        '</div>';
                    listEl.appendChild(wrapper);

                    if (url.match(/brighttalk\.com|bitpipe\.com/)) {
                        fetchAndExtractImageUrls(url).then(function (fetched) {
                            if (fetched) {
                                var imgEl = wrapper.querySelector("img.whitepaper-image");
                                if (imgEl) imgEl.src = fetched;
                            }
                        });
                    }
                });
            }

            // the News, Tips, Features, Answers the
            if (category !== "whitepapersWebinars") {
                items.forEach(function (item, idx) {
                    var md = item.metadata || {};
                    var title = md.content_title || item.content_title;
                    var author = md.content_primary_site_name || md.content_author;
                    var date = md.content_publish_date
                        ? new Date(md.content_publish_date)
                            .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
                        : "Unknown Date";
                    var snippet = limitSummaryLines(item.top_chunk_text || "", 3);
                    var url = item.content_web_url;

                    // full tab entry
                    if (listEl) {
                        var fullDiv = document.createElement("div");
                        fullDiv.className = "content-item preview-item whitepaper-item";
                        fullDiv.innerHTML =
                            '<div class="whitepaper-container">' +
                            '<div class="whitepaper-details">' +
                            '<a href="' + url + '" target="_blank" class="whitepaper-title">' + title + '</a>' +
                            '<p class="whitepaper-meta"> ' + date + ' | By ' + author + '</p>' +
                            (snippet
                                ? '<p class="whitepaper-snippet">' + snippet + '</p>'
                                : ''
                            ) +
                            '<a href="' + url + '" target="_blank" class="view-more-button">VIEW MORE</a>' +
                            '</div>' +
                            '</div>';
                        listEl.appendChild(fullDiv);
                    }

                    // “All” preview (first 3 only)
                    if (previewEl && idx < 3) {
                        var prevDiv = document.createElement("div");
                        prevDiv.className = "preview-item whitepaper-item";
                        prevDiv.innerHTML =
                            '<div class="whitepaper-container">' +
                            '<div class="whitepaper-details">' +
                            '<a href="' + url + '" target="_blank" class="whitepaper-title">' + title + '</a>' +
                            '<p class="whitepaper-meta"> ' + date + ' </p>' +
                            (snippet
                                ? '<p class="whitepaper-snippet">' + snippet + '</p>'
                                : ''
                            ) +
                            '</div>' +
                            '</div>';
                        previewEl.appendChild(prevDiv);
                    }


                });

                var headingText = "";
                var h2 = previewEl.querySelector("h2");
                if (h2 && h2.textContent) {
                    headingText = h2.textContent.trim();
                }

                const previewItems = previewEl.querySelectorAll('.preview-item');
                if (previewItems.length > 0 && headingText) {
                    const more = document.createElement("a");
                    more.href = "#";
                    more.className = "see-more-link";
                    more.setAttribute("data-tab", mapping.tab);
                    more.textContent = "View More " + headingText;

                    var icon = document.createElement("div");
                    icon.className = "right-arrow-icon";

                    more.appendChild(icon);

                    previewEl.appendChild(more);
                    //previewEl.appendChild(more);
                }
            }
        });

        styleTabContentItems();
        $('.tabs li.tab').each(function () {
            const $tab = $(this);
            const dataTab = $tab.data('tab');              // e.g. "news-tab", "terms-tab", etc.
            if (dataTab === 'all-tab') return;               // never hide the “All” tab itself

            // parse the badge count (non-numeric → 0)
            const cnt = parseInt($tab.find('.tab-count').text(), 10) || 0;
            if (cnt === 0) {
                // hide the tab button
                $tab.hide();
                // hide the full-list panel
                $('#' + dataTab).hide();

                // hide the preview section in #all-tab
                //    derive "terms-preview" from "terms-tab" → remove "-tab", add "-preview"
                const previewClass = dataTab.replace('-tab', '') + '-preview';
                const $preview = $('#all-tab').find('.' + previewClass);

                $('#all-tab').find('.' + previewClass).hide();

                $preview.next('hr.separator-line').hide();
            }
        });



    }

    function fetchAndExtractImageUrls(url) {
        console.log(`Processing image URL for: ${url}`);

        if (url.includes('brighttalk.com')) {
            // For brighttalk URLs, always use the brighttalk logo.
            const brighttalkLogo = "https://assets.brighttalk.com/images/bt-tt-logo.svg";
            return Promise.resolve(brighttalkLogo);
        } else if (url.includes('bitpipe.com')) {
            // For bitpipe, extract the ID to construct the image URL.
            const idMatch = url.match(/RES\/(\d+_\d+)/);
            if (idMatch) {
                const id = idMatch[1];
                const constructedImageUrl = `https://cdn.ttgtmedia.com/bitpipe/covers/${id}_lg.jpg`;
                // Validate the constructed URL; if invalid, use the fallback image.
                return validateImageUrl(constructedImageUrl).then(isValid => {
                    return isValid ? constructedImageUrl : "https://cdn.ttgtmedia.com/bitpipe/covers/Whitepaper_315X408.jpg";
                });
            } else {
                // If the ID cannot be extracted, return the fallback image for bitpipe.
                return Promise.resolve("https://cdn.ttgtmedia.com/bitpipe/covers/Whitepaper_315X408.jpg");
            }
        } else {
            // For all other URLs, use the generic fallback image.
            return Promise.resolve(getFallbackImageUrl());
        }
    }





    // Function to generate a random integer between min and max, inclusive
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // Function to get a fallback image URL
    function getFallbackImageUrl() {
        const rndInt = randomIntFromInterval(1, 60);
        const formattedNumber = rndInt < 10 ? `0${rndInt}` : `${rndInt}`;
        return `https://media.techtarget.com/devUx/custom-1044/hero${formattedNumber}.jpg`;
    }
    // Updated fetchHtml function using the native fetch API
    function fetchHtml(url) {
        console.log(`Fetching HTML from: ${url}`);
        return fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text(); // Use text() instead of JSON for HTML content
            })
            .then(function (html) {
                console.log('image HTML fetched successfully.');
                return html;
            })
            .catch(function (error) {
                console.error('Error fetching the image HTML:', error.message);
                pushTrackingEvent("fetchError");
                if (url.includes('bitpipe.com')) {
                    // Extract ID and construct the image URL based on the consistent pattern
                    const idMatch = url.match(/RES\/(\d+_\d+)/);
                    if (idMatch) {
                        const id = idMatch[1];
                        constructedImageUrl = `https://cdn.ttgtmedia.com/bitpipe/covers/${id}_lg.jpg`;

                        console.log(`Constructed image URL for bitpipe.com: ${constructedImageUrl}`);
                        return constructedImageUrl;
                    }
                }
                if (url.includes('brighttalk.com')) {

                    constructedImageUrl = `https://assets.brighttalk.com/images/bt-tt-logo.svg`;
                    console.log(`Constructed image URL for brighttalk.com: https://assets.brighttalk.com/images/bt-tt-logo.svg`);
                    return constructedImageUrl;

                }
                throw new Error('Failed to fetch HTML');
            });
    }






    // Helper function to limit the summary text to a certain number of lines (4 lines in this case)
    function limitSummaryLines(text, maxLines) {
        const lines = text.split("\n");
        return lines.slice(0, maxLines).join("\n");
    }

    // Function to generate a random integer between min and max, inclusive
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // Function to get a fallback image URL
    function getFallbackImageUrl() {
        const rndInt = randomIntFromInterval(1, 60);
        const formattedNumber = rndInt < 10 ? `0${rndInt}` : `${rndInt}`;
        return `https://media.techtarget.com/devUx/custom-1044/hero${formattedNumber}.jpg`;
    }
    // Updated fetchHtml function using the native fetch API
    function fetchHtml(url) {
        console.log(`Fetching HTML from: ${url}`);
        return fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text(); // Use text() instead of JSON for HTML content
            })
            .then(function (html) {
                console.log('image HTML fetched successfully.');
                return html;
            })
            .catch(function (error) {
                console.error('Error fetching the image HTML:', error.message);
                pushTrackingEvent("fetchError");
                if (url.includes('bitpipe.com')) {
                    // Extract ID and construct the image URL based on the consistent pattern
                    const idMatch = url.match(/RES\/(\d+_\d+)/);
                    if (idMatch) {
                        const id = idMatch[1];
                        const constructedImageUrl = `https://cdn.ttgtmedia.com/bitpipe/covers/${id}_lg.jpg`;
                        console.log(`Constructed image URL for bitpipe.com: ${constructedImageUrl}`);
                        return constructedImageUrl;
                    }
                }
                if (url.includes('brighttalk.com')) {

                    const constructedImageUrl = `https://assets.brighttalk.com/images/bt-tt-logo.svg`;
                    console.log(`Constructed image URL for brighttalk.com: https://assets.brighttalk.com/images/bt-tt-logo.svg`);
                    return constructedImageUrl;

                }
                throw new Error('Failed to fetch HTML');
            });
    }
    // The rest of the code remains unchanged
    function extractImageUrls(html, url) {
        console.log('Parsing HTML for image workaround');

        var idMatch = url.match(/RES\/(\d+_\d+)/);
        var id = idMatch[1];
        var constructedImageUrl = `https://cdn.ttgtmedia.com/bitpipe/covers/${id}_lg.jpg`;
        try {
            if (!url) {
                throw new Error('URL is not defined.');
            }

            var tempDiv = $('<div>').html(html);
            console.log('image HTML parsed.');
            let imgSrc = [];
            if (url.includes('brighttalk.com')) {
                // Extract images for brighttalk.com
                imgSrc = tempDiv.find('section.Section_Section40__iljNL img').map(function (i, el) {
                    return $(el).attr('src');
                }).get();
            } else if (url.includes('bitpipe.com')) {
                // Extract images for bitpipe.com
                imgSrc = tempDiv.find('div.abstractCoverBig img').map(function (i, el) {
                    return $(el).attr('src');
                }).get();
            } else {
                console.warn('Domain not recognized.');
            }

            let extractedImage = imgSrc.length > 0 ? imgSrc[0] : null;

            if (extractedImage) {
                console.log('First image URL found:', extractedImage);
                return validateImageUrl(extractedImage).then(function (isValid) {
                    if (isValid) {
                        return extractedImage;
                    } else {
                        console.warn('Image not found, returning hardcoded URL.');
                        return 'https://cdn.ttgtmedia.com/bitpipe/covers/Whitepaper_315X408.jpg';
                    }
                });
            } else {
                console.log('No images found in the specified section, returning hardcoded URL.');
                if (url.includes('bitpipe.com')) {
                    // Extract ID and construct the image URL based on the consistent pattern
                    const idMatch = url.match(/RES\/(\d+_\d+)/);
                    if (idMatch) {


                        console.log(`Constructed image URL for bitpipe.com: ${constructedImageUrl}`);
                        // return constructedImageUrl;
                    }
                }
                if (url.includes('brighttalk.com')) {

                    constructedImageUrl = `https://assets.brighttalk.com/images/bt-tt-logo.svg`;
                    console.log(`Constructed image URL for brighttalk.com: https://assets.brighttalk.com/images/bt-tt-logo.svg`);

                }
                return constructedImageUrl;
                // return Promise.resolve('https://cdn.ttgtmedia.com/bitpipe/covers/Whitepaper_315X408.jpg');
            }
        } catch (error) {
            console.error('Error during processing:', error.message);
            throw error;
        }
    }

    function validateImageUrl(url) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.onload = function () {
                resolve(true);
            };
            img.onerror = function () {
                resolve(false);
            };
            img.src = url;
        });
    }

    function styleTabContentItems() {
        ['news', 'tips', 'features'].forEach(tab => {
            document
                .querySelectorAll(`#${tab}-tab .content-item`)
                .forEach(item => {
                    item.classList.add('preview-item', 'whitepaper-item');

                    const details = item.querySelector('.content-details');
                    if (!details) return;

                    const wrapper = document.createElement('div');
                    wrapper.className = 'whitepaper-container';
                    item.replaceChild(wrapper, details);
                    wrapper.appendChild(details);

                    details.classList.add('whitepaper-details');

                    const title = details.querySelector('.content-title');
                    if (title) title.classList.replace('content-title', 'whitepaper-title');

                    const meta = details.querySelector('.content-meta');
                    if (meta) meta.classList.replace('content-meta', 'whitepaper-meta');

                    if (title && title.href) {
                        const btn = document.createElement('a');
                        btn.className = 'view-more-button';
                        btn.textContent = 'VIEW MORE';
                        btn.href = title.href;
                        btn.target = '_blank';
                        details.appendChild(btn);
                    }
                });
        });
    }

    function showBlankState() {
        $("#ai-overview-text")
            .text("Please enter a search above to get started.")
            .removeClass()            // clear any old formatting
            .addClass("blank-overview")
            .after('<div class="blank-overview-caution"></div>');
        $("#content-columns").addClass("blank-state");

        // collapse everything else into one “no results” panel
        const userTerm = $("#header-search-input").val() || "_____";
        const html = `
      <div id="blank-recs" class="blank-recs">
        <h1>0 Results for:</h1>
        <h2>${userTerm}</h2>
        <p>We're sorry, your search <strong>${userTerm}</strong> did not match any documents.</p>
        <p>May we suggest:</p>
        <ul>
          <li>Make sure all your words are correctly spelled.</li>
          <li>Try a different keyword.</li>
          <li>Try more general keywords.</li>
          <li>Try fewer keywords.</li>
        </ul>
      </div>
    `;
        // replace both the “related” and the reference/list sections
        $(".reference-list, .related-search-container, .tabs-container, #tab-content-container, .definition-section, .ai-overview-show-more-container").hide();
        // inject our blank state right under the overview
        $(".aiDisclaimer2").hide();
        $(".aiDisclaimer2").after(html);
        $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w')
            .hide();
    }


    function showErrorState() {
        const userTerm = $("#header-search-input").val() || "_____";
        const html = `
      <div id="blank-recs" class="blank-recs">
        <h1>0 Results for:</h1>
        <h2>${userTerm}</h2>
        <p>We're sorry, your search <strong>${userTerm}</strong> did not match any documents.</p>
        <p>May we suggest:</p>
        <ul>
          <li>Make sure all your words are correctly spelled.</li>
          <li>Try a different keyword.</li>
          <li>Try more general keywords.</li>
          <li>Try fewer keywords.</li>
        </ul>
      </div>
    `;
        /* var $form = $(this).is("form")
         ? $(this)
         : $(this).closest("form");
     
         //latestSearch = userQuery || storedSearchTerm || "" ; 
             latestSearch = $form.find(".header-search-input").val().trim() || localStorage.getItem('searchTerm') || "" ; 
     
             var $form = $(e.currentTarget).closest('form');
     var latestSearch = ( ($form.find('.header-search-input').val() || '').trim() )
                     || (localStorage.getItem('searchTerm') || '');
        */
        //   latestSearch = localStorage.getItem('searchTerm') || "" ; 

        // $('#ai-overview-text').addClass('error-message');
        rebuildErrorHtmlChat1();

        const errorHtml = useTechnicalError ? errorHtmlChat2 : errorHtmlChat1;


        //clear out the old overview…
        $("#ai-overview-text").html(errorHtml);

        $('.ai-overview-container #ai-overview-text').addClass('error-message');
        $('.ai-overview-container').addClass('error-shown');
        $('.aiDisclaimer2').addClass('error-shown');

        // replace both the “related” and the reference/list sections
        $(".reference-list, .related-search-container, .tabs-container, #tab-content-container, .definition-section, .ai-overview-show-more-container").hide();
        $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w').hide();
        // inject our blank state right under the overview
        $(".aiDisclaimer2").after(html);

        blankSearch = true;
        useTechnicalError = false;
        $('#ai-overview-text').addClass('error-message');
        $('.ai-overview-content').addClass('error-message');
        $("#content-columns").removeClass("blank-state");

    }


    function pushTrackingEvent(customEventName, eventProperties = {}) {
        // pull out the two “send” flags so they don't end up in the payload
        var sendToGA = eventProperties.sendToGA;
        var sendToOptEdge = eventProperties.sendToOptEdge;
        // make a clean copy of the rest
        var props = {};
        Object.keys(eventProperties).forEach(function (key) {
            if (key !== 'sendToGA' && key !== 'sendToOptEdge') {
                props[key] = eventProperties[key];
            }
        });

        //  Optimizely Edge 
        if (sendToOptEdge !== false) {
            window.optimizelyEdge = window.optimizelyEdge || [];
            window.optimizelyEdge.push({
                type: 'event',
                eventName: eventExpName + customEventName,
                properties: props
            });
        }

        //  Google Analytics 4 
        if (sendToGA === false) {
            return;
        }

        window.dataLayer = window.dataLayer || [];
        var ga4Payload = {
            event: 'optly_generic',
            type: eventExpName,
            value1: customEventName
        };

        // allow overriding the "type" field
        if (props.hasOwnProperty('type')) {
            ga4Payload.type = props.type;
        }

        // pull out up to two more values
        var otherKeys = Object.keys(props).filter(function (k) { return k !== 'type'; });
        if (otherKeys.length > 0) ga4Payload.value2 = props[otherKeys[0]];
        if (otherKeys.length > 1) ga4Payload.value3 = props[otherKeys[1]];

        window.dataLayer.push(ga4Payload);
    }

    function evaluateChatResponse(userInput, assistantResponse, relevantDocuments, userInstructions) {
        // Input sanitization to prevent injection issues.
        function sanitize(input) {
            if (typeof input !== 'string') return input;
            return input.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Sanitize all inputs.
        userInput = sanitize(userInput);
        assistantResponse = sanitize(assistantResponse);
        relevantDocuments = sanitize(relevantDocuments);
        userInstructions = sanitize(userInstructions || "");

        console.log("Evaluation: Starting evaluation for question:", userInput);

        // Define base criteria (always enabled)
        var baseCriteria = [
            {
                id: "content_check",
                prompt: "\n<task>\n  Check if the response answers the question: \"This was the question and this was the response, does it answer it?\"\n  <question>" + userInput + "</question>\n  <response>" + assistantResponse + "</response>\n  Respond ONLY with:\n  { \"score\": 1 } if the answer is relevant and complete.\n  { \"score\": 0 } if the answer is irrelevant or incomplete.\n</task>\n",
                errorMessage: "content mismatch"
            },
            {
                id: "citation_check",
                prompt: "\n<task>\n  Check if the response is supported by the provided context (i.e., uses sources from the data).\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if all claims are supported.\n  { \"score\": 0 } if any claim is unsupported.\n</task>\n",
                errorMessage: "citation mismatch"
            },
            {
                id: "error_check",
                prompt: "\n<task>\n  Check whether the response is simply an apology, excuse, or deflection rather than a substantive answer. (i.e., 'I'm sorry, I couldn't answer that question.', 'I don't have any relevant information on that.').\n  <response>" + assistantResponse + "</response>\n Respond ONLY with:\n  { \"score\": 1 } if the response provides a genuine answer.\n  { \"score\": 0 } if the response is an apology or excuse without real content in the response.\n</task>\n",
                errorMessage: "invalid response"
            }
        ];

        // Build additional criteria based on flags.
        // (Assumes additionalCriteriaFlags is defined globally)
        var additionalCriteria = [];

        if (additionalCriteriaFlags.instruction_compliance) {
            additionalCriteria.push({
                id: "instruction_compliance",
                prompt: "\n<task>\n  Confirm that the response follows the user's explicit instructions and internal guidelines.\n  <instructions>" + userInstructions + "</instructions>\n  <response>" + assistantResponse + "</response>\n  Respond ONLY with:\n  { \"score\": 1 } if instructions are followed.\n  { \"score\": 0 } if they are ignored.\n</task>\n",
                errorMessage: "instruction deviation"
            });
        }

        if (additionalCriteriaFlags.citation_faithfulness) {
            additionalCriteria.push({
                id: "citation_faithfulness",
                prompt: "\n<task>\n  Check that every claim, fact, or citation in the response is fully and accurately supported by the provided context.\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if every claim is consistent.\n  { \"score\": 0 } if any claim is hallucinated or inaccurate.\n</task>\n",
                errorMessage: "citation mismatch"
            });
        }

        if (additionalCriteriaFlags.faithfulness) {
            additionalCriteria.push({
                id: "faithfulness",
                prompt: "\n<task>\n  Evaluate the factual consistency of the generated answer against the provided context.\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if all factual claims are consistent.\n  { \"score\": 0 } if any fact is inconsistent.\n</task>\n",
                errorMessage: "faithfulness error"
            });
        }

        if (additionalCriteriaFlags.answer_relevancy) {
            additionalCriteria.push({
                id: "answer_relevancy",
                prompt: "\n<task>\n  Assess how pertinent the generated answer is to the given question.\n  <question>" + userInput + "</question>\n  <response>" + assistantResponse + "</response>\n  Respond ONLY with:\n  { \"score\": 1 } if the answer is directly relevant.\n  { \"score\": 0 } if it is off-topic or irrelevant.\n</task>\n",
                errorMessage: "answer relevancy error"
            });
        }

        if (additionalCriteriaFlags.context_recall) {
            additionalCriteria.push({
                id: "context_recall",
                prompt: "\n<task>\n  Confirm that the provided context covers all necessary information for the answer.\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if the context is comprehensive.\n  { \"score\": 0 } if key information is missing.\n</task>\n",
                errorMessage: "context recall error"
            });
        }

        if (additionalCriteriaFlags.context_relevancy) {
            additionalCriteria.push({
                id: "context_relevancy",
                prompt: "\n<task>\n  Verify that the retrieved context is relevant to both the question and the answer.\n  <question>" + userInput + "</question>\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if the context is highly relevant.\n  { \"score\": 0 } if it is largely irrelevant.\n</task>\n",
                errorMessage: "context relevancy error"
            });
        }

        if (additionalCriteriaFlags.citation_exists) {
            additionalCriteria.push({
                id: "citation_exists",
                prompt: "\n<task>\n  Confirm that the referenced 'text_chunk' exists in the provided context.\n  <question>" + userInput + "</question>\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if all citations exist.\n  { \"score\": 0 } if any are missing.\n</task>\n",
                errorMessage: "citation exists error"
            });
        }

        if (additionalCriteriaFlags.user_restrictions) {
            additionalCriteria.push({
                id: "user_restrictions",
                prompt: "\n<task>\n  Verify that the user did not alter the response structure, guidelines, or formatting.\n  <question>" + userInput + "</question>\n  <response>" + assistantResponse + "</response>\n  <context>" + relevantDocuments + "</context>\n  Respond ONLY with:\n  { \"score\": 1 } if the standard formatting is preserved.\n  { \"score\": 0 } if it has been altered.\n</task>\n",
                errorMessage: "user restrictions error"
            });
        }

        // Combine base and additional criteria.
        var evaluationChecks = baseCriteria.concat(additionalCriteria);
        console.log("Evaluation: Total checks to run:", evaluationChecks.length);

        // Helper function to evaluate a single criterion.
        function evaluateCheck(check) {
            var requestBody = {
                model: "gemini-2.0-flash-001",
                messages: [
                    {
                        role: "user",
                        content: [
                            { type: "text", text: check.prompt }
                        ]
                    }
                ],
                temperature: 0,
                max_tokens: 256,
                metadata: {
                    "trace_name": "optimizely",
                    "trace_user_id": "Gen AI Search",
                    "tags": ["request: ragas-evaluator", "model: gemini-2.0-flash", "check: " + check.id]
                }
            };

            console.log("Evaluation: Sending prompt for", check.id, ":", requestBody);

            return fetch("https://litellm.techtarget.com/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authBearer
                },
                body: JSON.stringify(requestBody)
            })
                .then(function (response) {
                    if (!response.ok) {
                        console.error("Evaluation: HTTP error during", check.id, "check:", response.status);
                        return { score: 0, error: "HTTP error" };
                    }
                    return response.json();
                })
                .then(function (data) {
                    var rawOutput = "";
                    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
                        rawOutput = data.choices[0].message.content.trim();
                    }
                    console.log("Evaluation: Raw output for", check.id, ":", rawOutput);
                    var parsed;
                    try {
                        parsed = JSON.parse(rawOutput);
                    } catch (e) {
                        console.error("Evaluation: JSON parsing error in", check.id, "check:", e);
                        return { score: 0, error: "parsing error" };
                    }
                    return parsed;
                })
                .catch(function (err) {
                    console.error("Evaluation: Error during", check.id, "evaluation:", err);
                    return { score: 0, error: "network or unknown error" };
                });
        }

        // Sequential execution with early exit.
        var promise = Promise.resolve();
        var aggregatedResults = {};

        for (var i = 0; i < evaluationChecks.length; i++) {
            (function (check) {
                promise = promise.then(function () {
                    console.log("Evaluation: Running check:", check.id);
                    return evaluateCheck(check).then(function (result) {
                        console.log("Evaluation: Result for", check.id, ":", result);
                        aggregatedResults[check.id] = result.score;
                        if (result.score === 0) {
                            console.error("Evaluation: Check failed for", check.id, "with error:", check.errorMessage);
                            // Early exit: throw error object to stop further evaluation.
                            throw { promptError: 0, failedCheck: check.id, error: check.errorMessage, results: aggregatedResults };
                        }
                        console.log("Evaluation: Check passed for", check.id);
                    });
                });
            })(evaluationChecks[i]);
        }

        return promise.then(function () {
            console.log("Evaluation: All checks passed. Aggregated results:", aggregatedResults);
            return { overall: true, results: aggregatedResults };
        }).catch(function (err) {
            console.error("Evaluation: Early exit due to failure. Error details:", err);
            return err;
        });
    }
    function updateSearchButtonState(e) {
        const $form = e
            ? $(e.currentTarget).closest("form.header-search")
            : $("form.header-search");
        const $input = $form.find(".header-search-input");
        const $button = $form.find(".header-search-submit");
        const disabledClass = "btn--disabled";

        const loadingAreas = [
            ".content-search",
            ".related-search-container",
            ".tabs-container",
            "#tab-content-container",
            "#blank-recs"
        ];
        const isLoading = loadingAreas.some(sel => $(sel).hasClass("loading-blur"));
        if (isLoading) {
            $button.prop("disabled", true).addClass(disabledClass);
            $('.ai-overview-container #ai-overview-text').removeClass('error-message');
            return;
        }

        if (!$input.val().trim()) {
            $button.prop("disabled", true).addClass(disabledClass);
        } else {
            $button.prop("disabled", false).removeClass(disabledClass);
        }
    }

    function setLoading(isLoading) {
        const targets = $(
            ".content-search, " +
            "#blank-recs, " +
            ".related-search-container, " +
            ".tabs-container, " +
            "#tab-content-container"
        );
        if (isLoading) {
            targets.addClass("loading-blur");
        } else {
            targets.removeClass("loading-blur");
        }
    }


    function fetchAuthorName(url) {
        return fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) {
                // parse into a DOM
                var doc = new DOMParser().parseFromString(html, 'text/html');
                var name = '';

                if (url.indexOf('bitpipe.com') !== -1) {
                    // look for <dt>Vendor:</dt><dd>…</dd>
                    var dts = doc.querySelectorAll('.listTypeBitpipeDownloadInfo dt');
                    for (var i = 0; i < dts.length; i++) {
                        if (dts[i].textContent.trim() === 'Vendor:') {
                            var dd = dts[i].nextElementSibling;
                            if (dd) {
                                name = dd.textContent.trim();
                            }
                            break;
                        }
                    }

                } else if (url.indexOf('techtarget.com') !== -1) {
                    // look under #author .main-article-author.v2 a
                    var authorLink = doc.querySelector('#author .main-article-author.v2 a');
                    if (authorLink) {
                        name = authorLink.textContent.trim();
                    }

                } else if (url.indexOf('brighttalk.com') !== -1) {
                    // first try “Presented by”
                    var presenter = doc.querySelector('[data-bdd="player-presenter"]');
                    if (presenter) {
                        name = presenter.textContent.trim();
                    }
                    // if still empty, fallback to channel name
                    if (!name) {
                        var channel = doc.querySelector('.ChannelInfo_ChannelInfo-Name__36UR1');
                        if (channel) {
                            name = channel.textContent.trim();
                        }
                    }
                }

                return name || 'Unknown Author';
            })
            .catch(function (err) {
                console.error('fetchAuthorName error for', url, err);
                return 'Unknown Author';
            });
    }

    function fetchLLMOnly(userQuery) {
        var promptText2 = constructPrompt2(JSON.stringify(promptJSON));

        // fetch to chat/completions *without* the preceding fetchRecommendation call
        const requestBody = {
            model: "gemini-2.0-flash-001",
            messages: [
                { role: "system", content: promptText2 },
                { role: "user", content: userQuery }
            ],
            temperature: 0,
            max_tokens: 4096
        };
        return fetch('https://litellm.techtarget.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authBearer
            },
            body: JSON.stringify(requestBody)
        })
            .then(r => r.json());
    }


    $(document).on('click', '.content-search-container a, .related-search-container a, .tabs-container a, #tab-content-container a, .reference-list a', function (e) {
        var $link = $(this);
        var href = $link.attr('href');

        // skip empty, anchors and mailto:
        if (!href || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0) {
            return;
        }

        e.preventDefault();

        // detect special domains
        var isHubOrBitpipe = href.includes('www.techtarget.com/hub/')
            || href.includes('bitpipe.com');

        // choose which query‐param to use
        var paramName = isHubOrBitpipe ? 'asrc' : 'Offer';
        var otherName = isHubOrBitpipe ? 'Offer' : paramName;

        // detect existing params
        var hasOther = new RegExp('([?&])' + otherName + '=', 'i').test(href);
        var hasParam = new RegExp('([?&])' + paramName + '=', 'i').test(href);

        // on hub/bitpipe, convert any existing Offer= → asrc=
        if (isHubOrBitpipe && hasOther) {
            href = href.replace(
                new RegExp('([?&])' + otherName + '=', 'i'),
                '$1' + paramName + '='
            );

            //if correct param isn't already present, append it
        } else if (!hasParam) {
            var sep = href.indexOf('?') > -1 ? '&' : '?';
            href = href + sep + paramName + '=' + promoCode;
        }

        $link.attr('href', href);
        window.location = href;
    });

    function parseAndReplaceCitations2(text) {
        if (!text || typeof text !== 'string') {
            console.warn("parseAndReplaceCitations received non-string input:", text);
            return "";
        }

        console.log("Processing citations in text...");


        const citationRegex = /\[ID:(\d+(?:,\s*(?:ID:)?\d+)*)\]/g;
        let citations = {};            // { rawID: { number, title, url, text } }
        matchedCitations = [];         // reset global
        citationCounter = 1;

        let match;
        while ((match = citationRegex.exec(text)) !== null) {
            // match[1] is the “123, 456” part
            const rawIDs = match[1].split(/,\s*(?:ID:)?/);
            rawIDs.forEach(rawID => {
                rawID = rawID.trim();
                if (!citations[rawID]) {
                    // look up the doc by citationNumber
                    const doc = referenceMetadata.find(d => d.citationNumber === rawID);
                    if (doc) {



                        // build URL with promoCode or asrc
                        const urlObj = new URL(doc.url);
                        // decide param name based on domain
                        const isHubOrBitpipe = urlObj.href.includes('www.techtarget.com/hub/')
                            || urlObj.href.includes('bitpipe.com');
                        const paramName = isHubOrBitpipe ? 'asrc' : 'Offer';
                        urlObj.searchParams.append(paramName, promoCode);


                        citations[rawID] = {
                            number: citationCounter++,
                            title: doc.title || "Unknown Title",
                            url: urlObj.toString(),
                            text: doc.text || ""
                        };
                        matchedCitations.push(citations[rawID]);
                        console.log(`Mapped [ID:${rawID}] → ${citations[rawID].title}`);
                    } else {
                        console.warn(`No document found for citationNumber=${rawID}`);
                    }
                }
            });
        }


        let newText = text.replace(citationRegex, (_, ids) => {
            return ids
                .split(/,\s*(?:ID:)?/)
                .map(id => {
                    const c = citations[id.trim()];
                    if (c) {
                        return `<sup class="citation">[<a href="${c.url}" target="_blank" title="${c.title}">${c.number}</a>]</sup>`;
                    } else {
                        return `[ID:${id.trim()}]`;
                    }
                })
                .join(", ");
        });


        if (matchedCitations.length) {
            let refHtml = `
    <div class="references">
      <h3>References</h3>
      <ul class="citation-list">`;
            matchedCitations.forEach(c => {
                refHtml += `
        <li>[${c.number}] <a href="${c.url}" target="_blank">${c.title}</a></li>`;
            });
            refHtml += `
      </ul>
    </div>`;
            newText += refHtml;
        }

        console.log("Final parsed text:\n", newText);
        return newText;
    }

    function fetchDefinitions(userInput) {
        console.log("Fetching definitions for:", userInput);

        const requestBody = {
            input_document_type: "document_snippet",
            documents_to_return: 6,             // only 3 definitions
            rank_score: "max_similarity_score",
            rank_service: "google_semantic_ranker",
            input_documents: [userInput],
            input_filter: {
                content_type: ["Definition"],   // <-- only definitions
                content_language: ["en"],
                content_publish_date: [pastDate, todayDate]
            },
            metadata: [
                "content_id",
                "content_key",
                "content_type",
                "content_title",
                "content_source",
                "content_summary",
                "content_source_table",
                "content_group",
                "content_web_url",
                "content_asset_url",
                "content_image_url",
                "content_author",
                "content_language",
                "content_primary_site_name",
                "content_decision_type",
                "content_publish_date",
                "content_publish_enabled",
                "content_max_activity_date",
                "content_lead_boost",
                "content_permissions",
                "content_grade",
                "content_file_uri",
                "content_format",
                "content_cms",
                "major_content_segment_signal_category_id", "significant_content_segment_signal_category_id", "discussed_content_segment_signal_category_id", "major_content_technology_signal_category_id", "significant_content_technology_signal_category_id", "discussed_content_technology_signal_category_id", "major_content_product_signal_category_id", "significant_content_product_signal_category_id", "discussed_content_product_signal_category_id", "major_content_company_signal_category_id", "significant_content_company_signal_category_id", "discussed_content_company_signal_category_id", "content_vendor_signal_bpes_org_name", "content_entities", "content_purpose", "content_mod_date"
            ],
            llm: "gemini-1.5-flash-001",
            top_k: 1,
            source: "Gen AI Search"
        };

        return logFetchError(
            fetch('https://genai-content.techtarget.com/recommendations/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            }),
            'https://genai-content.techtarget.com/recommendations/',
            requestBody,
            'fetchDefinitions'
        )
            .then(res => {
                if (!res.ok) throw new Error(`Status ${res.status}`);
                return res.json();
            })
            .then(data => {
                var docs = [];
                if (data["input_document 0"] && data["input_document 0"].Documents) {
                    docs = data["input_document 0"].Documents.slice(0, 6);
                }
                console.log("Definitions returned:", docs);
                return docs.map(doc => {
                    // split into lines, take first 3, rejoin
                    const lines = (doc.top_chunk_text || "").split('\n');
                    const truncated = lines.slice(0, 2).join('\n');
                    return {
                        term: doc.metadata.content_title,
                        definition: doc.content_summary || truncated,
                        url: doc.content_web_url
                    };
                });
            })
            .catch(err => {
                console.error("Error fetching definitions:", err);
                return [];  // fail 
            });
    }

    //LOADING‐BLUR TIMEOUT MONITOR
    var _loadingStart = null;
    var _monitorInterval = 500;  // check every half‑second (tweakable)
    var _blurSelectors = [
        ".content-search",
        ".related-search-container",
        ".tabs-container",
        "#tab-content-container",
        "#blank-recs"
    ].join(", ");

    function _checkLoadingTimeout() {
        // Is anything still blurred?
        var isBlurred = $(_blurSelectors).is(".loading-blur");
        if (isBlurred) {
            if (_loadingStart === null) {
                _loadingStart = Date.now();
            } else if (Date.now() - _loadingStart >= loadingTimeoutMs) {
                console.error("Loading blur exceeded " + (loadingTimeoutMs / 1000) + "s; triggering error state.");
                _loadingStart = null;
                $(_blurSelectors).removeClass("loading-blur");
                showErrorState(); //Show error
                var $searchBox = $('#main-content .header-search-input-2');
  
                if ($('.ai-error-container').is(':visible')) {
                       if (!$searchBox.hasClass('errorSearchBox')) {
                           $searchBox.addClass('errorSearchBox');
                       }
                   } else {
                       $searchBox.removeClass('errorSearchBox');
                   }
                 
            }
        } else {
            // all clear
            _loadingStart = null;
            var $searchBox = $('#main-content .header-search-input-2');
  
            if ($('.ai-error-container').is(':visible')) {
                   if (!$searchBox.hasClass('errorSearchBox')) {
                       $searchBox.addClass('errorSearchBox');
                   }
               } else {
                   $searchBox.removeClass('errorSearchBox');
               }
             
        }
    }

    setInterval(_checkLoadingTimeout, _monitorInterval);


    jQuery(function ($) {

        // Offer/asrc
        function updatePromoParam($link) {
            var href = $link.attr('href');
            if (!href || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0) return;

            var isHubOrBitpipe = href.includes('www.techtarget.com/hub/') ||
                href.includes('bitpipe.com');
            var paramName = isHubOrBitpipe ? 'asrc' : 'Offer';
            var otherName = isHubOrBitpipe ? 'Offer' : paramName;

            var hasOther = new RegExp('([?&])' + otherName + '=', 'i').test(href);
            var hasParam = new RegExp('([?&])' + paramName + '=', 'i').test(href);

            if (isHubOrBitpipe && hasOther) {
                href = href.replace(
                    new RegExp('([?&])' + otherName + '=', 'i'),
                    '$1' + paramName + '='
                );
            } else if (!hasParam) {
                var sep = href.indexOf('?') > -1 ? '&' : '?';
                href = href + sep + paramName + '=' + promoCode;
            }

            $link.attr('href', href);
        }

        // UTMs
        function appendUtmParams(href) {
            try {
                const url = new URL(href, window.location.href);
                // if it's a BrightTALK link, switch medium
                const medium = url.hostname.includes("brighttalk.com")
                    ? "BRIGHTTALK4"
                    : utm_medium;

                url.searchParams.set("utm_medium", medium);
                url.searchParams.set("utm_source", utm_source);
                url.searchParams.set("utm_campaign", utm_campaign);
                return url.toString();
            } catch (e) {
                return href;
            }
        }


        // click handler
        var selector = [
            '.content-search-container a',
            '.related-search-container a',
            '.tabs-container a',
            '#tab-content-container a',
            '.reference-list a'
        ].join(', ');

        $(document).on('click contextmenu', selector, function (e) {
            var $link = $(this);
            var href = $link.attr('href');

            if (!href || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0) {
                return;
            }

            updatePromoParam($link);

            href = $link.attr('href');            // re‑read after promo update
            $link.attr('href', appendUtmParams(href));

        });
    });



    function rebuildErrorHtmlChat1() {
        var t = ($("#header-search-input").val() || "").trim();
        if (!t) {
            var s = localStorage.getItem("searchTerm") || "";
            try { var j = JSON.parse(s); t = (j && j.value) ? j.value : s; } catch (e) { t = s; }
        }
        t = t || (latestSearch || "''");
        errorHtmlChat1 =
            '<div class="ai-error-container"><div class="ai-error-content"><h2>Your search for "' +
            t +
            '" returned no results.</h2><p>Try rephrasing your query using complete sentences or breaking down complex queries into simpler ones. You can ask questions in a conversational way, just as you would ask a colleague.</p><p class="ai-error-suggestions">Here are a few suggestions:</p><ul class="ai-error-suggestions-list"><li>"How can implementing AI reduce our operational costs?"</li><li>"What products or tools should we use for monitoring distributed systems?"</li><li>"What is containerization and how does it work?"</li></ul></div></div>';
    }

    function showBlankState() {
        // Use the error HTML structure for blank state
        const blankStateHtml = `
            <div class="error-message-container">
                <h3>Please enter a search above to get started.</h3>
                <div class="blank-overview-caution"></div>
            </div>
        `;
        
        // Clear previous content and add blank state using error structure
        $("#ai-overview-text").html(blankHtmlChat);
        
        // Add error styling classes to make the structure consistent
        $('.ai-overview-container #ai-overview-text').addClass('error-message');
        $('.ai-overview-container').addClass('error-shown');
        $('.aiDisclaimer2').addClass('error-shown');
        $('#ai-overview-text').addClass('error-message');
        $('.ai-overview-content').addClass('error-message');
        
        // Add blank state class to content columns
        $("#content-columns").addClass("blank-state");
        
        // Create the no results panel
        const userTerm = $("#header-search-input").val() || "_____";
        const html = `
          <div id="blank-recs" class="blank-recs">
            <h1>0 Results for:</h1>
            <h2>${userTerm}</h2>
            <p>We're sorry, your search <strong>${userTerm}</strong> did not match any documents.</p>
            <p>May we suggest:</p>
            <ul>
              <li>Make sure all your words are correctly spelled.</li>
              <li>Try a different keyword.</li>
              <li>Try more general keywords.</li>
              <li>Try fewer keywords.</li>
            </ul>
          </div>
        `;
        
        // Hide elements and add the blank state content
        $(".reference-list, .related-search-container, .tabs-container, #tab-content-container, .definition-section, .ai-overview-show-more-container").hide();
        $(".aiDisclaimer2").after(html);
        $('#search .ad-wrapper.ad-inline.ad-desktop, #search .ad-wrapper.page-header-ad.ad-desktop-w').hide();
        
        // Set blank search flag
        blankSearch = true;
    }




  

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  function pickRandomUnique(arr, n) {
    const copy = arr.slice();
    //  shuffle (partial)
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(n, copy.length));
  }
  

  function buildBlankHtmlChat() {
    const picks = pickRandomUnique(SUGGESTED_QUESTIONS, 3);
    const lis = picks.map(q => {
      const safe = escapeHtml(q);
      // clickable & accessible
      return `<li><a href="#" class="suggested-question" data-query="${safe}">${safe}</a></li>`;
    }).join("");
  
    return `
    <div class="ai-error-container" id="blank-suggested-questions">
      <div class="ai-error-content">
        <h2>What would you like to research today?</h2>
        <p class="ai-error-suggestions">Here are a few suggestions:</p>
        <ul class="ai-error-suggestions-list">${lis}</ul>
      </div>
    </div>`;
  }
  
  // Keep a string variable for any legacy usage 
  var blankHtmlChat = buildBlankHtmlChat();
  

  (function ensureSuggestionStyles() {
    if (document.getElementById('suggested-questions-style')) return;
    const style = document.createElement('style');
    style.id = 'suggested-questions-style';
    style.textContent = `    
      .ai-error-suggestions-list a.suggested-question {
        text-decoration: underline;
        color: inherit;
        cursor: pointer;
      }      
    `;
    document.head.appendChild(style);
  })();
  

  $(document).on('click', '.ai-error-suggestions-list a.suggested-question', function (e) {
    e.preventDefault();
  
    // Prefer data attribute; fall back to text (strip the decorative quotes)
    const q = $(this).data('query') || $(this).text().replace(/^"|"$/g, '').trim();
    if (!q) return;
  
    // Put it in the input so users see what’s being searched
    $('#header-search-input').val(q).trigger('input');
  
    // Clear "duplicate query" guard so the same suggestion can be clicked twice if desired
    if (typeof lastQuery !== 'undefined') { lastQuery = ''; }
  
    // Kick off the search
    storedSearchTerm = q;
        // If we have a previous search term, trigger the AI search
        //handleSearch(storedSearchTerm);
        showBlankState();
        // blankSearch = true;
        onSearchyBypass();
    //handleSearch(q);
  });
  

  function renderBlankSuggestionsOnce() {
    // Avoid duplicates 
    $('#blank-suggested-questions').remove();
    const html = buildBlankHtmlChat();
    var $searchBox = $('#main-content .header-search-input-2');
  
    // (visible on load in the layout).

    $('.aiDisclaimer2').after(html);

    if ($('.ai-error-container').is(':visible')) {
        if (!$searchBox.hasClass('errorSearchBox')) {
            $searchBox.addClass('errorSearchBox');
        }
    } else {
        $searchBox.removeClass('errorSearchBox');
    }
  }
  
  // Call when it enter the blank state

  const _origShowBlankState = typeof showBlankState === 'function' ? showBlankState : null;
  if (_origShowBlankState) {
    window.showBlankState = function () {
      _origShowBlankState();
      renderBlankSuggestionsOnce();
    };
  } else {
    // If showBlankState isn’t found, still try to render once on load.
    $(document).ready(renderBlankSuggestionsOnce);
  }
  
// First visible link in features 
function setupFirstLinkInViewportTracking(){
    const container = document.querySelector('.features-preview');
    if (!container) return;
  
    // Exclude tab CTAs & in-page anchors. 
    const CANDIDATE_SELECTOR = 'a[href]:not(.see-more-link):not([href^="#"])';
  
    let fired = false;
    let io = null;
    let mo = null;
  
    function yPercentWithinContainer(el, cont) {
      const docTop = window.scrollY || document.documentElement.scrollTop;
      const elTop = el.getBoundingClientRect().top + docTop;
      const contRect = cont.getBoundingClientRect();
      const contTop = contRect.top + docTop;
      const contH = Math.max(1, cont.scrollHeight, contRect.height);
      return Math.min(100, Math.max(0, ((elTop - contTop) / contH) * 100));
    }
  
    function pickFirstContentLink() {
      const links = container.querySelectorAll(CANDIDATE_SELECTOR);
      return links.length ? links[0] : null;     // strictly DOM order
    }
  
    function startObserver(link) {
      if (!link) return;
  
      io = new IntersectionObserver((entries) => {
        if (fired) return;
        const e = entries[0];
        if (e && e.isIntersecting) {
          fired = true;
  
          pushTrackingEvent('result1EnteredViewport', {
            href: link.getAttribute('href') || '',
            text: (link.textContent || '').trim().slice(0, 120),
            yPercent: Math.round(yPercentWithinContainer(link, container))
          });
  
          io && io.disconnect();
          mo && mo.disconnect();
        }
      }, {
        root: null,
        threshold: 0,                 
      });
  
      io.observe(link);
    }
  
    // if not present yet, wait for DOM additions.
    const first = pickFirstContentLink();
    if (first) {
      startObserver(first);
    } else {
      mo = new MutationObserver(() => {
        const l = pickFirstContentLink();
        if (l) {
          startObserver(l);
          mo.disconnect();
        }
      });
      mo.observe(container, { childList: true, subtree: true });
    }
  }
  
  function openAllTab() {
    // Remove active class from all tabs
    $('.tabs li.tab').removeClass('active');
    
    // Add active class to the all-tab
    $('.tabs li.tab[data-tab="all-tab"]').addClass('active');
    
    // Remove active class from all tab content areas
    $('.tab-content').removeClass('active');
    
    // Add active class to the all-tab content
    $('#all-tab').addClass('active');
    
    // Call the update function to maintain consistency
    updateTabDescriptor();
}
  
// Function to check if the click handler is working
function checkAndRebindSearchQuestionHandler() {
    // Test if the handler exists by checking event data
    var hasHandler = false;
    var events = $._data(document, "events");
    const relatedSearchContainer = $(".related-search-content");
    //    relatedSearchContainer.empty();
    
        // Icon URLs
        const ICON_EXPANDED = "https://media.techtarget.com/ux/apps/genai/chevron-up-solid.svg";
        const ICON_CLOSED = "https://media.techtarget.com/ux/apps/genai/chevron-down-solid.svg";
   /* 
    if (events && events.click) {
        $.each(events.click, function(i, event) {
            // Check if our specific handler exists
            if (event.selector === ".search-question") {
                hasHandler = true;
                return false; // Break the loop
                console.log("has handler already");
            }
        });
    }
    */
    // If handler doesn't exist or we want to ensure it's bound correctly
    if (!hasHandler) {
        console.log("Rebinding search-question click handler");
        
        // First, unbind any existing handlers to prevent duplicates
        $(document).off("click", ".search-question");
        
        // Then rebind the handler
        $(document).on("click", ".search-question", function () {
            if ($('.related-search-container').hasClass('loading-blur')) return;
            
            // grab whatever data-index we can find
            var idx = $(this).data("index");
            if (idx === undefined) {
                idx = $(this).find(".expand-summary").data("index");
            }
        
            var $btn = $(".expand-summary[data-index=" + idx + "]");
            var $summary = $("#summary-" + idx);
            var $img = $btn.find("img");
            var isOpen = $summary.is(":visible");
        
            if (isOpen) {
                $summary.hide();
                $img.attr("src", ICON_CLOSED);
            } else {
                $summary.show();
                $img.attr("src", ICON_EXPANDED);
        
                var $text = $summary.find(".summary-text");
                var $loading = $summary.find(".loading-text");
        
                if (!fetchedSummaries[idx]) {
                    fetchRelatedSearchSummary(systemOptions[idx], idx, $text, $loading);
                } else {
                    $text.html(fetchedSummaries[idx]);
                    $loading.hide();
                }
            }
        
            var relatedSearchItemsCount = $('.related-search-item').length;
        if (relatedSearchItemsCount > 3) {
            // Apply the CSS change properly
            $(".search-bar.desktop-search-bar").attr('style', 'margin-top: 600px !important');
        }
            var openCount = $(".summary-container:visible").length;
            var base = relatedSearchItemsCount > 3 ? 600 : 450;  // Adjust base if more than 3 items
            var shift = 600;  // per-open increment
        
            $(".search-bar.desktop-search-bar")
              .attr('style', 'margin-top: ' + (base + openCount * shift) + 'px !important');
        });
        
        return true; // Handler was rebound
    }
    
    return false; // Handler was already bound
}


});
}, "dependencies": []}, {"id": "b55f57a5912b4df7bbdbe572136b659b", "type": "append", "selector": "head", "value": "<style>body {background:#fff;}\nstrong {font-family: \"Public Sans Bold\"}\n#main-content, .main-content {margin-top:0;\nmax-width: 1200px;\n}\n/*#search .content-columns .content-left {display:none;}*/\n#search .content-columns .content-left {Width:800px !important;}\n.content-center {margin-left:0}\n.header-leaderboard.ad-desktop {background:#fff;}\n#search .ad-wrapper.ad-inline {\n  margin: 0 auto 25px auto;\n}\n.search-sidebar {\n  width: 300px;\n  float: right;\n  position: absolute;\n}\n\n.viewing-range-section {\n  position: relative !important;\n  z-index: 10 !important;\n  display: flex !important;\n  align-items: center !important;\n  width:200px;\n  margin-left:40px;\n  top: -25px;\n      order: 2;    \n    }\n\n\n\n.gradientWhite,\n.gradientSpacer {\n  pointer-events: none;\n}\n\n\n\n\n\n/* Reset/Hide old layout */\n.hide {\n    display: none; \n}\n\n/* Container for everything */\n.content-search {\n  display: flex;\n      flex-direction: column;\n      width: calc(100% + 80px);\n      /* max-width: 1200px; */\n      margin: 0 auto;\n      font-family: \"Public Sans\", sans-serif;\n      left: -40px;\n      position: relative;\n}\n.search-controls-container {    \n  position: relative;\n  display: flex;\n  left:-40px;\n  width: calc(100% + 80px);\n  flex-flow: nowrap;\n}\n.search-controls {width: calc(100% - 240px)}\n\n/* =========================\n   AI Overview & References\n   ========================= */\n.ai-overview-container {\n  /*  background-color: #00B3AD0A; /* Light teal */\n    padding: 0px;\n  \tpadding-bottom: unset;\n    position: relative;\n    margin-bottom: 20px;\n    display:block;\n    max-height: 300px;\n    overflow: hidden;\n}\n.ai-overview-columns {\n  display:flex;\n  flex-flow: column;\n}\n\n.ai-overview-content {\n    /* Reserves space on the right for the reference list */\n    padding-right: 360px;\n    box-sizing: border-box;\n}\n\n.ai-overview-title {\n  font-weight: bold;\n  margin-bottom: 15px;\n  text-align: left;\n  font: bold 18px/23px \"Public Sans Bold\";\n  letter-spacing: 0px;\n  color: #323232;\n  opacity: 1;\n}\n\n.ai-overview-content p {\n    font-size: 16px;\n    line-height: 1.5;\n    overflow: hidden;\n    transition: max-height 0.3s ease;\n  \tcolor:#323232;\n    margin-top:0;\n}\n\n.ai-icon {\n    color: #008080;\n    top: 2px;\n    margin-right: 10px;\n}\n\n.ai-overview-container button {\n    background: none;\n    border: none;\n    color: #008080;\n    font-size: 14px;\n    cursor: pointer;\n    margin-top: 10px;\n  \twidth: 100%;\n}\n\n/* Reference list (positioned absolutely inside .ai-overview-container) */\n.reference-list {\n    background-color: #fff;\n    border: 1px solid #ddd;\n    padding: 20px;\n  \tmax-height: 300px;\n  \t/*min-height: 450px;*/\n    overflow-y: auto;\n    border-radius: 3px;\n    width: 340px;\n    position: absolute;\n    top: 60px;\n    right: 0px;\n    box-sizing: border-box;\n}\n\n.reference-list h3 {\n    font-size: 18px;\n    margin-bottom: 10px;\n}\n\n.reference-list ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.reference-list li {\n    margin-bottom: 8px;\n    font-size: 14px;\n}\n\n.reference-list a {\n    text-decoration: none;\n    color: #008080;\n}\n\n.reference-list a:hover {\n    text-decoration: underline;\n}\n\n/* =========================\n   Related to your search\n   ========================= */\n.related-search-container {\n    margin-bottom: 40px;\n}\n\n.related-search-container h2 {\n    font-size: 20px;\n    margin-bottom: 10px;\n    color: #333;\n}\n\n.related-search-content {\n  margin-top:20px  ;\n  border-top: 1px solid #e6e6e6;\n  padding-top:10px;\n\n}\n\n.related-search-content img {\n    float: left;\n    margin-right: 15px;\n    max-width: 150px;\n    border-radius: 4px;\n}\n\n.related-search-content p {\n    font-size: 14px;\n    line-height: 1.5;\n  \tmax-height: fit-content;\n    overflow: hidden;\n}\n\n/* =========================\n   Terms you should know\n   ========================= */\n.terms-container {\n    margin-bottom: 20px;\n}\n\n.terms-container h2 {\n    font-size: 20px;\n    margin-bottom: 10px;\n    color: #333;\n}\n\n.terms-list {\n    list-style-type: none;\n    padding: 0;\n}\n\n.terms-list li {\n    \n    margin-bottom: 8px;\n    padding: 10px;\n    border-radius: 4px;\n    font-size: 14px;\n}\n\n/* =========================\n   Whitepapers & Webinars\n   ========================= */\n.whitepapers-webinars-container {\n    margin-bottom: 20px;\n}\n\n.whitepapers-webinars-container h2 {\n    font-size: 20px;\n    margin-bottom: 10px;\n    color: #333;\n}\n\n.whitepapers-webinars-content {\n    background-color: #f9f9f9;\n    padding: 15px;\n    border-radius: 8px;\n}\n\n.whitepapers-webinars-content img {\n    float: left;\n    margin-right: 15px;\n    max-width: 150px;\n    border-radius: 4px;\n}\n\n.whitepapers-webinars-content p {\n    font-size: 14px;\n    line-height: 1.5;\n}\n\n/* =========================\n   Related News\n   ========================= */\n.related-news-container {\n    margin-bottom: 20px;\n}\n\n.related-news-container h2 {\n    font-size: 20px;\n    margin-bottom: 10px;\n    color: #333;\n}\n\n.related-news-content {\n    background-color: #f9f9f9;\n    padding: 15px;\n    border-radius: 8px;\n}\n\n.related-news-content img {\n    float: left;\n    margin-right: 15px;\n    max-width: 150px;\n    border-radius: 4px;\n}\n\n.related-news-content p {\n    font-size: 14px;\n    line-height: 1.5;\n}\n\n/* =========================\n   Definition Section\n   ========================= */\n.definition-section {\n    background-color: #e6f4f1; \n    color: white !important;\n    padding: 15px;\n    border-radius: 8px;\n    height: auto;\n  \twidth: 70%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    box-sizing: border-box;\n}\n\n\n#definition-term {\n   text-align: left;\nfont: normal normal bold 16px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #008080;\nopacity: 1;\n  \n}\n\n.definition-title {\ntext-align: left;\nfont: italic normal normal 16px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #666666;\nopacity: 1;\nmargin-left:0;\n}\n\n#definition-text {\n    text-align: left;\nfont: normal normal normal 16px/20px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\nopacity: 1;\n}\n\n/* =========================\n   Responsive Tweaks\n   ========================= */\n@media (max-width: 1024px) {\n  .search-controls-container {    \n    left: -20px;\n    width: calc(100% + 20px);\n  }\n  .ai-overview-content {\n        padding-right: 0;\n    }\n    .reference-list {\n        position: relative;\n        width: 100%;\n        max-height: none;\n        top: auto;\n        right: auto;\n        margin-top: 20px;\n      \n    }\n    .ai-overview-container {\n        margin-bottom: 30px;\n    }\n    .related-search-content img,\n    .whitepapers-webinars-content img,\n    .related-news-content img {\n        float: none;\n        display: block;\n        margin: 0 auto 15px auto;\n        max-width: 100%;\n    }\n}\n\n/* Wrapper to ensure spacing */\n.error-wrapper {\n  margin: 20px 0;\n  text-align: center;\n}\n\n/* Main error container box */\n.ai-error-container {\n  border: 1px solid #cce7e7;\n  background-color: #e6f7f7;\n  padding: 20px;\n  border-radius: 8px;\n  max-width: 600px;\n  margin: 0 auto;  /* center horizontally */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Icon styling */\n.ai-error-icon {\n  font-size: 40px;\n  color: #008080;  /* teal */\n  margin-bottom: 10px;\n}\n\n/* Headline + message */\n.ai-error-content h2 {\n  font-size: 1.5rem;\n  color: #008080;\n  margin-bottom: 8px;\n}\n\n.ai-error-content p {\n  font-size: 1rem;\n  color: #333;\n  margin: 0;\n}\n.search-controls {\n  position: relative;\n  display: flex;\n  flex-flow: column;\n}\n\n/* \n.search-controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 0 20px; \n  min-height: 400px;\n  position:absolute\n\n}\n*/\n#content-columns > div.top-gradient-bar > div.search-controls\n{display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  height: 200px;\n\t\n}\n\n/* Search Box */\n\n.searchbox-section form {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 100px);\n}\n#main-content .header-search {position:relative;}\n#main-content .header-search-input-2 {\n  width: 100%;\n  display:block;\n  height:63px;\n  padding: 10px 20px;\n  margin-right: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size:17px;\n  padding-right:45px;\n}\n\n#main-content .header-search-submit {\n  background-color: #008080;\n  color: #fff;\n  padding: 8px 14px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width:43px;\n  height:43px;\n}\n#main-content .header-search-submit:hover {\n  background-color: #006666;\n}\n#main-content .header-search-submit i.icon {\n  font-size:30px;\n  top: -3px;\n  left:-3px;\n}\n/* Viewing Range */\n\n.viewing-range-section label {\n  margin-right: 8px;\n  font-size: 16px;\n  color:#666;\n}\n\n.viewing-range-section select {\n  padding: 10px 20px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  width: 221px;\n  height: 40px;\n  \n}\n\n@media (max-width: 768px) {\n  .search-controls {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  /*\n  .viewing-range-section {\n    margin-top: 10px;\n  }\n    */\n}\n\n.aiDisclaimer {\n  margin: 60px 0 40px 0;\n  color:#666;\n  font-size:14px;\n}\np.aiDisclaimer-text {font-size:14px;}\n\n@media (min-width: 1280px) {\n    .definition-title {       \n        float: none !important;\n      \n    }\n  #definition-text {\n  margin-top:0px;\n  color: #666\n  }\n  \n}\n\n#main-content .header-search-submit {\n    background-color: #00B3AD;\n    color: #fff;\n    padding: 10px 10px;\n    border-radius: 50%;\n    border-width: 10px;\n    cursor: pointer;\n    margin-left: -65px;\n}\n\n.tabs-container {\n  margin: 20px 0;\n  border-bottom: 1px solid #E6E6E6;\n}\n\n.tabs {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\n.tabs li.tab {\n  padding: 10px 20px;\n  cursor: pointer;\n  color: #666;\n  border: 1px solid transparent;\n  border-bottom: none;\n  background: #ffffff;\n  text-align: left;\nfont: normal 15px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\nopacity: 1;\n}\n\n.tabs li.tab.active {\n  font-weight: bold;\n  color: #000;\n  border: 1px solid #ccc;\n  border: none;\n  border-bottom: 3px solid #008080; \n  background-color: #fff;\n  text-align: left;\nletter-spacing: 0px;\ncolor: #008080;\nopacity: 1;\n}\n\n.tabs li.tab:hover {\n  background-color: #eee;\n}\n\n/* Hide all .tab-content by default */\n.tab-content {\n  display: none;\n  padding: 20px 0;\n}\n\n/* Show the active tab-content */\n.tab-content.active {\n  display: block;\n}\n\n/* \"See More\" links in the \"All\" tab */\n.see-more-link {\n  color: #0073aa;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.see-more-link:hover {\n  text-decoration: none;\n}\n\n.content-center{\n /*width: auto !important;*/\n margin-left: 0px !important\n}\n\n.reference-list {\n  list-style-type: none;  /* Remove default list style */\n  padding: 0;\n}\n\n.reference-item {\n  margin-bottom: 20px;  /* Space between each reference */\n  padding: 10px\n}\n.reference-list .reference-item:last-child hr{display:none !important;}\n\n.reference-number {\n  font-weight: bold;\n  margin-right: 3px;\n  color: #008080;  /* Color for the numbering */\n  font-size:16px\n}\n\n.reference-title {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #0066cc;\n  text-decoration: none;\n  text-align: left;\n  font: normal normal bold 16px/20px \"Public Sans Bold\";\n  letter-spacing: 0px;\n  color: #008080;\n  opacity: 1;\n}\n\n.reference-title:hover {\n  text-decoration: underline;\n}\n\np.reference-text {\n  font-size: 14px;\n  color: #333;\n  margin-top: 5px;\n  height: 150px;\n  overflow: hidden;\n  padding: 0;\n  line-height:1.3em;\n    \n}\n\n.separator-line {\n  border: 0;\n  border-top: 1px solid #E6E6E6;\n  margin-top:10px;\n}\n#all-tab .separator-line {\n\tmargin-top:10px;\n  margin-bottom:40px;\n}\n.reference-header {\n display:none \n}\n\n.related-search-container {\n  margin-top: 20px;\n}\n\n.search-question {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  text-align: left;\nfont: normal normal normal 16px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\nopacity: 1;\n}\n\n.expand-arrow {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.summary-container {\n  margin-top: 10px;\n}\n\n.summary-text {\n  margin: 0;\n  font-size: 14px;\n}\n\n.summary-text.expanded {\n  white-space: normal;\n}\n.summary-text .references h3 {\n  font-size:16px\n}\n\n.toggle-summary {\n  display: block;\n  margin-top: 10px;\n  color: #0073e6;\n  cursor: pointer;\n}\n\n.toggle-summary:hover {\n  text-decoration: underline;\n}\n\n.loading-text {\n  color: #888;\n}\n\n.gradientWhite {\n  position: relative;\n  background-color: transparent;\n  background-image: url(https://cdn.ttgtmedia.com/images/abtesting/gradient_whiteToTransparent_1x30.png);\n  height: 30px;\n  z-index: 1;\n  width: calc(100% + 60px);\n  /* left: 0; */\n  /* width: calc(100% - 20px); */\n  /* top: unset; */\n  bottom: 29px;\n  left: -20px;\n}\n.gradientSpacer {height: 20px;}\n\n.ai-overview-show-more-container {\n/*background-color: white;*/\n width: 100%;\n    left: 0;\n  \ttop: unset;\n    bottom: unset;\n  height: 30px;\n  display:flex;\n  flex-flow:column;\n  align-items: center;\n\n}\n.ai-overview-show-more-container.expanded {background-color:#fff;}\n.ai-overview-show-more {color:#007CAD;flex-direction:column;font-weight:bold;}\n.ai-overview-show-more:hover {color: #323232;}\n\n#content-columns > div.top-gradient-bar > div.search-controls > div > form > button > i\n{ top: -4px;\n  left: -5px;\n font-size:35px; \n\n}\n\n#content-columns > div.top-gradient-bar > div.search-controls > div > div > p{\n font-size:14px;\n text-align: center;\nfont: normal normal normal 14px/14px ;\nletter-spacing: 0px;\ncolor: #666666;\nopacity: 1;\n}\n\n.ai-icon {\n  background: url(https://cdn.ttgtmedia.com/images/abtesting/icon-ai.svg) no-repeat;\n  border: none;\n    display: inline-block;\n    width: 13px;\n    height: 16px;\n    background-size: cover;\n    position: relative;\n   \n}\n\n.ai-icon-large {\n  background: url(https://cdn.ttgtmedia.com/ux/apps/optimizely/experiments/generic/AI-Icon.svg) no-repeat;\n  border: none;\n    display: inline-block;\n    width: 21px;\n    top:5px;\n    height: 26px;\n    background-size: cover;\n    position: relative;\n}\n\n#ai-overview-text {  \n margin-top: 0px \n}\n#ai-overview-text ul{  \n  margin-left: 40px \n }\n\n.aiDisclaimer2 { \n text-align: left;\nfont: italic normal normal 14px/18px ;\nletter-spacing: 0px;\ncolor: #666666;\nopacity: 1;\npadding-top: 10px;\nmargin-bottom:20px;\n}\n\n#reference-list-container .reference-list {\n max-height:59px !important;\n   height: 40px  !important;\n}\n\n.terms-container {\n  margin: 20px 0;\n}\n\n.terms-container h2 {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  \n}\n\n.terms-list {\n  list-style-type: none;\n  padding-left: 0;\n}\n\n.term-item {\n  margin-bottom: 15px;\n}\n\n.term-title {\n  text-align: left;\n  font: normal normal bold 22px/26px \"Public Sans Bold\";\nletter-spacing: 0px;\ncolor: #008080;\nopacity: 1;\n  display:block;\n}\n\n.term-title:hover {\n  color: #005f8a;  /* Adjust hover color */\n}\n\np.term-description {\n  text-align: left;\nfont: normal normal normal 16px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\nopacity: 1;\n  margin-top:9px;\n  margin-bottom: 30px;\n}\n\n#all-tab > h2 {\ntext-align: left;\nfont: normal normal bold 22px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\nopacity: 1;\n}\n\n#tab-content-container {\n  /*width:70%;*/\n  padding: 0px 0px 20px 0;\n}\n#tab-content-container h2 {font: normal normal bold 22px/23px \"Public Sans\";}\n\n#all-tab > div.terms-preview  {\n list-style: none\n}\n\n.content-with-image img{\nheight:auto;\nwidth: 300px;\n float:left;\n margin-right: 15px\n}\n\n.content-item\n{ list-style: none;\npadding:20px 20px 20px 0;\n}\n\n.content-title{\ntext-align: left;\nfont: normal normal bold 22px/26px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #008080;\nopacity: 1;\n}\n\n.content-meta{\ntext-align: left;\nfont: normal normal normal 13px/15px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #666666;\nopacity: 1;\n}\n\n.aiDisclaimer2 {\n  padding-left:0;\n}\n\n#content-columns > div.top-gradient-bar > div.content-center > div.related-search-container > h2 {\n \tpadding-top: 40px;\n  padding-left:20px\n} \n\n.tab-content {\n    display: none;\n    /* padding: 20px 0; */\n  padding:unset\n}\n.tab-content .content-item {\npadding-top:0;\n}\n\n.tab-content .whitepaper-container {\n\tpadding-top:0\n  width 100%;\n}\n/*whitepaper */\n\n.whitepaper-container {\n    display: flex;\n    align-items: flex-start;\n    gap: 20px;\n    padding: 20px 0;\n}\n\n.whitepaper-image {\n  \tmin-width: 260px !important;\n    height: 150px;\n    object-fit: cover;\n    border-radius: 5px;\n}\n\n.content-details {\n    flex: 1;\n}\n\n.content-title {\n    font-size: 18px;\n    font-weight: bold;\n    color: #008080;\n    text-decoration: none;\n  \n}\n\n.content-meta {\n    font-size: 14px;\n    color: #555;\n    margin: 5px 0;\n}\n\n.content-description {\n    font-size: 14px;\n    color: #333;\n    font-weight: bold;\n}\n\n.content-runtime {\n    font-size: 14px;\n    color: #000;\n    font-weight: bold;\n}\n\n.view-more-button {\n    display: inline-block;\n    background-color: #008080;\n    color: #fff;\n    padding: 8px 20px;\n    font-size: 12px;\n    text-decoration: none;\n    border-radius: 4px;\n    margin-top: 8px;\n}\n.view-more-button:hover {background:#323232;color:#fff;transition: all 0.2s;}\n\n.see-more-link {\n    display: block;\n    margin-top: 10px;\n  text-align: center;\nfont: normal normal bold 14px/23px \"Public Sans Bold\";\nletter-spacing: 0px;\ncolor: #007CAD;\nopacity: 1;\ntext-decoration:none;\n}\n\n.preview-item {\n   /*margin-bottom: 20px;*/\n}\n\n.whitepaper-title {\n  display:block;\n  text-align: left;\n  font: normal normal bold 22px/26px \"Public Sans Bold\";\n  letter-spacing: 0px;\n  color: #008080;\n  opacity: 1;\n  margin-bottom:6px;\n}\n.whitepaper-title:hover {\n\tcolor:#323232;\n  transition:0.2s\n}\n\n.whitepaper-meta{\n  margin:0 !important;\n  text-align: left;\n  font: normal normal normal 13px/15px \"Public Sans\";\n  letter-spacing: 0px;\n  color: #666666;\n  opacity: 1;\n}\n\n.whitepaper-description {\n  margin:0;\n  margin-top:15px;\ntext-align: left;\nfont: normal normal bold 13px/15px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\ntext-transform: uppercase;\nopacity: 1; \n}\n\n.whitepaper-snippet {\nheight: 50px;\noverflow: hidden;\ntext-overflow: ellipsis;\ntext-align: left;\nfont: normal normal normal 16px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\nopacity: 1;\nmargin-bottom:unset;\nmargin-top:15px;\n}\n\n@media (max-width: 1280px) {\n\n.reference-list {\n  width:230px;\n    /*min-height:540px*/\n}\n\n}\n\n@media (max-width: 1024px) {\n.search-controls {\n  position: relative;       \n  display: flex;\n  flex-wrap: wrap;          \n  gap: 1rem;\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n\n .reference-list {\n   margin:30px;\n   margin-left:unset;\n   width: 100%;\n   height: 260px !important;\n   min-height: 120px !important\n  }\n  \n#main-content .header-search-input-2 {\n  flex: 1 1 auto;         \n  max-width: calc(100% - 60px);\n  width: 100%;\n  min-width: 0;           \n  }\n#main-content .header-search-submit {\n  flex: 0 0 auto;\n  margin-left: 0;\n}\n\n.content-search,\n.definition-section,\n.related-search-content {\n  width: 100%;\n  max-width: 1200px;    \n  box-sizing: border-box;\n}\n.definition-section {\n\n  margin: 0 auto 2rem;   \n  }\n/* Tablet and below */\n\n  .search-controls {\n    flex-direction: column;\n    padding: 0 1rem;\n  }\n  .viewing-range-section,\n  .searchbox-section {\n    width: 100%;\n  }\n}\n\n/* Mobile */\n@media (max-width: 768px) {\n  .ai-overview-container,\n  .related-search-content,\n  .definition-section {\n    padding: 1rem;\n  }\n  #main-content .header-search-input-2 {\n    font-size: 1rem;\n    height: auto;\n  }\n}\n\n.tabs {\n  flex-wrap: wrap;  \n}\n.tabs li.tab {\n  /*flex: 1 1 auto;*/\n  text-align: center;\n}\n\n@media (max-width: 1280px) {\n  #search .content-columns .content-center,#search .content-columns .content-left {width:100% !important;}\n  #search .content-columns .content-center{width: 860px !important;}\n\n}\n\n\n\n@media (max-width: 960px) {\n  .content-search {left:0}\n  #search .content-columns .content-center,#search .content-columns .content-left {width:100% !important;}\n\n  #search .locking-full-bar {\n    margin: 0 auto;\n  }\n/*  .search-controls {\n    position: relative !important;\n    display: flex !important;\n    flex-direction: colum-reverse !important;\n    gap: 1rem !important;\n    padding: 0 1rem !important;\n  }*/\n  .viewing-range-section {\n    /*\n    width: 30% !important;\n    margin: 1rem 0 !important;\n    */\n  }\n  .searchbox-section {\n    width: 100% !important;\n  }\n  #main-content .header-search-submit {\n    right: 10px;\n    position: absolute;\n    top: 11px;\n  }\n.reference-list {\n  top:20px\n  }\n  \n  #tab-content-container{\n  width:100% !important\n  }\n\n  #main-content .header-search-input-2 {\n    flex: 1 1 auto !important;\n    width: 100% !important;\n    max-width: none !important;\n    margin: 0 0 0.5rem !important;\n  }\n  #main-content .header-search-submit {\n    flex: 0 0 auto !important;\n    margin-left: 0 !important;\n  }\n\n\n  .content-search,\n  .definition-section,\n  .related-search-content {\n    width: 100% !important;\n    max-width: 100% !important;\n    /*padding: 0 1rem !important;*/\n    box-sizing: border-box !important;\n  }\n\n\n  .tabs {\n    flex-wrap: nowrap !important;\n      display: inline-flex !important;\n  /*flex-wrap: wrap !important;*/\n  }\n  .tabs li.tab {\n    flex: auto !important;\n    text-align: center !important;\n  \ttext-align: center;\n    font-size:14px;\n    padding:10px;\n  }\n\n\n.related-search-content img,\n.whitepapers-webinars-content img,\n.related-news-content img,\n.content-with-image img {\n  float: none !important;\n  display: block !important;\n  margin: 0 auto 1rem !important;\n  max-width: 100% !important;\n}\n\n.reference-list {\n  position: relative !important;\n  width: 100% !important;\n  max-height: none !important;\n  border-top: none !important;\n  padding: 1rem 0 !important;\n}\n\n\n#page-footer {\ndisplay:none  }\n}\n@media (max-width: 759px) {\n  .tabs li.tab {\n    flex: auto !important;\n    text-align: center !important;\n  \ttext-align: center;\n    font-size:13px;\n    padding:5px;\n  }\n\n}\n\n@media (min-width: 1024px) {\n  .content-search {\n    display: flex;\n  }\n  .search-sidebar {\n    width: 300px;\n    margin-left: 20px;\n    top:0;\n  }\n  .content-search > .content-center {\n    flex: 1;\n  }\n  .ai-overview-show-more-container.expanded {\n    top: -48px;\n  }\n}\n\n.gradientWhite,\n.gradientSpacer {\n  z-index: 0;\n}\n\n.viewing-range-section {\n  position: relative;\n  z-index: 10;    \n}\n\n\n\n\n/* limit just the input width if you prefer */\n#content-columns > div.top-gradient-bar > div.search-controls > div > form{\n    position: relative;\n}\n\n#content-columns > div.top-gradient-bar > div.search-controls > div > div > p {\n  text-align:left;\n  margin-left:20px;\n}\n\n/*.loading-blur {\n  filter: blur(4px);\n  transition: filter 0.3s ease-in-out;\n}*/\n\n.blank-overview {\n  font-style: italic;\n  color: #E6E6E6;\n}\n\n.blank-recs {\n  display:none;\n  margin: 1.5em 0;\n  padding: 1em;\n \n}\n.blank-recs h1, .blank-recs h2 {\n  margin: 0;\n}\n.blank-recs ul {\n  list-style: square inside;\n}\n\n.ai-overview-container.blank {\n display:none;\n border: 1px solid #cce7e7;\n    background-color: #e6f7f7;\n    padding: 20px;\n    border-radius: 8px;\n    max-width: 1130px;\n    margin: 20px auto;\n    margin-left: -20px;\n    \n}\n\n.ai-overview-container.blank .definition-section,\n.ai-overview-container.blank .ai-overview-show-more-container,\n.ai-overview-container.blank #reference-list-container,\n.ai-overview-container.blank + .aiDisclaimer2 {\n  display: none;\n}\n\n\n\n/* the magnifier icon in the heading */\n.ai-icon-large.blank {\n  font-size: 40px;\n  color: #008080;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n.blank #ai-overview-text.blank-overview {\n  width: 500px;\n  font-size: 1.5rem;\n  color: #008080;\n  margin-bottom: 8px;\n  \n  \n}\n\n.blank .ai-overview-content > h2,\n.blank .gradientWhite\n{\ndisplay:none;}\n\n\n.loading-blur {\n  position: relative;   /* establish a stacking context */\n  overflow: hidden;     /* clip the shimmer inside */\n  margin-top:20px;\n}\n\n.loading-blur::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;           /* sit on top of whatever\u2019s inside */\n  /* fully opaque grey shimmer */\n  background: linear-gradient(\n    90deg,\n    #E6E6E6 0%,\n    #FFFFFF 50%,\n    #E6E6E6 100%\n  );\n  background-size: 200% 100%;\n  animation: shimmer 7s ease-in-out infinite;\n  pointer-events: none; /* don\u2019t block clicks if you ever need them */\n}\n\n@keyframes shimmer {\n  from { background-position: -200% 0; }\n  to   { background-position:  200% 0; }\n}\n\n\n\n.blank-overview-caution {\n  margin-top: 8px;\n  font-size: 4.5rem;\n  color: teal;\n  text-align: center;\n}\n\n.blank .ai-overview-content {\n    padding-right: 235px;\n  \tpadding-top:20px\n}\n\n#main-content .btn--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.expanded.ai-overview-content{\n  height: fit-content;\n  overflow-y:auto\n}\n\n\n #reference-list-container {\n\n  overflow-y: scroll !important;\n  /*max-height:670px !important*/\n}\n\n.ai-overview-container:not(.expanded) #reference-list-container {\n  overflow-y: hidden;\n  /*min-height: 250px !important;*/\n  max-height: 400px !important\n}\n\n.ai-overview-container:not(.expanded) #ai-overview-text {\n  /*overflow: hidden;\n  max-height: 200px;*/\n}\n\n@media (min-width: 960px) {\n    #search .content-columns .content-left {\n        width: 300px;\n        float:left;\n    }\n\n}\n@media (min-width: 1280px) {\n  #search .ad-wrapper.ad-inline.ad-desktop,\n  #search .ad-wrapper.page-header-ad.ad-desktop-w {\n      position:absolute;\n      margin-left: 340px;\n  }\n  .top-gradient-bar {margin-bottom:0}\n\n}\n@media (min-width: 960px) {\n  #search .ad-wrapper.ad-inline.ad-desktop,\n  #search .ad-wrapper.page-header-ad.ad-desktop-w {\n      margin-left: 900px;\n      position: relative;\n  }\n\n}\n\n\n#content-columns::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n#content-columns + ul.column {\n  clear: both;\n}\n\n  @media (min-width: 960px) {\n    #search .locking-full-bar {\n        display: block;\n        width: 300px;\n        margin: 0 auto;\n    }\n\n\n\n}\n\n#search .content-columns .content-left {\n    Width: 0px !important;\n}\n\n@media (min-width: 960px) {\n    #search .narrow-search {\n        margin: 0 0 40px;\n        display: none;\n    }\n}\n\n\n    #search .narrow-search {\n        margin: 0 0 40px;\n        display: none;\n    }\n\n/* collapsed state (no expanded class on the container) */\n.ai-overview-container #ai-overview-text {\n  max-height: 210px;\n  overflow:   hidden;\n  transition: max-height 0.3s ease;\n}\n.ai-overview-container #reference-list-container {\n  max-height: 400px;\n  overflow-y: hidden;\n  transition: max-height 0.3s ease;\n}\n\n/* expanded state */\n.expanded .ai-overview-container\n {\n  max-height: none !important;\n  overflow:   visible;\nmax-width: 1200px;\n  \n}\n.ai-overview-container {\n  max-height: none !important;\n  overflow:   visible;\n}\n\n.expanded .reference-text {\n  overflow-y: scroll\n}\n\n.tabs li.tab .tab-count {\n  display: inline-block;\n  background: #f1f1f1;\n  border-radius: 50%;\n  padding: 0 6px;\n  font-size: 0.75em;\n  line-height: 1.4;\n  margin-left: 4px;\n  vertical-align: middle;\n  color: #333;\n}\n\n.tabs li.tab\n {\n       padding: 10px 10px;\n}\n\n.ai-overview-show-more {\nmargin-left:40%;\n}\n\n.gradientWhite, .gradientSpacer {\n \n}\n\n.ai-overview-content p {\n \ntext-align: left;\nfont: normal normal normal 16px/23px \"Public Sans\";\nletter-spacing: 0px;\ncolor: #323232;\n  \n  \n}\n\n.search-row {\n      display: flex !important;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n.search-controls {\n      order: 1 !important;\n      flex: 1 !important;\n    }\n\n\n.ai-overview-show-more-container {\n\t\tposition: relative;\n    margin-bottom: -50px;\n    top: -50px;\n}\n.expanded .ai-overview-show-more-container {\n  position: relative;\n  margin-bottom: -48px;\n  top: -48px;\n}\n\np.reference-text {\n  height:62px;\n}\n\n#reference-list-container\n{\n  height:220px\n}\n\n #reference-list-container {\n  max-height: 200px;\n}\n\n.expanded .reference-text {\n    height:100px;\n}\n\n.expanded .reference-list\n{\n    height:fit-content !important\n}\n\n.tabs li.tab .tab-count {\n  margin-top: -15px !important\n}\n  \n.ai-error-container {\n    border: NONE;\n    background-color: unset;\n    padding: 20px;\n    border-radius: 8px;\n    max-width: 600px;\n    margin: 0 auto;\n    display: flex\n;\n    flex-direction: column;\n    align-items: center;\n}\n  .ai-error-icon {\n    color: #666;\n}\n\n.ai-error-container {\n  padding-left:250px\n}\n\n  \n.ai-error-content {\n  text-align:center;\n    color:#666\n}\n\n.ai-error-content h2 {\n color:#666\n}\n\n.search-sample-question {\n  margin-top: 4px;\n  font-size: 0.9em;\n  color: #666;\n  line-height: 1.2;\n  position: absolute;\n  padding: 10px;\n  Padding-top: 25px\n}\n\n/* Hide placeholder by default */\n.header-search-input-2::-webkit-input-placeholder { opacity: 0; transition: opacity 0.5s ease; }\n.header-search-input-2::-moz-placeholder        { opacity: 0; transition: opacity 0.5s ease; }\n.header-search-input-2:-ms-input-placeholder     { opacity: 0; transition: opacity 0.5s ease; }\n.header-search-input-2::-ms-input-placeholder    { opacity: 0; transition: opacity 0.5s ease; }\n.header-search-input-2::placeholder              { opacity: 0; transition: opacity 0.5s ease; }\n\n/* When .fade-in is applied, fade it back in */\n.header-search-input-2.fade-in::-webkit-input-placeholder { opacity: 1; }\n.header-search-input-2.fade-in::-moz-placeholder        { opacity: 1; }\n.header-search-input-2.fade-in:-ms-input-placeholder     { opacity: 1; }\n.header-search-input-2.fade-in::-ms-input-placeholder    { opacity: 1; }\n.header-search-input-2.fade-in::placeholder              { opacity: 1; }\n\n.search-sample-question {display:none;}\n\n/* \n#all-tab .terms-list,\n#all-tab .content-list {\n  display: none;\n}\n*/\n\n.header-search-input-2 {\n  height:65px !important;\n    line-height:22px\n}\n\n.related-search-content br {   \n  display: none;\n}\n\n/* hide paragraphs */\n.whitepaper-snippet {\n  display:none\n}\n\n\n\n#ai-overview-text.error-message {\n  max-height: 300px;\n    overflow: visible;\n}\n\n\n  @media (max-width: 1280px) {\n   .ai-error-suggestions, .ai-error-suggestions-list {\n      /*  display: none;      */\n    }\n}\n\n#ai-overview-text .ai-error-suggestions {\n  margin: 10px 0\n}\n\n#ai-overview-text .ai-error-content ul li {\n    text-align: left;\n    margin: 10px 30px;\n}\n\n.header-search-submit:disabled {\n  cursor: default !important ;  \n  background-color:#CCC!important ;\n}\n\n.header-search-submit:disabled:hover {\nbackground-color:#00B3AD!important ;\n}\n\n.viewing-range-section.search-complete {\n top:-30px \n}\n\n.tabs li.tab .tab-count {\n    display: inline-block;\n    background: #f1f1f1;\n    border-radius: 50%;\n    width: 1.6em; \n    height: 1.6em; \n    font-size: 0.75em;\n    line-height: 1.6em; \n    text-align: center; \n    margin-left: 4px;\n    vertical-align: middle;\n    color: #333;\n  \tpadding:1px;\n}\n\n.summary-text p{\n margin: 0\n}\n\n\n.related-search-container.loading-blur {\n   \n}\n\n.ai-overview-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 100vw;            \n  height: 100%;\n  transform: translateX(-50%);\n  background-color: #00B3AD0A;\n  z-index: -1;     \n border-top: 1px solid #E3E3E3;\n border-bottom: 1px solid #E3E3E3;\n\n}\n\n.ai-overview-show-more-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: calc(50% - 40px);\n  width: 100vw;           \n  height: 100%;\n  transform: translateX(-50%);\n  background-color: white;\n      z-index: -1; \n}\n\n\n.gradientWhite::before {\n  content: \"\";\n  position: absolute;\n  top: -100px;                     \n  left: 50%;                         \n  width: 100vw;                     \n  height: 130px;                    \n  transform: translateX(-50%);\n  pointer-events: none;            \n\n  \n   background: linear-gradient(180deg, #FFFFFF5C 0%, #FFFFFF 100%)\n    no-repeat 0 0 padding-box;\n  opacity: 1;\n    background: linear-gradient(\n    to bottom,                        \n    rgba(255,255,255,0) 0%,            \n    rgba(255,255,255,1) 100%       \n  ); \n}\n\n.search-row {\n margin-left:-37px \n}\n\n/* Tablet: up to 1024px */\n@media (max-width: 1024px) {\n  .search-row {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    margin-left:-10px \n  }\n  \n  .reference-header{\n    display:unset;\n    \n  }\n    .viewing-range-section {\n   top:30px;\n  }\n  \n  .viewing-range-section,\n  .search-controls {\n    width: 100% !important;\n    margin: 0 !important;\n    order: initial !important;\n  }\n  \n  .viewing-range-section {\n   margin: 0 20px !important \n  }\n  .search-controls {\n    margin-top: 0; \n  }\n\n  .search-controls .searchbox-section form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: calc(100% - 30px);\n  }\n \n  .header-search-input-2 {\n    width: 100% !important;\n    margin: 0 !important;\n  }\n  .header-search-submit {\n    align-self: flex-end;\n    margin-left: 0 !important;\n  }\n}\n\n/* Mobile: up to 768px */\n@media (max-width: 768px) {\n \n  .viewing-range-section {\n    margin-bottom: -0.5rem !important;\n  }\n  .viewing-range-section select {\n    width: 40% !important;\n  }\n  \n  .search-sample-question {\n\n    margin-top: 0.5rem;\n    font-size: 0.9rem;\n  }\n}\n\n.expanded .reference-list {\n    height:91.5% !important;\n}\n\n#ai-overview-text.error-message {\n    overflow: visible !important;\n    max-height: 350px !important;\n}\n\n.ai-overview-columns {\n    min-height: 200px;\n}\n\n.ai-overview-show-more {\n  font-size: 14px;\n}\n \n #search .header_v3 .header-search {\n        display: none;\n    }\n\n.reference-list h3,\n.summary-text .references h3{\n    font-size: 14px;\n    margin-bottom: 10px;\n    color: #666;\n /*   margin-left:20px; */\n}\n\n.related-search-container\n {\n    margin-bottom: 47px;\n}\n\n.header-search-input:focus\n {\n \n}\n\np.reference-text {\n    line-height: 23px;\n}\n\n.reference-text\n{\n  display: -webkit-box;      \n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;       /* limit to 3 lines */\n  overflow: hidden;            \n  text-overflow: ellipsis;     \n}\n\n.expanded .reference-text\n{\n  display: -webkit-box;      \n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;       /* limit to 3 lines */\n  overflow: hidden;            \n  text-overflow: ellipsis;     \n}\n\n\n.term-description\n/*, .whitepaper-snippet */\n{\n  display: -webkit-box !important;      \n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;       /* limit to 3 lines */\n  overflow: hidden;            \n  text-overflow: ellipsis;\n}\n\n.aiDisclaimer2 {\n    font-style: italic;\n   font-size: 14px\n}\n\n.ai-error-content h2 {\n    margin-bottom: 28px;\n}\n\n.ai-overview-container.error-shown .gradientWhite {\n  display: none;\n}\n\n.ai-overview-container.error-shown .ai-overview-title\n{display:none;}\n\n.error-shown.aiDisclaimer2{\n display:none !important; \n}\n\n.reference-item {\n    padding: 10px 10px 0;\n}\n\n.ai-error-content h2 {\n font-size: 22px;\n  color: #323232 \n}\n\n.ai-overview-show-more-container.expanded{\n  margin-top: 30px;\n  padding-top:20px !important;\n}\n\n.search-question,\n p.summary-text p {\n color:#323232\n}\n\n@media (min-width: 1026px) {\n.ai-overview-show-more-container.expanded{\n  margin-top: 30px;\n  padding-top:30px !important;\n  /*background-color: #00B3AD0A;*/\n  margin-left: -35%;\n  padding-left: 33%;\n  padding-right: 445px;\n}\n\n}\n\n.search-row {\nmargin-bottom: 0px;\n}\n\n.search-row.search-complete {\nmargin-bottom: 80px;\n}\n\n/*-----7/21 Updates -----*/\n\narticle {\n    display:block;\n    max-width: 1200px;\n  padding-bottom: 100px;\n}\n\n.search-row {\n    margin-left: 0px;\n    margin-top: -11px;\n    max-width: 1200px;\n}\n\nbutton, select {\n    text-transform: none;\n}\n\n@media (min-width: 960px) {\n   .header-search {\n       top: 51px;\n    }\n}\n\n.content-search {\nleft: 0 !important;\n}\n\n.expanded .reference-text {\n   height: unset;\n}\n\n.gradientWhite {\n left: -80px  /* was -130px */\n}\n\n.ai-error-icon {\n    color: #666;\n    background: url(https://cdn.ttgtmedia.com/images/abtesting/alert-icon.svg) no-repeat;\n  border: none;\n    display: inline-block;\n    \n    top:5px;\n    height: 26px;\n    background-size: cover;\n    position: relative;\n}\n\n.right-arrow-icon {\n    background: url(https://cdn.ttgtmedia.com/images/abtesting/right-arrow-icon.svg) no-repeat;\n    height: 30px;\n    display: inline-block;\n    width: 30px;\n    top: 17px;\n    position: relative;\n}\n\n\n.ai-error-icon {\n    width: 35px;\n    height: 30px;\n}\n\n.related-search-content img\n {\n margin-right: unset;\n}\n\n.reference-item {\n padding: 20px 20px 0 \n}\n\n@media (min-width: 960px) {\n    .top-gradient-bar {\n        max-width: 1200px !important;\n        height: 29px;\n        margin: 0;\n    }\n  \n}\n\n.viewing-range-section select {\n    padding: 10px 73px 10px 13px;\n  \n}\n\n@media (min-width: 960px) and (max-width: 1024px) {\n#main-content .header-search-submit {\n    background-color: #00B3AD;\n    color: #fff;\n    padding: 10px 10px;\n    border-radius: 50%;\n    border-width: 10px;\n    cursor: pointer;\n    margin-left: -95px !important;\n    position: absolute;\n    left: 776px;\n    top: 10px;\n}\n}\n\n@media (max-width: 1024px) {\n        .viewing-range-section {\n  top: 30px !important;\n}\n \n      .header-search-input-2 {\n       max-width: unset !important\n    }\n  #dateRangeSelect {\n   min-width:210PX \n  }\n  \n      .viewing-range-section\n {\n        margin: 0 !important;\n    }\n  \n      .search-controls .searchbox-section form\n {\n        margin-left: -16px;\n    }  \n}\n\n@media (min-width: 960px) {\n #search-type > div.ad-wrapper.ad-inline.ad-x-desktop-w {\n      margin-left: 900px !important;\n      position: relative;\n  }\n  \n \n}\n\n#main-content .header-search-input-2 {\n  scrollbar-width: none;\n}\n\n.ai-overview-content.error-message #ai-overview-text {\n max-height:900px\n}\n\n.ai-overview-content p li{\n    margin-bottom:4px;\n  }\n\n.reference-number {\nfont: normal normal bold 16px / 20px \"Public Sans Bold\";\n}\n\n#tab-content-container h2 {\n    font: normal normal bold 22px / 23px \"Public Sans Bold\";\n  margin-bottom:15px\n}\n\n/*.term-title {font-size:18px}*/\n.term-title:hover {color:#000000}\n.see-more-link:hover {color:#176584}\n#search .content-columns .content-center {width: 860px;}\n.ai-icon {margin-right:4px}\n\n@media (max-width: 960px) {\n  #search .content-columns .content-left{\nwidth: 100% !important;\n}\n}\n\n.ai-overview-container::before {\n left: calc(50% - 40px);\n}\n\n@media (max-width: 960px) {\n#search .ad-wrapper.ad-inline.ad-desktop {\n  display:none !important\n  }\n  \n  .ai-error-container {\n    padding-left: unset;\n}\n}\n\n@media (min-width: 960px) and (max-width: 1279px) {\n  #search .content-columns .content-center{\n        width: 500px !important;\n}\n  .ad-wrapper.ad-inline.ad-x-desktop-w,\n  .ad-wrapper.ad-inline.ad-desktop,\n  #search-type > div.ad-wrapper.ad-inline.ad-x-desktop-w{\n    margin-left: 570px !important;\n  }\n\n}\n\n@media (max-width: 1279px) {\n  .ad-wrapper.ad-inline.ad-x-desktop-w,\n  #search-type > div.ad-wrapper.ad-inline.ad-x-desktop-w {\n    display:none\n  }\n\n}\n\n/* REMOVE THESE NEXT 2 WHEN SUMMARY AVAILABE */\n.term-description {\n  display:none !important;     \n}\n\n.term-item {\n  display: flex;\n    align-items: flex-start;\n    gap: 20px;\n    padding: 20px 0 !important; \n}\n\n\n@media (min-width: 960px) and (max-width: 1279px){\n    #search-type > div.ad-wrapper.ad-inline.ad-x-desktop-w\n {\n   display:none\n  }\n}\n\n.terms-preview p {\n  display:none\n}\n\n@media (min-width: 960px) {\n    .main-content {\n        margin: 10px 464px 0 auto;\n    }\n\n\n\n.ai-overview-container::before {\n        background-color: #00B3AD0A;\n        margin-left: -35%;\n        padding-left: 33%;\n        padding-right: 525px;\n\n}\n}\n\n@media (max-width: 960px) {    \n\n}\n\n.gradientWhite {\n  /*padding-right:221px*/\n}\n\n.ai-overview-container::before {\n  left: 57% !important\n}\n\n\n#content-columns.blank-state {\n padding-bottom:450px \n}\n\n\nbody {\n  overflow-x: hidden;\n}\n\n@media (min-width: 1280px) {\n.loading-blur {\n width:1200px \n}\n}\n\n/*\n.whitepaper-title { font-size:18px}\n*/\n\n@media (min-width: 960px) { \n  \n.main-content {\n  \n  margin:auto !important\n\n}\n}\n.ai-icon {\n    background: url(https://cdn.ttgtmedia.com/images/abtesting/ai-disclamer-icon.svg) no-repeat;\n}\n\n#reference-list-container {\nborder-top: #E3E3E3 !important;\n    border-top-style: solid !important;\n    border-top-width: thin !important;\n    border-bottom: #E3E3E3 !important;\n    border-bottom-style: solid !important;\n    border-bottom-width: thin !important;\n}\n\n@media (max-width: 960px) {\n.ai-overview-container::before {\n     left: calc(50% - 40px) !important; \n \t    transform: translateX(-40%)!important;\n          width: 1200px;\n}\n  \n \n}\n\n/* Disregard border change for text area*//*\n.header-search-input-2:focus-visible {\n  outline: 1px solid #007CAD !important;   \n}\n*/\n.ai-overview-content p li {\n    margin-left: 20px;\n}\n\n\n.ai-overview-content p,\n.ai-overview-content p ul{\n    margin-bottom: 30px;\n}\n\n.tab-content.active {\n    display: block !important;\n}\n\n.header-search-submit:disabled:hover {\n    cursor: default !important;\n    background-color: #CCC !important;\n}\n\n\n#content-columns > div.content-search-container > div > div.ai-overview-container.expanded > div.ai-overview-columns > div.ai-overview-left > div.definition-section > h2\n{\n  \n}\n\n.definition-section {background-color:#EBF9F9 !important;\n  border-radius: 3px !important;\n}\n\n#definition-text {\n  color: #323232 !important;    \n}\n\n.definition-term a:hover {text-decoration: underline !important;}\n/*\n#tab-content-container {   \n    border-bottom: 1px solid #E6E6E6;\n}\n*/\n.tab-descriptor{\nfont: normal normal normal 16px/23px \"Public Sans\";\n  color: #323232;\n}\n\n.summary-container .loading-text {\n  width:100% \n}\n\n#header-search-input::placeholder {\n  width:98% !important;\n}\n\n\n\n.term-item {\n    gap: unset;\n    padding: 0 0 30px 0;\n    margin: 0;\n}\n\n.tab-content .whitepaper-container {padding: 0 0 30px 0;}\n \n.term-title {\n    font-size: 22px;\n}\n\n@media (max-width: 1280){\n   .ai-overview-content {\n    padding-right: unset;\n   \n}\n  \n  .ai-error-container {\n    padding-left:unset; \n}\n}\n\n#definition-text {\n    margin-bottom: 0;\n}\n\n@media (min-width: 1026px) {\n    .ai-overview-show-more-container.expanded {\n        background-color: #00B3AD0A;\n        border-bottom: 1px solid #E3E3E3;\n    }\n}\n\n.ai-overview-container::before {\n\n  border-bottom: unset;\n}\n\n.related-search-container {\n    margin-bottom: 47px;\n    float: right;\n    position: absolute;\n    display:block;\n    margin-left: 900px;\n    width: 300px;\n    margin-top: -20px !important;\n}\n\n\n    #search .search-bar {\n        margin-top: 500px;\n    }\n  \n  @media (max-width: 1280px) {\n    .related-search-container {\n    margin-bottom: 47px;\n    float: right;\n    position: absolute;\n    display:block;\n    margin-left: 650px;\n    width: 230px;\n    margin-top: 20px !important;\n}\n    \n      #search .search-bar {\n        margin-left: 650px;\n        width: 230px;\n    }\n\n}\n\n\n @media (max-width: 960px) {\n    .related-search-container {\n    margin-bottom: 47px;\n    float: unset;\n    position: relative;\n    margin-left: 0px;\n    width: 100%;\n    margin-top: -70px !important;\n}\n}\n\n.ai-overview-show-more {\ncolor: white;\nbackground: teal;\npadding: 10px 40px;\nborder-radius: 3px; \n}\n\n.aiDisclaimer2 {  \n margin-top: 15px \n}\n\n.ai-overview-show-more-container.expanded\n {\n   padding-bottom: 15px\n}\n\n\n#processing-modal {\n  position: absolute;\n  top: 150px; left: 360px; right: 0; bottom: 0;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#processing-modal .modal-content {\n  background: #fff;\n  padding: 1.5rem 0;\n  border-radius: 1rem;\n  text-align: center;  \n  width:480px;\n  corner-radius: 3px;\n  fill: #ffffff;\n  stroke: #d9d9d9;\n  stroke-width: 1px;\n  border-color:#d9d9d9\n}\n\n#processing-modal .modal-content p {\n  margin: 0;\n}\n\n#processing-modal .modal-content p {\n  font-style: Italic;\n  font-size: 14px;\n  fill:#666666;\n  font-weight: 400;\n  \n}\n\n.ai-overview-show-more:hover {\n\nbackground-color:#323232;\ncolor:white;\n\n}\n\n\n.ai-overview-show-more-container {\n    padding-bottom: 20px;\n    border-bottom: 1px solid #E3E3E3;\n}\n\n@media (min-width: 1026px) {\n    .ai-overview-show-more-container.expanded {       \n        margin-left: -38%;     \n    }\n}\n\n#content-center > div > div.related-search-container.loading-blur\n {\n   display:none !important\n   \n}\n\n.ai-error-suggestions-list {\n color: #323232 !important\n}\n\ndiv.search-question span {\ncolor: #007CAD;\n}\n\ndiv.search-question span:hover {\ncolor: #007CAD;\n  text-decoration: underline;\n}\n\n.ai-overview-container.blank {\n    display: unset;\n    border: none;\n    background-color: unset;\n\n}\n\n.aiDisclaimer2 {\n    margin-top: 10px;\n}\n\n#processing-modal {\n    position: absolute;\n    top: 230px; \n    left: 360px;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    align-items: start;\n    justify-content: center;\n}\n\n.blankStateTitle {\n  margin-top: 10px;\n  display: block;\n}\n\n#processing-modal .modal-content\n {\n   border-color: ;\n    border: 1px solid #d9d9d9;\n    border-radius: 3px;\n}\n\n.related-search-container {\n    margin-top: 25px !important;\n}\n\n.tab-content .whitepaper-container\n {\n    padding: 0 0 10px 0;\n}\n\n.errorSearchBox {\n    border: 1px solid #323232 !important;\n}\n\n.ai-error-container\n {\n    padding-left: 315px;\n}\n\n@media (max-width: 1280px) {\n  .ai-error-suggestions, .ai-error-suggestions-list {display: block;}\n  .ai-overview-container.blank {padding-left:20px;}\n  .blank .ai-overview-content {padding-right:0;}\n  .ai-overview-container.blank.error-shown .ai-error-container {padding-left:20px;}.ai-overview-container.blank {margin:0 auto;}\n}\n\n.aiDisclaimer2 {\n    margin-top: 0px;\n}\n\n.term-item {\n  padding: 0 0 30px 0 !important;\n}\n\n#tab-content-container h2 {\n\n    margin-bottom: 20px;\n}\n\n.term-title, \n.whitepaper-title\n\n {\n   color: #008080;\n  font-size:18px;\n  font-weight:700;\n  line-height:normal;\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "ddfe105123074af690ee7a68b4345628", "selector": ".searchbox-section i"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "c2a1f24f6b144666813776cdf1877f9b", "selector": ".en > form i"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "caa6d16a4d6841238573b8ad18bd006e", "selector": "sup a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "3e4a892f2dab4f4e9c27b8b98380d364", "selector": ".citation-list a"}, {"id": "3e4a892f2dab4f4e9c27b8b98380d364-rearrange", "type": "rearrange", "selector": ".citation-list a", "insertSelector": "Gen AI Search2  - Asked by Peer Citation Clicks", "operator": "before", "dependencies": ["3e4a892f2dab4f4e9c27b8b98380d364"]}, {"css": {}, "dependencies": ["3e4a892f2dab4f4e9c27b8b98380d364-rearrange"], "attributes": {}, "type": "attribute", "id": "97b245824e9046e2b434619abe1fb363", "selector": "#reference-list a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "987a140133ca4065905058a97a589ab2", "selector": ".content-search-container a, .cg-tabs-container a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "78483f056c1e448a96bb83daaf588d9d", "selector": "#ai-overview-text a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "d09f228aeb2e4c50a37f1f180f71b7ae", "selector": ".ai-overview-show-more"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "5b0dfdb4c6a349f6bd0dddb9d7303b7e", "selector": ".related-search-content .arrow-icon"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "e7b5cce4c24948e09606b9caedb601cd", "selector": "#all-tab a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "ee74bdc7b0964126ba69bd8bf60158f7", "selector": ".nav-toggle "}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "fadb0621446f408c98f7f4a201fa8627", "selector": ".tab-content:not(#all-tab) a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "d81d9e8de93e49b786ef0adb02defd93", "selector": ".see-more-link"}, {"css": {}, "dependencies": [], "attributes": {"style": "margin-right:25px"}, "type": "attribute", "id": "f18330468a9d46cf8d850ed5389e9dd0", "selector": ".related-search-content .arrow-icon"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "2bc9fdd07aa54a9d9b98cb761be5f5a4", "selector": ".whitepaper-image"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "ae92ac1420584c5691582de68899920b", "selector": "#main-content a:not(.see-more-link)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "635C78BE-2017-49EB-9274-020B9928BCDF", "selector": ".tabs"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "09C64075-6503-49DB-AC57-D9D3D4B073BE", "selector": "#all-tab a:not(.see-more-link)"}]}]}], "weightDistributions": [{"entityId": "6014542283538432", "endOfRange": 5000}, {"entityId": "6309203011174400", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "5231319630741504"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["4740162995879936"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}, {"changes": null, "id": "6615829857435648", "name": null, "commitId": "5346191521611776", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "17823671204", "20324229137"], "audienceName": null, "changes": null, "id": "5684432342876160", "integrationSettings": null, "variations": [{"id": "4964195184148480", "name": null, "actions": [{"viewId": "5578879226609664", "changes": [{"id": "e97e5c4c5cb4467da9fe8f4bce295cf3", "type": "custom_code", "value": function($){console.log("TOC - Control Start");
$(document).ready(function() {  
 	
 	// Initialize variables
  var eventExpName = "toc_taf_";
  var promoCode = "abt_toc_eoc_ctrl";
  var scrollDepthFired = { 10: false, 25: false, 50: false, 75: false, 100: false };
  pushTrackingEvent('variationStart');
  
  // functions
  // Attach scroll event listener to track scroll depth and quiz viewport
  $(window).on('scroll', trackScrollDepth);
  $('.share-bar-item-desktop a').on('click', function() {
  	pushTrackingEvent('shareBarClick');
  });
  
  function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
  }
  
 // Track Content Body Clicks EXCLUDING share icons
$('#content-body a:not(.optly-toc-anchor)').on('click', function(event) {
    var link = $(this);
    var hasSocialOrShareClass = link.closest('li').hasClass('share-bar-item-desktop') || 
                                link.closest('li').hasClass('social') || 
                                link.closest('[id*="share-bar"]').length > 0 || 
                                link.closest('[id*="social"]').length > 0;

    if (!hasSocialOrShareClass) {
      // Fire the tracking event for non-social links
      pushTrackingEvent('onlyContentBody');
      // console.log('Content body link click, tracked successfully');

      // Append the promo Code to URL
      var href = link.attr('href');
      var hasQueryString = href.indexOf('?') !== -1;
      var newHref = hasQueryString ? href + '&Offer=' + promoCode : href + '?Offer=' + promoCode;
      link.attr('href', newHref);
    } else {
      // console.log('Social/share link click detected, tracking skipped');
    }
});
  
      // Function to track scroll depth
function trackScrollDepth() {
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var documentHeight = $(document).height();

  var scrollDepth = Math.round((viewportBottom / documentHeight) * 100);

  // Fire only once per percentage
  if (scrollDepth >= 10 && !scrollDepthFired[10]) {
    pushTrackingEvent("scrollDepth10", {
      "scrollDepth": 10,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[10] = true;
  }
  if (scrollDepth >= 25 && !scrollDepthFired[25]) {
    pushTrackingEvent("scrollDepth25", {
      "scrollDepth": 25,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[25] = true;
  }
  if (scrollDepth >= 50 && !scrollDepthFired[50]) {
    pushTrackingEvent("scrollDepth50", {
      "scrollDepth": 50,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[50] = true;
  }
  if (scrollDepth >= 75 && !scrollDepthFired[75]) {
    pushTrackingEvent("scrollDepth75", {
      "scrollDepth": 75,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[75] = true;
  }
  if (scrollDepth >= 100 && !scrollDepthFired[100]) {
    pushTrackingEvent("scrollDepth100", {
      "scrollDepth": 100,
    //  "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[100] = true;
  }
}
  
});
}, "dependencies": []}]}]}, {"id": "5701036183126016", "name": null, "actions": [{"viewId": "5578879226609664", "changes": [{"id": "f4c2909f1c794a73ba7ba1060a8bd732", "type": "custom_code", "value": function($){console.log("TOC_TaF - Variation Start");
$(document).ready(function() {  
  
 	// Initialize variables
  var eventExpName = "toc_taf_";
  var promoCode = "abt_toc_eoc_var";
  var hasIntroParagraph = false;
  var enteredViewport = false;
  var pillarNavHTML = '<div class="optly-toc pillar-nav"><section id="optly-toc"> <div class="optly-toc-navbar pillar-navbar"> <i class="icon pillar"></i> <div class="toc">Table of Contents</div></div> </section></div>';
  var splashInViewportTopHalf;
  var scrollDepthFired = { 10: false, 25: false, 50: false, 75: false, 100: false };
  if ($('#content-body').children().first().is('p')) {
  	hasIntroParagraph = true;
  }
  pushTrackingEvent('variationStart');
  
  // append HTML
	$('#content-body').prepend(pillarNavHTML);
  $('#rail-share-bar').appendTo('.optly-toc.pillar-nav');
  
  // Experiment functions
  pillarLogic();
  $('#optly-toc a').addClass('optly-toc-anchor');
  positionTOC();
  elementInViewport('.optly-toc.pillar-nav');
  // Attach scroll event listener to track scroll depth and quiz viewport
  $(window).on('scroll', trackScrollDepth);
  $('.share-bar-item-desktop a').on('click', function() {
  	pushTrackingEvent('shareBarClick');
  });

  

  // elements added
  pushTrackingEvent('elementsAdded');

function pillarLogic(hasIntroParagraph) {
				// Nav
				var numChapters = 0; // Number of "chapters"
				var chapterTitle; // Individual chapter titles to be used in the anchor nav
				var chapterElementHTML = ''; // Markup for each individual chapter to be inserted in the anchor nav
				var name; // Name that we're using for targeting
				var chapterList = []; // List of the chapter titles
				var chapterActivePosition; // This is the position we are using to determine when a nav item is active
				var chapterSlideToPosition; // This is the position we are using to determine where a nav item will slide to on click
				var chapterActivePositions = []; // List of chapter offsets for active nav
				var chapterSlideToPositions = []; // List of chapter offsets for nav to slide to
				var scrolled = false; // Has the user scrolled yet
				var loaded = false; // Has the page finished loading
  		
  			// Scroll
				function scrollToAnchor(aid){
          var scrollHere = chapterSlideToPositions[aid];
          $(window).animate({scrollTop: scrollHere},500, function() {
        // Animation complete, trigger a scroll event manually
        $(window).trigger('scroll');
    });
					}

				// Populate chapter list and write it to our navigation
				$('#content-body .main-article-chapter').each(function(i, obj) {
					numChapters++;
					chapterTitle = $(this).attr('data-menu-title');
					chapterList.push(chapterTitle);
					chapterActivePosition = $(this).offset().top - 210; //CG was 210
					chapterActivePositions.push(chapterActivePosition);
					chapterSlideToPosition = $(this).offset().top - 195; //CG was 195
					chapterSlideToPositions.push(chapterSlideToPosition);
					name = i;
					$(this).attr('name', name);

					console.log(chapterSlideToPosition);

					chapterElementHTML += "<li><a name='" + i + "'>" + chapterTitle + "</span></a></li>";
          
				}).promise().done(function(){
          // Check if the first child element of parentElement is an <h2>
          if (!hasIntroParagraph) {
              var anchorMenu = "<ul>" + chapterElementHTML + "</ul>";
          } else {
              var anchorMenu = "<ul><li class='active'><a class='introduction' name='introduction'>Introduction</a></li>" + chapterElementHTML + "</ul>";
        	}
          $(anchorMenu).appendTo($('#main-content .pillar-navbar'));
          if (!hasIntroParagraph) {
          	$('.introduction.optly-toc-anchor').remove();
            $('#optly-toc ul li:first-child').addClass('active');
          }
				});

				// This indented section is for the new quirky anchor menu with scroll
				var viewportHeight = window.innerHeight;
				var originalMenuHeight; // Get the height of the menu
				var availableHeightForMenu = viewportHeight - 240; // This value "240" needs to match CSS value

				function adjustAnchorMenu() {
					if(originalMenuHeight > availableHeightForMenu) {
						$('.pillar-navbar ul').addClass('fixed-height'); // This class is how we will know to do special "scroll menu" things
					}
				}
  
  var scrollMenuRelativeHeightDifferences;
				var scrollMenuQuirksExplore; // Offset for "Explore" aka top of menu
				var scrollMenuQuirksOriginalOffset; // Get starting offset of menu items
				var scrollMenuQuirksOriginalOffsets = []; // Array that stores offset of menu items
				var scrollMenuQuirksRelativeDifference; // Get offset from previous menu items
				var scrollMenuQuirksRelativeDifferences = []; // Array with offsets from previous menu items
				var scrollMenuQuirksRelativeOffset; // Get offset from top of menu
				var scrollMenuQuirksRelativeOffsets = []; // Array with offsets from top of menu
				var visibleMenuBegin;
				var visibleMenuEnd;
				var visibleMenuItem;
				var scrollThisAmount;
				var currentChapter;
				var menuItemIsHidden;

				function menuPopulated() {
					var myInterval1 = setInterval(function() {
						if ($('.pillar-navbar ul').length > 0) {
							originalMenuHeight = $('.pillar-navbar ul').height();
							scrollMenuQuirksExplore = $(".pillar-navbar").offset().top;

							$('.pillar-navbar ul li').each(function() {
								scrollMenuQuirksOriginalOffset = $(this).offset().top;
								scrollMenuQuirksOriginalOffsets.push(scrollMenuQuirksOriginalOffset);
							}).promise().done(function(){
							for(var i=1; i < numChapters; i++){
								scrollMenuQuirksRelativeDifference = scrollMenuQuirksOriginalOffsets[i] - scrollMenuQuirksOriginalOffsets[i-1];
								scrollMenuQuirksRelativeDifferences.push(scrollMenuQuirksRelativeDifference);
								scrollMenuQuirksRelativeOffset = scrollMenuQuirksOriginalOffsets[i] - scrollMenuQuirksOriginalOffsets[0];
								scrollMenuQuirksRelativeOffsets.push(scrollMenuQuirksRelativeOffset);
								if(scrollMenuQuirksRelativeOffset > availableHeightForMenu){
									$('.pillar-navbar ul li:nth-of-type(' + i + ')').nextAll().addClass('menuItemIsHidden');
								}
							}
						})

						adjustAnchorMenu();
						clearInterval(myInterval1);
					}}, 50);
				}

				menuPopulated();

				// Introduction should always just scroll to the top (0)
				$(".pillar-navbar ul li a.introduction").click (function() {
					$(window).animate({scrollTop: 0},'500');
					$('.actions-bar').css({'position':'','top':'','left':''});
				})

				// Get starting position which is pre-loaded, expect it to be temporarily wrong if there are images before the clicked chapter
				var startingAnchor;
				var startingPositions = function(){
					$(".pillar-navbar ul li a").click(function() {
						startingAnchor = $(this).attr('name');
						if (loaded == false) {
							scrollToAnchor(startingAnchor);
						}
					});
				}

				startingPositions();

				// Once page has finished loading (e.g. images), update chapter positions
				$(window).on("load", function() {
					setTimeout(function() {
						// clear existing chapterActivePositions
						chapterActivePositions = [];
						chapterSlideToPositions = [];
            var i;

						// depending on whether the user has already started scrolling, the offsets are off by 100px
						$('#content-body .main-article-chapter').each(function(i, obj) {
							
							chapterActivePosition = $(this).offset().top - 250; //CG was 150, added 50
							chapterSlideToPosition = $(this).offset().top - 130;//CG was 130, added 50
							chapterSlideToPositions.push(chapterSlideToPosition);
							chapterActivePositions.push(chapterActivePosition);

							console.log(chapterSlideToPosition);

						}).promise().done(function(){
							if(startingAnchor){
							// Update offset if the user has ALREADY clicked an anchor link
								scrollToAnchor(startingAnchor);
							}
						});

						$(".pillar-navbar ul li a").click(function() {
							var whichAnchor = $(this).attr('name');
							scrollToAnchor(whichAnchor);
						});

						$(".pillar-navbar ul li a.introduction").click (function() {
							$(window).animate({scrollTop: 0},'500');
						});
					}, 3000);
				});

				var preContentBodyTriggerPoint = $('.pillar-nav').offset().top;

				$(window).scroll(function() {
					scrolled = true;
					var scroll = $(window).scrollTop();
					var menuScroll = $('.fixed-height').scrollTop();
					var downloadScroll;
					var contentBodyTriggerPoint = $('#content-body').scrollTop() + $('#content-body').height();
					
					// First and last chapters
						if(scroll <= chapterActivePositions[0]){
							$('.pillar-navbar li').removeClass('active');
							$('.pillar-navbar li:first-of-type').addClass('active');
						} else if(scroll >= chapterActivePositions[numChapters - 1]){
							$('.pillar-navbar li').removeClass('active');
							$('.pillar-navbar li:last-of-type').addClass('active');
						}
          // Active chapter
					for(var i=0; i < numChapters; i++){
            //console.log('ACTIVE POSITIONS: '+scroll+' >= '+chapterActivePositions[i]+' scroll <='+chapterActivePositions[i+1]);
						if(scroll >= chapterActivePositions[i] && scroll <= chapterActivePositions[i+1]){
							$('.pillar-navbar li').removeClass('active');
							if ($('.introduction').length > 0) {
                $('.pillar-navbar li:nth-of-type('+ (i+2) + ')').addClass('active');
              }else {$('.pillar-navbar li:nth-of-type('+ (i+1) + ')').addClass('active');}
						}
					}
				});
		}  

    //check if in viewport after added and on scroll
    function elementInViewport(element) {
      var elem = $(element);
      var elemTop = elem.offset().top;
      var bottom_of_element = elemTop + $(elem).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ( ((bottom_of_screen > elemTop) && (top_of_screen < bottom_of_element))) {
        enteredViewport = true; // the element is visible, do something
        pushTrackingEvent('enteredViewport');
      } else {
        // do nothing
      }
      if (enteredViewport && (elemTop < (bottom_of_screen-($(window).innerHeight()/2))) || (bottom_of_element < (bottom_of_screen-($(window).innerHeight()/2)))) {
        splashInViewportTopHalf = true;
      } else {
        splashInViewportTopHalf = false;
      }
    }

	function positionTOC() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#content-body").offset().top - 150; // -150 should match opposite of position sticky top
        var s = $(".optly-toc.pillar-nav");
        if(st > ot) {
            s.css({
                position: "sticky",
                top: "150px",
                transition: "0.2s top"
            });
        } else {
            if(st <= ot) {
                s.css({
                    position: "absolute", //relative
                    top: "0px"
                });
            }
        }
    };
    $(window).scroll(move);
    move();
  }
  
  function pushTrackingEvent(customEventName) {
    window.optimizelyEdge = window.optimizelyEdge || [];
    window.optimizelyEdge.push({
      type: "event",
      eventName: eventExpName+customEventName
    });
  }
  
 // Track Content Body Clicks EXCLUDING share icons & append promoCode
$('#content-body a:not(.optly-toc-anchor)').on('click', function(event) {
    var link = $(this);
    var hasSocialOrShareClass = link.closest('li').hasClass('share-bar-item-desktop') || 
                                link.closest('li').hasClass('social') || 
                                link.closest('[id*="share-bar"]').length > 0 || 
                                link.closest('[id*="social"]').length > 0;

    if (!hasSocialOrShareClass) {
      // Fire the tracking event for non-social links
      pushTrackingEvent('onlyContentBody');
      // console.log('Content body link click, tracked successfully');

     
      // Append the promo Code to URL
      var href = link.attr('href');
      var hasQueryString = href.indexOf('?') !== -1;
      var newHref = hasQueryString ? href + '&Offer=' + promoCode : href + '?Offer=' + promoCode;
      link.attr('href', newHref);
    } else {
      // console.log('Social/share link click detected, tracking skipped');
    }
});

  
      // Function to track scroll depth
function trackScrollDepth() {
  var viewportTop = $(window).scrollTop(); //$(window)
  var viewportBottom = viewportTop + $(window).height();
  var documentHeight = $(document).height(); //$(document)

  var scrollDepth = Math.round((viewportBottom / documentHeight) * 100);

  // Fire only once per percentage
  if (scrollDepth >= 10 && !scrollDepthFired[10]) {
    pushTrackingEvent("scrollDepth10", {
      "scrollDepth": 10,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[10] = true;
  }
  if (scrollDepth >= 25 && !scrollDepthFired[25]) {
    pushTrackingEvent("scrollDepth25", {
      "scrollDepth": 25,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[25] = true;
  }
  if (scrollDepth >= 50 && !scrollDepthFired[50]) {
    pushTrackingEvent("scrollDepth50", {
      "scrollDepth": 50,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[50] = true;
  }
  if (scrollDepth >= 75 && !scrollDepthFired[75]) {
    pushTrackingEvent("scrollDepth75", {
      "scrollDepth": 75,
   //   "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[75] = true;
  }
  if (scrollDepth >= 100 && !scrollDepthFired[100]) {
    pushTrackingEvent("scrollDepth100", {
      "scrollDepth": 100,
    //  "timeOnPage": getTimeOnPage()
    });
    scrollDepthFired[100] = true;
  }
}
  
});
}, "dependencies": []}, {"id": "ed191a2ffbc04e89953a357ef5d4d1ef", "type": "append", "selector": "head", "value": "<style>@media only screen and (min-width: 1445px) {\n  .pillar-cluster #optly-toc .icon.pillar, .pillar-bridge  #optly-toc  .icon.pillar {display:none;}\n  #main-content {\nleft:110px ;\n}\n.eoc_v2 .breadcrumbs {\npadding-left:110px;\n}\n.optly-toc.pillar-nav ul{ \n  height:100%;\n  min-height:100px;\n  max-height: calc(100vh - 360px) !important;\n  overflow-y:auto;\n}\n.optly-toc.pillar-nav ul li {position:relative}\n.optly-toc.pillar-nav.fixed.bottom,.optly-toc.pillar-nav.bottom {\n\tposition:sticky;\n  top:initial !important;\n  scroll-margin-top: 300px;\n}\n\n.eoc_v2 .main-content .content-center .optly-toc p a, .main-content .content-center .section.definition-section .optly-toc li a{text-decoration:none;padding:0;}\n.pillar-nav {\n\tfloat:left;\n  font-size:14px;\n  /*top:32px;\n  position:sticky;*/\n  margin-left:-271px;\n  width: 200px;\n  background:#fff;\n  padding:15px;\n  /*border: 1px solid #f3f3f3;*/\n  clear: left;\n}\n#rail-share-bar {border-top: 1px solid #e3e3e3;padding-top:5px;height:25px;color:#666;padding-left:11px;}\n.pillar-nav a{\n\tcolor:teal;\n  cursor:pointer;\n}\n.toc {\n\tfont-size: 14px;\n  font-weight:700;\n  padding: 0px 0 10px 0;\n  color:#323232;\n}\n\n.pillar-nav ul li{\n\tborder-top: 1px solid #e3e3e3;\n    color: teal;\n    font-size: 14px;\n    list-style-type: none;\n    padding: 10px 25px;\n}\n.pillar-nav a:hover{\n\tcolor:#323232;\n}\n.pillar-navbar {position:relative;}\n.pillar-navbar ul li {\n    border-top: 1px solid #e3e3e3;\n    color: teal;\n    font-size: 14px;\n    list-style-type: none;\n    padding: 10px 25px;\n}\n.pillar-navbar ul li.active:before {\n    color: teal;\n    content: \"\\2219\";\n    font-size: 60px;\n    position: absolute;\n    top: -17px;\n    left: 5px;\n}\n\n.pillar-navbar ul li.active a {\n  color: #323232;\n  font-weight:700;\n}\n\n.eoc_v2 .main-content .content-left .share-bar-desktop {\n\tmargin-left:initial;\n}\n.eoc_v2 .share-bar-desktop {width:auto;margin:initial;position:relative;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop {background:none !important;display:inline-block;padding:0;border-top:none;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a {color:#666;min-height:25px;padding: 0 3px !important;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a:hover  {color:teal !important;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop.socialMedia-twitter {top:0px;position:relative;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a .x_logo {font-size:14px;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop [data-icon]:before {vertical-align:middle;}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop.contentTools-print a, \n.eoc_v2 .share-bar-desktop .share-bar-item-desktop.contentTools-email a {\n\tcolor:#666;\n}\n.eoc_v2 .share-bar-desktop .share-bar-item-desktop a {\n  font-size: 25px;\n  }  \n}\n@media only screen and (max-width: 1444px) { \n  .optly-toc.pillar-nav {\n  display:none;\n  }\n  \n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "259449adf8be4cd79b0e1f839184d98b", "selector": "#optly-toc ul li a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "5c70cff693564719be8ef77b7fd05865", "selector": ".share-bar-item-desktop a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "039a2d66764e459cb5c2ed6a396a6f4a", "selector": "#content-body a:not(.optly-toc-anchor)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "b1b884c24ef8425697cd794b4c7a9ff5", "selector": "#main-content a"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "ecd61cb5e9214288b323df9e77eec399", "selector": "#page-header"}]}]}], "weightDistributions": [{"entityId": "4964195184148480", "endOfRange": 5000}, {"entityId": "5701036183126016", "endOfRange": 10000}], "name": null, "bucketingStrategy": null, "experimentMetadata": {"allocationPolicy": "manual", "layerId": "6615829857435648"}, "deployed": false}], "policy": "single_experiment", "viewIds": ["5578879226609664"], "weightDistributions": null, "decisionMetadata": null, "concluded": false}], "groups": [], "audiences": [{"id": "17823671204", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]], ["or", ["or", {"match": null, "name": null, "type": "location", "value": "US"}]], ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie8"}, {"match": null, "name": null, "type": "browser_version", "value": "ie9"}]]]]}, {"id": "17892952386", "name": null, "conditions": ["and", ["or", ["or", {"match": "exists", "name": "optly_techtarget_test", "type": "cookies", "value": ""}]]]}, {"id": "20324229137", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "browser_version", "value": "gc"}]]]}, {"id": "5010347677974528", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "|||NA"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "4699247325478912", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_dev__content_recommendatio", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": /****** JAVASCRIPT CONDITION (AND) ******/
function contentRecommendationsEvaluation() {
    console.log("contentRecommendationsEvaluation wave2 - Page Eval - 8/20/25 1");
 
    var $ = window.$,
        meteringCheck1,
        meteringCheck2,
        formAppCode,
        hostname          = window.location.hostname,
        pathname          = window.location.pathname.split('/')[1],
        pageType          = window.location.pathname.split('/')[2],
        hasDigDeeper      = false,
        consolSiteMatch   = false,
        // contentTypes = ['feature', 'tip' , 'news', 'opinion' , 'answer'],
        contentTypes = ['feature','tip','news','opinion','answer','definition'],
        contentTypeMatch  = false,
        // sites = ['searchitoperations'];
        sites = ['searchcustomerexperience','searchdatamanagement','searchsoftwarequality','searchmobilecomputing','searchvirtualdesktop','searchapparchitecture','searchbusinessanalytics','searcherp','searchunifiedcommunications','searchitchannel','searchdatabackup','searchhrsoftware','searchcontentmanagement','searchdisasterrecovery','sustainability','searchsap','searchvmware','searchaws','searchoracle'];

    for (i=0;i<sites.length;i++) {
        if (hostname == 'www.techtarget.com' && (pathname === sites[i])) {
            consolSiteMatch = true;
        }
    }

    if (pathname === 'search'){
        contentTypeMatch = false;
    } else {
        for (j=0;j<contentTypes.length;j++) {
            if(pageType.includes(contentTypes[j])) {
                contentTypeMatch = true;
            }
        }
    }

    if ($('#DigDeeperSplash').length){
        console.log('contentRecommendationsEvaluation wave2 - Page Eval - Dig Deeper on page');
        hasDigDeeper = true;
    } else {
        console.log('contentRecommendationsEvaluation wave2 - Page Eval - Dig Deeper not on page');
    }

    if(consolSiteMatch == true && contentTypeMatch == true){
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
            meteringCheck1 = ctx.isServerSideMetering;
            meteringCheck2 = metering.isMetered(ctx, cookie);
        });

        formAppCode = window.$("#inlineRegistration_AppCode").val();

        if (meteringCheck1 === "false" && meteringCheck2 === true){
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - has metered reg - DON'T ACTIVATE");
            return false;
        } else if (formAppCode === 150 || formAppCode === 151) {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - has leading reg - DON'T ACTIVATE");
            return false;
        } else if (hasDigDeeper == true) {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - ACTIVATE");
            return true;
        } else {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - DON'T ACTIVATE");
            return false;
        }
    } else {
        console.log("contentRecommendationsEvaluation wave2 - Page Eval - DON'T ACTIVATE");
        return false;
    }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "4740162995879936", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_gen_ai_search_1", "name": null, "staticConditions": ["and", ["or", {"type": "custom_code", "value": function genAIsearchMain(utils) {
  console.log("(Gen AI) Search Main - Start Page Eval – " + new Date().toISOString());

  // — CONFIG & STATE VARS —
  var collection, collectionId, adId, topicId;
  var meteringCheck1, meteringCheck2;
  var formAppCode     = window.$("#inlineRegistration_AppCode").val(),
      fastRegAppCode  = window.$('smartforms-techtarget').attr('app-code');
  var href            = window.location.href,
      hostname        = window.location.hostname,
      pathname        = window.location.pathname;
  var isABMPillar     = false,
      isPillarMain    = false,
      isRegPage       = null,
      isMetered       = null,
      contentTypeMatch= false,
      siteNameMatch   = false,
      responseError   = false,
      isTestPage      = false,
      hasOverrideCookie = false;

  // — PULL IN TT CONTEXT & METERING —
  if (typeof TT !== "undefined") {
    TT(['context','context/ui','util/cookie','util/metering'], function(ctx, ui, cookie, metering) {
      collection     = ctx.collection;
      collectionId   = ctx.collectionId;
      meteringCheck1 = ctx.isServerSideMetering;
      meteringCheck2 = metering.isMetered(ctx, cookie);
      isPillarMain   = (collection === "PILLAR Main");
      isABMPillar    = (collectionId === "366546058");
      console.log("(Gen AI) Search Main - isPillarMain:", isPillarMain, "isABMPillar:", isABMPillar);
    });
  }

  // — HELPERS —
  function checkForTTVar() {
    if (typeof TT === "undefined") {
      console.log("(Gen AI) Search Main - no TT available → registration page");
      isRegPage = true;
    } else {
      console.log("(Gen AI) Search Main - TT available → not a registration page");
      isRegPage = false;
    }
  }
  function checkForContentTypes() {
    var types = ['/search/','/tip/','/definition/'];
    types.forEach(function(ct) {
      if (pathname.indexOf(ct) > -1) {
        contentTypeMatch = true;
        console.log("(Gen AI) Search Main - contentTypeMatch:", ct);
      }
    });
  }
  function checkForMetering() {
    console.log("(Gen AI) Search Main - Checking metering:", meteringCheck1, meteringCheck2);
    if (meteringCheck1 === "false" && meteringCheck2 === true) {
      isMetered = true;
      console.log("(Gen AI) Search Main - has metered reg → DO NOT ACTIVATE");
    }
    else if (formAppCode === "150" || formAppCode === "151") {
      isMetered = true;
      console.log("(Gen AI) Search Main - has inline reg → DO NOT ACTIVATE");
    }
    else {
      isMetered = false;
      console.log("(Gen AI) Search Main - isMetered: false");
    }
  }
  function checkForSiteMatch() {
    siteNameMatch = (hostname === 'www.techtarget.com');
    console.log("(Gen AI) Search Main - siteNameMatch:", siteNameMatch);
  }
  function checkIfResponseError() {
    responseError = !!sessionStorage.getItem('responseError');
    console.log("(Gen AI) Search Main - responseError:", responseError);
  }
  function checkTestPage() {
    // exact match or match with any query string
    var testUrls = [
      'https://www.techtarget.com/search',
      /^https:\/\/www\.techtarget\.com\/search\?.*$/
    ];
    isTestPage = testUrls.some(function(u) {
      if (typeof u === 'string') {
        return href === u;
      }
      return u.test(href);
    });
    console.log("(Gen AI) Search Main - isTestPage:", isTestPage);
  }
  function checkCookieOverrides() {
    hasOverrideCookie = document.cookie.split(';').some(function(c){
      return c.trim().startsWith('genaichatinternal2=');
    });
    console.log("(Gen AI) Search Main - hasOverrideCookie:", hasOverrideCookie);
  }

  // — RUN ALL CHECKS —
  checkForTTVar();
  checkForContentTypes();
  checkForMetering();
  checkForSiteMatch();
  checkIfResponseError();
  checkTestPage();
  checkCookieOverrides();

  // — FINAL ACTIVATION DECISION —
  // If override cookie present, always activate
  if (hasOverrideCookie) {
    console.log("(Gen AI) Search Main - Override cookie → FORCE ACTIVATE");
    return true;
  }

  if (
    !isRegPage &&
    !isPillarMain &&
    !isABMPillar &&
    !isMetered &&
    siteNameMatch &&
    !responseError &&
    isTestPage
  ) {
    console.log("(Gen AI) Search Main - Search Main → ACTIVATE");
    return true;
  } else {
    console.log(
      "(Gen AI) Search Main - Search Main → DO NOT ACTIVATE |",
      "isRegPage:", isRegPage,
      "isPillarMain:", isPillarMain,
      "isABMPillar:", isABMPillar,
      "isMetered:", isMetered,
      "siteNameMatch:", siteNameMatch,
      "contentTypeMatch:", contentTypeMatch,
      "responseError:", responseError,
      "isTestPage:", isTestPage,
      "hasOverrideCookie:", hasOverrideCookie
    );
    return false;
  }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "www\\.eng\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "www\\.qa\\.techtarget\\.com.*"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5578879226609664", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_table_of_contents__tips__2", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": function TOC_TaF(utils) {
  console.log("TOC_TaF - Start Page Eval - 03/18/2025");
  var appCodeExistsOnPage;
  var cloudFlareChecks;
  var canActivate;
  var pillarData;
  var collection,
      collectionId,
    adId,
    topicId,
    meteringCheck1, // want = "false"
    meteringCheck2, // want = true
    loggedIn, // want null
    formAppCode = $('smartforms-techtarget').attr('app-code'),
    href = window.location.href,
    hostname = window.location.hostname,
    hostnameSplit = window.location.hostname.split('.')[0],
    pathname = window.location.pathname.split('/')[1],
    isAbmPillar = false,
    isRegPage = null,
    isMetered = null,
    isMinWidth = false,
    isPillarCollection = null,
    isPillarMainOrCollection = null,
    consolSiteMatch = false,
    regularSiteMatch = false,
    siteName = null,
    siteNames = ['WhatIs', 'IoTAgenda', 'Sustainability'],
    siteNameMatch = false,
    contentTypeMatch  = false,
    targetedSiteMatch = false,
    isTestPage = false,
    promiseResolved = false,
    hasMinH2s = false,
  contentTypes      = ['/feature/', '/tip/',];
  //['/feature/','/tutorial/','/tip/','/answer/','/definition/','/tutorial/','/opinion/'];

  TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
    collection = ctx.collection;
    collectionId = ctx.collectionId;
    siteName = ctx.siteName;
    adId = ctx.adId;
    topicId = ctx.topicId;
  });
  //console.log("TOC_TaF - collectionID: " + collectionId);
  

  checkForTTVar(); //check TT to determine if user is loggedIn
  checkifAbmPillar(); //only activate if CollectionId = ABM PIllar
  checkForMetering(); //only non-metered pages
  checkForSiteMatch(); //need all search site, IoT
  checkTestPage();
  checkForContentTypeMatch();
  checkForPillarMainCollection();
  checkH2Count();
  hasMinWidth();

  //&& isTestPage
  if (!isRegPage && !isAbmPillar && siteNameMatch && !isMetered  && contentTypeMatch && !isPillarMainOrCollection && hasMinH2s && isMinWidth ) {
    console.log('TOC_TaF - ACTIVATE');
    return true;
  } else {
    //console.log('TOC_TaF - DO NOT ACTIVATE');
    //console.log('TOC_TaF - values: ' + isRegPage + " " + isMetered  + " " + isAbmPillar + " " + consolSiteMatch + " " + isPillarCollection + " " + regularSiteMatch + " " + isTestPage);
    return false;
  }

  function checkForTTVar() {
    if (typeof TT === "undefined") {
      //console.log('TOC_TaF - no tt avail, probably on reg page');
      isRegPage = true;
      return false;
    } else {
      //console.log('TOC_TaF - tt IS avail, you are not on reg page');
      isRegPage = false;
    }
  }

  function checkifAbmPillar() {
    if (collectionId === '366546058') {
      isAbmPillar = true;
      //console.log('TOC_TaF - isAbmPillar: true');
    } else {
      //console.log('TOC_TaF - isAbmPillar: false');
      return false;
      //console.log("RETURN FALSE");
    }
  }

  function checkForMetering() {
    //for (k=0;k<sites.length;k++) {

    //console.log('TOC_TaF - Checking for metering');
    //if (window.location.pathname.includes(contentTypes[k])) {
    //console.log('ABM Pillar Splash - Checking contentTypes');
    //console.log('ABM Pillar Splash - href ' + href);
    if (meteringCheck1 === "false" && meteringCheck2 === true) {
      //console.log(meteringCheck1 + " " + meteringCheck2);
      //console.log("TOC_TaF - has metered reg - DON'T ACTIVATE");
      isMetered = true;
      return false;
    } else if (formAppCode === "150" || formAppCode === "151") {
      //console.log("TOC_TaF - has leading reg - DON'T ACTIVATE");
      isMetered = true;
      //console.log(formAppCode);
      return false;
    } else {
      //console.log('TOC_TaF - isMetered: false');
      isMetered = false;
    }
  }

   function checkTestPage() {
    if ((window.location.href.indexOf('https://www.techtarget.com/searchcloudcomputing/tip/Why-should-I-use-Docker-containers-vs-VMs-for-my-cloud-apps') > -1) || (window.location.href.indexOf('https://www.techtarget.com/whatis/feature/Halliburton-cyberattack-explained-What-happened')> -1)) {
      isTestPage = true;
      //console.log('TOC_TaF - isTestPage: true'); 

    }
  }

  function checkForSiteMatch() {
   // Check for 'whatis'
  if (href.indexOf('whatis') > -1) {
    siteNameMatch = true;
    //console.log('TOC_TaF - "whatis" site detected, site match ' + siteNameMatch);
  } 
  // If not 'whatis', then proceed with other site checks
  else if (hostname === 'www.techtarget.com' && (
      (typeof siteName !== 'undefined') && // Ensure 'siteName' exists
      (siteName.indexOf('searchCloudComputing') > -1 ||
       siteName.indexOf('searchEnterpriseDesktop') > -1 ||
       siteName.indexOf('searchDataCenter') > -1 ||
       siteName.indexOf('searchWindowsServer') > -1 ||
       siteName.indexOf('searchStorage') > -1) ||
       siteName.indexOf('searchITOperations') > -1 ||
       siteName.indexOf('IoTAgenda') > -1
    )) {
    siteNameMatch = true;
    //console.log('TOC_TaF - site match ' + siteNameMatch);
  } else {
    siteNameMatch = false;
    //console.log('TOC_TaF - no site match ' + siteNameMatch);
  }
}
  
  function checkForContentTypeMatch() {
    for (var j=0;j<contentTypes.length;j++) {
        if (window.location.pathname.includes(contentTypes[j])) {
            contentTypeMatch = true;
        }
    }
  }
  function checkForPillarMainCollection() {
    if ((collection === 'PILLAR') || (collection === 'NONE')) {
    	isPillarMainOrCollection = false;
      //console.log('TOC v2 - isPillarCollection ' + isPillarMainOrCollection);
    } else {
    	isPillarMainOrCollection = true;
      //console.log('TOC - isPillarCollection ' + isPillarMainOrCollection);
    }
  }
  
  function checkH2Count() {
  	var count = $('#content-body h2').length;
    if (count > 1) {
      hasMinH2s = true;
      //console.log('TOC_TaF - minH2s ' + hasMinH2s);
  	} else {
  		hasMinH2s = false;
      //console.log('TOC_TaF - minH2s ' + hasMinH2s);
  	}
  }
  function hasMinWidth() {
  	if ($(window).width() > 1445) {
    	isMinWidth = true;
    }
  }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "5736420669652992", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_content_recommendations__w", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["or", {"type": "custom_code", "value": /****** JAVASCRIPT CONDITION (AND) ******/
function contentRecommendationsEvaluation() {
    console.log("contentRecommendationsEvaluation wave3 - Page Eval - 8/20/25 1");
 
    var $ = window.$,
        meteringCheck1,
        meteringCheck2,
        formAppCode,
        hostname          = window.location.hostname,
        pathname          = window.location.pathname.split('/')[1],
        pageType          = window.location.pathname.split('/')[2],
        hasDigDeeper      = false,
        consolSiteMatch   = false,
        // contentTypes = ['feature', 'tip' , 'news', 'opinion' , 'answer'],
        contentTypes = ['feature','tip','news','opinion','answer','definition'],
        contentTypeMatch  = false,
        sites = ['searchitoperations'];
        // sites = ['searchcustomerexperience','searchdatamanagement','searchsoftwarequality','searchmobilecomputing','searchvirtualdesktop','searchapparchitecture','searchbusinessanalytics','searcherp','searchunifiedcommunications','searchitchannel','searchdatabackup','searchhrsoftware','searchcontentmanagement','searchdisasterrecovery','sustainability','searchsap','searchvmware','searchaws','searchoracle'];

    for (i=0;i<sites.length;i++) {
        if (hostname == 'www.techtarget.com' && (pathname === sites[i])) {
            consolSiteMatch = true;
        }
    }

    if (pathname === 'search'){
        contentTypeMatch = false;
    } else {
        for (j=0;j<contentTypes.length;j++) {
            if(pageType.includes(contentTypes[j])) {
                contentTypeMatch = true;
            }
        }
    }

    if ($('#DigDeeperSplash').length){
        console.log('contentRecommendationsEvaluation wave2 - Page Eval - Dig Deeper on page');
        hasDigDeeper = true;
    } else {
        console.log('contentRecommendationsEvaluation wave2 - Page Eval - Dig Deeper not on page');
    }

    if(consolSiteMatch == true && contentTypeMatch == true){
        TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
            meteringCheck1 = ctx.isServerSideMetering;
            meteringCheck2 = metering.isMetered(ctx, cookie);
        });

        formAppCode = window.$("#inlineRegistration_AppCode").val();

        if (meteringCheck1 === "false" && meteringCheck2 === true){
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - has metered reg - DON'T ACTIVATE");
            return false;
        } else if (formAppCode === 150 || formAppCode === 151) {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - has leading reg - DON'T ACTIVATE");
            return false;
        } else if (hasDigDeeper == true) {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - ACTIVATE");
            return true;
        } else {
            console.log("contentRecommendationsEvaluation wave2 - Page Eval - DON'T ACTIVATE");
            return false;
        }
    } else {
        console.log("contentRecommendationsEvaluation wave2 - Page Eval - DON'T ACTIVATE");
        return false;
    }
}
}], ["not", ["or", {"match": "regex", "type": "url", "value": "qa\\.techtarget\\.com"}, {"match": "regex", "type": "url", "value": "eng\\.techtarget\\.com"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "6458308895178752", "category": "other", "apiName": "17796810052_url_targeting_for_copy_of_cyber_pilot_promo__topical", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "techtarget\\.com"}], ["not", ["or", {"match": "regex", "type": "url", "value": ".*eng\\.techtarget\\.com.*"}, {"match": "regex", "type": "url", "value": ".*qa\\.techtarget\\.com.*"}]], ["or", {"type": "custom_code", "value": function cyberPilotSplash(utils) {
  console.log("Cyber Pilot Splash - Start Page Eval - 5/29/2023");


  const exclusionSet = new Set([
    "https://www.techtarget.com/searchsecurity/definition/security-information-and-event-management-SIEM",
    "https://www.techtarget.com/searchsecurity/definition/message-authentication-code-MAC",
    "https://www.techtarget.com/searchsecurity/definition/phishing",
    "https://www.techtarget.com/searchsecurity/definition/advanced-persistent-threat-APT",
    "https://www.techtarget.com/searchsecurity/definition/CISO-as-a-service-vCISO-virtual-CISO-fractional-CISO",
    "https://www.techtarget.com/searchsecurity/definition/CISO-chief-information-security-officer",
    "https://www.techtarget.com/searchsecurity/definition/cybersecurity",
    "https://www.techtarget.com/searchsecurity/definition/vulnerability-management",
    "https://www.techtarget.com/whatis/definition/attack-surface",
    "https://www.techtarget.com/whatis/definition/cyber-resilience",
    "https://www.techtarget.com/searchsecurity/definition/biometric-authentication",
    "https://www.techtarget.com/searchsecurity/definition/principle-of-least-privilege-POLP",
    "https://www.techtarget.com/whatis/definition/software-bill-of-materials-SBOM",
    "https://www.techtarget.com/searchsecurity/definition/cloud-infrastructure-entitlement-management-CIEM",
    "https://www.techtarget.com/searchsecurity/tutorial/How-to-use-the-Hydra-password-cracking-tool",
    "https://www.techtarget.com/searchsecurity/tip/Security-log-management-and-logging-best-practices",
    "https://www.techtarget.com/searchsecurity/tip/How-to-conduct-incident-response-tabletop-exercises",
    "https://www.techtarget.com/searchsecurity/feature/How-to-implement-zero-trust-security-from-people-who-did-it",
    "https://www.techtarget.com/searchsecurity/feature/How-to-become-a-bug-bounty-hunter-Getting-started",
    "https://www.techtarget.com/searchsecurity/tip/How-to-create-an-SBOM-with-example-and-template",
    "https://www.techtarget.com/searchsecurity/tip/SBOM-formats-compared-CycloneDX-vs-SPDX-vs-SWID-Tags",
    "https://www.techtarget.com/searchsecurity/tutorial/Kali-vs-ParrotOS-2-versatile-Linux-distros-for-security-pros",
    "https://www.techtarget.com/searchsecurity/tip/10-common-types-of-malware-attacks-and-how-to-prevent-them",
    "https://www.techtarget.com/searchsecurity/feature/The-fundamentals-of-MFA-The-business-case-for-multifactor-authentication",
    "https://www.techtarget.com/searchsecurity/answer/What-are-the-differences-between-symmetric-and-asymmetric-encryption-algorithms",
    "https://www.techtarget.com/searchsecurity/tip/Top-DevSecOps-certifications-and-trainings",
    "https://www.techtarget.com/searchsecurity/tip/DevSecOps-tools-to-secure-each-step-of-the-SDLC",
    "https://www.techtarget.com/searchsecurity/feature/How-to-avoid-phishing-hooks-A-checklist-for-your-end-users",
    "https://www.techtarget.com/searchsecurity/tip/How-to-conduct-a-smart-contract-audit-and-why-its-needed",
    "https://www.techtarget.com/searchsecurity/tip/Smart-contract-vulnerabilities-and-how-to-mitigate-them",
    "https://www.techtarget.com/searchsecurity/tip/What-enumeration-attacks-are-and-how-to-prevent-them",
    "https://www.techtarget.com/searchsecurity/tip/How-to-calculate-cybersecurity-ROI-with-concrete-metrics",
    "https://www.techtarget.com/searchsecurity/tip/Build-a-strong-cyber-resilience-strategy-with-existing-tools",
    "https://www.techtarget.com/searchsecurity/tip/5-ways-to-achieve-a-risk-based-security-strategy"
  ]);

  const currentUrl = window.location.href;
  if (exclusionSet.has(currentUrl)) {
    console.log("Cyber Pilot Splash – EXCLUDED URL, will not activate:", currentUrl);
    return false;
  }


  var appCodeExistsOnPage;
  var cloudFlareChecks;
  var canActivate;
  var pillarData;
  var collectionId,
    adId,
    topicId,
    topicName,
    meteringCheck1, // want = "false"
    meteringCheck2, // want = true
    loggedIn, // want null
    formAppCode,
    hostname = window.location.hostname,
    hostnameSplit = window.location.hostname.split('.')[0],
    mediaServerPath = 'https://cdn.ttgtmedia.com/ux/apps/optimizely/experiments/json/ttPillarId_test.json',
    pathname = window.location.pathname.split('/')[1],
    isAbmPillar = null,
    isRegPage = null,
    isMetered = null,
    consolSiteMatch = false,
    regularSiteMatch = false,
    siteName = null,
    siteNames = ['searchSecurity'],
    siteNameMatch = false,
    contentTypeMatch  = false,
    targetedSiteMatch = false,
    isTestPage = false,
    promiseResolved = false,
    contentTypes = ['/feature/','/news/','/tip/','/answer/','/definition/','/tutorial/','/opinion/'];

  TT(['context', 'context/ui', 'util/cookie', 'util/metering'], function(ctx, ui, cookie, metering) {
    collectionId = ctx.collectionId;
    siteName = ctx.siteName;
    adId = ctx.adId;
    topicId = ctx.topicId;
    topicName = ctx.topicName;
    window.topicName = topicName;
    meteringCheck1 = ctx.isServerSideMetering;
    meteringCheck2 = metering.isMetered(ctx, cookie);
    //mediaServerPath = mediaServerPath + topicId + '.json';
  });

  console.log("Cyber Pilot Splash - collectionID: " + collectionId);

  checkForContentTypes();
  checkForTTVar();       // check TT to determine if user is on a registration page
  checkifAbmPillar();    // don't activate if Collection is ABM Pillar ID
  checkForMetering();    // only non-metered pages
  checkForSiteMatch();   // searchSecurity only

  if (!isRegPage && siteNameMatch && !isMetered && contentTypeMatch && !isAbmPillar) {
    console.log('Cyber Pilot Splash - ACTIVATE');
    return true;
  } else {
    console.log('Cyber Pilot Splash - DO NOT ACTIVATE');
    console.log(
      'Cyber Pilot Splash - values: ' +
      isRegPage + " " +
      siteNameMatch + " " +
      isMetered + " " +
      contentTypeMatch + " " +
      isAbmPillar
    );
    return false;
  }


  function checkForTTVar() {
    if (typeof TT === "undefined") {
      console.log('Cyber Pilot Splash - no TT available → probably on reg page');
      isRegPage = true;
      return false;
    } else {
      console.log('Cyber Pilot Splash - TT IS available, not on reg page');
      isRegPage = false;
    }
  }

  function checkForContentTypes() {
    for (let j = 0; j < contentTypes.length; j++) {
      if (window.location.pathname.includes(contentTypes[j])) {
        contentTypeMatch = true;
        console.log('Cyber Pilot Splash - contentTypeMatch:', contentTypeMatch);
        break;
      }
    }
  }

  function checkifAbmPillar() {
    if (collectionId === '366546058') {
      isAbmPillar = true;
      console.log('Cyber Pilot Splash - isAbmPillar: true');
    } else {
      console.log('Cyber Pilot Splash - isAbmPillar: false');
      isAbmPillar = false;
    }
  }

  function checkForMetering() {
    console.log(
      "(Gen AI) Search Main - Checking metering:",
      meteringCheck1,
      meteringCheck2
    );
    if (meteringCheck1 === "false" && meteringCheck2 === true) {
      isMetered = true;
      console.log("(Gen AI) Search Main - has metered reg → DO NOT ACTIVATE");
    }
    else if (formAppCode === "150" || formAppCode === "151") {
      isMetered = true;
      console.log("(Gen AI) Search Main - has inline reg → DO NOT ACTIVATE");
    }
    else {
      isMetered = false;
      console.log("(Gen AI) Search Main - isMetered: false");
    }
  }

  function checkForSiteMatch() {
    if ((hostname === 'www.techtarget.com') &&
      (siteName === "searchSecurity")) {
      siteNameMatch = true;
      console.log('Cyber Pilot Splash - site match:', siteNameMatch);
    } else {
      siteNameMatch = false;
      console.log('Cyber Pilot Splash - no site match:', siteNameMatch);
    }
  }
}
}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "17846171135", "viewId": null, "name": null, "category": "other", "apiName": "inline_reg_successful_page1_submit", "eventType": "custom", "eventFilter": null}, {"id": "17857222016", "viewId": null, "name": null, "category": "other", "apiName": "global_app_code_127_dlo", "eventType": "custom", "eventFilter": null}, {"id": "17861001482", "viewId": null, "name": null, "category": "other", "apiName": "inline_reg_successful_page2_submit", "eventType": "custom", "eventFilter": null}, {"id": "17868031558", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17870890533", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17872770972", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17881411148", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17881411149", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17882861478", "viewId": null, "name": null, "category": "other", "apiName": "global_halfPageAd_clicked", "eventType": "custom", "eventFilter": null}, {"id": "17887132456", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17892190463", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17893250559", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17897702267", "viewId": null, "name": null, "category": "other", "apiName": "ad_300_x_250_mutop", "eventType": "custom", "eventFilter": null}, {"id": "17898270042", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17899670705", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "17899730380", "viewId": null, "name": null, "category": "other", "apiName": "global_app_code_151_metering", "eventType": "custom", "eventFilter": null}, {"id": "17903280418", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "17911180165", "viewId": null, "name": null, "category": "other", "apiName": "pe_scroll_100_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "17935170525", "viewId": null, "name": null, "category": "other", "apiName": "global_muTopAd_clicked", "eventType": "custom", "eventFilter": null}, {"id": "18092710965", "viewId": null, "name": null, "category": "other", "apiName": "myresearch_redCircModal_full_registration_submission", "eventType": "custom", "eventFilter": null}, {"id": "18165862266", "viewId": null, "name": null, "category": "other", "apiName": "my_research_modal_close_clicks_pe", "eventType": "custom", "eventFilter": null}, {"id": "18169870907", "viewId": null, "name": null, "category": "other", "apiName": "my_research_modal_download_clicks_pe", "eventType": "custom", "eventFilter": null}, {"id": "18177652889", "viewId": null, "name": null, "category": "other", "apiName": "myresearch_full_registration_successful_submit_pe", "eventType": "custom", "eventFilter": null}, {"id": "18241231076", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndLoggedOut_sideModal_successfulSubmit", "eventType": "custom", "eventFilter": null}, {"id": "18579980391", "viewId": null, "name": null, "category": "other", "apiName": "Optimizely_DLO_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18587600343", "viewId": null, "name": null, "category": "other", "apiName": "Optimizely_DLO_P2_page1_success", "eventType": "custom", "eventFilter": null}, {"id": "18601090247", "viewId": null, "name": null, "category": "other", "apiName": "Optimizely_DLO_P2_page2_success", "eventType": "custom", "eventFilter": null}, {"id": "18792322693", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_confirmShowing", "eventType": "custom", "eventFilter": null}, {"id": "18792392610", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_error_checkboxes", "eventType": "custom", "eventFilter": null}, {"id": "18794413039", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_error_email", "eventType": "custom", "eventFilter": null}, {"id": "18844861312", "viewId": null, "name": null, "category": "other", "apiName": "pe_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "18844861313", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_percent", "eventType": "custom", "eventFilter": null}, {"id": "18848901370", "viewId": null, "name": null, "category": "other", "apiName": "pe_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "18850581201", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18852902427", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_percent", "eventType": "custom", "eventFilter": null}, {"id": "18854773384", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "18858901179", "viewId": null, "name": null, "category": "other", "apiName": "pe_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "18860613542", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18862561156", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18862793052", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_dlo_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18862830908", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_percent", "eventType": "custom", "eventFilter": null}, {"id": "18863952920", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18864122623", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_100_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18864133624", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18866172872", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_discussion_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18866740131", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18867901706", "viewId": null, "name": null, "category": "other", "apiName": "pe_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "18867901707", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18867983058", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18870062338", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_next_steps_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18870101850", "viewId": null, "name": null, "category": "other", "apiName": "pe_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18870160934", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18872132025", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_track_dlo_articles_pg1", "eventType": "custom", "eventFilter": null}, {"id": "18872491997", "viewId": null, "name": null, "category": "other", "apiName": "scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18874512939", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18875582363", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18875591512", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_percent", "eventType": "custom", "eventFilter": null}, {"id": "18875651065", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_reg_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18875652621", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18875862795", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18875904070", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "18877903549", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18877972666", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18878070960", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18879521966", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_track_dlo_articles_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18881151173", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_discussion_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18881151174", "viewId": null, "name": null, "category": "other", "apiName": "scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18883022158", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18883380388", "viewId": null, "name": null, "category": "other", "apiName": "adblock_exists", "eventType": "custom", "eventFilter": null}, {"id": "18883443556", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "18883512806", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "18884990436", "viewId": null, "name": null, "category": "other", "apiName": "adblock_absent", "eventType": "custom", "eventFilter": null}, {"id": "18885154528", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_inlineReg_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18886990913", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18887132704", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_inlineReg_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "18887162712", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_continueReadingExists", "eventType": "custom", "eventFilter": null}, {"id": "18887213081", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_dlo_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18887263462", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18887800597", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18888380007", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_related_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18892961054", "viewId": null, "name": null, "category": "other", "apiName": "scroll_100_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18893081363", "viewId": null, "name": null, "category": "other", "apiName": "scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "18895002591", "viewId": null, "name": null, "category": "other", "apiName": "pe_click_tracking_articles_dig_deeper_on_page", "eventType": "custom", "eventFilter": null}, {"id": "18904940260", "viewId": null, "name": null, "category": "other", "apiName": "pe_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18905291797", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "18910345831", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_downloadSingle_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18924251117", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_pillar_cluster", "eventType": "custom", "eventFilter": null}, {"id": "18929490007", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_dlo_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "18940960004", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "18949100710", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_sharedCodeVisitorCount", "eventType": "custom", "eventFilter": null}, {"id": "18954542623", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_dlo_openClicks", "eventType": "custom", "eventFilter": null}, {"id": "18962773475", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18968102449", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_cmpShowing", "eventType": "custom", "eventFilter": null}, {"id": "18970561673", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18972403926", "viewId": null, "name": null, "category": "other", "apiName": "redCircIndSMemail_cmpClick", "eventType": "custom", "eventFilter": null}, {"id": "18975315407", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_visible", "eventType": "custom", "eventFilter": null}, {"id": "18976142652", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_downloadSingle_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18977982148", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18981422415", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "18987433661", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_notVisible_expand_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18989443194", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_downloadAll_clicks", "eventType": "custom", "eventFilter": null}, {"id": "18990901494", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_onPage", "eventType": "custom", "eventFilter": null}, {"id": "18995093384", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_peek_visible_expand_clicks", "eventType": "custom", "eventFilter": null}, {"id": "19000750893", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_inlineReg_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19001023518", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_downloadAll_clicks", "eventType": "custom", "eventFilter": null}, {"id": "19019431536", "viewId": null, "name": null, "category": "other", "apiName": "redCircLISME_wave2_dlo_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19044672151", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_total_opens", "eventType": "custom", "eventFilter": null}, {"id": "19064213200", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_continue_reading_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19068101317", "viewId": null, "name": null, "category": "other", "apiName": "redCircleInd_body_links_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19388703826", "viewId": null, "name": null, "category": "other", "apiName": "regwall_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19398713286", "viewId": null, "name": null, "category": "other", "apiName": "regwall_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "19560760228", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_extraInfoExists", "eventType": "custom", "eventFilter": null}, {"id": "19562550197", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_extraInfoAnchorClicked", "eventType": "custom", "eventFilter": null}, {"id": "19568160885", "viewId": null, "name": null, "category": "other", "apiName": "regwall_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "19571830706", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_company", "eventType": "custom", "eventFilter": null}, {"id": "19572530315", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_lastName", "eventType": "custom", "eventFilter": null}, {"id": "19585430505", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_checkboxes", "eventType": "custom", "eventFilter": null}, {"id": "19587480658", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_firstName", "eventType": "custom", "eventFilter": null}, {"id": "19597111097", "viewId": null, "name": null, "category": "other", "apiName": "regwall_error_email", "eventType": "custom", "eventFilter": null}, {"id": "19920911061", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "19926910528", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_downloadShowing", "eventType": "custom", "eventFilter": null}, {"id": "19928048369", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19932346669", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "19932534749", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19934916962", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "19936528826", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "19937847191", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19937895746", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_dlo_onPage", "eventType": "custom", "eventFilter": null}, {"id": "19937927670", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_100_words_500-100", "eventType": "custom", "eventFilter": null}, {"id": "19941858164", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_pillar_cluster", "eventType": "custom", "eventFilter": null}, {"id": "19941858169", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_inlineReg_onPage", "eventType": "custom", "eventFilter": null}, {"id": "19941967903", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_extra_info_exists", "eventType": "custom", "eventFilter": null}, {"id": "19942750417", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_inlineReg_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "19942750421", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19943406396", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19943437402", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_dlo_submit_pg2", "eventType": "custom", "eventFilter": null}, {"id": "19943496615", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19943526147", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "19945477228", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "19949396426", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19951247725", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_inlineReg_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19953876394", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_mainContent_clicked", "eventType": "custom", "eventFilter": null}, {"id": "19954975997", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_extra_info_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "19954996743", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_discussion_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19955018286", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "19955971079", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19958978748", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_sharedCodeVisitorCount", "eventType": "custom", "eventFilter": null}, {"id": "19961006143", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_dlo_submit_pg1", "eventType": "custom", "eventFilter": null}, {"id": "19961831181", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_continue_reading_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19961861283", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "19969051163", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "19972971582", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_keyTakeawaysExists", "eventType": "custom", "eventFilter": null}, {"id": "19982762228", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_q1_yes", "eventType": "custom", "eventFilter": null}, {"id": "19984242712", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_on_page", "eventType": "custom", "eventFilter": null}, {"id": "19984259816", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_visible", "eventType": "custom", "eventFilter": null}, {"id": "19986971487", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_pillar_contentBody_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20011412546", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_opened", "eventType": "custom", "eventFilter": null}, {"id": "20017192515", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_q1_no", "eventType": "custom", "eventFilter": null}, {"id": "20017223396", "viewId": null, "name": null, "category": "other", "apiName": "chat_bot_carousel_item_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20024891444", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_extra_info_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20032841636", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_continue_reading_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20032891317", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_ehand_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "20038671518", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20039951310", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_100_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20046001388", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20046029798", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_sponsored_news_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20047721127", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_extra_info_exists", "eventType": "custom", "eventFilter": null}, {"id": "20049541749", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "20051701511", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_ehand_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "20051721631", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_75_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20051861321", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_100_words_500-100", "eventType": "custom", "eventFilter": null}, {"id": "20051861365", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20053611443", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20055321044", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_mainContent_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20055351193", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_keyTakeawaysExists", "eventType": "custom", "eventFilter": null}, {"id": "20057711247", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_75_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20057751120", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20061161284", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "20063061495", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_75_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20063081106", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_contentBody_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20063081177", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_100_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20065081217", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20066941057", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20068941370", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20069930950", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_related_content_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20070991043", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_downloadShowing", "eventType": "custom", "eventFilter": null}, {"id": "20077291024", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_related_resources_on_page", "eventType": "custom", "eventFilter": null}, {"id": "20092233623", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_pillarClusterSplashExists", "eventType": "custom", "eventFilter": null}, {"id": "20092262519", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20094573125", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_requiredReadingExists", "eventType": "custom", "eventFilter": null}, {"id": "20098852507", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_nextStepsExists", "eventType": "custom", "eventFilter": null}, {"id": "20100482805", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_aux", "eventType": "custom", "eventFilter": null}, {"id": "20102472686", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_main", "eventType": "custom", "eventFilter": null}, {"id": "20104583773", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_authorLinkExists", "eventType": "custom", "eventFilter": null}, {"id": "20106386438", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_botNav_rigthArrowInactive", "eventType": "custom", "eventFilter": null}, {"id": "20106692413", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_breadcrumbsExists", "eventType": "custom", "eventFilter": null}, {"id": "20111802396", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20114661605", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_askExpertExists", "eventType": "custom", "eventFilter": null}, {"id": "20119982964", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_headerSearchSubmit", "eventType": "custom", "eventFilter": null}, {"id": "20125563047", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_googleAdClick", "eventType": "custom", "eventFilter": null}, {"id": "20127152847", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_varCodeStart", "eventType": "custom", "eventFilter": null}, {"id": "20127213096", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_relatedTermsExists", "eventType": "custom", "eventFilter": null}, {"id": "20129190008", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_secondary", "eventType": "custom", "eventFilter": null}, {"id": "20150211551", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_ehand_clickType_main_aux_sec_total", "eventType": "custom", "eventFilter": null}, {"id": "20184517767", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20204525345", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_headerSearchSubmit", "eventType": "custom", "eventFilter": null}, {"id": "20212498257", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_sponsoredNewsExists", "eventType": "custom", "eventFilter": null}, {"id": "20220018492", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_rightRailExists", "eventType": "custom", "eventFilter": null}, {"id": "20221898982", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_clicked_googleAd", "eventType": "custom", "eventFilter": null}, {"id": "20222733000", "viewId": null, "name": null, "category": "other", "apiName": "qa_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20223557570", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_relatedContentExists", "eventType": "custom", "eventFilter": null}, {"id": "20224134541", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_breadcrumbExists", "eventType": "custom", "eventFilter": null}, {"id": "20225947459", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_nextStepsExists", "eventType": "custom", "eventFilter": null}, {"id": "20228372344", "viewId": null, "name": null, "category": "other", "apiName": "qa_answer1_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20234632428", "viewId": null, "name": null, "category": "other", "apiName": "qa_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20235434581", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20236111994", "viewId": null, "name": null, "category": "other", "apiName": "qa_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20237198830", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_askExpertExists", "eventType": "custom", "eventFilter": null}, {"id": "20237702113", "viewId": null, "name": null, "category": "other", "apiName": "qa_question_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20238132490", "viewId": null, "name": null, "category": "other", "apiName": "qa_answer_multiple_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20242734599", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_welcomeAdExists", "eventType": "custom", "eventFilter": null}, {"id": "20243015134", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_vendorResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20247092867", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_defs_relatedTermsExists", "eventType": "custom", "eventFilter": null}, {"id": "20247522336", "viewId": null, "name": null, "category": "other", "apiName": "qa_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20255062690", "viewId": null, "name": null, "category": "other", "apiName": "qa_answer_total_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20298909928", "viewId": null, "name": null, "category": "other", "apiName": "related_content_extraInfoExists", "eventType": "custom", "eventFilter": null}, {"id": "20305010682", "viewId": null, "name": null, "category": "other", "apiName": "qa_chat_expanded", "eventType": "custom", "eventFilter": null}, {"id": "20308874480", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "20312632314", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20312632331", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20312743130", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20318919029", "viewId": null, "name": null, "category": "other", "apiName": "related_content_relatedTermsExists", "eventType": "custom", "eventFilter": null}, {"id": "20319892692", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "20321893018", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_sponsoredNewsExists", "eventType": "custom", "eventFilter": null}, {"id": "20322551353", "viewId": null, "name": null, "category": "other", "apiName": "related_content_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20324143130", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20324198151", "viewId": null, "name": null, "category": "other", "apiName": "related_content_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20326273119", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20328279597", "viewId": null, "name": null, "category": "other", "apiName": "related_content_relatedContentExists", "eventType": "custom", "eventFilter": null}, {"id": "20328293334", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_relatedContentExists", "eventType": "custom", "eventFilter": null}, {"id": "20328323647", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_vendorResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20328870192", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_feats_rightRailExists", "eventType": "custom", "eventFilter": null}, {"id": "20331919211", "viewId": null, "name": null, "category": "other", "apiName": "related_content_breadcrumbExists", "eventType": "custom", "eventFilter": null}, {"id": "20332801407", "viewId": null, "name": null, "category": "other", "apiName": "related_content_rightRailExists", "eventType": "custom", "eventFilter": null}, {"id": "20333609634", "viewId": null, "name": null, "category": "other", "apiName": "related_content_sponsoredNewsExists", "eventType": "custom", "eventFilter": null}, {"id": "20333653318", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_feats_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20337382631", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_latestTTresourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20337399718", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_50_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20337483064", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_word_count_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20339429271", "viewId": null, "name": null, "category": "other", "apiName": "related_content_vendorResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20342223388", "viewId": null, "name": null, "category": "other", "apiName": "related_content_digDeeperExists", "eventType": "custom", "eventFilter": null}, {"id": "20342610690", "viewId": null, "name": null, "category": "other", "apiName": "related_content_word_count_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20343113210", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "20343119641", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_halfpageAd", "eventType": "custom", "eventFilter": null}, {"id": "20343341708", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_breadcrumbExists", "eventType": "custom", "eventFilter": null}, {"id": "20345048746", "viewId": null, "name": null, "category": "other", "apiName": "related_content_nextStepsExists", "eventType": "custom", "eventFilter": null}, {"id": "20345053827", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20345072385", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "20347113258", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_relatedResourcesExists", "eventType": "custom", "eventFilter": null}, {"id": "20348351124", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_leaderboardAd", "eventType": "custom", "eventFilter": null}, {"id": "20348371128", "viewId": null, "name": null, "category": "other", "apiName": "related_content_askExpertExists", "eventType": "custom", "eventFilter": null}, {"id": "20348520192", "viewId": null, "name": null, "category": "other", "apiName": "related_content_word_count_500_1000", "eventType": "custom", "eventFilter": null}, {"id": "20348952902", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_clicked_googleAd", "eventType": "custom", "eventFilter": null}, {"id": "20349410098", "viewId": null, "name": null, "category": "other", "apiName": "pe_engTrack_feats_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20353320144", "viewId": null, "name": null, "category": "other", "apiName": " pe_engTrack_feats_headerSearchSubmit", "eventType": "custom", "eventFilter": null}, {"id": "20353812185", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_25_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20355700774", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_50_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20357651550", "viewId": null, "name": null, "category": "other", "apiName": "related_content_continueReadingExists", "eventType": "custom", "eventFilter": null}, {"id": "20358311395", "viewId": null, "name": null, "category": "other", "apiName": "related_content_newRelatedContentModulesCreated", "eventType": "custom", "eventFilter": null}, {"id": "20359870025", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_50_words_more_1000", "eventType": "custom", "eventFilter": null}, {"id": "20361501426", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_25_words_500-1000", "eventType": "custom", "eventFilter": null}, {"id": "20361540550", "viewId": null, "name": null, "category": "other", "apiName": "related_content_extraInfoAnchorClicked", "eventType": "custom", "eventFilter": null}, {"id": "20365011501", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_muTopAd", "eventType": "custom", "eventFilter": null}, {"id": "20365011502", "viewId": null, "name": null, "category": "other", "apiName": "related_content_clicked_googleAd", "eventType": "custom", "eventFilter": null}, {"id": "20366960522", "viewId": null, "name": null, "category": "other", "apiName": "related_content_scroll_25_words_less_500", "eventType": "custom", "eventFilter": null}, {"id": "20402660708", "viewId": null, "name": null, "category": "other", "apiName": "cluster_navigation_nav_download_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20411144832", "viewId": null, "name": null, "category": "other", "apiName": "cluster_navigation_body_download_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20550780745", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20560922948", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20568563264", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_related_content_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20573452951", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20574170723", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20577672862", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20666601926", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_added", "eventType": "custom", "eventFilter": null}, {"id": "20848430999", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_rightRailVisible", "eventType": "custom", "eventFilter": null}, {"id": "20854120788", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_opens", "eventType": "custom", "eventFilter": null}, {"id": "20858641689", "viewId": null, "name": null, "category": "other", "apiName": "related_content_author_recommendations_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20872850003", "viewId": null, "name": null, "category": "other", "apiName": "related_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20894763053", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeek_contentClicks2", "eventType": "custom", "eventFilter": null}, {"id": "20896820806", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_hasLocalStorage", "eventType": "custom", "eventFilter": null}, {"id": "20898711430", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_varStart", "eventType": "custom", "eventFilter": null}, {"id": "20900261252", "viewId": null, "name": null, "category": "other", "apiName": "related_content_author_recommendations_link_exists", "eventType": "custom", "eventFilter": null}, {"id": "20900350010", "viewId": null, "name": null, "category": "other", "apiName": "related_content_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20902190003", "viewId": null, "name": null, "category": "other", "apiName": "related_content_author_recommendations_author_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20902644375", "viewId": null, "name": null, "category": "other", "apiName": "ada_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20905631465", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_IDelementInDOM", "eventType": "custom", "eventFilter": null}, {"id": "20905910005", "viewId": null, "name": null, "category": "other", "apiName": "related_content_new_module_created", "eventType": "custom", "eventFilter": null}, {"id": "20910224402", "viewId": null, "name": null, "category": "other", "apiName": "ada_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20913381240", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_innerElementInDOM", "eventType": "custom", "eventFilter": null}, {"id": "20915230512", "viewId": null, "name": null, "category": "other", "apiName": "related_content_recommended_article_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20915547141", "viewId": null, "name": null, "category": "other", "apiName": "ada_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20917120256", "viewId": null, "name": null, "category": "other", "apiName": "related_content_content_container_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20919070372", "viewId": null, "name": null, "category": "other", "apiName": "related_content_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20921681101", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_pageTargetingConditionsNotMet", "eventType": "custom", "eventFilter": null}, {"id": "20923222194", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_meetsPageTargetingConditions", "eventType": "custom", "eventFilter": null}, {"id": "20929242312", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_showRRfail", "eventType": "custom", "eventFilter": null}, {"id": "20929391589", "viewId": null, "name": null, "category": "other", "apiName": "rrTrack_sessCookieFail", "eventType": "custom", "eventFilter": null}, {"id": "20963390201", "viewId": null, "name": null, "category": "other", "apiName": "ada_body_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20989111983", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "20990951454", "viewId": null, "name": null, "category": "other", "apiName": "publication_promotion_callout_close_clicks", "eventType": "custom", "eventFilter": null}, {"id": "21004854070", "viewId": null, "name": null, "category": "other", "apiName": "collections_header_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21020064029", "viewId": null, "name": null, "category": "other", "apiName": "collections_download_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21040830186", "viewId": null, "name": null, "category": "other", "apiName": "collections_footer_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21042121053", "viewId": null, "name": null, "category": "other", "apiName": "collections_content_body_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21052210526", "viewId": null, "name": null, "category": "other", "apiName": "collections_body_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21054310271", "viewId": null, "name": null, "category": "other", "apiName": "collections_promo_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21073080321", "viewId": null, "name": null, "category": "other", "apiName": "collections_prev_next_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21077300004", "viewId": null, "name": null, "category": "other", "apiName": "collections_page_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21177150346", "viewId": null, "name": null, "category": "other", "apiName": "collections_window_960_and_up", "eventType": "custom", "eventFilter": null}, {"id": "21191930241", "viewId": null, "name": null, "category": "other", "apiName": "no_content_match", "eventType": "custom", "eventFilter": null}, {"id": "21377591162", "viewId": null, "name": null, "category": "other", "apiName": "related_content_article_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21385850004", "viewId": null, "name": null, "category": "other", "apiName": "related_content_content_container_left_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21485332035", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_noPeek", "eventType": "custom", "eventFilter": null}, {"id": "21488970581", "viewId": null, "name": null, "category": "other", "apiName": "rightRailPanelPeekLO_close", "eventType": "custom", "eventFilter": null}, {"id": "23078651404", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_video_paused", "eventType": "custom", "eventFilter": null}, {"id": "23103401848", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_video_delayed_play_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23103671601", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_video_play_clicked", "eventType": "custom", "eventFilter": null}, {"id": "23111140949", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_inline_reg_modal_displayed", "eventType": "custom", "eventFilter": null}, {"id": "23343580311", "viewId": null, "name": null, "category": "other", "apiName": "video_reg_wall_experiment_active", "eventType": "custom", "eventFilter": null}, {"id": "24194270969", "viewId": null, "name": null, "category": "other", "apiName": "abMeterCharCount_page2_click", "eventType": "custom", "eventFilter": null}, {"id": "24261660696", "viewId": null, "name": null, "category": "other", "apiName": "abMeterCharCount_page1_click", "eventType": "custom", "eventFilter": null}, {"id": "24387720430", "viewId": null, "name": null, "category": "other", "apiName": "contentCenterLinkClick", "eventType": "custom", "eventFilter": null}, {"id": "26003134783", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillar_splash_btn_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26106830101", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillar_splash_link_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26160620681", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_loading_displayed", "eventType": "custom", "eventFilter": null}, {"id": "26171890905", "viewId": null, "name": null, "category": "other", "apiName": "partnerPillarSplash_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "26174931076", "viewId": null, "name": null, "category": "other", "apiName": "partnerPillarSplash_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "26175150437", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_helper_displayed", "eventType": "custom", "eventFilter": null}, {"id": "26181580060", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_microengagement_error", "eventType": "custom", "eventFilter": null}, {"id": "26181740093", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_microengagement_content_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26184940668", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_content_body_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26185110622", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26188660160", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_loading_clicked", "eventType": "custom", "eventFilter": null}, {"id": "26191500057", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_hovered", "eventType": "custom", "eventFilter": null}, {"id": "26205210046", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_microengagement_displayed", "eventType": "custom", "eventFilter": null}, {"id": "26304310006", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_in_view", "eventType": "custom", "eventFilter": null}, {"id": "26311570006", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_closed", "eventType": "custom", "eventFilter": null}, {"id": "26529820713", "viewId": null, "name": null, "category": "other", "apiName": "partnerRightRailSplash_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "26574250764", "viewId": null, "name": null, "category": "other", "apiName": "partnerRightRailSplash_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "26590190477", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_experiment_activated", "eventType": "custom", "eventFilter": null}, {"id": "26603370690", "viewId": null, "name": null, "category": "other", "apiName": "partnerPillarSplash_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "26645480644", "viewId": null, "name": null, "category": "other", "apiName": "partnerRightRailSplash_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "26654141772", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillarSplash_varStart", "eventType": "custom", "eventFilter": null}, {"id": "26750590995", "viewId": null, "name": null, "category": "other", "apiName": "ABMPillarSplash_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "27170360020", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_modal_content_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27189140226", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_content_body_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27190990262", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_modal_open_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27197430215", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_contentBody_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27202960140", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "27211780038", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_modal_close_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27213800063", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "27280080786", "viewId": null, "name": null, "category": "other", "apiName": "partnerModal_left_cta_clicks", "eventType": "custom", "eventFilter": null}, {"id": "27847190358", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz", "eventType": "custom", "eventFilter": null}, {"id": "28344880737", "viewId": null, "name": null, "category": "other", "apiName": "ServerError", "eventType": "custom", "eventFilter": null}, {"id": "28348030738", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerSubmission3", "eventType": "custom", "eventFilter": null}, {"id": "28354240649", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick3", "eventType": "custom", "eventFilter": null}, {"id": "28354260462", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer5", "eventType": "custom", "eventFilter": null}, {"id": "28355830671", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage0", "eventType": "custom", "eventFilter": null}, {"id": "28356360700", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth50", "eventType": "custom", "eventFilter": null}, {"id": "28359800442", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick2", "eventType": "custom", "eventFilter": null}, {"id": "28361460439", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer1", "eventType": "custom", "eventFilter": null}, {"id": "28363500411", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth", "eventType": "custom", "eventFilter": null}, {"id": "28366410304", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer2", "eventType": "custom", "eventFilter": null}, {"id": "28371710258", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_varStart", "eventType": "custom", "eventFilter": null}, {"id": "28379100419", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick1", "eventType": "custom", "eventFilter": null}, {"id": "28384830345", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompleted", "eventType": "custom", "eventFilter": null}, {"id": "28387180468", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ContentBodyClick", "eventType": "custom", "eventFilter": null}, {"id": "28388640296", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer", "eventType": "custom", "eventFilter": null}, {"id": "28392750209", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth100", "eventType": "custom", "eventFilter": null}, {"id": "28403920407", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage33", "eventType": "custom", "eventFilter": null}, {"id": "28403950315", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerSubmission1", "eventType": "custom", "eventFilter": null}, {"id": "28416870105", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerOptionClick", "eventType": "custom", "eventFilter": null}, {"id": "28426210100", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizInserted", "eventType": "custom", "eventFilter": null}, {"id": "28434590460", "viewId": null, "name": null, "category": "other", "apiName": "FailedContentFetch", "eventType": "custom", "eventFilter": null}, {"id": "28446280062", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage100", "eventType": "custom", "eventFilter": null}, {"id": "28446360035", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionPercentage67", "eventType": "custom", "eventFilter": null}, {"id": "28449420010", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizInViewport", "eventType": "custom", "eventFilter": null}, {"id": "28450070020", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_AnswerSubmission2", "eventType": "custom", "eventFilter": null}, {"id": "28455430146", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer0", "eventType": "custom", "eventFilter": null}, {"id": "28460160007", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth25", "eventType": "custom", "eventFilter": null}, {"id": "28465240026", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer4", "eventType": "custom", "eventFilter": null}, {"id": "28477180004", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_ScrollDepth75", "eventType": "custom", "eventFilter": null}, {"id": "28480960004", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_QuizCompletionTimer3", "eventType": "custom", "eventFilter": null}, {"id": "28581790312", "viewId": null, "name": null, "category": "other", "apiName": "AIQuiz_quiz_anchor_clicks", "eventType": "custom", "eventFilter": null}, {"id": "29190920123", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_responseErrorShown", "eventType": "custom", "eventFilter": null}, {"id": "29208760214", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_varStart", "eventType": "custom", "eventFilter": null}, {"id": "29212690180", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_closeModal", "eventType": "custom", "eventFilter": null}, {"id": "29219550260", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_systemOptionShown", "eventType": "custom", "eventFilter": null}, {"id": "29222660183", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_contentCardShown", "eventType": "custom", "eventFilter": null}, {"id": "29223170165", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_maxQNonMember", "eventType": "custom", "eventFilter": null}, {"id": "29228730159", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_maxQMember", "eventType": "custom", "eventFilter": null}, {"id": "29231780166", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_addedToPage", "eventType": "custom", "eventFilter": null}, {"id": "29263220240", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_maxQReturnFromReg", "eventType": "custom", "eventFilter": null}, {"id": "29271910224", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_CLpushFeatures", "eventType": "custom", "eventFilter": null}, {"id": "29297730050", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_CLpushContentCards", "eventType": "custom", "eventFilter": null}, {"id": "29681361185", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_winLoad_meteringMissing", "eventType": "custom", "eventFilter": null}, {"id": "29739340025", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_winLoad_meteringAppeared", "eventType": "custom", "eventFilter": null}, {"id": "29744840570", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_emptySummary", "eventType": "custom", "eventFilter": null}, {"id": "29747410259", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_5s", "eventType": "custom", "eventFilter": null}, {"id": "29753110277", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringAppeared", "eventType": "custom", "eventFilter": null}, {"id": "29754100200", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_1s", "eventType": "custom", "eventFilter": null}, {"id": "29757090303", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_3s", "eventType": "custom", "eventFilter": null}, {"id": "29757740138", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_docReady_meteringMissing", "eventType": "custom", "eventFilter": null}, {"id": "29757950132", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_4s", "eventType": "custom", "eventFilter": null}, {"id": "29763290193", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_6s", "eventType": "custom", "eventFilter": null}, {"id": "29771840981", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_emptyRecommendations", "eventType": "custom", "eventFilter": null}, {"id": "29773040205", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_docReady_meteringAppeared", "eventType": "custom", "eventFilter": null}, {"id": "29781170170", "viewId": null, "name": null, "category": "other", "apiName": "meteringHealth_interval_meteringMissing_2s", "eventType": "custom", "eventFilter": null}, {"id": "29939100518", "viewId": null, "name": null, "category": "other", "apiName": "toc_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "29941450640", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth100", "eventType": "custom", "eventFilter": null}, {"id": "29952290406", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth25", "eventType": "custom", "eventFilter": null}, {"id": "29954400526", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth75", "eventType": "custom", "eventFilter": null}, {"id": "29963910493", "viewId": null, "name": null, "category": "other", "apiName": "toc_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "29967140643", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth10", "eventType": "custom", "eventFilter": null}, {"id": "29967880046", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_engagement_getContentFromURL_error", "eventType": "custom", "eventFilter": null}, {"id": "29969320512", "viewId": null, "name": null, "category": "other", "apiName": "toc_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "29974700030", "viewId": null, "name": null, "category": "other", "apiName": "toc_shareBarClick", "eventType": "custom", "eventFilter": null}, {"id": "29995270106", "viewId": null, "name": null, "category": "other", "apiName": "toc_scrollDepth50", "eventType": "custom", "eventFilter": null}, {"id": "30266170361", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_displayed_returnMsg", "eventType": "custom", "eventFilter": null}, {"id": "30266910651", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_icon_clicked", "eventType": "custom", "eventFilter": null}, {"id": "30279610915", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_text_clicked", "eventType": "custom", "eventFilter": null}, {"id": "30290090230", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_displayed_introMsg", "eventType": "custom", "eventFilter": null}, {"id": "30312940386", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_text_icon_clicked", "eventType": "custom", "eventFilter": null}, {"id": "30394060097", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth10", "eventType": "custom", "eventFilter": null}, {"id": "30396110089", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth100", "eventType": "custom", "eventFilter": null}, {"id": "30403580061", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_shareBarClick", "eventType": "custom", "eventFilter": null}, {"id": "30403940083", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_enteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "30413260102", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_elementsAdded", "eventType": "custom", "eventFilter": null}, {"id": "30413940055", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_onlyContentBody", "eventType": "custom", "eventFilter": null}, {"id": "30417190098", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_variationStart", "eventType": "custom", "eventFilter": null}, {"id": "30421070091", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth25", "eventType": "custom", "eventFilter": null}, {"id": "30427510037", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth75", "eventType": "custom", "eventFilter": null}, {"id": "30442380402", "viewId": null, "name": null, "category": "other", "apiName": "toc_onlyContentBody", "eventType": "custom", "eventFilter": null}, {"id": "30449140026", "viewId": null, "name": null, "category": "other", "apiName": "toc_taf_scrollDepth50", "eventType": "custom", "eventFilter": null}, {"id": "30500240043", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_loader_visible", "eventType": "custom", "eventFilter": null}, {"id": "30504310029", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_loader_hidden", "eventType": "custom", "eventFilter": null}, {"id": "30515380077", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_loading_displayed_5s", "eventType": "custom", "eventFilter": null}, {"id": "30519140176", "viewId": null, "name": null, "category": "other", "apiName": "ai_microengagement_eoc_jsonparserror", "eventType": "custom", "eventFilter": null}, {"id": "30526300015", "viewId": null, "name": null, "category": "other", "apiName": "toc_onlycontentbody", "eventType": "custom", "eventFilter": null}, {"id": "4517673556508672", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_content_body_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "4546870341533696", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search_2__tab_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tabs"}}, {"id": "4566007251992576", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_recommendationsResponseErrorShown", "eventType": "custom", "eventFilter": null}, {"id": "4571466423861248", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__nondefault_content_list_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".tab-content:not(#all-tab) a"}}, {"id": "4613118211391488", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_responseErrorShown", "eventType": "custom", "eventFilter": null}, {"id": "4643365354995712", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-3rdPartyEmail-yes", "eventType": "custom", "eventFilter": null}, {"id": "4687251695730688", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_main_content_a_clicks__control", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main-content a"}}, {"id": "4691336410955776", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_recommendationsFetchError", "eventType": "custom", "eventFilter": null}, {"id": "4721258881875968", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-1stPartyEmail-yes", "eventType": "custom", "eventFilter": null}, {"id": "4747137754333184", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__aio_content_clicks_anyall", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#ai-overview-text a"}}, {"id": "4771828011368448", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-3rdPartyPhone-no", "eventType": "custom", "eventFilter": null}, {"id": "4776097175306240", "viewId": null, "name": null, "category": "other", "apiName": "genai_search_promptError", "eventType": "custom", "eventFilter": null}, {"id": "4790289370447872", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__aio_show_more_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".ai-overview-show-more"}}, {"id": "4805314831187968", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_display_slot1of3", "eventType": "custom", "eventFilter": null}, {"id": "4806904531124224", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_playerAdded", "eventType": "custom", "eventFilter": null}, {"id": "4807055312158720", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_processingStarted", "eventType": "custom", "eventFilter": null}, {"id": "4811254603186176", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-3rdPartyPhone-yes", "eventType": "custom", "eventFilter": null}, {"id": "4833523203309568", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-3rdPartyEmail-yes", "eventType": "custom", "eventFilter": null}, {"id": "4843872614875136", "viewId": null, "name": null, "category": "other", "apiName": "fetchContextError", "eventType": "custom", "eventFilter": null}, {"id": "4847527959199744", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_dig_deeper_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "4856519129300992", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_splash2_in_view", "eventType": "custom", "eventFilter": null}, {"id": "4912617265823744", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_play", "eventType": "custom", "eventFilter": null}, {"id": "4930687019515904", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__aio_citation_clicks_right_side_reference_list", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#reference-list a"}}, {"id": "4938461447192576", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search__all_tabdefault_content_list_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#all-tab a:not(.see-more-link)"}}, {"id": "4962757561286656", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-3rdPartyPhone-yes", "eventType": "custom", "eventFilter": null}, {"id": "5011106142355456", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-3rdPartyPhone-no", "eventType": "custom", "eventFilter": null}, {"id": "5029620114784256", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_emptyRecommendationsError", "eventType": "custom", "eventFilter": null}, {"id": "5036240135782400", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__see_more_link_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".see-more-link"}}, {"id": "5061510083379200", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-3rdPartySMS-yes", "eventType": "custom", "eventFilter": null}, {"id": "5071356144910336", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_splash_img_clicked", "eventType": "custom", "eventFilter": null}, {"id": "5097706708795392", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_dd_updated", "eventType": "custom", "eventFilter": null}, {"id": "5115463579992064", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_splash1_in_view", "eventType": "custom", "eventFilter": null}, {"id": "5118095992291328", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_EOCDisplayed", "eventType": "custom", "eventFilter": null}, {"id": "5120566181494784", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_fetchRecommendationsUnexpectedError", "eventType": "custom", "eventFilter": null}, {"id": "5128458452336640", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_contextDocumentsFetched", "eventType": "custom", "eventFilter": null}, {"id": "5134153377644544", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__nav_toggle", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".nav-toggle "}}, {"id": "5138824720809984", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_contextDocumentsFetched", "eventType": "custom", "eventFilter": null}, {"id": "5197163915902976", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_userSubmit", "eventType": "custom", "eventFilter": null}, {"id": "5241885204152320", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-1stPartySMS-no", "eventType": "custom", "eventFilter": null}, {"id": "5267807537987584", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_expandInputSelected", "eventType": "custom", "eventFilter": null}, {"id": "5282204125757440", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_ctrlStart", "eventType": "custom", "eventFilter": null}, {"id": "5316499473170432", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_emptySummary", "eventType": "custom", "eventFilter": null}, {"id": "5320564810711040", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_wave_2__slot_2_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".custom-div-2 a"}}, {"id": "5343663530704896", "viewId": "5578879226609664", "name": null, "category": "other", "apiName": "17796810052_toc__header_clicks_MQyPcJtrmqy_BzhrHJQE2cTRBMxXfoPAu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#page-header"}}, {"id": "5345711609348096", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_emptyRecommendationsError", "eventType": "custom", "eventFilter": null}, {"id": "5372947540475904", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_noRelevantDocuments", "eventType": "custom", "eventFilter": null}, {"id": "5373738753982464", "viewId": null, "name": null, "category": "other", "apiName": "audDevFastRegLangEOC_varStart", "eventType": "custom", "eventFilter": null}, {"id": "5378355776716800", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-1stPartyPhone-no", "eventType": "custom", "eventFilter": null}, {"id": "5389583827861504", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_display_slot1of1", "eventType": "custom", "eventFilter": null}, {"id": "5407188831698944", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_buttonClick", "eventType": "custom", "eventFilter": null}, {"id": "5423529496150016", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchChatHttpError", "eventType": "custom", "eventFilter": null}, {"id": "5446873503236096", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__all_link_clicks_control", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main-content a:not(.see-more-link)"}}, {"id": "5447042856648704", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-3rdPartySMS-yes", "eventType": "custom", "eventFilter": null}, {"id": "5447549478240256", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_fetchError", "eventType": "custom", "eventFilter": null}, {"id": "5447888428335104", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-1stPartyPhone-no", "eventType": "custom", "eventFilter": null}, {"id": "5483387960426496", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_form_submit_button_clicks__var", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".searchbox-section i"}}, {"id": "5511925736407040", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_variation_2__content_body_and_promo_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-body a"}}, {"id": "5543730673876992", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_buttonClickPage2", "eventType": "custom", "eventFilter": null}, {"id": "5594110187274240", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_wave_2__total_promo_clicks_unique", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-cyber-pilot-splash a"}}, {"id": "5594949635276800", "viewId": null, "name": null, "category": "other", "apiName": "audDevFastRegLangDef_varStart", "eventType": "custom", "eventFilter": null}, {"id": "5597529547472896", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_dig_deeper_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "5600323335618560", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_pause", "eventType": "custom", "eventFilter": null}, {"id": "5600517053743104", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_display_slot2of3", "eventType": "custom", "eventFilter": null}, {"id": "5605826618982400", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_form_submit_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".header-search-submit"}}, {"id": "5627646348886016", "viewId": null, "name": null, "category": "other", "apiName": "audDevFastRegLangDef_buttonClick", "eventType": "custom", "eventFilter": null}, {"id": "5634778804781056", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchChatNetworkError", "eventType": "custom", "eventFilter": null}, {"id": "5667125017182208", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_fetchError", "eventType": "custom", "eventFilter": null}, {"id": "5679808760250368", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_wave_2__link_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-title"}}, {"id": "5712188262842368", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_result1EnteredViewport", "eventType": "custom", "eventFilter": null}, {"id": "5729363405045760", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-1stPartyPhone-yes", "eventType": "custom", "eventFilter": null}, {"id": "5738564760109056", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_dig_deeper_in_view", "eventType": "custom", "eventFilter": null}, {"id": "5749911048683520", "viewId": null, "name": null, "category": "other", "apiName": "audDevFastRegLangEOC_buttonClickPage2", "eventType": "custom", "eventFilter": null}, {"id": "5788554391977984", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_AIODisplayed", "eventType": "custom", "eventFilter": null}, {"id": "5801235270336512", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_fetchRecommendationsHttpError", "eventType": "custom", "eventFilter": null}, {"id": "5818122276438016", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_variation_2__content_body_clicks_no_promo_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-body a:not(.o-cyber-pilot-splash a)"}}, {"id": "5847646720491520", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_varStart", "eventType": "custom", "eventFilter": null}, {"id": "5849370478772224", "viewId": null, "name": null, "category": "other", "apiName": "fastRegP1_wave1_buttonClick", "eventType": "custom", "eventFilter": null}, {"id": "5877407136088064", "viewId": "5578879226609664", "name": null, "category": "other", "apiName": "17796810052_toc_main_content_byline_conten_7pua3ZWJ5gUvL7EjeyCJG", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main-content a"}}, {"id": "5894538145824768", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__whitepaper_image_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".whitepaper-image"}}, {"id": "5904110591934464", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_varStart", "eventType": "custom", "eventFilter": null}, {"id": "5925470538039296", "viewId": null, "name": null, "category": "other", "apiName": "audDevFastRegLangEOC_buttonClick", "eventType": "custom", "eventFilter": null}, {"id": "5936309282275328", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchError", "eventType": "custom", "eventFilter": null}, {"id": "5937689703219200", "viewId": null, "name": null, "category": "other", "apiName": "audDevFastRegLangDef_buttonClickPage2", "eventType": "custom", "eventFilter": null}, {"id": "5957973806153728", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_dd_updated", "eventType": "custom", "eventFilter": null}, {"id": "5985401488277504", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_evaluationError", "eventType": "custom", "eventFilter": null}, {"id": "6007405276823552", "viewId": null, "name": null, "category": "other", "apiName": "fastRegP1_wave1_buttonClickCtrl", "eventType": "custom", "eventFilter": null}, {"id": "6082499508436992", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_wave_2__slot_1_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".custom-div-1 a"}}, {"id": "6085696759267328", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-3rdPartySMS-no", "eventType": "custom", "eventFilter": null}, {"id": "6090095090991104", "viewId": "5578879226609664", "name": null, "category": "other", "apiName": "17796810052_toc_link_clicks_6J1y9AEVccvtJb_AbQ46b2K7rV1axnndkR5M", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optly-toc ul li a"}}, {"id": "6096742408519680", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_definitionDisplayed", "eventType": "custom", "eventFilter": null}, {"id": "6110280137048064", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_seeked", "eventType": "custom", "eventFilter": null}, {"id": "6113933463912448", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2_asked_by_peers_expand_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".related-search-content .arrow-icon"}}, {"id": "6114101370290176", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__all_link_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".content-search-container a, .cg-tabs-container a"}}, {"id": "6114947143303168", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_fetchError", "eventType": "custom", "eventFilter": null}, {"id": "6147260904374272", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-1stPartySMS-yes", "eventType": "custom", "eventFilter": null}, {"id": "6152411962671104", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-1stPartySMS-yes", "eventType": "custom", "eventFilter": null}, {"id": "6199550537367552", "viewId": null, "name": null, "category": "other", "apiName": "genai_search_evaluationError", "eventType": "custom", "eventFilter": null}, {"id": "6200280895717376", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__citation_clicks__superscripts", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "sup a"}}, {"id": "6213212652175360", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_playing", "eventType": "custom", "eventFilter": null}, {"id": "6218763360534528", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_varStart", "eventType": "custom", "eventFilter": null}, {"id": "6227315999375360", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_content_body_anchor_clicked", "eventType": "custom", "eventFilter": null}, {"id": "6229394956484608", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-1stPartyPhone-yes", "eventType": "custom", "eventFilter": null}, {"id": "6291348240728064", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_followUpToggleClicked", "eventType": "custom", "eventFilter": null}, {"id": "6304288230604800", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_varStart", "eventType": "custom", "eventFilter": null}, {"id": "6360535038427136", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w3_dig_deeper_in_view", "eventType": "custom", "eventFilter": null}, {"id": "6363263550619648", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__button__toolbar", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".en > form i"}}, {"id": "6367141201444864", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_EOCClicked", "eventType": "custom", "eventFilter": null}, {"id": "6376332364349440", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-3rdPartyEmail-no", "eventType": "custom", "eventFilter": null}, {"id": "6407455601590272", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchRecommendationsNetworkError", "eventType": "custom", "eventFilter": null}, {"id": "6412147995967488", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_display_slot3of3", "eventType": "custom", "eventFilter": null}, {"id": "6416500374896640", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_buttonClickPage2", "eventType": "custom", "eventFilter": null}, {"id": "6422614374088704", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_recommendationsFetchError", "eventType": "custom", "eventFilter": null}, {"id": "6454204852600832", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_responseErrorShown", "eventType": "custom", "eventFilter": null}, {"id": "6462885300273152", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-3rdPartySMS-no", "eventType": "custom", "eventFilter": null}, {"id": "6477146151976960", "viewId": null, "name": null, "category": "other", "apiName": "abt_genai_contentRec_w1_recommendationsResponseErrorShown", "eventType": "custom", "eventFilter": null}, {"id": "6485141233598464", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_wave_2__slot_3_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".custom-div-3 a"}}, {"id": "6485338516881408", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-1stPartyEmail-no", "eventType": "custom", "eventFilter": null}, {"id": "6490336919289856", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-1stPartyEmail-no", "eventType": "custom", "eventFilter": null}, {"id": "6493650218123264", "viewId": "5578879226609664", "name": null, "category": "other", "apiName": "17796810052_content_body_clicks_not_toc_6G_6FxMJqcQYLXzMtw59hMji", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#content-body a:not(.optly-toc-anchor)"}}, {"id": "6495905172422656", "viewId": null, "name": null, "category": "other", "apiName": "genai_Search_defaultPageDisplay", "eventType": "custom", "eventFilter": null}, {"id": "6527590509314048", "viewId": null, "name": null, "category": "other", "apiName": "genai_search_responseerrorshown", "eventType": "custom", "eventFilter": null}, {"id": "6544590988115968", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_fetchRecommendationsHttpError", "eventType": "custom", "eventFilter": null}, {"id": "6568107511119872", "viewId": null, "name": null, "category": "other", "apiName": "textToSpeech_ended", "eventType": "custom", "eventFilter": null}, {"id": "6617976569331712", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_optly-3rdPartyEmail-no", "eventType": "custom", "eventFilter": null}, {"id": "6623971068608512", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-1stPartyEmail-yes", "eventType": "custom", "eventFilter": null}, {"id": "6673005867171840", "viewId": null, "name": null, "category": "other", "apiName": "content_recommends_ddHidden", "eventType": "custom", "eventFilter": null}, {"id": "6675271126876160", "viewId": "4740162995879936", "name": null, "category": "other", "apiName": "17796810052_gen_ai_search2__all_tab_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#all-tab a"}}, {"id": "6677749360754688", "viewId": "6458308895178752", "name": null, "category": "other", "apiName": "17796810052_cyber_pilot_promo_wave_2__button_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".o-btnText"}}, {"id": "6694475402051584", "viewId": null, "name": null, "category": "other", "apiName": "genai_search_emptyRecommendations", "eventType": "custom", "eventFilter": null}, {"id": "6728482588196864", "viewId": null, "name": null, "category": "other", "apiName": "genai_chatSum_imageError", "eventType": "custom", "eventFilter": null}, {"id": "6739829069709312", "viewId": null, "name": null, "category": "other", "apiName": "cyberPilotPromo_definitionClicked", "eventType": "custom", "eventFilter": null}, {"id": "6742365851877376", "viewId": null, "name": null, "category": "other", "apiName": "fastregp1_wave1_def_optly-1stPartySMS-no", "eventType": "custom", "eventFilter": null}], "dimensions": [], "interestGroups": [], "tagGroups": []},l=__webpack_require__(1644),d="initializeOptimizelyPreview";if(l.initGlobalStore(f),c.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())u.registerFunction("getProjectId",(function(){return f.projectId})),u.registerFunction("getAccountId",(function(){return f.accountId})),s.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadEmbeddedEditor()){e.log("Main / Loading embedded editor");var v="true"===a.get("useLocalBundle");c.setOptOut(!1);var h=v?"http://localhost:9888/main.js":"https://app.optimizely.com/dist/visual-editor/main.js";s.addScriptAsync(h)}else if(r.shouldLoadPreview()){(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:f}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(4383).setupPreviewGlobal(),__webpack_require__(4383).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:f}),r.isSlave()||(u.registerFunction("getProjectId",(function(){return f.projectId})),s.addScriptSync(""))}else if(r.shouldBootstrapDataForPreview()){u.registerFunction(d,(function(n){t(),u.unregisterFunction(d)}));var p=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:u.getFunction("getProjectId")();m=r.getProjectToken(),_=p,y=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",m).replace("__PROJECT_ID__",_).replace("__PREVIEW_LAYER_IDS__",y.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0);var g=r.getForceVariationIds();g&&g.length>0&&(o+="&optimizely_x="+g.join(",")),s.addScriptSync(o),__webpack_require__(4383).setupPreviewGlobal(),s.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(u.registerFunction(d,(function(n){t(),u.unregisterFunction(d)})),s.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var m,_,y;n.timeEnd("block");var w=n.now();n.setMark("optimizelyFinished",w,w)}}try{main()}catch(e){try{__webpack_require__(1729).handleError(e)}catch(err){console.log(err)}}})();