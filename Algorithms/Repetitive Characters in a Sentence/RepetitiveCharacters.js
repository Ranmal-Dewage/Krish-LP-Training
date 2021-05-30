export class RepetitiveCharacters {

    static getCharactersFromArray(stringArray) {

        let charArray = [];
        stringArray.forEach((word) => {

            let splitByChars = word.split('');
            splitByChars.forEach((char) => {
                charArray.push(char.toLowerCase());
            });

        });
        return charArray;
    }

    static getUniqueCharactersFromArray(stringArray) {

        let uniqueChars = [];
        stringArray.forEach((word) => {

            let splitByChars = word.split('');
            splitByChars.forEach((char) => {
                if (!uniqueChars.includes(char.toLowerCase())) {
                    uniqueChars.push(char.toLowerCase());
                }
            });

        });
        return uniqueChars;

    }

    static getRepetitiveDetails(charArray, uniqueCharArray) {

        let repetitiveDetails = [];
        uniqueCharArray.forEach((uniqueChar) => {

            let charCount = 0;
            charArray.forEach((char) => {
                if (char === uniqueChar) {
                    charCount++;
                }
            });
            let temp = { character: uniqueChar, count: charCount };
            repetitiveDetails.push(temp);
        });
        return repetitiveDetails;

    }

}