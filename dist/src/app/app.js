"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Librerías necesarias para iniciar el servidor
 */
const express = require("express");
const logger = require("morgan");
// import log4js from "../helpers/logger";
const jwt = require("jsonwebtoken");
const jwt_secret_key_1 = require("../config/jwt_secret_key");
const app = express();
/**
 * Middleware que controla el acceso a la API
 * mediante la librería JWT.
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,GET,DELETE,POST,OPTIONS");
    if (req.method == "OPTIONS") {
        next();
    }
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
    }
    else {
        res.end();
    }
    jwt.verify(req.token, jwt_secret_key_1.secretKey, (error, authData) => {
        //console.log(authData);
        if (error) {
            res.end(); //sendStatus(403);
        }
        else {
            console.log("access token verified");
            next();
        }
    });
});
app.use(logger("dev"));
app.use(express.urlencoded({ limit: "15mb", extended: true }));
app.use(express.json({ limit: "15mb" }));
/**
 * Asigna las rutas importadas a la ruta designada.
 */
/**
 * Función que ejecuta el servidor.
 */
app.listen(3000, () => {
    // log4js.debug("inited");
    console.log("Server inited on port 3000");
});
