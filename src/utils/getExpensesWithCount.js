import { months } from "../data/constants"
export const getExpensesMonthsCount = (expenses) => {
    let expensesMonthsCount = months.map(month => {
        return { label: month, value: 0 }
    })
    expenses.forEach(({ date }) => {
        expensesMonthsCount[date.getMonth()].value += 1
    })
    const getExpensesValues = expensesMonthsCount.map(({ value }) => value)
    const maxValue = Math.max(...getExpensesValues)
    expensesMonthsCount = expensesMonthsCount.map(expense => {
        return { ...expense, maxValue }
    })
    return expensesMonthsCount
}