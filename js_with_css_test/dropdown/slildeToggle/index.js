var toggleBtn = document.getElementById("toggleBtn");
var content = document.getElementById("content");

toggleBtn.addEventListener("click", function () {
  if (content.classList.contains("slide-toggle-content-visible")) {
    content.style.height = "0";
    content.classList.remove("slide-toggle-content-visible");
  } else {
    content.style.height = "auto";
    var height = content.clientHeight + "px";
    content.style.height = "0";
    setTimeout(function () {
      content.style.height = height;
      content.classList.add("slide-toggle-content-visible");
    }, 0);
  }
});
