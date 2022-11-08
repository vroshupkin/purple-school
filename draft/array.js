

/* 
     1. [@@iterator]()
     2. .at()
     3. .concat()
     4. .copyWithin()       
     5. .entires()
     6. .every()
     7. .fill()
     8. .filter()   
     9. .find()             [2] Первое вхождение по условию
    10. .findIndex()        [2] Идекс первого вхождения по условия
    11. .findLast()         [2] Последнее вхождение по условию
    12. .findLastIndex()    [2] Индекс последнего вхождения по условию
    13. .flat()
    14. .flatMap()          
    15. .forEach()
    16. .from()             [2] Array.from('abc') вернет ['a', 'b', 'c']
    17. .includes()         [1] Проверяет есть ли элемент в массиве: true
    18. .indexOf()          [1] Находит первое вхождение в массиве и возвращает его индекс
    19. .isArray()
    20. .join()             
    21. .keys()
    22. .lastIndexOf()      [1] Находит последнее вхождение в массиве и возвращает его индекс

    23. .map()
    24. .of()                [3] Array.of(1, 2, 3) вернет [1, 2, 3]
    25. .pop()
    26. .push()
    27. .reduce()
    28. .shift()             [1] pop первого элемента 
    29. .some()              [3]
    30. .sort()              [1]
    31. .splice()            [1]
    32. .toLocaleString()   ?[4]
    33. .toString()          [4]
    34. .unshift()           [2] Добавляет в начало массива элементы
    35. .values()            [1] 

        Function inherit
    36. .apply()
    37. .bind()
    38. .call()
    


*/

function toString(){
    // Конкатенирует через запятую, при это не раскрывая объекты
    const arr = [1, 2, 3, 'abc', {a: 10, b: 20}]
    console.log(arr.toString())
}
// toString()

function join(){
    // Конкатенирует c сепаратором
    const arr = [1, 2, 3, 'abc', {a: 10, b: 20}]
    const sep = ' '
    console.log(arr.join(sep))
}
// join()


// Возвращает true, когда хотя бы 1 элемент удовлятворяет условию
function some(){
    const arr = [1, 2, 3, 4, 5]

    console.log(arr.some((v) => v > 4))
}
// some()