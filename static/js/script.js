let selectedCategory = "";

function showRegistrationForm(category) {
    selectedCategory = category;
    document.getElementById("registration-form").style.display = "flex";
    alert(`You selected: ${category}`);
}

function submitRegistration() {
    const dogName = document.getElementById("dog-name").value;
    const breed = document.getElementById("breed").value;
    const age = document.getElementById("age").value;
    const achievements = document.getElementById("achievements").value;

    if (dogName && breed && age) {
        alert("Registration Details Submitted\n\n" +
              `Category: ${selectedCategory}\n` +
              `Dog Name: ${dogName}\n` +
              `Breed: ${breed}\n` +
              `Age: ${age}\n` +
              `Achievements: ${achievements}`);
        document.getElementById("payment-section").style.display = "block";
        document.getElementById("registration-form").style.display = "none";
    } else {
        alert("Please fill out all fields.");
    }
}

function completePayment() {
    alert("Payment Successful! Thank you for registering.");
}
