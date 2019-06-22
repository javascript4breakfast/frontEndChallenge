const fanOut = (input, cb) => {
    const output = [];
    for (var i = 0; i < input.length; i++) {
        output.push(cb(input[i]));
    };
    return output;
};

const funnel = (input, fn, startValue) => {
    for (var i = 0; i < input.length; i++) {
        var output = startValue += input[i];
    }
    return output;
};

const distill = (input, fn) => {
    const output = [];
    for (var i = 0; i < input.length; i++) {
        const index = input[i];
        if (fn(index)) output.push(input[i]);
    }
    return output;
};

const numberOfCharacters = (input) => {
    return funnel(input, x => x, '').length;
};

const numberOfSpecialCharacters = (input, c) => {
    const output = [];
    distill(input, (x) => {
        fanOut(x, (i) => {
            if (c === i) output.push(i);
        });
    });
    return output.length;
};

const groupObjectsByProp = (objectArray, prop) => {
    return objectArray.reduce((acc, obj) => {
        const key = obj[prop];
        if (!acc[key]) acc[key] = [];
        acc[key].push(obj);
        return acc;
    }, {});
};

export { distill, fanOut, funnel, groupObjectsByProp, numberOfCharacters, numberOfSpecialCharacters };
