function fruit(str, grams, price) {

    let kilograms = grams / 1000;
    let neededMoney = kilograms * price;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${str}.`);
}

fruit('orange', 2500, 1.80)