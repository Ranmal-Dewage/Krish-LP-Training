import { BinarySearch } from './BinarySearch.js'
import { BubbleSort } from '../Bubble Sort/BubbleSort.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To find a given element using Binary Search, send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/binary-search <br/>" +
        "{ \"array\" : [number array.....], \"type\" : \"number\", \"element\" : number } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>" +

        "eg :- http://localhost:3000/binary-search <br/>" +
        "{ \"array \" : [string array.....], \"type\" : \"string\", \"element\" : string } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>"
    )
})

//binary search endpoint
app.post("/binary-search", (req, res) => {

    try {

        if (req.body.type === 'number') {

            let sortedArray = BubbleSort.sortNumbers(req.body.array);
            let result = BinarySearch.searchNumber(sortedArray, req.body.element);
            res.send("Sorted Number Array : " + sortedArray + "\n" + result);

        } else if (req.body.type === 'string') {

            let sortedArray = BubbleSort.sortStrings(req.body.array);
            let result = BinarySearch.searchString(sortedArray, req.body.element);
            res.send("Sorted String Array : " + sortedArray + "\n" + result);

        }

    } catch (err) {
        res.status(400).send("User Input is Not Valid !!!!!!!")
    }

})

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
})