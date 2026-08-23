/* ----------------------------------------------------------------------------
js entry point
---------------------------------------------------------------------------- */
import animateOnScroll from './_elements/animate-on-scroll.js';
import ContactForm from './_elements/contact-form.js';
import PopoverMenu from './_elements/popover-menu.js';
import RandomShapes from './_elements/random-shapes.js';
import initServiceDetails from './_elements/service-details.js';
import SmallDetails from './_elements/small-details.js';
import ThemePicker from './_elements/theme-picker.js';

document.addEventListener('DOMContentLoaded', () => {
	const el = document.getElementById('current-year');
	if (el) el.textContent = new Date().getFullYear();

	initServiceDetails();
});
