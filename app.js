var day_html = document.getElementById('day')
var hour_html = document.getElementById('hour')
var min_html = document.getElementById('min')
var second_html = document.getElementById('second')


var now = new Date()
var examDate = new Date('5/28/2024')

var diff = examDate.getTime() - now.getTime()

 var uff =setInterval(function () {
    var currentDate = new Date()
  diff = diff - 1000
     //var second = diff / 1000
     var second = 60 - currentDate.getSeconds()
     //var min = diff / 1000 / 60
     var min = 60 - currentDate.getMinutes()
    // var hour = diff /1000 /60 / 60
      var hour = 24 -currentDate.getHours()
    var day = diff / 1000 / 60 / 60 / 24
    
     day_html.innerText = Math.floor(day) 
     hour_html.innerText =  Math.floor(hour)
     min_html.innerText = Math.floor(hour)
     second_html.innerText = Math.floor(second) }, 1000)





