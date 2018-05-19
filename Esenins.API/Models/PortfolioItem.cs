using System;
using System.Collections.Generic;

namespace Esenins.API.Models
{
    public class PortfolioItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string SubName { get; set; }
        public string Annotation { get; set; }
        public string Description { get; set; }
        public string PlaceholderPhoto { get; set; }
        public string TileSize { get; set; }
        public IList<Image> Photos { get; set; }
        public Copyright Copyright { get; set; }
    }
}