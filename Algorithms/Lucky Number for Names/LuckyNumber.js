import { LuckyNumberEnum } from './LuckyNumberEnum.js';

export class LuckyNumber {

    static calculateLuckyNumber(name) {

        let cummulativeLuckyNumber = 0;
        let charArray = name.split('');
        charArray.forEach((char) => {
            if (char.toLowerCase() in LuckyNumberEnum) {
                cummulativeLuckyNumber += LuckyNumberEnum[char.toLowerCase()];
            } else {
                cummulativeLuckyNumber += 0;
            }
        })
        return { name: name, luckyNumber: cummulativeLuckyNumber }

    }
    
}