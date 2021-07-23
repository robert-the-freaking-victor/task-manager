"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
// load the env
dotenv_1.default.config();
var app_1 = __importDefault(require("./app"));
var index_1 = __importDefault(require("./api/routes/index"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
app_1.default.use(cors_1.default({ origin: '*', methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT'] }));
app_1.default.use(body_parser_1.default.json());
index_1.default.runApi();
