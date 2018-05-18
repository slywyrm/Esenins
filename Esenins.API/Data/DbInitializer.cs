using System.Linq;
using Esenins.API.Models;

namespace Esenins.API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            InitializeCopyrights(context);
            InitializeMainPageSlides(context);
        }

        private static void InitializeCopyrights(AppDbContext context)
        {
            if (context.Copyrights.Any()) return;

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

        private static void InitializeMainPageSlides(AppDbContext context)
        {
            if (context.MainPageSlides.Any()) return;

            var ssCopyright = context.Copyrights.Single(cr => cr.Name == "Sundukovy Sisters");
            var dkCopyright = context.Copyrights.Single(cr => cr.Name == "DKstudio");

            var slides = new MainPageSlide[]
            {
                new MainPageSlide
                {
                    Text = "Наполним пространство неповторимой, самобытной атмосферой, которая в полной мере расскажет идею вашего заведения",
                    Image = "/assets/main-page-slides/1.jpg",
                    Copyright = ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Создадим проект и пройдем с вами от идеи до ее реализации",
                    Image = "/assets/main-page-slides/2.jpg",
                    Copyright = dkCopyright
                },
                new MainPageSlide
                {
                    Text = "Работаем как с формой, так и содержанием. Разработаем запоминающиеся паттерны для вашего интерьера, которые сделают ваш интерьер узнаваемым",
                    Image = "/assets/main-page-slides/3.jpg",
                    Copyright = ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Наполним уютом ваш дом. Подобрав уникальные сочетания текстиля и декора для каждого уголка",
                    Image = "/assets/main-page-slides/5.jpg",
                    Copyright = dkCopyright
                },
                new MainPageSlide
                {
                    Text = "Умело обращаемся со всеми интерьерными стилями. Любим их смешивать и выдерживать, организуя неповторимые эмоции и ощущения от пространства",
                    Image = "/assets/main-page-slides/6.jpg",
                    Copyright = ssCopyright
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
                    Copyright = ssCopyright
                },
                new MainPageSlide
                {
                    Text = "Наша команда имеет большой опыт работы с проектами разного масштаба. Так, что «оденем слона» и «подкуем блоху» с одинаковым уровнем качества",
                    Image = "/assets/main-page-slides/9.jpg",
                    Copyright = dkCopyright
                },
            };

            foreach (var slide in slides)
            {
                context.MainPageSlides.Add(slide);
            }

            context.SaveChanges();
        }
    }
}