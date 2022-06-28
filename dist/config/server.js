"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const routes_1 = __importDefault(require("../routes/routes"));
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.routes = new routes_1.default();
        this.app = (0, express_1.default)();
        this.securityProtocol();
        this.config();
        this.server = https_1.default.createServer(this.app);
        this.port = process.env.LISTEN_PORT || '8001';
        this.routes.routes(this.app);
    }
    config() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Aqui podemos meter más seguridad con Helmet
    }
    securityProtocol() {
        if (process.env.MODE === 'dev') {
            this.server = http_1.default.createServer(this.app);
        }
        else {
            console.log('Configurando Security Protocol para modo de producción...');
        }
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('API is running in port: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map