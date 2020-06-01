// today
var dateToday = moment().format("dddd, MMM Do YYYY");

$("#currentDay").text(dateToday);

// nine to five
var hours = [
  { itTime: "9", numTime: 0900 },
  { itTime: "10", numTime: 1000 },
  { itTime: "11", numTime: 1100 },
  { itTime: "12", numTime: 1200 },
  { itTime: "13", numTime: 1300 },
  { itTime: "14", numTime: 1400 },
  { itTime: "15", numTime: 1500 },
  { itTime: "16", numTime: 1600 },
  { itTime: "17", numTime: 1700 },
];

// get 9-5
hours.map((hour) => {
  var hourRow = $("<div>");
  hourRow.attr("class", "row");

  var hourSpan = $("<span>");
  hourSpan.attr("class", "hour col");
  hourSpan.text(hour.itTime);
  hourRow.append(hourSpan);

  // click so you can type
  var hourDescription = $("<textarea>");
  hourDescription.attr("class", "description");

  var saveBtn = $("<button>");
  saveBtn.attr("class", "saveBtn");
  saveBtn.text("Save");

  // click save
  saveBtn.on("click", function () {
  // keep
    var event = hourDescription.val();
    localStorage.setItem(hour.itTime, event);
  });

  var storedValue = localStorage.getItem(hour.itTime);

  // use keep
  if (storedValue) {
    hourDescription.val(storedValue);
  }

  // inventory
  $(".time-block").append(hourRow);
  hourRow.append(hourDescription);
  hourRow.append(saveBtn);

  var timeCurrent = parseInt(moment().format("HH") + "00");
  var hourCurrent = parseInt(hour.numTime);

  // yesterday is history tomorrow is a mystery today is a gift (color code)
  if (hourCurrent === timeCurrent) {
    hourDescription.addClass("present");
  } else if (hourCurrent <= timeCurrent) {
    hourDescription.addClass("past");
  } else {
    hourDescription.addClass("future");
  }
});
