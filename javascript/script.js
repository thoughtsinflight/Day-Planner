var timeSlot = document.getElementById("#time");
var inputSlot = document.getElementById("#input");
var buttonSlot = document.getElementById("#button");
var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
var now = moment().format('HH')

$("#current").text(currentDateAndTime);
// console.log(currentDateAndTime); 

function coloringBox (time) {

  if (now < time) {
    $("#"+time).removeClass("bg-danger bg-secondary");
    $("#"+time).addClass("bg-success");
  }
  else if (now > time){
    $("#"+time).removeClass("bg-success bg-danger");
    $("#"+time).addClass("bg-secondary");
  }
  else if (now = time){
    $("#"+time).removeClass("bg-success bg-secondary");
    $("#"+time).addClass("bg-danger");
  }
}
coloringBox(9);
coloringBox(10);
coloringBox(11);
coloringBox(12);
coloringBox(13);
coloringBox(14);
coloringBox(15);
coloringBox(16);
coloringBox(17);


// event delagation
$(document).on("click", ".button", storeInput);

function storeInput() {

  const buttonClicked =$(this).attr("data-num");
  const inputVal = $('#'+buttonClicked).val()
 localStorage.setItem(buttonClicked, inputVal)
}
for (let i = 9; i < 18; i++) {
  $('#'+i).val(localStorage.getItem(i))

  
}

