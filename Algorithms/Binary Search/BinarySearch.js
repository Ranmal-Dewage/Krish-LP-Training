export class BinarySearch {

    static searchNumber(sortedArray, number) {

        let bottom = 0;
        let top = sortedArray.length - 1;
        let middle = Math.floor((top + bottom) / 2);

        while (bottom <= top) {
            if (sortedArray[middle] === number) {
                return `Number ${number} found at ${middle + 1} position in the above Sorted Array`
            } else if (number > sortedArray[middle]) {
                bottom = middle + 1;
            } else {
                top = middle - 1;
            }
            middle = Math.floor((top + bottom) / 2);
        }
        return `Number ${number} not found in the above Sorted Array`;

    }

    static searchString(sortedArray, string) {

        let bottom = 0;
        let top = sortedArray.length - 1;
        let middle = Math.floor((top + bottom) / 2);

        while (bottom <= top) {
            if (sortedArray[middle].toLowerCase() === string.toLowerCase()) {
                return `String ${string} found at ${middle + 1} position in the above Sorted Array`
            } else if (string.toLowerCase() > sortedArray[middle].toLowerCase()) {
                bottom = middle + 1;
            } else {
                top = middle - 1;
            }
            middle = Math.floor((top + bottom) / 2);
        }
        return `String ${string} not found in the above Sorted Array`;

    }

}