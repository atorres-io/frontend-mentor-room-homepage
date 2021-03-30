class RoomView {
	constructor() {
		this.GUI = {
			BUTTONS: {
				BEHIND: document.getElementById('behindButton'),
				INFRONT: document.getElementById('infrontButton'),
				HAMBURGER: document.getElementById('hamburger'),
				CLOSE: document.getElementById('close'),
			},
			SLIDERS: [
				document.getElementById('slider01'),
				document.getElementById('slider02'),
				document.getElementById('slider03'),
			],
			ARTICLES: [
				document.getElementById('article01'),
				document.getElementById('article02'),
				document.getElementById('article03'),
			],
			DROPDOWN: document.getElementById('dropdown'),
		};
		this.STATE = 0;
		this.MAX_SLIDER = 3 - 1; // -1 to be compatible with arrays
		this.MIN_SLIDER = 1 - 1; // -1 to be compatible with arrays
	}

	initListeners = () => {
		this.GUI.BUTTONS.BEHIND.addEventListener('click', e =>
			this._sliderAction(e, 'next')
		);
		this.GUI.BUTTONS.INFRONT.addEventListener('click', e =>
			this._sliderAction(e, 'previous')
		);
		this.GUI.BUTTONS.HAMBURGER.addEventListener('click', this._openDropdown);
		this.GUI.BUTTONS.CLOSE.addEventListener('click', this._closeDropdown);
	};

	_sliderAction = (e, action) => {
		e.preventDefault();

		//... Hidden previous items
		this.GUI.SLIDERS[this.STATE].classList.add('hidden');
		this.GUI.ARTICLES[this.STATE].classList.add('hidden');

		action === 'next' ? this._next() : this._previous();

		//... Visible news items
		this.GUI.SLIDERS[this.STATE].classList.remove('hidden');
		this.GUI.ARTICLES[this.STATE].classList.remove('hidden');
	};

	_next = () =>
		this.STATE === this.MAX_SLIDER ? (this.STATE = 0) : ++this.STATE;
	_previous = () =>
		this.STATE === this.MIN_SLIDER ? (this.STATE = 2) : --this.STATE;
	_openDropdown = () => this.GUI.DROPDOWN.classList.remove('dropdown--hidden');
	_closeDropdown = () => this.GUI.DROPDOWN.classList.add('dropdown--hidden');
}
