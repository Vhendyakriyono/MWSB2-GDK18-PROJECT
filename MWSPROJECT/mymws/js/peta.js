//Map
var mymap = L.map('mapid').setView([1.463476, 124.827632], 15);

//TUGAS 1
//marker
//let nlokasi = [1.463476, 124.827632];
//let nsponsor = 'Soto Rusuk Ko Petrus Sario';

//let marker= L.marker(nlokasi).addTo(mymap)
//.bindPopup(nsponsor);

//atau pada saat inisiliasi
//.bindPopup(sponsor).openPopup();

//TUGAS 2
let places=[
  {"lokasi": [1.463476, 124.827632], "sponsor" : "Loba Kanaka Sario"},
  {"lokasi": [1.465018, 124.830069], "sponsor" : "RM. Ragey Ko Petrus Sario"},
  {"lokasi": [1.464084, 124.825899], "sponsor" : "Wisata Bahari"},
  {"lokasi": [1.463272, 124.827560], "sponsor" : "RM. Ragey Roy"},
  {"lokasi": [1.467804, 124.830395], "sponsor" : "RM. Ikan Bakar Selera Laut"},
];

for (var p of places) {
  var marker=L.marker(p.lokasi).addTo(mymap)
    .bindPopup(p.sponsor);
}



//var marker = L.marker([1.463476, 124.827632]).addTo(mymap);

//Api access_token
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 19,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoidmhlbmR5YWNyaSIsImEiOiJjam5sZGxtOXgwOHY5M3JwZDl3NDJvMGRvIn0.k0A70SgfPl2mruFx1nn7sw'
  }).addTo(mymap);



//circle
//var circle = L.circle([1.463476, 124.827632], {
  //color: '#ff0059',
  //fillColor: '##0090ce',
  //fillOpacity: 0.3,
  //radius: 150,
//}).addTo(mymap);

//Polygon kordinat
//var polygon = L.polygon([
  //[1.463476, 124.827632],
  //[1.463476, 124.827632],
  //[1.463476, 124.827632],
//]).addTo(mymap);

////Circle binPopUp
//circle.bindPopup('Ini adalah circle').openPopup();
//Polygon bindPopup
//polygon.bindPopup('Tempat Kuliner Minahasa').openPopup();

//Metode Popup Html
//var popup = L.popup()
//.setLatLng([1.463476, 124.827632])
//.setContent("kuliner minahasa")
//.openOn(mymap);
