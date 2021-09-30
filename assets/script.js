// var today = function(){
//     var day = moment();
//     $("#time").text(day.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
//     }
//     setInterval(today, 1000);

// Try new function to show current date

$("#currentDay").text(moment.format("dddd, MMMM Do, YYYY"));