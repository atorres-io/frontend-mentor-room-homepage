class RoomView {
	constructor() {
		this.GUI = {
			BUTTONS: {
				BEHIND: document.getElementById('behindButton'),
				INFRONT: document.getElementById('infrontButton'),
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
		};
		this.STATE = 0;
	}

	initListeners = () => {
		this.GUI.BUTTONS.BEHIND.addEventListener('click', e =>
			this._sliderAction(e, 'next')
		);
		this.GUI.BUTTONS.INFRONT.addEventListener('click', e =>
			this._sliderAction(e, 'previous')
		);
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

	_next = () => (this.STATE === 2 ? (this.STATE = 0) : ++this.STATE);
	_previous = () => (this.STATE === 0 ? (this.STATE = 2) : --this.STATE);
}
