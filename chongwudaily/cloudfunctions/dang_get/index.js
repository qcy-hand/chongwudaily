// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "chongwuyun-wwxon"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const {
    OPENID
  } = cloud.getWXContext()
  const {
    currentPage,
  } = event //=== const currentPage = event.currentPage
  return await db.collection('datas').where({
      type: "dang",
      openid: OPENID,
    }).orderBy('Timestamp', 'desc')
    .limit(10)
    .skip(10 * currentPage) //skip跳过
    .get({
      success(res) {
        console.log(res);
      }
    })
}