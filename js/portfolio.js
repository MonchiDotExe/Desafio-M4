function portfolioIndex(){
  const headerEl = document.querySelector(".header-container");
  header(headerEl);

  const footerEl = document.querySelector(".footer-container");
  footer(footerEl);

  getWorks().then((works) => {
    for(const w of works){
      addWorks(w);
    }
  })
};

portfolioIndex();