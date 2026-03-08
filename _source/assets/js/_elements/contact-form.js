/* ----------------------------------------------------------------------------
Contact Form with Netlify Submission
---------------------------------------------------------------------------- */

export default class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.form = null;
    this.statusElement = null;
    this.submitHandler = this.handleSubmit.bind(this);
  }
  
  showStatus(message, type = 'success') {
    if (!this.statusElement) return;
    
    this.statusElement.textContent = message;
    this.statusElement.className = `form-status ${type}`;
    this.statusElement.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.statusElement.classList.add('hidden');
    }, 5000);
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    
    if (!this.form) return;
    
    const formData = new FormData(this.form);
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        this.showStatus('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success');
        this.form.reset();
        
        // Close popover after successful submission
        setTimeout(() => {
          const popover = this.closest('[popover]');
          if (popover) {
            popover.hidePopover();
          }
        }, 2000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      this.showStatus('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.', 'error');
      console.error('Form submission error:', error);
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
  
  connectedCallback() {
    this.form = this.querySelector('form');
    this.statusElement = this.querySelector('#form-status');
    
    if (this.form) {
      this.form.addEventListener('submit', this.submitHandler);
      
      // Add client-side validation
      this.form.addEventListener('input', (event) => {
        const input = event.target;
        if (input.validity.valid) {
          input.classList.remove('invalid');
        } else {
          input.classList.add('invalid');
        }
      });
    }
  }
  
  disconnectedCallback() {
    if (this.form) {
      this.form.removeEventListener('submit', this.submitHandler);
    }
  }
}

window.customElements.define('contact-form', ContactForm);
