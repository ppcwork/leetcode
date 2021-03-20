import {runningSum} from "./running_sum_of_1d_array.js"
/*
let nums = [1, 2, 3, 4]
let result = runningSum(nums)
console.log("nums: " + nums + " result: " + result)

nums = [1, 1, 1, 1, 1]
result = runningSum(nums)
console.log("nums: " + nums + " result: " + result)

nums = [3, 1, 2, 10, 1]
result = runningSum(nums)
console.log("nums: " + nums + " result: " + result)
*/
/*
test("test 0", ()=>{
    let nums = [1, 2, 3, 4]
    let result = runningSum(nums)
    console.log("nums: " + nums + " result: " + result)
    expect(result).toEqual([1, 3, 6, 10])
    //toBe -> has to be the same array
    //toEqual-> has the same values
})
*/
test("test 1", ()=>{
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
})
test("test 2", ()=>{
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5])
})
test("test 3", ()=>{
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17])
})
