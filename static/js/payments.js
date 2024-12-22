// JavaScript: Payments Section Functionality

document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("paymentForm");
    const upiRadio = document.getElementById("upi");
    const netBankingRadio = document.getElementById("netbanking");
    const codRadio = document.getElementById("cod");

    const upiDetails = document.getElementById("upiDetails");
    const netBankingDetails = document.getElementById("netBankingDetails");
    const confirmation = document.getElementById("confirmation");

    // Show or hide payment details based on selection
    paymentForm.addEventListener("change", (event) => {
        const selectedPayment = event.target.value;

        upiDetails.style.display = selectedPayment === "upi" ? "block" : "none";
        netBankingDetails.style.display = selectedPayment === "netbanking" ? "block" : "none";
    });

    // Handle form submission
    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedPayment = paymentForm.paymentMethod.value;

        let message = "";
        if (selectedPayment === "upi") {
            const upiId = document.getElementById("upiId").value;
            if (!upiId) {
                alert("Please enter your UPI ID.");
                return;
            }
            message = `Payment through UPI is selected. UPI ID: ${upiId}`;
        } else if (selectedPayment === "netbanking") {
            const bank = document.getElementById("bank").value;
            if (!bank) {
                alert("Please select a bank.");
                return;
            }
            message = `Payment through Net Banking is selected. Bank: ${bank}`;
        } else if (selectedPayment === "cod") {
            message = "Cash on Delivery is selected.";
        }

        confirmation.textContent = message;
        paymentForm.reset();
        upiDetails.style.display = "none";
        netBankingDetails.style.display = "none";
    });
});
