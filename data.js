const artists = [
  {
    name: 'Thu Ya Kyaw',
    position: 'Developer Advocate for Google Cloud (AI/ML)',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis illum animi iure numquam. Rem sunt ipsam, omnis voluptate quia minus deleniti dolor, recusandae nihil adipisci placeat fuga nesciunt sed quibusdam.orem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet con',
    image: 'ThuYaKyaw.jpg',
  },
  {
    name: 'Si Thu Maung',
    position: 'People Strategist | Edu-Tech Entrepreneur',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis illum animi iure numquam. Rem sunt ipsam, omnis voluptate quia minus deleniti dolor, recusandae nihil adipisci placeat fuga nesciunt sed quibusdam.orem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet con',
    image: 'SiThuMg.jpeg',
  },
  {
    name: 'Khine Zar Thwe',
    position: 'Application Engineer',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis illum animi iure numquam. Rem sunt ipsam, omnis voluptate quia minus deleniti dolor, recusandae nihil adipisci placeat fuga nesciunt sed quibusdam.orem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet con',
    image: 'KhineZarThwe.jpg',
  },
  {
    name: 'Su Myat Noe',
    position: 'Women in AI Myanmar Ambassador',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis illum animi iure numquam. Rem sunt ipsam, omnis voluptate quia minus deleniti dolor, recusandae nihil adipisci placeat fuga nesciunt sed quibusdam.orem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet conorem ipsum, dolor sit amet con',
    image: 'SuMyatNoe.png',
  },
];

const artistMainCard = document.getElementById('artist-data');
artists.map((a) => {
  artistMainCard.innerHTML += `
    <div class="artist-card">
                <img src="./images/${a.image}" alt="" class="artist-image">
                <div class="artist-description">
                    <h3 class="artist-name">${a.name}</h3>
                    <h4 class="artist-title">${a.position}</h4>
                    <p class="artist-breif">
                        ${a.description}
                    </p>
                </div>
            </div>
`;
  return true;
});
