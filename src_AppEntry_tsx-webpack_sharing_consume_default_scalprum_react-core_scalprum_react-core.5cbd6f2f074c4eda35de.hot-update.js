"use strict";
self["webpackHotUpdateconsoledot_rhosak"]("src_AppEntry_tsx-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core",{

/***/ "../../packages/consoledot-api/src/queryKeys.ts":
/*!******************************************************!*\
  !*** ../../packages/consoledot-api/src/queryKeys.ts ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kafkaQueries": () => (/* binding */ kafkaQueries),
/* harmony export */   "masQueries": () => (/* binding */ masQueries),
/* harmony export */   "providerQueries": () => (/* binding */ providerQueries)
/* harmony export */ });
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var masQueries = {
    _root: function () { return ({ scope: "mas" }); },
    organization: function () {
        return [__assign(__assign({}, masQueries._root()), { entity: "organization" })];
    },
    quota: {
        _root: function () { return (__assign(__assign({}, masQueries._root()), { entity: "quota" })); },
        available: function (params) {
            return [
                __assign(__assign(__assign({}, masQueries.quota._root()), { subentity: "available" }), params),
            ];
        },
        developerAvailability: function () {
            return [
                __assign(__assign({}, masQueries.quota._root()), { subentity: "developerAvailability" }),
            ];
        },
        standardAvailability: function () {
            return [
                __assign(__assign({}, masQueries.quota._root()), { subentity: "standardAvailability" }),
            ];
        },
    },
};
var kafkaQueries = {
    _root: function () { return ({ scope: "kafka" }); },
    list: function (params) {
        return [
            __assign(__assign({}, kafkaQueries._root()), { entity: "list" }),
            params,
        ];
    },
    instance: {
        _root: function (_a) {
            var id = _a.id;
            return (__assign(__assign({}, kafkaQueries._root()), { entity: "instance", id: id }));
        },
        details: function (params) {
            return [
                __assign(__assign({}, kafkaQueries.instance._root(params)), { subentity: "details" }),
            ];
        },
        topics: function (params) {
            return [
                __assign(__assign({}, kafkaQueries.instance._root(params)), { subentity: "topics" }),
                params,
            ];
        },
        consumerGroups: function (params) {
            return [
                __assign(__assign({}, kafkaQueries.instance._root(params)), { subentity: "consumer-groups" }),
                params,
            ];
        },
        metrics: {
            _root: function (_a) {
                var id = _a.id;
                return (__assign(__assign({}, kafkaQueries.instance._root({ id: id })), { subentity: "metrics", id: id }));
            },
            kpi: function (params) {
                return [__assign(__assign({}, kafkaQueries.instance._root(params)), { type: "kpi" })];
            },
            instance: function (_a) {
                var id = _a.id, params = __rest(_a, ["id"]);
                return [
                    __assign(__assign({}, kafkaQueries.instance._root({ id: id })), { type: "instance" }),
                    params,
                ];
            },
            topic: function (_a) {
                var id = _a.id, params = __rest(_a, ["id"]);
                return [
                    __assign(__assign({}, kafkaQueries.instance._root({ id: id })), { type: "topic" }),
                    params,
                ];
            },
        },
    },
};
var providerQueries = {
    _root: function () { return ({ scope: "providers" }); },
    list: function (params) {
        return [__assign(__assign(__assign({}, providerQueries._root()), { entity: "list" }), params)];
    },
    limits: {
        _root: function (_a) {
            var provider = _a.provider;
            return (__assign(__assign({}, providerQueries._root()), { entity: "limits", provider: provider }));
        },
        standard: function (_a) {
            var provider = _a.provider, region = _a.region;
            return [
                __assign(__assign({}, providerQueries.limits._root({ provider: provider })), { plan: "standard", region: region }),
            ];
        },
        developer: function (_a) {
            var provider = _a.provider, region = _a.region;
            return [
                __assign(__assign({}, providerQueries.limits._root({ provider: provider })), { plan: "developer", region: region }),
            ];
        },
    },
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