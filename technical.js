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

console.log("+++++++++++++++++")
console.log(transformKebabCaseToCamelCase(exampleJson))
  // console.log(data1.indexOf('-'))
// console.log(data1.slice(0,7))
// console.log(data1.slice(8,9).toUpperCase())
// console.log(data1.slice(10))

// data1 = data1.slice(0,7) + data1.slice(8)
// console.log(data1.slice(8,1).toUpperCase(), "yooo")
// console.log(data1.slice(8,9), "yooo")
// console.log(data1, "yoo")


// function transformKebabCaseToCamelCase(data) {
//     data = data.slice(1)
//     data = "{," + data
//     result = ""

//     let index
//     while (data.indexOf('-') > data.indexOf(',') && data.indexOf('-') < data.indexOf(':')) {
//         index = data.indexOf('-')
//         result += data.slice(0, index) + data.slice(index+1,index+2).toUpperCase() + data.slice(index+2)
//         data = data.slice(data.indexOf(':')+1)
//         // console.log('$$$$$')
//         // console.log(result)
//         // console.log('$$$$$')
//         // console.log(data.indexOf('-'), data.indexOf(','), data.indexOf('":'))
//         // console.log(data)
//         // console.log('++++')
//     }
    
//     console.log('=========')
//     return result;
//   }



// function transformKebabCaseToCamelCaseRedo(data) {
//     array = data.split('": "')
//     result = ""

//     for (let i=0; i < array.length; i += 2) {
//         string = array[i]
//         keyArray = string.split('-')
//         console.log(keyArray)
//         for (let j=1; j < keyArray.length; j++) {
//             keyArray[j] = keyArray[j][0].toUpperCase() + keyArray[j].slice(1)
//         }
//         result += keyArray.join('') + '":'
//         // result += Array[i+1]
//     }
//     return result
// }
// console.log(transformKebabCaseToCamelCaseRedo(data1))


// console.log(transformKebabCaseToCamelCase(data1))
//   console.log(transformKebabCaseToCamelCase(exampleJson))
//   console.log(transformKebabCaseToCamelCase(exampleTiny))

// console.log(")))))))))))))))))))))))")
// console.log(")))))))))))))))))))))))")
// console.log(")))))))))))))))))))))))")
// console.log(")))))))))))))))))))))))")
// console.log(")))))))))))))))))))))))")

