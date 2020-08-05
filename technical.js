let data1 = '{"first-name": "Fred"}'
let exampleTiny = `[{
    "first-name": "Jeff",
    "last-name": "Green"
}]`

const exampleJson = [{
    "first-name": "Jeff",
    "last-name": "Green",
    "address": {
      "city-and-state": "Boston, MA",
      "zip": "12345-1234"
    },
    "pets": [
      [],
      12345,
      "jeff",
      {
        "name": "Bruno",
        "pet-gender": "male"
      },
      {
        "name": "Lana",
        "pet-gender": "female"
      }
    ]
  }];

function transformKebabCaseToCamelCase(data) {
    return subcase(data[0])
}


function subcase(object) {
    
    if (typeof object !== "object") {
        return object
    }
    
    let thisKey
    let newKey

    let oldStringsArray
    let newStringsArray

    let newValue

    let keys = Object.keys(object)

    for (let i=0; i < keys.length; i++) {
        thisKey = keys[i]
        newValue = subcase(object[thisKey])
    
        oldStringsArray = thisKey.split('-')
        if (oldStringsArray.length > 1) {
            newStringsArray = [oldStringsArray[0]] 
    
            for (let i=1; i < oldStringsArray.length; i++) {
                newStringsArray.push(oldStringsArray[i].charAt(0).toUpperCase() + oldStringsArray[i].slice(1))
                }
    
            newKey = newStringsArray.join('')
    
            object[newKey] = newValue
            delete object[thisKey]
        } else {
            object[thisKey] = newValue
        }
    }

    return object
}

console.log(transformKebabCaseToCamelCase(exampleJson))