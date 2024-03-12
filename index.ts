//City Directory
interface Entry {
    city: string;
    country: string;
    population: string;
}

function addEntry() {
    const cityInput = document.getElementById('addCity') as HTMLInputElement;
    const countryInput = document.getElementById('addCountry') as HTMLInputElement;
    const populationInput = document.getElementById('addPopulation') as HTMLInputElement;

    const city = cityInput.value;
    const country = countryInput.value;
    const population = populationInput.value;

    const entry: Entry = { city, country, population };
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(`${city}, ${country}, ${population}`);
    listItem.appendChild(textNode);

    const myList = document.getElementById("myList");
    if (myList) {
        myList.appendChild(listItem);
    }

    const entries: Entry[] = JSON.parse(localStorage.getItem('entries') || '[]');
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
}

function filterEntries() {
    const searchInput = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    const entries: Entry[] = JSON.parse(localStorage.getItem('entries') || '[]');

    const filteredEntries = entries.filter(entry => {
        return entry.city.toLowerCase().includes(searchInput) || entry.country.toLowerCase().includes(searchInput);
    });

    const myList = document.getElementById("myList");
    if (myList) {
        myList.innerHTML = '';
        filteredEntries.forEach(entry => {
            const listItem = document.createElement("li");
            const textNode = document.createTextNode(`${entry.city}, ${entry.country}, ${entry.population}`);
            listItem.appendChild(textNode);
            myList.appendChild(listItem);
        });
    }
}

window.onload = function () {
    const entries: Entry[] = JSON.parse(localStorage.getItem('entries') || '[]');
    const myList = document.getElementById("myList");
    if (myList) {
        entries.forEach(entry => {
            const listItem = document.createElement("li");
            const textNode = document.createTextNode(`${entry.city}, ${entry.country}, ${entry.population}`);
            listItem.appendChild(textNode);
            myList.appendChild(listItem);
        });
    }
};


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