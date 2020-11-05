console.log("Your index.js script Loaded correctly");
\Submit deactivate fx\

var firstName=""
var lastName=""
var email=""
var phone=""
var contactRequest=""
function submitForm(firstName, lastName, email, phone, contactRequest){
    if (firstName.value == "") { 
       firstName.focus(); 
        return false; 
    } 

    if (lastName.value == "") { 
        lastName.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        email.focus(); 
        return false; 
    } 
    if (contactRequest.value == "") {
        email.focus();
        return false;
    }else{ \\Submit Activate\\};
} 

document.getElementById("submitbutton").onclick=(firstName) => {
    ("Thank you " + firstName + ", I will get back to you as soon as I can.");
}

console.log(submitForm);