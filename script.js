/*
    Project 01_06_01
      Author: Eli Boblett
      Date: 8.16.18
      Filename: script.js
*/ 

"use strict"

var formValidity = true;

// function that validates the form
function validateForm (evt) {
    var results = true;
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else{
        evt.returnValue = false;
    }
    validateRequired();
}

// function to validate personal info
function validateRequired () {
    var inputField = document.querySelectorAll("#contactinfo input");
    alert(inputField);
    var errorText = document.getElementById("errorText");
    formValidity = true;
    var elementCount = inputField.length
    var current;
    try{
        for (var i = 0; i < elementCount; i++) {
            current = inputField[i];
            if (current.value === "") {
                current.style.background = "rgb(255,233,233)";
                formValidity = false;
            }
            else {
                current.style.background = "rgb(255,255,255)";
            }
        }
        if (formValidity === false){
            throw "Please complete the rest of the form";
        } 
        else{
            errorText.style.display = "none";
            errorText.innerHTML = "";
            formValidity = true;
        }
    } catch (msg) {
        errorText.style.display = "block";
        errorText.innerHTML = msg;
        formValidity = false;
    }
        // submit the form if it has no errors
        if (formValidity === true) {
            document.getElementsByTagName("form")[0].submit();
        }
}

// function to 
function createEventListener() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false)
    }
    else{
        form.addEventListener("onsubmit", validateForm)
    }
}

window.addEventListener("load", createEventListener);

