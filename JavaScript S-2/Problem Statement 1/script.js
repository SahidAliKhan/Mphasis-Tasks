"use strict";

function validateForm(){
    var Fname = document.forms["myForm"]["Fname"].value;
    var Lname = document.forms["myForm"]["Lname"].value;
    var Email = document.forms["myForm"]["Email"].value;
    var Mobile = document.forms["myForm"]["Mobile"].value;
    var Password = document.forms["myForm"]["Password"].value;
    var CPassword = document.forms["myForm"]["CPassword"].value;
    var Terms = document.querySelector('input[name=terms]: checked');
    var reg = /^([a-zA-Z]+)$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{10}$/;
    var passw =  /^[A-Za-z]\w{7,14}$/;

    if(Fname.length < 5){
        Fname.style.border = "solid 2px red";
        document.getElementById('Fnames').innerHTML = 'Invalid name';
        document.getElementById('Fnames').visibility = 'visible';
        return false;
    }
    else{
        Password.style.border = "solid 2px green";
        document.getElementById('Fnames').innerHTML = 'Name is valid';
        document.getElementById('Fnames').style.color = 'green';
        document.getElementById('Fnames').visibility = 'visible';
    }
    if(Lname.length < 5){
        alert("Last Name should be atleast 5 characters");
        return false;
    }
    if(!mailformat.test(Email.value)){
        alert("Email Condition Not Matched")
    }
    if(!phoneno.test(Mobile.value)  && Mobile.length > 10){
        alert("Mobile should be of Numbers or atleast 10 digits");
        return false;
    }
    if(!passw.test(Password.value)){
        Password.style.border = "solid 2px red";
        ocument.getElementById('passwordlabel').innerHTML = 'Password is invalid';
        document.getElementById('passwordlabel').visibility = 'visible';
        return false;
    }
    else{
        Password.style.border = "solid 2px green";
        document.getElementById('passwordlabel').innerHTML = 'Password is valid';
        document.getElementById('passwordlabel').style.color = 'green';
        document.getElementById('passwordlabel').visibility = 'visible';
    }
    confirm("Do you want to Submit the form");
    return true;
}