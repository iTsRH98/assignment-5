const themeBtn = document.getElementById("theme-btn");
const discover = document.getElementById("discover");

function getRandomColor() {
  const letters = "89ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 7)];
  }
  return color;
}

themeBtn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

discover.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

const dateContainer = document.getElementById("date-container");
function getFormattedDate() {
  const now = new Date();

  const day = now.toLocaleString("en-us", { weekday: "short" });
  const month = now.toLocaleString("en-us", { month: "short" });
  const date = now.getDate();
  const year = now.getFullYear();

  const time = `${day}, ${month} ${date} ${year}`;

  return time;
}
dateContainer.innerText = getFormattedDate();
dateContainer.classList.add("font-bold");

let completedCount = 0;
const btnPrimary = document.querySelectorAll(".btn-primary");
for (let i = 0; i < btnPrimary.length; i++) {
  const btn = btnPrimary[i];
  btn.addEventListener("click", function () {
    alert("Board updated successfully...");
    btn.setAttribute("disabled", "true");
    btn.classList.add("bg-blue-100");

    const taskNumberElement = document.getElementById("task-number");
    let currentValue = parseInt(taskNumberElement.innerText);
    if (currentValue > 0) {
      taskNumberElement.innerText = currentValue - 1;
    }

    const themeBtnNumber = document.getElementById("theme-btn-number");
    let currentBtnValue = parseInt(themeBtnNumber.innerText);
    if (currentBtnValue > 0) {
      themeBtnNumber.innerText = currentBtnValue + 1;
    }

    completedCount++;

    if (completedCount === btnPrimary.length) {
      alert("congrats!!! You have completed all the current task");
    }

    const commonTitle = "You have Completed The Task ";
    const tasksTitle = document.querySelectorAll(".tasks-title");

    for (let j = 0; j < tasksTitle.length; j++) {
      if (btn === btnPrimary[j]) {
        const task = `${commonTitle}${tasksTitle[j].innerText} at ${getTime()}`;
        addHistory(task);
      }
    }
  });
}

function addHistory(task) {
  const historyContainer = document.getElementById("history-container");
  const newHistoryItem = document.createElement("li");
  newHistoryItem.innerText = task;
  newHistoryItem.classList.add("bg-blue-100", "m-4", "p-4", "rounded-md");
  historyContainer.appendChild(newHistoryItem);
}

function getTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;

  return time;
}

const btnHistory = document.getElementById("btn-history");
btnHistory.addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";
});
