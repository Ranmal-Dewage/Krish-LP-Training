export class BubbleSort {

    static sortNumbers(numberArray) {
        let filteredArray = numberArray.filter((number) => {
            return (typeof number === 'number');
        })
        for (let step = 1; step < filteredArray.length; step++) {
            for (let iterator = 0; iterator < (filteredArray.length - step); iterator++) {

                if (filteredArray[iterator] > filteredArray[iterator + 1]) {
                    let temp = filteredArray[iterator];
                    filteredArray[iterator] = filteredArray[iterator + 1];
                    filteredArray[iterator + 1] = temp;
                }

            }
        }
        return filteredArray;
    }

    static sortStrings(stringArray) {
        let filteredArray = stringArray.filter((string) => {
            return (typeof string === 'string' && isNaN(string));
        })
        for (let step = 1; step < filteredArray.length; step++) {
            for (let iterator = 0; iterator < (filteredArray.length - step); iterator++) {

                if (filteredArray[iterator].toLowerCase() > filteredArray[iterator + 1].toLowerCase()) {
                    let temp = filteredArray[iterator];
                    filteredArray[iterator] = filteredArray[iterator + 1];
                    filteredArray[iterator + 1] = temp;
                }

            }
        }
        return filteredArray;
    }

}