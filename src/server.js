import app from './app';

const url = process.env.APP_URL || 'http://localhost:';
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`${url}:${port}`);
});
