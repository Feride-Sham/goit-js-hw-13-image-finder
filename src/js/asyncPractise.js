// ==========практика async/await===============

// import refs from "./refs.js";
// import cardTemplate from "../templates/card.hbs";
// // console.log(cardTemplate);

// let { form, gallery, btnLoadMore } = refs;

// const baseUrl = `https://pixabay.com/api/`;
// let myApiKey = `19826807-5678a17c69c5850135e2e3194`;

// let page = 1;
// let perPage = 12;

// form.addEventListener("submit", getValue);
// btnLoadMore.addEventListener("click", () => {
//   page += 1;
// });

// function getValue(e) {
//   e.preventDefault();
//   let queryValue = e.target.elements.query.value;
//   getFetch(queryValue);
// }

// =============1 вариант=================
// function getFetch(queryValue) {
//   let params = `?image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}&key=${myApiKey}&q=${queryValue}`;
//   let url = baseUrl + params;

//   return fetch(url)
//     .then((res) => res.json())
//     .then((result) => result.hits)
//     .then((array) => {
//       let items = cardTemplate(array);
//       gallery.insertAdjacentHTML("afterbegin", items);
//       if (gallery.children) {
//         btnLoadMore.classList.remove("is-hidden");
//       } else {
//         btnLoadMore.classList.add("is-hidden");
//       }
//     });
// }

// ================2 вариант async/await============
// async function getFetch(queryValue) {
//   let params = `?image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}&key=${myApiKey}&q=${queryValue}`;
//   let url = baseUrl + params;

//   let response = await fetch(url);
//   let responceJson = await response.json();

//   let items = cardTemplate(responceJson.hits);
//   gallery.insertAdjacentHTML("afterbegin", items);

//   manageBtnLoadMore();
// }

// function manageBtnLoadMore() {
//   if (gallery.children) {
//     btnLoadMore.classList.remove("is-hidden");
//   } else {
//     btnLoadMore.classList.add("is-hidden");
//   }
// }
