import User from './model';

export default class UserController {
  async store(data) {
    console.log(data);
    return await User.create(data);
  }
}
