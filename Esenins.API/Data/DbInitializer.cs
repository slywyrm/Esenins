using System.Linq;
using Esenins.API.Models;

namespace Esenins.API.Data
{
    public static class DbInitializer
    {
        private static Copyright _ssCopyright;
        private static Copyright _dkCopyright;
        
        public static void Initialize(AppDbContext context)
        {
            InitializeCopyrights(context);
            InitializeMainPageSlides(context);
            InitializePortfolio(context);
            InitializeProjects(context);
        }

        private static void InitializeCopyrights(AppDbContext context)
        {
            if (!context.Copyrights.Any())
            {
                var copyrights = new Copyright[]
                {
                    new Copyright {Name = "Sundukovy Sisters", Logo = ""},
                    new Copyright {Name = "DKstudio", Logo = ""}
                };

                foreach (var copyright in copyrights)
                {
                    context.Copyrights.Add(copyright);
                }

                context.SaveChanges();
            }

            _ssCopyright = context.Copyrights.Single(cr => cr.Name == "Sundukovy Sisters");
            _dkCopyright = context.Copyrights.Single(cr => cr.Name == "DKstudio");
        }

        private static void InitializeMainPageSlides(AppDbContext context)
        {
            if (context.MainPageSlides.Any()) return;

            var slides = new MainPageSlide[]
            {
                new MainPageSlide
                {
                    Text = "Наполним пространство неповторимой, самобытной атмосферой, которая в полной мере расскажет идею вашего заведения",
                    Image = "/assets/main-page-slides/1.jpg",
                    Copyright = _ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Создадим проект и пройдем с вами от идеи до ее реализации",
                    Image = "/assets/main-page-slides/2.jpg",
                    Copyright = _dkCopyright
                },
                new MainPageSlide
                {
                    Text = "Работаем как с формой, так и содержанием. Разработаем запоминающиеся паттерны для вашего интерьера, которые сделают ваш интерьер узнаваемым",
                    Image = "/assets/main-page-slides/3.jpg",
                    Copyright = _ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Наполним уютом ваш дом. Подобрав уникальные сочетания текстиля и декора для каждого уголка",
                    Image = "/assets/main-page-slides/5.jpg",
                    Copyright = _dkCopyright
                },
                new MainPageSlide
                {
                    Text = "Умело обращаемся со всеми интерьерными стилями. Любим их смешивать и выдерживать, организуя неповторимые эмоции и ощущения от пространства",
                    Image = "/assets/main-page-slides/6.jpg",
                    Copyright = _ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Разработаем подробную проектную документацию, организуем контроль за строительными работами и гарантированный результат",
                    Image = "/assets/main-page-slides/7.jpg"
                },
                new MainPageSlide
                {
                    Text = "Разработаем дизайн как помещения, так и открытого пространства, внешнего оформления",
                    Image = "/assets/main-page-slides/8.jpg",
                    Copyright = _ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Наша команда имеет большой опыт работы с проектами разного масштаба. Так, что «оденем слона» и «подкуем блоху» с одинаковым уровнем качества",
                    Image = "/assets/main-page-slides/9.jpg",
                    Copyright = _dkCopyright
                },
            };

            foreach (var slide in slides)
            {
                context.MainPageSlides.Add(slide);
            }

            context.SaveChanges();
        }

        private static void InitializePortfolio(AppDbContext context)
        {
            if (context.Portfolio.Any()) return;

            var items = new PortfolioItem[]
            {
                new PortfolioItem
                {
                    Name = "Salumeria",
                    SubName = "г. Москва, Спиридоньевский переулок, 2017",
                    Annotation = "Итальянская гастрономия и ресторан на Патриарших",
                    Description = @"Интерьер Salumeria ”итальянский” не буквально, а по духу. Ресторан расположен на 
                        двух этажах. Главным элементом на первом этаже является латунная печь для пиццы и окружающая её
                        деревянная барная стойка. Здесь можно расположиться на высоких барных стульях с изящными 
                        латунными ножками и наблюдать, как мастера своего дела бариста и пиццайоло готовят ваш заказ.
                        Также в зале расположился первый в Москве питьевой фонтанчик с современной мощной системой 
                        фильтрации воды. Воду из него подают на каждый стол бесплатно, как в Италии.
                        В отличие от других ресторанов, в Salumeria можно поесть прямо на кухне, расположившейся на 
                        нижнем этаже. Сидя за огромным общим столом, вы ощущаете себя настоящим гостем на кухне у 
                        поваров, в самом эпицентре всех процессов.
                        <br />
                        <br />Общая площадь: 265 кв.м
                        <br />Посадка: 86 мест",
                    PlaceholderPhoto = "/assets/portfolio/1/4.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/1/1.jpg"},
                        new Image {Path = "assets/portfolio/1/2.jpg"},
                        new Image {Path = "assets/portfolio/1/3.jpg"},
                        new Image {Path = "assets/portfolio/1/4.jpg"},
                        new Image {Path = "assets/portfolio/1/5.jpg"},
                        new Image {Path = "assets/portfolio/1/6.jpg"},
                        new Image {Path = "assets/portfolio/1/7.jpg"},
                        new Image {Path = "assets/portfolio/1/8.jpg"}
                    },
                    TileSize = "long",
                    Copyright = _ssCopyright,
                    Order = 0
                },
                new PortfolioItem
                {
                    Name = "Гранд отель Звезда",
                    SubName = "г. Тверь, 2016",
                    Annotation = "Четырехзвездочный отель с современным классическим интерьером",
                    Description = @"“Гранд отель Звезда”, расположен в историческом центре, на пересечении улиц 
                        Трехсвятской и Симеоновской - культурном центре города. Современное здание, построенное с 
                        учетом новейших требований архитектуры, обладает всей необходимой инфраструктурой для 
                        проведения как бизнес-конференций, так и полноценного отдыха. Гостиница оформлена в современном 
                        классическом стиле с элементами арт-деко, в отделке холлов использованы натуральные материалы: 
                        гранит, мрамор, минеральные штукатурки, натуральное дерево, а также хрусталь. Стены холла 
                        украшают работы Петра Лизунова. В инфраструктуру гостиничного комплекса входят: Ресторан 
                        “Grand Cafe”, SPA центр, конференц-зал, бар, ювелирный магазин, открытый бар на крыше, 
                        “Президентский” номер, а также караоке.
                        <br />
                        <br />Общая площадь: 4 135 кв.м.
                        <br />Конференц зал: 114 кв.м.
                        <br />Номерной фонд: 68 номеров",
                    PlaceholderPhoto = "/assets/portfolio/2/2.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/2/1.jpg"},
                        new Image {Path = "assets/portfolio/2/2.jpg"},
                        new Image {Path = "assets/portfolio/2/3.jpg"},
                        new Image {Path = "assets/portfolio/2/4.jpg"},
                        new Image {Path = "assets/portfolio/2/5.jpg"},
                        new Image {Path = "assets/portfolio/2/6.jpg"},
                        new Image {Path = "assets/portfolio/2/7.jpg"},
                        new Image {Path = "assets/portfolio/2/8.jpg"},
                        new Image {Path = "assets/portfolio/2/9.jpg"},
                        new Image {Path = "assets/portfolio/2/10.jpg"},
                        new Image {Path = "assets/portfolio/2/11.jpg"},
                        new Image {Path = "assets/portfolio/2/12.jpg"}
                    },
                    TileSize = "tall",
                    Copyright = _dkCopyright,
                    Order = 1
                },
                new PortfolioItem
                {
                    Name = "Remy Kitchen Bakery",
                    SubName = "г. Москва, ул. Малая Бронная, 20176",
                    Annotation = "Уютный ресторан и кулинария на стыке времен",
                    Description = @"Простое, сдержанное, но одновременно теплое и
                        комфортное заведение, где гости могут чувствовать себя как дома. Заведение
                        разделено на три части — два зала ресторана и отдельное помещение с
                        кулинарией-пекарней и кофейней, где быстро и дешево можно купить выпечку и
                        закуски. Второй зал с баром - очень элегантный и сдержанный, содержит в
                        себе микс старого с современным светом и барной стойкой. Тут преобладает
                        строгая и лаконичная мебель. Рисунок на напольной плитке нанесен вручную, со
                        временем он должен немного стереться и визуально состариться. Третья зона - зал
                        с открытой кухней. Одна из стен разрисована вручную. Место получилось на стыке прошлого и 
                        будущего Бабушкин рисунок на полу, хипстерская отделка потолка - это прошлое, а ардекошный 
                        элегантный бар и графичное оформление окон - новая волна возвращения большого стиля.
                        <br />
                        <br />Общая площадь: 185 кв.м
                        <br />Посадка: 80 мест",
                    PlaceholderPhoto = "/assets/portfolio/3/4.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/3/1.jpg"},
                        new Image {Path = "assets/portfolio/3/2.jpg"},
                        new Image {Path = "assets/portfolio/3/3.jpg"},
                        new Image {Path = "assets/portfolio/3/4.jpg"},
                        new Image {Path = "assets/portfolio/3/5.jpg"},
                        new Image {Path = "assets/portfolio/3/6.jpg"},
                        new Image {Path = "assets/portfolio/3/7.jpg"},
                        new Image {Path = "assets/portfolio/3/8.jpg"}
                    },
                    TileSize = "big",
                    Copyright = _ssCopyright,
                    Order = 2
                },
                new PortfolioItem
                {
                    Name = @"Ресторан “Grand Cafe”",
                    SubName = "г. Тверь, 2016",
                    Annotation = "Классический ресторан со светлым интерьером",
                    Description = @"“Grand Cafe”, расположен в здании гостиничного комплекса “Гранд отель Звезда” 
                        в г. Тверь. Ресторан имеет отдельный вход с улицы и для его посещения не требуется быть гостем 
                        отеля. Светлый и воздушный интерьер ресторана оформлен в современном классическом стиле с 
                        элементами арт-деко, в отделке использованы натуральные материалы: гранит, минеральные 
                        штукатурки, натуральное дерево, а также зеркала. Стены основного зала украшают работы Петра 
                        Лизунова. Разнообразие и оригинальность яств по меню a la carte придутся по душе даже самому 
                        взыскательному гурману. И, конечно же, нельзя забыть, и не побаловать себя нежнейшими 
                        десертами. В ресторане предлагается тщательно подобранная винная карта.
                        <br />
                        <br />Общая площадь: 285 кв.м.
                        <br />Посадка: 100 мест",
                    PlaceholderPhoto = "/assets/portfolio/4/4.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/4/1.jpg"},
                        new Image {Path = "assets/portfolio/4/2.jpg"},
                        new Image {Path = "assets/portfolio/4/3.jpg"},
                        new Image {Path = "assets/portfolio/4/4.jpg"},
                        new Image {Path = "assets/portfolio/4/5.jpg"},
                        new Image {Path = "assets/portfolio/4/6.jpg"}
                    },
                    Copyright = _dkCopyright,
                    Order = 3
                },
                new PortfolioItem
                {
                    Name = "Квартира на Остоженке",
                    SubName = "г. Москва, 2015",
                    Annotation = "Квартира для двоих в современном классическом стиле",
                    Description = @"Интерьер был задуман как апартаменты для двоих. Большая гостиная объединила в себе 
                        столовую и гостиную зону с большим диваном и современной видеосистемой. Окна гостиной и спальни 
                        выходят на площадь Пречистенских Ворот, открывая взору архитектурное богатство нашей столицы.
                        Спальня оформлена в светлых тонах преимущественно в серо-коричневой гамме с темными акцентами. 
                        Высокое изголовье выполнено из замши и имеет декоративные вставки с графикой. Большая 
                        раздвижная перегородка, выполненная на заказ, отделяет гардеробные и санузел от спальни. 
                        Большой и просторный санузел отделан карарским мрамором и имеет паровую душевую, ТВ и 
                        джакузи - все, что необходимо для релакса.
                        <br />
                        <br />Общая площадь: 94 кв.м",
                    PlaceholderPhoto = "/assets/portfolio/5/1.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/5/1.jpg"},
                        new Image {Path = "assets/portfolio/5/2.jpg"},
                        new Image {Path = "assets/portfolio/5/3.jpg"},
                        new Image {Path = "assets/portfolio/5/4.jpg"},
                        new Image {Path = "assets/portfolio/5/5.jpg"},
                        new Image {Path = "assets/portfolio/5/6.jpg"}
                    },
                    Copyright = _dkCopyright,
                    Order = 4
                },
                new PortfolioItem
                {
                    Name = "Закусочная Воронеж",
                    SubName = "г. Москва, ул. Большая Дмитровка, 2016",
                    Annotation = "Городское демократичное кафе с первоклассным мясным меню",
                    Description = @"Воронеж на Большой Дмитровке - младший брат закусочной с первого этажа масштабного 
                        одноименного проекта на Пречистенке. Яркий, запоминающийся образ, дерзкая и минималистично 
                        стильная закусочная. В ресторане 4 зала. В первом, уже знакомые всем общие многоуровневые столы 
                        с красными светильниками на крюках. Второй зал отделен от первого стеной с отделкой из 
                        паркетной доски. В проеме между залами - большой коровий арт-колокол. Во втором зале барная 
                        стойка с русскими орнаментами. Также есть небольшой VIP-зал на 7 человек. Стену которого 
                        украсил портретный натюрморт из фруктов императора Рудольфа II в образе Вертумна от Джузеппе 
                        Арчимбольдо. На цокольном этаже расположился небольшой темный, камерный зал с красными 
                        диванами, зеркалами и работами Игоря Скалецкого.
                        <br /> 
                        <br />Общая площадь: 155 кв.м
                        <br />Посадка: 120 мест",
                    PlaceholderPhoto = "/assets/portfolio/9/1.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/9/1.jpg"},
                        new Image {Path = "assets/portfolio/9/2.jpg"},
                        new Image {Path = "assets/portfolio/9/3.jpg"},
                        new Image {Path = "assets/portfolio/9/4.jpg"},
                        new Image {Path = "assets/portfolio/9/5.jpg"},
                        new Image {Path = "assets/portfolio/9/6.jpg"},
                        new Image {Path = "assets/portfolio/9/7.jpg"},
                        new Image {Path = "assets/portfolio/9/8.jpg"}
                    },
                    Copyright = _ssCopyright,
                    Order = 5
                },
                new PortfolioItem
                {
                    Name = @"Ресторан “Портленд”",
                    SubName = "г. Калининград, 2017",
                    Annotation = "Уютный современный ресторан с панорамным видом на озеро",
                    Description = @"Несмотря на то, что это ресторан при отеле, ни один гость из города не будет 
                        чувствовать себя неуютно, как в отельном ресторане. Высокие потолки наполняют это пространство 
                        воздухом. В отделке используются простые и понятные материалы – кирпич, бетон, дерево. Пол 
                        выполнен из широкой деревянной доски медового цвета и выжженным рисунком оленя. Высокие 
                        раздвижные окна объединяют это пространство с парком и озером. Яркие световые инсталляции из 
                        металла, скульптуры и арт оживляют пространство, вызывают желание его изучать, рассматривать. 
                        В дальнем конце зала расположился арт-буфет. В вечернее время он закрывается мобильными 
                        панелями превращаясь в шикарный шкаф из мореного дерева с золотыми прожилками. Второй зал 
                        получился более камерным. Он отделается от основного лёгкой золотой ширмой. На стенах 
                        деревянные панели, за ажурной кирпичной кладкой горит пламя огня. Под потолком подвешены 
                        металлические сети с уловом люминесцентных трубок.
                        <br />
                        <br />Общая площадь: 238 кв.м
                        <br />Посадка: 112 мест",
                    PlaceholderPhoto = "/assets/portfolio/6/3.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/6/1.jpg"},
                        new Image {Path = "assets/portfolio/6/2.jpg"},
                        new Image {Path = "assets/portfolio/6/3.jpg"},
                        new Image {Path = "assets/portfolio/6/4.jpg"},
                        new Image {Path = "assets/portfolio/6/5.jpg"},
                        new Image {Path = "assets/portfolio/6/6.jpg"},
                        new Image {Path = "assets/portfolio/6/7.jpg"}
                    },
                    TileSize = "tall",
                    Copyright = _ssCopyright,
                    Order = 6
                },
                new PortfolioItem
                {
                    Name = @"Веранда “Воронеж”",
                    SubName = "г. Москва, ул. Пречистенка, 2016",
                    Annotation = "Воздушная веранда на крыше ресторана",
                    Description = @"Веранда расположилась на крыше ресторана Воронеж, откуда открывается панорамный вид 
                        на улицы Москвы, на храм Христа Спасителя. Дизайн веранды продолжает историю ресторана: на 
                        стенах роспись работ Игоря Скалецкого, поручни подиума из металлических цепей. Ну и конечно же 
                        красные диваны. Только здесь они не кожаные, а тканевые. В качестве крыши использован складной 
                        тент, так что даже в солнечный жаркий день тут прохладно. А вечером столы освещают 
                        металлические фонари, образом напоминающие уличные.
                        <br />
                        <br />Общая площадь: 100 кв.м
                        <br />Посадка: 75 мест",
                    PlaceholderPhoto = "/assets/portfolio/8/1.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/8/1.jpg"},
                        new Image {Path = "assets/portfolio/8/2.jpg"},
                        new Image {Path = "assets/portfolio/8/3.jpg"},
                        new Image {Path = "assets/portfolio/8/4.jpg"},
                        new Image {Path = "assets/portfolio/8/5.jpg"},
                        new Image {Path = "assets/portfolio/8/6.jpg"}
                    },
                    TileSize = "tall",
                    Copyright = _ssCopyright,
                    Order = 7
                },
                new PortfolioItem
                {
                    Name = @"Студия “TheBeautyBar”",
                    SubName = "г. Москва, Куркино, 2017",
                    Annotation = "Современный интерьер салона красоты со стильными геометрическими нюансами...",
                    Description = @"Современная студия маникюра и педикюра подарит вам заботу и красоту. На тридцати 
                        квадратных метрах расположились 4 маникюрных стола, 2 кресла для педикюра, кресло бровиста и 
                        мейк-ап и зона ожидания, где можно выпить ароматного кофе и посмотреть пробники и колеры. 
                        Стильный интерьер создает прекрасное настроение, все детали выполнены в ручную на заказ. 
                        Ласточки на кирпичной стене напоминают о приходе весны. 
                        <br />
                        <br />Общая площадь: 30 кв.м",
                    PlaceholderPhoto = "/assets/portfolio/7/1.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/7/1.jpg"},
                        new Image {Path = "assets/portfolio/7/2.jpg"},
                        new Image {Path = "assets/portfolio/7/3.jpg"},
                        new Image {Path = "assets/portfolio/7/4.jpg"}
                    },
                    TileSize = "long",
                    Order = 8
                },
                new PortfolioItem
                {
                    Name = "Foodtruck \"pitApitA\"",
                    SubName = "г. Москва, Archpoint concept awards 2017",
                    Annotation = "Безопасная еда на улицах города",
                    Description = @"Для конкурса Archpoint concept awards 2017 нами была разработана концепция сети 
                        заведений общественного питания pitApitA. Лозунг данного заведения: «Безопасная еда - 
                        безопасная среда!». Идея оформления родилась в конце новогодних праздников. В преддверии 
                        напряженных рабочих будней мы предложили дополнительные меры безопасности. В частности, на 
                        улицах города возле станций метро, бизнес центров, вокзалов и мест массового скопления людей 
                        начать устанавливать “бетонные блоки” сети заведений уличного питания «pitApitA». Таким образом 
                        мы намерены минимизировать голодные обмороки, отравления, нервное напряжение по причине 
                        безумного голода. Внешнее оформление представляет собой защитный бетонный блок, которые 
                        регулярно появляются на улицах нашего города перед праздниками. Фишкой нашего заведения стала 
                        открытая кухня на улицах города! Также нами было разработан концепт приложения для данной сети 
                        общественного питания.",
                    PlaceholderPhoto = "/assets/portfolio/10/1.jpg",
                    Photos = new Image[]
                    {
                        new Image {Path = "assets/portfolio/10/1.jpg"},
                        new Image {Path = "assets/portfolio/10/2.jpg"},
                        new Image {Path = "assets/portfolio/10/3.jpg"},
                        new Image {Path = "assets/portfolio/10/4.jpg"},
                        new Image {Path = "assets/portfolio/10/5.jpg"}
                    },
                    Order = 9
                }
            };

            foreach (var item in items)
            {
                context.Portfolio.Add(item);
            }

            context.SaveChanges();
        }

        private static void InitializeProjects(AppDbContext context)
        {
            if (context.ProjectsBySection.Any()) return;

            var sections = new ProjectsSection[]
            {
                new ProjectsSection
                {
                    Id = "hotels",
                    Name = "отели",
                    Projects = new Project[]
                    {
                        new Project
                        {
                            Name = "Гостиничный комплекс «Гранд Отель Звезда» г. Тверь",
                            PortfolioId = "dce09724-c1cf-4c19-a20e-4a7887d82d69",
                            Copyright = _dkCopyright
                        },
                        new Project {Name = "Ибис г. Иркутск", Copyright = _ssCopyright},
                        new Project {Name = "Ибис г. Тбилиси", Copyright = _ssCopyright},
                        new Project {Name = "Mercure г. Калининград", Copyright = _ssCopyright},
                        new Project {Name = "Mercure г. Нижний Новгород", Copyright = _ssCopyright},
                        new Project {Name = "Mercure г. Саранск", Copyright = _ssCopyright},
                        new Project {Name = "Mercure г. Благовещенск", Copyright = _ssCopyright},
                        new Project {Name = "Radisson BLU г. Ростов-на-Дону", Copyright = _ssCopyright},
                        new Project {Name = "Ибис г. Москва", Copyright = _ssCopyright},
                        new Project {Name = "Ибис budget г. Москва", Copyright = _ssCopyright},
                        new Project {Name = "Концепт-проект Radisson BLU г. Волгоград", Copyright = _ssCopyright},
                        new Project {Name = "Эко-мини-отель «Ласточка» г. Туапсе (концепт-проект)"},
                        new Project {Name = "Концепт-проект номерного фонда 3 звезды г. Сочи"},
                        new Project {Name = "Концепт-проект номерного фонда 4 звезды г. Батуми"},
                        new Project {Name = "Концепт-проект номерного фонда 3 звезды г. Москва"},
                        new Project {Name = "Концепт-проект номерного фонда 4 звезды г. Москва"}
                    }
                },
                new ProjectsSection
                {
                    Id = "others",
                    Name = "другие",
                    Projects = new Project[]
                    {
                        new Project
                        {
                            Name = "Салон «The Beauty Bar» г. Химки",
                            PortfolioId = "3ab7749c-59f9-4604-9784-4ee4259dfc6c"
                        },
                        new Project {Name = "Концепт-проект салона-магазина мебельной фабрики Openorion г. Москва"},
                        new Project {Name = "Выстовочный стенд мебельной фабрики Openorion г. Москва"},
                        new Project
                        {
                            Name = "Foodtruck «pitApitA» г. Москва", 
                            PortfolioId = "23d8b7d3-90c5-484b-9feb-709c9e660041"
                        }
                    }
                },
                new ProjectsSection
                {
                    Id = "bars",
                    Name = "рестораны и бары",
                    Projects = new Project[]
                    {
                        new Project
                        {
                            Name = "Бар «Johny Josper pub» г. Москва",
                            Copyright = _dkCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан «Воронеж» г. Москва, ул. Пречистенка",
                            PortfolioId = "c91da70c-965f-4549-905e-2008e509e818",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан «Воронеж» г. Москва, ул. Малая Дмитровка",
                            PortfolioId = "44925919-6f7a-4b8e-91e4-9d29e69a76ac",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан Гранд Кафе г. Тверь",
                            PortfolioId = "6772d29c-1406-49ab-a069-be2d984d52b1",
                            Copyright = _dkCopyright
                        },
                        new Project
                        {
                            Name = "Караоке-бар «Музыкант» г. Тверь",
                            Copyright = _dkCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан «Мандарин, Лапша и Утки» г. Москва",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан «Salumeria» г. Москва",
                            PortfolioId = "c850b11d-d2ab-4e6e-afdf-f619e935151f",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан «Remy Kitchen Bakery» г. Москва",
                            PortfolioId = "d88b36e7-3848-4eec-aa11-40f3d300bb67",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан «Queen Project» г. Казань",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Ресторан в Lotte Plaza г. Москва (концепт-проект)",
                            Copyright = _ssCopyright
                        },
                        new Project {Name = "Ресторан «Wright Brothers BAR & RESTAURANT» г. Москва (концепт-проект)"},
                        new Project {Name = "Столовая free-flo г. Москва (концепт-проект)"},
                        new Project
                        {
                            Name = "Ресторан Портленд г. Калининград",
                            PortfolioId = "4cf5a571-dac6-42d0-9266-a1780c4e9f70",
                            Copyright = _ssCopyright
                        },
                        new Project {Name = "Корнер PinzaUno г. Москва, ул. Рождественка FOOD STORE"}
                    }
                },
                new ProjectsSection
                {
                    Id = "flats",
                    Name = "квартиры",
                    Projects = new Project[]
                    {
                        new Project
                        {
                            Name = "Квартира 120 кв.м. г. Москва, Богословский пер.",
                            Copyright = _ssCopyright
                        },
                        new Project
                        {
                            Name = "Квартира г. Москва, ул. Остоженка",
                            PortfolioId = "f0015c9e-e796-4bf7-b104-d666f8c6c638",
                            Copyright = _dkCopyright
                        },
                        new Project
                        {
                            Name = "Квартира г. Тверь",
                            Copyright = _dkCopyright
                        },
                        new Project
                        {
                            Name = "Квартира г. Москва, ул. Мосфильмовская",
                            Copyright = _dkCopyright
                        },
                        new Project
                        {
                            Name = "Квартира г. Одинцово",
                            Copyright = _dkCopyright
                        },
                        new Project {Name = "Кваритра г. Москва, Университет"},
                        new Project {Name = "Квартира г. Зеленоград, район «Зеленый бор»"},
                        new Project {Name = "Квартира г. Химки, район Левобережный"},
                        new Project {Name = "Квартира г. Зеленоград"},
                        new Project {Name = "Квартира 55 кв.м. г. Москва, м. Академическая"},
                        new Project {Name = "Квартира 72 кв.м. г. Москва, м. Войковская"}
                    }
                },
                new ProjectsSection
                {
                    Id = "cottages",
                    Name = "дома",
                    Projects = new Project[]
                    {
                        new Project {Name = "Коттедж, МО, поселок Николо-Черкизово"},
                        new Project {Name = "Загородный дом СНТ Родник, Московская область"}
                    }
                }
            };

            foreach (var section in sections)
            {
                context.ProjectsBySection.Add(section);
            }

            context.SaveChanges();
        }
    }
}