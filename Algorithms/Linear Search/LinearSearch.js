export class LinearSearch {

    static searchNumber(array, number) {

        for (let index = 0; index < array.length; index++) {

            if (array[index] === number) {
                return `Number ${number} found at ${index + 1} position in the above Filtered Array`;
            }

        }
        return `Number ${index} not found in the above Filtered Array`;

    }

    static searchString(array, string) {

        for (let index = 0; index < array.length; index++) {

            if (array[index].toLowerCase() === string.toLowerCase()) {
                return `String ${string} found at ${index + 1} position in the above Filtered Array`
            }

        }
        return `String ${string} not found in the above Filtered Array`;

    }

}