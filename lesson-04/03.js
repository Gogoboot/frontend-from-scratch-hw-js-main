/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

//const array1 = ["a", "r", "g", "y", "a", "g", "w"];
//const array2 = ["h", "k", "g", "i", "a", "m", "t"];

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [0, 2, 3, 4, 9, 6, 7, 0, 9];



function findCommonElements(array1, array2) {
    const result = []; //результат элементы присутствующие в 2 массивах

    for (let a = 0; a < array1.length; a++) {
        const element1 = array1[a];

        if (includesElement(array2, element1) && !includesElement(result, element1)) {
            result.push(element1);
        }
        //если элемента нет пропускаем
    }
    return result
}


console.log(findCommonElements(array1, array2));