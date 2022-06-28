"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Controllers */
const example_controller_1 = __importDefault(require("../controllers/example.controller"));
/* Middlewares */
class Routes {
    constructor() {
        this.exampleController = new example_controller_1.default();
    }
    routes(app) {
        app.route('/api/example').get(this.exampleController.example);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map