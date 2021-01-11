import refs from "./refs.js";
const { form, gallery, modal, largeImg } = refs;

gallery.addEventListener("click", onGalleryClick);
modal.addEventListener("click", closeModal);

// call-back функция для клика по картинке (открытие модального окна)
function onGalleryClick(ev) {
  ev.preventDefault();
  const imgRef = ev.target;
  const originalImgRef = imgRef.getAttribute("data");

  setLargeImgRef(originalImgRef);
  openModal(ev);
}

// функция замены ссылки изображения после клика на превью
function setLargeImgRef(source) {
  largeImg.src = source;
}

//функция открытия модалки
function openModal() {
  modal.classList.add("is-open");
}

// call-back функция для клика для закрытия модалки
// function onModalClick(ev) {
//    closeModal(ev);
// }

// функция закрытия модального окна
// +очистка src
function closeModal() {
  modal.classList.remove("is-open");
  // очистка src, чтобы не мелькало большое изображение:
  largeImg.src = "";
}
