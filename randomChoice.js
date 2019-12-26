
var items = [];

$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/1PfwNgNqYSLfCjUcHyPFTHNekRnu89SYh0rdzTuwtPtM/1/public/values?alt=json', function(data) {
    var d = data.feed.entry;
	for(var i in d) {
	    var item = {};
	    item.name = d[i].gsx$name.$t;
	    item.longitude = d[i].gsx$longitude.$t;
	    item.latitude = d[i].gsx$latitude.$t;
	    item.phone = d[i].gsx$phone.$t;
	    items.push(item);
	  }
  });
});

function pausePress(){
	let x = document.getElementById("go");
	x.hidden=true;
	setTimeout(function () {
		let y = document.getElementsByClassName("roulette-inner")[0].style.transform.replace(/[^\d.]/g, '');
		document.getElementsByClassName("restaurantIntroduction")[0].innerHTML = items[y/50].name;
		document.getElementsByClassName("restaurantIntroduction")[0].style.visibility="visible";
		document.getElementById("restaurantMap").style.visibility="visible";
	}, 3100);
}