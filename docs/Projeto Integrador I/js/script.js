window.addEventListener("scroll", function () {
    if (window.innerWidth > 500) {
        const header = document.getElementById("cabecalho");
        const logo = this.document.getElementById("logofagoc")
        if (window.scrollY > 10) {
        header.classList.add("sticked");
        logo.classList.add("reduzida");
        } else {
        header.classList.remove("sticked");
        logo.classList.remove("reduzida");
        }
    }
  });