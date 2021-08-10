
function SnapCrackle(maxValue) {

    let odd = "Snap"
    let m = "Crackle"
    let oddM = "SnapCrackle"
    let number = []

    for (n = 1; n <= maxValue; n++) {
       
        if (n % 2 !== 0 && n % 5 !==0) {
            number.push(odd)
    }
        if (n % 5 === 0 && n % 2 === 0) {
            number.push(m)
    }
        if (n % 5 === 0 && n % 2 !== 0) {
            number.push(oddM)
    }
        if (n % 5 !== 0 && n % 2 === 0) {
            number.push(n)
    }
    }
    return number.join(", ")
}

