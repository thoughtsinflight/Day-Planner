var timeSlot = document.getElementById("#time");
var inputSlot = document.getElementById("#input");
var buttonSlot = document.getElementById("#button");
var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)

$("#current").text(currentDateAndTime);
console.log(currentDateAndTime); 