import express, { urlencoded } from 'express'
import router from './routes.js';
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(morgan("dev"));

app.use(router);

app.listen(3000);