var locations = [];

$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/1PfwNgNqYSLfCjUcHyPFTHNekRnu89SYh0rdzTuwtPtM/1/public/values?alt=json', function(data) {
    var d = data.feed.entry;
    for(var i in d) {
      var item = {};
      item.name = d[i].gsx$name.$t;
      item.longitude = d[i].gsx$longitude.$t;
      item.latitude = d[i].gsx$latitude.$t;
      item.phone = d[i].gsx$phone.$t;
      locations.push(item);
    }
    build();
  });
});


function build(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: new google.maps.LatLng(25.151409, 121.773),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].longitude, locations[i].latitude),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

