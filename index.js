function receivesAFunction(callback) {
    return callback();
};

function returnsANamedFunction() {
    return function Adam() {
        console.log('Yay, i have a name')
    };
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hmm, i think i need a name')
    };
};