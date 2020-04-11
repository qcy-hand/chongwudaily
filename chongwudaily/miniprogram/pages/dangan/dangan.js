// miniprogram/pages/dangan/dangan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    //回调数组
    arrdang:[]
  },

  //档案页点击档案进入编辑页面
  to_bianji:function(){
    wx.navigateTo({
      url: '../dang_bianji/dang_bianji'
    });
  },
  
  //添加宠物档案
  to_jia: function () {
    wx.navigateTo({
      url: '../dang_tian/dang_tian'
    });
  },
//取数据
Getinfo() {
  let that = this;
  wx.cloud.callFunction({
    name: "dang_get",
    success(res) {
      that.setData({
        arrdang: res.result.data,
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