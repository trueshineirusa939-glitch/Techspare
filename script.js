const serviceButton = document.getElementById("serviceButton");

serviceButton.addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("full name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const booking = {
        name: name,
        email: email,
        date: date,
        time: time
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    document.getElementById("bookingMessage").textContent =
        "Booking saved successfully! We will contact you to confirm your space.";

    this.reset();
});
