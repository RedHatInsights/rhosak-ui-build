"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "../../packages/consoledot-api/src/fetchQueries/useStandardQuotaFetchQuery.ts":
/*!************************************************************************************!*\
  !*** ../../packages/consoledot-api/src/fetchQueries/useStandardQuotaFetchQuery.ts ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStandardQuotaFetchQuery": () => (/* binding */ useStandardQuotaFetchQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _fetchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetchers */ "../../packages/consoledot-api/src/fetchers/index.ts");
/* harmony import */ var _queryKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryKeys */ "../../packages/consoledot-api/src/queryKeys.ts");
/* harmony import */ var _useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useApi */ "../../packages/consoledot-api/src/useApi.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function useStandardQuotaFetchQuery() {
    var _this = this;
    var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
    var account = (0,_useApi__WEBPACK_IMPORTED_MODULE_2__.useApi)().account;
    var ams = account();
    return function () { return __awaiter(_this, void 0, void 0, function () {
        var organization;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, queryClient.fetchQuery({
                        queryKey: _queryKeys__WEBPACK_IMPORTED_MODULE_1__.masQueries.organization(),
                        queryFn: function () {
                            return (0,_fetchers__WEBPACK_IMPORTED_MODULE_0__.fetchOrganization)(function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return ams.apiAccountsMgmtV1CurrentAccountGet.apply(ams, args);
                            });
                        },
                        staleTime: Infinity,
                    })];
                case 1:
                    organization = _a.sent();
                    if (!organization) {
                        return [2 /*return*/, Promise.reject("Missing organization id")];
                    }
                    return [2 /*return*/, queryClient.fetchQuery({
                            queryKey: _queryKeys__WEBPACK_IMPORTED_MODULE_1__.masQueries.quota.available({ organization: organization }),
                            queryFn: function () {
                                return (0,_fetchers__WEBPACK_IMPORTED_MODULE_0__.fetchStandardQuota)(function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    return ams.apiAccountsMgmtV1OrganizationsOrgIdQuotaCostGet.apply(ams, args);
                                }, organization);
                            },
                        })];
            }
        });
    }); };
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