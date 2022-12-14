"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "../../packages/ui/src/components/KafkaInstanceDrawer/KafkaInstanceDrawer.tsx":
/*!************************************************************************************!*\
  !*** ../../packages/ui/src/components/KafkaInstanceDrawer/KafkaInstanceDrawer.tsx ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KafkaInstanceDrawer": () => (/* binding */ KafkaInstanceDrawer),
/* harmony export */   "KafkaInstanceDrawerPanel": () => (/* binding */ KafkaInstanceDrawerPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?f9e1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rhoas/app-services-ui-components */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "../../node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "../../packages/ui/src/hooks/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "../../packages/ui/src/types.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "../../packages/ui/src/components/KafkaInstanceDrawer/components/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var KafkaInstanceDrawer = function (_a) {
    var instance = _a.instance, activeTab = _a.activeTab, isExpanded = _a.isExpanded, onTabChange = _a.onTabChange, onClose = _a.onClose, children = _a.children;
    var content = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerPanelContent, { children: instance ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(KafkaInstanceDrawerPanel, { instance: instance, activeTab: activeTab, onTabChange: onTabChange, onClose: onClose })) : null }));
    }, [activeTab, instance, onClose, onTabChange]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Drawer, __assign({ isExpanded: isExpanded, isInline: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, __assign({ panelContent: content }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerContentBody, __assign({ className: "pf-u-display-flex pf-u-flex-direction-column" }, { children: children })) })) })));
};
var KafkaInstanceDrawerPanel = function (_a) {
    var instance = _a.instance, activeTab = _a.activeTab, onTabChange = _a.onTabChange, onClose = _a.onClose;
    var t = (0,_rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_6__.useTranslation)(["kafka"]).t;
    var labels = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useKafkaLabels)();
    var handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (_, tab) {
        var t = tab;
        onTabChange(t);
    }, [onTabChange]);
    var isKafkaPending = _types__WEBPACK_IMPORTED_MODULE_4__.CreatingStatuses.includes(instance.status);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerHead, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, __assign({ component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.small, className: "pf-u-mb-0" }, { children: t("common:name") })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, __assign({ headingLevel: "h1", size: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TitleSizes.xl, className: "pf-u-mt-0" }, { children: instance.name }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerActions, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerCloseButton, { onClick: onClose }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DrawerPanelBody, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, __assign({ activeKey: activeTab, onSelect: handleSelect }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, __assign({ eventKey: "details", title: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TabTitleText, { children: t("drawer-tabs.details") }) }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "pf-u-pt-md pf-u-pb-md" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_5__.KafkaDetailsTab, { id: instance.id, owner: instance.owner, createdAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(instance.createdAt), updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(instance.updatedAt), expiryDate: instance.expiryDate
                                        ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(instance.expiryDate)
                                        : undefined, size: instance.size, ingress: instance.ingress, egress: instance.egress, storage: instance.storage, maxPartitions: instance.maxPartitions, connections: instance.connections, connectionRate: instance.connectionRate, messageSize: instance.messageSize, provider: labels.providers[instance.provider] || instance.provider, region: labels.providerRegions[instance.provider][instance.region] ||
                                        instance.region, instanceType: instance.plan, billing: instance.billing, kafkaVersion: instance.version }) })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, __assign({ eventKey: "connections", title: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TabTitleText, { children: t("drawer-tabs.connections") }), "data-testid": "drawerStreams-tabConnect" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: "pf-u-pt-md pf-u-pb-md" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_5__.KafkaConnectionTabP2, { isKafkaPending: isKafkaPending, externalServer: getExternalServer(instance.bootstrapUrl), tokenEndPointUrl: "TODO", linkToServiceAccount: "service-accounts", linkToAccessTab: "TODO/acls", adminAPIUrl: getAdminServerUrl(instance.adminUrl), showCreateServiceAccountModal: function () {
                                        /* TODO */
                                    }, kafkaFleetManagerUrl: "https://api.openshift.com/api/kafkas_mgmt/v1/openapi" }) })) }))] })) })] }));
};
var getExternalServer = function (bootstrapUrl) {
    if (!bootstrapUrl) {
        return undefined;
    }
    return (bootstrapUrl === null || bootstrapUrl === void 0 ? void 0 : bootstrapUrl.endsWith(":443")) ? bootstrapUrl : "".concat(bootstrapUrl, ":443");
};
var getAdminServerUrl = function (adminUrl) {
    return adminUrl ? "".concat(adminUrl, "/openapi") : undefined;
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