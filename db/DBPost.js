class DBPost {
  constructor() {
    this.storageKeyName = "postList"; //所有的文章本地缓存存储键值
  }
}

DBPost.prototype = {
  //得到全部信息
  getAllPostData: function () {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require("../data/data.js").postDataList;
      this.execSetStorageSync(res);
    }
    return res;
  },

  //本地缓存 保存/更新
  execSetStorageSync: function (data) {
    wx.setStorageSync(this.storageKeyName, data);
  },
}

export const _DBPost = DBPost;