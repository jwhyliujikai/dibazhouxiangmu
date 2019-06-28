$(function(){
	
	//30天免登陆：
	if(getCookie("username")!==undefined){
		$("#cell").get(0).value = getCookie("username");
		$(".pwd").get(0).value = getCookie("password");	
		$("#argument").prop("checked",true);
		}
	
	
	
	$(".enter").click(function(){
		var val1 = $("#cell").val();
		var val2 = $(".pwd").val();
		//掉接口
		$.post("http://47.104.244.134:8080/userlogin.do",{name:val1,password:val2}).done(data=>{
				//console.log(data);
				var token = data.data.token;//取token值
				//console.log(token);
				if(data.code==1){//登录失败
					$(".txt-err").css({"display":"block"});
					$("#cell").get(0).value="";
					$(".pwd").get(0).value="";
				}else{
					$(".txt-err").css({"display":"none"});
					//把username存到localstorage里
					localStorage.setItem("username",val1);
					localStorage.setItem("token",token);//存token值
					window.location.href="index.html";
					
					
					//30天免登陆勾选按钮
					if($("#argument").get(0).checked){
					//console.log("aa")
					setCookie("username",val1,30);
					setCookie("password",val2,30);
				}else{
					removeCookie("username");
					removeCookie("password");
				}
				}
				
				
		})
		
		
		

	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})
