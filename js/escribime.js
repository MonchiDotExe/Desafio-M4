function escribime(el){
  const contactoEl = document.createElement("div");
  contactoEl.innerHTML = `
  <section class="escribime">
  <h2 class="escribime__title">Escribime</h2>
  <form class="escribime__form-container">
  <label>
  <h5 class="escribime__label">NOMBRE</h5>
  <input type="text" name="nombre" class="esciribime__input">
  </label>
  <label>
  <h5 class="escribime__label">EMAIL</h5>
  <input type="text" name="email" class="esciribime__input">
  </label>
  <label>
  <h5 class="escribime__label">Mensaje</h5>
  <textarea cols="30" rows="10" name="mensaje" class="esciribime__input"></textarea>
  </label>
  <div class="escribime__button-container">
  <button class="escribime__button">Enviar</button>
  </div>
  </form>
</section>
  `
  el.appendChild(contactoEl);
  formListener();
}


function formListener(){
  const formEl = document.querySelector(".escribime__form-container");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const info = {
      nombre: form.nombre.value,
      to: form.email.value,
      message: form.mensaje.value,
    }
    fetch("https://apx-api.vercel.app/api/utils/dwf",{
      method: "POST",
      body: JSON.stringify(info),
      headers:{"content-type": "application/json"},
    }).then(res => res.json())
    .then(response =>{
      console.log("Éxito", response);
      form.reset()});
  })
}