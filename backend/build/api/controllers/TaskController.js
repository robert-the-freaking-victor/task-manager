"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskModel_1 = __importDefault(require("../models/TaskModel"));
var TaskController = /** @class */ (function () {
    function TaskController() {
    }
    TaskController.create = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var body, task, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        body = request.body;
                        return [4 /*yield*/, TaskModel_1.default.create(body)];
                    case 1:
                        task = _a.sent();
                        response.status(201).json(task);
                        return [2 /*return*/, task];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        response.status(500).json({ error: err_1 });
                        return [3 /*break*/, 4];
                    case 3:
                        next();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskController.get = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var params, idTask, task, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        params = request.params;
                        idTask = params.id;
                        return [4 /*yield*/, TaskModel_1.default.get(idTask)];
                    case 1:
                        task = _a.sent();
                        response.status(200).json(task);
                        return [2 /*return*/, task];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        response.status(500).json({ error: err_2 });
                        return [3 /*break*/, 4];
                    case 3:
                        next();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskController.list = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, TaskModel_1.default.list()];
                    case 1:
                        tasks = _a.sent();
                        response.status(200).json(tasks);
                        return [2 /*return*/, tasks];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3);
                        response.status(500).json({ error: err_3 });
                        return [3 /*break*/, 4];
                    case 3:
                        next();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskController.update = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var body, params, id, updatedTask, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        body = request.body;
                        params = request.params;
                        id = params.id;
                        return [4 /*yield*/, TaskModel_1.default.update(id, body)];
                    case 1:
                        updatedTask = _a.sent();
                        response.status(200).json(updatedTask);
                        return [2 /*return*/, updatedTask];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        response.status(500).json({ error: err_4 });
                        return [3 /*break*/, 4];
                    case 3:
                        next();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskController.delete = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var params, id;
            return __generator(this, function (_a) {
                try {
                    params = request.params;
                    id = params.id;
                    TaskModel_1.default.delete(id);
                    response.status(200).json({ deleted: true });
                }
                catch (err) {
                    console.log(err);
                    response.status(500).json({ error: err });
                }
                finally {
                    next();
                }
                return [2 /*return*/];
            });
        });
    };
    return TaskController;
}());
exports.default = TaskController;
