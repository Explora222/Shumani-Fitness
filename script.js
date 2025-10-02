// Navbar toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Tabs for class schedule
const tabs = document.querySelectorAll('.tab');
const classCards = document.querySelectorAll('.class-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    classCards.forEach(card => {
      card.classList.remove('active');
      if (card.classList.contains(tab.dataset.class)) {
        card.classList.add('active');
      }
    });
  });
});

// Testimonials carousel
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
  });
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});
nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

// Auto carousel
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 5000);

// Form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for joining! We will contact you soon.');
  form.reset();
});
