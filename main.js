var headerLinks = document.getElementById("headerLinks");

function showMenu() {
    headerLinks.style.right = "0";
}
function hideMenu() {
    headerLinks.style.right = "-200px";
}


// form js 
function validateForm() {
  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("messageError").style.display = "none";

  if (name === "") {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  }

  return isValid;
}

function checkField(fieldId, errorId) {
  const value = document.getElementById(fieldId).value.trim();
  const errorDiv = document.getElementById(errorId);
  errorDiv.style.display = value === "" ? "block" : "none";
}

document.getElementById("name").addEventListener("blur", () => {
  checkField("name", "nameError");
});
document.getElementById("email").addEventListener("blur", () => {
  checkField("email", "emailError");
});
document.getElementById("message").addEventListener("blur", () => {
  checkField("message", "messageError");
});


// COMMENT FOAM
function validateCommentForm() {
    let valid = true;

    const name = document.getElementById("comment-name").value.trim();
    const email = document.getElementById("comment-email").value.trim();
    const message = document.getElementById("comment-message").value.trim();

    document.getElementById("commentNameError").style.display = "none";
    document.getElementById("commentEmailError").style.display = "none";
    document.getElementById("commentMessageError").style.display = "none";

    if (name === "") {
        document.getElementById("commentNameError").style.display = "block";
        valid = false;
    }

    if (email === "") {
        document.getElementById("commentEmailError").style.display = "block";
        valid = false;
    }

    if (message === "") {
        document.getElementById("commentMessageError").style.display = "block";
        valid = false;
    }

    return valid;
}

// PAGE INDICATION
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.header__links ul li a');
    
    // Sirf file name lo, example: index.html, about.html
    let currentPage = window.location.pathname.split("/").pop();
    
    // Agar homepage URL sirf '/' hai to index.html consider karo
    if (currentPage === '') currentPage = 'index.html';

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Agar current page aur link href match kare to li ko active banao
        if (linkHref === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});


