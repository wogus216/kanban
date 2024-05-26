require('dotenv').config();

module.exports = {
  mongodb_name: process.env.MONGODB_NAME,
  mongodb_user: process.env.MONGODB_USER,
  mongodb_password: process.env.MONGODB_PASSWORD,
  mongodb_url: process.env.MONGODB_URL,
};
