import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Disciplina } from "./Disciplina.js";

@Entity("turma")
export class Turma {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    nome!: string;

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    semestre!: string;

    @ManyToOne(() => Disciplina)
    @JoinColumn({ name: "id_disciplina" })
    disciplina!: Disciplina;

    @Column()
    id_disciplina!: number;
}