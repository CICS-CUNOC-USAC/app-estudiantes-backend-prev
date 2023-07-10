import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./Curso";
import { CarreraCursoPrerequisito } from "./CarreraCursoPrerequisito";

@Entity()
export class PrerequisitoCurso {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Curso, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: 'codigo_curso'})
  codigo_curso: string;

  @ManyToOne(() => CarreraCursoPrerequisito, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: 'id_carrera_curso_prerequisito'})
  id_carrera_curso_prerequisito: number;
}
