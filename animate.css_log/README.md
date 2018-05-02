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
            $('.btn').addClass("animated infinite flash");
        } else {
            $('.btn').removeClass("animated infinite flash");
        }
```
**注意：** 记得要引入jQuery和animate.css。

# [demo效果](http://shirley5li.me/IFE-2018-CSS/animate.css_log/index.html) #

# 解决输入框动画的相关问题 #
首先再次感谢[uni-zheng](https://github.com/uni-zheng)的issue，谢谢学习的路上给与我的答疑解惑和帮助。

1、关于【当填入内容再删掉后，label还是上移缩小状态，不能恢复到最初输入框未填写的状态】问题的解答，这是由于我的js逻辑错误，只写了if，忘掉else恢复状态了。修改如下：

``` js

	window.onload = function () {
	
	    // 判断input输入框失去焦点时，输入框中是否有内容，
	    // 若有内容则保持label上移缩小效果不变，否则label恢复未填写时的样式
	    var form_inputs = document.getElementsByClassName('form__input');
	    var email_input = form_inputs[0];
	    var psd_input = form_inputs[1];
	
	    // 邮箱输入框失去焦点时，根据输入框中是否内容设置label的样式
	    email_input.onblur = function () {
	        var form_label_content = email_input.nextElementSibling.children[0];
	        if (email_input.value) {
	            form_label_content.style.transform = 'translateY(-15px)';
	            form_label_content.style.fontSize = '0.9em';
	        } else {
	            form_label_content.style.transform = '';
	            form_label_content.style.fontSize = '';
	        }	
	    };
	
	    // 密码输入框失去焦点时，根据输入框中是否内容设置label的样式
	    psd_input.onblur = function () {
	        var form_label_content = psd_input.nextElementSibling.children[0];
	        if (psd_input.value) {
	            form_label_content.style.transform = 'translateY(-15px)';
	            form_label_content.style.fontSize = '0.9em';
	        } else {
	            form_label_content.style.transform = '';
	            form_label_content.style.fontSize = '';
	        }	
	    };
	};
```

2、通过CSS实现输入框focus动画（主要涉及HTML5和CSS3验证表单）

主要利用 **`:valid`伪类选择器 和 `:required`伪类选择器**  ，`:valid` 选择器在表单元素的值需要根据指定条件验证时设置指定样式,通常对有type属性的表单进行合法性验证，比如type=email的表单，当它的值不是有效的邮箱格式时触发`:invalid`伪类，值为有效的邮箱格式时触发`:valid`伪类。

**注意:**  `:valid` 选择器只作用于能指定区间值的元素，例如 input 元素中的 min 和 max 属性，及正确的 email 字段, 合法的数字字段等。 

`input:focus:valid` 选择当前聚焦的且含有合法输入值的表单域。

所以为了只利用HTML和CSS进行表单校验，这里需要给html结构中的input元素(邮箱、密码输入框)添加type属性，另外HTML5表单还有自定义验证规则pattern属性。如下：

``` html

	<input type="email" class="form__input" id="email" name="email" required>
	<input type="password" class="form__input" id="password" name="password" required>
```

**表单验证环节分类讨论：**

(1)输入框未激活，此时的输入框状态为`invalid`

(2)输入框激活时，但还没有输入成功，此时输入框状态为`focus`以及`invalid`

(3)输入框激活时，表单输入成功，这时候输入框状态为`valid`

css设置如下：

``` css

	/* 输入框未激活，label不添加动画效果 */
	.form__input:invalid:required ~ .form__label .form__label__content {
	    transform: translateY(0px);
	    font-size: 1em;
	}
	
	/* 输入框激活但未输入成功，label需要上移缩小 */
	.form__input:focus:invalid ~ .form__label .form__label__content {
	    transform: translateY(-15px);
	    font-size: 0.9em;
	}
	
	/* 输入框激活并且输入成功，label需要保持上移缩小状态 */
	.form__input:valid ~ .form__label .form__label__content {
	    transform: translateY(-15px);
	    font-size: 0.9em;
	}
```

但【 **该种只通过html+css实现label动画的方式依然存在问题** 】，就是如果我的邮箱输入框如果输入非空的非法值，在输入框失去焦点时，label依然会落下来，所以感觉不使用js只通过html+css无法适应该种方式，不知道可不可以只通过html+css解决该问题。