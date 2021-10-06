"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_route_1 = __importDefault(require("../routes/usuario.route"));
class Server {
    constructor() {
        this.ApiPaths = {
            apiUsuarios: "/api/usuarios",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "4000";
        this.routes();
    }
    routes() {
        this.app.use(this.ApiPaths.apiUsuarios, usuario_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en el puerto  " + this.port + "!!!");
        });
    }
}
exports.default = Server;
