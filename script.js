var buttonEl = $('#Btn')


$(buttonEl).click(function () {
  event.preventDefault();
  var cityName =  $('#cityName').val();
  localStorage.setItem('cityName', cityName);
  var city = localStorage.getItem('cityName');
  $('.cities').append(('<h2class="card-header"><button id="Btni" class="btn-dark">' + city + '</button></h2>'));
  getResult(cityName)
});


$('#Btni').click(function () {
  // event.preventDefault();
  // var cityName =  $('#Btni').val();
  console.log('hey');
  console.log($('#Btni').val());
  // getResult(cityName)
});


var getResult = function(cityName){
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName+'&appid=9d3d5cb93416cbf527eb8fd87e269c23&units=imperial'
fetch(apiUrl)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeather(data);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Unable to connect');
  });
}

  var displayWeather = function (data) {  
    
    for(var i=0;i<6;i++){
      var day = parseInt(dayjs().format('D'));
      var date = dayjs().format('dddd, MMMM ' + (day +i));
    $('#dayHead'+i).text(data.city.name + ', ' + data.city.country + ' ' + date);
    $('#dayTitle'+i).text(data.list[i].main.temp + " Fahrenheit");
    $('#dayBodya'+i).text('Wind Spd: ' + data.list[i].wind.speed);
    $('#dayBodyb'+i).text('Humidity: ' + data.list[i].main.humidity);
    $('#dayBodyc'+i).text(data.list[i].weather[0].description);

  var id = data.list[i].weather[0].id
  if(id>=200 && id<300){
    var url = 'http://openweathermap.org/img/wn/11d@2x.png'
  } else if (id>=300 && id<400){
    var url = 'http://openweathermap.org/img/wn/09d@2x.png'
  } else if (id>=500 && id<600){
    var url = 'http://openweathermap.org/img/wn/10d@2x.png'
  } else if (id>=600 && id<700){
    var url = 'http://openweathermap.org/img/wn/13d@2x.png'
  } else if (id>=700 && id<800){
    var url = 'http://openweathermap.org/img/wn/50d@2x.png'
  } else if (id==800){
    var url = 'http://openweathermap.org/img/wn/01d@2x.png'
  } else {
    var url = 'http://openweathermap.org/img/wn/02d@2x.png'
  }
  $('#dayPic'+i).attr('src', url);
 
    }
  }