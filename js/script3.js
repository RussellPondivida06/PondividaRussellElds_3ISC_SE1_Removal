var arr = [1,2,3,4,5]

const middle = (array) => {
    if(array.length%1 ==0|| array.length%3 == 0){
    var avg = (array[(array.length/2) - 1] + array[array.length/2]) /2;
    return avg;
    } else{
    return -1}
}