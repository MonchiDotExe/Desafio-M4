function serviciosMain(){
  const headerEl = document.querySelector(".header-container");
  header(headerEl);

  const footerEl = document.querySelector(".footer-container");
  footer(footerEl);

  getServices().then((service) => {
    for(const s of service){
      addServices(s);
    }})

}

serviciosMain();