import { Injectable } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio-item.model';
import { ProjectsBySections, ProjectSection } from '../../models/project-section';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  private portfolio = new BehaviorSubject<PortfolioItem[]>([
    {
      id: '1',
      name: 'Salumeria',
      subName: 'г. Москва, Спиридоньевский переулок, 2017',
      annotation: 'Итальянская гастрономия и ресторан на Патриарших',
      description: `
        Интерьер Salumeria ”итальянский” не буквально, а по духу. Ресторан расположен на двух этажах. Главным элементом на первом этаже является латунная печь для пиццы и окружающая её деревянная барная стойка. Здесь можно расположиться на высоких барных стульях с изящными латунными ножками и наблюдать, как мастера своего дела бариста и пиццайоло готовят ваш заказ.
        Также в зале расположился первый в Москве питьевой фонтанчик с современной мощной системой фильтрации воды. Воду из него подают на каждый стол бесплатно, как в Италии.
        В отличие от других ресторанов, в Salumeria можно поесть прямо на кухне, расположившейся на нижнем этаже. Сидя за огромным общим столом, вы ощущаете себя настоящим гостем на кухне у поваров, в самом эпицентре всех процессов.
        <br />
        <br />Общая площадь: 265 кв.м
        <br />Посадка: 86 мест`,
      placeholderPhoto: '/assets/portfolio/1/4.jpg',
      photos: [
        '/assets/portfolio/1/1.jpg',
        '/assets/portfolio/1/2.jpg',
        '/assets/portfolio/1/3.jpg',
        '/assets/portfolio/1/4.jpg',
        '/assets/portfolio/1/5.jpg',
        '/assets/portfolio/1/6.jpg',
        '/assets/portfolio/1/7.jpg',
        '/assets/portfolio/1/8.jpg'
      ],
      tileSize: 'long',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      id: '2',
      name: '“Гранд отель Звезда”',
      subName: 'г. Тверь, 2016',
      annotation: 'Четырехзвездочный отель с современным классическим интерьером',
      description: `
        “Гранд отель Звезда”, расположен в историческом центре, на пересечении улиц Трехсвятской и Симеоновской - культурном центре города. Современное здание, построенное с учетом новейших требований архитектуры, обладает всей необходимой инфраструктурой для проведения как бизнес-конференций, так и полноценного отдыха. Гостиница оформлена в современном классическом стиле с элементами арт-деко, в отделке холлов использованы натуральные материалы: гранит, мрамор, минеральные штукатурки, натуральное дерево, а также хрусталь. Стены холла украшают работы Петра Лизунова. В инфраструктуру гостиничного комплекса входят: Ресторан “Grand Cafe”, SPA центр, конференц-зал, бар, ювелирный магазин, открытый бар на крыше, “Президентский” номер, а также караоке.
        <br />
        <br />Общая площадь: 4 135 кв.м.
        <br />Конференц зал: 114 кв.м.
        <br />Номерной фонд: 68 номеров`,
      placeholderPhoto: '/assets/portfolio/2/2.jpg',
      photos: [
        '/assets/portfolio/2/1.jpg',
        '/assets/portfolio/2/2.jpg',
        '/assets/portfolio/2/3.jpg',
        '/assets/portfolio/2/4.jpg',
        '/assets/portfolio/2/5.jpg',
        '/assets/portfolio/2/6.jpg',
        '/assets/portfolio/2/7.jpg',
        '/assets/portfolio/2/8.jpg',
        '/assets/portfolio/2/9.jpg',
        '/assets/portfolio/2/10.jpg',
        '/assets/portfolio/2/11.jpg',
        '/assets/portfolio/2/12.jpg'
      ],
      tileSize: 'tall',
      copyright: {
        name: 'DKstudio',
        logo: '/assets/main-page-slides/copyrights/DK_logo.png'
      }
    },
    {
      id: '3',
      name: 'Remy Kitchen Bakery',
      subName: 'г. Москва, ул. Малая Бронная, 2017',
      annotation: 'Уютный ресторан и кулинария на стыке времен',
      description: `
        Простое, сдержанное, но одновременно теплое и
        комфортное заведение, где гости могут чувствовать себя как дома. Заведение
        разделено на три части — два зала ресторана и отдельное помещение с
        кулинарией-пекарней и кофейней, где быстро и дешево можно купить выпечку и
        закуски. Второй зал с баром - очень элегантный и сдержанный, содержит в
        себе микс старого с современным светом и барной стойкой. Тут преобладает
        строгая и лаконичная мебель. Рисунок на напольной плитке нанесен вручную, со
        временем он должен немного стереться и визуально состариться. Третья зона - зал
        с открытой кухней. Одна из стен разрисована вручную. Место получилось на стыке прошлого и будущего Бабушкин рисунок на полу, хипстерская отделка потолка - это прошлое, а ардекошный элегантный бар и графичное оформление окон - новая волна возвращения большого стиля.
        <br />
        <br />Общая площадь: 185 кв.м
        <br />Посадка: 80 мест`,
      placeholderPhoto: '/assets/portfolio/3/4.jpg',
      photos: [
        '/assets/portfolio/3/1.jpg',
        '/assets/portfolio/3/2.jpg',
        '/assets/portfolio/3/3.jpg',
        '/assets/portfolio/3/4.jpg',
        '/assets/portfolio/3/5.jpg',
        '/assets/portfolio/3/6.jpg',
        '/assets/portfolio/3/7.jpg',
        '/assets/portfolio/3/8.jpg'
      ],
      tileSize: 'big',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      id: '4',
      name: 'Ресторан “Grand Cafe”',
      subName: 'г. Тверь, 2016',
      annotation: 'Классический ресторан со светлым интерьером',
      description: `
        “Grand Cafe”, расположен в здании гостиничного комплекса “Гранд отель Звезда” в г. Тверь. Ресторан имеет отдельный вход с улицы и для его посещения не требуется быть гостем отеля. Светлый и воздушный интерьер ресторана оформлен в современном классическом стиле с элементами арт-деко, в отделке использованы натуральные материалы: гранит, минеральные штукатурки, натуральное дерево, а также зеркала. Стены основного зала украшают работы Петра Лизунова. Разнообразие и оригинальность яств по меню a la carte придутся по душе даже самому взыскательному гурману. И, конечно же, нельзя забыть, и не побаловать себя нежнейшими десертами. В ресторане предлагается тщательно подобранная винная карта.
        <br />
        <br />Общая площадь: 285 кв.м.
        <br />Посадка: 100 мест`,
      placeholderPhoto: '/assets/portfolio/4/4.jpg',
      photos: [
        '/assets/portfolio/4/1.jpg',
        '/assets/portfolio/4/2.jpg',
        '/assets/portfolio/4/3.jpg',
        '/assets/portfolio/4/4.jpg',
        '/assets/portfolio/4/5.jpg',
        '/assets/portfolio/4/6.jpg'
      ],
      // tileSize: 'tall',
      copyright: {
        name: 'DKstudio',
        logo: '/assets/main-page-slides/copyrights/DK_logo.png'
      }
    },
    {
      id: '5',
      name: 'Квартира на Остоженке',
      subName: 'г. Москва, 2015',
      annotation: 'Квартира для двоих в современном классическом стиле',
      description: `
        Интерьер был задуман как апартаменты для двоих. Большая гостиная объединила в себе столовую и гостиную зону с большим диваном и современной видеосистемой. Окна гостиной и спальни выходят на площадь Пречистенских Ворот, открывая взору архитектурное богатство нашей столицы.
        Спальня оформлена в светлых тонах преимущественно в серо-коричневой гамме с темными акцентами. Высокое изголовье выполнено из замши и имеет декоративные вставки с графикой. Большая раздвижная перегородка, выполненная на заказ, отделяет гардеробные и санузел от спальни. Большой и просторный санузел отделан карарским мрамором и имеет паровую душевую, ТВ и джакузи - все, что необходимо для релакса.
        <br />
        <br />Общая площадь: 94 кв.м`,
      placeholderPhoto: '/assets/portfolio/5/1.jpg',
      photos: [
        '/assets/portfolio/5/1.jpg',
        '/assets/portfolio/5/2.jpg',
        '/assets/portfolio/5/3.jpg',
        '/assets/portfolio/5/4.jpg',
        '/assets/portfolio/5/5.jpg',
        '/assets/portfolio/5/6.jpg'
      ],
      // tileSize: 'long',
      copyright: {
        name: 'DKstudio',
        logo: '/assets/main-page-slides/copyrights/DK_logo.png'
      }
    },
    {
      id: '9',
      name: 'Закусочная Воронеж',
      subName: 'г. Москва, ул. Большая Дмитровка, 2016',
      annotation: 'Городское демократичное кафе с первоклассным мясным меню',
      description: `
        Воронеж на Большой Дмитровке - младший брат закусочной с первого этажа масштабного одноименного проекта на Пречистенке.
        Яркий, запоминающийся образ, дерзкая и минималистично стильная закусочная. В ресторане 4 зала. В первом, уже знакомые всем общие многоуровневые столы с красными светильниками на крюках. Второй зал отделен от первого стеной с отделкой из паркетной доски. В проеме между залами - большой коровий арт-колокол. Во втором зале барная стойка с русскими орнаментами.
        Также есть небольшой VIP-зал на 7 человек. Стену которого украсил портретный натюрморт из фруктов императора Рудольфа II в образе Вертумна от Джузеппе Арчимбольдо. На цокольном этаже расположился небольшой темный, камерный зал с красными диванами, зеркалами и работами Игоря Скалецкого.
        <br /> 
        <br />Общая площадь: 155 кв.м
        <br />Посадка: 120 мест`,
      placeholderPhoto: '/assets/portfolio/9/1.jpg',
      photos: [
        '/assets/portfolio/9/1.jpg',
        '/assets/portfolio/9/2.jpg',
        '/assets/portfolio/9/3.jpg',
        '/assets/portfolio/9/4.jpg',
        '/assets/portfolio/9/5.jpg',
        '/assets/portfolio/9/6.jpg',
        '/assets/portfolio/9/7.jpg',
        '/assets/portfolio/9/8.jpg'
      ],
      // tileSize: 'long',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      id: '6',
      name: 'Ресторан “Портленд”',
      subName: 'г. Калининград, 2017',
      annotation: 'Уютный современный ресторан с панорамным видом на озеро',
      description: `
        Несмотря на то, что это ресторан при отеле, ни один гость из города не будет чувствовать себя неуютно, как в отельном ресторане.
        Высокие потолки наполняют это пространство воздухом. В отделке используются простые и понятные материалы – кирпич, бетон, дерево. Пол выполнен из широкой деревянной доски медового цвета и выжженным рисунком оленя. Высокие раздвижные окна объединяют это пространство с парком и озером. Яркие световые инсталляции из металла, скульптуры и арт оживляют пространство, вызывают желание его изучать, рассматривать. В дальнем конце зала расположился арт-буфет. В вечернее время он закрывается мобильными панелями превращаясь в шикарный шкаф из мореного дерева с золотыми прожилками. Второй зал получился более камерным. Он отделается от основного лёгкой золотой ширмой. На стенах деревянные панели, за ажурной кирпичной кладкой горит пламя огня. Под потолком подвешены металлические сети с уловом люминесцентных трубок.
        <br />
        <br />Общая площадь: 238 кв.м
        <br />Посадка: 112 мест`,
      placeholderPhoto: '/assets/portfolio/6/3.jpg',
      photos: [
        '/assets/portfolio/6/1.jpg',
        '/assets/portfolio/6/2.jpg',
        '/assets/portfolio/6/3.jpg',
        '/assets/portfolio/6/4.jpg',
        '/assets/portfolio/6/5.jpg',
        '/assets/portfolio/6/6.jpg',
        '/assets/portfolio/6/7.jpg'
      ],
      tileSize: 'tall',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      id: '8',
      name: 'Веранда “Воронеж”',
      subName: 'г. Москва, ул. Пречистенка, 2016',
      annotation: 'Воздушная веранда на крыше ресторана',
      description: `
        Веранда расположилась на крыше ресторана Воронеж, откуда открывается панорамный вид на улицы Москвы, на храм Христа Спасителя. Дизайн веранды продолжает историю ресторана: на стенах роспись работ Игоря Скалецкого, поручни подиума из металлических цепей. Ну и конечно же красные диваны. Только здесь они не кожаные, а тканевые. В качестве крыши использован складной тент, так что даже в солнечный жаркий день тут прохладно. А вечером столы освещают металлические фонари, образом напоминающие уличные.
        <br />
        <br />Общая площадь: 100 кв.м
        <br />Посадка: 75 мест`,
      placeholderPhoto: '/assets/portfolio/8/1.jpg',
      photos: [
        '/assets/portfolio/8/1.jpg',
        '/assets/portfolio/8/2.jpg',
        '/assets/portfolio/8/3.jpg',
        '/assets/portfolio/8/4.jpg',
        '/assets/portfolio/8/5.jpg',
        '/assets/portfolio/8/6.jpg'
      ],
      tileSize: 'tall',
      copyright: {
        name: 'Sundukovy Sisters',
        logo: '/assets/main-page-slides/copyrights/SS_logo.png'
      }
    },
    {
      id: '7',
      name: 'Студия “TheBeautyBar”',
      subName: 'г. Москва, Куркино, 2017',
      annotation: 'Современный интерьер салона красоты со стильными геометрическими нюансами...',
      description: `
        Современная студия маникюра и педикюра подарит вам заботу и красоту. На тридцати квадратных метрах расположились 4 маникюрных стола, 2 кресла для педикюра, кресло бровиста и мейк-ап и зона ожидания, где можно выпить ароматного кофе и посмотреть пробники и колеры. Стильный интерьер создает прекрасное настроение, все детали выполнены в ручную на заказ. Ласточки на кирпичной стене напоминают о приходе весны. 
        <br />
        <br />Общая площадь: 30 кв.м`,
      placeholderPhoto: '/assets/portfolio/7/1.jpg',
      photos: [
        '/assets/portfolio/7/1.jpg',
        '/assets/portfolio/7/2.jpg',
        '/assets/portfolio/7/3.jpg',
        '/assets/portfolio/7/4.jpg'
      ],
      tileSize: 'long'
    },
    {
      id: '10',
      name: 'Foodtruck "pitApitA"',
      subName: 'г. Москва, Archpoint concept awards 2017',
      annotation: 'Безопасная еда на улицах города',
      description: `Для конкурса Archpoint concept awards 2017 нами была разработана концепция сети заведений общественного питания pitApitA. Лозунг данного заведения: «Безопасная еда - безопасная среда!». Идея оформления родилась в конце новогодних праздников. В преддверии напряженных рабочих будней мы предложили дополнительные меры безопасности. В частности, на улицах города возле станций метро, бизнес центров, вокзалов и мест массового скопления людей начать устанавливать “бетонные блоки” сети заведений уличного питания «pitApitA». Таким образом мы намерены минимизировать голодные обмороки, отравления, нервное напряжение по причине безумного голода. Внешнее оформление представляет собой защитный бетонный блок, которые регулярно появляются на улицах нашего города перед праздниками. Фишкой нашего заведения стала открытая кухня на улицах города! Также нами было разработан концепт приложения для данной сети общественного питания.`,
      placeholderPhoto: '/assets/portfolio/10/1.jpg',
      photos: [
        '/assets/portfolio/10/1.jpg',
        '/assets/portfolio/10/2.jpg',
        '/assets/portfolio/10/3.jpg',
        '/assets/portfolio/10/4.jpg',
        '/assets/portfolio/10/5.jpg'
      ],
      // tileSize: 'big'
    }
  ]);
  private projects = new BehaviorSubject<ProjectSection[]>([
    {
      id: 'hotels',
      name: 'отели',
      projects: [
        { name: 'Гостиничный комплекс «Гранд Отель Звезда» г. Тверь', portfolioId: '2', copyright: 'DKStudio' },
        { name: 'Ибис г. Иркутск', copyright: 'Sundukovy Sisters' },
        { name: 'Ибис г. Тбилиси', copyright: 'Sundukovy Sisters' },
        { name: 'Mercure г. Калининград', copyright: 'Sundukovy Sisters' },
        { name: 'Mercure г. Нижний Новгород', copyright: 'Sundukovy Sisters' },
        { name: 'Mercure г. Саранск', copyright: 'Sundukovy Sisters' },
        { name: 'Mercure г. Благовещенск', copyright: 'Sundukovy Sisters' },
        { name: 'Radisson BLU г. Ростов-на-Дону', copyright: 'Sundukovy Sisters' },
        { name: 'Ибис г. Москва', copyright: 'Sundukovy Sisters' },
        { name: 'Ибис budget г. Москва', copyright: 'Sundukovy Sisters' },
        { name: 'Концепт-проект Radisson BLU г. Волгоград', copyright: 'Sundukovy Sisters' },
        { name: 'Эко-мини-отель «Ласточка» г. Туапсе (концепт-проект)' },
        { name: 'Концепт-проект номерного фонда 3 звезды г. Сочи' },
        { name: 'Концепт-проект номерного фонда 4 звезды г. Батуми' },
        { name: 'Концепт-проект номерного фонда 3 звезды г. Москва' },
        { name: 'Концепт-проект номерного фонда 4 звезды г. Москва' }
      ]
    },
    {
      id: 'other',
      name: 'другие',
      projects: [
        { name: 'Салон «The Beauty Bar» г. Химки', portfolioId: '7' },
        { name: 'Концепт-проект салона-магазина мебельной фабрики Openorion г. Москва' },
        { name: 'Выстовочный стенд мебельной фабрики Openorion г. Москва' },
        { name: 'Foodtruck "pitApitA" г. Москва', portfolioId: '10' },
        { name: 'Офис 540 кв.м. г. Москва, ул. Малая Дмитровка' }
      ]
    },
    {
      id: 'bars',
      name: 'рестораны и бары',
      projects: [
        { name: 'Бар «Johny Josper pub» г. Москва', copyright: 'DKStudio' },
        { name: 'Ресторан «Воронеж» г. Москва, ул. Пречистенка', portfolioId: '8', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан «Воронеж» г. Москва, ул. Малая Дмитровка', portfolioId: '9', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан Гранд Кафе г. Тверь', portfolioId: '4', copyright: 'DKStudio' },
        { name: 'Караоке-бар «Музыкант» г. Тверь', copyright: 'DKStudio' },
        { name: 'Ресторан «Мандарин, Лапша и Утки» г. Москва', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан «Salumeria» г. Москва', portfolioId: '1', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан «Remiy Kitchen Bakery» г. Москва', portfolioId: '3', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан «Queen Project» г. Казань', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан в Lotte Plaza г. Москва (концепт-проект)', copyright: 'Sundukovy Sisters' },
        { name: 'Ресторан «Wright Brothers BAR & RESTAURANT» г. Москва (концепт-проект)' },
        { name: 'Столовая free-flo г. Москва (концепт-проект)' },
        { name: 'Ресторан Портленд г. Калининград', portfolioId: '6', copyright: 'Sundukovy Sisters' },
        { name: 'Корнер PinzaUno г. Москва, ул. Рождественка FOOD STORE' }
      ]
    },
    {
      id: 'flats',
      name: 'квартиры',
      projects: [
        { name: 'Квартира 120 кв.м. г. Москва, Богословский пер.', copyright: 'Sundukovy Sisters' },
        { name: 'Квартира г. Москва, ул. Остоженка', portfolioId: '5', copyright: 'DKStudio' },
        { name: 'Квартира г. Тверь', copyright: 'DKStudio' },
        { name: 'Квартира г. Москва, ул. Мосфильмовская', copyright: 'DKStudio' },
        { name: 'Квартира г. Одинцово', copyright: 'DKStudio' },
        { name: 'Кваритра г. Москва, Университет' },
        { name: 'Квартира г. Зеленоград, район «Зеленый бор»' },
        { name: 'Квартира г. Химки, район Левобережный' },
        { name: 'Квартира г. Зеленоград' },
        { name: 'Квартира 55 кв.м. г. Москва, м. Академическая' },
        { name: 'Квартира 72 кв.м. г. Москва, м. Войковская' }
      ]
    },
    {
      id: 'cottages',
      name: 'дома',
      projects: [
        { name: 'Коттедж, МО, поселок Николо-Черкизово' },
        { name: 'Загородный дом СНТ Родник, Московская область' }
      ]
    }
  ]);

  constructor() { }

  getPortfolio(): Observable<PortfolioItem[]> {
    return this.portfolio.asObservable().pipe(
      take(1),
      // map(portfolio => _.orderBy(portfolio, item => +item.id, 'desc'))
    );
  }

  getPortfolioItem(id: string): Observable<PortfolioItem> {
    return this.getPortfolio().pipe(
      map((projects: PortfolioItem[]) => projects.filter(project => project.id === id)[0] || null)
    );
  }

  getProjects(): Observable<ProjectsBySections> {
    return this.projects.asObservable().pipe(
      take(1),
      map((projectSections: ProjectSection[]) => projectSections.reduce((acc , section) => {
        acc[section.id] = section;
        return acc;
      }, {}))
    );
  }

}
