const hamburger = document.getElementById('hambuger');
const body = document.getElementsByTagName('body')[0];
const welcom = document.getElementsByClassName('welcome')[0];
const about = document.getElementById('about');
const logo = document.getElementById('logo');
const concert = document.getElementById('concert');
const partner = document.getElementById('about-partner');
const footer = document.getElementById('about-footer');

function removeBlur() {
  [about, logo, concert, partner, footer].forEach((element) => {
    element.style.filter = 'blur(0)';
  });
}

function removeMobileMenu(div) {
  welcom.style.marginTop = `
    @media screen and (max-width: 768px) {
      margin-top:0;
    }
  `;
  hamburger.style.display = 'block';
  body.removeChild(div);
  removeBlur();
}

function createDiv() {
  const div = document.createElement('div');
  div.style.padding = '15px 20px';
  div.style.backgroundColor = 'rgba(104, 103, 103, 0.8)';
  div.style.color = '#fff';
  div.style.position = 'fixed';
  div.style.right = '0';
  div.style.top = '0';
  div.style.left = '0';
  div.style.bottom = '0';
  div.style.height = '100vh';
  div.style.zIndex = '2';
  div.innerHTML = `
    <img id="cross" src="./images/icons/cross.svg" style="width:40px;" alt="Cross Icon">
     <div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;gap:10px;">
       <a href="./index.html" style="text-decoration:none;color:#fff;font-size:25px;">Home</a>
       <a href="#concert" id="programLink" style="text-decoration:none;color:#fff;font-size:25px;">Concerts</a>
       <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">Register</a>
       <a href="#about-partner" id="partnerLink" style="text-decoration:none;color:#fff;font-size:25px;">Sponsor</a>
       <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">News</a>
       <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">Goto VarCamp</a>
     </div>
  `;
  return div;
}

function blurElements() {
  [about, logo, concert, partner, footer].forEach((element) => {
    element.style.filter = 'blur(3px)';
  });
}

function addListeners(div) {
  const cross = document.getElementById('cross');
  const programLink = document.getElementById('programLink');
  const partnerLink = document.getElementById('partnerLink');
  cross.addEventListener('click', () => {
    removeMobileMenu(div);
  });
  programLink.addEventListener('click', () => {
    removeMobileMenu(div);
  });
  partnerLink.addEventListener('click', () => {
    removeMobileMenu(div);
  });
}

hamburger.addEventListener('click', () => {
  welcom.style.marginTop = '70px';
  hamburger.style.display = 'none';
  const div = createDiv();
  body.appendChild(div);
  blurElements();
  addListeners(div);
});
