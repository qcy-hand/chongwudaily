// miniprogram/pages/tijian_bian/tijian_bian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuan_popup: false,
    checked: false,
    fileList: [],
    chong_columns: ['张三', '李四', '王老五'],
    pai_columns: ['常规检查',  '血液检查', '粪便检查', 'X光检查', '超声检查','尿液检查'],
    zhu_popup:false,
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2030, 10, 1).getTime(),
    currentDate: new Date().getTime(),
   
    fan_popup:false,
    fan_columns:['良好','一般','不适'],

    xia_popup: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})