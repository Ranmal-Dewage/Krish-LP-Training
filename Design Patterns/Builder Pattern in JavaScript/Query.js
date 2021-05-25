class Query {

    #select;
    #from;
    #where;

    set select(select) {
        this.#select = select;
    }

    set from(from) {
        this.#from = from;
    }

    set where(where) {
        this.#where = where;
    }

    toString() {
        if (this.#select === undefined || this.#from === undefined) {
            console.log("Error in the Query must contain both SELECT and FROM blocks !!! \n");
        } else if (this.#where === undefined) {
            console.log("SELECT " + this.#select + " FROM " + this.#from + "\n")
        } else {
            console.log("SELECT " + this.#select + " FROM " + this.#from + " WHERE " + this.#where + "\n");
        }
    }

}

module.exports = Query;