// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(numberOne, numberTwo, numberThree) {
    let largest = numberOne;
    if (numberOne > numberTwo) {
        largest = numberOne;
    } else {
        largest = numberTwo;
    }

    if (largest > numberThree) {
        largest = largest;
    } else {
        largest = numberThree;
    }

    // console.log(largest);

}

// const result = findLargest(12, 30, 100);
