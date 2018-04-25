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