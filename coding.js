/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
   returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
   returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
   returns 'Bart'

list([])
   returns ''
*/
function list(names){
  //your code here
  let a=" "
  if (names.length==0){
    return a =""
  }

  else if (names.length==1){
    a = names[0].name;
  }
  else if (names.length==2){
    a=names[0].name + " & " + names[1].name 
    
  }
  else if (names.length>2){for (i=0; i<names.length-2; i++){
     a =a + names[i].name+", "
     
  }
  a=a+names[names.length-2].name+" & "+names[names.length-1].name
  }
return a.trim()
}
/* 
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output
["Open", "Open", "Senior", "Open", "Open", "seninor"]

*/
function openOrSenior(data){
    // ...
    var a=[]
    for(i=0; i<data.length; i++){
      if (data[i][0]>=55 && data[i][1]>7){
        a.push("Senior")
      }else{
        a.push("Open")
      }
    }
    return a}
/*find perfect */ 
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Number.isInteger(Math.sqrt(sq))){
      var a = Math.sqrt(sq)+1
      console.log(a)
      return a*a
    } else{
      return -1;
    }
    
  }
  findNextSquare(120)
// delete repeated number or string in an array or string
var uniqueInOrder=function (iterable){
  //your code here - remember iterable can be a string or an array
  if (typeof iterable =="string"){
     var a=iterable.split("")
  } else{
    var a=iterable
  }

for (i=0; i<a.length;i++){
  for (j=i+1; j<a.length; j++){
    if (a[i]==a[j]){
      a.splice(j,1)
      j--
    }
  } 
}
  return a.join()
  console.log(typeof a)}

console.log(uniqueInOrder("dddssas"));