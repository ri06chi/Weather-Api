$(function() {

	var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var temp = $('#temp');
	var pressure = $('#pressure');
	var weather = $("#weather-icon");
	var iconLink = 'http://openweathermap.org/img/w/';
	
	$(weather)
		.hide();




	$('#search')
		.click(getTemp);

	function getTemp() {
		var cityName = $('#city-name').val();
		if(!cityName.lenght) cityName = "Gdynia";

		$.ajax({
			url: url + cityName + '&mode=json&units=metric' + '&APPID=9ca0cfe713c745eb66268a80dfa1ef98',
			method: 'GET',
			success: getWeather
		});

	}

	function getWeather(res) {		

		temp
			.text(res.main.temp)
			.append(' &#8451;');
		pressure
			.text(res.main.pressure)
			.append(' hPa');
		weather
			.attr("src","http://openweathermap.org/img/w/" + res.weather[0].icon + ".png");

		showImg();

		

		}

	function showImg() {
		$(weather)
			.show();
	}














	});