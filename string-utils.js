function stringLength(string) {
    return string.length;
}

function randomString(length) {
    const string = [];
    for (let i = 0; i < length; i++) {
        string.push(randomChar());
    }
    return string.join("");
}

function randomChar() {
    const rndm = Math.random();
    const type = Math.round(rndm);
    if (type == 0) {
        return randomDigit();
    } else {
        return randomLetter();
    }
}

function randomDigit() {
    return String.fromCharCode(Math.floor(Math.random()*(57-48) + 48));
}

function randomLetter() {
    return String.fromCharCode(Math.floor(Math.random()*(90-65) + 65)).toLowerCase();
}