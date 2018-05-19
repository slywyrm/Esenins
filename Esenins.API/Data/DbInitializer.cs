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

        private static void InitializePortfolioItem(AppDbContext context)
        {
            if (context.PortfolioItems.Any()) return;

            var items = new PortfolioItem[]
            {
                new PortfolioItem
                {
                    Name = "Salumeria",
                    SubName = "г. Москва, Спиридоньевский переулок, 2017",
                    Annotation = "Итальянская гастрономия и ресторан на Патриарших",
                    Description = @"Интерьер Salumeria ”итальянский” не буквально, а по духу. Ресторан расположен на двух этажах. Главным элементом на первом этаже является латунная печь для пиццы и окружающая её деревянная барная стойка. Здесь можно расположиться на высоких барных стульях с изящными латунными ножками и наблюдать, как мастера своего дела бариста и пиццайоло готовят ваш заказ.
                        Также в зале расположился первый в Москве питьевой фонтанчик с современной мощной системой фильтрации воды. Воду из него подают на каждый стол бесплатно, как в Италии.
                        В отличие от других ресторанов, в Salumeria можно поесть прямо на кухне, расположившейся на нижнем этаже. Сидя за огромным общим столом, вы ощущаете себя настоящим гостем на кухне у поваров, в самом эпицентре всех процессов.
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
                    Copyright = _ssCopyright
                }
            };
        }
    }
}