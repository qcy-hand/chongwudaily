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
        cat: event.cat,
        dog: event.dog,
        zi_cli:event.zi_cli,
        zhu_cli:event.zhu_cli,
        yijue_cli:event.yijue_cli,
        weijue_cli:event.weijue_cli,
        birthday:event.birthday,
        color_mao:event.color_mao,
        pz_value:event.pz_value,
        tz_value:event.tz_value,
        mz_value:event.mz_value,
        Timestamp: event.Timestamp,
        openid: wxContext.OPENID,
      }
    })
  } catch (e) {
    console.log(e)
  }
}