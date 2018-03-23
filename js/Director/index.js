$('input').on('ifChecked', function(event) {
    // var element = $(this).parent().find('input:checkbox:first');
    // element.parent().parent().parent().addClass('highlight');
    $(this).parents('li').addClass("task-done");
    console.log('ok');
});
$('input').on('ifUnchecked', function(event) {
    // var element = $(this).parent().find('input:checkbox:first');
    // element.parent().parent().parent().removeClass('highlight');
    $(this).parents('li').removeClass("task-done");
    console.log('not');
});
//日期
laydate.render({
    elem: '#test1' //指定元素
});
laydate.render({
    elem: '#test2' //指定元素
});
/***********判断当前浏览器是否为IE*********************/
//判断当前浏览器是否为IE
function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}
//调用isIE，如果是IE浏览器将按钮隐藏
if(isIE()){
    $('.E_show').hide()
}

//导出表格
var $exportLink = document.getElementById('export');
$exportLink.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.nodeName === "A"){
        tableExport('tableExcel', '综合统计', e.target.getAttribute('data-type'));
    }
}, false);
/***********判断当前浏览器是否为IE*********************/