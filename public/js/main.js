let langaugeSelectors = document.querySelectorAll(".languageSelector select");
for (const langaugeSelector of langaugeSelectors)
{
  langaugeSelector.addEventListener("change", () =>
  {
    let locale = langaugeSelector.value;
    let page = langaugeSelector.dataset.page;
    let hostname = window.location.hostname;
    let protocol = window.location.protocol;
    let port = ":" + window.location.port;
    window.location.href = protocol + "//" + hostname + port + "/" +  locale + page;
  });
}

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", e =>
{
  document.querySelector("#hamburger-menu").classList.toggle("visible");
});

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

function closeVisibleContext()
{
  const menus = document.querySelectorAll(".contextMenu.visible");
  menus.forEach((menu) => menu.classList.remove("visible"));
}

function execAction(action, element)
{
  switch (action)
  {
    case "toggle-context":
      const contextMenus = element.closest(".contextMenu");
      contextMenus.classList.toggle("visible");
      break;
  }
}
