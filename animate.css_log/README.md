# 输入框focus状态动画 #
当 输入框 处于 focus 状态的时候，label 要变小并退到上面去。该动画效果主要通过transition结合transform来实现。如下：

``` css

	.form__label__content {
	    position: absolute;
	    /* 添加输入框处于 focus 状态的时，Label 要变小并退到上面去的动画 */
	    transition: all 500ms ease-out;
	}
	.form__input:focus ~ .form__label .form__label__content {
	    transform: translateY(-15px);
	    font-size: 0.9em;
	}
```

单单使用上面的css，遇到的 **【主要问题】** 是，当输入框失去焦点时，label的样式又会恢复到之前，label又落下来了，就会覆盖输入框填写的文字。我想到的处理方法是利用js判断输入框中是否有内容，若输入框中有内容，则通过js使label保持在输入框失去焦点时的样式不变，但缺陷是，当填入内容再删掉后，label还是上移缩小状态，不能恢复到最初输入框未填写的状态，【由于css使用不熟练，不晓得有没只通过css实现要求的方式】。

``` js

	window.onload = function() {
	    
	    // 判断input输入框失去焦点时，输入框中是否有内容，
	    // 若有内容则保持label上移缩小效果不变，否则label恢复未填写时的样式
	    var form_inputs = document.getElementsByClassName('form__input');
	    var email_input = form_inputs[0];
	    var psd_input = form_inputs[1];
	
	    // 邮箱输入框失去焦点时，根据输入框中是否内容设置label的样式
	    email_input.onblur = function() {
	        var form_label_content = email_input.nextElementSibling.children[0];
	        if (email_input.value) {   
	            form_label_content.style.transform = 'translateY(-15px)';
	            form_label_content.style.fontSize = '0.9em';
	        }
	    };
	
	    // 密码输入框失去焦点时，根据输入框中是否内容设置label的样式
	    psd_input.onblur = function() {
	        var form_label_content = psd_input.nextElementSibling.children[0];
	        if (psd_input.value) {          
	            form_label_content.style.transform = 'translateY(-15px)';
	            form_label_content.style.fontSize = '0.9em';
	        }
	    };
	};
```

# 按钮动画 #
通过 jQuery 判断输入框是否有内容，如果 Email 和 Password 都填充了内容，为 Submit 按钮添加动画让它变得引人注目，使用动画开源库 ：[https://daneden.github.io/animate.css/](https://daneden.github.io/animate.css/) 制作按钮的动画。

即通过jQuery判断两个输入框是否都填充了内容，若都填充了内容，则给按钮添加动画对应的类名，比如这里给按钮添加flash效果，则给按钮添加类名`animated flash`，如下：

``` js

		// 通过jQuery判断两个输入框是否都填充了内容，若都填充了内容，则给按钮添加flash效果
        if (email_input.value && psd_input.value) {
            $('.btn').addClass(" animated flash");
        }
```
**注意：** 记得要引入jQuery和animate.css。

# [demo效果](http://shirley5li.me/IFE-2018-CSS/animate.css_log/index.html) #