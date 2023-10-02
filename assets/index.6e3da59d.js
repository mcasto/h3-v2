import{r as g,t as b,a as d,i as oe}from"./index.58cc3f89.js";function p(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function ue(r,t){g(2,arguments);var e=b(r).getTime(),a=p(t);return new Date(e+a)}var se={};function F(){return se}function de(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var j=6e4,z=36e5;function le(r,t){g(2,arguments);var e=p(t);return ue(r,-e)}var ce=864e5;function fe(r){g(1,arguments);var t=b(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/ce)+1}function E(r){g(1,arguments);var t=1,e=b(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function J(r){g(1,arguments);var t=b(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=E(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function me(r){g(1,arguments);var t=J(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=E(e);return a}var ve=6048e5;function he(r){g(1,arguments);var t=b(r),e=E(t).getTime()-me(t).getTime();return Math.round(e/ve)+1}function $(r,t){var e,a,n,i,o,u,l,s;g(1,arguments);var f=F(),c=p((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:f.weekStartsOn)!==null&&a!==void 0?a:(l=f.locale)===null||l===void 0||(s=l.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=b(r),m=v.getUTCDay(),w=(m<c?7:0)+m-c;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function Z(r,t){var e,a,n,i,o,u,l,s;g(1,arguments);var f=b(r),c=f.getUTCFullYear(),v=F(),m=p((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&a!==void 0?a:(l=v.locale)===null||l===void 0||(s=l.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(c+1,0,m),w.setUTCHours(0,0,0,0);var M=$(w,t),D=new Date(0);D.setUTCFullYear(c,0,m),D.setUTCHours(0,0,0,0);var P=$(D,t);return f.getTime()>=M.getTime()?c+1:f.getTime()>=P.getTime()?c:c-1}function ge(r,t){var e,a,n,i,o,u,l,s;g(1,arguments);var f=F(),c=p((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&a!==void 0?a:(l=f.locale)===null||l===void 0||(s=l.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1),v=Z(r,t),m=new Date(0);m.setUTCFullYear(v,0,c),m.setUTCHours(0,0,0,0);var w=$(m,t);return w}var we=6048e5;function be(r,t){g(1,arguments);var e=b(r),a=$(e,t).getTime()-ge(e,t).getTime();return Math.round(a/we)+1}var ye={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return d(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):d(a+1,2)},d:function(t,e){return d(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return d(t.getUTCHours()%12||12,e.length)},H:function(t,e){return d(t.getUTCHours(),e.length)},m:function(t,e){return d(t.getUTCMinutes(),e.length)},s:function(t,e){return d(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return d(i,e.length)}},T=ye,O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Te={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,a,n){var i=Z(t,n),o=i>0?i:1-i;if(e==="YY"){var u=o%100;return d(u,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):d(o,e.length)},R:function(t,e){var a=J(t);return d(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return d(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return d(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return d(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return d(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=be(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):d(i,e.length)},I:function(t,e,a){var n=he(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):d(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,a){var n=fe(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):d(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return d(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return d(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return d(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=O.noon:n===0?i=O.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=O.evening:n>=12?i=O.afternoon:n>=4?i=O.morning:i=O.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return T.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):d(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):d(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return A(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return A(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return d(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return d(o,e.length)}};function G(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+d(i,2)}function A(r,t){if(r%60===0){var e=r>0?"-":"+";return e+d(Math.abs(r)/60,2)}return C(r,t)}function C(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=d(Math.floor(n/60),2),o=d(n%60,2);return a+i+e+o}var pe=Te,B=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},K=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},De=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return B(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",B(n,e)).replace("{{time}}",K(i,e))},Ce={p:K,P:De},Oe=Ce,Me=["D","DD"],Pe=["YY","YYYY"];function ke(r){return Me.indexOf(r)!==-1}function xe(r){return Pe.indexOf(r)!==-1}function V(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var We={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ue=function(t,e,a){var n,i=We[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n},Se=Ue;function Q(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var Ye={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ne={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_e={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ee={date:Q({formats:Ye,defaultWidth:"full"}),time:Q({formats:Ne,defaultWidth:"full"}),dateTime:Q({formats:_e,defaultWidth:"full"})},$e=Ee,Fe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qe=function(t,e,a,n){return Fe[t]},Le=qe;function W(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var u=r.defaultWidth,l=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[l]||r.values[u]}var s=r.argumentCallback?r.argumentCallback(t):t;return n[s]}}var He={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ie={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Re={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ge={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ae=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Be={ordinalNumber:Ae,era:W({values:He,defaultWidth:"wide"}),quarter:W({values:Ie,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:W({values:Re,defaultWidth:"wide"}),day:W({values:Qe,defaultWidth:"wide"}),dayPeriod:W({values:Xe,defaultWidth:"wide",formattingValues:Ge,defaultFormattingWidth:"wide"})},Ve=Be;function U(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],u=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(u)?ze(u,function(c){return c.test(o)}):je(u,function(c){return c.test(o)}),s;s=r.valueCallback?r.valueCallback(l):l,s=e.valueCallback?e.valueCallback(s):s;var f=t.slice(o.length);return{value:s,rest:f}}}function je(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function ze(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function Je(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var u=t.slice(n.length);return{value:o,rest:u}}}var Ze=/^(\d+)(th|st|nd|rd)?/i,Ke=/\d+/i,et={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},tt={any:[/^b/i,/^(a|c)/i]},at={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rt={any:[/1/i,/2/i,/3/i,/4/i]},nt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},it={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ot={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ut={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},st={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},dt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},lt={ordinalNumber:Je({matchPattern:Ze,parsePattern:Ke,valueCallback:function(t){return parseInt(t,10)}}),era:U({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any"}),quarter:U({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:U({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:it,defaultParseWidth:"any"}),day:U({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:ut,defaultParseWidth:"any"}),dayPeriod:U({matchPatterns:st,defaultMatchWidth:"any",parsePatterns:dt,defaultParseWidth:"any"})},ct=lt,ft={code:"en-US",formatDistance:Se,formatLong:$e,formatRelative:Le,localize:Ve,match:ct,options:{weekStartsOn:0,firstWeekContainsDate:1}},mt=ft,vt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ht=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,gt=/^'([^]*?)'?$/,wt=/''/g,bt=/[a-zA-Z]/;function $t(r,t,e){var a,n,i,o,u,l,s,f,c,v,m,w,M,D,P,q,L,H;g(2,arguments);var te=String(t),k=F(),x=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:k.locale)!==null&&a!==void 0?a:mt,I=p((i=(o=(u=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(s=e.locale)===null||s===void 0||(f=s.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&u!==void 0?u:k.firstWeekContainsDate)!==null&&o!==void 0?o:(c=k.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=p((m=(w=(M=(D=e==null?void 0:e.weekStartsOn)!==null&&D!==void 0?D:e==null||(P=e.locale)===null||P===void 0||(q=P.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&M!==void 0?M:k.weekStartsOn)!==null&&w!==void 0?w:(L=k.locale)===null||L===void 0||(H=L.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var Y=b(r);if(!oe(Y))throw new RangeError("Invalid time value");var ae=de(Y),re=le(Y,ae),ne={firstWeekContainsDate:I,weekStartsOn:R,locale:x,_originalDate:Y},ie=te.match(ht).map(function(h){var y=h[0];if(y==="p"||y==="P"){var N=Oe[y];return N(h,x.formatLong)}return h}).join("").match(vt).map(function(h){if(h==="''")return"'";var y=h[0];if(y==="'")return yt(h);var N=pe[y];if(N)return!(e!=null&&e.useAdditionalWeekYearTokens)&&xe(h)&&V(h,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&ke(h)&&V(h,t,String(r)),N(re,h,x.localize,ne);if(y.match(bt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return h}).join("");return ie}function yt(r){var t=r.match(gt);return t?t[1].replace(wt,"'"):r}function Ft(r,t){var e;g(1,arguments);var a=p((e=t==null?void 0:t.additionalDigits)!==null&&e!==void 0?e:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof r=="string"||Object.prototype.toString.call(r)==="[object String]"))return new Date(NaN);var n=Ct(r),i;if(n.date){var o=Ot(n.date,a);i=Mt(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var u=i.getTime(),l=0,s;if(n.time&&(l=Pt(n.time),isNaN(l)))return new Date(NaN);if(n.timezone){if(s=kt(n.timezone),isNaN(s))return new Date(NaN)}else{var f=new Date(u+l),c=new Date(0);return c.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),c.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),c}return new Date(u+l+s)}var _={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Tt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,pt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Dt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Ct(r){var t={},e=r.split(_.dateTimeDelimiter),a;if(e.length>2)return t;if(/:/.test(e[0])?a=e[0]:(t.date=e[0],a=e[1],_.timeZoneDelimiter.test(t.date)&&(t.date=r.split(_.timeZoneDelimiter)[0],a=r.substr(t.date.length,r.length))),a){var n=_.timezone.exec(a);n?(t.time=a.replace(n[1],""),t.timezone=n[1]):t.time=a}return t}function Ot(r,t){var e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=r.match(e);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:i===null?n:i*100,restDateString:r.slice((a[1]||a[2]).length)}}function Mt(r,t){if(t===null)return new Date(NaN);var e=r.match(Tt);if(!e)return new Date(NaN);var a=!!e[4],n=S(e[1]),i=S(e[2])-1,o=S(e[3]),u=S(e[4]),l=S(e[5])-1;if(a)return Yt(t,u,l)?xt(t,u,l):new Date(NaN);var s=new Date(0);return!Ut(t,i,o)||!St(t,n)?new Date(NaN):(s.setUTCFullYear(t,i,Math.max(n,o)),s)}function S(r){return r?parseInt(r):1}function Pt(r){var t=r.match(pt);if(!t)return NaN;var e=X(t[1]),a=X(t[2]),n=X(t[3]);return Nt(e,a,n)?e*z+a*j+n*1e3:NaN}function X(r){return r&&parseFloat(r.replace(",","."))||0}function kt(r){if(r==="Z")return 0;var t=r.match(Dt);if(!t)return 0;var e=t[1]==="+"?-1:1,a=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return _t(a,n)?e*(a*z+n*j):NaN}function xt(r,t,e){var a=new Date(0);a.setUTCFullYear(r,0,4);var n=a.getUTCDay()||7,i=(t-1)*7+e+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var Wt=[31,null,31,30,31,30,31,31,30,31,30,31];function ee(r){return r%400===0||r%4===0&&r%100!==0}function Ut(r,t,e){return t>=0&&t<=11&&e>=1&&e<=(Wt[t]||(ee(r)?29:28))}function St(r,t){return t>=1&&t<=(ee(r)?366:365)}function Yt(r,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function Nt(r,t,e){return r===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&r>=0&&r<25}function _t(r,t){return t>=0&&t<=59}export{$t as f,Ft as p};
