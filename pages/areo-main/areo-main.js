// pages/areo-main/areo-main.js
let util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour: '',
    isDayTime: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hour = util.formatHour(new Date())
    this.setData({
      hour: hour
    })
    // 早上6点到晚上6点为白天
    if (hour >= 6 && hour < 12) {
      this.setData({
        isDayTime: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.isDayTime) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#b0d4f8',
        animation: {
          duration: 0,
          timingFunc: 'linear'
        },
        success: (result) => {

        },
        fail: () => { },
        complete: () => { }
      });
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#041746',
        animation: {
          duration: 0,
          timingFunc: 'linear'
        },
        success: (result) => {

        },
        fail: () => { },
        complete: () => { }
      });
    }
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