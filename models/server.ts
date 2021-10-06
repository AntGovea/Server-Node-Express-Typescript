import express, { Application } from "express";
import userRoutes from "../routes/usuario.route";

export default class Server {
	private app: Application;
	private port: string;
	private ApiPaths = {
		apiUsuarios: "/api/usuarios",
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "4000";
        this.routes();
	}

	routes() {
		this.app.use(this.ApiPaths.apiUsuarios, userRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("servidor corriendo en el puerto  " + this.port + "!!!");
		});
	}







}
