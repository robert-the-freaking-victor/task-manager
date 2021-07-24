import dotenv from "dotenv";
// load the env
dotenv.config();
import app from './app';
import RoutesAPI from './api/routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';

app.use(cors({origin: '*', methods: ['GET','POST','DELETE','UPDATE','PUT']}));
app.use(bodyParser.json());


RoutesAPI.runApi();