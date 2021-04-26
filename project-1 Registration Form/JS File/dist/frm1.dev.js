"use strict";

var form = document.getElementById('form');
var username = document.getElementById('username');
var applicantName = document.getElementById('applicantName');
var applicantEmail = document.getElementById('applicantEmail');
var applicantEmailRe = document.getElementById('applicantEmailRe');
var password = document.getElementById('password');
var passwordRe = document.getElementById('passwordRe');
var mobile = document.getElementById('mobile');
var mobileRe = document.getElementById('mobileRe');
var button = document.getElementById('btn1');

function SetErrorMsg(input, ErrorMsg) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  small.innerText = ErrorMsg;
  formControl.className = "form-control error";
}

function SetSuccessMsg(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control success";
}

var FormValidation1 = function FormValidation1() {
  // Username Validation:----
  var usernameVal = username.value.trim();
  var s = /^[\!\#\@\$\%\^\&\*\|\(\)\+\:\"\"\'\'\,\/\|\?\{\}\[\]\`\~]+$/;

  if (usernameVal == "") {
    SetErrorMsg(username, "username can't blank");
  } else if (usernameVal.search(/[0-9]/) == -1) {
    SetErrorMsg(username, 'use at least 1 number');
  } else if (usernameVal.length < 4) {
    SetErrorMsg(username, 'length is too short');
  } else if (usernameVal.length > 7) {
    SetErrorMsg(username, 'length is too heigh');
  } else if (usernameVal.search(/[A-Z]/) != -1) {
    SetErrorMsg(username, "uppercase not allowed");
  } else {
    SetSuccessMsg(username);
  } // Applicant's Name Validation:----


  var applicantNameVal = applicantName.value.trim();

  if (applicantNameVal == "") {
    SetErrorMsg(applicantName, "name can't blank");
  } else {
    SetSuccessMsg(applicantName);
  } // Email Validation:--


  var applicantEmailVal = applicantEmail.value.trim();
  var applicantEmailReVal = applicantEmailRe.value.trim();
  var symbol = applicantEmailVal.indexOf('@');
  var dot = applicantEmailVal.lastIndexOf('.');

  if (applicantEmailVal == "") {
    SetErrorMsg(applicantEmail, "email can't blank");
  } else if (symbol < 1) {
    SetErrorMsg(applicantEmail, "invalid email");
  } else if (dot <= symbol + 2) {
    SetErrorMsg(applicantEmail, "invalid email");
  } else {
    SetSuccessMsg(applicantEmail);
  }

  if (applicantEmailReVal == "") {
    SetErrorMsg(applicantEmailRe, "confirm email can't blank");
  } else if (applicantEmailVal != applicantEmailReVal) {
    SetErrorMsg(applicantEmailRe, "both are not match");
  } else {
    SetSuccessMsg(applicantEmailRe);
  } //Password Validation:----


  var passwordVal = password.value.trim();
  var passwordReVal = passwordRe.value.trim();

  if (passwordVal == "") {
    SetErrorMsg(password, "password can't blank");
  } else if (passwordVal.length < 6) {
    SetErrorMsg(password, "minimum 6 character");
  } else if (passwordVal.search(/[0-9]/) == -1) {
    SetErrorMsg(password, "use at least 1 number");
  } else {
    SetSuccessMsg(password);
  }

  if (passwordReVal == "") {
    SetErrorMsg(passwordRe, "confirm password can't blank");
  } else if (passwordReVal != passwordVal) {
    SetErrorMsg(passwordRe, "both are not match");
  } else if (passwordReVal == passwordVal) {
    SetSuccessMsg(passwordRe);
  } else {
    SetSuccessMsg(passwordRe);
  } // Mobile Validation:----


  var mobileVal = mobile.value.trim();
  var mobileReVal = mobileRe.value.trim();

  if (mobileVal == "") {
    SetErrorMsg(mobile, "mobile number can't blank");
  } else if (mobileVal.length == 10 - 1) {
    SetErrorMsg(mobile, "number must be 10 digit");
  } else if (mobileVal.search(/[A-Za-z]/) != -1) {
    SetErrorMsg(mobile, "can't use any character");
  } else {
    SetSuccessMsg(mobile);
  }

  if (mobileReVal == "") {
    SetErrorMsg(mobileRe, "confirm mobile number can't blank");
  } else if (mobileVal.search(/[A-Za-z]/) != -1) {
    SetErrorMsg(mobileRe, "can't use any character");
  } else if (mobileVal != mobileReVal) {
    SetErrorMsg(mobileRe, "both are not match");
  } else {
    SetSuccessMsg(mobileRe);
  } //

};

button.addEventListener('click', function (event) {
  event.preventDefault();
  FormValidation1();
});