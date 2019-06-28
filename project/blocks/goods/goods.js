// 1) Создание - понять кто рут
// 2) Получить данные
// 3) Отрисовать

class Goods {

  constructor({ el }) {
    this.el = el;

    this.load()
      .then(data => this.render(data))
      .then(data => this.render(data))
      .then(data => this.render(data));
  }

  load() {
    return request('GET', 'https://intensive-mail-server.herokuapp.com/goods');
  }

  render(data) {
    const list = data.map(item => {
      return `<li><img src="${item.image}"/>${item.title}</li>`;
    }).join('');

    this.el.innerHTML = `<ul>${list}</ul>`;
  }

}