var items = [...document.querySelectorAll('[data-fancybox="fancybox"]')];
var modal = document.querySelector(".my-modal");
var closeBtn = modal.querySelector(".close");
var prevBtn = modal.querySelector(".prev");
var nextBtn = modal.querySelector(".next");

closeBtn.addEventListener("click", closeModal);

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.add("active");

    setSlideImage(this.getAttribute("href"));

    openModal();

    setCaption(findImagePosition(this), this.getAttribute("title"));
  });
});

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  modal.querySelector(".inner img").src = "";
  modal.querySelector(".inner .caption span:first-child").innerHTML = "";
  modal.querySelector(".inner .caption span:last-child").innerHTML = "";
}

function setSlideImage(imgPath) {
  modal.querySelector(".inner img").src = imgPath;
}

function setCaption(index, title) {
  modal.querySelector(
    ".inner .caption span:first-child"
  ).innerHTML = `Image ${index}/${items.length}`;
  modal.querySelector(".inner .caption span:last-child").innerHTML = title;
}

function findImagePosition(item) {
  return (
    items.findIndex((i) => {
      return i == item;
    }) + 1
  );
}

function prev() {
  var active = document.querySelector('[data-fancybox="fancybox"].active');

  if (active.previousElementSibling == null) return;
  active.previousElementSibling.classList.add("active");

  active.classList.remove("active");

  setSlideImage(active.previousElementSibling.getAttribute("href"));
  setCaption(
    findImagePosition(active.previousElementSibling),
    active.previousElementSibling.getAttribute("title")
  );
}

function next() {
  var active = document.querySelector('[data-fancybox="fancybox"].active');

  if (active.nextElementSibling == null) return;
  active.nextElementSibling.classList.add("active");

  active.classList.remove("active");

  setSlideImage(active.nextElementSibling.getAttribute("href"));
  setCaption(
    findImagePosition(active.nextElementSibling),
    active.nextElementSibling.getAttribute("title")
  );
}
