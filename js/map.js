// Initialize Firebase
var config = {
    apiKey: "AIzaSyCngnYmds3kumgSxI6ILWixSPBZuEnn8IE",
    authDomain: "androne-1494224644502.firebaseapp.com",
    databaseURL: "https://androne-1494224644502.firebaseio.com",
    projectId: "androne-1494224644502",
    storageBucket: "",
    messagingSenderId: "270186001542"
};
firebase.initializeApp(config);


//Sets the view for the map 
//L.mapbox.accessToken = 'pk.eyJ1IjoianRvbmNodW5vIiwiYSI6ImNqMmZxaXRqaTA3Z28yeG52ZjBtdWRnbG8ifQ.syXxENAgJ2u38pANDp7vRg';
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//create the blue marker 
var marker = L.marker([51.5, -0.09]).addTo(mymap);

//creates the red circle
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

//blue triangle
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//popup object
var popup = L.popup();
//when a place on the map is clicked, the lat/long coordinates will be displayed in the popup
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


//establishes the background for the map - mapbox satellite view 

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianRvbmNodW5vIiwiYSI6ImNqMmZxaXRqaTA3Z28yeG52ZjBtdWRnbG8ifQ.syXxENAgJ2u38pANDp7vRg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoianRvbmNodW5vIiwiYSI6ImNqMmZxaXRqaTA3Z28yeG52ZjBtdWRnbG8ifQ.syXxENAgJ2u38pANDp7vRg'
}).addTo(mymap);    
