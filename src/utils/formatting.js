export function formatDate(dateStr) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const date = new Date(dateStr);
    const formattedMonth = months[date.getMonth()]
    const formattedDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

    return `${formattedDay} ${formattedMonth}`
}