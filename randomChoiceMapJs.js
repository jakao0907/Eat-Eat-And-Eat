var locations = [
  ['陳家麵店', 25.151885, 121.77024, 4],
  ['吮指王', 25.151830, 121.77048, 4],
  ['八方雲集', 25.15134, 121.77134, 4],
  ['寶妹雲泰料理', 25.15139, 121.77120, 4],
  ['涵館', 25.15143, 121.77115, 4],
  ['添好茶', 25.15128, 121.77145, 4],
  ['好食雞', 25.151025, 121.77232, 4],
  ['北寧早餐店', 25.15105, 121.77261, 4],
  ['義大利麵', 25.151040, 121.77245, 4],
  ['早安美芝城', 25.15063, 121.772155, 4],
  ['瑞麟美而美', 25.15059, 121.772155, 4],
  ['吉利串燒', 25.15050, 121.772205, 4],
  ['賀椿飯麵館', 25.15032, 121.772200, 4],
  ['芋仔番薯', 25.15200, 121.77000, 4],
  ['永和豆漿', 25.15205, 121.7695, 4],
  ['滿大碗', 25.15165, 121.7709, 4]
];

var map = new google.maps.Map(document.getElementById('restaurantMap'), {
  zoom: 17,
  center: new google.maps.LatLng(25.151409, 121.773),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}


// var locations = [];

// $(function() {
//   $.get('https://spreadsheets.google.com/feeds/list/1PfwNgNqYSLfCjUcHyPFTHNekRnu89SYh0rdzTuwtPtM/1/public/values?alt=json', function(data) {
//     var d = data.feed.entry;
//     for(var i in d) {
//       var item = {};
//       item.name = d[i].gsx$name.$t;
//       item.longitude = d[i].gsx$longitude.$t;
//       item.latitude = d[i].gsx$latitude.$t;
//       item.phone = d[i].gsx$phone.$t;
//       locations.push(item);
//     }
//     build();
//   });
// });


// function build(){
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 17,
//     center: new google.maps.LatLng(25.151409, 121.773),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var infowindow = new google.maps.InfoWindow();

//   var marker, i;

//   for (i = 0; i < locations.length; i++) {  
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i].longitude, locations[i].latitude),
//       map: map
//     });

//     google.maps.event.addListener(marker, 'click', (function(marker, i) {
//       return function() {
//         infowindow.setContent(locations[i].name);
//         infowindow.open(map, marker);
//       }
//     })(marker, i));
//   }
// }

