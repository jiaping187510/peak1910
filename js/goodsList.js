/*
 * @Author: your name
 * @Date: 2019-12-05 01:00:25
 * @LastEditTime: 2019-12-05 12:08:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\peak\js\goodsList.js
 */

window.onload = function(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "phpw/getGoodsList.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            let str = xhr.responseText;
            let objs = JSON.parse(str);
            console.log(objs)
            let htmlStr = "";
            for (let i = 0; i < objs.length; i++) {
                htmlStr += `
                            <li>
                                <a href="#">
                                    <img src="${objs[i].goodsImg}" alt="">
                                    <p class="color">${objs[i].goodsDesc}</p>
                                    <p class="name">${objs[i].goodsName}</p>
                                    <p class="price">￥${objs[i].goodsPrice}</p>
                                    <p class="price-new">￥${objs[i].goodsPrice}</p>
                                </a>
                            </li>
                            `;
            }
            $(".shop").html(htmlStr);
        }
    }
    xhr.send();
}

//发送Ajax请求

$(".search-icon").click(function () {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "phpw/getGoodsInfo.php?goodsName=" + $(".iconfont").val(), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            let str = xhr.responseText;
            let objs = JSON.parse(str);
            let htmlStr = "";
            var arr = [];
            arr.push(objs);
            for (let i = 0; i < arr.length; i++) {
                htmlStr += `
                            <li>
                                <a href="#">
                                    <img src="${arr[i].goodsImg}" alt="">
                                    <p class="color">${arr[i].goodsDesc}</p>
                                    <p class="name">${arr[i].goodsName}</p>
                                    <p class="price">￥${arr[i].goodsPrice}</p>
                                    <p class="price-new">￥${arr[i].goodsPrice}</p>
                                </a>
                            </li>
                            `;
            }
            $(".shop").html(htmlStr);
        } 
    }
    xhr.send();
})