import { generateYearsBetween } from '../utils/getAllYearsBwDate'
import { generateExpenses } from '../utils/getRandomExpenses'
export const expenses = generateExpenses(200);
export const expenseForm = {
    title: "",
    date: "",
    amount: ""
}
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const minDate = new Date("2019-01-01");
export const maxDate = new Date("2023-12-30");
export const filterYears = generateYearsBetween(minDate.getFullYear(), maxDate.getFullYear())
export const lastYear = filterYears[filterYears.length - 1]