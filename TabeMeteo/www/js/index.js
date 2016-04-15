// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  loadWeather('Rome',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">Wind: '+weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction+'</li>';
      html += '<li>Visibility: '+weather.visibility+' '+weather.units.distance+'</li></ul>'; 
      html += '<br><ul><li class="currently">Sunrise/Sunset: '+weather.sunrise+', '+weather.sunset+'</li></ul>';
      html += '<br><ul><li><table><tr><td>'+weather.forecast[1].day+'</td><td>'+weather.forecast[2].day+'</td><td>'+weather.forecast[3].day+'</td></tr>';
      html += '<tr><td>'+weather.forecast[1].high+'&deg F<br>'+weather.forecast[1].low+'&deg F<br>'+weather.forecast[1].text+'</td><td>'+weather.forecast[2].high+'&deg F<br>'+weather.forecast[2].low+'&deg F<br>'+weather.forecast[1].text+'</td><td>'+weather.forecast[3].high+'&deg F<br>'+weather.forecast[3].low+'&deg F<br>'+weather.forecast[1].text+'</td></table></li></ul>';
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}