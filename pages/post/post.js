// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postList = [{
      obj:{
        date: "Jan 14 2019",
      },
      title: "小时候的冰棍儿与雪糕",
      postImg: "../images/post/post-4.jpg",
      avatar: "../images/avatar/avatar-1.png",
      content: "冰棍与雪糕绝对不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的 冰棍儿就像现在的老冰棒。时过境迁，...",
      collectNum: { array: [108] },
      messageNum: 56,
      readingNum: 23,
    },
      {
        obj:{
          date: "Jan 31 2019",
        },
        title: "最爱的女孩",
        postImg: "../images/post/post-5.jpg",
        avatar: "../images/avatar/avatar-1.png",
        content: "就让往事随风就随风，心随你动...",
        collectNum: { array: [356] },
        messageNum: 234,
        readingNum: 58,
      },
        {
          obj:{
            date: "May 14 2019",
          },
          title: "Eason 出新歌",
          postImg: "../images/post/post-6.jpeg",
          avatar: "../images/avatar/avatar-1.png",
          content: "如果那两字没有颤动...",
          collectNum: { array: [10051] },
          messageNum: 7896,
          readingNum: 123,
        }]
    this.setData({
      postDataList: postList
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