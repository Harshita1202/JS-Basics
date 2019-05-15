//CAPITALIZE THE FIRST LETTER
var set="we are the champions";

var arr=set.split(" "); 
console.log(arr);

var text0= arr[0].split("");  //we
//console.log(text0);
var t1=text0[0].toUpperCase();
var t2= text0[1];
var a = t1.concat("",t2);
//console.log(a);

var text1= arr[1].split(""); //are
//console.log(text1);
var t3=text1[0].toUpperCase();
var t4= text1[1]+""+text1[2];
var b= t3.concat("",t4);
//console.log(b);

var text2= arr[2].split(""); //the
//console.log(text2);
var t6=text2[0].toUpperCase();
var t7=text2[1]+""+text2[2];
var c= t6.concat("",t7);
//console.log(c);

var text3= arr[3].split(""); //champions
//console.log(text3);
var a1=text3[0].toUpperCase();
var a2= text3[1]+""+text3[2]+""+text3[3]+""+text3[4]+""+text3[5]+""+text3[6]+""+text3[7]+""+text3[8];
var d= a1+""+a2;
//console.log(d);

var X= a.concat(" ",b," ",c," ",d);
console.log(X);





// COMPARING DNA STRANDS
function findStringDiff(str1, str2) {
    var compareString = function(str1, str2) {
        var str1="GAGCCTACTAACGGGAT";
        var str2="CATCGTAATGACGGCCT";
        var a1 = str1.split("");
        var a2 = str2.split("");
        var x= 0;
        a1.forEach(function(val) {
            if (a2[x] === val) {
              a2.splice(x,1);
            } else {
                x += 1;
            }
        });
        if (x > 0) {
            a2.splice(x,a2.length);
        }
        return a2.join("");
        
    }

    if (str1.length < str2.length) {
        return compareString(str1, str2);
    } else {
        return compareString(str2, str1);
    }
}
console.log(findStringDiff("test","ab"));