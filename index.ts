/// <reference path="typings/index.d.ts" />

import 'es5-shim';
import 'es6-promise/dist/es6-promise.auto';

import * as jQuery from 'jquery';
global.$ = global.jQuery = jQuery;
import 'bootstrap';
import * as bootbox from 'bootbox';
bootbox.setLocale('zh_CN');

import * as avalon from 'avalon2';
import 'mmRouter';
if (avalon.msie === 8) {
    Object.defineProperty = function (obj, property, meta) {
        obj[property] = meta.value;
    }
}
import 'es5-shim/es5-sham';

// root vm
const root = avalon.define({
    $id: 'root',
    currentPath: '/',
    currentPage: '',
    title: '仪表板',
    breadCrumb: [],
    user: {},
    $routeConfig: []
});

import './services/routerService';
avalon.history.start({
    fireAnchor: false
});
if (!/#!/.test(global.location.hash)) {
    avalon.router.navigate('/', 2);
}

avalon.scan(document.body);