let nums = [1, 2, 3, 4, 5]
function filterOutOdds(nums){
    return nums.filter((num)=>{
        return num % 2 === 0
    })
}
console.log(filterOutOdds(nums))


function findMin(...num){
    console.log(num)
    return Math.min(...num)
 }

 console.log(findMin(1, 2, 3, 4, 5, 6, 7, 8, 9, -5))

function mergeObject(...obj){
console.log(obj)
let newObj = {...obj[0], ...obj[1]}
console.log(newObj)
}

mergeObject({power: 'Poket', powder : 'cow'}, {cord: 'phone', frink: 'frunk'})

function doubleAndReturnArgs(arr, ...other){
let cows = other.map((o)=>{
    return o * 2
}) 
let arr1 = arr
return [arr1, cows]
}

console.log(doubleAndReturnArgs([1,2,3], 5, 4, 7))


// last question

const removeRandom = (...items) => {
let randomNum = Math.floor(Math.random() * items.length)
items.splice(randomNum, 1)
return items
}

console.log(removeRandom(1, 2, 3, 4, 5))


const extend = (arr1, arr2) => {
let arr3 = [...arr1, ...arr2]
}


console.log(extend([1,2], [3,4]))

const addKeyVal = (obj1) => {
let obj2 = {...obj1, cat: 'Meow'}
return obj2
}
console.log(addKeyVal({dog: 'Bark'}))

function remove(obj, key){
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}
console.log(remove({one: 'one', two: 'two'}, 'two'))


const combine = (obj1, obj2) => {
let b3 = {...obj1, ...obj2}
return b3
}

console.log(combine({one:1}, {two:2}))


const modified = (obj, key, val) => {
let newObj = {...obj}
newObj[key] = val
return newObj
}

console.log(modified({one:'one', two: 2}, 'two', 'square'))