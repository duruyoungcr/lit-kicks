// loader
anime({
  targets: ".letter",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  duration: 1500,
  direction: "alternate",
  loop: true,
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.querySelector("#loadPage");
    loader.classList.add("loading-complete");
  }, 3000);
});

// AOS
AOS.init({
  duration: 1000,
});

// modal
const previewImages = document.querySelectorAll(".pm img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");

previewImages.forEach((image) => {
  const body = document.querySelector("body");
  image.addEventListener("click", () => {
    modal.classList.add("open");
    const imageSrc = image.dataset.image;
    modalImage.src = imageSrc;
  });
});

modal.addEventListener("click", (e) => {
  const body = document.querySelector("body");
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});

//email validation
// const topForm = document.querySelector(".top-form");
// const bottomForm = document.querySelector(".bottom-form");
// const topInput = document.querySelector(".top-form input");
// const bottomInput = document.querySelector(".bottom-form input");

$(function () {
  $("form").submit(function (e) {
    //prevent default form submission
    e.preventDefault();

    //ajax form submission
    $.ajax({
      type: "POST",
      url: "form.php",
      data: $(this).serialize(),
      success: (message) => {
        // add an action to be carried out when submission is successful
        swal("Success", "Subscription successful", "success");
      },
      // add an action to be carried out when submission is successful
      error: (error) => {
        swal("Error", "Please enter a valid email", "error");
      },
    });
  });
});

// topForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (topInput.value == "") {
//     swal("Error", "Email cannot be empty!", "error");
//   } else {
//     checkInputs();
//   }
// });

// bottomForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (bottomInput.value == "") {
//     swal("Error", "Email cannot be empty!", "error");
//   } else {
//     checkInputs();
//   }
// });

// function checkInputs() {
//   const email2 = bottomInput.value.trim();
//   const email = topInput.value.trim();
//   if (isEmail(email)) {
//     swal("Success", "Subscription successful", "success");
//     topForm.reset();
//   } else {
//     swal("Error", "Please enter a valid email", "error");
//   }

//   if (isEmail(email2)) {
//     swal("Success", "Subscription successful", "success");
//     bottomForm.reset();
//   } else {
//     swal("Error", "Please enter a valid email", "error");
//   }
// }

// function isEmail(email) {
//   const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//   return regex.test(email);
// }
