$(function(){
	//电话验证：
	$("#phone").blur(function(){
		var pVal = $(this).val();
		
		var pReg = /^1[3-9][0-9]{9}$/;
		if(pReg.test(pVal)==false){
			/*$(".email-pho i").css({"display":"block","background":"url(../img/sucess.gif)"})*/
			$(".email-pho").css({"display":"block"})
			return false;
		}else{
			//alert("bbb")
			$.get("http://47.104.244.134:8080/username.do",{username:$(this).val()}).done(data=>{//用户名验证
				//console.log(data);
				if(data.code==0){
					$(".email-pho").css({"display":"block"})
					return false;
				}else{
					
			$("#phone").css({"border-color":"green"});
			$(".email-pho").css({"display":"none"})
			return true;
				}
				
			
			})
			
		}		
	})
	
	//密码验证：
	$(".pwd").blur(function(){
		var pwdVal = $(this).val();
		var pwdReg = /^[a-zA-Z0-9]{6,26}$/;
		
		if(pwdReg.test(pwdVal)==false){
			$(".pwd-cot").css({"display":"block"});
			return false;
		}
		$(".pwd").css({"border-color":"green"});
		$(".pwd-cot").css({"display":"none"});
		return true;
		
	})
	//确认密码：
	$(".pwd-word").blur(function(){
		var pwdVal1 = $(this).val();
		var pwdVal = $(".pwd").val();
		if(pwdVal1!=pwdVal){
			$(".rep-words").css({"display":"block"});
			return false;
		}
		$(".pwd-word").css({"border-color":"green"});
		$(".rep-words").css({"display":"none"});
		return true;
	})
	
    
  //邮箱：
    $(".mailbox").blur(function(){
    	var mailVal = $(this).val();
    	var mailReg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    	if(mailReg.test(mailVal)==false){
    		$(".mail-word").css({"display":"block"});
			return false;    		    		   		  		
    	}
    	$(".mailbox").css({"border-color":"green"});
		$(".mail-word").css({"display":"none"});
		return true;	
    		
    		
    })
  //验证码：
	$(".pho-btn").click(function(){
		$(this).val("");
		var str = "";
		while(str.length<4){
			var sum = Math.floor(Math.random()*23)+48;
			if(sum>=48&&sum<=57||sum>=65&&sum<=70){
				str += String.fromCharCode(sum);
			}
			//return str;
		}
		$(".pho-btn").val(str)
	
	})
	
	//勾选：
	$("#argument").click(function(){
		if($(this).prop("checked")==true){
			$(".gouxuan").css({"display":"block"});
			$(".protocol").css({"display":"none"})
			//return true;
		}else{
			$(".gouxuan").css({"display":"none"});
			$(".protocol").css({"display":"block"})

		}										
	})
	//提交：
	$(".reg-sub").click(function(){
		if($("#argument").prop("checked")){
			//console.log("aaa")
			var username = $("#phone").val();
			var password = $(".pwd").val();
			var email = $(".mailbox").val();
			var sex = $('input:radio[name="driverSex"]:checked').val();
			//console.log(username);
			//console.log(password);
			//console.log(email);
			//console.log(sex);
			$.post("http://47.104.244.134:8080/usersave.do",{
				username:username,
				password:password,
				email:email,
				sex:sex
			}).done(data=>{
				//console.log(data);
				alert("注册成功请登录");
			})		
		}
		
		
		
	})
	
	
});
