var loginForm = {};
var isExistUser = 0;
loginForm.init  = function() {
    $('.frontendBtn').bind('click',function() {
        loginForm.login(0);
    });
    $('.backendbBtn').bind('click',function() {
        loginForm.login(1);
    });
    return false;
};

// 登录操作
loginForm.login = function (typeValue) {
        var userForm = {};
        userForm.phone = $('#phone').val();
        userForm.phone = $('#phone').val();
        if(userForm.phone.length == 0) {
            alert('账号不能为空');return false;
        }
        $.ajax({
            url:'/authority/login/check-username',
            data:userForm,
            type:'post',
            dataType:'json',
            success:function(data) {
                if(data.code == 2) {
                    alert(data.msg);return false;
                }else{
                    userForm.password = $('#password').val();
                    userForm.backUrl = $('#backUrl').val();
                    if(userForm.phone.length == 0) {
                        alert('账号不能为空');return false;
                    }
                    if(userForm.password.length == 0) {
                        alert('密码不能为空');return false;
                    }
                    userForm.type = 1;
                    if(!loginForm.checkForm(userForm)) {
                        return false;
                    }
                    $.cookie('backUrl',null, { expires:-1,path: '/'})
                    $.ajax({
                        url:'/authority/login/index',
                        data:userForm,
                        type:'post',
                        dataType:'json',
                        success:function(data) {
                            if(data.code == 1) {
                                if(typeValue){
                                    window.location.href='/sys/manager/index';
                                }else{
                                    window.location.href=data.backUrl;
                                }
                            }else{
                                alert(data.msg);return false;
                            }
                        }
                    })
                }
            }
        });
      
}

loginForm.checkForm = function (userForm) {
    if(userForm.phone.length == 0) {
        console.log('phone is empty()')
        return false;
    }
    if(userForm.password.length == 0) {
        console.log('password is empty()')
        return false;
    }
    return true;
}
loginForm.init();