import { Router } from "express";
import FaculdadeController from "../controllers/FaculdadeController.js";

const router = Router ();
const faculdadeController = new FaculdadeController();

router.post("/tuma",(req, res)=> {
    const {nome,semestre,id_disciplina} = req.body;
    const turma = faculdadeController.criarTurma(nome,semestre,id_disciplina);
    res.json(turma);
});


export default router;