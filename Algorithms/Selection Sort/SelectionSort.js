export class SelectionSort {

    static sortNumbers(numberArray) {
        let filteredArray = numberArray.filter((number) => {
            return (typeof number === 'number');
        })
        for (let step = 0; step < (filteredArray.length - 1); step++) {
            let minIndex = step;
            for (let iterator = (step + 1); iterator < filteredArray.length; iterator++) {

                if (filteredArray[iterator] < filteredArray[minIndex]) {
                    minIndex = iterator;
                }

            }
            let temp = filteredArray[step];
            filteredArray[step] = filteredArray[minIndex];
            filteredArray[minIndex] = temp;
        }
        return filteredArray;
    }

    static sortStrings(stringArray) {
        let filteredArray = stringArray.filter((string) => {
            return (typeof string === 'string' && isNaN(string));
        })
        for (let step = 0; step < (filteredArray.length - 1); step++) {
            let minIndex = step;
            for (let iterator = (step + 1); iterator < filteredArray.length; iterator++) {

                if (filteredArray[iterator].toLowerCase() < filteredArray[minIndex].toLowerCase()) {
                    minIndex = iterator;
                }

            }
            let temp = filteredArray[step];
            filteredArray[step] = filteredArray[minIndex];
            filteredArray[minIndex] = temp;
        }
        return filteredArray;
    }

}