using System.Linq;
using System.Threading.Tasks;
using Esenins.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Esenins.API.Controllers
{
    [Route("api/[controller]/slides")]
    public class MainPageController : Controller
    {
        private readonly AppDbContext _context;

        public MainPageController(AppDbContext context)
        {
            _context = context;
        }
        
        [HttpGet("")]
        public async Task<IActionResult> GetSlides()
        {
            var result = await _context.MainPageSlides.Include(i => i.Copyright).ToListAsync();
            return Json(result);
        }
    }
}