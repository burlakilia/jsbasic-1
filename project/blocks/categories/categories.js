import { request } from '../../libs/utils';

export class Categories {

  constructor({ el }) {
    this.el = el;

    request('GET', 'https://intensive-mail-server.herokuapp.com/goods/categories')
      .then(data => this.render(data));


    this.el.addEventListener('click', event => {

      if (!event.target.dataset.category) {
        return;
      }

      this.onClick(event.target.dataset.category)
    });
  }

  /**
   * Функция для переопределения
   * вызывается в момент клика по категрии
   * @override
   * @param category
   */
  onClick(category) {}

  render(items) {
    const categories = [];

    for (const item of items) {
      const subHtml = item.sub.map(item => {
        return `
          <li>${item.title}</li>
        `;
      });

      categories.push(`
        <li data-category="${item.id}">${item.title}<ul>${subHtml.join('')}</ul></li>
      `);
    }

    this.el.innerHTML = `
      <ul>
        ${categories.join('')}
      </ul>
    `;
  }

}