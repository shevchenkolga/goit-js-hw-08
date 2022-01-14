import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formData = {};

const formEl = document.querySelector(".feedback-form")
/*const textareaEl = document.querySelector("textarea")
const inputEl = document.querySelector("input ")*/


formEl.addEventListener("submit", onFormSubmit);

formEl.addEventListener("input", throttle(onTextareaInput, 500));

populateTextarea()


function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
} 

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}


function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))

     if(savedMessage !== [ ] ) {
    formEl.email.value = savedMessage.email;
    formEl.message.value = savedMessage.message;
    formData.email = savedMessage.email;
    formData.message = savedMessage.message;
    console.log(savedMessage)
   
    }
}