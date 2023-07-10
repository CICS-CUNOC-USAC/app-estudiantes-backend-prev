import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Carrera } from "./Carrera";
import { Curso } from "./Curso";
import { CarreraCursoPrerequisito } from "./CarreraCursoPrerequisito";

@Entity()
export class CarreraCurso {
  @ManyToOne(() => Carrera, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: "codigo_carrera"})
  @PrimaryColumn()
  codigo_carrera: number;

  @JoinColumn({name: "codigo_curso"})
  @PrimaryColumn()
  codigo_curso: string;

  @Column()
  semestre: number;

  @Column()
  area_carrera: number;

  @Column()
  obligatoriedad: boolean;

  @ManyToOne(() => Curso, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: "codigo_curso"})
  curso: any[];

  @OneToMany(() => CarreraCursoPrerequisito, (carrera_curso_prerequisito) => carrera_curso_prerequisito.codigo_carrera_codigo_curso)
  prerequisito_carrera: any[];
}
