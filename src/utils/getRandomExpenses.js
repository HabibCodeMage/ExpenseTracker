export const generateExpenses = count => {
    const expenses = []
    const startDate = new Date("2019-01-01").getTime();
    const endDate = new Date("2023-12-31").getTime();
    const range = endDate - startDate;

    for (let i = 0; i < count; i++) {
        const title = `Expense ${i + 1}`;
        const amount = `$${(Math.random() * 1000).toFixed(2)}`;
        const date = new Date(startDate + Math.random() * range);
        expenses.push({ title, amount, date });
    }
    return expenses

}