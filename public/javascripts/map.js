var map = L.map('map', {
  scrollWheelZoom: true,
  watch: true
});

map.locate({setView: true, maxZoom: 13});

// map.setView([-33.43787,-70.65065], 13); // set view on Plaza de armas, SAntiago, Chile

// Dark theme
// var CartoDB_DarkMatter = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png', {
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
//   subdomains: 'abcd',
//   maxZoom: 19
// });

// Light theme
var CartoDB_Positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);