/* =========================================================
   БАЗА ДАННЫХ МАГАЗИНА KAZETMOOD (общая для index.html и admin.html)
   ========================================================= */
window.DEFAULT_CONFIG = {
  currency: 'сом',
  phone: '+996 700 000 000',
  address: 'Шабдалы базар',
  area: 'Манас',
  mapQuery: 'Шабдалы базар, Манас, Кыргызстан',
  openHour: 10,
  closeHour: 20,
  tgBotToken: '',
  tgChatId: '',
  liveToast: true
};

window.DEFAULT_PRODUCTS = [
  // --- Новинки из TikTok (@karzetmood_) ---
  {id:201, cat:'top',    name:'Куртка-ветровка с капюшоном · Black', sub:'TikTok Хит · Чёрная на молнии / Карманы на кнопках', price:2500, img:'assets/products/tt_1.jpg', images:['assets/products/tt_1.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7n6g5T/'},
  {id:206, cat:'top',    name:'Пуховая жилетка (Безрукавка) · Navy', sub:'TikTok Хит · Тёплая дутая жилетка на молнии',       price:1999, img:'assets/products/tt_6.jpg', images:['assets/products/tt_6.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7nhsYU/'},
  {id:202, cat:'top',    name:'Спортивный костюм MASAI · Black',     sub:'TikTok Хит · Зип-худи с узором в капюшоне',          price:3499, img:'assets/products/tt_2.jpg', images:['assets/products/tt_2.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7n2wDd/'},
  {id:203, cat:'top',    name:'Худи / Костюм Under Armour · Бордо',  sub:'TikTok Хит · Бордовый с логотипом (Li-Ning — 1 700 с)', price:2500, img:'assets/products/tt_3.jpg', images:['assets/products/tt_3.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7nk6PV/'},
  {id:207, cat:'top',    name:'Пуховик / Куртка Li-Ning · Navy',     sub:'TikTok Хит · Тёплая куртка с капюшоном',             price:1700, img:'assets/products/tt_3.jpg', images:['assets/products/tt_3.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7nk6PV/'},
  {id:204, cat:'top',    name:'Комплект: Бомбер & Брюки · Шоколад',  sub:'TikTok Образ · Куртка с капюшоном + Классика брюки',  price:4999, img:'assets/products/tt_4.jpg', images:['assets/products/tt_4.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7njBaR/'},
  {id:205, cat:'top',    name:'Комплект Loro Piana · Куртка & Брюки', sub:'TikTok Образ · Чёрная куртка + Бежевые брюки с ремнём', price:4999, img:'assets/products/tt_5.jpg', images:['assets/products/tt_5.jpg'], videoUrl:'https://vt.tiktok.com/ZSb7nhoWR/'},

  // --- Премиальные костюмы и комплекты из Instagram Reels ---
  {id:12,  cat:'top',    name:'Жилетка с капюшоном · Бордо',       sub:'Дутая жилетка + трикотажный капюшон',   price:3500, img:'assets/products/reel_8.jpg', images:['assets/products/reel_8.jpg'], videoUrl:'https://www.instagram.com/reel/DeSLW9VK81-/'},
  {id:1,   cat:'top',    name:'Бомбер Loro Piana · Бордо',         sub:'Loro Piana style · Замша',              price:3500, img:'assets/products/reel_1.jpg', images:['assets/products/reel_1.jpg'], videoUrl:'https://www.instagram.com/reel/DeOBozMKEhB/'},
  {id:2,   cat:'top',    name:'Комплект Loro Piana & Boss',        sub:'Замшевый бомбер + Брюки Boss',          price:5999, img:'assets/products/reel_2.jpg', images:['assets/products/reel_2.jpg'], videoUrl:'https://www.instagram.com/reel/DeOADu1qJv3/'},
  {id:3,   cat:'top',    name:'Комплект Loro Piana & Kiton',       sub:'Бомбер + Джинсы Kiton слим',            price:5499, img:'assets/products/reel_3.jpg', images:['assets/products/reel_3.jpg'], videoUrl:'https://www.instagram.com/reel/DeJgEIYx4E4/'},
  {id:4,   cat:'top',    name:'Деним комплект Kiton (общий)',      sub:'Джинсовая куртка с капюшоном + Джинсы', price:4699, img:'assets/products/reel_4.jpg', images:['assets/products/reel_4.jpg'], videoUrl:'https://www.instagram.com/reel/DeJWXN_ta68/'},
  {id:5,   cat:'top',    name:'Костюм Stone Island · Dark Navy',   sub:'Ветровка с патчем + Брюки',             price:4999, img:'assets/products/reel_5.jpg', images:['assets/products/reel_5.jpg'], videoUrl:'https://www.instagram.com/reel/Dd28B8AqdIz/'},
  {id:6,   cat:'top',    name:'Рубашка Kiton с капюшоном',         sub:'Плотный фланель в клетку / Oversize',   price:2599, img:'assets/products/reel_6.jpg', images:['assets/products/reel_6.jpg'], videoUrl:'https://www.instagram.com/reel/DdbbTvUqfCx/'},
  {id:7,   cat:'top',    name:'Ветровка Polo Ralph Lauren',        sub:'Navy Bomber · Вышитый логотип Pony',    price:1999, img:'assets/products/reel_7.jpg', images:['assets/products/reel_7.jpg'], videoUrl:'https://www.instagram.com/reel/Dc2hihxO45R/'},

  // --- Джинсы & Брюки ---
  {id:8,   cat:'bottom', name:'Джинсы Classic · Тёмный деним',     sub:'Темно-синий деним / Премиум посадка',   price:1700, img:'assets/products/reel_8.jpg', images:['assets/products/reel_8.jpg'], videoUrl:'https://www.instagram.com/reel/DeSLW9VK81-/'}
];
