function Cart(){
	if(getCookie("cart")!==undefined){
		this.cartData = JSON.parse(getCookie("cart"));
	}else{
		this.cartData = {};
	}
}
Cart.prototype.addData = function(id,num,flag){
	if(this.cartData[id]===undefined){
		this.cartData[id] = num;
	}else{
		this.cartData[id] += num;
	}
	setCookie("cart",JSON.stringify(this.cartData),7);
}

