function stringToTime(timeString) {
    const minutes = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty"];
    const hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  
    const [hourStr, minStr] = timeString.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minStr, 10);
  
    if (hour < 0 || hour > 24 || minute < 0 || minute > 59) {
      return "Invalid time format";
    }
  
    let time = "";
  
    if (hour == 0 && minute == 0) {
        time = "midnight";
    } else if (hour == 12 && minute == 0) {
        time = "noon";
    } else {
        const period = hour < 12 ? "AM" : "PM";
        const formattedHour = hour <= 12 ? hours[hour] : hours[hour % 12];
        if (minute === 0) {
            time = `${formattedHour} o'clock ${period}`;
        } else if (minute < 10) {
            time = `${formattedHour} oh ${minutes[minute]} ${period}`;
        } else if (minute < 20) {
            time = `${formattedHour} ${minutes[minute]} ${period}`;
        } else if (minute % 10 === 0) {
            time = `${formattedHour} ${tens[Math.floor(minute / 10)]} ${period}`;
        } else {
            time = `${formattedHour} ${tens[Math.floor(minute / 10)]} ${minutes[minute % 10]} ${period}`;
        }
    }
    
    return time;
}
  
  module.exports = stringToTime;
  