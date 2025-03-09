window.addEventListener("load", () => {
    // Handle contact form submission
    document.getElementById("contactForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const responseMessage = document.getElementById("responseMessage");

        try {
            const response = await fetch("http://localhost:5000/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const result = await response.json();

            if (response.ok) {
                responseMessage.textContent = "Bericht succesvol verzonden!";
                responseMessage.style.color = "green";
                document.getElementById("contactForm").reset();
            } else {
                responseMessage.textContent = result.message || "Er is een fout opgetreden.";
                responseMessage.style.color = "red";
            }
        } catch (error) {
            responseMessage.textContent = "Er is een probleem met de server.";
            responseMessage.style.color = "red";
        }
    });
});