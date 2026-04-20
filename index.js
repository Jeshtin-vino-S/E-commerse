// common script //
const menuBar = document.querySelector(".fa-bars");
const navBar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-btn");

menuBar.addEventListener("click", () => {
  navBar.style.transform = "translatex(0)";
});
closeBtn.addEventListener("click", () => {
  navBar.style.transform = "translatex(500px)";
});

//email input//
const form = document.querySelector("form");
const email = document.getElementById("email");
const btnEl = document.getElementById("signUp");
const error = document.querySelector(".error");

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    form.reset();
  }
});

const validateInputs = () => {
  let isvalid = true;
  const emailVal = email.value;
  if (emailVal === "") {
    error.innerText = "email is required";
    isvalid = false;
  } else if (!checkEmail(emailVal)) {
    error.innerText = "invalid format";
    isvalid = false;
  } else {
    error.innerText = "";
  }
  return isvalid;
};

const checkEmail = (emailVal) => {
  return String(emailVal)
    .toLocaleLowerCase()
    .match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
};
// email input end //

// common script end //

// shop page //
const products = document.querySelectorAll(".product1");

products.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "sproduct.html";
  });
});
// shop page end //

// sproduct page //
const bigImg = document.querySelector(".singlepic img");
const smallImgs = document.querySelectorAll(".multiplepic img");

smallImgs.forEach((img) => {
  img.onclick = () => {
    bigImg.src = img.src;
  };
});
// sproduct page end //
