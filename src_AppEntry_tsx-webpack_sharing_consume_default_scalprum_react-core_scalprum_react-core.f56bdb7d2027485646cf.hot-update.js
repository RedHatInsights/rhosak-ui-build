"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "../../packages/ui/src/components/KafkaInstanceDrawer/components/KafkaDetailsTab.tsx":
/*!*******************************************************************************************!*\
  !*** ../../packages/ui/src/components/KafkaInstanceDrawer/components/KafkaDetailsTab.tsx ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KafkaDetailsTab": () => (/* binding */ KafkaDetailsTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?f9e1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rhoas/app-services-ui-components */ "../../node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rhoas/app-services-ui-components */ "../../packages/ui/node_modules/@rhoas/app-services-ui-components/dist/esm/shared/FormatDate/FormatDate.js");
/* harmony import */ var _DetailsTabAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsTabAlert */ "../../packages/ui/src/components/KafkaInstanceDrawer/components/DetailsTabAlert.tsx");
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




var KafkaDetailsTab = function (_a) {
    var id = _a.id, createdAt = _a.createdAt, updatedAt = _a.updatedAt, owner = _a.owner, provider = _a.provider, region = _a.region, expiryDate = _a.expiryDate, instanceType = _a.instanceType, size = _a.size, ingress = _a.ingress, egress = _a.egress, storage = _a.storage, maxPartitions = _a.maxPartitions, connections = _a.connections, connectionRate = _a.connectionRate, messageSize = _a.messageSize, billing = _a.billing, kafkaVersion = _a.kafkaVersion;
    var t = (0,_rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("kafka").t;
    var renderTextListItem = function (title, value) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextListItem, __assign({ component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextListItemVariants.dt }, { children: title })), value ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextListItem, __assign({ component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextListItemVariants.dd }, { children: value }))) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Skeleton, { width: "50%", screenreaderText: t("common:skeleton_loader_screenreader_text", {
                    contentName: title,
                }) }))] })); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: "mas--details__drawer--tab-content" }, { children: [instanceType !== "standard" && expiryDate && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DetailsTabAlert__WEBPACK_IMPORTED_MODULE_2__.DetailsTabAlert, { expiryDate: expiryDate })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextList, __assign({ component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextListVariants.dl }, { children: [instanceType === "standard" &&
                            renderTextListItem(t("common:size"), size
                                ? t("create-kafka-instance:streaming_size_value", {
                                    value: size,
                                })
                                : undefined), renderTextListItem(t("ingress"), ingress
                            ? t("create-kafka-instance:ingress_value", {
                                value: ingress,
                            })
                            : undefined), renderTextListItem(t("egress"), egress
                            ? t("create-kafka-instance:egress_value", {
                                value: egress,
                            })
                            : undefined), renderTextListItem(t("storage"), storage
                            ? t("create-kafka-instance:storage_value", {
                                value: storage,
                            })
                            : undefined), renderTextListItem(t("partitions"), maxPartitions
                            ? t("create-kafka-instance:partitions_value", {
                                value: maxPartitions,
                            })
                            : undefined), renderTextListItem(t("client_connections"), connections
                            ? t("create-kafka-instance:client_connections_value", {
                                value: connections,
                            })
                            : undefined), renderTextListItem(t("connection_rate"), connectionRate
                            ? t("create-kafka-instance:connection_rate_value", {
                                value: connectionRate,
                            })
                            : undefined), renderTextListItem(t("message_size"), messageSize
                            ? t("create-kafka-instance:message_size_value", {
                                value: messageSize,
                            })
                            : undefined), renderTextListItem(t("common:id"), id), renderTextListItem(t("common:kafka_version"), kafkaVersion), renderTextListItem(t("common:owner"), owner), renderTextListItem(t("common:time_created"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_4__.FormatDate, { date: createdAt, format: "long" })), renderTextListItem(t("common:time_updated"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_4__.FormatDate, { date: updatedAt, format: "long" })), renderTextListItem(t("common:cloud_provider"), provider), renderTextListItem(t("common:region"), region), renderTextListItem(t("create-kafka-instance:billing.field_label"), (function () {
                            if (billing === undefined) {
                                return undefined;
                            }
                            else if (billing === "prepaid") {
                                return t("create-kafka-instance:billing.prepaid_option");
                            }
                            else {
                                switch (billing.marketplace) {
                                    case "aws":
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [t("create-kafka-instance:billing.marketplace_aws"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), billing.subscription] }));
                                    case "azure":
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [t("create-kafka-instance:billing.marketplace_azure"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), billing.subscription] }));
                                    case "gcp":
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [t("create-kafka-instance:billing.marketplace_gcp"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), billing.subscription] }));
                                    case "rhm":
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [t("create-kafka-instance:billing.marketplace_rh"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), billing.subscription] }));
                                }
                            }
                        })())] })) })] })));
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