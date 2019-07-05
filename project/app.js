import { Goods } from './blocks/goods/goods';
import { Categories } from './blocks/categories/categories';

const goods = new Goods({ el: document.querySelector('.js-goods') });
const categories = new Categories({ el: document.querySelector('.js-categories') });

categories.onClick = function (category) {
  goods.category = category;
  goods.load();
};