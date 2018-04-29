const doneButton = document.getElementById("done-button");

let actionQueu = [];

Reveal.addEventListener('fragmentshown', function( event )
{
  if (event.fragment.dataset.queue)
  {
    actionQueu.push([event.fragment.dataset.queue, event.fragment]);
  }
});

Reveal.configure({
  keyboard: {
    13: function() {
      if (actionQueu.length == 0)
        return;
      let [action, fragment] = actionQueu.pop();
      if (action)
        execAction(action, fragment);
    }  
  }
});


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
    case "move-item-up":
      let prevContent = element.previousElementSibling.textContent;
      element.previousElementSibling.textContent = element.textContent;
      element.textContent = prevContent;
      break;
  }
}
