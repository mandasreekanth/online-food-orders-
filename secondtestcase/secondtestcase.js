var concatfunc = (name, dob) => {
  let result = "";
  for (let i = 0; i < Math.max(name.length, dob.length); i++) {
    if (i < name.length) {
      result += name[i];
    }
    if (i < dob.length) {
      result += dob[i];
    }
  }
  return result;
};
var calresult = concatfunc("johndoe", "08061972");
var output = 'j0o8h0n6d1o9e72'
console.log(output === calresult, calresult);


//secondcase example 2 
function myFunction(p1, p2) {var m;
if(p2%2 == 0){m =2;console.log("even number");}else{ m=1;console.log("odd NUmber");}

for(i=m;i<=p1;i=i+2){
console.log(i+"|");

} 
}myFunction(8,2);myFunction(6,1);

//secondcase example 3

function strcount(string) {
  let string1 = string.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 1;
    }
  }
}
strcount("MANDASREEKANTH");
