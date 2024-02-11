const switcher = document.getElementById("rangeInput");

function changeTheme() {
  const body = document.documentElement;
  const value = switcher.value;
  console.log(value);
  if (value === "1") {
    body.removeAttribute("data-theme");
  } else if (value === "2") {
    body.setAttribute("data-theme", "light");
  } else if (value === "3") {
    body.setAttribute("data-theme", "special");
  }
}

switcher.addEventListener("input", changeTheme);
