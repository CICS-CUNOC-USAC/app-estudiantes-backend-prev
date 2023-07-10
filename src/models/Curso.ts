import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CarreraCurso } from "./CarreraCurso";
import { PrerequisitoCurso } from "./PrerequisitoCurso";

@Entity()
export class Curso {
  @PrimaryColumn()
  codigo: string;

  @Column()
  nombre: string;

  @Column({nullable: true})
  descripcion: string;

  @Column()
  creditos: number;

  @OneToMany(() => CarreraCurso, (carrera_curso) => carrera_curso.codigo_curso)
  carrera_curso: string[];

  @OneToMany(() => PrerequisitoCurso, (prerequsito_curso) => prerequsito_curso.codigo_curso)
  prerequsito_curso: string[];
}
