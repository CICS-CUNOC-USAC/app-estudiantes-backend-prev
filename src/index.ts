import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import server from "./server";
import { dataSource } from "./database/data-source";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
