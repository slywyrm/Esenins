using System;

namespace Esenins.API.Models
{
    public class Project
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string PortfolioId { get; set; }
        public Copyright Copyright { get; set; }
    }
}