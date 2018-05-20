const config = require('config');

const get = key => {
  return process.env[key] || config[key];
};

export default {
  get,
};
