const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyBLydAZ9YexyZvLcFp9vCnlRHkVXr0QamE",
    authDomain: "contactformportfolio-504d5.firebaseapp.com",
    databaseURL: "https://contactformportfolio-504d5-default-rtdb.firebaseio.com",
    projectId: "contactformportfolio-504d5",
    storageBucket: "contactformportfolio-504d5.appspot.com",
    messagingSenderId: "863715563668",
    appId: "1:863715563668:web:cf26f4f29184079ac2fc81"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var phone = getElementVal("phone");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name,phone, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name,phone, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    phone:phone,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return  document.getElementById(id).value;
};
