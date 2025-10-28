// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close-btn");
  const sendBtn = document.getElementById("send-suggestion");
  const contactModal = document.getElementById("contact-modal");
  const suggestionBox = document.getElementById("suggestion");

  // ✅ Show modal automatically when ContactUs.html is opened
  contactModal.style.display = "flex";

  // ✅ Close modal when '×' clicked
  closeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  // ✅ Close modal if clicked outside the contact box
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      window.location.href = "index.html";
    }
  });

  // ✅ Handle suggestion submission
  sendBtn.addEventListener("click", () => {
    const suggestion = suggestionBox.value.trim();

    if (suggestion) {
      alert("Thank you for your feedback! 😊");
      suggestionBox.value = "";
      contactModal.style.display = "none";
      // Optional redirect after sending
      window.location.href = "index.html";
    } else {
      alert("Please write a suggestion before sending.");
    }
  });
});
