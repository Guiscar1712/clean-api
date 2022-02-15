import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import routes from '../Routes/Index'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../Shared/Docs/swagger.json';
import Database from '../Data/Remote/Database';

dotenv.config();
const PORT = process.env.PORT || 3000;
 
const app = express();

const database = new Database()

database.connect()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  app.use(cors());

  console.time('Request');
  console.log(`Método ${req.method}; URL ${req.url}; IP ${req.ip}`);

  if(res.connection !== null) {
      res.connection.setTimeout(120000);
  }

  next();

  console.timeEnd('Request');
});

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`)
});
 
export default app;