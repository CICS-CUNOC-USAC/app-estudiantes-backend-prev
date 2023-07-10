// **** Functions **** //

import { dataSource } from "@src/database/data-source";
import { Curso } from "@src/models/Curso";

/**
 * Get all users.
 */
function getAll(): Promise<Curso[]> {
  return dataSource.getRepository(Curso).find();
}

// **** Export default **** //

export default {
  getAll,
} as const;
