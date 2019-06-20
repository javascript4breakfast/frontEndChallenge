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
    const result = funnel(input, (x) => {
        return x;
    }, '');
    return result.length;
};

const numberOfSpecialCharacters = (input, c) => {
    const output = [];
    const result = fanOut(input, (x) => {
        const pen = distill(x, (i) => {
            if (i === c) output.push(i);
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
