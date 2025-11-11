"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FaculdadeController_js_1 = require("../controller/FaculdadeController.js");
var router = (0, express_1.Router)();
var faculdadeController = new FaculdadeController_js_1.FaculdadeController();
router.post("/tuma", function (req, res) {
    var _a = req.body, nome = _a.nome, semestre = _a.semestre, id_disciplina = _a.id_disciplina;
    var turma = faculdadeController.criarTurma(nome, semestre, id_disciplina);
    res.json(turma);
});
exports.default = router;
