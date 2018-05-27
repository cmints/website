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

module.exports.closeVisibleContext = closeVisibleContext;
module.exports.toggleContextMenu = toggleContextMenu;
