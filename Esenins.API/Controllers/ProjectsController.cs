using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Esenins.API.Data;
using Esenins.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Esenins.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }
        
        [HttpGet("portfolio")]
        public async Task<ActionResult<List<PortfolioItem>>> GetPortfolio()
        {
            var result = await _context.Portfolio.Include(i => i.Photos).OrderBy(i => i.Order).ToListAsync();
            return result;
        }

        [HttpGet("portfolio/{id:guid}")]
        public async Task<ActionResult<PortfolioItem>> GetPortfolioItem(Guid id)
        {
            var result = await _context.Portfolio.Include(i => i.Photos).SingleAsync(i => i.Id == id);
            return result;
        }

        [HttpGet("")]
        public async Task<ActionResult<Dictionary<string, ProjectsSection>>> GetProjects()
        {
            var result = await _context.ProjectsBySection.Include(i => i.Projects).ThenInclude(p => p.Copyright)
                .ToDictionaryAsync(i => i.Id, i => i);
            return result;
        }
    }
}