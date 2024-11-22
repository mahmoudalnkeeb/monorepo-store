const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { env } = require('core/configs');
const envConfig = require('./configs/env.cfg');
const { default: helmet } = require('helmet');
const { rateLimit, notfound, errorHandler } = require('shared/middlewares');

const app = express();

if (env.NODE_ENV === 'development') {
  console.log('--- DEVELOPMENT MODE ---');
  console.log('core env:', env);
  console.log('app env:', envConfig);
  console.log('------------------------');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -- CORS
app.use(helmet());
app.use(cors({ origin: env.cors.origin }));

app.use(rateLimit(100));
app.use(routes);

app.use(notfound);
app.use(errorHandler);

const port = envConfig.app.port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
