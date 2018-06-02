import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Field} from '../components/main-map/main-map.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {
  private readonly url = 'http://192.168.0.104:80/api/';
  private _cultures = [
    {
      name: 'Пшениця',
      description: 'Рід трав\'янистих, в основному однорічних, рослин сімейства Злаки, або Тонконогі (Poaceae), провідна зернова культура в багатьох країнах.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Weizen%C3%A4hren.jpg/275px-Weizen%C3%A4hren.jpg',
      url: 'https://uk.wikipedia.org/wiki/%D0%9F%D1%88%D0%B5%D0%BD%D0%B8%D1%86%D1%8F'
    },
    {
      name: 'Соняшник',
      description: 'Рід рослин сімейства Айстрові (Asteraceae). Найбільш відомі види - соняшник олійний і соняшник клубненосний.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/A_sunflower.jpg/258px-A_sunflower.jpg',
      url: 'https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BD%D1%8F%D1%88%D0%BD%D0%B8%D0%BA'
    },
    {
      name: 'Гречка',
      description: 'Рослина роду Fagopyrum родини Гречкові (Polygonaceae). Зазвичай гречкою називають Fagopyrum esculentum, що може виростати до одного метра на бідних ґрунтах і при короткому літі. Має дуже поживні темні трикутні зерна, які люди вживають для харчування, а також використовують у тваринних кормах.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Illustration_Fagopyrum_esculentum0.jpg/260px-Illustration_Fagopyrum_esculentum0.jpg',
      url: 'https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D1%87%D0%BA%D0%B0'
    },
    {
      name: 'Кукуруза',
      description: 'Однорічна рослина родини Тонконогових. Одна з найвисокопродуктивніших злакових культур універсального призначення, яку разом з рисом і пшеницею відносять до одного з «трьох найголовніших хлібів людства».',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/ZeaMays.jpg/172px-ZeaMays.jpg',
      url: 'https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BA%D1%83%D1%80%D1%83%D0%B4%D0%B7%D0%B0'
    },
    {
      name: 'Картопля',
      description: 'Вид рослин родини пасльонових, поширена сільськогосподарська культура, яку в народі називають «другим хлібом»;[1][2][3][4] одна з найважливіших продовольчих, технічних і кормових культур.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Solanum_tuberosum.JPG/275px-Solanum_tuberosum.JPG',
      url: 'https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D0%BF%D0%BB%D1%8F'
    },
    {
      name: 'Соя',
      description: 'Однорічна трав\'яниста культурна рослина родини бобових, зовні подібна до квасолі, одна з найдавніших їстівних культур.',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Soybean.USDA.jpg/258px-Soybean.USDA.jpg',
      url: 'https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D1%8F'
    },
  ];
  private _books = [
    {
      name: 'Довідник із захисту польових культур від хвороб та шкідників',
      description: 'Редакція журналу «Пропозиція» випустила оновлений практичний довідник «ЗАХИСТ"',
      photo: 'http://propozitsiya.com/sites/default/files/styles/580x/public/handbook/zashita_rast_2018_s.jpg?itok=SyCZvDGy',
      url: 'http://propozitsiya.com/ua/dovidnyk-iz-zahystu-polovyh-kultur-vid-hvorob-ta-shkidnykiv'
    },
    {
      name: 'Соя: культура унікальних можливостей',
      description: 'У багатоілюстрованому виданні подано значення, поширення, біологічні...',
      photo: 'http://propozitsiya.com/sites/default/files/styles/150x200x/public/handbook/soya_1.jpg?itok=jst-VCDr',
      url: 'http://propozitsiya.com/ua/soya-kultura-unikalnih-mozhlivostey-0'

    },
    {
      name: 'Ремонт тракторів',
      description: 'Понад тридцять професійних рекомендацій  щодо самостійного ремонту тракторів з...',
      photo: 'http://propozitsiya.com/sites/default/files/styles/150x200x/public/handbook/profi_remont_traktorov.jpg?itok=GZs6D19J',
      url: 'http://propozitsiya.com/ua/remont-traktoriv'
    },
    {
      name: 'Довідник із захисту польових культур від хвороб та шкідників',
      description: 'Редакція журналу «Пропозиція» випустила оновлений практичний довідник «ЗАХИСТ"',
      photo: 'http://propozitsiya.com/sites/default/files/styles/580x/public/handbook/zashita_rast_2018_s.jpg?itok=SyCZvDGy',
      url: 'http://propozitsiya.com/ua/dovidnyk-iz-zahystu-polovyh-kultur-vid-hvorob-ta-shkidnykiv'
    },
    {

      name: 'Визначник хвороб і шкідників цукрового буряка',
      description: 'Видання кишенькового формату. Морфологічні особливості, зовнішні ознаки хвороб',
      photo: 'http://propozitsiya.com/sites/default/files/styles/150x200x/public/handbook/cover_sahar_svekla_0.jpg?itok=2FLsYb0E',
      url: 'http://propozitsiya.com/ua/vyznachnyk-hvorob-i-shkidnykiv-cukrovogo-buryaka'
    },
    {
      name: 'Практичний довідник овочівника. Томат',
      description: 'Все про томат: вибір сортів, технології вирощування у відкритому грунті, захист',
      photo: 'http://propozitsiya.com/sites/default/files/styles/150x200x/public/handbook/cover_tomat.jpg?itok=LbOJ_VoN',
      url: 'http://propozitsiya.com/ua/praktychnyy-dovidnyk-ovochivnyka-tomat'
    },
    {
      name: 'Практичний довідник овочівника. Огірок',
      description: 'Все про огірок: про культуру, технології вирощування',
      photo: 'http://propozitsiya.com/sites/default/files/styles/150x200x/public/handbook/katalog_ogyrec_2016.jpg?itok=9I2mzD8T',
      url: 'http://propozitsiya.com/ua/praktychnyy-dovidnyk-ovochivnyka-ogirok'
    }
  ];
  public isLoaderVisible = false;
  public isAuthorized = false;

  constructor(private _http: HttpClient) {
  }

  get cultures() {
    return this._cultures;
  }

  get books() {
    return this._books;
  }

  get cultures_short() {
    return this.cultures.map(el => el.name);
  }

  //#region Field
  createField(body: Field) {
    return this._http.post(`${this.url}Field`, body);
  }

  getFields(): Observable<Field[]> {
    return this._http.get<Field[]>(`${this.url}Field`);
  }

  removeField(id) {
    return this._http.delete<Field[]>(`${this.url}Field/${id}`);
  }
  //#endregion

  //#region Plan
  createPlan(fieldId: number, body) {
    return this._http.post(`${this.url}Plan/${fieldId}`, body);
  }

  getPlans(fieldId) {
    return this._http.get<Field[]>(`${this.url}Plan/${fieldId}`);
  }

  editPlan(fieldId, planId, body) {
    return this._http.put(`${this.url}Plan/${fieldId}/${planId}`, body);
  }

  deletePlan(fieldId, planId) {
    return this._http.delete(`${this.url}Plan/${fieldId}/${planId}`);
  }

  //#endregion

  toggleLoader() {
    this.isLoaderVisible = !this.isLoaderVisible;
  }

  showLoader() {
    if (!this.isLoaderVisible) {
      this.toggleLoader();
    }
  }

  hideLoader() {
    if (this.isLoaderVisible) {
      this.toggleLoader();
    }
  }
}
