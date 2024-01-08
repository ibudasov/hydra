import express from 'express';

const promBundle = require('express-prom-bundle');
const metricsMiddleware = promBundle({ includeMethod: true });

const app = express();
app.use(metricsMiddleware);

app.listen(8000, () => {
  console.log(`server running on http://localhost:8000`);
});

app.get('/', (req, res) => {
  res.json({ werkt: 'ja!' });
});

app.get('/public/v1/urls', (req, res) => {
  res.json({ message: 'api running' });
});

app.get('/health', (req, res) => {
  res.json({ gezond: 'ja goed!' });
});


app.get('/docs', (req, res) => {
  res.json({ openApi: 'todo' });
});