require("./_contextMenu");

let actionQueu = [];

Reveal.addEventListener('fragmentshown', function( event )
{
  if (event.fragment.dataset.dequeue)
  {
    dequeue();
  }
  if (event.fragment.dataset.queue)
  {
    actionQueu.push([event.fragment.dataset.queue, event.fragment]);
  }
  if (event.fragment.dataset.action)
  {
    execAction(event.fragment.dataset.action, event.fragment);
  }
});

Reveal.configure({
  keyboard: {
    13: dequeue
  }
});

function dequeue()
{
  if (actionQueu.length == 0)
    return;
  let [action, fragment] = actionQueu.pop();
  if (action)
    execAction(action, fragment);
}


document.body.addEventListener("click", onClick, false);
document.body.addEventListener("change", onChange, false);
document.addEventListener("DOMContentLoaded", domLoaded, false);

document.querySelectorAll('[data-hover="highlight-feature"]').forEach((elem) => 
{
  const featuresList = document.querySelector("#features-list");
  elem.addEventListener("mouseover", (e) =>
  {
    let action = findParentData(e.target, "info", false);
    featuresList.className = "";
    if (action)
      featuresList.classList.add(action);
  }, false);
  elem.addEventListener("mouseout", (e) =>
  {
    featuresList.className = "";
  });
});

function domLoaded()
{
  const tocListElem = document.querySelector("#toc-list");
  createTocItem = (text, id) =>
  {
    const listItem = document.createElement("li");
    const anchorItem = document.createElement("a");
    anchorItem.setAttribute("href", `#/${id}`);
    anchorItem.textContent = text;
    listItem.appendChild(anchorItem);
    tocListElem.appendChild(listItem);
  };
  for (const section of document.querySelectorAll("section"))
  {
    const header = section.querySelector("h3");
    if (section.id == "toc")
      continue;

    let text = header ? header.textContent : section.id;
    if (section.id == "start")
      text = section.id;

    createTocItem(text, section.id);
  }
}

function onClick(e)
{
  let actions = findParentData(e.target, "click-action", false);
  if (!actions)
    return;

  actions = actions.split(",");
  for (let action of actions)
  {
    execAction(action, e.target);
  }
}

function onChange(e)
{
  let actions = findParentData(e.target, "change", false);
  if (!actions)
    return;
  actions = actions.split(",");
  for (let action of actions)
  {
    execAction(action, e.target);
  }
}

function findParentData(element, dataName, returnElement)
{
  element = element.closest(`[data-${dataName}]`);
  if (!element)
    return null;
  if (returnElement)
    return element;
  return element.getAttribute(`data-${dataName}`);
}

function findSection(el)
{
  while (el = el.parentElement)
  {
    if (el.tagName.toLowerCase() == "section")
      return el;
  } 
}

function execAction(action, element)
{
  switch (action)
  {
    case "set-button-german":
      const locale = document.querySelector("#fix-dir-select").value;
      const doneButton = document.getElementById("done-button");
      if (locale == "de")
      {
        doneButton.textContent = "Fertigstellen";
      }
      else if (locale == "he")
      {
        doneButton.textContent = "בוצע";
        document.querySelector("#fix-dir-layout").setAttribute("dir", "rtl");
      }
      break;
    case "add-flexible-width":
      document.querySelector("#fix-dir-layout").classList.add("flex-width");
      break;
    case "add-right-margin":
      document.querySelector("#fix-dir-layout").classList.add("marginate");
      const arabic = document.createElement("option");
      arabic.textContent = "עברית (HE)";
      arabic.value = "he";
      document.querySelector("#fix-dir-select").appendChild(arabic);
      break;
    case "add-left-margin":
      document.querySelector("#fix-dir-layout").classList.add("rtl");
      break;
    case "move-item-up":
      element.closest(".order").classList.add("reorder");
      break;
    case "remove-removable":
      const removable = findSection(element).querySelector(".removable:not(.remove)");
      if (removable)
        removable.classList.add("remove");
      break;
    case "play-animation":
      element.closest(".jump-chars").classList.toggle("play");
      break;
    case "set-header-rtl": {
      const wrapper = element.closest(".common-rtl-issues");
      wrapper.querySelector(".header").setAttribute("dir", "rtl");
      wrapper.querySelector(".header").setAttribute("lang", "ar");
      wrapper.querySelector(".html.target").style.display = "none";
      wrapper.querySelector(".html.source").style.display = "block";
    }
      break;
    case "adjust-rtl": {
      const wrapper = element.closest(".common-rtl-issues");
      wrapper.querySelector(".header").classList.add("adjust");
    }
      break;
    case "play-char-jumper":
      element.closest(".intro").querySelector(".char-jumper").classList.add("play");
      break;
  }
}
