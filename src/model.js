const sequelize = require("sequelize");
const seq = require("./seq.js");

// 创建User模型,  user 对应的实际表名为users
const User = seq.define("user", {
  userName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  nickName: {
    type: sequelize.STRING,
    allowNull: false,
    // 注释
    comment: "昵称",
  },
  // 自动创建 createdAt 和 updatedAt 字段
});

const Blog = seq.define("blog", {
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  //  外键
  userId: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
});

// 外键关联 级联删除
Blog.belongsTo(User, {
  // Blog 表中的userId字段关联到User表中的id字段
  foreignKey: "userId",
});

User.hasMany(Blog, {
  foreignKey: "userId",
});

module.exports = {
  User,
  Blog,
};
