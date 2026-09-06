// // Toggle class active
// const navbarNav = document.querySelector(".navbar-nav");

// // klik resep
// const PastryResep = document.querySelector("#pastry-resep");
// PastryResep.onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// // klik diluar sidebar
// document.addEventListener("click", function (e) {
//   if (!PastryResep.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

// // Search Form
// const SearchForm = document.querySelector(".search-form");
// const SearchBox = document.querySelector("#search-box");

// document.querySelector("#search-btn").onclick = (event) => {
//   SearchForm.classList.toggle("active");
//   SearchBox.focus();
//   event.preventDefault();
// };

// // klik diluar elemen
// const Pastry = document.querySelector("#pastry-resep");
// const searchbtn = document.querySelector("#search-btn");

// document.addEventListener("click", function (e) {
//   if (!Pastry.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }

//   if (!searchbtn.contains(e.target) && !SearchForm.contains(e.target)) {
//     SearchForm.classList.remove("active");
//   }
// });

// // STAR
// const score = document.querySelector(".score");

// const ratings = document.querySelectorAll(".rating input");

// ratings.forEach((rating) => {
//   rating.addEventListener("change", () => {
//     const selectedRating = rating.value;

//     const text = selectedRating == 1 ? "star" : "stars";

//     score.textContent = `${selectedRating} ${text} rating.`;
//   });
// });

// // Toggle class active
// const navbarNav = document.querySelector(".navbar-nav");

// // klik resep
// const PastryResep = document.querySelector("#pastry-resep");
// PastryResep.onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// // klik diluar sidebar
// document.addEventListener("click", function (e) {
//   if (!PastryResep.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

// // Search Form
// const SearchForm = document.querySelector(".search-form");
// const SearchBox = document.querySelector("#search-box");

// document.querySelector("#search-btn").onclick = (event) => {
//   SearchForm.classList.toggle("active");
//   SearchBox.focus();
//   event.preventDefault();
// };

// // klik diluar elemen
// const Pastry = document.querySelector("#pastry-resep");
// const searchbtn = document.querySelector("#search-btn");

// document.addEventListener("click", function (e) {
//   if (!Pastry.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }

//   if (!searchbtn.contains(e.target) && !SearchForm.contains(e.target)) {
//     SearchForm.classList.remove("active");
//   }
// });

// // STAR
// const score = document.querySelector(".score");

// const ratings = document.querySelectorAll(".rating input");

// ratings.forEach((rating) => {
//   rating.addEventListener("change", () => {
//     const selectedRating = rating.value;

//     const text = selectedRating == 1 ? "star" : "stars";

//     score.textContent = `${selectedRating} ${text} rating.`;
//   });
// });

// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// klik resep
const PastryResep = document.querySelector('#pastry-resep');
PastryResep.onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik diluar sidebar
document.addEventListener('click', function (e) {
  if (!PastryResep.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Search Form
const SearchForm = document.querySelector(".search-form");
const SearchBox = document.querySelector("#search-box");

document
document.querySelector("#search-btn").onclick = (event) => {
  SearchForm.classList.toggle("active");
  SearchBox.focus();
  event.preventDefault();
};

// klik diluar elemen
const Pastry = document.querySelector("#pastry-resep");
const searchbtn = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!Pastry.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchbtn.contains(e.target) && !SearchForm.contains(e.target)) {
    SearchForm.classList.remove("active");
  }
});

// STAR
const score = document.querySelector(".score");

const ratings = document.querySelectorAll(".rating input");

ratings.forEach((rating) => {
  rating.addEventListener("change", () => {
    const selectedRating = rating.value;

    const text = selectedRating == 1 ? "star" : "stars";

    score.textContent = `${selectedRating} ${text} rating.`;
  });
});

// button panah pada resep home
const tombolKiri = document.getElementById('slideLeft');
const tombolKanan = document.getElementById('slideRight');
const wadahResep = document.getElementById('resepRow');

const jarakGeser = 350;
tombolKiri.addEventListener('click', () => {
  wadahResep.scrollLeft -= jarakGeser;
});

tombolKanan.addEventListener('click', () => {
  wadahResep.scrollLeft += jarakGeser;
});