$(function () {
    var form = layui.form


    $("#link-reg").on("click", function () {
        $(".login_box").hide()
        $(".reg-box").show()
    })

    $(function () {
        $("#link-login").on("click", function () {
            $(".login_box").show()
            $(".reg-box").hide()
        })
    })


    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd: function (value) {
            var pwd = $('.reg-box[name=password]').val
            if (value !== pwd) {
                return ('两次密码输入不一致！')
            }
        }



    })
});
