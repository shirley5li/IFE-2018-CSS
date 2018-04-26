# 害羞动画的实现 #

通过改变`.face-red`的`opacity`实现害羞动画，当鼠标经过面部时，将`opacity`设置为1。css设置如下：

``` css

	.face-red {
	    position: absolute;
	    height: 20px;
	    width: 70px;
	    background: red;
	    top: 45px;
	    left: 18px;
	    border-radius: 50% 50% 50% 50%;
	    background: #e85a5e;
	    opacity: 0.0;
	    /* 鼠标滑过，害羞动画 */
	    transition: opacity ease-in 1s;
	    -moz-transition: opacity ease-in 1s;
	    -webkit-transition: opacity ease-in 1s;
	    -o-transition: opacity ease-in 1s;
	}
```

鼠标滑过面部，触发`.face-red`的`opacity`设置为1,如下：

``` css

	/* 鼠标滑过脸部，害羞动画 */
	.face:hover .eye-wrap .face-red {
	    opacity: 1; /* 鼠标滑过面部，害羞部分opacity设置为1，从而出现transition动画 */
	}
```

# 眼睛微笑动画实现 #

通过`transform`属性的`translateY`方法改变下眼睑在Y方向上的位置，当鼠标滑过面部时，触发`.eye-bottom`的`transform`属性，`translateY`方法使下眼睑向上移动15px。css设置如下：

``` css

	.face-red {
	    position: absolute;
	    height: 20px;
	    width: 70px;
	    background: red;
	    top: 45px;
	    left: 18px;
	    border-radius: 50% 50% 50% 50%;
	    background: #e85a5e;
	    opacity: 0.0;
	    /* 鼠标滑过，下眼睑上移动画 */
	    transition: opacity ease-in 1s;
	    -moz-transition: opacity ease-in 1s;
	    -webkit-transition: opacity ease-in 1s;
	    -o-transition: opacity ease-in 1s;
	}
```

鼠标滑过面部时，触发`.eye-bottom`的`transform`属性，`translateY`方法使下眼睑向上移动15px,如下：

``` css

	/* 鼠标滑过，下眼睑上移动画 */
	.face:hover .eye-bottom {
	    transform: translateY(-15px);
	}
```

# 耳朵摇晃动画 #

耳朵的摇晃通过`transform`属性的`rotate`方法实现。css如下：

``` css

	.ear {
	    position: absolute;
	    width: 80px;
	    height: 100px;
	    border: 2px solid #000;
	    background: #fbf8f1;
	    border-radius: 100% 10% 50% 0% ;
	    /* 鼠标滑过，耳朵摇晃动画 */
	    transition: transform ease-in 1s;
	    -moz-transition: transform ease-in 1s;
	    -webkit-transition: transform ease-in 1s;
	    -o-transition: transform ease-in 1s;
	}
```
鼠标滑过面部时，触发`.ear`的`transform`属性, `rotate`方法使左右耳朵分别旋转30度，如下：

``` css

	/* 鼠标滑过，耳朵摇晃动画 */
	.face:hover+.ear-wrap .ear.left {
	    transform: rotate(-30deg);
	}
	.face:hover+.ear-wrap .ear.right {
	    transform: rotate(30deg);
	}
```

**注意：**相邻兄弟选择器的使用。

# [demo效果](http://shirley5li.me/IFE-2018-CSS/cat_smile/index.html) #