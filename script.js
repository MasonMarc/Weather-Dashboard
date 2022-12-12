

var getUserRepos = function (lat, lon) {
  var lat = 44.34;
  var lon = 10.99;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=9d3d5cb93416cbf527eb8fd87e269c23'
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });
  };

  getUserRepos();