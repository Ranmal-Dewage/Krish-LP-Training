export class MissingNumbers {

    static getMissingNumbers(numberArray) {

        let missingNumbers = [];
        for (let index = 0; index < numberArray.length; index++) {

            if (index < numberArray.length - 1) {
                if (numberArray[index + 1] !== (numberArray[index] + 1)) {

                    missingNumbers.push(numberArray[index] + 1);
                    numberArray.splice(index + 1, 0, numberArray[index] + 1);

                }
            }

        }
        return missingNumbers;
    }

}