const form = document.querySelector("#News-letter-form");
const popup = document.querySelector("#Popup-Container");
const dismissBtn = document.querySelector("#Close-popup");
let ErrorMassege = document.getElementById("Error-Massege")
const EmailInput = document.getElementById("Email")
let UserEmail = document.getElementById("UserEmail")

const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh
 const Email = document.getElementById("Email").value;
  
  if(Email === ""){
    EmailInput.classList.add("error");
    ErrorMassege.textContent = "Enter email";
    return;
  } else if (!Regex.test(Email)) {
  EmailInput.classList.add("error");
  ErrorMassege.textContent = "Valid email required";
  return;
  }if(Email.length>60){
    EmailInput.classList.add("error");
    ErrorMassege.textContent = "Email too long";

  } else{
    popup.style.display = "flex";
    UserEmail.textContent= Email;
  }

  
});

EmailInput.addEventListener("input", () => {
  EmailInput.classList.remove("error");
  ErrorMassege.textContent = "";
});



dismissBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

