using System;

namespace Esenins.API.Models
{
    public class MainPageSlide
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public string Image { get; set; }
        public Copyright Copyright { get; set; }
    }
}