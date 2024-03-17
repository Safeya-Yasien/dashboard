"use strict";

const dropdown = document.querySelectorAll(".dropdown");
const dashboardContent = document.querySelector(".dashboard-content");
const bar = document.querySelector(".bar");
const topBarLinks = document.querySelectorAll("#top-bar-link");
const tabLinks = document.querySelectorAll(".tab");
const gridIcon = document.querySelector(".grid-icon");
const listIcon = document.querySelector(".list-icon");
const cards = document.querySelectorAll(".cards");
const boxs = document.querySelectorAll(".boxs");

dropdown.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let subMenu = link.getAttribute("data-menu");
    document.getElementById(subMenu).classList.toggle("show");
  });
});

bar.addEventListener("click", () => {
  dashboardContent.classList.toggle("hide-side-bar");
});

// top bar links
topBarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let topBarLink = link.getAttribute("data-area-tab");
    let tabId = $("#" + topBarLink);

    topBarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    tabLinks.forEach((tab) => {
      tab.classList.remove("active");
    });

    link.classList.add("active");
    tabId.addClass("active").hide().fadeIn(1000);
  });
});

// grid and list
listIcon.addEventListener("click", (e) => {
  e.preventDefault();

  cards.forEach((card) => {
    card.classList.add("listed");
  });

  boxs.forEach((box) => {
    box.classList.add("listed");
  });
});

gridIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cards.forEach((card) => {
    card.classList.remove("listed");
  });

  boxs.forEach((box) => {
    box.classList.remove("listed");
  });
});
