import { PunctuationInterface } from "./generics";

export class Punctuation {
    name: string;
    value: number;

    constructor (name: string, value: number) {
        this.name = name;
        this.value = value;
    }
    public static fromJSON(ipunctuation: PunctuationInterface): Punctuation {
        let punctuation = new Punctuation(ipunctuation.name, ipunctuation.value);
        return punctuation;
    }
}
