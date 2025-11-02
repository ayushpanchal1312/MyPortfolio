// Matrix rain effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "JAVA☕0123456789@#$%^&*()";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#f89820";
  ctx.font = fontSize + "px JetBrains Mono";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Form submission
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

function showToast(message, color = "#323232") {
  toast.textContent = message;
  toast.style.backgroundColor = color;
  toast.className = "show";
  setTimeout(() => toast.classList.remove("show"), 3000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" }  // ✅ REQUIRED!
    });

    if (response.ok) {
      showToast("✅ Message sent successfully!", "#2ecc71");
      form.reset();
    } else {
      const result = await response.json();
      if (result.errors) {
        showToast(result.errors.map(err => err.message).join(", "), "#e74c3c");
      } else {
        showToast("❌ Failed to send. Please try again.", "#e74c3c");
      }
    }
  } catch (error) {
    showToast("⚠️ Network error. Try again.", "#e67e22");
  }
});




  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

