import {sortArrayByParity} from "./sort_array_by_parity.js"
test("test 1", ()=>{
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4,2,3,1])
})
test("test 2", ()=>{
    expect(sortArrayByParity([4, 8, 1, 3])).toEqual([8,4,1,3])
})
test("test 3", ()=>{
    expect(sortArrayByParity([11, 11, 21, 4])).toEqual([4,11,11,21])
})
test("test 4", ()=>{
    expect(sortArrayByParity([11, 11, 21, 4])).toEqual([21,10,11,21])
})
