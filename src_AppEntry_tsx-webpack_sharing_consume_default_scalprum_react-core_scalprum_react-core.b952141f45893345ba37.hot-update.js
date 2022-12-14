"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "./src/routes/streams/kafka-instances/CreateKafkaInstanceRoute.tsx":
/*!*************************************************************************!*\
  !*** ./src/routes/streams/kafka-instances/CreateKafkaInstanceRoute.tsx ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateKafkaInstanceRoute": () => (/* binding */ CreateKafkaInstanceRoute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/quickstarts */ "webpack/sharing/consume/default/@patternfly/quickstarts/@patternfly/quickstarts");
/* harmony import */ var _patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rhoas/app-services-ui-components */ "../../node_modules/@rhoas/app-services-ui-components/dist/esm/Kafka/CreateKafkaInstance/CreateKafkaInstance.js");
/* harmony import */ var consoledot_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! consoledot-api */ "../../packages/consoledot-api/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./src/routes/streams/routes.ts");
/* harmony import */ var _useCreateKafkaCallbacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useCreateKafkaCallbacks */ "./src/routes/streams/kafka-instances/useCreateKafkaCallbacks.ts");
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








var CreateKafkaInstanceRoute = function (_a) {
    var instancesHref = _a.instancesHref;
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
    var callbacks = (0,_useCreateKafkaCallbacks__WEBPACK_IMPORTED_MODULE_6__.useCreateKafkaCallbacks)();
    var createKafkaInstance = (0,consoledot_api__WEBPACK_IMPORTED_MODULE_2__.useKafkaCreateInstanceMutation)();
    var qsContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_patternfly_quickstarts__WEBPACK_IMPORTED_MODULE_1__.QuickStartContext);
    var onClickKafkaOverview = function () {
        history.push("overview");
    };
    var onClickQuickStart = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
        qsContext.setActiveQuickStart &&
            qsContext.setActiveQuickStart("getting-started");
    }, [qsContext]);
    var onCreate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (instance, onSuccess, onError) {
        var onOnSuccess = function () {
            onSuccess();
            history.push(_routes__WEBPACK_IMPORTED_MODULE_5__.ControlPlaneRouteRoot);
        };
        void createKafkaInstance.mutateAsync({
            instance: instance,
            onSuccess: onOnSuccess,
            onError: onError,
        });
    }, [createKafkaInstance, history]);
    var onCancel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
        history.push(instancesHref);
    }, [history, instancesHref]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rhoas_app_services_ui_components__WEBPACK_IMPORTED_MODULE_7__.CreateKafkaInstance, __assign({}, callbacks, { isModalOpen: true, onCancel: onCancel, onClickContactUs: onClickKafkaOverview, onClickKafkaOverview: onClickKafkaOverview, onClickQuickStart: onClickQuickStart, onCreate: onCreate, onLearnHowToAddStreamingUnits: onClickKafkaOverview, onLearnMoreAboutSizes: onClickKafkaOverview, subscriptionOptionsHref: document.location.href + "/../overview", appendTo: function () {
            return document.getElementById("chrome-app-render-root") ||
                document.body;
        } })));
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