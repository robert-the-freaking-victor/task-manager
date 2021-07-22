"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskRoutes_1 = __importDefault(require("./TaskRoutes"));
var RoutesAPI = /** @class */ (function () {
    function RoutesAPI() {
    }
    RoutesAPI.runApi = function () {
        var promiseRoutes = RoutesAPI.routes.map(function (route) {
            return route.run();
        });
        Promise.all(promiseRoutes)
            .then(function () {
            console.log('API is now available!');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    // todas os arquivos de rotas importados, devem ser colocados nesse array
    RoutesAPI.routes = [
        TaskRoutes_1.default,
    ];
    return RoutesAPI;
}());
exports.default = RoutesAPI;
