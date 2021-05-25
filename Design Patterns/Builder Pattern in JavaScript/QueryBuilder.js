const Query = require('./Query');

class QueryBulder {

    #query;

    constructor() {
        this.#query = new Query();
    }

    select(select) {
        this.#query.select = select;
        return this;
    }

    from(from) {
        this.#query.from = from;
        return this;
    }

    where(where) {
        this.#query.where = where;
        return this;
    }

    build() {
        return this.#query;
    }

}

module.exports = QueryBulder;