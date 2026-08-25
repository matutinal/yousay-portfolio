/* ----------------------------------------------------------------------------
Service detail cards, testimonials carousels and expertise fallbacks
---------------------------------------------------------------------------- */

function showServiceDetail(index) {
	const detailCard = document.getElementById(`service-detail-${index}`);
	if (!detailCard) return;
	detailCard.style.display = 'flex';
	detailCard.getBoundingClientRect();
	detailCard.classList.add('active');

	const carousel = detailCard.querySelector('.detail-carousel');
	if (carousel && typeof carousel.initDetailCarousel === 'function') {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => carousel.initDetailCarousel());
		});
	}
}

function hideServiceDetail(index) {
	const detailCard = document.getElementById(`service-detail-${index}`);
	if (!detailCard) return;
	detailCard.classList.remove('active');
	setTimeout(() => {
		detailCard.style.display = 'none';
	}, 400);
}

export default function initServiceDetails() {
	// Testimonials section carousel
	const carousel = document.getElementById('testimonialsCarousel');
	if (carousel) {
		const track = carousel.querySelector('.testimonials-track');
		const slides = carousel.querySelectorAll('.testimonial-card');
		const navButtons = carousel.querySelectorAll('.testimonial-nav button');
		let currentSlide = 0;
		let intervalId;

		function updateCarousel() {
			const slideWidth = slides[0].offsetWidth + 40;
			track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
			for (const [index, btn] of navButtons.entries()) {
				btn.classList.toggle('active', index === currentSlide);
			}
		}

		function startAutoAdvance() {
			stopAutoAdvance();
			currentSlide = (currentSlide + 1) % slides.length;
			updateCarousel();
			intervalId = setInterval(() => {
				currentSlide = (currentSlide + 1) % slides.length;
				updateCarousel();
			}, 4000);
		}

		function stopAutoAdvance() {
			if (intervalId) {
				clearInterval(intervalId);
				intervalId = null;
			}
		}

		for (const [index, btn] of navButtons.entries()) {
			btn.addEventListener('click', () => {
				currentSlide = index;
				updateCarousel();
			});
		}

		carousel.addEventListener('mouseenter', stopAutoAdvance);
		carousel.addEventListener('mouseleave', startAutoAdvance);

		startAutoAdvance();
	}

	// Service cards open their detail card
	for (const card of document.querySelectorAll('.service-card')) {
		card.addEventListener('click', function () {
			showServiceDetail(this.dataset.service);
		});
	}

	// Hero stats pointing to a service detail open it
	for (const stat of document.querySelectorAll('.hero-stat[data-service]')) {
		stat.addEventListener('click', function (e) {
			e.preventDefault();
			const servicesSection = document.getElementById('services');
			if (servicesSection) {
				servicesSection.scrollIntoView({ behavior: 'smooth' });
			}
			showServiceDetail(this.dataset.service);
		});
	}

	// Close buttons
	for (const button of document.querySelectorAll('.service-detail-close')) {
		button.addEventListener('click', function () {
			hideServiceDetail(this.dataset.close.split('-').pop());
		});
	}

	// Testimonials anchors inside detail cards
	for (const anchor of document.querySelectorAll(
		'.service-detail-testimonials a',
	)) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const detailCard = this.closest('.service-detail-card');
			if (!detailCard) return;
			hideServiceDetail(detailCard.id.split('-').pop());

			const testimonialsSection = document.getElementById('testimonials');
			if (testimonialsSection) {
				setTimeout(() => {
					testimonialsSection.scrollIntoView({ behavior: 'smooth' });
				}, 450);
			}
		});
	}

	// Close any visible detail card when clicking outside it
	document.addEventListener('click', (e) => {
		for (const card of document.querySelectorAll('.service-detail-card')) {
			if (card.style.display !== 'none' && !card.contains(e.target)) {
				if (!e.target.closest('.service-card, .hero-stat')) {
					hideServiceDetail(card.id.split('-').pop());
				}
			}
		}
	});

	// Expertise card animation fallback for reduced motion preference
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		for (const card of document.querySelectorAll('.expertise-card')) {
			card.style.animation = 'none';
			card.style.transform = 'translateX(0) rotate(0)';
		}
	}
}
