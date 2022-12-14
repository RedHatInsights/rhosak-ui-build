"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "./src/routes/streams/detail/DataPlaneHeaderConnected.tsx":
/*!****************************************************************!*\
  !*** ./src/routes/streams/detail/DataPlaneHeaderConnected.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPlaneHeaderConnected": () => (/* binding */ DataPlaneHeaderConnected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui */ "../../packages/ui/index.ts");
/* harmony import */ var _DrawerProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../DrawerProvider */ "./src/DrawerProvider.tsx");
/* harmony import */ var _useDataPlaneInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDataPlaneInstance */ "./src/routes/streams/detail/useDataPlaneInstance.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");







var DataPlaneHeaderConnected = function (_a) {
    var instancesHref = _a.instancesHref, activeSection = _a.activeSection;
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _b = (0,_DrawerProvider__WEBPACK_IMPORTED_MODULE_4__.useDrawer)(), setActiveTab = _b.setActiveTab, toggleExpanded = _b.toggleExpanded;
    var _c = (0,_useDataPlaneInstance__WEBPACK_IMPORTED_MODULE_5__.useDataPlaneInstance)(instancesHref), instance = _c.instance, url = _c.match.url;
    var sectionsHref = {
        dashboard: "".concat(url, "/dashboard"),
        topics: "".concat(url, "/topics"),
        consumer: "".concat(url, "/consumer-groups"),
        permissions: "".concat(url, "/acls"),
        settings: "".concat(url, "/settings"),
    };
    var onDelete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        // TODO: unhardcode this url
        history.push("".concat(instancesHref, "/").concat(instance.id, "/delete"));
    }, [history, instance, instancesHref]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui__WEBPACK_IMPORTED_MODULE_3__.DataPlaneHeader, { instancesHref: instancesHref, instanceName: (instance === null || instance === void 0 ? void 0 : instance.name) || "", activeSection: activeSection, sectionsHref: sectionsHref, onDetails: function () {
            setActiveTab("details");
            toggleExpanded(true);
        }, onConnection: function () {
            setActiveTab("connections");
            toggleExpanded(true);
        }, canOpenConnection: instance ? ui__WEBPACK_IMPORTED_MODULE_3__.ReadyStatuses.includes(instance === null || instance === void 0 ? void 0 : instance.status) : false, canChangeOwner: true /* TODO */, onChangeOwner: function () { return false; } /* TODO */, canDelete: true /* TODO */, onDelete: onDelete }));
};


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

});