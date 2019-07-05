import { request } from '../../libs/utils';

// 1) Создание - понять кто рут
// 2) Получить данные
// 3) Отрисовать

export class Goods {

  constructor({ el }) {
    this.el = el;
    this.category = null;

    this.load();
  }

  load() {
    let url = 'https://intensive-mail-server.herokuapp.com/goods';

    if (this.category) {
      url += `?cat=${this.category}`;
    }

    return request('GET', url).then(data => this.render(data));
  }

  render(data) {
    const list = data.map(item => {
      return `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-img-wrap">
                <img class="card-img-top" src="${item.image}" alt="Card image cap"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <div class="rate">
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <i class="icon-star checked"></i>
                    <i class="icon-star active"></i>
                    <span class="rate-amount ml-2">${item.reviews}</span>
                </div>
                <p class="card-text price-text"><strong>€ ${item.prices}</strong></p>
            </div>
          </div>
        </div>`;
    }).join('');

    this.el.innerHTML = `
        <div class="row homepage-cards">${list}</div>
    `;
  }

}