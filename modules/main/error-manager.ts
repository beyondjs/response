export /*bundle*/ class ErrorManager {
	#code: number;
	get code() {
		return this.#code;
	}

	#text: string;
	get text() {
		return this.#text;
	}

	constructor(code: number, text: string, exc?: Error) {
		this.#code = code;
		this.#text = text;

		exc && console.error(exc);
	}

	toJSON() {
		return { text: this.text, code: this.code };
	}
}
