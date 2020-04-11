// miniprogram/pages/yimiao/yimiao.js
import Dialog from '@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选择
    xuan_popup: false,
    xuan_chong: "",
    chong_columns: ['张三', '李四', '王老五'],

    // 注射
    zhu_popup: false,
    zhu_time: "",
    minHour: 10,
    maxHour: 20,
    zhu_minDate: new Date(2010, 10, 1).getTime(),
    zhu_maxDate: new Date(2030, 10, 1).getTime(),
    zhu_currentDate: new Date().getTime(),

    //反应
    fan_popup: false,
    fan_columns: ['良好', '一般', '不适'],
    fan_zhu: "",

    //下次
    xia_popup: false,
    xia_time: "", //下次时间
    xia_minDate: new Date().getTime(),
    xia_maxDate: new Date(2030, 10, 1).getTime(),
    xia_currentDate: new Date().getTime(),

    //品牌
    id_pai: "", //输入的品牌

    //添加图片
    fileList: [],

    //提醒
    checked: false,

    //完成按钮禁用状态
    wancheng_jin: true,
    wancheng: false,

    //Push
    Timestamp: "", //时间戳 用于排序
  },

  //判断所有内容是否填完整，以启用按钮
  checking() {
    let that = this;
    if (that.data.xuan_chong !== "" && that.data.zhu_time !== "" && that.data.fan_zhu !== "" && that.data.xia_time !== "" && that.data.id_pai !== "") {
      that.setData({
        wancheng_jin: false,
        wancheng: true
      }, () => {
        console.log('内容已填满')
      });

    } else {
      that.setData({
        wancheng_jin: true,
        wancheng: false
      }, () => {
        console.log('内容未填满')
      });
    }
  },

  //选择宠物
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

    this.setData({
      xuan_popup: false,
      xuan_chong: event.detail.value,
    }, () => {
      // console.log(event.detail.value)
      this.checking()
    });
  },

  //注射时间
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
    if (event.type == 'input') {
      return
    } else {
      var a = event.detail
      console.log(event)
      let that = this

      function getDate(a) {
        var now = new Date(a),
          y = now.getFullYear(),
          m = now.getMonth() + 1,
          d = now.getDate(),
          h = now.getHours(),
          n = now.getMinutes()
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + (h < 10 ? "0" + h : h) + ":" + (n < 10 ? "0" + n : n);
      }
      that.setData({
        zhu_popup: false,
        zhu_time: getDate(a)
      }, () => {
        that.checking()
      });
    }
  },

  //注后反应
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
    this.setData({
      fan_popup: false,
      fan_zhu: '反应' + event.detail.value,
    }, () => {
      this.checking()
      console.log(event.detail.value)
    });
  },

  //下次时间
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
    if (event.type == 'input') {
      return
    } else {
      var a = event.detail
      let that = this

      function getdate(a) {
        var now = new Date(a),
          y = now.getFullYear(),
          m = now.getMonth() + 1,
          d = now.getDate(),
          h = now.getHours(),
          n = now.getMinutes()
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + (h < 10 ? "0" + h : h) + ":" + (n < 10 ? "0" + n : n);
      }
      that.setData({
        xia_popup: false,
        xia_time: getdate(a)
      }, () => {
        that.checking()
      });
    }
  },

  // 疫苗品牌
  Input_pai(event) {
    this.setData({
      id_pai: event.detail,
    }, () => {
      this.checking()
      console.log(event.detail)
    })
  },

  //添加图片
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

  //提醒
  oChange(event) {
    this.setData({
      checked: event.detail
    });
  },

  //传值
  Push() {
    let that = this
    //向数据库传数据
    wx.cloud.callFunction({
      name: 'yimiao_send',
      data: {
        type: 'yimiao',
        xuan_chong: that.data.xuan_chong,
        zhu_time: that.data.zhu_time,
        fan_zhu: that.data.fan_zhu,
        xia_time: that.data.xia_time,
        id_pai: that.data.id_pai,
        Timestamp: new Date().getTime(),
      },
      success(res) {
        console.log(res);
      },
      fail() {
        wx.showToast({
          title: '系统错误，请稍后重试!',
          duration: 1000,
          icon: "none"
        })
      }
    })
  },


  //回note页
  to_note: function () {
    wx.navigateTo({
      url: '../yimiao_note/yimiao_note'
    })
  },

  //完成——提交
  push_wan() {
    let that = this;
    Dialog.confirm({
      message: '填好啦？',
      closeOnClickOverlay: true,
      cancelButtonText: "再瞅瞅",
      confirmButtonText: "嗯呐"
    }).then(() => {
      console.log('已点击确定');
      that.Push(); //调用传值函数
      that.to_note();//回note页
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
      });
    }).catch(() => {
      console.log('已点击取消');
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