import { MergeSort } from "./MergeSort.js";
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To Filter your Array send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/merge-sort <br/>" +
        "{ \"array\" : [number array.....], \"type\" : \"number\" } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>" +

        "eg :- http://localhost:3000/merge-sort <br/>" +
        "{ \"array \" : [string array.....], \"type\" : \"string\" } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>"
    );
});

//array filtering endpoint
app.post("/merge-sort", (req, res) => {

    try {

        if (req.body.type === 'number') {

            let filteredArray = req.body.array.filter((number) => {
                return (typeof number === 'number');
            });

            let mergeSortResult = MergeSort.mergeSort(filteredArray, 'number');

            res.send("Filtered Number Array : " + mergeSortResult);

        } else if (req.body.type === 'string') {

            let filteredArray = req.body.array.filter((string) => {
                return (typeof string === 'string' && isNaN(string) && isNaN(string[0]));
            });

            let mergeSortResult = MergeSort.mergeSort(filteredArray, 'string');

            res.send("Filtered String Array : " + mergeSortResult);

        } else {
            res.status(400).send("User Input is Not Valid !!!!!!!");
        }

    } catch (err) {
        res.status(400).send("User Input is Not Valid !!!!!!!");
    }

});

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
});