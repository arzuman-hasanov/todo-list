// todo area selection
let todos = document.querySelector("ul");

// close btn selection
const closeBtn = document.querySelectorAll(".close");

// input area selection
const inputSection = document.querySelector(".inputSection");

// input btn selection
const inputToDo = document.querySelector("input[name='addTodo']");

// cancel todo input btn selection
let cancelTodoInput = document.querySelector(".inputSection i");

// search input selection
const search = document.querySelector("#search");

// addTodo button selection
const addTodoBtn = document.querySelector(".addNewToDo");

// sort Ascending btn selection
const sortAsc = document.querySelector("#sortAsc");

// sort Descending btn selection
const sortDesc = document.querySelector("#sortDesc");

// todo name selection for changing its value
let todo = document.querySelectorAll(".newToDoValue");

sortAsc.addEventListener("click", (e) => {
  e.target.classList.add("hide");
  e.target.classList.remove("show");
  sortDesc.classList.add("show");
  sortDesc.classList.remove("hide");

  var list, i, switching, listitems, shouldSwitch;
  list = document.querySelector(".todos");
  switching = true;
  while (switching) {
    switching = false;
    listitems = list.getElementsByTagName("input");
    for (i = 0; i < listitems.length - 1; i++) {
      shouldSwitch = false;
      if (listitems[i].value > listitems[i + 1].value) {
        shouldSwitch = true;
        break;
      }
    }

    if (listitems[i + 1] != undefined) {
      listitems[i].parentNode.parentNode.insertBefore(
        listitems[i + 1].parentNode,
        listitems[i].parentNode
      );
      switching = true;
    }
  }
});

inputToDo.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    if (inputSection.classList.contains("hide")) {
      inputSection.classList.remove("hide");
    } else {
      let li = document.createElement("li");
      li.classList.add("todo");
      let inputValue = document.createElement("input");
      inputValue.setAttribute("type", "text");
      inputValue.value = inputToDo.value;
      inputValue.setAttribute("value", inputToDo.value);
      inputValue.classList.add("newToDoValue");
      inputValue.setAttribute("readonly", "readonly");
      let i = document.createElement("i");
      i.classList.add("fa-solid");
      i.classList.add("fa-x");
      i.classList.add("close");
      li.append(inputValue);
      li.append(i);
      todos.appendChild(li);
      inputToDo.value = "";
      todos.classList.add("show");
      todos.classList.remove("hide");
      inputValue.addEventListener("click", (e) => {
        inputValue.removeAttribute("readonly");
        inputValue.focus();
      });
      inputValue.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) {
          inputValue.setAttribute("readonly", "readonly");
        }
      });
    }
  }
});

sortDesc.addEventListener("click", (e) => {
  e.target.classList.add("hide");
  e.target.classList.remove("show");
  sortAsc.classList.add("show");
  sortAsc.classList.remove("hide");

  var list, i, switching, listitems;
  list = document.querySelector(".todos");
  switching = true;

  while (switching) {
    switching = false;
    listitems = list.getElementsByTagName("input");

    for (i = 0; i < listitems.length - 1; i++) {
      shouldSwitch = false;
      if (listitems[i].value < listitems[i + 1].value) {
        shouldSwitch = true;
        break;
      }
    }

    if (listitems[i + 1] != undefined) {
      listitems[i].parentNode.parentNode.insertBefore(
        listitems[i + 1].parentNode,
        listitems[i].parentNode
      );
      switching = true;
    }
  }
});

cancelTodoInput.addEventListener("click", () => {
  inputSection.classList.add("hide");
});

addTodoBtn.addEventListener("click", () => {
  if (inputSection.classList.contains("hide")) {
    inputSection.classList.remove("hide");
  } else {
    let li = document.createElement("li");
    li.classList.add("todo");
    let inputValue = document.createElement("input");
    inputValue.setAttribute("type", "text");
    inputValue.value = inputToDo.value;
    inputValue.setAttribute("value", inputToDo.value);
    inputValue.classList.add("newToDoValue");
    inputValue.setAttribute("readonly", "readonly");
    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-x");
    i.classList.add("close");
    li.append(inputValue);
    li.append(i);
    todos.appendChild(li);
    inputToDo.value = "";
    todos.classList.add("show");
    todos.classList.remove("hide");
    inputValue.addEventListener("click", (e) => {
      inputValue.removeAttribute("readonly");
      inputValue.focus();
    });
    inputValue.addEventListener("keypress", (e) => {
      if (e.keyCode == 13) {
        inputValue.setAttribute("readonly", "readonly");
      }
    });
  }
});

// removing todo
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
  if (todos.children.length == 0) {
    todos.classList.add("hide");
    todos.classList.remove("show");
    changeSection.style.display = "none";
  }
});

search.addEventListener("keyup", () => {
  let arr = [...todos.children];

  arr.forEach((item) => {
    if (
      !item.firstChild.value
        .toLowerCase()
        .trim()
        .includes(search.value.toLowerCase().trim())
    ) {
      item.classList.add("hide");
    } else if (
      item.firstChild.value
        .toLowerCase()
        .trim()
        .includes(search.value.toLowerCase().trim())
    ) {
      item.classList.remove("hide");
    }
  });
});
