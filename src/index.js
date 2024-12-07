// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

import "./styles.css";

// Part 1- Getting Started
let mainEl = document.querySelector("main");
// mainEl.className = "mainContainer";
mainEl.style.background = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.setAttribute("class", "flex-ctr");

// Part 2 - Creating a Menu Bar
let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.id = "top-menu";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3 - Adding menu buttons

for (let i = 0; i < menuLinks.length; i++) {
  let link = document.createElement("a");
  link.href = `${menuLinks[i].href}`;
  link.textContent = `${menuLinks[i].text}`;
  topMenuEl.append(link);
}
