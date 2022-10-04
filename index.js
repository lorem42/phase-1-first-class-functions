function receivesAFunction(callback) {
    return callback();
};

function returnsANamedFunction() {
    return function Sunny() {
        console.log('Yay, i have a name')
    };
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hmm, i think i need a name')
    };
};
