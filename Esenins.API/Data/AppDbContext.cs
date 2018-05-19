using System.Linq;
using Esenins.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Esenins.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<MainPageSlide> MainPageSlides { get; set; }
        public DbSet<Copyright> Copyrights { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<PortfolioItem> PortfolioItems { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var mapper = new Npgsql.NpgsqlSnakeCaseNameTranslator();
            var types = modelBuilder.Model.GetEntityTypes().ToList();

            // Refer to tables in snake_case internally
            types.ForEach(e => e.Relational().TableName = mapper.TranslateMemberName(e.Relational().TableName));

            // Refer to columns in snake_case internally
            types.SelectMany(e => e.GetProperties())
                .ToList()
                .ForEach(p => p.Relational().ColumnName = mapper.TranslateMemberName(p.Relational().ColumnName));
        }
    }
}