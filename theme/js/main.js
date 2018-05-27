const {closeVisibleContext, toggleContextMenu} = require("./_contextMenu");

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

function execAction(action, element)
{
  switch (action)
  {
    case "toggle-context":
      toggleContextMenu(element);
      break;
  }
}
