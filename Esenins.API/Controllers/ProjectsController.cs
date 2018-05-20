using System;
using System.Linq;
using System.Threading.Tasks;
using Esenins.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Esenins.API.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }
        
        [HttpGet("portfolio")]
        public async Task<IActionResult> GetPortfolio()
        {
            var result = await _context.Portfolio.Include(i => i.Photos).OrderBy(i => i.Order).ToListAsync();
            return Json(result);
        }

        [HttpGet("portfolio/{id:guid}")]
        public async Task<IActionResult> GetPortfolioItem(Guid id)
        {
            var result = await _context.Portfolio.Include(i => i.Photos).SingleAsync(i => i.Id == id);
            return Json(result);
        }

        [HttpGet("")]
        public async Task<IActionResult> GetProjects()
        {
            var result = await _context.ProjectsBySection.Include(i => i.Projects).ThenInclude(p => p.Copyright)
                .ToDictionaryAsync(i => i.Id, i => i);
            return Json(result);
        }
    }
}