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

const contextMenus = document.querySelectorAll(".contextMenu");
for (const contextMenu of contextMenus)
{
  const contextMenuButton = contextMenu.querySelector("button");
  contextMenuButton.addEventListener("click", (e) =>
  {
    contextMenu.classList.toggle("visible");
  });
}
