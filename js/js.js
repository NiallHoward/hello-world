$(document).ready(function(){

	// e22036c943b3dd91fce27981e4d23cd3
	// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}
	// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02 (samples API key)
	// convert kelvins to celsius

	fetch('https://api.openweathermap.org/data/2.5/forecast?id=2633352&APPID=e22036c943b3dd91fce27981e4d23cd3')
		.then(response => response.json())
		.then(function(data) {
			
			
			if (data.list[0].weather[0].main = "Rain"){
				document.getElementById("tempicon").innerHTML = "<i class=\"fas fa-cloud-showers-heavy\"></i>";
			} 
			else if( data.list[0].weather[0].main = "Drizzle"){
				document.getElementById("tempicon").innerHTML = "<i class=\"fas fa-cloud-rain\"></i>";
			} 
			else if (data.list[0].weather[0].main = "Thunderstorm" ){
				document.getElementById("tempicon").innerHTML = "<i class=\"fas fa-bolt\"></i>";
			}
			else if (data.list[0].weather[0].main = "Snow" ){
				document.getElementById("tempicon").innerHTML = "<i class=\"fas fa-snowflake\"></i>";
			}
			else if (data.list[0].weather[0].main = "Clear" ){
				document.getElementById("tempicon").innerHTML = "<i class=\"fas fa-sun\"></i>";
			}
			else if (data.list[0].weather[0].main = "Clouds" ){
				document.getElementById("tempicon").innerHTML = "<i class=\"fas fa-cloud\"></i>";
			}
			else {

			}

			var desc = data.list[0].weather[0].description;
			var cel = data.list[0].main.temp;
			var celround = cel - 273.15;
	  			
	  		document.getElementById("temp").innerHTML = desc + " " + Math.round(celround) + "&#730;";
    	});
		
});

var serverTime = new Date();

function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    serverTime = new Date(serverTime.getTime() + 1000);

    var mydate = serverTime.toLocaleString();
    var result = mydate.replace(/,/g, "<br>");
   
    $('#time').html(result);
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});
