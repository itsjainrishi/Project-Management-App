import Errors from './Errors.js';

export default class Form {
	constructor(data) {
		this.originalData = data;
		delete this.originalData.headers;
		for (let field in data) {
			this[field] = data[field];
		}
		this.errors = new Errors()
	}

	data() {
		let data = Object.assign({}, this);
		delete data.originalData;
		delete data.errors;
		delete data.headers;
		
		return data;
	}

	config() {
		if(this['headers'] && this['headers'] === 'multipart/form-data') {
			let config = { headers: { 'Content-Type': 'multipart/form-data' } }
			return config
		}

		return null
	}

	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}
		this.errors.clear();
	}

	setFormData(data) {
		let formdata = new FormData();
		
		for (let field in data) {
			formdata.append(field, data[field]);
		}

		delete formdata.images;
		for (var i = 0; i< data.images.length; i++) {
			formdata.append('images[]', data.images[i]);
		}
		return formdata;
	}

	submit(type, url, handler = true) {
		let config = {}
		let data = this.data()

		if(this['headers'] && this['headers'] === 'multipart/form-data') {
			config = { headers: { 'Content-Type': 'multipart/form-data' } }
			data = this.setFormData(data);
		
			if(type === 'put') {
				data.append('_method', 'PUT');
				type = 'post';
			}
		}

		config = { handlerEnabled : handler }

		return new Promise((resolve, reject) => {
			axios[type](url, data, config)
				.then(response => {
					this.onSuccess(response.data);

					resolve(response.data);
				})
				.catch(error => {
					this.onFail(error.response.data.errors);

					reject(error.response.data);
				});
		});

	}

	onSuccess(data) {
		this.reset();
	}

	onFail(errors) {
		this.errors.record(errors);
	}
}