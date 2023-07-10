// **** Functions **** //

import { Curso } from "@src/models/Curso";
import CursoRepository from "@src/repositories/CursoRepository";

/**
 * Get all users.
 */
function getAll(): Promise<Curso[]> {
  return CursoRepository.getAll();
}

// **** Export default **** //

export default {
  getAll,
} as const;
