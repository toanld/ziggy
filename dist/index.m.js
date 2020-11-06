var t=Object.prototype.hasOwnProperty,e=Array.isArray,r=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),n=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},i={arrayToObject:n,assign:function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var r=[{obj:{o:t},prop:"o"}],n=[],i=0;i<r.length;++i)for(var o=r[i],u=o.obj[o.prop],f=Object.keys(u),a=0;a<f.length;++a){var s=f[a],c=u[s];"object"==typeof c&&null!==c&&-1===n.indexOf(c)&&(r.push({obj:u,prop:s}),n.push(c))}return function(t){for(;t.length>1;){var r=t.pop(),n=r.obj[r.prop];if(e(n)){for(var i=[],o=0;o<n.length;++o)void 0!==n[o]&&i.push(n[o]);r.obj[r.prop]=i}}}(r),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,e,n){if(0===t.length)return t;var i=t;if("symbol"==typeof t?i=Symbol.prototype.toString.call(t):"string"!=typeof t&&(i=String(t)),"iso-8859-1"===n)return escape(i).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",u=0;u<i.length;++u){var f=i.charCodeAt(u);45===f||46===f||95===f||126===f||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122?o+=i.charAt(u):f<128?o+=r[f]:f<2048?o+=r[192|f>>6]+r[128|63&f]:f<55296||f>=57344?o+=r[224|f>>12]+r[128|f>>6&63]+r[128|63&f]:(f=65536+((1023&f)<<10|1023&i.charCodeAt(u+=1)),o+=r[240|f>>18]+r[128|f>>12&63]+r[128|f>>6&63]+r[128|63&f])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,r){if(e(t)){for(var n=[],i=0;i<t.length;i+=1)n.push(r(t[i]));return n}return r(t)},merge:function r(i,o,u){if(!o)return i;if("object"!=typeof o){if(e(i))i.push(o);else{if(!i||"object"!=typeof i)return[i,o];(u&&(u.plainObjects||u.allowPrototypes)||!t.call(Object.prototype,o))&&(i[o]=!0)}return i}if(!i||"object"!=typeof i)return[i].concat(o);var f=i;return e(i)&&!e(o)&&(f=n(i,u)),e(i)&&e(o)?(o.forEach(function(e,n){if(t.call(i,n)){var o=i[n];o&&"object"==typeof o&&e&&"object"==typeof e?i[n]=r(o,e,u):i.push(e)}else i[n]=e}),i):Object.keys(o).reduce(function(e,n){var i=o[n];return e[n]=t.call(e,n)?r(e[n],i,u):i,e},f)}},o=String.prototype.replace,u=/%20/g,f={RFC1738:"RFC1738",RFC3986:"RFC3986"},a=i.assign({default:f.RFC3986,formatters:{RFC1738:function(t){return o.call(t,u,"+")},RFC3986:function(t){return String(t)}}},f),s=Object.prototype.hasOwnProperty,c={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},l=Array.isArray,p=Array.prototype.push,y=function(t,e){p.apply(t,l(e)?e:[e])},h=Date.prototype.toISOString,d=a.default,b={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,format:d,formatter:a.formatters[d],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},v=function t(e,r,n,o,u,f,a,s,c,p,h,d,v){var m,g=e;if("function"==typeof a?g=a(r,g):g instanceof Date?g=p(g):"comma"===n&&l(g)&&(g=i.maybeMap(g,function(t){return t instanceof Date?p(t):t}).join(",")),null===g){if(o)return f&&!d?f(r,b.encoder,v,"key"):r;g=""}if("string"==typeof(m=g)||"number"==typeof m||"boolean"==typeof m||"symbol"==typeof m||"bigint"==typeof m||i.isBuffer(g))return f?[h(d?r:f(r,b.encoder,v,"key"))+"="+h(f(g,b.encoder,v,"value"))]:[h(r)+"="+h(String(g))];var w,j=[];if(void 0===g)return j;if(l(a))w=a;else{var O=Object.keys(g);w=s?O.sort(s):O}for(var E=0;E<w.length;++E){var S=w[E],N=g[S];if(!u||null!==N){var R=l(g)?"function"==typeof n?n(r,S):r:r+(c?"."+S:"["+S+"]");y(j,t(N,R,n,o,u,f,a,s,c,p,h,d,v))}}return j},m=Object.prototype.hasOwnProperty,g=Array.isArray,w={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:i.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},j=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},O=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},E=function(t,e,r,n){if(t){var i=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=r.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,a=[];if(f){if(!r.plainObjects&&m.call(Object.prototype,f)&&!r.allowPrototypes)return;a.push(f)}for(var s=0;r.depth>0&&null!==(u=o.exec(i))&&s<r.depth;){if(s+=1,!r.plainObjects&&m.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;a.push(u[1])}return u&&a.push("["+i.slice(u.index)+"]"),function(t,e,r,n){for(var i=n?e:O(e,r),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&r.parseArrays)u=[].concat(i);else{u=r.plainObjects?Object.create(null):{};var a="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,s=parseInt(a,10);r.parseArrays||""!==a?!isNaN(s)&&f!==a&&String(s)===a&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(u=[])[s]=i:u[a]=i:u={0:i}}i=u}return i}(a,e,r,n)}},S=function(t,e){var r=function(t){if(!t)return w;if(null!=t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");return{allowDots:void 0===t.allowDots?w.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:w.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:w.arrayLimit,charset:void 0===t.charset?w.charset:t.charset,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:w.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:w.comma,decoder:"function"==typeof t.decoder?t.decoder:w.decoder,delimiter:"string"==typeof t.delimiter||i.isRegExp(t.delimiter)?t.delimiter:w.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:w.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:w.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:w.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:w.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:w.strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof t?function(t,e){var r,n={},o=(e.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(e.delimiter,Infinity===e.parameterLimit?void 0:e.parameterLimit),u=-1,f=e.charset;if(e.charsetSentinel)for(r=0;r<o.length;++r)0===o[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===o[r]?f="utf-8":"utf8=%26%2310003%3B"===o[r]&&(f="iso-8859-1"),u=r,r=o.length);for(r=0;r<o.length;++r)if(r!==u){var a,s,c=o[r],l=c.indexOf("]="),p=-1===l?c.indexOf("="):l+1;-1===p?(a=e.decoder(c,w.decoder,f,"key"),s=e.strictNullHandling?null:""):(a=e.decoder(c.slice(0,p),w.decoder,f,"key"),s=i.maybeMap(O(c.slice(p+1),e),function(t){return e.decoder(t,w.decoder,f,"value")})),s&&e.interpretNumericEntities&&"iso-8859-1"===f&&(s=j(s)),c.indexOf("[]=")>-1&&(s=g(s)?[s]:s),n[a]=m.call(n,a)?i.combine(n[a],s):s}return n}(t,r):t,o=r.plainObjects?Object.create(null):{},u=Object.keys(n),f=0;f<u.length;++f){var a=u[f],s=E(a,n[a],r,"string"==typeof t);o=i.merge(o,s,r)}return i.compact(o)};class N{constructor(t,e,r){var n;this.name=t,this.definition=e,this.bindings=null!=(n=e.bindings)?n:{},this.config=r}get template(){return(this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:"")+"/"+this.definition.uri}get parameterSegments(){var t,e;return null!=(t=null===(e=this.template.match(/{[^}?]+\??}/g))||void 0===e?void 0:e.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))?t:[]}matchesUrl(t){if(!this.definition.methods.includes("GET"))return!1;const e=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp("^"+e+"$").test(t.replace(/\/+$/,"").split("?").shift())}compile(t){return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,(e,r)=>{var n;if([null,void 0].includes(t[r])&&this.parameterSegments.find(({name:t})=>t===r).required)throw new Error("Ziggy error: '"+r+"' parameter is required for route '"+this.name+"'.");return encodeURIComponent(null!=(n=t[r])?n:"")}).replace(/\/+$/,""):this.template.replace(/\/+$/,"")}}class R extends String{constructor(t,e,r=!0,n){var i;if(super(),this.t=null!=(i=null!=n?n:Ziggy)?i:null===globalThis||void 0===globalThis?void 0:globalThis.Ziggy,this.t={...this.t,absolute:r},t){if(!this.t.routes[t])throw new Error("Ziggy error: route '"+t+"' is not in the route list.");this.i=new N(t,this.t.routes[t],this.t),this.u=this.s(e)}}toString(){const t=Object.keys(this.u).filter(t=>!this.i.parameterSegments.some(({name:e})=>e===t)).filter(t=>"_query"!==t).reduce((t,e)=>({...t,[e]:this.u[e]}),{});return this.i.compile(this.u)+function(t,e){var r,n=t,i=function(t){if(!t)return b;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||b.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==t.format){if(!s.call(a.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var n=a.formatters[r],i=b.filter;return("function"==typeof t.filter||l(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:b.addQueryPrefix,allowDots:void 0===t.allowDots?b.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:b.charsetSentinel,delimiter:void 0===t.delimiter?b.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:b.encode,encoder:"function"==typeof t.encoder?t.encoder:b.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:b.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:b.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:b.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:b.strictNullHandling}}(e);"function"==typeof i.filter?n=(0,i.filter)("",n):l(i.filter)&&(r=i.filter);var o=[];if("object"!=typeof n||null===n)return"";var u=c[e&&e.arrayFormat in c?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices"];r||(r=Object.keys(n)),i.sort&&r.sort(i.sort);for(var f=0;f<r.length;++f){var p=r[f];i.skipNulls&&null===n[p]||y(o,v(n[p],p,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var h=o.join(i.delimiter),d=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(d+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),h.length>0?d+h:""}({...t,...this.u._query},{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(t,e)=>"boolean"==typeof t?Number(t):e(t)})}current(t,e){const r=this.t.absolute?window.location.host+window.location.pathname:window.location.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),[n,i]=Object.entries(this.t.routes).find(([e,n])=>new N(t,n,this.t).matchesUrl(r));if(!t)return n;const o=new RegExp("^"+t.replace(".","\\.").replace("*",".*")+"$").test(n);return e?(e=this.s(e,new N(n,i,this.t)),Object.entries(this.l(i)).filter(([t])=>e.hasOwnProperty(t)).every(([t,r])=>e[t]==r)):o}get params(){return this.l(this.t.routes[this.current()])}has(t){return Object.keys(this.t.routes).includes(t)}s(t={},e=this.i){t=["string","number"].includes(typeof t)?[t]:t;const r=e.parameterSegments.filter(({name:t})=>!this.t.defaults[t]);return Array.isArray(t)?t=t.reduce((t,e,n)=>({...t,[r[n].name]:e}),{}):1!==r.length||t[r[0].name]||!t.hasOwnProperty(Object.values(e.bindings)[0])&&!t.hasOwnProperty("id")||(t={[r[0].name]:t}),{...this.p(e),...this.h(t,e.bindings)}}p(t){return t.parameterSegments.filter(({name:t})=>this.t.defaults[t]).reduce((t,{name:e},r)=>({...t,[e]:this.t.defaults[e]}),{})}h(t,e={}){return Object.entries(t).reduce((t,[r,n])=>{if(!n||"object"!=typeof n||Array.isArray(n)||"_query"===r)return{...t,[r]:n};if(!n.hasOwnProperty(e[r])){if(!n.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+r+"' parameter is missing route model binding key '"+e[r]+"'.");e[r]="id"}return{...t,[r]:n[e[r]]}},{})}l(t){var e;let r=window.location.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"");const n=(t,e="",r)=>{const[n,i]=[t,e].map(t=>t.split(r));return i.reduce((t,e,r)=>/^{[^}?]+\??}$/.test(e)&&n[r]?{...t,[e.replace(/^{|\??}$/g,"")]:n[r]}:t,{})};return{...n(window.location.host,t.domain,"."),...n(r,t.uri,"/"),...S(null===(e=window.location.search)||void 0===e?void 0:e.replace(/^\?/,""))}}valueOf(){return this.toString()}check(t){return this.has(t)}}export default function(t,e,r,n){const i=new R(t,e,r,n);return t?i.toString():i}
//# sourceMappingURL=index.m.js.map
