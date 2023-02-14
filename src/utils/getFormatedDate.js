export default function (date) {
    const month = date.toLocaleString('en-US', { month: 'long' })
    const day = date.toLocaleString('en-US', { day: '2-digit' })
    const year = date.getFullYear()
    return { day, month, year }

}