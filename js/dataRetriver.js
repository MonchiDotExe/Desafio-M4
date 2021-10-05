function getServices(){
  return fetch("https://cdn.contentful.com/spaces/jo495c30vxld/environments/master/entries?access_token=wzpvvUu9IAcpgPQnwfT6q6PzYA_eKUa-wnavEoIh3ZY&content_type=servicio")
  .then(res => {return res.json()})
  .then(data =>{
    const servicesCollection = data.items.map(i => {
      return {
        title: i.fields.title,
        shortContent: i.fields.shortDescription.content[0].content[0].value,
        imageID: i.fields.imagen.sys.id,
        includes: data.includes.Asset,
        imagen: "",
      }
    })
    servicesCollection.forEach(i => {
      const imgId = searchImage(i.imageID, i.includes);
      i.imagen = "https:"+imgId.fields.file.url;
    })
    return servicesCollection;
  })
}
function searchImage(imageId, includes){
  const correcta = includes.find(i => {
    return i.sys.id == imageId;
  })
  return correcta;
}
function addServices(params){
  const template = document.querySelector("#servicio-template");
  const contenedor = document.querySelector(".card__contenedor-contenedor");
  template.content.querySelector(".card__subtitle").textContent = params.title;
  template.content.querySelector(".card__img").src = params.imagen;
  template.content.querySelector(".card__content").textContent = params.shortContent;
  var clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}



function getWorks(){
  return fetch("https://cdn.contentful.com/spaces/jo495c30vxld/environments/master/entries?access_token=wzpvvUu9IAcpgPQnwfT6q6PzYA_eKUa-wnavEoIh3ZY&content_type=work")
  .then(res => {return res.json()})
  .then(data =>{
    const servicesCollection = data.items.map(i => {
      return {
        title: i.fields.titulo,
        Content: i.fields.descripcion.content[0].content[0].value,
        imageID: i.fields.imagen.sys.id,
        includes: data.includes.Asset,
        imagen: "",
      }
    })
    servicesCollection.forEach(i => {
      const imgId = searchImage(i.imageID, i.includes);
      i.imagen = "https:"+imgId.fields.file.url;
    })
    return servicesCollection;
  })
}
function addWorks(params){
  const template = document.querySelector("#work-template");
  const contenedor = document.querySelector(".card__contenedor-contenedor");
  template.content.querySelector(".card__subtitle").textContent = params.title;
  template.content.querySelector(".card__img").src = params.imagen;
  template.content.querySelector(".card__content").textContent = params.Content;
  var clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

