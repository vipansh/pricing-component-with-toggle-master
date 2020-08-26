const checkbox = document.querySelector(".toggle");
const priceMonth = document.querySelectorAll(".annually-cost");
const priceYear = document.querySelectorAll(".monthly-cost");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    priceYear.forEach((price) => price.classList.add("hidden"));
    priceMonth.forEach((price) => price.classList.remove("hidden"));
  } else {
    priceYear.forEach((price) => price.classList.remove("hidden"));
    priceMonth.forEach((price) => price.classList.add("hidden"));
  }
});
console.log(checkbox.checked);
