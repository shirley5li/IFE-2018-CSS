# 把 AE 动画转换成 Web 原生动画 #

## AE基础入门 ##
AE为Adobe的一款图形视频处理软件，属于后期处理软件。动画IFE已经给出了AE源文件，需要利用 Bodymovin（AE插件） 导出Web 可用的 json 文件。

Bodymovin这个AE插件可以把AE上做好的合成（Composition）导出成带有矢量动画信息的json文件，并可以在以下平台播放：

- Web页面，以svg/canvas/html+js的形式。Bodymovin自己提供了作为Player的js库——bodymovin.js；
    
- Android原生，通过Airbnb的开源项目“lottie-android”实现；
    
- iOS原生，通过Airbnb的开源项目“lottie-ios”实现；
    
- React Native，通过Airbnb的开源项目“lottie-react-native”实现。

## Bodymovin安装及导出json文件 ##

安装及导出json文件方法参考博客 [大杀器Bodymovin和Lottie：把AE动画转换成HTML5/Android/iOS原生动画](https://www.cnblogs.com/zamhown/p/6688369.html)。

自己尝试了[lottie-web](https://github.com/airbnb/lottie-web)官方github仓库的插件安装的推荐方式，注册账号的时候一直有问题，就使用了上面博客推荐的方法。

## lottie播放json文件中的动画 ##
新建一个网页来播放这段动画。把[lottie-web](https://github.com/airbnb/lottie-web)的GitHub项目目录下的“\build\player\lottie.js”放到js文件夹下，json文件在项目根目录，新建一个html文件，代码如下：

``` html

	<!DOCTYPE html>
	<html lang="en">
	
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <title>AE 动画转换成 Web 原生动画</title>
	    <link rel="stylesheet" href="css/style.css">
	</head>
	
	<body>
	    <div id="animation"></div>
	
	    <script src="js/lottie.js" type="text/javascript"></script>
	    <script src="js/global.js" type="text/javascript"></script>
	</body>
	
	</html>
```
其中global.js中的代码如下：

``` js

	lottie.loadAnimation({
	    container: document.getElementById("animation"), // the dom element that will contain the animation
	    renderer: 'svg', //  renderer参数可为 'svg' / 'canvas' / 'html' 
	    loop: true,
	    autoplay: true,
	    path: 'data.json' // the path to the animation json
	});
```

**注意：** 这里遇到一个问题，即chrome异步加载本地json文件报错，本地请求json数据使用file协议，chrome不支持文件协议的跨域请求，chrome在读取本地相对路径脚本时，禁止向第三方请求数据。[# chrome异步加载本地json文件报错：cross origin request are only supported for HTTP](https://blog.csdn.net/u012786716/article/details/56481768)

解决办法：修改了chrome的快捷方式，添加`--allow-file-access-from-files`不成功，所以换了firefox，firefox是可以运行的。

# 问题 #
不知为何，动画颜色变灰色了，应该是AE导出json时出了问题，由于对于动画制作和AE不熟悉，没搞清问题出在哪里。
[原本的动画长这样](http://ife.baidu.com/course/detail/id/35),结果我的柱状图变黑白的了，彩色效果呢？？？

# [demo效果](http://shirley5li.me/IFE-2018-CSS/AE2Web_animation/index.html) #