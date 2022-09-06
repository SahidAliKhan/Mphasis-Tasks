"use strict";
console.log("===============================================");
console.log("Creating JS Object using Object Constructor");
console.log("===============================================");
console.log("Customer Details");
console.log("===============================================");
var newcustom;
function customer(id,firstname,lastname,email,mobile,gender,address,dob,city,state,country)
{
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.mobile = mobile;
    this.gender = gender;
    this.address = address;
    this.dob = dob;
    this.city = city;
    this.state = state;
    this.country = country;
}
newcustom = new customer(2529998,"Sahid","Khan","sahid.khan2@mphasis.com",7809731494,"Male","Koel Bank", "04-10-1999", "Rourkela", "Odisha", "India");
console.log(newcustom);
document.getElementById("demo").innerHTML = "Customer Id:   " + newcustom.id + "<br>" +
"Customer First Name:   " + newcustom.firstname + "<br>" +
"Customer Last Name:   " + newcustom.lastname + "<br>"  +
"Customer Email:   " + newcustom.email + "<br>"  +
"Customer Mobile:   " + newcustom.mobile + "<br>"  +
"Customer Gender:   " + newcustom.gender + "<br>"  +
"Customer Date of Birth:   " + newcustom.dob + "<br>"  +
"Customer Address:   " + newcustom.address + "<br>"  +
"Customer City:   " + newcustom.city + "<br>"  +
"Customer State:   " + newcustom.state + "<br>"  +
"Customer Country:   " + newcustom.country + "<br>";
console.log("===============================================");
