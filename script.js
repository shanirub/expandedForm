console.assert(expandedForm(12), "10 + 2")
console.assert(expandedForm(42), "40 + 2")
console.assert(expandedForm(70304), "70000 + 300 + 4")



function expandedForm(num) {
    let length = (num + '').length
    var arrNum = num.toString(10).split('').map(Number).map((value, index) => {
        return value * (10 ** (length - index - 1))
    }).filter(isPositive).join(' + ')

    console.log(arrNum)

    return arrNum
    
}

function isPositive(v) {
    return (v > 0)
}