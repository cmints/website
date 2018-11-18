(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Toggle "visible" class on the context menu
 * @param {Element} buttonElem Button inside of the context menu
 */
const toggleContextMenu = (buttonElem) =>
{
  const contextMenus = buttonElem.closest(".contextMenu");
  contextMenus.classList.toggle("visible");
};

/**
 * Closes all open(.visible) context menus
 */
const closeVisibleContext = () =>
{
  const menus = document.querySelectorAll(".contextMenu.visible");
  menus.forEach((menu) => menu.classList.remove("visible"));
}

document.body.addEventListener("click", onClick, false);
document.body.addEventListener("keyup", onKeyUp, false);
function onClick(e)
{
  const element = e.target.closest("[data-action]");
  if (!element)
    closeVisibleContext();

  if (element)
    execAction(element.dataset.action, element);
}

function onKeyUp(e)
{
  if (e.key == "Escape")
    closeVisibleContext();
}

function execAction(action, element)
{
  switch (action)
  {
    case "toggle-context":
      toggleContextMenu(element);
      break;
  }
}

module.exports.closeVisibleContext = closeVisibleContext;
module.exports.toggleContextMenu = toggleContextMenu;

},{}],2:[function(require,module,exports){
"use strict";

require("./_contextMenu");

const langaugeSelectors = document.querySelectorAll(".languageSelector select");
for (const langaugeSelector of langaugeSelectors)
{
  langaugeSelector.addEventListener("change", () =>
  {
    const rootAndlocale = langaugeSelector.value;
    const page = langaugeSelector.dataset.page;
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    const port = ":" + window.location.port;
    window.location.href = `${protocol}//${hostname}${port}/${rootAndlocale}${page}`;
  });
}

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", e =>
{
  document.querySelector("#hamburger-menu").classList.toggle("visible");
});

},{"./_contextMenu":1}]},{},[2]);
