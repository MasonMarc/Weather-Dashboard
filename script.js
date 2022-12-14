var buttonEl = $('#Btn')


$(buttonEl).click(function (lat, lon) {
  event.preventDefault();
  var cityName =  $('#cityName').val();
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName+'&appid=9d3d5cb93416cbf527eb8fd87e269c23'
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
    $('#mainHead').text(data.name);
    $('#mainTitle').text(data.main.temp);
    $('#mainBody').text(data.weather[0].description);
  

  }