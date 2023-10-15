import { ErrorManager } from './error-manager';

export /*bundle*/ class Response<DataType> {
	#error: ErrorManager;
	get error() {
		return this.#error;
	}

	#data?: DataType;
	get data() {
		return this.#data;
	}

	get status() {
		return !this.#error;
	}

	constructor(params: { error?: ErrorManager; data?: DataType }) {
		const { error, data } = params;
		this.#error = error;
		this.#data = data;
	}

	toJSON() {
		const { status, error, data } = this;
		return { status, error: error ? error?.toJSON() : error, data };
	}
}
