document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const inputs = document.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (!valid) {
      event.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("resultModal");
  const closeBtn = document.getElementById("closeModal");

  if (modal && closeBtn) {
      modal.style.display = "block"; // Show the modal when there is a prediction result

      closeBtn.addEventListener("click", function () {
          modal.style.display = "none"; // Hide modal when clicking X
      });
  }
});

// Add Fade-in Animation on Page Load
document.addEventListener("DOMContentLoaded", function() {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.8s ease-in-out";
});

// Modal Box Functionality for Prediction Result
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("result-modal");
  const closeButton = document.getElementById("close-modal");

  if (modal) {
      closeButton.addEventListener("click", function () {
          modal.style.display = "none";
      });

      // Close when clicking outside the modal
      window.addEventListener("click", function (event) {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      });
  }
});

// Add Hover Effect to Buttons
document.querySelectorAll("button, .start-btn").forEach((btn) => {
  btn.addEventListener("mouseover", function () {
      btn.style.transform = "scale(1.05)";
      btn.style.transition = "0.3s";
  });

  btn.addEventListener("mouseleave", function () {
      btn.style.transform = "scale(1)";
  });
});
