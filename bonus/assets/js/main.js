
const posts = [
  {
      "id": 1,
      "content": "Ho fatto delle cose orribili, ma le ho fatte per una buona ragione. L'ho fatte per noi. Quei soldi io non li ho rubati. Non appartengono a nessun'altro. Li ho guadagnati.",
      "media": "https://www.ilnapolista.it/wp-content/uploads/2017/05/walter-white.jpeg",
      "author": {
          "name": "Walter White",
          "image": "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
      },
      "likes": 80,
      "created": "2021-06-25"
  },
  {
      "id": 2,
      "content": "”A W.W. La mia stella, il mio perfetto silenzio”. W.W.? Secondo voi chi può essere? Woodrow Wilson? Willie Wonka? Walter White?",
      "media": "https://i.ytimg.com/vi/-lAuJ2zKgG0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBEb48IyVGyspo3CJUVWeu_EQD6AQ",
      "author": {
          "name": "Hank Schrader",
          "image": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/45/Hank_Schrader.jpg"
      },
      "likes": 120,
      "created": "2021-09-03"
  },
  {
      "id": 3,
      "content": "Mi occorre un filtro nuovo per il mio aspirapolvere Hoover Max Extract modello 60. Qualcuno può procurarmelo? ",
      "media": "https://www.nonsonsolofilm.it/wp-content/uploads/2014/10/Breaking-Bad-Vince-Gilligan-Bob-Odenkirk-Saul-Goodman-studio-cellulare.jpg",
      "author": {
          "name": "Saul Goodman",
          "image": "https://cdn.britannica.com/91/239191-050-8A4AD379/publicity-still-Better-Call-Saul-Bob-Odenkirk-2022.jpg"
      },
      "likes": 78,
      "created": "2021-05-15"
  },
  {
      "id": 4,
      "content": "Questa non è chimica. Questa è arte. Cucinare è arte. E la roba che cucino è una bomba!",
      "media": "https://www.viaggi-usa.it/wp-content/uploads/2015/10/breaking-bad-tour.jpg",
      "author": {
          "name": "Jesse Pinkman",
          "image": "https://www.soldoutservice.com/wp-content/uploads/2022/09/AQXo8mT7W8_gjnOE-1.jpg"
      },
      "likes": 56,
      "created": "2021-04-03"
  },
  {
      "id": 5,
      "content": "A.A.A. Cercasi 'cuoco' per la mia nuova attività",
      "media": "https://www.recensito.net/images/foto/foto_allievi/Lospolloshermanos2.jpg",
      "author": {
          "name": "Gustavo Fring",
          "image": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/8/8c/Gustavo_Fring.jpg"
      },
      "likes": 95,
      "created": "2021-03-05"
  }
];

const postDomEl = document.querySelector('.posts-list');

posts.forEach(element => {

      const { id, content, media, likes, created, author: { name, image } } = element

      const day = new Date(created).getDate();
      const month = new Date(created).getMonth();
      const year = new Date(created).getFullYear();

      const italianDate = `${day}-${month}-${year}`

      const markup = `
      
      <div class="post">
            <div class="post__header position-relative">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                    <img class="profile-pic" src="${image}" alt="${image === null ? name[0] : name}">                    
                    </div>
                    <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                        
                    </div>                    
                </div>
                <div class="options position-absolute end-0 top-0 fs-4">
                    <a href="#" class="text-secondary">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </a>
                </div>
            </div>
            <div class="post__image">
            <img src="${media}" alt="">
            </div>
            
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button w-100 justify-content-between" href="#" data-postid="${id}">
                        <i class="like-button__icon fa-solid fa-heart fs-3 me-5" aria-hidden="true"></i>
                        <i class="fa-regular fa-comment fs-3 me-5"></i>
                        <i class="fa-regular fa-paper-plane fs-3 me-5"></i>
                        <i class="fa-regular fa-bookmark fs-3 me-5"></i>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
            <div class="post__footer">
            <div class="post__text">${content}</div>
            </div>    
            <div class="post-meta__time">${italianDate}</div>        
        </div>`

      postDomEl.insertAdjacentHTML('beforeend', markup)
      
  })


const likeBtn = document.querySelectorAll('.like-button');
const likeNumber = document.querySelectorAll('.js-likes-counter')


likeBtn.forEach((element,i) => {
  let likeStatus = false;
  element.addEventListener('click', function like(e) {

  e.preventDefault();
  
  if (likeStatus) {
      likeStatus = false;
      likeNumber[i].textContent = Number(likeNumber[i].textContent) - 1;
      this.style.color = '#404040'
  } else {
      likeNumber[i].textContent = Number(likeNumber[i].textContent) + 1;
      likeStatus = true
      this.style.color = 'red'
  }

})
}) 



