import { AnagramCheck } from './AnagramCheck.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To find whether two given words are Anagram or not, send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/anagram-check <br/>" +
        "{ \"firstWord\" : \"string\", \"secondWord\" : \"string\" } <br/>" +
        "To check two words are Anagram or not, send a JSON object similar to above format in the body of POST request using POSTMAN. <br/><br/>"
    );
});

//endpoint to check whether two words are anagram or not
app.post("/anagram-check", (req, res) => {

    try {

        let firstWordChars = req.body.firstWord.split('');
        let secondWordChars = req.body.secondWord.split('');

        let anagramStatus = AnagramCheck.checkAnagramStatus(firstWordChars, secondWordChars);

        if (anagramStatus) {
            res.send(req.body.firstWord.toUpperCase() + " and " + req.body.secondWord.toUpperCase() + " Anagram with each other");
        } else {
            res.send(req.body.firstWord.toUpperCase() + " and " + req.body.secondWord.toUpperCase() + " not Anagram with each other");
        }

    } catch (err) {
        res.status(400).send("User Input is not Valid !!!!!");
    }


});

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
});