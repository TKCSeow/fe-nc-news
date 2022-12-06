
function formatMonth(month) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return months[month]
}

function formatDay(day) {
    return day < 10 ? `0${day}` : day;
}

export function formatDateForArticleList(dateStr) {
    
    const date = new Date(dateStr);

    return `${formatDay(date.getDate())} ${formatMonth(date.getMonth())}`
}

export function formatDateForArticle(dateStr) {   
    const date = new Date(dateStr);

    return `${formatDay(date.getDate())} ${formatMonth(date.getMonth())} ${date.getFullYear()}`
}

export function formatDateForComments(dateStr) {   
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleString('en-GB');
    const trimmedFormattedDate = formattedDate.split('').splice(0, formattedDate.length - 3).join('')
    return trimmedFormattedDate.replace(',', '');
}