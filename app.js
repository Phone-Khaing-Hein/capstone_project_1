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
      <a href="./about.html" style="text-decoration:none;color:#fff;font-size:25px;">About</a>
      <a href="#program" id="programLink" style="text-decoration:none;color:#fff;font-size:25px;">Program</a>
      <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">Register</a>
      <a href="#partner" id="partnerLink" style="text-decoration:none;color:#fff;font-size:25px;">Sponsor</a>
      <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">News</a>
      <a href="#" style="text-decoration:none;color:#fff;font-size:25px;">Goto VarCamp</a>
    </div>
  `;
  body.appendChild(div);

  const headline = document.getElementById('headline');
  const program = document.getElementById('program');
  const artist = document.getElementById('artist');
  const partner = document.getElementById('partner');
  const footer = document.getElementById('footer');
  headline.style = 'filter:blur(3px)';
  program.style = 'filter:blur(3px)';
  artist.style = 'filter:blur(3px)';
  partner.style = 'filter:blur(3px)';
  footer.style = 'filter:blur(3px)';

  function removeMobileMenu() {
    welcom.style = 'margin-top:0px;';
    hambuger.style = 'display:block;';
    body.removeChild(div);
    headline.style = 'filter:blur(0)';
    program.style = 'filter:blur(0)';
    artist.style = 'filter:blur(0)';
    partner.style = 'filter:blur(0)';
    footer.style = 'filter:blur(0)';
  }

  const cross = document.getElementById('cross');
  cross.addEventListener('click', () => {
    removeMobileMenu();
  });

  const programLink = document.getElementById('programLink');
  const partnerLink = document.getElementById('partnerLink');

  programLink.addEventListener('click', () => {
    removeMobileMenu();
  });

  partnerLink.addEventListener('click', () => {
    removeMobileMenu();
  });
});
