/*
 * @Author: your name
 * @Date: 2019-11-27 20:42:52
 * @LastEditTime: 2019-12-05 12:00:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\peak\js\index.js
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

// sort 分类--------------------------------------------------------------------------------
$(".basketball").hover(
    function () {
        $(this).addClass("basketball-new")
    },
    function(){
        $(this).removeClass("basketball-new")
    }
);

$(".run").hover(
    function () {
        $(this).addClass("run-new")
    },
    function(){
        $(this).removeClass("run-new")
    }
);

$(".sport").hover(
    function () {
        $(this).addClass("sport-new")
    },
    function(){
        $(this).removeClass("sport-new")
    }
);

$(".training").hover(
    function () {
        $(this).addClass("training-new")
    },
    function(){
        $(this).removeClass("training-new")
    }
);

$(".foorball").hover(
    function () {
        $(this).addClass("foorball-new")
    },
    function(){
        $(this).removeClass("foorball-new")
    }
);

$(".outdoor").hover(
    function () {
        $(this).addClass("outdoor-new")
    },
    function(){
        $(this).removeClass("outdoor-new")
    }
);

$(".footwear").hover(
    function () {
        $(this).addClass("footwear-new")
    },
    function(){
        $(this).removeClass("footwear-new")
    }
);

$(".shirt").hover(
    function () {
        $(this).addClass("shirt-new")
    },
    function(){
        $(this).removeClass("shirt-new")
    }
);

$(".sweater").hover(
    function () {
        $(this).addClass("sweater-new")
    },
    function(){
        $(this).removeClass("sweater-new")
    }
);

$(".jacket").hover(
    function () {
        $(this).addClass("jacket-new")
    },
    function(){
        $(this).removeClass("jacket-new")
    }
);

$(".cotton").hover(
    function () {
        $(this).addClass("cotton-new")
    },
    function(){
        $(this).removeClass("cotton-new")
    }
);

$(".wear").hover(
    function () {
        $(this).addClass("wear-new")
    },
    function(){
        $(this).removeClass("wear-new")
    }
);


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

//登录----------------------------------------------------------------------------------
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



$("#logBut").click(function(){
    var str = $("#logtel").val(); 
    var reg = /^1[34578]\d{9}$/;
    if (reg.test(str) == true) { 
    let xhr = new XMLHttpRequest();
    xhr.open("post","php/login.php",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText==1){
                addCookie("username", $("#logtel").val(), 7, "/")
                $(window).attr('location','index.html');
            }else{
                $(".regtel-prompt").text("手机号或者密码不对")
                $(".regtel-prompt").slideDown();
                $("#logtel").css({
                    border:"1px solid red",
                    boxShadow:"0 0 2px red"
                });
                $("#logPwd").css({
                    border:"1px solid red",
                    boxShadow:"0 0 2px red"
                });
                setTimeout(function () {
                    $(".regtel-prompt").slideUp();
                }, 3000);
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${$("#logtel").val()}&userpass=${$("#logPwd").val()}`;
    xhr.send(sendstr);
    }
    })



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
