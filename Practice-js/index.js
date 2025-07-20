const nums = [10,20,30]
nums[nums.length - 1] = 100
console.log(nums);

//get a last value of array
function getLastValue(array){
    const lastValue = array[array.length - 1]
    console.log(lastValue);
}
array = ['ajay','vijay','sanjay','vivek']
getLastValue(array)


//Swapping a value of array
function arraySwap(values){
    let lastIndex = values.length - 1
    const temp = values[0]
    values[0] = values[lastIndex]
    values[lastIndex] = temp
    console.log(values);
}
const values = [10,20,3,0]
arraySwap(values)


//print only even counting
function countEven(val){
   for (let i = 0; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
   } 
}
countEven(10)