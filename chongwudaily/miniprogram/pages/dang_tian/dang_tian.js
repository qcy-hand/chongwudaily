// miniprogram/pages/tianjia/tianjia.js

import Dialog from '@vant/weapp/dialog/dialog';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //绑定已经上传的图片列表
    fileList: [],

    // 种类
    cat: true,
    dog: true,
    kindtest: '',

    //性别
    zi_cli: true,
    zhu_cli: true,
    sextest: '',

    //绝育
    yijue_cli: true,
    weijue_cli: true,
    juetest: '',

    //出生日期
    nian_popup: false,
    currentDate: new Date().getTime(),
    minDate: new Date(2010, 10, 1).getTime(), //时间选择
    maxDate: new Date(2030, 10, 1).getTime(),
    birthday: "",

    //毛色
    maose_columns: ['白色', '黑色', '灰色', '褐色', '棕色', '黄色', '橘色', '蓝色', '灰白', '黑白', '黄白', '蓝白', '棕白', '黑褐', '黄褐', '黄红', '淡红', '三花', '玳瑁', ],
    maose_popup: false,
    color_mao: '',

    // 品种
    pz_value: '',

    //体重
    tz_value: '',

    //名字
    mz_value: '',

    //完成按钮禁用状态
    wancheng_jin: true,
    wancheng: false,

    //Push
    Timestamp: "", //时间戳 用于排序
  },

  //判断所有内容是否填完整，以启用按钮
  checking() {
    let that = this;
    if (that.data.kindtest !== "" && that.data.sextest !== "" && that.data.juetest !== "" && that.data.birthday !== "" && that.data.color_mao !== "" && that.data.pz_value !== "" && that.data.tz_value !== "" && that.data.mz_value !== "") {
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

  //猫猫
  changemao(event) {
    this.setData({
      cat: true,
      dog: false,
      kindtest: '1',
    }, () => {
      this.checking()
    })
  },

  // 狗狗
  changegou(event) {
    this.setData({
      dog: true,
      cat: false,
      kindtest: '1',
    }, () => {
      this.checking()
    })
  },

  // 王子
  changezi() {
    this.setData({
      zi_cli: true,
      zhu_cli: false,
      sextest: '1'
    }, () => {
      this.checking()
    })
  },

  //公主
  changezhu() {
    this.setData({
      zhu_cli: true,
      zi_cli: false,
      sextest: '1',
    }, () => {
      this.checking()
    })
  },

  // 已绝育
  change_yi() {
    this.setData({
      yijue_cli: true,
      weijue_cli: false,
      juetest: '1',
    }, () => {
      this.checking()
    })
  },

  //未绝育
  change_wei() {
    this.setData({
      weijue_cli: true,
      yijue_cli: false,
      juetest: '1'
    }, () => {
      this.checking()
    })
  },

  // 出生日期
  open_nian() {
    this.setData({
      nian_popup: true
    });
  },

  close_nian() {
    this.setData({
      nian_popup: false,
    });
  },

  nian_confirm(event) {
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
        return y + "-" + (m < 10 ? "0" + m : m);
      }
      that.setData({
        nian_popup: false,
        birthday: getdate(a)
      }, () => {
        that.checking()
      });
    }
  },

  // 毛色
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
    this.setData({
      maose_popup: false,
      color_mao: event.detail.value,
    }, () => {
      this.checking()
      console.log(event.detail.value);
    });
  },

  //品种
  Input_pz(event) {
    this.setData({
      pz_value: event.detail,
    }, () => {
      this.checking()
      console.log(event.detail)
    })
  },

  //体重
  Input_tz(event) {
    this.setData({
      tz_value: event.detail,
    }, () => {
      this.checking()
      console.log(event.detail)
    })
  },

  //名字
  Input_mz(event) {
    this.setData({
      mz_value: event.detail,
    }, () => {
      this.checking()
      console.log(event.detail)
    })
  },



  //传值
  Push() {
    let that = this
    //向数据库传数据
    wx.cloud.callFunction({
      name: 'dang_send',
      data: {
        type: 'dang',
        cat: that.data.cat,
        dog: that.data.dog,
        zi_cli: that.data.zi_cli,
        zhu_cli: that.data.zhu_cli,
        yijue_cli: that.data.yijue_cli,
        weijue_cli: that.data.weijue_cli,
        birthday: that.data.birthday,
        color_mao: that.data.color_mao,
        pz_value: that.data.pz_value,
        tz_value: that.data.tz_value,
        mz_value: that.data.mz_value,
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
  to_dangan: function () {
    wx.switchTab({
      url: '../dangan/dangan'
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
      that.to_dangan(); //回dangan页
      console.log('note');
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
  onReady: function () {},

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