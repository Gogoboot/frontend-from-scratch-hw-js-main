/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

// const word1 = "магия";
// const word2 = "книга";

// Если функция написана для массивов, просто превращаем строки в них:
// const commonLetters = findCommonElements(word1.split(''), word2.split(''));
// console.log(commonLetters); // ["г", "и", "а"]


function doubleEachCharacter(word1) {
    let result ='';

    for (let i = 0; i < word1.length; i++) {

        result  += word1[i] + word1[i];
    }
        return result;
    }

   // console.log(doubleEachCharacter('monitor'));

