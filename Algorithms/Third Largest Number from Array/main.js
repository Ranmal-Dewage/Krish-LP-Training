import { MergeSort } from '../Merge Sort/MergeSort.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To find the Third Largest Number in an Array of  Numbers, send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/third-largest-number <br/>" +
        "{ \"array\" : [numbers as an array.....] } <br/>" +
        "To find the Third Largest Number in an Array, send a JSON object similar to above format in the body of POST request using POSTMAN. <br/><br/>"
    );
});

//endpoint to find the third largest number
app.post("/third-largest-number", (req, res) => {

    try {

        let filteredNumberArray = req.body.array.filter((data) => {
            return (typeof data === 'number');
        });

        let sortedNumbers = MergeSort.mergeSort(filteredNumberArray, 'number');

        let thirdLargestNumber = sortedNumbers[sortedNumbers.length - 3];

        res.send("The Sorted Number Array : " + sortedNumbers + "\n" +
            "Third Largest Number in a given Array of Numbers : " + thirdLargestNumber);

    } catch (err) {
        res.status(400).send("User Input is not Valid !!!!!")
    }

});

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
});