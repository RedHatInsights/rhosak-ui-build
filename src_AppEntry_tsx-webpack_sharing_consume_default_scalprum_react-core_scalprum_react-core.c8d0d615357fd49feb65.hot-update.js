"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "./src/routes/streams/kafka-instances/useCreateKafkaCallbacks.ts":
/*!***********************************************************************!*\
  !*** ./src/routes/streams/kafka-instances/useCreateKafkaCallbacks.ts ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateKafkaCallbacks": () => (/* binding */ useCreateKafkaCallbacks)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "../../node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var consoledot_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! consoledot-api */ "../../packages/consoledot-api/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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



function useCreateKafkaCallbacks() {
    var _this = this;
    var auth = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_2__["default"])().auth;
    var getUsername = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var username;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, auth.getUser()];
                case 1:
                    username = (_a = (_b.sent()).identity.user) === null || _a === void 0 ? void 0 : _a.username;
                    if (!username) {
                        return [2 /*return*/, Promise.reject("Invalid user")];
                    }
                    return [2 /*return*/, username];
            }
        });
    }); }, [auth]);
    var checkDeveloperAvailabilityQuery = (0,consoledot_api__WEBPACK_IMPORTED_MODULE_0__.useDeveloperInstanceAvailabilityFetchQuery)();
    var standardQuotaQuery = (0,consoledot_api__WEBPACK_IMPORTED_MODULE_0__.useStandardQuotaFetchQuery)(true);
    var providersWithRegionsQuery = (0,consoledot_api__WEBPACK_IMPORTED_MODULE_0__.useProvidersWithRegionsFetchQuery)();
    var getProvidersInfo = (0,consoledot_api__WEBPACK_IMPORTED_MODULE_0__.useProvidersWithRegionsFetchQuery)();
    var getProviderRegionsSizes = (0,consoledot_api__WEBPACK_IMPORTED_MODULE_0__.useProviderRegionSizesFetchQuery)();
    var checkDeveloperAvailability = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (_a) {
        var onAvailable = _a.onAvailable, onUsed = _a.onUsed, onUnavailable = _a.onUnavailable;
        return __awaiter(_this, void 0, void 0, function () {
            var available, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, checkDeveloperAvailabilityQuery(getUsername)];
                    case 1:
                        available = _c.sent();
                        if (available) {
                            onAvailable();
                        }
                        else {
                            onUsed();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _b = _c.sent();
                        onUnavailable();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }, [checkDeveloperAvailabilityQuery, getUsername]);
    var checkStandardQuota = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (_a) {
        var onQuotaAvailable = _a.onQuotaAvailable, onNoQuotaAvailable = _a.onNoQuotaAvailable, onOutOfQuota = _a.onOutOfQuota;
        return __awaiter(_this, void 0, void 0, function () {
            var _b, hasTrialQuota, remainingPrepaidQuota, remainingMarketplaceQuota, marketplaceSubscriptions, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, standardQuotaQuery()];
                    case 1:
                        _b = _c.sent(), hasTrialQuota = _b.hasTrialQuota, remainingPrepaidQuota = _b.remainingPrepaidQuota, remainingMarketplaceQuota = _b.remainingMarketplaceQuota, marketplaceSubscriptions = _b.marketplaceSubscriptions;
                        if (remainingMarketplaceQuota !== undefined ||
                            remainingPrepaidQuota !== undefined) {
                            if ((remainingMarketplaceQuota || 0) === 0 &&
                                (remainingPrepaidQuota || 0) === 0) {
                                onOutOfQuota({
                                    quota: {
                                        marketplaceSubscriptions: marketplaceSubscriptions,
                                    },
                                });
                            }
                            else {
                                onQuotaAvailable({
                                    quota: {
                                        remainingPrepaidQuota: remainingPrepaidQuota,
                                        remainingMarketplaceQuota: remainingMarketplaceQuota,
                                        marketplaceSubscriptions: marketplaceSubscriptions,
                                    },
                                });
                            }
                        }
                        else {
                            onNoQuotaAvailable({ hasTrialQuota: hasTrialQuota });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _c.sent();
                        onNoQuotaAvailable({ hasTrialQuota: false });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }, [standardQuotaQuery]);
    var fetchProvidersWithRegions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (plan, _a) {
        var onAvailable = _a.onAvailable, onUnavailable = _a.onUnavailable;
        return __awaiter(_this, void 0, void 0, function () {
            var providers, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, providersWithRegionsQuery(plan)];
                    case 1:
                        providers = _c.sent();
                        onAvailable(providers);
                        return [3 /*break*/, 3];
                    case 2:
                        _b = _c.sent();
                        onUnavailable();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }, [providersWithRegionsQuery]);
    var getStandardSizes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (provider, region) { return __awaiter(_this, void 0, void 0, function () {
        var providersInfo, providerInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getProvidersInfo("standard")];
                case 1:
                    providersInfo = _a.sent();
                    providerInfo = providersInfo.providers.find(function (p) { return p.id === provider; });
                    if (!providerInfo) {
                        return [2 /*return*/, Promise.reject("Invalid cloud provider")];
                    }
                    return [2 /*return*/, getProviderRegionsSizes(providerInfo, region, "standard")];
            }
        });
    }); }, [getProviderRegionsSizes, getProvidersInfo]);
    var getTrialSizes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (provider, region) { return __awaiter(_this, void 0, void 0, function () {
        var standardSizes, _a, providersInfo, providerInfo, trialSizes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getStandardSizes(provider, region)];
                case 1:
                    standardSizes = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    // It can happen that the selected provider doesn't support standard instances.
                    // In this case we provide a faux sample list of sizes just to make the slider happy.
                    standardSizes = [
                        { id: "1", displayName: "1" },
                        { id: "2", displayName: "2" },
                    ];
                    return [3 /*break*/, 3];
                case 3: return [4 /*yield*/, getProvidersInfo("developer")];
                case 4:
                    providersInfo = _b.sent();
                    providerInfo = providersInfo.providers.find(function (p) { return p.id === provider; });
                    if (!providerInfo) {
                        return [2 /*return*/, Promise.reject("Invalid cloud provider")];
                    }
                    return [4 /*yield*/, getProviderRegionsSizes(providerInfo, region, "developer")];
                case 5:
                    trialSizes = _b.sent();
                    return [2 /*return*/, {
                            standard: standardSizes,
                            trial: trialSizes[0],
                        }];
            }
        });
    }); }, [getProviderRegionsSizes, getProvidersInfo, getStandardSizes]);
    return {
        checkDeveloperAvailability: checkDeveloperAvailability,
        checkStandardQuota: checkStandardQuota,
        fetchProvidersWithRegions: fetchProvidersWithRegions,
        getStandardSizes: getStandardSizes,
        getTrialSizes: getTrialSizes,
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