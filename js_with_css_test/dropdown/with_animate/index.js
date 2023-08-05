const dropdownBtns = document.querySelectorAll(".menu-btn");
let lastOpened = null;

dropdownBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    const menuContent = this.nextElementSibling;
    console.log(lastOpened);

    if (lastOpened !== null) {
      const target = lastOpened;

      target.addEventListener(
        "animationend",
        () => {
          target.classList.remove("show", "animate-out");

          if (target === lastOpened) {
            lastOpened = null;
          }
        },
        {
          once: true,
        }
      );

      target.classList.add("animate-out");
    }

    if (lastOpened !== menuContent) {
      menuContent.classList.add("show");
      lastOpened = menuContent;
    }
  })
);
