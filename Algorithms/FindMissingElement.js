// Q- Find the missing element in array
//Case-1
var cArray= [5,6,7,8,9,10,12,13,14,15];
console.log("Anwsser is : " + FindMissing(cArray));
//Case-2
var cArray2= [5,6,7,8,9,10,11,12,13,14,15];
console.log("Anwsser2 is : " + FindMissing(cArray2));

// Function
function FindMissing(arr){
    let len = arr.length;
    let min = Math.min.apply(null,arr);
    let max = Math.max.apply(null,arr);
    let x1 =min;
    let x2 =min^arr[1];
    for(i=min+1; i<len+min; i++){
        let v=i+1;
        x1 = x1^arr[i-min];
        x2 =x2 ^ v;
    }

    let missEl =x1^x2;
    if(max < missEl)
        return "No Missing Element";
    else
        return x1^x2;     
}

/*
// Professional Way to Write
// Functionfunction FindMissing(arr){
    //let len = arr.length;
    let min = Math.min.apply(null,arr);
    //let max = Math.max.apply(null,arr);
    let x1 =min;
    let x2 =min^arr[1];
    for(i=min+1; i<arr.length+min; i++){
        let v=i+1;
        x1 = x1^arr[i-min];
        x2 =x2 ^ v;
    }

    let missEl =x1^x2;
    if(Math.max.apply(null,arr) < missEl)
        return "No Missing Element";
    else
        return x1^x2;     
}
*/
