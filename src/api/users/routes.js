import KoaRouter from 'koa-router';
import UserController from './controller';

const router = new KoaRouter();
const controller = new UserController();

router.post('/', async ctx => {
  const data = ctx.request.body;
  const user = await controller.store(data);
  ctx.body = user;
});

export default router.routes();
