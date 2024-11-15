const { Blog, User } = require("./model");

async function select() {
  try {
    // 指定查询字段
    // const john = await User.findOne({
    //   where: {
    //     userName: "John",
    //   },
    // });
    // 指定查询显示的字段
    // const john1 = await User.findOne({
    //   attributes: ["userName", "nickName"],
    //   where: {
    //     userName: "John",
    //   },
    // });
    // console.log("john1", john1.dataValues);
    // 查询所有
    // const users = await User.findAll();
    // 查询 nick 的所有博客
    // const nickBlogList = await Blog.findAll({
    //   where: {
    //     userId: 2,
    //   },
    //   order: [["id", "desc"]],
    // });
    // console.log(
    //   "nickBlogList:",
    //   nickBlogList.map((item) => item.dataValues)
    // );
    //分页
    // const blogPageList = await Blog.findAll({
    //   limit: 2, // 显示查询两条
    //   offset: 2,
    //   order: [["id", "desc"]],
    // });
    // console.log(
    //   "blogPageList:",
    //   blogPageList.map((blog) => blog.dataValues)
    // );
    // 查询总数
    // const blogCount = await Blog.findAndCountAll({
    //   limit: 2,
    //   offset: 2,
    //   order: [["id", "desc"]],
    // });
    // console.log("blogCount:", blogCount.count);
    // 连表查询1
    // const blogListWithUser = await Blog.findAndCountAll({
    //   order: [["id", "desc"]],
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["userName", "nickName"],
    //       where: {
    //         userName: "John",
    //       },
    //     },
    //   ],
    // });
    // console.log(
    //   "blogListWithUser:",
    //   blogListWithUser.count,
    //   blogListWithUser.rows.map((blog) => {
    //     const blogList = blog.dataValues;
    //     blogList.user = blog.user.dataValues;
    //     return blogList;
    //   })
    // );
    // 连表查询2
    const userListWithBlog = await User.findAndCountAll({
      attributes: ["userName", "nickName"],
      include: {
        model: Blog,
      },
    });
    // console.log("userListWithBlog:", userListWithBlog.count);

    const userListData = userListWithBlog.rows.map((user) => {
      const userList = user.dataValues;
      userList.blogs = userList.blogs.map((blog) => blog.dataValues).filter((blog) => blog !== undefined);
      return userList;
    });

    userListData.forEach((element) => {
      console.log(element);
    });

    // console.log("userListWithBlog:", userListData);
  } catch (error) {
    console.log(error);
  }
}
select();
