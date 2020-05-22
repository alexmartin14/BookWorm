// Multiple Modals
getModalId = (id) => {
  console.log("modal ID sent from HTML onClick() func: ", id);
  // Get the modal

  //Dynamically assign the modalId and button ID via string interprolation
  var modalId = `myModal${id}`;
  var imgId = `myBtn${id}`;

  //search for the modal with the dynamic ID
  var modal = document.getElementById(modalId);
  // Get the button that opens the modal via the dynamic ID
  var image = document.getElementById(imgId);
  // Get the <span> element that closes the modal. The array index has been changed from '0' to 'id - 1' as we now have an array of mutliple close buttons
  var close = document.getElementsByClassName("close")[id - 1];

  //function that assigns the event listener to the correct modal ID after each onClick
  assignModal(modal, close);
};

assignModal = (modal, close) => {
  //open the modal
  modal.style.display = "block";

  //close the modal when the cross is clicked
  close.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Contact us box
function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length <2){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 30){
    text = "Please Enter More Than 30 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}