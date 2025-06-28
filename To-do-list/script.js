const inputText = document.getElementById("inputText");
const addButton = document.querySelector("button");
const taskList = document.querySelector("ul");

addButton.addEventListener("click", (ele) => {
  const taskinput = inputText.value.trim();
  if (taskinput != "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = taskinput;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("taskCheckbox");

    const btnRemove = document.createElement("button");
    btnRemove.innerText = "Remove";
    btnRemove.classList.add("btnRemove");
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnRemove);
    taskList.appendChild(li);
    inputText.value = "";

    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed");
    });

    btnRemove.addEventListener("click", () => {
      li.remove();
    });
  }
});
