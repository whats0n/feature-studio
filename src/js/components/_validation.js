import './../lib/jquery.form-validator.min';


const VALIDATION = () => {
	let form = $('.js-form');
	let errorClass = 'has-error';
	let formField = $('.js-form-field');

	formField.on({
		focus(e) {
			$(this).parents('.js-form-parent').addClass('has-focus');
		},
		blur(e) {
			$(this).parents('.js-form-parent').removeClass('has-focus');
		}
	});

	form.each(function() {
		let errorContainer = $(this).find('.js-error-msg');
		$.validate({
			form : this,
			borderColorOnError: false,
			scrollToTopOnError: false,
			errorMessagePosition: errorContainer,
			validateOnBlur : false,
			errorElementClass: errorClass,
			onError(form) {
				let input = form.find(`.js-form-field.${errorClass}`);
				let parent = input.parents('.js-form-parent');
				let firstErrorField = parent.get(parent.length-1);
				let top = $(firstErrorField).position().top;

				errorContainer.css('top', top);
				parent.addClass(errorClass);
			}
		});
	});
};

export default VALIDATION;