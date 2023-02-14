import React, { useState, useEffect } from 'react'
import Card from '../ui/Card'
import { lastYear } from '../../data/constants'
import ExpensItem from './ExpensItem';
import ExpenseFilter from './ExpenseFilter';
import uuid from 'react-uuid';
import ExpenseChart from './ExpenseChart';
import { getExpensesMonthsCount } from '../../utils/getExpensesWithCount';
import InfiniteScroll from 'react-infinite-scroll-component';
export default ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState(lastYear)
    const [filteredExpenses, setFilteredExpenses] = useState([])
    const [items, setItems] = useState([]);
    useEffect(() => {

        const filtered = expenses.filter(expense =>
            expense.date.getFullYear() === filteredYear)
        setFilteredExpenses(() => ([...filtered]))

    }, [expenses, filteredYear]);
    useEffect(() => {
        setItems(() => filteredExpenses.slice(0, 4))
    }, [filteredExpenses]);
    const [hasMore, setHasMore] = useState(true);
    const dropDownHandler = (event) => {
        setFilteredYear(() => Number(event.target.value))
    }
    const fetchMoreData = () => {
        // Fetch more data (20 items) and add it to the items array
        const lastIndex = items.length;
        const newItems = filteredExpenses.slice(lastIndex, lastIndex + 4);
        if (newItems.length === 0) {
            setHasMore(false);
        }
        setTimeout(() => {
            setItems(() => [...items, ...newItems])

        }, 1000);

        // If the length of the items array is greater than or equal to 100, there is no more data to fetch
    };
    return (
        <>

            <Card>
                <ExpenseChart expensesMonth=
                    {getExpensesMonthsCount(filteredExpenses)} />
                <ExpenseFilter onChangeFilter={dropDownHandler}
                    filteredYear={filteredYear} />
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={<p>No more items to load</p>}
                    useWindow={false}

                >
                    {items.map(expense =>
                        <ExpensItem key={uuid()} expense={expense} />)}
                </InfiniteScroll>


            </Card>
        </>
    )
}
