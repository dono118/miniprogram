class DBPost {
  constructor(postId) {
    this.storageKeyName = "postList"; //所有的文章本地缓存存储键值
    this.postId = postId;
  }

  //得到全部信息
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require("../data/data.js").postDataList;
      this.execSetStorageSync(res);
    }
    return res;
  }

  //本地缓存 保存/更新
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }

  //获取指定id号的文章数据
  getPostItemById() {
    var postData = this.getAllPostData();
    var len = postData.length;
    for (var i = 0; i < len; i++) {
      if (postData[i].postId == this.postId) {
        return {
          index: i,
          data: postData[i]
        }
      }
    }
  }

  //收藏文章
  collect() {
    return this.updatePostData('collect')
  }

  //点赞或取消点赞
  up(){
    return this.updatePostData('up')
  }

  //更新本地的点赞、评论信息、收藏、阅读量
  updatePostData(category) {
    var itemData = this.getPostItemById(),
      postData = itemData.data,
      allPostData = this.getAllPostData();
    switch (category) {
      case 'collect':
        //处理收藏
        if (!postData.collectionStatus) {
          //如果当前状态是未收藏
          postData.collectionNum++;
          postData.collectionStatus = true;
        } else {
          //如果当前状态是已收藏
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;
      case 'up':
        if(!postData.upStatus){
          postData.upNum++;
          postData.upStatus=true;
        }else{
          postData.upNum--;
          postData.upStatus=false;
        }
        break;
      default:
        break;
    }
    //更新缓存数据库  
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }
}

export {
  DBPost
}