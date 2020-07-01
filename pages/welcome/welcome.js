// pages/welcome/welcome.js
Page({
  onTapJump: function(event) {
    wx:wx.navigateTo({
      url: '../post/post',
      success: function(res) {
        console.log("Jump success")
      },
      fail: function(res) {
        console.log("Jump failed")
      },
      complete: function(res) {
        console.log("Jump complete")
      },
    })
  }
})