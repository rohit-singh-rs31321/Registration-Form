function validate(){
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;
  var error_message = document.getElementById("error_message");

  var submit = document.getElementById("submit");
  
  error_message.style.padding = "10px";
  error_message.style.border  = "2px solid gray";

  submit.style.marginTop = "5px";
  
  var text;
  if(fName == "") {  
    document.getElementById("error_message").innerHTML = "**Fill the first name please!";  
    return false;  
 }  
  if(fName.length < 3){
    text = "Please Enter valid First Name";
    error_message.innerHTML = text;
    return false;
  }
  if(lName == "") {  
    document.getElementById("error_message").innerHTML = "**Fill the last name please!";  
    return false;  
 }  
  if(lName.length < 3){
    text = "Please Enter valid  Last Name";
    error_message.innerHTML = text;
    return false;
  }
 

  if(phone == "") {  
    document.getElementById("error_message").innerHTML = "**Fill the Phone number please!";  
    return false;  
 }  
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email == "") {  
    document.getElementById("error_message").innerHTML = "**Fill the email please!";  
    return false;  
 }  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(pass == "" || cpass == "") {  
    document.getElementById("error_message").innerHTML = "**Fill the password please!";  
    return false;  
 }  
 
  if(pass.length < 8) {  
    document.getElementById("error_message").innerHTML = "**Password length must be atleast 8 characters";  
    return false;  
  }  

  //maximum length of password validation  
  if(pass.length > 15) {  
    document.getElementById("error_message").innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
  }  
  if(cpass != pass){
    text = "Password mismatch";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}