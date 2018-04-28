# CSS3 制作绕中轴旋转的立方体 #
利用了 CSS3 的animation keyframes 和 transform 3D特性实现。

## HTML结构 ##

``` html

    <div class="container">
        <div class="cubic">
            <div class="front"></div>
            <div class="back"></div>
            <div class="left"></div>
            <div class="right"></div>
            <div class="top"></div>
            <div class="bottom"></div>
        </div>
    </div>
```
立方体的六个面。

## 页面的静态布局 ##
给表示六个面的元素的父元素设置景深效果`perspective`、`perspective-origin`更改透视点的位置和设置子元素的3D效果`transform-style: preserve-3d;`，并给六个面设置绝对定位使之重叠在一起，方便各个面通过transform属性变换组织成立方体。

为了方便观察以及好看( **设置了perspective效果后，前面的面大，后面的面小，旋转起来看起来很奇怪，还没找到加了perspective效果后使六个面看起来一般大的方法【待解决】** )，暂时去掉了景深效果和透视点位置，改用transform的rotate方法手动设置一个视角，使立方体能看到六个面，而不是一个。

六个面的包裹元素`.cubic`css如下：

``` css

		.container .cubic {
	    width: 500px;
	    height: 500px;
	    position: relative;
	    display: flex;
	    /* 使cubic中的6个div水平、垂直居中*/
	    justify-content: center;
	    align-items: center;
	
	    /* 景深效果 */
	    /* perspective: 1000px;
	    -moz-perspective: 1000px;
	    -ms-perspective: 1000px;
	    -webkit-perspective: 1000px;
	    -moz-perspective: 1000px; */
	
	    /* 更改下透视点的位置 */
	    /* perspective-origin: 20% 20%; */
	
	    /* 子元素保持3D效果 */
	    transform-style: preserve-3d;
	    -webkit-transform-style: preserve-3d;
	    -moz-transform-style: preserve-3d;
	    -o-transform-style: preserve-3d;
	    -ms-transform-style: preserve-3d;
	
	    /* 方便观看立体效果 */
	    transform: rotateY(5deg) rotateX(-5deg);
	}
```
六个面的CSS布局如下：

``` css

	.container .cubic div {
	    width: 300px;
	    height: 300px;
	    position: absolute;
	    text-align: center;
	    line-height: 300px;
	    opacity: 0.5;
	}
	
	.front {
	    transform: translateZ(150px);
	    background: #F0FFF0;
	    perspective: 1000px;
	}
	
	.back {
	    transform: translateZ(-150px);
	    background: #FFC1C1;
	}
	
	.left {
	    transform: rotateY(-90deg) translateZ(150px);
	    background: #FFC125;
	
	}
	
	.right {
	    transform: rotateY(90deg) translateZ(150px);
	    background: #FF6A6A;
	
	}
	
	.top {
	    transform: rotateX(90deg) translateZ(-150px);
	    background: #EED2EE;
	
	}
	
	.bottom {
	    transform: rotateX(-90deg) translateZ(-150px);
	    background: #EEE9BF;
	
	}
```


**注意：** 元素旋转后坐标轴也会跟着旋转。

以下为CSS 3D坐标系，其中Z轴就是垂直于电脑屏幕的轴，正方向指向正在电脑面前的你，X轴就是左右，Y轴就是上下。

![3D坐标系](http://ou3oh86t1.bkt.clouddn.com/IFE-2018-CSS/3D%E5%9D%90%E6%A0%87%E7%B3%BB.jpg)


## hover绕中轴旋转 ##
静态布局好了立方体，接下来就是让立方体绕中轴旋转起来，通过`animation`动画实现，animation动画需要定义动画过程中的关键帧。

``` css

	/* 定义绕中轴旋转的关键帧 */
	@keyframes spin {
	    from {
	        transform: rotateY(5deg) rotateX(-5deg);
	    }
	    to {
	        transform: rotateY(365deg) rotateX(-5deg);
	    }
	}
```
接下来通过设置`.cubic`的的旋转动画实现立方体的旋转。

``` css

	/* 鼠标hover立方体时，立方体绕y轴旋转 */
	.container .cubic:hover {
	
	    animation: spin 4s linear both infinite;
	    -webkit-animation: spin 4s linear both infinite;
	    -moz-animation: spin 4s linear both infinite;
	    -o-animation: spin 4s linear both infinite;
	}
```
# [demo效果](http://shirley5li.me/IFE-2018-CSS/rotate_cubic/index.html) #

# 【关于以上待解决景深问题的解答】 #
首先，感谢 **[uni-zheng](https://github.com/uni-zheng)** 的issue，帮助我理解了关于景深设置的疑惑。重新修改了html结构和css样式。
html结构更新如下，在立方体外面再包裹一层设置景深景深效果：

``` html

    <div class="container">
        <div class="cubic-box"> <!-- 该层设置景深效果 -->
            <div class="cubic">
                <div class="front">front</div>
                <div class="back">back</div>
                <div class="left">left</div>
                <div class="right">right</div>
                <div class="top">top</div>
                <div class="bottom">bottom</div>
            </div>
        </div>
    </div>
```
css样式设置如下，这下可以加上景深效果了：

``` css

	.container .cubic-box {
	    /* 景深效果 */
	    perspective: 1000px;
	    -moz-perspective: 1000px;
	    -ms-perspective: 1000px;
	    -webkit-perspective: 1000px;
	    -moz-perspective: 1000px;
	
	    /* 更改下透视点的位置 */
	    perspective-origin: 50% 50%;
	}
	.container .cubic {
	    width: 500px;
	    height: 500px;
	    position: relative;
	    display: flex;
	    /* 使cubic中的6个div水平、垂直居中*/
	    justify-content: center;
	    align-items: center;
	    /* 子元素保持3D效果 */
	    transform-style: preserve-3d;
	    -webkit-transform-style: preserve-3d;
	    -moz-transform-style: preserve-3d;
	    -o-transform-style: preserve-3d;
	    -ms-transform-style: preserve-3d;
	}
```