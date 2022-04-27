import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Token not provided, login is required' });

  const [_, token] = authorization.split(' ');

  try {
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = { id };
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: 'Token invalid' });
  }
};
