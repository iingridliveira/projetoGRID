import express from "express";
import { testConnection } from "./src/database/connection.js";
import {Routes} from "./src/routes/index.routes.js";

import cors from "cors"
const app = express();
const port = 4949;
app.use(express.json());
app.use(Routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
})
app.use(cors({origin: "*"}))


app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)})