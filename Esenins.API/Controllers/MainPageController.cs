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
    public class MainPageController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MainPageController(AppDbContext context)
        {
            _context = context;
        }
        
        [HttpGet("slides")]
        public async Task<ActionResult<List<MainPageSlide>>> GetSlides()
        {
            var result = await _context.MainPageSlides.Include(i => i.Copyright).ToListAsync();
            return result;
        }
    }
}