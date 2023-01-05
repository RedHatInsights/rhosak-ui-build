"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "./src/routes/data-plane/routes/TopicSchemasRoute.tsx":
/*!************************************************************!*\
  !*** ./src/routes/data-plane/routes/TopicSchemasRoute.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicSchemasRoute": () => (/* binding */ TopicSchemasRoute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useTopicGate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useTopicGate */ "./src/routes/data-plane/useTopicGate.tsx");
/* harmony import */ var _DataPlaneTopicHeaderConnected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataPlaneTopicHeaderConnected */ "./src/routes/data-plane/routes/DataPlaneTopicHeaderConnected.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





var TopicSchemasRoute = function (_a) {
    var instanceDetailsHref = _a.instanceDetailsHref, instancesHref = _a.instancesHref;
    var topic = (0,_useTopicGate__WEBPACK_IMPORTED_MODULE_2__.useTopicGate)(instancesHref, instanceDetailsHref).topic;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataPlaneTopicHeaderConnected__WEBPACK_IMPORTED_MODULE_3__.DataPlaneTopicHeaderConnected, { instancesHref: instancesHref, instanceDetailsHref: instanceDetailsHref, activeSection: "schemas" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_1__.ScalprumComponent, { manifest: "/beta/apps/srs-ui-build/fed-modules.json", appName: "inventory", module: "./InventoryTable", scope: "inventory", ErrorComponent: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "opsie" }) })] }));
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