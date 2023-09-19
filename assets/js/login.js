$(function(){
    $('#login').on('click','a',function(){
       $('#login').hide();
       $('#regx').show();
        // console.log('sfdsfsdf')
    })
    $('#regx').on('click','a',function(){
        $('#login').show();
        $('#regx').hide();
    })

    $('.loginform').on('submit',function(e){
        e.preventDefault();
        console.log($(this).serializeArray());
    })



})
layui.use(function(){
    var form=layui.form;

    form.verify({
        uname:function (value,ele) {
              if(!new RegExp('^\\w{3,8}$').test(value)){
                   return '用户名不能小于6位数';
              }

        }
    })
    form.on('submit(pj)', function(data){
        var file=data.field;
        console.log(file);
        return false;
    })
})


