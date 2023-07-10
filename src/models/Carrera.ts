import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CarreraCurso } from "./CarreraCurso";

@Entity()
export class Carrera {
  @PrimaryColumn()
  codigo: number;

  @Column()
  nombre: string;

  @OneToMany(() => CarreraCurso, (carrera_curso) => carrera_curso.codigo_carrera)
  codigo_carrera: number[];
}
