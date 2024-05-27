function toyShop(input){
let  tripPrice = Number(input[0]);
let puzzelCount = Number(input[1]);
let minionCount = Number(input[2]);
let dollCount = Number(input[3]);
let  bearCount= Number(input[4]);
let trcukCount = Number(input[5]);

let moneyEarned = (puzzelCount * 2.60) + (dollCount * 3) + (bearCount * 4.10) + (minionCount * 8.20) + (trcukCount * 2);

let totalToyCount = puzzelCount + minionCount + bearCount + dollCount + trcukCount;

if (totalToyCount >= 50) {
 let discount = 0.25 * moneyEarned;
 moneyEarned = moneyEarned - discount;
}
let rentMoney = 0.10 * moneyEarned;
moneyEarned = moneyEarned - rentMoney;
if (moneyEarned>= tripPrice) {
let moneyLeft = moneyEarned;
console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
} else {
    let moneyNeeded = tripPrice - moneyEarned;
    console.log(`Not enough money! ${moneuyNeeded.toFixed(2)} lv needed`);
}

}
toyShop(["40.8","20","25","30","50","10"])