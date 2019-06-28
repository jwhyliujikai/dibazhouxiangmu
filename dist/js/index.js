$(function(){
	//改变登录后首页的状态：
	var username = localStorage.getItem("username");
	if(username !== null){
		$("#ringup").html("欢迎"+username).attr({"href":""});
		$("#exit").html("退出").attr({"href":""});
		//点击退出按钮后退出：
		$("#exit").click(function(){
			$("#ringup").html("登录");
			$("#exit").html("注册")			
			localStorage.removeItem("username");
			localStorage.removeItem("token");
		})
		
	}
	
	//首页隐藏部分的监听：
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if(st>=100){
			$(".fixLeftImg").css({"display":"block"});

			
		}else{
			$(".fixLeftImg").css({"display":"none"});
		}
		
	})
	//轮播图：
	var count = 0;
	var wid = $("#slider img").width();
	setInterval(function(){
		count++;
		if(count == $("#banner").children().length){
			$("#banner").css({"left":"0"});
			count = 0;
		}
		$("#banner").stop().animate({"left":-wid*count+"px","top":"0"})
	},2000)
	//点击小轮播：
	var ulWidth = $(".swiper-banner").width();
	
	$(".swiper-slider").mouseover(function(){
		var index = 0
		$("#btn span").css({"display":"block"});
		var num = $(".zs-swiper").children().length;
		console.log(num)
		
		$("#btn span:first").click(function(){
			index++;
			if(index == num){
				$(".zs-swiper").css({"left":0})
				index = 1				
			}			
			$(".zs-swiper").stop().animate({"left":-ulWidth*index+"px","top":0},800);
		})
			$("#btn span:last").click(function(){
				index--;
				if(index == -1){
					
					$(".zs-swiper").css({"left":-ulWidth*(num-1)+"px","top":0})
					index = num-2
					
				}
				$(".zs-swiper").stop().animate({"left":-ulWidth*index+"px","top":0},800);				
			})
		
		
	})
	$(".swiper-banner").mouseout(function(){
		$("#btn span").css({"display":"none"});
	})
	
	//固定栏状态
	$(".rentou").mouseenter(function(){
		$(".ren-box").css({"display":"block"})
		.stop().animate({"right":"30px"},300)
		//$(".ren-box").attr("style","display:block;right:30px")
		$(".rentou").mouseleave(function(){
		$(".ren-box").css({"display":"none","right":"50px"})
	})
	})
//点击回到顶部：
	$(".top").click(function(){
				$("body,html").animate({"scrollTop":0},200)
			})
	
	//导航数据：
	//调数据：
	//一级导航数据：
	$.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
		//index：data的索引，value为data里的对象；
		$.each(data,function(index,value){
			//console.log(index);
			//console.log(value);
			$("#memu").append("<li> <div class='subNav'></div>"+value.name+"</li>")
			//$("li").append("<div></div>")
			//获取二级导航数据：
			//当鼠标移入时触发：
			$("#memu li").eq(index).mouseenter(function(){
				console.log(index);
				$(".subNav").text("").css({"display":"block"});
			})
				$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2}).done(data=>{
				console.log(data);				
					for(var j=0;j<data.length;j++){
						/*console.log(data[j],data[j].parentid)
						console.log(value.id)*/
						if(value.id == data[j].parentid){
							$(".subNav").append("<span>"+data[j].name+"</span>")
						}					
					}
				})
				
			
			$("#memu li").mouseleave(function(){
				$(".subNav").html("").css({"display":"none"})
			})
			
			
			
		})
			
				//console.log(data);
				/*var memu = document.getElementById("memu");
				var str = "";
				for(var i=0;i<data.length;i++){
					//console.log(data[i].name);					
					str +=`<li>${data[i].name+""}></li>`	
					$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2}).done(data=>{
				console.log(data);
				$()
			})
				}
				memu.innerHTML = str;
				var aList = memu.children;*/
				
			})
	

})
