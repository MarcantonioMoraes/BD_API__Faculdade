import { Router } from "express";
import  {FaculdadeController}  from "../controller/FaculdadeController.js";
import {Turma} from "../entities/Turma.js";

const router = Router ();
const faculdadeController = new FaculdadeController();

router.post("/tuma",async (req, res)=> {
    const {nome,semestre,id_disciplina} = req.body;
    const turma = await faculdadeController.criarTurma(nome,semestre,id_disciplina);
    res.json(turma);
});

router.get("/tuma",async (req, res)=> {
    const turma = await faculdadeController.listarTurmas();
    res.json(turma);
});

router.put("/tuma",async (req, res)=> {
    const turma = await faculdadeController.updateTurma(req.body);
    res.json(turma);
});


export default router;