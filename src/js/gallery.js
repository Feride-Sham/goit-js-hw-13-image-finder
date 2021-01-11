import refs from "./refs.js";
import apiService from "./apiService";
import cardTemplate from "../templates/card.hbs";
import showNotification from "./notification.js";
import modal from "./modal.js";

let { form, gallery, btnLoadMore, input } = refs;

// добавление слушателей событий
form.addEventListener("submit", getValue);
btnLoadMore.addEventListener("click", loadMore);

// функция обработки полученного ответа с сервера
function getValue(e) {
  e.preventDefault();
  let queryValue = e.target.elements.query.value;
  apiService.queryText = queryValue;

  apiService.resetPage();

  apiService
    .getFetch()
    .then((result) => {
      if (result.length === 0) {
        showNotification("По этому запросу ничего не найдено");
      } else {
        renderGallery(result);
        manageBtnLoadMore();
        input.value = "";
      }
    })
    .catch((error) => {
      showNotification(error);
    });

  clearGallery();
}

// функция отрисовки галереи по шаблонам
function renderGallery(hits) {
  let items = cardTemplate(hits);
  gallery.insertAdjacentHTML("beforeend", items);
}

// функция управления кнопкой Load more
//при заполнении галереи кнопка становится видимой
function manageBtnLoadMore() {
  if (gallery.children) {
    btnLoadMore.classList.remove("is-hidden");
  } else {
    btnLoadMore.classList.add("is-hidden");
  }
}

// функция отрисовки следующих страниц с фото по запросу
// при клике на кнопку Load more
// + добавление скрола
function loadMore(e) {
  apiService.incrementPage();
  apiService.getFetch().then((result) => {
    renderGallery(result);
    window.scrollBy({
      top: innerHeight - 40,
      behavior: "smooth",
    });
  });
}

// функция очистки галереи
function clearGallery() {
  gallery.innerHTML = "";
}
