
function temperatureLog(city, temperature) {
    console.log(`сейчас в ${city} температура - ${temperature} градусов по Цельсию`)
}

const speedOfLight = 1079252848

function speedChecking(speed) {
    if (speed > speedOfLight) {
        console.log(`Сверхсветовая скорость`)
    } else if (speed < speedOfLight) {
        console.log(`Субсветовая скорость`)
    } else {
        console.log(`Скорость света`)
    }
}

let productName = "Хлеб"
let productPrice = 50

function productBuying(budget) {
    if (budget >= productPrice) {
        console.log(`${productName} приобритён. Спасибо за покупку!`)
    } else {
        console.log(`вам не хватает ${productPrice - budget}, пополните баланс.`)
    }
}