import type { promises } from "dns";
import {AppDataSource} from "../database.js";
import {Turma} from "../entities/Turma.js";

const repoTurma = AppDataSource.getRepository(Turma);

export class FaculdadeController {
    async criarTurma(nome:string, semestre:string, id_disciplina:number): Promise<Turma> {
        const turma = repoTurma.create({nome,semestre,id_disciplina});
        return await repoTurma.save(turma);
    }


     async listarTurmas(): Promise<Turma[]> {
        const sql = "SELECT * FROM turma";
        return await repoTurma.query(sql);
    }

};