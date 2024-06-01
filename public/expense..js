// Fetch expenses from the backend and populate the expense table
fetch('/api/expenses')
    .then(response => response.json())
    .then(expenses => {
        // Populate the expense table with the data received from the backend
        expenses.forEach(expense => {
            // Add expense to the table (you can define this function)
            addExpenseToTable(expense);
        });
    })
    .catch(error => {
        console.error('Error fetching expenses:', error);
    });

// Function to add an expense to the expense table
function addExpenseToTable(expense) {
    // Implement this function to add the expense to the table
}

// Event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form data
    const type = document.getElementById('type_select').value;
    const amount = parseFloat(document.getElementById('amount_input').value);
    const description = document.getElementById('description').value;
    const date = document.getElementById('date_input').value;
    
    // Send POST request to add the expense
    fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, amount, description, date })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add expense');
        }
        return response.json();
    })
    .then(newExpense => {
        // Add the new expense to the table
        addExpenseToTable(newExpense);
        // Clear form fields
        document.getElementById('type_select').value = '';
        document.getElementById('amount_input').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date_input').value = '';
    })
    .catch(error => {
        console.error('Error adding expense:', error);
    });
});

// Event delegation for delete buttons (assuming the table exists when this code runs)
document.getElementById('expense-table-body').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const id = event.target.dataset.id; // Get the ID of the expense to delete
        // Send DELETE request to delete the expense
        fetch(`/api/expenses/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete expense');
            }
            // Remove the expense row from the table
            event.target.closest('tr').remove();
        })
        .catch(error => {
            console.error('Error deleting expense:', error);
        });
    }
});
