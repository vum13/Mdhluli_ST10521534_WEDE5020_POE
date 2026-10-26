 document.getElementById('myForm').addEventListener("submit", function(event){
event.preventDefault();

const Name= document.getElementById('name').value.trim();
const email= document.getElementById('email').value.trim();
const phone= document.getElementById('phone').value.trim();
const service= document.getElementById('service').value.trim();
const message= document.getElementById('message').value.trim();

//clear old errors
document.getElementById('nameError').innerHTML = "";
document.getElementById('emailError').innerHTML = "";
document.getElementById('phoneError').innerHTML = "";
document.getElementById('serviceError').innerHTML="";
document.getElementById('messageError').innerHTML="";

 // Name validation
  if (Name === "") {
    document.getElementById('nameError').innerHTML = "Please enter your name";
    return;
  }
// Email validation
 const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').innerHTML = "Please enter a valid email address";
    return;
  }

// cellphone validation
const phonePattern = /^\d{10}$/; 
if (!phonePattern.test(phone)) {
    document.getElementById('phoneError').innerHTML = "Please enter a valid phone number";
    return;
}

///service of intrest validation
if (service === ""){
    document.getElementById('serviceError').innerHTML = "please select a service";
    return;
}

//message validation
if (message === ""){
    document.getElementById('messageError').innerHTML = "Tell us how you would like us to assist you/ what exactly you are looking for";
    return;
}

});