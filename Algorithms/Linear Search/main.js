import { LinearSearch } from './LinearSearch.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To find a given element using Linear Search, send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/linear-search <br/>" +
        "{ \"array\" : [number array.....], \"type\" : \"number\", \"element\" : number } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>" +

        "eg :- http://localhost:3000/linear-search <br/>" +
        "{ \"array \" : [string array.....], \"type\" : \"string\", \"element\" : string } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN to the above URL. <br/><br/>"
    )
})

//linear search endpoint
app.post("/linear-search", (req, res) => {

    try {

        if (req.body.type === 'number') {

            let filteredArray = req.body.array.filter((number) => {
                return (typeof number === 'number');
            })

            let result = LinearSearch.searchNumber(filteredArray, req.body.element);
            res.send("Filtered Number Array : " + filteredArray + "\n" + result);

        } else if (req.body.type === 'string') {

            let filteredArray = req.body.array.filter((string) => {
                return (typeof string === 'string' && isNaN(string) && isNaN(string[0]));
            })

            let result = LinearSearch.searchString(filteredArray, req.body.element);
            res.send("Filtered String Array : " + filteredArray + "\n" + result);

        }

    } catch (err) {
        res.status(400).send("User Input is Not Valid !!!!!!!")
    }

})

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
})