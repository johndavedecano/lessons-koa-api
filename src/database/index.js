import mongoose from 'mongoose';
import config from 'configuration';

mongoose.Promise = global.Promise;

const DATABASE_NAME = config.get('MONGO_DATABASE_NAME');
const DATABASE_URL = config.get('MONGO_DATABASE_URL');

/**
 * Create database connection.
 */
const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`);

    const connection = mongoose.connection;
    connection.on('error', reject);
    connection.on('open', resolve);
  });
};

export default {
  connect,
};
