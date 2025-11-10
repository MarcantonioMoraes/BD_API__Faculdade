import {AppDataSource} from "../database.js";
import {Turma} from "../entities/Turma.js";

const repoTurma = AppDataSource.getRepository(Turma);

export class FaculdadeController {
    async criarTurma(nome:string, semestre:number, id_disciplina:number){
        const turma = repoTurma.create({nome,semestre,id_disciplina});
        return await repoTurma.save(turma);
    }
};

