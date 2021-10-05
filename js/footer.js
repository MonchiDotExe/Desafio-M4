function getImgFooter(){
  return fetch("https://cdn.contentful.com/spaces/jo495c30vxld/environments/master/entries?access_token=wzpvvUu9IAcpgPQnwfT6q6PzYA_eKUa-wnavEoIh3ZY")
  .then(res => {return res.json()})
  .then((data) =>{
    const fieldsColections = data.includes.Asset.map(item => {
      return {
        title: item.fields.title,
        url: item.fields.file.url,
      }
    })
    return fieldsColections;
  })
};

function addImgFooter(params){
  var logo = params.find(i => i.title=="ig");
  document.querySelector(".logo-ig").src = logo.url;
  var logo = params.find(i => i.title=="in");
  document.querySelector(".logo-in").src = logo.url;
  var logo = params.find(i => i.title=="gh");
  document.querySelector(".logo-gh").src = logo.url;
}

function footer(el){
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
  <footer class="footer">
  <h2 class="footer__nombre">Vegeta</h2>
  <div class="footer__redes">
      <div class="footer__contacto">
        <h4 class="footer__red text-ig">Instagram</h4>
        <img src="" alt="" class="footer__logo logo-ig">
        </div>
        <div class="footer__contacto">
        <h4 class="footer__red text-in">Linkedin</h4>
        <img src="" alt="" class="footer__logo logo-in">
        </div>
        <div class="footer__contacto">
        <h4 class="footer__red text-gh">Github</h4>
        <img src="" alt="" class="footer__logo logo-gh">
        </div>
  </div>
</footer>
  `
  getImgFooter().then(function (redes){
    addImgFooter(redes);
  });
  el.appendChild(footerEl);
}