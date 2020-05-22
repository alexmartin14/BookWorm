// Search bar 

function searchFunction(){
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');

    for(i=0; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            console.log("a: ", a);
            li[0] = a;
        }

        else{
            li[i].style.display = "none";
        }
    }
}


//Multiple Modals
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


// Filter Buttons
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}