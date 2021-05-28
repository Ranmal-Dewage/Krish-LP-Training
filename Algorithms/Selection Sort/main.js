import { SelectionSort } from './SelectionSort.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send("to Filter your Array send the data in the URL in below Format <br/><br/>" +
        "http://localhost:3000/your array to be filtered/data type of the array <br/><br/>" +
        "eg :- http://localhost:3000/67,34,7,23,11,2,9/number <br/>" +
        "eg :- http://localhost:3000/abc,ac,b,bca,bcd,a,bbc,Ab,BB/string </br></br>" +
        "Other URL Formats are Invalid for Processing !!!!")
})

//array filtering endpoint
app.get("/:filteringArray/:filterType", (req, res) => {

    if (req.params.filterType === 'number') {

        let splittedArray = req.params.filteringArray.split(',');
        let numberArray = Array.from(splittedArray, x => parseFloat(x));
        let filteredArray = SelectionSort.sortNumbers(numberArray);
        res.send("Filtered Number Array : " + filteredArray);

    } else if (req.params.filterType === 'string') {

        let stringArray = req.params.filteringArray.split(',');
        let filteredArray = SelectionSort.sortStrings(stringArray);
        res.send("Filtered String Array : " + filteredArray);

    } else {
        res.send("Given URL format is Invalid !!!!!");
    }

})

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
})

