// miniprogram/pages/meirong/meirong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuan_popup: false,
    checked: false,
    chong_columns: ['张三', '李四', '王老五'],
    zhu_popup:false,
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    currentDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },

    xia_popup: false,
  },

  openchong() {
    this.setData({
      xuan_popup: true
    })
  },
  closechong() {
    this.setData({
      xuan_popup: false
    })
  },
  chong_confirm(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },

  chong_cancel() {
    Toast('取消');
  },

  openzhu() {
    this.setData({
      zhu_popup: true
    })
  },
  closezhu() {
    this.setData({
      zhu_popup: false
    })
  },
  zhu_confirm(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },

  zhu_cancel() {
    Toast('取消');
  },
  zhuInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },


  openxia() {
    this.setData({
      xia_popup: true
    })
  },
  closexia() {
    this.setData({
      xia_popup: false
    })
  },
  xia_confirm(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },

  xia_cancel() {
    Toast('取消');
  },
  xiaInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },

  oChange(event) {
    this.setData({
      checked: event.detail
    });
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