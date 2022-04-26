import { Router } from 'express';
import home from '../controllers/Home';

const router = new Router();

router.get('/', home.list);

export default router;
