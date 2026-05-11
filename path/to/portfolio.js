const particlesRoot = document.querySelector(".particles");
const scrollMeter = document.querySelector(".scroll-meter");
const revealSelectors = [
  ".section-label",
  ".about h2",
  ".about-copy p",
  ".tag-cloud span",
  ".expertise-card",
  ".experience h2",
  ".experience-item",
  ".work h2",
  ".project-card",
  ".skills h2",
  ".skill-item",
  ".certificates h2",
  ".certificate-card",
  ".testimonials h2",
  ".testimonial-card",
  ".companies h2",
  ".company-logo",
  ".cv-panel",
  ".contact h2",
  ".contact p",
  ".contact .button",
  ".site-footer p"
];

const particlePositions = [
  [12, 10, "gold"], [53, 4, ""], [68, 9, ""], [77, 13, "gold"],
  [8, 25, ""], [16, 33, ""], [61, 31, ""], [91, 23, "gold"],
  [25, 51, "gold"], [43, 47, ""], [58, 54, "gold"], [73, 48, ""],
  [6, 69, ""], [31, 74, "gold"], [52, 81, ""], [86, 76, ""],
  [17, 90, "gold"], [64, 93, ""], [94, 91, "gold"], [39, 18, ""],
  [69, 58, ""], [48, 64, "gold"], [22, 41, ""], [80, 36, ""]
];

const renderParticles = () => {
  if (!particlesRoot) return;

  particlePositions.forEach(([left, top, tone], index) => {
    const particle = document.createElement("span");
    const size = index % 5 === 0 ? 7 : 4 + (index % 3);
    particle.className = `particle ${tone}`.trim();
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${8 + (index % 7)}s`;
    particle.style.animationDelay = `${index * -0.35}s`;
    particle.style.setProperty("--line-angle", `${22 + index * 13}deg`);
    particlesRoot.appendChild(particle);
  });
};

const setupCertificateMarquee = () => {
  const track = document.querySelector(".certificate-track");
  if (!track || track.dataset.marqueeReady === "true") return;

  Array.from(track.children).forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("a").forEach((link) => link.setAttribute("tabindex", "-1"));
    track.appendChild(clone);
  });

  track.dataset.marqueeReady = "true";
};

const updateScrollMeter = () => {
  if (!scrollMeter) return;

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  const travel = Math.max(0, window.innerHeight - 94);
  scrollMeter.style.transform = `translateY(${progress * travel}px)`;
};

const updateNavHighlight = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // For demo purposes, just log the data
  console.log("Form submitted:", data);

  // Show success message
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Message Sent! <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  submitBtn.disabled = true;

  // Reset after 3 seconds
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    form.reset();
  }, 3000);
};

const setupReveals = () => {
  const revealItems = document.querySelectorAll(revealSelectors.join(","));

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 80}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

renderParticles();
setupCertificateMarquee();
setupReveals();
updateScrollMeter();
updateNavHighlight();
document.body.classList.add("loaded");

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);
}

window.addEventListener("scroll", updateScrollMeter, { passive: true });
window.addEventListener("scroll", updateNavHighlight, { passive: true });
window.addEventListener("resize", updateScrollMeter);
