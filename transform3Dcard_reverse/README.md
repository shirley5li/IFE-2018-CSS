# CSS3 3D 转换 #

## 3D 转换属性 ##
`transform`: 向元素应用 2D 或 3D 转换。

`transform-origin`: 允许你改变被转换元素的位置。

`transform-style`： 规定被嵌套元素如何在 3D 空间中显示。`transform-style: flat|preserve-3d;`->子元素将不保留/保留其 3D 位置

`perspective`:  	规定 3D 元素的透视效果。

`perspective-origin`: 规定 3D 元素的底部位置。

`backface-visibility`: 定义元素在不面对屏幕时是否可见。

## transform 3D属性 对应的方法 ##
`matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)`: 定义 3D 转换，使用 16 个值的 4x4 矩阵。

`translate3d(x,y,z)`: 定义 3D 转换。

`translateZ(z)`: 定义 3D 转换，只是用 Z 轴的值。

`scale3d(x,y,z)`: 定义 3D 缩放转换。

`scaleZ(z)`: 通过设置 Z 轴的值来定义 3D 缩放转换。

`rotate3d(x,y,z,angle)`:  定义 3D 旋转。

`rotateZ(angle)`:  	定义沿着 Z 轴的 3D 旋转。

`perspective(n)`:  	为 3D 转换元素定义透视视图。

# CSS 3D transform实现卡片翻转特效 #
涉及 CSS 3D transform实现卡片翻转特效，CSS 伪元素触发过渡效果， CSS transform 各项子属性。

1、 想实现3d效果需要在两张图片的包裹元素上加上视角景深 `perspective: 800px；`，不然旋转看起来十分呆板，不自然。如下：

``` css

	.container {
	    width: 500px;
	    height: 500px;
	    margin: 200px auto;
	    background: #FFE4E1;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    /* 3d效果加上需要加景深 */
	    perspective: 800px;
	}
```

2、`backface-visibility: hidden`  定义元素在不面对屏幕时是否可见, 这个属性的作用就是翻转过去的内容被隐藏了，所以我们只能看到一个面的内容。

3、使用绝对定位，使两张图片脱离文档流重叠在一起，但由于绝对定位后，后一张图片覆盖掉了前一张图片，所以将后一张图片先旋转180度，将前一张图片显现出来。

4、通过rotateY方法实现图片的前后旋转效果。具体css实现如下：

``` css

	/* 在前面一层的图片 */
	.front {
	    position: absolute; /* 绝对定位使两张图片叠在一起 */
	    backface-visibility: hidden;
	    transition: transform ease-in 1s;
	}
	
	/* 在背面一层的图片 */
	.reverse {
	    position: absolute;
	    backface-visibility: hidden;
	    transform: rotateY(180deg); /* 绝对定位后，背面一张图片会覆盖前面一层的图片，因此旋转180度将前面的图片显示出来 */
	    transition: transform ease-in 1s;    
	}
	
	.container:hover .front {
	    transform: rotateY(-180deg); /* 通过rotateY()实现前后的翻转效果*/
	}
	
	.container:hover .reverse {
	    transform: rotateY(0deg);
	}
```

# [demo效果](http://shirley5li.me/IFE-2018-CSS/transform3Dcard_reverse/index.html) #