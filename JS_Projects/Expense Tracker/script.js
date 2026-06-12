let expenseName = document.getElementById("expenseName");
let amount = document.getElementById("amountEntry");
let selectCategory = document.querySelector("select");
let date = document.getElementById("dateField");
const addBtn = document.getElementById("submitBtn");
const emptyList = document.getElementById("emptyState").querySelector("h3");
const form = document.querySelector("form");

let expenses = [];

let editIndex = null;

loadExpenses();
// saveExpenses();
displayExpenseRow();
displayTotal();
updateEmptyState();

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

//creates expense object and push it to expenses array
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = expenseName.value.trim();
  const amt = amount.value.trim();
  const category = selectCatagory.value;
  const dateVal = date.value;

  // ✅ validation (VERY IMPORTANT)
  if (!name || !amt || !category || !dateVal) {
    return; // stop empty rows
  }
  if (!name || !isNaN(name)) {
    alert("Expense Name must be a valid text (not a number)");
    return;
  }

  let expense = {
    expenseName: expenseName.value,
    amount: amount.value,
    selectCategory: selectCatagory.value,
    date: date.value,
  };

  //   expenses.push(expense);
  if (editIndex !== null) {
    expenses[editIndex] = expense;
    editIndex = null;
    addBtn.innerText = "Add Expense";
  } else {
    expenses.push(expense);
  }

  saveExpenses();
  displayExpenseRow();
  displayTotal();
  updateEmptyState();

  form.reset();
});

// let rowContainer = document.getElementById("rowContainer");

//to display
function displayExpenseRow() {
  let rowContainer = document.getElementById("rowContainer");
  rowContainer.innerHTML = "";

  expenses.forEach(function (e, index) {
    let expenseRow = document.createElement("div");
    expenseRow.classList = "expenseRow";

    let name = document.createElement("div");
    name.innerText = e.expenseName;

    let amountInput = document.createElement("div");
    amountInput.innerText = `₹ ${e.amount}`;

    let category = document.createElement("div");
    category.innerText = e.selectCategory;

    let dateInput = document.createElement("div");
    dateInput.innerText = e.date;

    let actions = document.createElement("div");
    let editBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    delBtn.innerText = "Delete";
    editBtn.classList = "editBtn";
    delBtn.classList = "delBtn";

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    editBtn.addEventListener("click", function () {
      alert("Edit the details in form");
      expenseName.value = e.expenseName;
      amount.value =  e.amount;
      selectCategory.value = e.selectCategory;
      date.value = e.date;

      editIndex = index;
      form.querySelector("button").innerText = "Update Expense";
    });

    delBtn.addEventListener("click", function () {
      expenses.splice(index, 1);
      saveExpenses();
      displayExpenseRow();
      displayTotal();
      updateEmptyState();
    });

    expenseRow.appendChild(name);
    expenseRow.appendChild(amountInput);
    expenseRow.appendChild(category);
    expenseRow.appendChild(dateInput);
    expenseRow.appendChild(actions);

    rowContainer.appendChild(expenseRow);
  });
}

function displayTotal() {
  let totalAmount = document.getElementById("totalExpense").querySelector("p");
  let sum = 0;
  expenses.forEach(function (e) {
    sum += Number(e.amount);
  });
  totalAmount.innerText = `₹ ${sum}`; 
}

function updateEmptyState() {
  if (expenses.length > 0) {
    emptyList.style.display = "none";
  } else {
    emptyList.style.display = "block";
  }
}

function loadExpenses() {
  let savedExpenses = localStorage.getItem("expenses");

  if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
  }
}
