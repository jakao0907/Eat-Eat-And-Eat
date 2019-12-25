function pausePress(){
	let x = document.getElementById("go");
	x.setAttribute("disabled","disabled");
	setTimeout(function () {
		x.innerHTML="已使用";
	}, 3000);
}