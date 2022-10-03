let inputName = document.getElementById("formGroupExampleInput");
let inputAge = document.getElementById("formGroupExampleInput2");
let tBody = document.querySelector("tbody");
const elements = document.getElementsByClassName("row-number");

const form = {
  id: null,
  name: null,
  age: null,
};

function toSave() {
  form.id = elements.length + 1;
  form.name = inputName.value;
  form.age = inputAge.value;

  //console.log(form);

  const row = document.createElement("tr");
  row.classList = "row-number";
  row.id = form.id;

  tBody.appendChild(row);

  const id = elements.length;
  const dataId = document.createElement("td");
  dataId.innerText = id;
  row.appendChild(dataId);

  const dataName = document.createElement("td");
  dataName.innerText = form.name;
  row.appendChild(dataName);

  const dataAge = document.createElement("td");
  dataAge.innerText = form.age;
  row.appendChild(dataAge);

  // const dataBtnTd = document.createElement("td");

  let dataBtn = document.createElement("td");
  dataBtn.innerHTML =
    "<button class='btn-color' id='item ${form.id}' onclick='toRemove()'>Remove</button>";
  dataBtn.addEventListener("click", () => {
    toRemove(row.id);
    console.log(row.id);
  });

  //
  row.appendChild(dataBtn);
}

function toClean() {
  inputName.value = "";
  inputAge.value = "";
}

function toRemove(id) {
  let var1 = document.getElementById(id);
  console.log(var1);
  var1.remove();
}
