// pages/test/test.js
// canvas.js

import Scratch from '../../utils/scratch.js'


Page({

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let This = this;
    new Scratch(This, {
      canvasId: 'canvas-demo1',
      width: 124,
      height: 120,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5,
    })
    new Scratch(This, {
      canvasId: 'canvas-demo2',
      width: 195,
      height: 185,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5,
    })
    new Scratch(This, {
      canvasId: 'canvas-demo3',
      width: 108,
      height: 150,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5,
    })
    new Scratch(This, {
      canvasId: 'canvas-demo4',
      width: 230,
      height: 250,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5,
    })
    new Scratch(This, {
      canvasId: 'canvas-demo5',
      width: 200,
      height: 195,
      maskColor: '#F0F0F0',
      //size:15,
      //scale:1,
      scale: .5,
    })
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
