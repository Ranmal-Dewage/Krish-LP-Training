const Query = require('./Query');
const QueryBulder = require('./QueryBuilder');

const q1 = new QueryBulder().select("name").from("students").build();
q1.toString();

const q2 = new QueryBulder().select("id, name").from("teachers").where("id = 'TID678'").build();
q2.toString();

const q3 = new QueryBulder().select("name").where("id = 'TGF678'").build();
q3.toString();