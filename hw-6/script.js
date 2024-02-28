// zadacha 1
let numberObject = {
   name:'basketball',
   price:2095
}
// 
console.log(numberObject);
// 
let исходнаяЦена = 2095
// 
let увеличение = 500
// 
let новаяЦена = исходнаяЦена + увеличение;
// 
console.log(новаяЦена);

// zadacha2 //

let additionalObject = {

    existingKey: "name",

    existingKeys: "price"

}

let names = additionalObject

names["delivery-time"] = "3day"

console.log(additionalObject);

// zadacha 3 //

let comparePrice = (production1, production2) => {
    let producktshin = {
            namesProductshen: "Баскетбольный мяч",
            production1: 2095,
            production2: 1095
    }
    if (Math.max(production1,production2) === production1) {
        return `Продуктсия ${producktshin.namesProductshen} Дорожеб чем продукт 2`;
    }else if (Math.max(production1,production2) === production2) {
        return `Продукт 2 дороже, чем ${producktshin.namesProductshen}`;
    } else {
        return "Технические ошибки"
    }
}

console.log(comparePrice(2095, 1095));

// zadacha 4

let product1 = {
    name: "basketball",
    money: "2095"
}
let product2 = {
    name: "basketball",
    money: "2095"
}

let isSameProduct = (x,y,) => {
    return x.name === y.name && x.money === y.money;
}

console.log(isSameProduct(product1,product2));

// zadacha 5

let stranisa = "HELOO WORLD"

let text = "testing"

console.log(stranisa.toLowerCase());

console.log(text.toLocaleUpperCase());

// zadacha 6

let repeat = "Nurislam a car love Cls 63  banan"

let toRepats = repeat.repeat(110)

console.log(toRepats);

// zadacha 7

let buttonElement = document.querySelector("#Buttons")

console.log(buttonElement);

// zadacha 8

let buttonElements = document.querySelector(".js-button")


// zadacha 9

function flipCoin() {

    const randomValue = Math.floor(Math.random() * 2);

    const resultDisplay = document.getElementById('resultDisplay');

    const flipButton = document.getElementById('flipButton');

    const result = (randomValue === 0) ? 'Орел' : 'Решка';

    resultDisplay.innerHTML = `Сенин тандоон: ${result}`;

    flipButton.disabled = true;
  }

// zadacha 10 

localStorage.setItem('numbers', 996703200609)

let date = localStorage.getItem('numbers')

console.log(date);

// zadacha 11 

localStorage.setItem('My name is', "Nurislam")

let namData = localStorage.getItem('My name is')

console.log(namData);

// zadacha 12

const productOne = {
    name: 'basketball',
    money: 2595
};

localStorage.setItem('product1', JSON.stringify(product1))

let toBringBacking = JSON.parse(localStorage.getItem('product1'))

console.log(toBringBacking);

// 

document.write(JSON.stringify(product1));