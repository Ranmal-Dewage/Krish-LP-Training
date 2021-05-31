import { LuckyNumber } from './LuckyNumber.js';
import { SortingObjects } from './SortingObjects.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To calculate Lucky Number and sort your Array of strings send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/lucky-number <br/>" +
        "{ \"array\" : [string array.....] } <br/>" +
        "Send a JSON object similar to above format in the body of POST request using POSTMAN. <br/><br/>"
    );
});

//array filtering endpoint
app.post("/lucky-number", (req, res) => {

    try {

        let filteredStringArray = req.body.array.filter((data) => {
            return (typeof data === 'string' && isNaN(data) && isNaN(data[0]));
        });

        let luckyNumberWithNames = filteredStringArray.map((string) => {
            return LuckyNumber.calculateLuckyNumber(string);
        });

        let sortedArrayByLuckyNumber = SortingObjects.sortObjectArrayByLuckyNumber(luckyNumberWithNames);

        let fullySortedArray = SortingObjects.sortObjectArrayByName(sortedArrayByLuckyNumber);

        console.log(fullySortedArray);
        res.send(fullySortedArray);

    } catch (err) {
        res.status(400).send("User Input is not Valid !!!!!")
    }


})

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
})