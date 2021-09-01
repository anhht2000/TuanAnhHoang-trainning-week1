const icon = document.querySelector(".app__header-subleft-icon");
const list = document.querySelector(".app__header-subleftList");
icon.onclick = () => {
  list.classList.toggle("d-none");
  console.log("ok");
};
