const mongoose = require('mongoose');
const { errors } = require('./errors');

// 주석 해제 시 사용
// const config = require('../config/dbConfig');
// const cwr = require('./createWebResp'); // 주석 해제

// 주석 해제 시 사용
// const MONGODB_NAME = config.mongodb_name || 'kanban';
// const MONGODB_USER = config.mongodb_user;
// const MONGODB_PASSWORD = config.mongodb_password;
// const MONGODB_URL = config.mongodb_url || 'localhost:27017/';

const connect = async (DB_URI) => {
  if (mongoose.connection.readyState) {
    return mongoose.connection;
  } else {
    try {
      const connection = await mongoose.connect(DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName: 'kanban', // 데이터베이스 이름 명시
      });
      console.log('Success DB Connection');
      return connection;
    } catch (err) {
      console.error('Connection error:', err);
      throw err;
    }
  }
};

exports.connectDB = async () => {
  // 주석 해제 시 사용
  // const DB_URI = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_NAME}`;
  const DB_URI = `mongodb://localhost:27017/kanban`; // DB URI 확인
  console.log('DB URI:', DB_URI);

  try {
    await connect(DB_URI);
    console.log('MongoDB가 연결되었습니다.');
  } catch (error) {
    console.error('E0000 - DB 연결 오류:', error);
  }
};

// middleWare 사용
exports.tryConDB = async (req, res, next) => {
  try {
    await exports.connectDB();
    next();
  } catch (error) {
    // 주석 해제 시 사용
    // cwr.errorWebResp(res, 500, errors.E11000, error);
    res.status(500).json({ message: 'Database connection error' });
  }
};

exports.close = () => {
  mongoose.connection.close();
};
