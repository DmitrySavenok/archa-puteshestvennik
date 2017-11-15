import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  lv: {
    menu: {
      start: 'Sākums',
      prices: 'Cenas',
      order: 'Transporta pasūtījums'
    },
    warning: {
        heading: 'Paldies par pasūtījumu',
        text: 'Apstrāde var ilgt 15-30 minūtes. Mēs ar jums sazināsimies.',
    },
    cards: {
    	heading1: 'Kravu Pārvadājumi - Renault Master',
    	text1: 'Garums - 3.2м / Platums - 1.7м / Augstums - 1.89м',
    	list1: ['Mēbeles','Būvmateriāli','Sadzīves tehnika','Mototehnika','Biroja tehnika','Un daudzas citas lietas'],
    	heading2: 'Papildu pakalpojumi',
    	text2: 'Individuāla pieeja',
    	list2: ['Pieredzējuši krāvēji','Mēbeļu montāžas / demontāžas pakalpojumi','Veco mēbeļu izvešana','Trauslo un delikāto kravu iepakošana']
    },
    prices: {
    	heading: 'Pārvadājumu cenas Rīgā',
    	list: 'Pakalpojumi:',
    	transport: 'Transports <br><em> + Vadītājs</em>',
    	transportWithLoaders: 'Transports <b>*</b><br><em> + 2 krāvēji</em>',
    	move: 'Dzīvokļa / Biroja / Vasarnīcas pārcelšanās <b>**</b><br><em> + 2 krāvēji + transports </em>',
    	pricesDay: 'Cenas (9:00 - 23:00)',
    	pricesNight: 'Cenas (23:00 - 9:00)',
    	prices: [
            'no 15€ <em>/ pirmā st.</em><br>7€ &nbsp;&nbsp;<em>/ pap. st.</em>',
            '<em>no</em> 30€ <em></em><br><br>',
            '<em>no</em> 25€ <em>/ st.</em><br><em>* - no divām stundām un vairāk</em>',
            'no 25€ <em>/ pirmā st.</em><br>10€ &nbsp;<em>/ pap. st.</em>',
            '<em>no</em> 50€ <em></em><br><br>',
            '<em>no</em> 40€ <em>/ st.</em><br><em>* - no divām stundām un vairāk</em>'
        ],
    	footnotes: [
            '<b>*</b> - <em> vienas vienības pārvešana</em><br>',
            '<b>**</b> - <em> iekraušana, demontēšana, iepakošana'
        ],
    	calcHeading: 'Cenas kalkulators tālsatiksmes pārvadājumiem no Rīgas',
    	from: 'No: ',
    	to: 'Līdz: ',
    	distance: 'Attālums',
    	price: 'Cena',
        address: 'Adrese',
    },
    order: {
    	heading: 'Transporta pasūtījums',
    	route: 'Maršruts',
    	name: 'Vārds',
    	phone: 'Telefons',
    	from: 'No',
    	to: 'Līdz',
    	about: 'Īsumā par kravas veidu',
    	loaders: 'Krāvēji',
    	assemble: 'Mēbeļu montāža/demontāža',
    	send: 'Pasūtīt'
    }
  },
  ru: {     
    menu: {
      start: 'Начало',
      prices: 'Цены',
      order: 'Заказ транспорта'
    },
    warning: {
        heading: 'Cпасибо за заказ!',
        text: 'Обработка данных может занять 15-30 минут. Мы обязательно с вами свяжемся.',
    },
    cards: {
    	heading1: 'Грузовые перевозки - Renault Master',
    	text1: 'Длина - 3.2м / Ширина - 1.7м / Высота - 1.89м',
    	list1: ['Мебель','Стройматериалы','Бытовая техника','Офисная техника','Мототехника','И многое другое'],
    	heading2: 'Дополнительные услуги',
    	text2: 'Индивидуальный подход',
    	list2: ['Услуги опытных грузчиков','Услуги монтажа / демонтажа комнатной мебели','Вывоз старой мебели','Упаковка хрупких / деликатных грузов']
    },
    prices: {
    	heading: 'Цены на перевозки по Риге',
    	list: 'Услуги:',
    	transport: 'Транспорт <br><em> + водитель</em>',
    	transportWithLoaders: 'Транспорт <b>*</b><br><em> + 2 грузчика</em>',
    	move: 'Квартирный / Офисный / Дачный переезд <b>**</b><br><em> + 2 грузчика + транспорт </em>',
    	pricesDay: 'Цены (9:00 - 23:00):',
    	pricesNight: 'Цены (23:00 - 9:00):',
    	prices: [
            'от 15€ <em>/ первый ч.</em><br>7€ &nbsp;&nbsp;<em>/ доп. ч.</em>',
            '<em>от</em> 30€ <em>/ ч.</em><br><br>',
            '<em>от</em> 25€ <em>/ ч.</em><br><em>* - от двух часов и более</em>',
            'от 25€ <em>/ первый ч.</em><br>10€ &nbsp;<em>/ доп. ч.</em>',
            '<em>от</em> 50€ <em></em><br><br>',
            '<em>от</em> 40€ <em>/ ч.</em><br><em>* - от двух часов и более</em>'
        ],
    	footnotes: [
            '<b>*</b> - <em> одна единица груза</em><br>',
            '**</b> - <em> погрузка, разборка, упаковка'
        ],
    	calcHeading: 'Калькулятор цен на междугородние перевозки из Риги',
    	from: 'Из: ',
    	to: 'До: ',
    	distance: 'Расстояние: ',
    	price: 'Цена: ',
        address: 'Адрес',
    },
    order: {
    	heading: 'Заказ Транспорта',
    	route: 'Маршрут:',
    	name: 'Имя',
    	phone: 'Телефон',
    	from: 'Из',
    	to: 'До',
    	about: 'Коротко о типе груза',
    	loaders: 'Грузчики',
    	assemble: 'Сборка/Разборка мебели',
    	send: 'Отправить'
    }
  }
}

const i18n = new VueI18n({
  locale: 'lv',
  messages,
})

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
