const findMissingMemberInSequence = (array) => {
    // Беру первый элемент массива для дальнейшего сравнения с остальными, и поиску минимума
    let min = array[0]

    // Циклом прохожусь по массиву и считаю сумму всех его элементов,
    // а также сравниваю элементы друг с другом для поиска минимума
    const sum = array.reduce((acc, current) => {
        if (current < min) {
            min = current
        }

        return acc + current
    }, 0)

    // Для вычисления суммы арифметической прогрессии исходной последовательности нужна длинна исходного массива,
    // а так как в переданном массиве пропущено значение, то к длинне переданного массива нужно прибавить единицу
    const arrLength = array.length + 1

    // Вычисление суммы исходной последовательности с помощью формулы суммы арифметической прогрессии с шагом 1
    const sumArithmeticProgression = (2 * min + (arrLength - 1)) / 2 * arrLength

    // Вычитание из суммы последовательности, в которой не было бы пропущено элемента, суммы последовательности,
    // в которой элемент пропущен, даст тот самый элемент
    return sumArithmeticProgression - sum
}


// Сложность алгоритма в худшем, лучшем и среднем случае будет O(n)

// Test cases
// В каком бы месте последовательности, заданной условиями задачи, не находился элемент,
// с помощью этого алгоритма он будет найден

console.log(findMissingMemberInSequence([7, 9, 10, 11, 12])) // 8
console.log(findMissingMemberInSequence( [5, 0, 1, 3, 2])) // 4
console.log(findMissingMemberInSequence( [0, 2])) // 1
console.log(findMissingMemberInSequence( [0, 1, 2, 3, 4, 5])) // 6
console.log(findMissingMemberInSequence( [999, 1001])) //1000

