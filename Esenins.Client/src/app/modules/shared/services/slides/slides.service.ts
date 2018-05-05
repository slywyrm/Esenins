import { Injectable } from '@angular/core';
import { SlideModel } from '../../models/slide.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SlidesService {
  private slides = new BehaviorSubject<SlideModel[]>([
    {
      text: 'Наполним пространство неповторимой, самобытной атмосферой, которая в полной мере расскажет идею вашего заведения',
      image: '/assets/main-page-slides/1.jpg',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      text: 'Создадим проект и пройдем с вами от идеи до ее реализации',
      image: '/assets/main-page-slides/2.jpg',
      copyright: {
        name: 'DKstudio',
        logo: '/assets/main-page-slides/copyrights/DK_logo.png'
      }
    },
    {
      text: 'Работаем как с формой, так и содержанием. Разработаем запоминающиеся паттерны для вашего интерьера, которые сделают ваш интерьер узнаваемым',
      image: '/assets/main-page-slides/3.jpg',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    // {
    //   text: 'Разработаем эксклюзивные модели мебели, светильников и декора, сочетание которых создаст уникальность вашего пространства',
    //   image: '/assets/main-page-slides/4.jpg',
    //   copyright: {
    //     name: 'DKstudio',
    //     logo: '/assets/main-page-slides/copyrights/DK_logo.png'
    //   }
    // },
    {
      text: 'Наполним уютом ваш дом. Подобрав уникальные сочетания текстиля и декора для каждого уголка',
      image: '/assets/main-page-slides/5.jpg',
      copyright: {
        name: 'DKstudio',
        logo: '/assets/main-page-slides/copyrights/DK_logo.png'
      }
    },
    {
      text: 'Умело обращаемся со всеми интерьерными стилями. Любим их смешивать и выдерживать, организуя неповторимые эмоции и ощущения от пространства',
      image: '/assets/main-page-slides/6.jpg',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      text: 'Разработаем подробную проектную документацию, организуем контроль за строительными работами и гарантированный результат',
      image: '/assets/main-page-slides/7.jpg'
    },
    {
      text: 'Разработаем дизайн как помещения, так и открытого пространства, внешнего оформления',
      image: '/assets/main-page-slides/8.jpg',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      text: 'Наша команда имеет большой опыт работы с проектами разного масштаба. Так, что «оденем слона» и «подкуем блоху» с одинаковым уровнем качества',
      image: '/assets/main-page-slides/9.jpg',
      copyright: {
        name: 'DKstudio',
        logo: '/assets/main-page-slides/copyrights/DK_logo.png'
      }
    },
    // {
    //   text: 'Разработаем брендовый дизайн для сети ваших заведений',
    //   image: '/assets/main-page-slides/10.jpg',
    //   copyright: {
    //     name: 'Sundukovy Sisters',
    //     logo: '/assets/main-page-slides/copyrights/SS_logo.png'
    //   }
    // }
  ]);
  slides$ = this.slides.asObservable();


  constructor() { }

}
