var locations = [
    ['陳家麵店', 25.151838, 121.7703, 4],
    ['八方雲集', 25.15134, 121.77134, 4],
    ['永和豆漿', 25.15205, 121.7695, 4],
    ['滿大碗', 25.15165, 121.7709, 4]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
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