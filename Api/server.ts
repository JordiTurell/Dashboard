import express from "express";
import cors from "cors";
const dotenv = require('dotenv');
import { env } from "./config";

dotenv.config()
const app = express()

const PORT = env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-file-name']
}));

app.use(express.json());

//Imports Rutas
import loginRutas  from './routes/login-routes';


//RUTAS
app.use('/api/user', loginRutas);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});