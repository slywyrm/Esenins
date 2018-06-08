using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Esenins.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Esenins.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacebookController : ControllerBase
    {
        private readonly IFacebookConnector _facebook;

        public FacebookController(IFacebookConnector facebook)
        {
            _facebook = facebook;
        }
        
        [HttpGet("posts")]
        public async Task<Stream> GetPosts()
        {
            var posts = await _facebook.GetPosts();
            return await posts.ReadAsStreamAsync();
        }
    }
}