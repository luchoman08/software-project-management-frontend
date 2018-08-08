import { Punctuation } from "../../core/models/punctuation";

export const punctuations_mock = new Array<Punctuation>();
export var punctuations_mock_inverse = new Array<Punctuation>();

punctuations_mock.push({id: 0, name: 'UX', value: 12});
punctuations_mock.push({id: 1, name: 'Front', value: 1});
punctuations_mock.push({id: 2, name: 'Back', value: 13});

punctuations_mock_inverse.push({id: 0, name: 'UX', value: 1});
punctuations_mock_inverse.push({id: 1, name: 'Front', value: 12});
punctuations_mock_inverse.push({id: 2, name: 'Back', value: 1});