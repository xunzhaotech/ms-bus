define("services/menuService.ts",function(e,o){"use strict";function t(e,o,a){if(e)for(var i=0,r=void 0;r=e[i++];){for(var n=!1,d=0,m=void 0;m=o[d++];)if(m.code===r.name&&a[m.code]||a.all){r.href=m.uri||r.href||"javascript:;",r.icon=m.icon_url||r.icon,r.target=r.target||"_self",r.children=r.children||[],r.opened=!1,n=!0;break}r.show=n===!0,t(r.children,o,a)}}function a(e,o,t,i){void 0===t&&(t=1),void 0===i&&(i=n.slice(0));for(var r=!1,d=0,m=void 0;m=i[d++];){if(m.name===e||m.stateName===e){o&&o(m,t),r=!0;break}if(m.childStates&&~m.childStates.indexOf(e)){o&&o(m,t),r=!0;break}if(m.children&&a(e,o,t+1,m.children)){o&&o(m,t),r=!0;break}}return r}var i=e("node_modules/avalon2/dist/avalon"),r=e("services/ajaxService.ts"),n=[{name:"dashboard",stateName:"root",title:"主页",icon:"glyphicon-home",href:"#!/"},{name:"demo1",title:"例子一级",icon:"glyphicon-home",href:"javascript:;",children:[{name:"demo",stateName:"root.demo",title:"例子",icon:"glyphicon-home",href:"#!/demo",childStates:["root.supplier"]},{name:"demo-redux",stateName:"root.demoRedux",title:"redux例子",icon:"glyphicon-home",href:"#!/demo-redux"},{name:"demo-fast",stateName:"root.demoFast",title:"快速CURD例子",icon:"glyphicon-home",href:"#!/demo-fast"}]},{name:"doc-ms",title:"组件文档",icon:"glyphicon-book",href:"javascript:;",children:[{name:"doc-ms-table",stateName:"root.doc-ms-table",title:"Table",href:"#!/doc-ms-table"},{name:"doc-ms-form",stateName:"root.doc-ms-form",title:"Form",href:"#!/doc-ms-form"}]},{name:"rxjs-demo-page",title:"RxJS Demo Page",icon:"glyphicon-page",href:"/pages/rxjs-demo/rxjs-demo.html",target:"_blank"}],d=new Promise(function(e,o){r["default"]({url:"/api/loged",type:"get"}).then(function(a){"0"===a.code?($("#loadImg").css("display","none"),$(".login-area").removeClass("hidden").addClass("animated flipInX"),t(n,a.data.t.functions,a.data.t.allowedFunctions),i.mix(i.vmodels.root,{user:a.data.t}),e(n.slice(0))):o(a)})});o.menu=d,o.walkMenu=a});