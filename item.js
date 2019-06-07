(function () {
  'use strict';

  let data = {
    text: 'Nuraphone - Wireless Bluetooth Over-Ear Headphones',
    price: 399,
    img: 'https://iliakan.github.io/course-project/assets/images/headphones.png'
  };

  let card = {

    render(data) {
      let div = document.createElement('div');
      let root = document.querySelector('.js-card');

      div.innerHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card">
                  <div class="card-img-wrap">
                      <img class="card-img-top" src="${data.img}" alt="Card image cap"/>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">${data.text}</h5>
                      <div class="rate">
                          <i class="icon-star checked"></i>
                          <i class="icon-star checked"></i>
                          <i class="icon-star checked"></i>
                          <i class="icon-star checked"></i>
                          <i class="icon-star active"></i>
                          <span class="rate-amount ml-2">24</span>
                      </div>
                      <p class="card-text price-text"><strong>€ ${data.price}</strong></p>
                  </div>
              </div>
          </div>
      `;

      root.appendChild(div);
    }

  };

  card.render(data);
  card.render(data);
})();