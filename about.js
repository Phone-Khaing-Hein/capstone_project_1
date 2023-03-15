const hambuger = document.getElementById('hambuger');
const body = document.getElementsByTagName('body')[0];
hambuger.addEventListener('click', () => {
  const welcom = document.getElementsByClassName('welcome')[0];
  welcom.style = 'margin-top:70px;';
  hambuger.style = 'display:none';
  const div = document.createElement('div');
  div.style = `padding: 15px 20px;
               background-color:rgba(104, 103, 103, 0.8);
               color: #fff;
               position:fixed;
               right:0;
               top:0;
               left:0;
               bottom:0;
               height:100vh;
               z-index:2;`;
  div.innerHTML = `
    <img id="cross" src="./images/icons/cross.svg" style="width:40px;" alt="Cross Icon">
    <div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;gap:10px;">
      <a href="./index.html" style="text-decoration:none;color:#fff;font-size:25px;">Home</a>
      <a href="#" id="programLink" style="text-decoration:none;color:#fff;font-size:25px;">Program</a>
      <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">Register</a>
      <a href="#" id="partnerLink" style="text-decoration:none;color:#fff;font-size:25px;">Sponsor</a>
      <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">News</a>
      <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">Goto VarCamp</a>
    </div>
  `;
  body.appendChild(div);

  const about = document.getElementById('about');
  const logo = document.getElementById('logo');
  const concert = document.getElementById('concert');
  const partner = document.getElementById('about-partner');
  const footer = document.getElementById('about-footer');
  about.style = 'filter:blur(3px)';
  logo.style = 'filter:blur(3px)';
  concert.style = 'filter:blur(3px)';
  partner.style = 'filter:blur(3px)';
  footer.style = 'filter:blur(3px)';

  function removeMobileMenu() {
    welcom.style = `
      @media screen and (max-width: 768px) {
        margin-top:0;
      }
    `;
    hambuger.style = 'display:block;';
    body.removeChild(div);
    about.style = 'filter:blur(0)';
    logo.style = 'filter:blur(0)';
    concert.style = 'filter:blur(0)';
    partner.style = 'filter:blur(0)';
    footer.style = 'filter:blur(0)';
  }

  const cross = document.getElementById('cross');
  cross.addEventListener('click', () => {
    removeMobileMenu();
  });
});
