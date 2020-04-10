// miniprogram/pages/xizao_note/xizao_note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //倒计时
    time: 30 * 60 * 60 * 1000,
    timeData: {},

    //预览图
    fileList: [{
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        name: '图片1'
      },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'http://iph.href.lu/60x60?text=default',
        name: '图片2',
        isImage: true
      },
    ],

    //回调数组
    arrxizao: []
  },

  //倒计时
  onChange(e) {
    this.setData({
      timeData: e.detail
    });
  },

  //去编辑
  to_bianji: function () {
    wx.navigateTo({
      url: '../xizao_bian/xizao_bian'
    });
  },

  //去添加页
  to_xizao: function () {
    wx.navigateTo({
      url: '../xizao/xizao'
    })
  },
//取数据
Getinfo() {
  let that = this;
  wx.cloud.callFunction({
    name: "xizao_get",
    success(res) {
      that.setData({
        arrxizao: res.result.data,
      }, () => {
        wx.hideLoading();

        console.log(res.result.data);

      });
    },
    fail() {
      wx.hideLoading();
      wx.showToast({
        title: '加载错误，请稍后重试!',
        duration: 1000,
        icon: "none"
      })
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showLoading({
      title: "加载中...",
    });
    that.Getinfo();
    console.log('取到数据');
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