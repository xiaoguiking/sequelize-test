const { User } = require("./model");

async function update() {
  try {
    const updateUser = await User.update(
      {
        password: "nick",
      },
      {
        where: {
          id: 9,
        },
      }
    );
    console.log(updateUser[0], "大于0修改成功");
  } catch (error) {
    console.log(error);
  }
}

update();
