import { SelectionSort } from './SelectionSort.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To Filter your Array send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/selection-sort <br/>" +
        "{ \"array\" : [number array.....], \"type\" : \"number\" } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>" +

        "eg :- http://localhost:3000/selection-sort <br/>" +
        "{ \"array \" : [string array.....], \"type\" : \"string\" } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>"
    )
})

//array filtering endpoint
app.post("/selection-sort", (req, res) => {

    try {

        if (req.body.type === 'number') {

            let filteredArray = SelectionSort.sortNumbers(req.body.array);
            res.send("Filtered Number Array : " + filteredArray);

        } else if (req.body.type === 'string') {

            let filteredArray = SelectionSort.sortStrings(req.body.array);
            res.send("Filtered String Array : " + filteredArray);

        } else {
            res.status(400).send("User Input is Not Valid !!!!!!!");
        }

    } catch (err) {
        res.status(400).send("User Input is Not Valid !!!!!!!");
    }


})

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
})