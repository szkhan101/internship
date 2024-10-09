// scripts.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('reservation-form');
  
  // Name Validation
  document.getElementById('name').addEventListener('input', function () {
      const nameError = document.getElementById('nameError');
      if (this.value.trim() === "") {
          nameError.textContent = "Name is required.";
          nameError.style.display = 'block';
          this.setCustomValidity('Name is required.');
      } else {
          nameError.style.display = 'none';
          this.setCustomValidity('');
      }
  });

  // Email Validation
  document.getElementById('email').addEventListener('input', function () {
      const emailError = document.getElementById('emailError');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.value)) {
          emailError.textContent = "Please enter a valid email address.";
          emailError.style.display = 'block';
          this.setCustomValidity('Invalid email address.');
      } else {
          emailError.style.display = 'none';
          this.setCustomValidity('');
      }
  });

  // Phone Validation
  document.getElementById('phone').addEventListener('input', function () {
      const phoneError = document.getElementById('phoneError');
      if (!/^\d{10}$/.test(this.value)) {
          phoneError.textContent = "Please enter a 10-digit phone number.";
          phoneError.style.display = 'block';
          this.setCustomValidity('Invalid phone number.');
      } else {
          phoneError.style.display = 'none';
          this.setCustomValidity('');
      }
  });

  // Date Validation
  document.getElementById('date').addEventListener('input', function () {
      const dateError = document.getElementById('dateError');
      const today = new Date().toISOString().split('T')[0];
      if (this.value < today) {
          dateError.textContent = "Reservation date cannot be in the past.";
          dateError.style.display = 'block';
          this.setCustomValidity('Invalid date.');
      } else {
          dateError.style.display = 'none';
          this.setCustomValidity('');
      }
  });

  // Guests Validation
  document.getElementById('guests').addEventListener('input', function () {
      const guestsError = document.getElementById('guestsError');
      if (this.value <= 0) {
          guestsError.textContent = "Number of guests must be at least 1.";
          guestsError.style.display = 'block';
          this.setCustomValidity('Invalid number of guests.');
      } else {
          guestsError.style.display = 'none';
          this.setCustomValidity('');
      }
  });

  // Prevent form submission if there are errors
  form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
          event.preventDefault();  // Prevent submission
          alert('Please correct the errors before submitting.');
      }
  });

});
