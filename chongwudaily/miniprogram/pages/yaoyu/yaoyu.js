// miniprogram/pages/yaoyu/yaoyu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuan_popup: false,
    checked: false,
    fileList: [],
    chong_columns: ['张三', '李四', '王老五'],
    pai_columns: ['英特威',  '百斯特', '梅里亚', '妙三多', '辉瑞','富道', '维克'],
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

    fan_popup:false,
    fan_columns:['良好','不适'],

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

  openpai() {
    this.setData({
      pai_popup: true
    })
  },
  closepai() {
    this.setData({
      pai_popup: false
    })
  },
  pai_confirm(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },

  pai_cancel() {
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

  openfan() {
    this.setData({
      fan_popup: true
    })
  },
  closefan() {
    this.setData({
      fan_popup: false
    })
  },
  fan_confirm(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },

  fan_cancel() {
    Toast('取消');
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


  afterRead(event) {
    const {
      file
    } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
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