import KoaRouter from 'koa-router';
import users from 'api/users/routes';

const router = new KoaRouter();

router.use('/users', users);

export default router;
