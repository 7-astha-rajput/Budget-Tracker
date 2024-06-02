# Budget Tracker

The Budget Tracker is a simple application designed to help users track their expenses and income. It provides an easy-to-use interface for recording financial transactions, categorizing expenses, and analyzing spending habits.

## Deployed Link
https://budget-tracker-chi-flame.vercel.app/
## Features

- **Expense Tracking**: Users can log their daily expenses and income.
- **Categories**: Expenses can be categorized for better organization and analysis.
- **Budget Planning**: Set budgets for different categories and track your spending against them.
- **Visualizations**: View graphical representations of your spending patterns.

## Technologies Used

- **Frontend**:
  - HTML: Structure of the web pages.
  - CSS: Styling for a visually appealing interface.
  - JavaScript: Interactivity and dynamic content.
- **Backend**:
  - Node.js: Server-side JavaScript runtime.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing user data.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/budget-tracker.git
    cd budget-tracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up MongoDB**:
    - Ensure MongoDB is installed and running on your system.
    - Update the MongoDB connection URI in the `.env` file.

4. **Start the application**:
    ```bash
    npm start
    ```

5. **Open the application in your browser**:
    Navigate to `http://localhost:3000` in your web browser.

## Usage

### Adding Transactions:

1. Click on the "Add Transaction" button.
2. Select the transaction type (expense or salary).
3. Enter the amount, description, and date of the transaction.
4. Click on the "Add" button to save the transaction.

### Viewing Transactions:

- Transactions are displayed in a list format, showing details such as type, amount, description, and date.


## Contributing

Contributions to the Budget Tracker project are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature-branch-name
    ```
3. **Make your changes and commit them**:
    ```bash
    git commit -m "Description of your changes"
    ```
4. **Push to the branch**:
    ```bash
    git push origin feature-branch-name
    ```
5. **Create a Pull Request**.
