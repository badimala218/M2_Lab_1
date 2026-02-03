//STEP 1
/**
 * Divides a number by 2 and logs it
 * @param {number} inputNum Number to divide by 2
 * @returns {number} The result of dividing inputNum by 2
 */
function halfNumber(inputNum)
{
    let halfNum = inputNum / 2;
    console.log("Half of " + inputNum + " is " + halfNum + ".");
    return halfNum;
}
halfNumber(25);

//STEP 2
/**
 * Squares a number and logs it
 * @param {number} inputNum Number to square
 * @returns {number} The result of squaring inputNum
 */
function squareNumber(inputNum)
{
    let squareNum = inputNum * inputNum;
    console.log("The result of squaring the number " + 
                inputNum + " is " + squareNum + ".");
    return squareNum;
}
squareNumber(2);
squareNumber(5);

//STEP 3
/**
 * Calculates the percent the first number is of the second number and logs it.
 * @param {number} num1 The first input number
 * @param {number} num2 The second input number. 
 *                      Will not function correctly with zero.
 * @returns {number} Returns percentage, or null if num2 is zero.
 */
function percentOf(num1, num2)
{
    let percentage = null;
    if (num2 === 0)
    {
        console.log("The second number cannot be zero.");
    }
    else 
    {
        percentage = (num1 / num2) * 100;
        console.log(num1 + " is " + percentage + "% of " + num2 + ".");
    }
    return percentage;
}
percentOf(2, 4);
percentOf(5, 25);
percentOf(5, 1);
percentOf(1, 0);

//STEP 4
/**
 * Finds the remainder after dividing one number by another and logs it.
 * @param {number} num1 The second number
 * @param {number} num2 The number to be divided by
 * @returns {number} Returns the remainder after the division of
 *                   num2 by num1
 */
function findModulus(num1, num2)
{
    let modulus = num2 % num1;
    console.log(modulus + " is the result of " + 
                num2 + " mod " + num1 + ".");
    return modulus;
}
findModulus(4, 10);
findModulus(10, 4);
findModulus(2, 5);