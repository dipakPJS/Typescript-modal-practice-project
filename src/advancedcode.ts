const modal1: HTMLDivElement | null = document.querySelector(".modal");
const overlay1: HTMLDivElement | null = document.querySelector(".overlay");
const btnCloseModal1: HTMLDivElement | null =
  document.querySelector(".close-modal");
const showModalButtons1: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".show-modal");
const hiddenElement1: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".hidden");

showModalButtons1.forEach((button) => {
  button.addEventListener("click", function () {
    hiddenElement1.forEach((hides) => {
      hides.style.display = "block";
    });
  });
});

// typescript logic for btnCloseModal

btnCloseModal1?.addEventListener("click", function () {
  hiddenElement1.forEach((hides) => {
    hides.style.display = "none";
  });
});

// ==============================================================================================================================
// another example::

/*

type HTMLElementOrNull<T extends HTMLElement> = T | null;

const getElement = <T extends HTMLElement>(selector: string): HTMLElementOrNull<T> =>
  document.querySelector(selector);

const modalClickHandler = (modal: HTMLButtonElement, overlay: HTMLDivElement) => {
  if (overlay) overlay.style.display = "block";
};

const closeModalHandler = (overlay: HTMLDivElement) => {
  if (overlay) overlay.style.display = "none";
};

const showModal = (modal: HTMLButtonElement, overlay: HTMLDivElement) => {
  if (modal) {
    modal.addEventListener("click", () => modalClickHandler(modal, overlay));
  }
};

const modal1 = getElement<HTMLButtonElement>(".show-modal:nth-child(1)");
const modal2 = getElement<HTMLButtonElement>(".show-modal:nth-child(2)");
const modal3 = getElement<HTMLButtonElement>(".show-modal:nth-child(3)");
const hidden = getElement<HTMLDivElement>(".hidden");
const hidden2 = getElement<HTMLDivElement>(".hidden2");
const overlay = getElement<HTMLDivElement>(".overlay");

showModal(modal1, hidden2);
showModal(modal2, hidden2);
showModal(modal3, hidden2);

if (overlay) {
  overlay.addEventListener("click", () => closeModalHandler(hidden2));
}

const closes = getElement<HTMLButtonElement>(".close-modal");
if (closes) {
  closes.addEventListener("click", () => closeModalHandler(hidden2));
}


 */
