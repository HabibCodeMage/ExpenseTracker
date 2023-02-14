import Chart from "../chart/Chart"
import ExpenseChartBars from "./ExpenseChartBars"

export default ({ expensesMonth }) => {
    return (
        <Chart>
            <ExpenseChartBars expensesMonth={expensesMonth} />
        </Chart>
    )
}
