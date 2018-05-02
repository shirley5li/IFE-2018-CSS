window.onload = function () {
    var form_inputs = document.getElementsByClassName('form__input');
    var email_input = form_inputs[0];
    var psd_input = form_inputs[1];

    // 邮箱输入框失去焦点时，根据输入框中是否内容设置label的样式
    email_input.onblur = function () {

        // 通过jQuery判断两个输入框是否都填充了内容，若都填充了内容，则给按钮添加flash效果
        if (email_input.value && psd_input.value) {
            $('.btn').addClass("animated infinite flash");
        } else {
            $('.btn').removeClass("animated infinite flash");
        }
    };

    // 密码输入框失去焦点时，根据输入框中是否内容设置label的样式
    psd_input.onblur = function () {

        // 通过jQuery判断两个输入框是否都填充了内容，若都填充了内容，则给按钮添加flash效果
        if (email_input.value && psd_input.value) {
            $('.btn').addClass(" animated infinite flash");
        } else {
            $('.btn').removeClass("animated infinite flash");
        }
    };
};