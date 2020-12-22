const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

const hiddenFood = document.querySelector("#hidden_food");
const load = document.querySelector("#load");

burger.addEventListener("click", () => {
  menu.classList.contains("hidden")
    ? menu.classList.remove("hidden")
    : menu.classList.add("hidden");
});

load.addEventListener("click", () => {
  hiddenFood.classList.contains("hidden")
    ? hiddenFood.classList.remove("hidden")
    : hiddenFood.classList.add("hidden");
  load.innerHTML === "load more"
    ? (load.innerHTML = "load less")
    : (load.innerHTML = "load more");
});
