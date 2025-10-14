// Fire of God Ministry Website Script

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("prayerForm");
  const response = document.getElementById("response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      response.textContent = "Please fill out all fields 🙏";
      response.style.color = "#ffb84d";
      return;
    }

    // Simulate sending prayer request
    response.textContent = "Sending your prayer request... 🔥";
    response.style.color = "#ffd700";

    // Simulated delay
    setTimeout(() => {
      response.textContent = `Thank you, ${name}! Your prayer request has been received. 🙏🔥`;
      response.style.color = "#00ff88";

      // Reset form
      form.reset();
    }, 2000);
  });
});
