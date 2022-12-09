// sliding cards
const productContainers = [...document.querySelectorAll('.container-cards')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

// card filtering on nav
let list = document.querySelectorAll('.nav__item');
let card = document.querySelectorAll('.card');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    for (let k = 0; k < card.length; k++) {
      card[k].classList.remove('active');
      card[k].classList.add('hide');
      if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
        card[k].classList.remove('hide');
        card[k].classList.add('active');
      }
    }
  })
}

// active hearts
let heart = document.querySelectorAll('.hearts-badge')
heart.forEach(heart => {
  heart.addEventListener('click', function () {
    this.classList.toggle('active-heart')
  })
});


window.onload = function (loadEvent) {
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const dropDownContent = document.getElementsByClassName("dropdown-content")[0];

  function createUserLink(user){
    const aTag = document.createElement('a');
    aTag.textContent = `${user.name} (${user.email})`;
    aTag.href = `https://${user.website}`;
    aTag.target = "_blank";
    return aTag;
  }

  fetch(USERS_URL).then(data => {
    return data.json()
  }).then(jsonData => {
    if(jsonData.length > 0) {
      for(let user of jsonData){
        const tag = createUserLink(user);
        dropDownContent.append(tag);
      }
    }
  }).catch(e => console.log("there was an error ", e))
}