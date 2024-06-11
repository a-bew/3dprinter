export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
  
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}${ampm}`;
  
    const formattedDateTime = `${month} ${day}, ${year}, ${formattedTime}`;
  
    return formattedDateTime;
  }