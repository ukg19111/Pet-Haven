function submitRegistration() {
    const category = document.getElementById("event-category").value;
    const dogName = document.getElementById("dog-name").value;
    const breed = document.getElementById("breed").value;
    const age = document.getElementById("age").value;

    if (dogName && breed && age) {
        const eventDetails = `${category} - ${dogName} (${breed}, Age: ${age})`;
        

        // Save to localStorage for My Events section
        let events = JSON.parse(localStorage.getItem("registeredEvents")) || [];
        events.push(eventDetails);
        localStorage.setItem("registeredEvents", JSON.stringify(events));

        alert("Registration Successful!\n" + eventDetails);
        window.location.href = "myevents.html";
    } else {
        alert("Please fill out all the details.");
    }
}
