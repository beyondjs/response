import { ErrorManager } from './error-manager';

export /*bundle*/ class Response<DATA, ERROR extends ErrorManager> {
	#error: ERROR;
	get error() {
		return this.#error;
	}

	#data?: DATA;
	get data() {
		return this.#data;
	}

	get status() {
		return !this.#error;
	}

	constructor(params: { error?: ERROR; data?: DATA }) {
		const { error, data } = params;
		this.#error = error;
		this.#data = data;
	}

	toJSON() {
		const { status, error, data } = this;
		return { status, error: error ? error?.toJSON() : error, data };
	}
}
