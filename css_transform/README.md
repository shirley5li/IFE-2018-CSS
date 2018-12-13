# 页面基本布局 #

1.使文字在div中水平、垂直居中的方法：

**(1)**  `text-align:center` 设置水平居中，`line-height:div高度` 设置垂直居中。

<del>(2) `text-align:center`设置水平居中，`vertical-align:middle` 设置垂直居中。</del>

自己试了下，第二种方法没用，所以还是使用第一种方法吧！

# CSS3 2D转换 #

能够对元素进行移动、缩放、转动、拉长或拉伸。

## 新的转换属性 ##

`transform` : 向元素应用 2D 或 3D 转换。

`transform-origin`: 允许你改变被转换元素的位置。

## 2D transform方法 ##

`translate(x,y)`: 沿着 X 和 Y 轴移动元素。

`translateX(n)`: 沿着 X 轴移动元素。

`scale(x,y)`: 缩放转换，改变元素的宽度和高度。

`scaleX(n)`: 缩放转换，改变元素的宽度。

`rotate(angle)`: 旋转，在参数中规定角度。

`skew(x-angle,y-angle)`: 倾斜转换，沿着 X 和 Y 轴。

`skewX(angle)`: 倾斜转换，沿着 X 轴。

## 浏览器兼容性 ##

	div
	{
	transform: rotate(30deg);
	-ms-transform: rotate(30deg);		/* IE 9 */
	-webkit-transform: rotate(30deg);	/* Safari and Chrome */
	-o-transform: rotate(30deg);		/* Opera */
	-moz-transform: rotate(30deg);		/* Firefox */
	}


# [demo效果](http://shirley5li.me/IFE-2018-CSS/css_transform/index.html) #

![css 2d transform](https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/IFE-2018-CSS/css%202d%20transform.png)

上述box对应的transform方法为：

``` css

	#box1 {
	    transform: skewX(30deg); /* 向左倾斜30度 */
	    -ms-transform: skewX(30deg);
	    -webkit-transform: skewX(30deg);
	    -o-transform: skewX(30deg);
	    -moz-transform: skewX(30deg);
	
	}
	
	#box2 {
	    transform: scaleX(0.5); /* 压缩2倍 */
	    -ms-transform: scaleX(0.5);
	    -webkit-transform: scaleX(0.5);
	    -o-transform: scaleX(0.5);
	    -moz-transform: scaleX(0.5);
	}
	
	#box3 {
	    transform: rotate(45deg); /* 旋转45度 */
	    -ms-transform: rotate(45deg);
	    -webkit-transform: rotate(45deg);
	    -o-transform: rotate(45deg);
	    -moz-transform: rotate(45deg);
	}
	
	#box4 {
	    transform: translate(10px, 20px); /* x轴移动10px. y轴移动20px*/
	    -ms-transform: translate(10px, 20px);
	    -webkit-transform: translate(10px, 20px);
	    -o-transform: translate(10px, 20px);
	    -moz-transform: translate(10px, 20px);
	}
	
	#box5 {
	    transform: skewX(30deg) scaleX(0.5) rotate(45deg) translate(10px, 20px); /* 同时具备上述特点*/
	    -ms-transform: skewX(30deg) scaleX(0.5) rotate(45deg) translate(10px, 20px);
	    -webkit-transform: skewX(30deg) scaleX(0.5) rotate(45deg) translate(10px, 20px);
	    -o-transform: skewX(30deg) scaleX(0.5) rotate(45deg) translate(10px, 20px);
	    -moz-transform: skewX(30deg) scaleX(0.5) rotate(45deg) translate(10px, 20px);
	}
```