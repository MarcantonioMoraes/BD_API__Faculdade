
import {AppDataSource} from "../database.js";
import {Turma} from "../entities/Turma.js";
import { Controller, Put } from "express-swagger-autoconfigure";

const repoTurma = AppDataSource.getRepository(Turma);


@Controller("/faculdade")
export class FaculdadeController {


    async criarTurma(nome:string, semestre:string, id_disciplina:number): Promise<Turma> {
        const turma = repoTurma.create({nome,semestre,id_disciplina});
        return await repoTurma.save(turma);
    }
    


     async listarTurmas(): Promise<Turma[]> {
        const sql = "SELECT * FROM turma";
        return await repoTurma.query(sql);
    }


    @Put("/turma")
    async updateTurma(turma: Turma): Promise<Turma[] | null> {
       const {id, nome, semestre, id_disciplina} = turma;
       const sql = "UPDATE turma SET nome = $1, semestre = $2, id_disciplina = $3 WHERE id = $4 RETURNING *";
       const turmas = await repoTurma.query(sql, [nome, semestre, id_disciplina, id]);
       return turmas;
    }
};