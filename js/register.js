/*
 * @Author: your name
 * @Date: 2019-12-02 16:36:43
 * @LastEditTime: 2019-12-03 15:34:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\peak\js\register.js
 */
//二级菜单--------------------------------------------------------------------------------

function navslice(num,name){
    $(".moving").find("a").eq(num).mouseover(function(){
        $(".secondary").stop().slideDown(300);
        $(name).css({display:"block"}).siblings("div").css({display:"none"});
    })
}
navslice(0,".first")
navslice(1,".second")
navslice(2,".third")
navslice(3,".fourth")
navslice(4,".fifth")
    

$(".secondary").mouseover(function(){
    $(".secondary").stop().slideDown(300)
})
$(".secondary").mouseout(function(){
    $(".secondary").stop().slideUp(300)
})

$(".stop").mouseover(function(){
    $(".secondary").stop().slideUp(300)
})


//轮播图---------------------------------------------------------------------------------
window.onload = function() {
    var swiper = new Swiper('.swiper-container', {
        loop : true,
        autoplay:true,
        delay:7000,
        loopAdditionalSlides : 4,
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    $(".banner").mouseover(function(){
        $(".swiper-button-white").css({
            "display":"block"
        })
    })
    $(".banner").mouseout(function(){
        $(".swiper-button-white").css({
            "display":"none"
        })
    })
}
//二维码--------------------------------------------------------------------------------
$(".wechat-icon").mouseover(function(){
    $("#code").css({
        "display":"block"
    })
})
$(".wechat-icon").mouseout(function(){
    $("#code").css({
        "display":"none"
    })
})
$("#code").mouseover(function(){
    $("#code").css({
        "display":"block"
    })
})
$("#code").mouseout(function(){
    $("#code").css({
        "display":"none"
    })
})

//回到顶部--------------------------------------------------------------------------------
$("#back-top").click(function(){
    $("body,html").animate({
        scrollTop:"0"
    })
})

$(window).scroll(function(){
    if($("body,html").scrollTop()>=650){
        $("#back-top").css({
            "visibility":""
        })
    }else{
        $("#back-top").css({
            "visibility":"hidden"
        })
    }
})

//登录------------------------------------------------------------------------------------
function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }
    else if (window.event) {
        window.event.cancelBubble = true;//兼容IE
    }
}
$("#log-button").click(function (e) {
    $(".login").slideToggle();
    stopPropagation(e);
});
$(document).bind('click', function () {
    $(".login").slideUp();
});
$(".login").click(function (e) {
    stopPropagation(e);
});

// 对号-----------------------------------------------------------------------------------
let panduan = true;
$(".corr-icon").click(function() {
    if (panduan) {
        $(".corr-icon").css({
            background:"url(img/correct.jpg)",
            backgroundSize:" 12px 12px"
        })
        panduan = false;
    } else {
        $(".corr-icon").css({
            background:"url(img/corr.jpg)",
            backgroundSize:" 12px 12px"
        })
        panduan = true;
    }
})

//前端验证-----------------------------------------------------------------------------
//phonenum的验证
$(function() {
    $("#regtel").keypress(function(event) {
        var evt = event || window.event;
        if (evt.keyCode < 48 || evt.keyCode > 57) {
            evt.preventDefault();
        }
    })

    $("#regtel").blur(function() {
        var str = $("#regtel").val();
        // var pass = $("#pass").val();
        // var cpass = $("#confirm").val();
        var reg = /^1[34578]\d{9}$/;
        if (reg.test(str) == true) {
            $("#regtel").css({
                border:"1px solid yellowgreen",
                boxShadow:"0 0 2px yellowgreen"
            })
            // $(".regtel-prompt").text("该手机号已被注册")
            // $(".regtel-prompt").show();
            // setTimeout(function () {
            //     $(".regtel-prompt").hide();
            // }, 3000);
        } else if (str == "") {
            $(".regtel-prompt").text("手机号不能为空")
            $(".regtel-prompt").slideDown();
            $("#regtel").css({
                border:"1px solid red",
                boxShadow:"0 0 2px red"
            });
            setTimeout(function () {
                $(".regtel-prompt").slideUp();
            }, 3000);
            // $('.regtel-prompt').delay(6000).hide(0);
            // $(".regtel-prompt").css({
            //     display:"block"
            // })
            // $("#phonenum").css({
            //     borderBottom: "2px solid red"
            // })
            // $(".phonenum").text("请输入手机号");
        } else if (reg.test(str) == false) {
            $(".regtel-prompt").text("请输入正确的手机号")
            $(".regtel-prompt").slideDown();
            $("#regtel").css({
                border:"1px solid red",
                boxShadow:"0 0 2px red"
            });
            setTimeout(function () {
                $(".regtel-prompt").slideUp();
            }, 3000);
        };
        
    })
// 重复密码---------------------------------------------------------
    $("#confirm").blur(function(){
        // var pass = $("#pass").val();
        var cpass = $("#confirm").val();
        if($("#pass").val()!=$("#confirm").val()){
            $(".regtel-prompt").text("两次输入的密码不一致")
            $(".regtel-prompt").slideDown();
            $("#confirm").css({
                border:"1px solid red",
                boxShadow:"0 0 2px red"
            });
            $("#pass").css({
                border:"1px solid red",
                boxShadow:"0 0 2px red"
            });
            setTimeout(function () {
                $(".regtel-prompt").slideUp();
            }, 3000);
        }else if(cpass == ""){
            $("#pass").css({
                border: "1px solid #c7c6c6",
                boxShadow:"none"
            });
            $("#confirm").css({
                border: "1px solid #c7c6c6",
                boxShadow:"none"
            })
        
        }else{
            $("#pass").css({
                border:"1px solid yellowgreen",
                boxShadow:"0 0 2px yellowgreen"
            });
            $("#confirm").css({
                border:"1px solid yellowgreen",
                boxShadow:"0 0 2px yellowgreen"
            })
        }
        
    })  
})

//验证码----------------------------------------------------------------------------------
var tain = parseInt(Math.random()*1000000);
$("#obtain").click(function(){
    alert(tain)
})
// 注册发送请求----------------------------------------------------------------------------
$("#regBut").click(function() {
if($("#obtain-i").val() == tain){
    $("#obtain-i").css({
        border:"1px solid yellowgreen",
        boxShadow:"0 0 2px yellowgreen"
    });
    $("#obtain").css({
        border:"1px solid yellowgreen",
        boxShadow:"0 0 2px yellowgreen"
    });
    
    var regtel = $("#regTel")[0];
    var pass = $("#pass")[0];
    register();
    }else{
        $(".regtel-prompt").text("验证码错误")
        $(".regtel-prompt").slideDown();
        $("#obtain-i").css({
            border:"1px solid red",
            boxShadow:"0 0 2px red"
        });
        $("#obtain").css({
            border:"1px solid red",
            boxShadow:"0 0 2px red"
        });
        setTimeout(function () {
            $(".regtel-prompt").slideUp();
        }, 3000);
    }
})
function register() {
    //注册页面的密码后端验证
    let xhr = new XMLHttpRequest();

    xhr.open("post", "php/register.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText == 1) {
                addCookie("username", $("#regtel").val(), 7, "/"),
                $(window).attr('location','index.html');
            } else if (xhr.responseText == -1) {
                $(".regtel-prompt").text("手机号已被注册")
                $(".regtel-prompt").slideDown();
                $("#regtel").css({
                    border:"1px solid red",
                    boxShadow:"0 0 2px red"
                });
                setTimeout(function () {
                    $(".regtel-prompt").slideUp();
                }, 3000);
            } else if (xhr.responseText == 0) {
                $(".regtel-prompt").text("注册失败")
                $(".regtel-prompt").slideDown();
                $("#regtel").css({
                    border:"1px solid red",
                    boxShadow:"0 0 2px red"
                });
                setTimeout(function () {
                    $(".regtel-prompt").slideUp();
                }, 3000);
            }
        };
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let sendstr = `username=${$("#regtel").val()}&userpass=${$("#pass").val()}`;
    xhr.send(sendstr);
       



// window.onload = function(){
    //     showUser(); 
        
    //     $("#btnLogout").onclick = function(){
    //         removeCookie("username");
    //         showUser();
    //     }
    // }    
    
    //     function showUser(){
    //     let username = getCookie("username");
    //     if(username!=null){
    //         $("#cookie-val").html = username;
    //         $("#cookie-val").css({
    //             display:"block"
    //         })
    //     }else{
    //         $("#cookie-val").css({
    //             display:"none"
    //         })
    //     }
    // }
    // 添加cookie
    function addCookie(key, value, dayCount, path, domain) {
        let d = new Date();
        d.setDate(d.getDate() + dayCount);
    
        //escape（）：编码
        let str = `${key}=${escape(value)};expires=${d.toGMTString()}`;
        if (path != undefined) {
            str += `;path=${path}`;
        }
    
        if (domain != undefined) {
            str += `;domain=${domain}`;
        }
        document.cookie = str;
    }
    
    
    // 获取cookie的值
    
    
    function getCookie(key) {
        //document.cookie的示例： usernamet=hi; username=jzm; userpass=123
        var str = unescape(document.cookie); //unescape:解码
        //1、分割成数组
        let arr = str.split("; "); //arr=["usernamet=hi","username=jzm","userpass=123"];
        //2、循环arr，
        for (var i in arr) {
            if (arr[i].startsWith(key + "=")) {
                let [, value] = arr[i].split("="); //["username","jzm"]
                return value;
            }
        }
        return null;
    }
    
    //删除cookie
    // function removeCookie(key, value = 1, dayCount = -1, path = '/', domain) {
    //     addCookie(key, value, dayCount, path, domain);
    // }

}