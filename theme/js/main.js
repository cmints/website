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
