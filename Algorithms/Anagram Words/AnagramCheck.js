import { MergeSort } from '../Merge Sort/MergeSort.js';

export class AnagramCheck {

    static checkAnagramStatus(firstCharArray, secondCharArray) {

        let sortedFirstCharArray = MergeSort.mergeSort(firstCharArray, 'string');
        let sortedSecondCharArray = MergeSort.mergeSort(secondCharArray, 'string');

        let anagramStatus;

        if (sortedFirstCharArray.length !== sortedSecondCharArray.length) {
            anagramStatus = false;
        } else {

            // Iterative Solution
            // sortedFirstCharArray.forEach((char, index) => {
            //     if (char.toLowerCase() !== sortedSecondCharArray[index].toLowerCase()) {
            //         anagramStatus = false;
            //     } else {
            //         anagramStatus = true;
            //     }
            // });

            // Using Array Join Method
            if (sortedFirstCharArray.join('').toLowerCase() === sortedSecondCharArray.join('').toLowerCase()) {
                anagramStatus = true;
            } else {
                anagramStatus = false;
            }

        }
        return anagramStatus;

    }

}