const { User, Blog } = require("./model");

async function createUser() {
  const John = await User.create({
    userName: "John",
    password: "123456",
    nickName: "john",
  });
  // console.log(John.toJSON());
  const nick = await User.create({
    userName: "nick",
    password: "123456",
    nickName: "nick",
  });
  // console.log(nick.toJSON());
  const blog = await Blog.create({
    title: "title1",
    content: "content1",
    userId: 1,
  });
  const blog2 = await Blog.create({
    title: "title2",
    content: "content2",
    userId: 2,
  });
  const blog3 = await Blog.create({
    title: "title3",
    content: "content3",
    userId: 2,
  });
  const blog4 = await Blog.create({
    title: "title4",
    content: "content4",
    userId: 2,
  });
}
createUser();
