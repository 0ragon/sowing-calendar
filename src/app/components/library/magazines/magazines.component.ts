import {Component, OnInit} from '@angular/core';
import {LibraryItem} from '../library-item/library-item.component';

@Component({
  selector: 'app-magazins',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.scss']
})
export class MagazinesComponent implements OnInit {
  magazines: LibraryItem[] = [
    {
      name: 'Журнал \'Агробізнес Україна\'',
      description: 'інформаційно-рекламне видання, головна мета якого - пропаганда передових технологій у сільському господарстві, налагодження міцного и постійного зв\'язку між виробниками та споживачами засобів сільськогосподарського виробництва та технологій',
      photo: 'http://www.agrobusiness.com.ua/header_images/header_bar_4_logo.gif',
      url: 'http://www.agrobusiness.com.ua/'
    },
    {
      name: 'АгроЕліта',
      description: 'Ви можете знайти надійного партнера саме для Вашого бізнесу; знайти цікаву інформацію та яскраві фотозвіти – в наших авторських репортажах з передових подій аграрної галузі України: виставок, форумів, Днів поля, семінарів та конференцій регіонального, всеукраїнського і міжнародного масштабів; захопитись відвертістю інтерв’ю з гостями наших номерів.',
      photo: 'http://agroprod.biz/wp-content/uploads/2018/04/%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB4.jpg',
      url: 'http://agroprod.biz/'
    },
    {
      name: 'Чим Хата Багата',
      description: 'Днів поля, семінарів та конференцій регіонального, всеукраїнського і міжнародного масштабів; захопитись відвертістю інтерв’ю з гостями наших номерів.',
      photo: 'http://agroprod.biz/wp-content/uploads/2017/03/%D0%B3%D0%B0%D0%B7%D0%B5%D1%82%D0%B0-4.jpg',
      url: 'http://agroprod.biz/hazeta-chym-hata-bahata-2/'
    },
   {
      name: 'Агробізнес Сьогодні',
      description: 'Незалежне і самоокупне видання, орієнтоване на топ–менеджмент підприємств АПК.',
      photo: 'http://agroprod.biz/wp-content/uploads/2017/03/%D0%B3%D0%B0%D0%B7%D0%B5%D1%82%D0%B0-4.jpg',
      url: 'http://agroprod.biz/hazeta-chym-hata-bahata-2/'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
