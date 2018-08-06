export function  getBusinessDatesCount(startDate: Date, endDate: Date) {
    let count = 0;
    const curDate: Date = new Date(startDate);
    const endDateD = new Date (endDate);
    while (curDate <= endDateD) {
        const dayOfWeek = curDate.getDay();
        if (!((dayOfWeek === 6) || (dayOfWeek === 0))) {
           count++;
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}
