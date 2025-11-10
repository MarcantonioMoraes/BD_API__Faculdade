"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("faculdadeRoutes");
from;
"../routes/FaculdadeRoutes.js";
var database_js_1 = require("./database.js");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/faculdades", faculdadeRoutes);
database_js_1.AppDataSource.initialize()
    .then(function () {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    app.listen(3000, function () {
        console.log("Servidor rodando na porta 3000");
    });
})
    .catch(function (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
});
