/*
 * @Author: your name
 * @Date: 2019-12-05 20:21:05
 * @LastEditTime: 2019-12-05 20:37:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\peak\js\shoppingcart.js
 */
let tmpImgs = localStorage.getItem("img");
    $(".img").attr("src", tmpImgs); //商品缩略图
    $(".twos i").text(localStorage.getItem("price")); //商品单价
    $(".ones a").text(localStorage.getItem("name")); //商品名称
    $(".threes span").text(localStorage.getItem("nums")); //商品数量
    $(".fours a").text(localStorage.getItem("discountCoupon")); //商品优惠券
    // $(".fives i").text((localStorage.getItem("price")) * (localStorage.getItem("nums")));
    
    

    //====================================
    let oLeft = $(".btn-left");
    let oRight = $(".btn-right");
    let oCenter = $(".btn-center").text();
    oLeft.click(function() {
        oCenter--;
        if (oCenter < 1) {
            oCenter = 1;
        }
        $(".btn-center").text(oCenter);
        console.log("--_____________________" + oCenter)
        $(".fives i").text((localStorage.getItem("price")) * oCenter);
        $(".numa").text((localStorage.getItem("price")) * oCenter);//合计金额
    })
    oRight.click(function() {
        oCenter++;
        if (oCenter > 0) {
            oCenter;
        }
        $(".btn-center").text(oCenter);
        console.log("++_____________________" + oCenter)
        $(".fives i").text((localStorage.getItem("price")) * oCenter);
        $(".numa").text((localStorage.getItem("price")) * oCenter);//合计金额
    })
