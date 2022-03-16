window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("header").classList.add("header__moving");
    } else {
      document.querySelector("header").classList.remove("header__moving");
    }
  };