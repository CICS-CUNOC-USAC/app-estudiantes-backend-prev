import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { CarreraCursoPrerequisito } from "./CarreraCursoPrerequisito";

@Entity()
export class PrerequisitoCredito {
  @PrimaryColumn()
  @OneToOne(() => CarreraCursoPrerequisito, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name: 'id_carrera_curso_prerequisito', referencedColumnName: 'id'})
  id_carrera_curso_prerequisito: number;

  @Column()
  creditos: number;
}
