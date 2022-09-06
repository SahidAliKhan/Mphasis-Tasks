function showDetails() {
    let firstName = document.getElementById("firstname").value; 
    let lastName= document.getElementById("lastname").value;
    let FullName= `${firstName} ${lastName}`;
    console.log(FullName);
    alert("Hello " + FullName +
    "\nWelcome to JavaScript at Mphasis");
}