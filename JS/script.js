function updateTime() {
    let today = new Date();
    
    // Get current UTC time
    let hours = today.getUTCHours().toString().padStart(2, '0');
    let minutes = today.getUTCMinutes().toString().padStart(2, '0');
    let seconds = today.getUTCSeconds().toString().padStart(2, '0');
    
    // Format as HH:MM:SS UTC
    let utcTime = `${hours}:${minutes}:${seconds} UTC`;

    // Update the DOM
    document.getElementById("utcTime").innerText = utcTime;
}

// Update every second
setInterval(updateTime, 1000);
updateTime();
