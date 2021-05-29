export class SortingObjects {

    static sortObjectArrayByLuckyNumber(objectArray) {

        for (let step = 1; step < objectArray.length; step++) {
            for (let iterator = 0; iterator < (objectArray.length - step); iterator++) {

                if (objectArray[iterator].luckyNumber > objectArray[iterator + 1].luckyNumber) {
                    let temp = objectArray[iterator];
                    objectArray[iterator] = objectArray[iterator + 1];
                    objectArray[iterator + 1] = temp;
                }

            }
        }
        return objectArray;
    }

    static sortObjectArrayByName(objectArray) {

        for (let step = 1; step < objectArray.length; step++) {
            for (let iterator = 0; iterator < (objectArray.length - step); iterator++) {

                if (objectArray[iterator].luckyNumber === objectArray[iterator + 1].luckyNumber) {

                    if (objectArray[iterator].name.toLowerCase() > objectArray[iterator + 1].name.toLowerCase()) {
                        let temp = objectArray[iterator];
                        objectArray[iterator] = objectArray[iterator + 1];
                        objectArray[iterator + 1] = temp;
                    }

                }

            }
        }
        return objectArray;
    }

}