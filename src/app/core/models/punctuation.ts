import { PunctuationInterface } from './generics';

export class Punctuation {
    id: number;
    name: string;
    value: number;
    public static fromJSON(ipunctuation: PunctuationInterface): Punctuation {
        const punctuation = new Punctuation();
        punctuation.id = ipunctuation.id;
        punctuation.name = ipunctuation.name;
        punctuation.value = ipunctuation.value ? ipunctuation.value : 0;
        return punctuation;
    }

    constructor () {

    }
}
