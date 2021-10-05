function header(el){
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
  <header class="header">
  <a class="link" href="./index.html" style="color:#fff"><h2 class="header__name">Vegeta</h2></a>
  <div class="header__links">
    <button class="header__button-cierra">✖</button>
    <div class="headder__contenedor-link">
    <a class="link" href="./portfolio.html" style="color:#fff"><h2 class="header__link">Portfolio</h2></a>
    <a class="link" href="./servicios.html" style="color:#fff"><h2 class="header__link" >Servicios</h2></a>
    <a class="link" href="./contacto.html" style="color:#fff"><h2 class="header__link" >Contacto</h2></a>
    </div>
  </div>
  <button class="headder__button-abre">
    <div class="headder__button-lines"></div>
    <div class="headder__button-lines"></div>
    <div class="headder__button-lines"></div>
  </button>
</header>
  `;
  el.appendChild(headerEl);

  const buttonOpen = document.querySelector(".headder__button-abre")
  const ventanaLinks = document.querySelector(".header__links")
  buttonOpen.addEventListener("click", ()=>{
    ventanaLinks.style.display = "flex";
  })
  const buttonClose = document.querySelector(".header__button-cierra")
  buttonClose.addEventListener("click", () =>{
    ventanaLinks.style.display = "";
  })
}