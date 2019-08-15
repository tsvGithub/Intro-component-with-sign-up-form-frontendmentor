// Thanks to https://github.com/cosimocollini 👍

var form = document.querySelector(".signUpForm"); //get form from HTML
var inputs = document.querySelectorAll("input"); //get all inputts in the form
var email = document.querySelector('input[type="em"]'); //get only email; [type="em"] not [type="email"] as it uses browser's prompts

var inputWithError = input => { //if error ocurs:
  input.classList.add("input-error"); //adds CSS class to input to style 'error' & add exclamation point
  input.nextElementSibling.style.display = "block"; //displays div.error-msg as it has display:none;
};

var inputValid = input => { //if doesn't have problems
  input.classList.remove("input-error"); //removes CSS 'error' class from input & removes exclamation point
  input.nextElementSibling.style.display = "none"; // set to initial as div.error-msg with error has had display:block;
};

var checkEmail = email => { //check with RegEx
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); //email to String & lower case
};

form.addEventListener("submit", e => {
  e.preventDefault(); //stops initial behavior for submit button as it doesn't send to server 
  inputs.forEach(input => { //for every INPUT from INPUTS
    if (input.value.trim() === "") { // if INPUT's value (removes whitespace from both sides of a string) has nothing
        // input.classList.add("input-error");  
        // input.nextElementSibling.style.display = "block";  
        //or do it with error(input);
        inputWithError(input);  //display div.error-msg & CSS style
    } else {
        // input.classList.remove("input-error");
        // input.nextElementSibling.style.display = "none";
        inputValid(input); //hidde div.error-msg and CSS 'error' styles
    }
  });

  if (email.value.trim() != "" && !checkEmail(email.value.trim())) { //email's value (removes whitespace from both 
  //sides of a string) HAS VALUE but has FALSe with RegEx
    email.classList.add("input-error"); ///adds CSS class to input to style 'error' & add exclamation point
    document.querySelector(".error-email").style.display = "block"; //displays div.error-email as it has display:none;
  } else if (email.value.trim() != "" && checkEmail(email.value.trim())) { //if all OK
    email.classList.remove("input-error"); //remomes CSS 'error' styles
    document.querySelector(".error-email").style.display = "none"; //set deisplay:none;
  }
});





  
