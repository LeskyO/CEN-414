// Preview the page at https://undilut-ed.github.io/cen414CalendarAssignmentJS
var theMonth = document.querySelector(".current-month");
var daysCalendar = document.querySelector(".calendarbody");
var date = new Date((year = 2023), (month = 0));
theMonth.textContent = date.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});
render();

function render() {
  const monthDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastMonthDays = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const startWeekDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  let totalCalendarDay = 6 * 7;

  let dateList = document.getElementById("importantdates");
  dateList.innerHTML = "";

  daysCalendar.innerHTML = "";

  for (let i = 1; i <= totalCalendarDay; i++) {
    let day = i - startWeekDay;
    if (i <= startWeekDay) {
      daysCalendar.innerHTML += `<div class='padding-day'>${
        lastMonthDays + day
      }</div>`;
    } else if (i <= startWeekDay + monthDays) {
      daysCalendar.innerHTML += `<div class='month-day'>${day}</div>`;
    } else {
      daysCalendar.innerHTML += `<div class='padding-day'>${
        day - monthDays
      }</div>`;
    }
  }
  highlightedDates = {
    "My Birthday": [1, 11],
    "Mum's Birthday": [4, 13],
    "Dad's Birthday": [10, 26],
    "Christmas" : [11, 24],
    "Boxing Day": [11, 25],
    "New Year": [0, 0],
    "New Year Holiday": [0, 1],
    "Good Friday": [3, 6],
    "Easter Monday": [3, 10],
    "Id El Fitr": [3, 21],
    "Id El Fitr Holiday": [3, 22],
    "Workers Day": [4, 0],
    "Childrens Day": [4, 26],
    "Democracy Day": [5, 11],
    "Id El Kabir": [5, 27],
    "Id El Kabir Holiday": [5, 28],
    "Id El Maluud": [8, 26],
    "Independence Day": [9, 0],
    "Independence Day Holiday": [9, 1],
    "Valentines day": [1,13],
  };
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let key in highlightedDates) {
    let colour;
    if (key === "My Birthday") {
      colour = "gold";
    } else if (key === "Mum's Birthday") {
      colour = "pink";
    } else if (key === "Dad's Birthday") {
      colour = "rgb(128, 128, 128)";
    } else {
      colour = "rgb(124, 75, 0)";
    }
    if (date.getMonth() == highlightedDates[key][0]) {
      let theDays = document.querySelectorAll(".month-day");
      dateList.innerHTML += `<li>${highlightedDates[key][1] + 1} ${
        months[highlightedDates[key][0]]
      }: ${key}</li>`;
      for (let i = 0; i < theDays.length; i++) {
        if (i == highlightedDates[key][1]) {
          theDays[i].style.backgroundColor = colour;
        }
      }
    }
  }
}

document.querySelectorAll(".nav-btn").forEach(function (element) {
  element.addEventListener("click", function () {
    date = new Date(theMonth.textContent);
    if (date.getMonth() == 0) {
      date.setMonth(
        date.getMonth() + (element.classList.contains("previous") ? 0 : 1)
      );
    } else if (date.getMonth() == 11) {
      date.setMonth(
        date.getMonth() + (element.classList.contains("previous") ? -1 : 0)
      );
    } else {
      date.setMonth(
        date.getMonth() + (element.classList.contains("previous") ? -1 : 1)
      );
    }
    theMonth.textContent = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    render();
  });
});
