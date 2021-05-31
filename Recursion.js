const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]

const sum = (num) =>{
    let result = 0
    num.map( nu => {
        if (!isNaN(nu))
        result += nu
        else result += sum (nu)
    })
    return result
}
console.log(sum(numbers))