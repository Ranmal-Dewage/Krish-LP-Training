import { MergeSort } from '../Merge Sort/MergeSort.js';
import { MissingNumbers } from './MissingNumbers.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To find the Missing Numbers in a Sequence of given Numbers, send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/missing-numbers <br/>" +
        "{ \"sequence\" : [sequence of numbers as a array.....] } <br/>" +
        "To find the Missing Numbers in a Sequence, send a JSON object similar to above format in the body of POST request using POSTMAN. <br/><br/>"
    );
});

//missing number filtering endpoint
app.post("/missing-numbers", (req, res) => {

    try {

        let filteredNumberArray = req.body.sequence.filter((data) => {
            return (typeof data === 'number');
        });

        let sortedNumbers = MergeSort.mergeSort(filteredNumberArray, 'number');
        let missingNumbers = MissingNumbers.getMissingNumbers(sortedNumbers);

        res.send("Missing Numbers in Sequence : " + missingNumbers);

    } catch (err) {
        res.status(400).send("User Input is not Valid !!!!!");
    }

});

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
});