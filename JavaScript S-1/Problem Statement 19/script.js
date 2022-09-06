
function showUnicodeValue(event){
    var str=document.getElementById("id1");
    if (str.value=="") {
     str.focus();
     return;
   }
   var a="The Unicode Value is:";
   document.getElementById("demo").innerHTML =a+str.value.charCodeAt(0);
 }