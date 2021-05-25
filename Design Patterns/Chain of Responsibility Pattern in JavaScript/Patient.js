class Patient {
    #name;
    #diseaseSeverity;
    #age;

    constructor(name, diseaseSeverity, age) {
        this.#name = name;
        this.#diseaseSeverity = diseaseSeverity;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get diseaseSeverity() {
        return this.#diseaseSeverity;
    }

    get age() {
        return this.#age;
    }

}

module.exports = Patient;