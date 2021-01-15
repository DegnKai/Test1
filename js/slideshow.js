window.onload = function () {
    var wrap = document.getElementById('wrap'),
        right = document.getElementById('right'),
        left = document.getElementById('left'),
        pic = document.getElementById('pic').getElementsByTagName("li"),
        list = document.getElementById('list').getElementsByTagName('li'),
        index = 0,
        timer = null;

    // 定义并调用自动播放函数
    timer = setInterval(autoPlay, 2000);
    function autoPlay() {
        if (++index >= pic.length) index = 0;
        changePic(index);
    }
    // 鼠标划过时停止自动播放
    wrap.onmouseover = function () {
        clearInterval(timer);
    }

    // 鼠标离开时继续播放至下一张
    wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    }
    // 遍历标签实现划过切换对应图片
    for (var i = 0; i < list.length; i++) {
        list[i].index = i
        list[i].onmouseover = function () {
            console.log(this.index);
            changePic(this.index);
            index=this.index  //索引重新赋值
        };
    };

    // 鼠标点击切换下一张
    right.onclick = function () {
        index++;
        if (index >= pic.length) index = 0;
        changePic(index);
    }
    // 鼠标点击切换上一张
    left.onclick = function () {
        index--;
        if (index < 0) index = 4;
        changePic(index);
    }
    // 定义图片切换函数
    function changePic(curIndex) {
        for (var i = 0; i < pic.length; i++) {
            pic[i].style.display = "none";
            list[i].className = "";
        }
        pic[curIndex].style.display = "block";
        list[curIndex].className = "on";
    }

};