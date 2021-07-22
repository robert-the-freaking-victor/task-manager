import dotenv from "dotenv";
// load the env
dotenv.config();
import app from './app';
import RoutesAPI from './api/routes/index';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

RoutesAPI.runApi();