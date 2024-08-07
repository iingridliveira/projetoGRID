import express from "express";

import { testConnection } from "./src/database/connection.js";
import cors from "cors"
const app = express();
const port = 4979;
app.use(express.json());
app.use(cors({origin: "*"}))


app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)})