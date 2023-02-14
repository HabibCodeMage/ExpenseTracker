export const generateYearsBetween = (startYear, endYear) => {
    const endDate = endYear || new Date().getFullYear();
    let years = [];

    for (var i = startYear; i <= endDate; i++) {
        years.push(startYear);
        startYear++;
    }
    return years;
}