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