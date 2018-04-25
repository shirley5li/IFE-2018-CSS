# 静态布局 #

主要涉及居中，以及按钮的边框圆角、阴影特效。

静态样式布局效果如下：

![menu-animation静态效果](http://ou3oh86t1.bkt.clouddn.com/IFE-2018-CSS/menu-button-static.png)

html结构如下：

``` html

	<div class="container">
	        <div class="head">
	            <div class="title">前端学院</div>
	            <div class="liner"></div>
	        </div>
	        <button id="btn">切换样式</button>
	    </div>
```

css样式如下:

``` css

	* {
	    margin: 0px;
	    padding: 0px;
	}
	
	.container {
	    width: 300px;
	    height: 300px;
	    margin: 100px auto;
	    text-align: center;
	}
	
	.head {
	    margin-bottom: 100px;
	    text-align: center;
	}
	
	.head .title {
	    font-size: 30px;
	    font-weight: bold;
	    color: #5CACEE;
	}
	
	.head .liner {
	    height: 4px;
	    width: 130px;
	    background: #5CACEE;
	    margin: 10px auto;
	}
	
	.container button {
	    width: 130px;
	    height: 40px;
	    font-size: 23px;
	    border-radius: 8px;
	    box-shadow: 1px 1px 5px #E5E5E5;
	    background: #fff;
	    border: 1px solid #BFBFBF;
	}
	.container button:focus {
    outline-style: none;
    background:#FAF0E6;
	}
	.container button:hover {
	    background:#FAF0E6;
	}
```
# transition动画 #
[css3 transition 动画](http://www.w3school.com.cn/css3/css3_transition.asp)

`transition ： property  duration  timing-function   delay；`

为了实现transition动画效果，需要在鼠标经过按钮时，改变title的颜色，以及liner的宽度。

所以为了设置后面的动画效果，暂时将title的color属性去掉，并添加transition属性用于鼠标经过按钮时触发字体颜色的改变。`.title`选择器修改如下:

``` css

	.head .title {
	    font-size: 30px;
	    /* color: #5CACEE; */
	    transition: color 1s ease;
	    -moz-transition: color 1s ease;
	    -webkit-transition: color 1s ease;
	    -o-transition: color 1s ease;
	}
```
同理将liner的width属性先设置为0px,为了后面鼠标经过按钮时触发动画将宽度重新变为 130px, `.liner`选择器修改如下：

``` css

	.head .liner {
	    height: 4px;
	    /* width: 130px; */
	    width: 0px;
	    background: #5CACEE;
	    margin: 10px auto;
	    transition: width 1s ease 0s;
	    -moz-transition: width 1s ease 0s;
	    -webkit-transition: width 1s ease 0s;
	    -o-transition: width 1s ease 0s;
	
	}
```

# js触发transition #
最后一步，通过js设置鼠标经过按钮时，改变title的颜色、liner的宽度，从而触发transition动画的执行。js代码如下：

``` js

	window.onload = function() {
	    var button = document.getElementById("btn");
	    var title = document.getElementsByClassName("title")[0];
	    var liner = document.getElementsByClassName("liner")[0];
	
	    // 鼠标经过button时，触发标题颜色、横线的动画
	    button.addEventListener('mouseover', function(){
	        title.style.color = '#5CACEE';
	        liner.style.width = '130px';
	    });
	    button.addEventListener('mouseleave', function(){
	        title.style.color = '';
	        liner.style.width = '0px';
	    });
	};
```

## [demo效果](http://shirley5li.me/IFE-2018-CSS/menu_animation/index.html) ##