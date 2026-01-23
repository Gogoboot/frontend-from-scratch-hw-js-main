/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

//const array1 = [1, 2, 3, 2, 1, 4, 3];
const array = ["a", "r", "g", "y", "a", "g", "w"];

// function findUniqueElements(array) {
//     for (let i = 0; i < array.length; i++) {
//         let numberUnique = array[i];
//         if (numberUnique ===  ) {
//
//         }
//     }
//
// }


function findUniqueElements(array) {
    const result = [];                    // 1. Пустой массив для результата

    for (let i = 0; i < array.length; i++) {  // 2. Проходим по каждому элементу
        const element = array[i];

        if (!result.includes(element)) {   // 3. Если элемента еще нет в результате
            result.push(element);          // 4. Добавляем его
        }
        // Если элемент уже есть - просто пропускаем
    }

    return result;                        // 5. Возвращаем результат
}


//const uniqueNumbers = [...new Set(array1)];

//console.log(uniqueNumbers);

console.log(findUniqueElements(array));
