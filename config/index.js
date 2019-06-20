const config = {
    squareIt: (arg, arg1) => arg * arg,
    splitIt: (arg) => arg.split(''),
    addIt: (total, n) => total + n,
    combineIt: (words, word) => words + word,
    isEven: (num) => num % 2 === 0,
    isOdd: (num) => !config.isEven(num),
    containsA: (word) => word.indexOf('A') > -1,
};

export {config};
