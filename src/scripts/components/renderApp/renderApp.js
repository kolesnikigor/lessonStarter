import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
  const appElement = document.getElementById("appRoot");
  const currentDate = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  renderCalendar({ appElement, currentMonth, currentYear});
  renderBar({ appElement, currentMonth, currentYear, months, renderCalendar});
};

export default renderApp;
