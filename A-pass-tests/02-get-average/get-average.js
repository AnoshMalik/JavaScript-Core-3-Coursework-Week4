// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let sum = 0;
    let avg = 0;
    let counter = 0;
    for (let x of numbers) {
        
        if (typeof(x) == "number") {
            sum += x;
            counter++;
        }
    }
    avg = sum / counter;
    return avg;
}

module.exports = average;
