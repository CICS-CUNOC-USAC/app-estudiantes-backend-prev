import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarreraCurso } from "./CarreraCurso";
import { PrerequisitoCurso } from "./PrerequisitoCurso";

@Entity()
export class CarreraCursoPrerequisito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo_carrera: number;

  @Column()
  codigo_curso: string;

  @ManyToOne(() => CarreraCurso, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn([
    {
      name: "codigo_carrera",
      referencedColumnName: "codigo_carrera",
    },
    { name: "codigo_curso", referencedColumnName: "codigo_curso" },
  ])
  codigo_carrera_codigo_curso: [number, string];

  @Column()
  es_curso: boolean;

  @OneToMany(
    () => PrerequisitoCurso,
    (prerequsito_curso) => prerequsito_curso.codigo_curso
  )
  prerequsito_curso: string[];
}
