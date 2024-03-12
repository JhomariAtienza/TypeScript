//ISBN
function validateISBN10(isbn: string): boolean {
    isbn = isbn.replace(/\s/g, '').replace('X', '10');
    if (isbn.length !== 10) {
        return false;
    }
    if (!/^\d{9}$/.test(isbn.slice(0, 9))) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(isbn[i]) * (i + 1);
    }
    if (!/[0-9]|10/.test(isbn[9])) {
        return false;
    }
    sum += isbn[9] === 'X' ? 10 * 10 : parseInt(isbn[9]) * 10;

    return sum % 11 === 0;
}

console.log(validateISBN10("1112223339"));
console.log(validateISBN10("111222333"));
console.log(validateISBN10("1112223339X"));
console.log(validateISBN10("1234554321"));
console.log(validateISBN10("1234512345"));
console.log(validateISBN10("048665088X"));
console.log(validateISBN10("X123456788"));

//FUNCTION
function transformString(input: string): string {
    const vowels = "AEIOUaeiou";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function getNextChar(char: string): string {
        const index = alphabet.indexOf(char);
        return alphabet[(index + 1) % alphabet.length];
    }
    const transformedChars = input.split('').map(char => {
        if (/[A-Za-z]/.test(char)) {
            const nextChar = getNextChar(char);
            return vowels.includes(nextChar) ? nextChar.toUpperCase() : nextChar.toLowerCase();
        }
        return char;
    });

    return transformedChars.join('');
}

console.log(transformString("Cat30"));

//Moving Zeros to End 
function moveZeros(array: any[]): any[] {
    const nonZeroes: any[] = [];
    let zeroCount = 0;

    array.forEach(element => {
        if (element !== 0) {
            nonZeroes.push(element);
        } else {
            zeroCount++;
        }
    });

    return nonZeroes.concat(Array(zeroCount).fill(0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); 