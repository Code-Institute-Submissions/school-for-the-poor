function initMap() {
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom: 10,
                center: {
                    lat: -7.28138,
                    lng: 112.692459
                }
            });    

        var labels = "ABCDEFGHIJKLMNOPQPRSTUVWXYZ";

        var locations = [
            {lat: 51.530617, lng: -0.043839},
            {lat: -7.28138, lng: 112.692459},
        ];

        var markers = locations.map(function(location, i){
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            }); 

            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
        }
