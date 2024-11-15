const Sequelize = require("sequelize");
const conf = {
  host: "localhost",
  dialect: "mysql",
};
// 线上环境使用连接池
// const pool = {
//   max: 5,
//   min: 0,
//   // idle: 10000, // 如果一个连接池 10s 内没有被使用，则释放
//   idle: 10000,
// };
const seq = new Sequelize("weibo_db", "root", "123456", conf);

module.exports = seq;

// 测试链接
seq
  .authenticate()
  .then(() => {
    console.log("database connect success");
  })
  .catch((err) => {
    console.log("database connect fail", err);
  });
