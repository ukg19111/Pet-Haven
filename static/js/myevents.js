document.addEventListener("DOMContentLoaded", () => {
    const events = JSON.parse(localStorage.getItem("registeredEvents")) || [];
    const myEventsList = document.getElementById("my-events-list");

    myEventsList.innerHTML = "";

    if (events.length > 0) {
        events.forEach(event => {
            const listItem = document.createElement("li");
            listItem.textContent = event;
            myEventsList.appendChild(listItem);
        });
    } else {
        myEventsList.innerHTML = "<li>No events registered yet.</li>";
    }
});
