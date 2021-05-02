// pages/art-recommend/art-recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastX: 0,
    move: 110,
    opacity_tag: 1,
    opacity_right: 0,
    opacity_left: 0,
    pic_width: 327,
    ini_x: 210
  },
  handlemove(e) {
    let ini_x = this.data.ini_x;
    let curr_x = e.detail.x;
    let opacity_precent = (ini_x - curr_x) / ini_x;
    this.setData({
      opacity_left: 1 - opacity_precent,
      opacity_right: opacity_precent
    })
  },
  handletouchmove(e) {
    let move = this.data.move;
    let curr_x = e.touches[0].pageX;
    let move_dis = curr_x - this.data.lastX;
    if (move_dis < 0) {
      move_dis = 0 - move_dis;
    }
    let opacity_precent = move_dis / move;
    this.setData({
      opacity_tag: 1 - opacity_precent
    })
    if (move_dis > 220) {
      this.setData({
        pic_width: 110,
        opacity_right: opacity_precent
      })
    } else {
      this.setData({
        pic_width: 327 - move_dis,
        opacity_right: opacity_precent
      })
    }
  },
  handletouchstart: function (e) {
    // console.log(event)
    this.setData({
      lastX: e.touches[0].pageX
    })

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