import express from 'express';

const app = express();
app.listen(8000, () => {
  console.log(`server running on http://localhost:8000`);
});

app.get('/public/v1/urls', (req, res) => {
  res.json({ message: 'api running' });
});

app.get('/health', (req, res) => {
  res.json({ gezond: 'ja goed!' });
});

app.get('/metrics', (req, res) => {
  res.json({ prometheus: 'todo' });
});

app.get('/docs', (req, res) => {
  res.json({ openApi: 'todo' });
});