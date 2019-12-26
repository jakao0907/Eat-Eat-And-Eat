var items = [];
$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/1PfwNgNqYSLfCjUcHyPFTHNekRnu89SYh0rdzTuwtPtM/1/public/values?alt=json', function(data) {
    var d = data.feed.entry;
    // var items = [];
	for(var i in d) {
	    var item = {};
	    item.店家名稱 = d[i].gsx$店家名稱.$t;
	    item.經緯度 = d[i].gsx$經緯度.$t;
	    item.地址 = d[i].gsx$地址.$t;
	    item.電話 = d[i].gsx$電話.$t;
	    items.push(item);
	  }
	  // console.table(items);
	  // console.log(items.length);
  });
  console.log(items.length);
});

// console.log(items.length);

//x = document.getElementsByClassName("roulette-inner")[0];