// array of integers
var arr1=[12,30,25,40,50];
var first = arr1.findIndex(myfunction);

function myfunction(value,index,array){
    if (value==30   || value==40)
    return "element found";
}
console.log("use function");

// swapping
var arr2=[12,20,30,40,50];

while(arr2.length>=1){
     var temp=arr2[0];
     arr2[0]=arr2[length-1];
     arr2[length-1]=temp;
}
console.log("swapped array is: " + arr[0]+","+arr[length-1]);



