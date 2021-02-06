/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum
    let i
    for(i=digits.length-1; i>=0; i--){ 
        sum=digits[i]+1; 
        
            if(sum===10){
                digits[i]=0;
                    /*if(i===0){ //to add the new 1 at the beginning of the array
                        digits.unshift(1);  
                    }*/
                
            }else{
                digits[i]=sum;
                return digits;
                }
  }
                //console.log("i "+ i)
        if(sum===10){
            digits.unshift(1);  

        }
            return digits;
};
    
    
    
    
    
    
    /*if(lastElement==9){
            sum=0;//(0)
            digits[arrlen-1]=sum;
            //newNum=lastElement; //newNum=0 
            //digits[arrlen]=sum; //(0)
        }*/
  

/*
    test case error: (input) [9]=> (output) [10]
    expected output: [1,0] 
    
    (input) [1,9]=> (output) [2,0]
    
    (input) [1,2,9]=> (output) [1,3,0]
    
    (input) [1,2,3,9]=> (output) [1,2,4,0]
    
    (input) [1,8,9]=> (output) [1,9,0]
*/
/*
    1- 9 9
    2- start at the right digit 9
    3- check if digit is 9
    4- if digit is 9, then add 1 to left [10, 9]
    5- replace the right digit with a 0
    6- if the left digit is greater than 9, 
        then change this num to 0 and make space for another digit to the left
        and add 1 to the space [1, 0, 0]
    7- if there is no digit on the left then stop

    - create a third if condition following the second one in our for loop
    - if index is 0, then use the javascript unshift function













    - get last number in array 
    - if this integer is 9, replace with a 0, and add 1 to number to the left of this 
    - if there is another integer to the left of that number, check if its a 9
    - if there is no more digits on the left, stop
*/