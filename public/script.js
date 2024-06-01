let expenses = [];
let totalAmount = 0;

const typeSelect = document.getElementById('type_select');
const amountInput = document.getElementById('amount_input');
const descriptionInput = document.getElementById('description');
const dateInput = document.getElementById('date_input');
const addBtn = document.getElementById('add_btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const type = typeSelect.value;
    const Description = descriptionInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (type === '') {
        alert('Please select a type');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (Description === '') {
        alert('Please enter Description');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    const expense = { type, amount, Description, date };
    expenses.push(expense);

    if (type === 'Income') {
        totalAmount += amount;
    } else if (type === 'Expense') {
        totalAmount -= amount;
    }

    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const TypeCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const DescriptionCell = newRow.insertCell();
    const DateCell = newRow.insertCell();
    const DeleteCell = newRow.insertCell();

    TypeCell.textContent = expense.type;
    AmountCell.textContent = expense.amount;
    DescriptionCell.textContent = expense.Description;
    DateCell.textContent = expense.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
            if (expense.type === 'Income') {
                totalAmount -= expense.amount;
            } else if (expense.type === 'Expense') {
                totalAmount += expense.amount;
            }

            totalAmountCell.textContent = totalAmount;
            expenseTableBody.removeChild(newRow);
        }
    });

    DeleteCell.appendChild(deleteBtn);
});
