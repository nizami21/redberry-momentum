export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${date.toLocaleString('Ka-ge', { month: 'short' })}, ${date.getFullYear()}`;
};