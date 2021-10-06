"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUsuarios = exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.status(200).send("get Api ");
};
exports.getUsuarios = getUsuarios;
const postUsuarios = (req, res) => {
    res.status(201).send("post Api ");
};
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    res.status(202).send("put Api ");
};
exports.putUsuarios = putUsuarios;
const deleteUsuarios = (req, res) => {
    res.status(202).send("delete Api ");
};
exports.deleteUsuarios = deleteUsuarios;
const patchUsuarios = (req, res) => {
    res.status(202).send("pacth Api ");
};
exports.patchUsuarios = patchUsuarios;
