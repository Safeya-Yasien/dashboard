"use strict";

const dropdown = document.querySelectorAll(".dropdown");
const dashboardContent = document.querySelector(".dashboard-content");
const bar = document.querySelector(".bar")

dropdown.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let subMenu = link.getAttribute("data-menu");
    document.getElementById(subMenu).classList.toggle("show");
  });
});


bar.addEventListener("click", () => {
    dashboardContent.classList.toggle("hide-side-bar")
})