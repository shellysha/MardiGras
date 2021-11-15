const form = document.querySelector('.form');
const firstName = document.querySelector('#firstName');
const LastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const text = document.querySelector('#textarea');

function showError(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formControl error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
};

function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formControl success';
};

console.log("hi");

//prevent the submit
form.addEventListener('submit',function(e){
    if(firstName.value == ""){
        showError(firstName,"Please enter your first name");
        e.preventDefault();
    }
    else{
        showSuccess(firstName);
    }
    if(LastName.value == ""){
        showError(LastName,"Please enter your last name");
        e.preventDefault();
    }
    else{
        showSuccess(LastName);
    }
    if(email.value == ""){
        showError(email,"Please enter your email adress");
        e.preventDefault();
    }
    else{
        showSuccess(email);
    }
    if(text.value == ""){
        showError(text,"Please write a message");
        e.preventDefault();
}
else{
    showSuccess(text);
}
});

