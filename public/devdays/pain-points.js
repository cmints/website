const doneButton = document.getElementById("done-button");

document.body.addEventListener("click", onClick, false);
document.body.addEventListener("change", onChange, false);

function onClick(e)
{
  let actions = findParentData(e.target, "action", false);
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

function execAction(action, element)
{
  switch (action)
  {
    case "set-button-german":
      doneButton.textContent = "Fertigstellen";
      break;
    case "add-flexible-width":
      doneButton.style.width = "100%";
      break;
  }
}
