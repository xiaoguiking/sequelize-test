const seq = require("./seq.js")
require("./model.js")

seq
  .authenticate()
  .then(() => {
    console.log("database connect success")
  })
  .catch((err) => {
    console.log("database connect fail", err)
  })

// 执行同步
seq
  .sync({ force: true })
  .then(() => {
    console.log("sync success")
    process.exit()
  })
  .catch((err) => {
    console.log("sync err", err)
  })
