export default class Errors {
	constructor(){
		this.errors = {}
	}

	get(field){
		if(this.errors[field]){
			return this.errors[field][0]
		}
		return '';
	}

	record(errors){
		this.errors = errors;
	}

	clear(field){
		if(field) {
			if(this.errors) {
				delete this.errors[field];
			}
			return;
		}
		this.errrors = {};
	}

	has(field){
		if(this.errors) {
			return this.errors.hasOwnProperty(field);        
		}
		return null;
	}
	any(){
		if(this.errors) {
			return Object.keys(this.errors).length > 0;
		}
		return null;
	}
}