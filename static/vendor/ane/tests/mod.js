define("vendor/ane/tests/mod",function(e){var e,t,n="undefined"!=typeof n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};!function(n){if(!e){var r=document.getElementsByTagName("head")[0],i={},a={},o={},s={},c={},u={},f=function(t,n){for(var i=document.createDocumentFragment(),a=0,o=t.length;o>a;a++){var c=t[a].id,u=t[a].url;if(!(u in s)){s[u]=!0;var f=document.createElement("script");n&&!function(t,r){var i=setTimeout(function(){n(r)},e.timeout);t.onerror=function(){clearTimeout(i),n(r)};var a=function(){clearTimeout(i)};"onload"in t?t.onload=a:t.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&a()}}(f,c),f.type="text/javascript",f.src=u,i.appendChild(f)}}r.appendChild(i)},l=function(e,t,n){for(var r=[],a=0,o=e.length;o>a;a++){var s=e[a],l=i[s]||(i[s]=[]);l.push(t);var p,d=c[s]||c[s+".js"]||{},h=d.pkg;p=h?u[h].url||u[h].uri:d.url||d.uri||s,r.push({id:s,url:p})}f(r,n)};t=function(e,t){e=e.replace(/\.js$/i,""),a[e]=t;var n=i[e];if(n){for(var r=0,o=n.length;o>r;r++)n[r]();delete i[e]}},e=function(t){if(t&&t.splice)return e.async.apply(this,arguments);t=e.alias(t);var n=o[t];if(n)return n.exports;var r=a[t];if(!r)throw"[ModJS] Cannot find module `"+t+"`";n=o[t]={exports:{}};var i="function"==typeof r?r.apply(n,[e,n.exports,n]):r;return i&&(n.exports=i),n.exports},e.async=function(t,r,i){function o(t){for(var n,r=0,i=t.length;i>r;r++){var s=e.alias(t[r]);s in u||(u[s]=!0,s in a?(n=c[s]||c[s+".js"],n&&"deps"in n&&o(n.deps)):(p.push(s),f++,n=c[s]||c[s+".js"],n&&"deps"in n&&o(n.deps)))}}function s(){if(0===f--){for(var i=[],a=0,o=t.length;o>a;a++)i[a]=e(t[a]);r&&r.apply(n,i)}}"string"==typeof t&&(t=[t]);var u={},f=0,p=[];o(t),l(p,s,i),s()},e.ensure=function(t,n){e.async(t,function(){n&&n.call(this,e)})},e.resourceMap=function(e){var t,n;n=e.res;for(t in n)n.hasOwnProperty(t)&&(c[t]=n[t]);n=e.pkg;for(t in n)n.hasOwnProperty(t)&&(u[t]=n[t])},e.loadJs=function(e){if(!(e in s)){s[e]=!0;var t=document.createElement("script");t.type="text/javascript",t.src=e,r.appendChild(t)}},e.loadCss=function(e){if(e.content){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e.content:t.innerHTML=e.content,r.appendChild(t)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",r.appendChild(n)}},e.alias=function(e){return e.replace(/\.js$/i,"")},e.timeout=5e3}}(this)});