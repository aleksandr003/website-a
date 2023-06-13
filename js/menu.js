(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  // menu open and close
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const xxx = document.querySelector(".nav");
  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    xxx.classList.toggle("is-open");
  });
})();
