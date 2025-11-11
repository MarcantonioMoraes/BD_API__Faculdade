import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("turma")
export class Turma {
    @PrimaryGeneratedColumn({
    type: "int",
     unsigned: true
    })
    id!: number;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    nome!: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    semestre!: string;

    @Column({
        type: "int",
        unsigned: true,
    })
    id_disciplina!: number;
}