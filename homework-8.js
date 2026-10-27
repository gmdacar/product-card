// task-1, person data

const person = {
    "first name": "Askar",
    "surname": "Gareev",
    "country": "Russia",
    "city": "Ufa",
    "age": 15,
    "relationships": false,
    "email": "ascar.gareev11@gmail.com"
}

// task-2, car data

let car = {
    "mark": "Haval",
    "model": "M6",
    "release year": 2017,
    "color": "white",
    "transmission": "6МТ"
}

car.owner = person

// task-3, adding variable maxspeed

function addMaxSpeed(object) {
    if (object.maxspeed) {
        break
    } else {
        object.maxspeed = 170
    }
}

// task-4, logging object variable

function loggingObjectVariable(object, variable){
    console.log(object.variable)
}

// task-5, productsArray

const productsName [Apple, Banana, Beef, Bread, Cheese]

// task-6, bookArray and merging Arrays