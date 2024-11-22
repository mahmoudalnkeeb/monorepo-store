const { Router } = require('express');
const apiRouter = require('./api');

const router = Router();
const apiVersion = process.env.API_VERSION || 'v1';

router.use(`/api/${apiVersion}`, apiRouter);

module.exports = router;
