function FirstReverse(str) {
    reversed = str.split(" ").reverse().join("");
    return reversed;
}

// keep this function call here
console.log(FirstReverse(readline()));