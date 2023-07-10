import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import CursoProcess from "@src/processes/CursoProcess";
import { Request, Response } from "express";

async function getAll(_req: Request, res: Response): Promise<any> {
    try {
      const cursos = await CursoProcess.getAll();
      res.send(cursos);
    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Internal Server Error")
    }
}

export default {
  getAll,
} as const;
