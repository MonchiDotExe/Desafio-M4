function getFotoIndex(){
  return fetch("https://cdn.contentful.com/spaces/jo495c30vxld/environments/master/assets/bCFvswE3k2NiGUQwuSxaJ?access_token=wzpvvUu9IAcpgPQnwfT6q6PzYA_eKUa-wnavEoIh3ZY")
  .then(res => {return res.json()})
  .then(data =>{
    const fotoEl = document.querySelector(".intro__foto");
    fotoEl.src = "https:"+data.fields.file.url;
  })
}

function addImgIndex(params){
  var foto = params.find(i => i.title == "foto");
  document.querySelector(".intro__foto").src = foto.url;
}


function main(){
  const headerEl = document.querySelector(".header-container");
  header(headerEl);

  const contactoEl = document.querySelector(".escribime-container");
  escribime(contactoEl);

  const footerEl = document.querySelector(".footer-container");
  footer(footerEl);

  getFotoIndex();
  getServices().then((service) => {
    for(const s of service){
      addServices(s);
    }})
};

main();