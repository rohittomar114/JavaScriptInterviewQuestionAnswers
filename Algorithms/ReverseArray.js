
// Reverse a array using swaping
// Method1-----With API
var array = ["one" , "two","Three"];
var rev = array.reverse();
console.log("With API------: " +rev);

//Method2---- Without API
var array2 = [ 1,2,3,4,5];
console.log("Without API------: " + reverseArray(array2));

function reverseArray(arr){
    var i = 0;
    var j = arr.length -1;
    while(i<j){
        var temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--;
        i++;
    }
    return arr;
}

