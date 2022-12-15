var buttonEl = $('#Btn')


$(buttonEl).click(function (lat, lon) {
  event.preventDefault();
  var cityName =  $('#cityName').val();
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName+'&appid=9d3d5cb93416cbf527eb8fd87e269c23&units=imperial'
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            console.log(data.name);
            displayWeather(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });
  });


  var displayWeather = function (data) {  
    $('#mainHead').text(data.city.name + ', ' + data.city.country + ' Today');
    $('#mainTitle').text(data.list[0].main.temp + " Fahrenheit");
    $('#mainBody').text(data.list[0].weather[0].description);


    // smaLL cards -------------
    for(var i=1;i<6;i++){

    $('#dayHead'+i).text(data.city.name + ', ' + data.city.country);
    $('#dayTitle'+i).text(data.list[i].main.temp + " Fahrenheit");
    $('#dayBody'+i).text(data.list[i].weather[0].description);

    }
    // Need to add date, icon, humidity, and wind speed
  }