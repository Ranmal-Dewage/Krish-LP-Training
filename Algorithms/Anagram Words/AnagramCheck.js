import { SelectionSort } from '../Selection Sort/SelectionSort.js';

export class AnagramCheck {

    static checkAnagramStatus(firstCharArray, secondCharArray) {

        let sortedFirstCharArray = SelectionSort.sortStrings(firstCharArray);
        let sortedSecondCharArray = SelectionSort.sortStrings(secondCharArray);

        let anagramStatus;

        if (sortedFirstCharArray.length !== sortedSecondCharArray.length) {
            anagramStatus = false;
        } else {
            sortedFirstCharArray.forEach((char, index) => {
                if (char.toLowerCase() !== sortedSecondCharArray[index].toLowerCase()) {
                    anagramStatus = false;
                } else {
                    anagramStatus = true;
                }
            });
        }
        return anagramStatus;

    }

}