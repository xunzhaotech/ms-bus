define("vendor/ane/components/ms-checkbox/ms-checkbox.ts",function(e){"use strict";var n=e("node_modules/avalon2/dist/avalon"),t=e("vendor/ane/ane-util.ts");if(n.msie<=8){var a=document,o=a.getElementsByTagName("head")[0],s=a.createElement("style"),l="\n        .ane-checkbox-inner-ie input {\n            left: 0;\n            position: static !important;\n            margin-left: 0 !important;\n            margin-top: 6px !important;\n        }\n        .ane-checkbox-inner-ie span {\n            display: none !important;\n        }\n    ";s.setAttribute("type","text/css"),s.styleSheet?s.styleSheet.cssText=l:s.appendChild(a.createTextNode(l)),o.appendChild(s)}n.component("ms-checkbox",{soleSlot:"label",template:'\n<div :class="@wrapper" class="ane-checkbox" style="margin-top: 0; margin-bottom: 0;">\n    <label class="ane-checkbox-inner ane-checkbox-inner-ie">\n        <input type="checkbox"\n            :attr="{id:@helpId,disabled:@disabled}"\n            :duplex-checked="@checked"\n            data-duplex-changed="@onChange"\n            />\n        <span class="text"></span>\n    </label>\n    <label :attr="{\'for\':@helpId}" style="padding-left: 0;" :css="{marginRight:@group?8:0}"><slot /></label>\n</div>\n',defaults:{wrapper:"checkbox",label:"",checked:!1,group:!1,disabled:!1,onChange:n.noop,flush:n.noop,helpId:"",onInit:function(){this.helpId=this.$id},onReady:function(){t.parseSlotToVModel(this)},onDispose:function(){}}})});