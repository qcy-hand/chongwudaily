// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "chongwuyun-wwxon"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event)
  try {
    return await db.collection('datas').add({
      data: {
        type: event.type,
        xuan_chong: event.xuan_chong,
        yao_time: event.yao_time,
        fan_hou: event.fan_hou,
        xia_time: event.xia_time,
        id_pai: event.id_pai,
        Timestamp: event.Timestamp,
        openid: wxContext.OPENID,
      }
    })
  } catch (e) {
    console.log(e)
  }
}