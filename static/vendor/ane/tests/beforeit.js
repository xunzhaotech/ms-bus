define("vendor/ane/tests/beforeit",function(e){"use strict";e("node_modules/es5-shim/es5-shim"),e("node_modules/es6-promise/dist/es6-promise.auto"),e("node_modules/jquery/dist/jquery"),window.$=window.jQuery=jQuery,e("node_modules/bootstrap/dist/js/bootstrap");var o=e("node_modules/bootbox/bootbox");o.setLocale("zh_CN");var s=e("node_modules/avalon2/dist/avalon");s.config({debug:!1}),8===s.msie&&(Object.defineProperty=function(e,o,s){e[o]=s.value}),e("node_modules/es5-shim/es5-sham"),e("../output/ane.js")});