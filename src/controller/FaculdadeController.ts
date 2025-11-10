import {AppDataSource} from "../database.js";
import {turma} from "../entities/Turma.js";

const repoTurma = AppDataSource.getrepository(turma);

export class faculdadeController {
    async criarTurma(nome:string, semestre:number, id_disciplina:number){
        const turma = repoTurma.create({nome,semestre,id_disciplina});
        return await repoTurma.save(turma);
    }
};

