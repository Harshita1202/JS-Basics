//   LAB SET 2

function maximum(a,b,c)
{ var max;

    if(a>b && a>c)
    max=a;
    else if (b>a && b>c)
    max=b; 
    else
     max=c;
     return max;

 }
 

 function factor(x)
 {   
      var y=3;
      var z=7;
     if ((x%y)==0 || ((x%z)==0))
      return true;
   else
     return false;
}
 