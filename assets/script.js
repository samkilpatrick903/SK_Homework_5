
$("#currentDay").text(moment.format("dddd, MMMM Do, YYYY"));

var moment = moment();
var currentHour = moment.hour();
var saveBtn = $(".saveBtn");
var plannedEvent = $("#eventInput");
var userInput;
var localInput = localStorage.getItem("plannedEvent");
var keyName;

$(".saveBtn").on("click", saveEvent);

function saveEvent(event) {  
    var userEvent = $(this).siblings("input").val();
    console.log(userEvent);
    var keyName = $(this).attr("id");
    console.log(keyName);
    localStorage.setItem(keyName, userEvent);
};

$(document).ready(function(){ 
    $("button").each(function(){
        for (var i = 9; i <= 17; i++){
        $("#"+i).siblings("input").val(localStorage.getItem(""+i))
        }
    })
});

// Need to adjust timeblocks