const express = require('express');
const { dbConnect } = require('./utils/db');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerSpec = require('./documentation/swagger.json');
require('dotenv').config();

const app = express();

app.disable('x-powered-by');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

const start = async () => {
  try {
    await dbConnect();
    const port = process.env.PORT ?? 4000;
    app.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { app, start };
