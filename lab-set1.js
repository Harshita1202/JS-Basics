// LAB SET 1

function area_of_triangle(a,b,c)
{
  
  if(a+b<=c || b+c<=a || a+c<=b)
  { return "not valid";
  }
  else {
  var s;
  s=(a+b+c)/2;
  return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
}



function f_to_c(a){
   
  return ((a-32)*5/9);
}
function c_to_f(b){
  
  return((b*9/5)+32);
}









