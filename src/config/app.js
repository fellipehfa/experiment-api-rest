const url = process.env.APP_URL || 'http://localhost';
const port = process.env.APP_PORT || 3000;

export default {
  url: `${url}:${port}`,
};
