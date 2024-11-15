const { User, Blog } = require("./model");

async function deleteData() {
  try {
    const del = await User.destroy({
      where: {
        id: 4,
      },
    });
    console.log(del, "大于0修改成功");
  } catch (error) {
    console.log(error);
  }
}

deleteData();
