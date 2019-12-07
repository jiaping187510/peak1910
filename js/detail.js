/*
 * @Author: your name
 * @Date: 2019-12-05 16:45:58
 * @LastEditTime: 2019-12-05 17:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myfiled:\peak\js\detail.js
 */

	
	
	$(".orange").click(function() {
				//			addClass()方法向匹配的元素增加指定的类名(一个或多个)、注意对于元素来说、class属性可以有多个值、
				//			该方法不会移除已经存在的值、而是在原有的基础上追加一个或多个class属性
				//			$(".XX").addClass("xxx");
				$("body").addClass("denglu_hidden")
				$(".from").show()
	
			})
	$(".red").click(function() {
				//			addClass()方法向匹配的元素增加指定的类名(一个或多个)、注意对于元素来说、class属性可以有多个值、
				//			该方法不会移除已经存在的值、而是在原有的基础上追加一个或多个class属性
				//			$(".XX").addClass("xxx");
				$("body").addClass("denglu_hidden")
				$(".from").show()
	
			})
	
	
	// =================================================================================
	localStorage.setItem("imgs", $("#img2").attr("src"));
	localStorage.setItem("price", $(".pay em").text());
	localStorage.setItem("name",$(".shop-right h3").text());
	localStorage.setItem("nums", $(".btn-center").text());
	localStorage.setItem("subtotal",$(".pay em").text()*$(".btn-center").text());
	localStorage.setItem("discountCoupon", "无");

    function imgClick(img) {

		$("#imgShow").attr('src', img.src);

		$("#back").attr('src', img.src);

	}

    var min = document.querySelector(".min");
	var max = document.querySelector(".max");
	var img = document.querySelector(".max img");
	var fd = document.querySelector(".fd");

	min.onmouseover = function() {
		//                1.鼠标覆盖显示max和fd
		max.style.display = "block";
		fd.style.display = "block";
	}
	//            离开时隐藏
	min.onmouseout = function() {
		max.style.display = "none";
		fd.style.display = "none";
	}
	//            2. fd的移动范围
	min.onmousemove = function() {
		//                鼠标触摸的点
		var x = event.clientX - min.offsetLeft - fd.offsetWidth / 2-190;
		var y = event.clientY - min.offsetTop - fd.offsetHeight / 2-110;
		//                最大移动距离
		var maxX = min.clientWidth - fd.offsetWidth;
		var maxY = min.clientHeight - fd.offsetHeight;
		//                边界判断
		if (x <= 0) {
			x = 0;
		} else if (x >= maxX) {
			x = maxX;
		}
		if (y <= 0) {
			y = 0;
		} else if (y >= maxY) {
			y = maxY;
		}
		//                fd的位置
		fd.style.left = x + 'px';
		fd.style.top = y + 'px';
		//fd/min = max/img
		//移动比例
		var moveX = x / maxX;
		var moveY = y / maxY;
		//                移动
		//                3. max的对应显示
		//                对于大图而言,放大镜在小图上移动的比例相当于img在可显示区域上移动的比例
		//                放大镜右移等于图片左移
		//                也就是本质上为img-max 然而而需要负值,则*-1简化后为max-img
		img.style.left = moveX * (max.clientWidth - img.offsetWidth) + 'px';
		img.style.top = moveY * (max.clientHeight - img.offsetHeight) + 'px';

    }
    

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
	})
	oRight.click(function() {
		oCenter++;
		if (oCenter > 10) {
			oCenter = 10;
		}
		$(".btn-center").text(oCenter);
		console.log("++_____________________" + oCenter)
	})




