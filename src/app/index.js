import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-morgan';
import responseTime from 'koa-response-time';

import api from './../api';
import config from './../configuration';
import database from './../database';

const app = new Koa();
app.use(responseTime());
app.use(logger('combined'));
app.use(bodyparser());
app.use(api.routes())
app.use(ctx => { ctx.type = 'json' })

export const start = async () => {
  try {
    await database.connect();
    console.log('Connected to MONGODB');
    await app.listen(config.get('PORT'));
    console.log(`Connected on port: http://localhost:${config.get('PORT')}`)
  } catch(error) {
    console.log(error.message);
  }
};