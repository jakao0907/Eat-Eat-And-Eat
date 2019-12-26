function pausePress(){
	let x = document.getElementById("go");
	x.setAttribute("disabled","disabled");
	setTimeout(function () {
		x.innerHTML="已使用";
		let y = document.getElementsByClassName("roulette-inner");
		console.log(y.translate);

	}, 3100);
}