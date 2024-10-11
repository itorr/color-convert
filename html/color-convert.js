const app = new Vue({
	el: '.app',
	data: {
		text: '',
		placeholder: '#369',
	},
	computed: {
		color() {
			const text = this.text || this.placeholder;
			return text;
		},
		hex() {
			return this.color;
		},
		rgb() {
			
		},
		hsl() {
			
		},
	}
});