var video = require('../../video.js');
Page({
    data: {
    },
    onLoad() {
        var rightVideoList = [];
        var leftVideoList = [];
        for (var i = 0; i < video.dataList.length;i++){
            if(i%2==0){
                leftVideoList.push(video.dataList[i]);
            }else{
                rightVideoList.push(video.dataList[i]);
            }
        }
        this.setData({
            rightVideoList: rightVideoList,
            leftVideoList: leftVideoList
        });
    }
});
