# CSS animation 制作 slider #
## 静态布局 ##
静态布局效果：

![静态布局效果](https://githubblogbucket1-1258277786.cos.ap-shanghai.myqcloud.com/IFE-2018-CSS/animation-slider-static.png)

其中html结构如下：

``` html

    <img src="https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image19.jpg" alt="" id="bg_img1">
    <img src="https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image20.jpg" alt="" id="bg_img2">
    <img src="https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image22.jpg" alt="" id="bg_img3">
    <img src="https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image26.jpg" alt="" id="bg_img4">
    <img src="https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image28.jpg" alt="" id="bg_img5">
    <div class="btns">
        <ul>
            <li><a href="#bg_img1"></a></li>
            <li><a href="#bg_img2"></a></li>
            <li><a href="#bg_img3"></a></li>
            <li><a href="#bg_img4"></a></li>
            <li><a href="#bg_img5"></a></li>
        </ul>
    </div>
```

其中5个img绝对定位，并且令其铺满整个屏幕，通过改变图片的`z-index`属性显示当前点击链接所对应的图片。5个a标签的背景图片分别设置为对应的img，注意要设置`<a>`标签的宽度和高度，不然即使设置了背景图片也无法显示。

**注意： `:target`选择器的使用**

URL 带有后面跟有锚名称 #，指向文档内某个具体的元素。这个被链接的元素就是目标元素。`:target` 选择器可用于选取当前活动的目标元素。

比如这里的`<a href="#bg_img1">`,当点击了该链接，`:target`就指向 `id="bg_img1"`的图片。

图片的`z-index`属性和动画就是通过`:target`选择器实现的，比如点击`id="bg_img2"`的图片对应的链接，通过设置当前活动的目标元素即`img#bg_img2`的opacity高于非活动元素图片的opacity，使当前活动元素图片显示出来。如下：

``` css

	img:target {
	    z-index: 3;
	}
	img:not(:target) {
	    z-index: 1;
	}
```

css布局如下：

``` css

	* {
	    margin: 0px;
	    padding: 0px;
	}
	
	body {
	    width: 100%;
	    height: 100%;
	    background:#FFF5EE;
	    overflow: hidden; /* 动画加了scale后，放大至2倍会撑破body出现滚动条 */
	}
	
	img {
	    position: absolute; /*使多张背景图片叠在一起*/
	    left: 0;
	    top: 0;
	    width: 100%; /*使每张背景图片铺满屏幕*/
	    height: 100%;
	}
	/* #bg-img1 {
	    z-index: 2;
	} */
	
	/* :target 用于选取当前活动的目标元素 */
	img:target {
	    z-index: 3;
	}
	img:not(:target) {
	    z-index: 1;
	}
	
	.btns {
	    width: 1100px;
	    height: 150px;
	    position: fixed;
	    left: 50%;
	    bottom: 50px;
	    transform: translateX(-50%);
	    z-index: 9999;
	}
	
	.btns ul {
	    list-style: none;
	    overflow: hidden;
	    width: 1100px;
	    height: 150px;
	}
	
	.btns ul li a {
	    margin: 0 5px; 
	    width: 200px; 
	    height: 150px; 
	    float: left; 
	    box-sizing: border-box; 
	    padding-top: 60px; 
	    border-radius: 10px; 
	}
	
	.btns ul li a:hover {
	    opacity: 0.8;
	}
	
	/* 给a标签设置背景图片，并设置背景图片的大小 */
	.btns ul li:nth-child(1) a { 
	    background-image: url(https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image19.jpg); 
	    background-size: 200px 150px; 
	}
	
	.btns ul li:nth-child(2) a { 
	    background-image: url(https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image20.jpg); 
	    background-size: 200px 150px; 
	}
	
	.btns ul li:nth-child(3) a { 
	    background-image: url(https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image22.jpg); 
	    background-size: 200px 150px; 
	}
	
	.btns ul li:nth-child(4) a { 
	    background-image: url(https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image26.jpg); 
	    background-size: 200px 150px; 
	}
	.btns ul li:nth-child(5) a { 
	    background-image: url(https://githubrepobucket1-1258277786.cos.ap-shanghai.myqcloud.com/%E7%80%91%E5%B8%83%E6%B5%81%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90/image28.jpg); 
	    background-size: 200px 150px;  
	}
```

**注意：** [nth-child和:nth-of-type之间的差异](http://www.zhangxinxu.com/wordpress/2011/06/css3%E9%80%89%E6%8B%A9%E5%99%A8nth-child%E5%92%8Cnth-of-type%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82/)

`:nth-of-type(n)` 选择器，匹配属于父元素的特定类型的第 N 个子元素的每个元素。

`:nth-child()` 选择器，该选择器选取父元素的第 N 个子元素，与类型无关。

## slider动画 ##
这里为了演示效果，简单处理，没做浏览器兼容性处理。动画设置如下：

``` css

	/* 设置点击链接时，链接背景图片所对应的img的动画效果，为了简略没作浏览器兼容处理 */
	#bg_img1:target {
	    animation: fromLeft 1s  ease-out;
	}
	
	#bg_img2:target {
	    animation: fromTop 500ms ease-out;
	}
	
	#bg_img3:target {
	    animation: scale2Big 1s ease-in;
	}
	
	#bg_img4:target {
	    animation: scale2Small 1s ease-out;
	}
	
	#bg_img5:target {
	    animation: rotate 700ms ease-in-out;
	}
	
	/* left -50% 到 left 0 */
	@keyframes fromLeft {
	    0% {
	        transform: translateX(-50%);
	    }
	  100% {
	        transform: translateX(0);
	    }
	}
	
	/* top -50% 到 top 0 */
	@keyframes fromTop {
	    0% {
	        transform: translateY(-50%);
	    }
	    100% {
	        transform: translateY(0);
	    }
	}
	
	/* scale 0.1 到 scale 1.0 */
	@keyframes scale2Big {
	    0% {
	        transform: scale(0.1);
	    }
	    100% {
	        transform: scale(1.0);
	    }
	}
	
	/* sacle 2.0 到 scale 1.0 */
	@keyframes scale2Small {
	    0% {
	        transform: scale(2.0);
	    }
	    100% {
	        transform: scale(1.0);
	    }
	}
	
	/* rotate -360 到 0; scale0.1 到 scale 1.0 */
	@keyframes rotate {
	    0% {
	        transform: rotate(-360deg) scale(0.1);
	    }
	    100% {
	        transform: rotate(0deg) scale(1.0);
	    }
	}
```

# [demo效果](http://shirley5li.me/IFE-2018-CSS/animation_slider/index.html) #

# 【待解决问题】 #
图片2即灰色猫猫的图片，要求是从`top:350px`位移到`top:0px`，但我使用以下动画形式时没有效果，图片只是抖了两下，并没有向上的移动效果，没有找到原因：

``` css

	/* top 350px 到 top 0 */
	@keyframes fromTop {
	    0% {
	        transform: translateY(350px);
	    }
	    100% {
	        transform: translateY(0px);
	    }
	}
```
但是很奇怪的是，从上向下使图片发生位移时，却有动画效果，即使用:

``` css

	/* top -50% 到 top 0 */
	@keyframes fromTop {
	    0% {
	        transform: translateY(-50%);
	    }
	    100% {
	        transform: translateY(0);
	    }
	}
```
感觉是跟之前的静态布局设置`height:100%`可能有关，但还没找到具体问题出在哪里，希望css熟练的小伙伴给与issue。

# 【问题解答】 #
再次谢谢[uni-zheng](https://github.com/uni-zheng)的issue，通过将img的绝对定位换成固定定位就可以了，改动如下：

``` css

	img {
	    position: fixed; /*使多张背景图片叠在一起*/
	    left: 0;
	    top: 0;
	    width: 100%; /*使每张背景图片铺满屏幕*/
	    height: 100%;
	}

	/* top 350px 到 top 0 */
	@keyframes fromTop {
	    0% {
	        transform: translateY(350px);
	    }
	    100% {
	        transform: translateY(0);
	    }
	}
```
