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
        }

        // 通过jQuery判断两个输入框是否都填充了内容，若都填充了内容，则给按钮添加flash效果
        if (email_input.value && psd_input.value) {
            $('.btn').addClass("animated infinite flash");
        }
    };

    // 密码输入框失去焦点时，根据输入框中是否内容设置label的样式
    psd_input.onblur = function () {
        var form_label_content = psd_input.nextElementSibling.children[0];
        if (psd_input.value) {
            form_label_content.style.transform = 'translateY(-15px)';
            form_label_content.style.fontSize = '0.9em';
        }

        // 通过jQuery判断两个输入框是否都填充了内容，若都填充了内容，则给按钮添加flash效果
        if (email_input.value && psd_input.value) {
            $('.btn').addClass(" animated infinite flash");
        }
    };


};