import { RepetitiveCharacters } from './RepetitiveCharacters.js'
import express from 'express';

const app = express();

app.use(express.json());

//root endpoint
app.get("/", (req, res) => {
    res.send(
        "To find the Repetitive Characters in a Sentence, send the data in the below Format <br/><br/>" +

        "eg :- http://localhost:3000/repetitive-characters <br/>" +
        "{ \"sentence\" : \"sentence as string\" } <br/>" +
        "To find the Repetitive Characters, send a JSON object similar to above format in the body of POST request using POSTMAN. <br/><br/>"
    );
});

//endpoint to find the repetitive characters
app.post("/repetitive-characters", (req, res) => {

    try {

        if (typeof req.body.sentence === 'string') {

            let arraySplitBySpace = req.body.sentence.split(' ');

            let charArrayOfSentence = RepetitiveCharacters.getCharactersFromArray(arraySplitBySpace);

            let uniqueCharArrayOfSentence = RepetitiveCharacters.getUniqueCharactersFromArray(arraySplitBySpace);

            let repetitiveDetails = RepetitiveCharacters.getRepetitiveDetails(charArrayOfSentence, uniqueCharArrayOfSentence);

            res.send(repetitiveDetails);

        } else {
            res.status(400).send("Sentence property in JSON object should be of type 'String'");
        }


    } catch (err) {

        console.log(err);

    }

});

app.listen(3000, () => {
    console.log("Express Server Running at 'http://localhost:3000'");
});