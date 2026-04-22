const remarkError = document.getElementById("remark-error");
const amountError = document.getElementById("amount-error");
const totalExpense = document.getElementById("totalExpense");

let totalAmount = 0;

function addExpense() {

    const remarkInput = document.getElementById("expense-remark");
    const amountInput = document.getElementById("expense-amt");

    const expenseRemark = remarkInput.value;
    const expenseAmount = Number(amountInput.value);


    if (expenseRemark.trim() === "") {
        remarkError.style.display = "block";
     
    } else {
        remarkError.style.display = "none";
    }

    if (isNaN(expenseAmount) || expenseAmount <= 0) {
        amountError.style.display = "block"

    }
    else {
        amountError.style.display = "none"
    }

    if (expenseRemark.trim() === "" && expenseAmount.trim() === "") {
        expenseList.style.display = "none"

    }
    if (expenseAmount === "" || expenseAmount === "") {
        expenseList.style.display = "none"
    }

    const expenseList = document.getElementById("expense-list")

    const expenseItem = document.createElement("div");
    expenseItem.className = "expense-item"

    const expenseDate = document.createElement("div");
    expenseDate.className = "col-date"
    const todayDate = new Date();
    let date = todayDate.getDate();
    let year = todayDate.getFullYear();
    let month = todayDate.getMonth() + 1;
    expenseDate.innerText = date + "-" + month + "-" + year;


    const deletebtn = document.createElement("button");
    deletebtn.className = "col-action text danger";
    deletebtn.innerHTML = `<i class="bi bi-trash3"></i>`;

    const resultRemark = document.createElement("div");
    resultRemark.className = "col-remark text-center "
    resultRemark.innerText = expenseRemark

    const resultAmt = document.createElement("div");
    resultAmt.className = "col-amount"
    resultAmt.innerText = expenseAmount

    expenseItem.appendChild(expenseDate);
    expenseItem.appendChild(resultRemark);
    expenseItem.appendChild(resultAmt);

    expenseList.appendChild(expenseItem);
    expenseItem.appendChild(deletebtn);
    console.log(typeof (expenseAmount))
    totalAmount += expenseAmount;
    totalExpense.innerHTML = totalAmount;
    remarkInput.value = "";
    amountInput.value = "";

    deletebtn.addEventListener("click", function () {
        expenseItem.remove();
        totalAmount = totalAmount - expenseAmount;
        totalExpense.innerHTML = totalAmount;
    });

}