"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "../../packages/consoledot-api/src/fetchQueries/useProviderRegionSizesFetchQuery.ts":
/*!******************************************************************************************!*\
  !*** ../../packages/consoledot-api/src/fetchQueries/useProviderRegionSizesFetchQuery.ts ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProviderRegionSizesFetchQuery": () => (/* binding */ useProviderRegionSizesFetchQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _fetchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetchers */ "../../packages/consoledot-api/src/fetchers/index.ts");
/* harmony import */ var _queryKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryKeys */ "../../packages/consoledot-api/src/queryKeys.ts");
/* harmony import */ var _useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useApi */ "../../packages/consoledot-api/src/useApi.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





function useProviderRegionSizesFetchQuery() {
    var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
    var kafkasFleet = (0,_useApi__WEBPACK_IMPORTED_MODULE_2__.useApi)().kafkasFleet;
    return function (provider, region, plan) {
        var kms = kafkasFleet();
        return queryClient.fetchQuery({
            queryKey: _queryKeys__WEBPACK_IMPORTED_MODULE_1__.providerQueries.limits[plan === "standard" ? "standard" : "developer"]({ provider: provider.id, region: region }),
            queryFn: function () {
                return (0,_fetchers__WEBPACK_IMPORTED_MODULE_0__.fetchProviderRegionSizes)(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return kms.getInstanceTypesByCloudProviderAndRegion.apply(kms, args);
                }, provider, region, plan);
            },
            staleTime: Infinity,
        });
    };
}


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