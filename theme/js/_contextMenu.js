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
