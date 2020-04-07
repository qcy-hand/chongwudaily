// miniprogram/pages/bianji_dang/bianji_tian.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [], //绑定已经上传的图片列表
    mao_cli: true,
    gou_cli: true,
    zi_cli: true,
    zhu_cli: true,
    yijue_cli: true,
    weijue_cli: true,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(), //时间选择
    nian_popup: false,
    maose_columns: ['白色', '黑色', '灰色', '褐色', '棕色', '黄色', '橘色', '蓝色', '灰白', '黑白', '黄白', '蓝白', '棕白', '黑褐', '黄褐', '黄红', '淡红', '三花', '玳瑁', ],
    maose_popup: false,
    pz_value: '',
    tz_value: '',
    mz_value: '',
    nian_popup: false
  },
//获取对应文件的临时地址
afterRead(event) {
  const {
    file
  } = event.detail;
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  wx.uploadFile({
    url: 'https://example.weixin.qq.com/upload', // 接口地址
    filePath: file.path,
    name: 'file',
    formData: {
      user: 'test'
    },
    success(res) {
      // 上传完成需要更新 fileList
      const {
        fileList = []
      } = this.data;
      fileList.push({
        ...file,
        url: res.data
      });
      this.setData({
        fileList
      });
    }
  });
},
changemao() {
  this.setData({
    mao_cli: false,
    gou_cli: true
  })
},
changegou() {
  this.setData({
    gou_cli: false,
    mao_cli: true
  })
},
changezi() {
  this.setData({
    zi_cli: false,
    zhu_cli: true
  })
},
changezhu() {
  this.setData({
    zhu_cli: false,
    zi_cli: true
  })
},
change_yi() {
  this.setData({
    yijue_cli: false,
    weijue_cli: true
  })
},
change_wei() {
  this.setData({
    weijue_cli: false,
    yijue_cli: true
  })
},
open_nian() {
  this.setData({
    nian_popup: true
  });
},
nianInput(event) {
  this.setData({
    currentDate: event.detail
  });
},

close_nian() {
  this.setData({
    nian_popup: false,
  });
},

open_maose() {
  this.setData({
    maose_popup: true
  });
},
close_maose() {
  this.setData({
    maose_popup: false,
  });
},

maose_confirm(event) {
  const {
    picker,
    value,
    index
  } = event.detail;
  Toast(`当前值：${value}, 当前索引：${index}`);
},

maose_cancel() {
  Toast('取消');
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