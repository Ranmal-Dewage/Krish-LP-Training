export class MergeSort {

    static mergeSort(filteredArray, type) {

        if (filteredArray.length === 1) {
            return filteredArray;
        } else {
            let middle = Math.floor(filteredArray.length / 2);

            let leftSide = filteredArray.slice(0, middle);
            let returnLeft = this.mergeSort(leftSide, type);

            let rightSide = filteredArray.slice(middle);
            let returnRight = this.mergeSort(rightSide, type);

            if (type === 'number') {
                let result = this.mergeNumbers(returnLeft, returnRight);
                return result;
            } else if (type === 'string') {
                let result = this.mergeStrings(returnLeft, returnRight);
                return result;
            }
        }

    }

    static mergeNumbers(leftSide, rightSide) {

        let mergeResult = [];

        while (leftSide.length && rightSide.length) {
            if (leftSide[0] < rightSide[0]) {
                mergeResult.push(leftSide.shift());
            } else {
                mergeResult.push(rightSide.shift());
            }
        }

        while (leftSide.length) {
            mergeResult.push(leftSide.shift());
        }

        while (rightSide.length) {
            mergeResult.push(rightSide.shift());
        }

        return mergeResult;

    }

    static mergeStrings(leftSide, rightSide) {

        let mergeResult = [];

        while (leftSide.length && rightSide.length) {
            if (leftSide[0].toLowerCase() < rightSide[0].toLowerCase()) {
                mergeResult.push(leftSide.shift());
            } else {
                mergeResult.push(rightSide.shift());
            }
        }

        while (leftSide.length) {
            mergeResult.push(leftSide.shift());
        }

        while (rightSide.length) {
            mergeResult.push(rightSide.shift());
        }

        return mergeResult;

    }

}