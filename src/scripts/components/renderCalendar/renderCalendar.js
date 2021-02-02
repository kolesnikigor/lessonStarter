const renderCalendar = ({
  appElement,
  currentDate
}) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  const calendarHeadRow = document.createElement("tr");
  const calendarBodyRow = document.createElement("tr");
  calendarContainer.classList.add("calendar-container");
  calendarHead.append(calendarHeadRow);
  calendarBody.append(calendarBodyRow);
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);
  // let currentDate = new Date();
  const SECONDS_IN_A_DAY = 86400000;
  let getYear = currentDate.getFullYear(); //2017
  let getMonth = currentDate.getMonth();
  const FIRST_DAY_IN_A_MONTH = Date.parse(new Date(getYear, getMonth, 1));
  const LAST_DAY_IN_A_MONTH = Date.parse(new Date(getYear, getMonth + 1, 0));

  // console.log(FIRST_DAY_IN_A_MONTH);
  // console.log(LAST_DAY_IN_A_MONTH);
  // let firstDay1 = new Data(FIRST_DAY_IN_A_MONTH)/* .toString().substring(8, 9) */;
  // console.log(firstDay1);
  let firstDay = 1;
  for (let i = FIRST_DAY_IN_A_MONTH; i <= LAST_DAY_IN_A_MONTH; i = i + SECONDS_IN_A_DAY) {
    let ThElement = document.createElement("th");
    ThElement.classList.add("calendar-head__element");
    let WeekDay = document.createElement("span");
    WeekDay.classList.add("calendar-head__week-day");
    let [DayNum, WeekDayName] = new Date(i).toLocaleDateString("en-US", {
      day: 'numeric',
      weekday: 'short'
    }).toString().split(" ");
    WeekDay.innerHTML = WeekDayName;
    let MonthDay = document.createElement("span");
    MonthDay.classList.add("calendar-head__month-day");
    MonthDay.innerHTML = DayNum;
    ThElement.append(WeekDay);
    ThElement.append(MonthDay);
    calendarHeadRow.append(ThElement);
    let TbElement = document.createElement("th");
    TbElement.classList.add("calendar-body__element");
    calendarBodyRow.append(TbElement);
    // console.log(WeekDayName == "Sat" || 'Sun');
    if (WeekDayName == 'Sat' || WeekDayName == 'Sun') {
      ThElement.classList.add('calendar-head__element--day-off');
      TbElement.classList.add('calendar-body__element--day-off');
    }
  };
};

export default renderCalendar;