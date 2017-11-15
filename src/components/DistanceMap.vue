<template>

  <div class="map-wrapper">

    <div id="map"></div>
    <div id="output"></div>

  </div>
</template>

<script>

function mapLocation() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var markerCount = 0;
  var markersArray = [];

  var fromSelected = false,
      toSelected   = false;

  var distanceFrom = { lat: 56.946972, lng: 24.104104 };
  var distanceTo   = { lat: null,      lng: null };


  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var riga = new google.maps.LatLng(56.9713962,23.9890822);
    var mapOptions = {
      zoom: 10,
      center: riga
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);


    var searchFrom = new google.maps.places.SearchBox(document.getElementById('address-input-1'));
    var searchTo   = new google.maps.places.SearchBox(document.getElementById('address-input-2'));
    var smth1      = new google.maps.places.SearchBox(document.getElementById('address-input-3'));
    var smth2      = new google.maps.places.SearchBox(document.getElementById('address-input-4'));

    function setPinFromInput(inputType) {

      var resetMarkers = false

      if ( inputType == 'select_from' ) {
        var places = searchFrom.getPlaces();
      } else {
        var places = searchTo.getPlaces();
      }

      if (places.length == 0) {
        return;
      }

      if ( fromSelected && toSelected ) { 
        fromSelected = false; 
        toSelected   = false;
        resetMarkers = true;
      }

      ( inputType == 'select_from' ) ? fromSelected = true : toSelected = true


      // Clear out the old markers.

      if ( resetMarkers ) {

        markersArray.forEach(function(marker) {
          marker.setMap(null);
        });
        markersArray = [];

      }

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markersArray.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        inputType == 'select_from' ? (
          distanceFrom.lat = place.geometry.location.lat(), 
          distanceFrom.lng = place.geometry.location.lng()
        ) : ( 
          distanceTo.lat = place.geometry.location.lat(), 
          distanceTo.lng = place.geometry.location.lng()
        )

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });

      map.fitBounds(bounds);

      if ( fromSelected && toSelected ) {
        calcRoute(distanceFrom, distanceTo);
      }

    }

    searchFrom.addListener('places_changed', function() {

      setPinFromInput('select_from');

    });

    searchTo.addListener('places_changed', function() {
      
      setPinFromInput('select_to');

    });

    google.maps.event.addDomListener(map, 'click', function(event) {

      if ( markerCount == 2 ) {

        directionsDisplay.setMap(map);
        markerCount = 0;

      }


      var marker = new google.maps.Marker({position: event.latLng, map: map});

      if ( !markerCount ) {
        distanceFrom.lat = marker.position.lat();
        distanceFrom.lng = marker.position.lng();
      } else {
        distanceTo.lat   = marker.position.lat();
        distanceTo.lng   = marker.position.lng();
      }

      if ( markerCount == 1 ) {
        calcRoute(distanceFrom, distanceTo);
        setTimeout(function() {
          deleteMarkers(markersArray);
        }, 250)
      }

      markersArray.push(marker);

      markerCount++;

    })
  }

  function calcRoute(start, end) {
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
        document.querySelector('.result-text .distance span').innerHTML = '~' + response.routes[0].legs[0].distance.text;
        document.querySelector('.result-text .price span').innerHTML = '~' + (Math.floor((response.routes[0].legs[0].distance.value / 1000 ) * 0.45 + 25)) + '€';
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  function deleteMarkers(markersArray) {
    for (var i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }

}





export default {
  name: 'DistanceMap',
  data () {
    return {
      msg: ''
    }
  },
  mounted: function() {
    mapLocation();
  }
}
</script>

<style lang="stylus">

.map-wrapper
  height 530px
  width 49%
  float right
  #map
    height 100%
    width 100%
    box-shadow: 0px 0px 3px 0px #000;
    
</style>
