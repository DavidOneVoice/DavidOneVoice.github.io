function updatedTime() {
    let today = new Date();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    let day = today.getUTCDay();
    let dayOfWeek = (daylist[day]);
    let currentDayOfWeek = document.getElementById('dayOfWeek');
    currentDayOfWeek.innerText = dayOfWeek;
    let firsthour = today.getHours();
    let hour = (firsthour < 10) ? `0 ${firsthour}` : firsthour;
    let firstminute = today.getMinutes();
    let minute = (firstminute < 10) ? `0 ${firstminute}` : firstminute;
    let firstsecond = today.getSeconds();
    let second = (firstsecond < 10) ? `0 ${firstsecond}` : firstsecond;
    let prepand = (hour >= 12) ? " PM " : " AM ";
    let currentTime = `${hour} : ${minute} : ${second}  ${prepand}`
    let time = document.getElementById("time");
    time.innerText = currentTime;
}
setInterval(updatedTime, 1000);