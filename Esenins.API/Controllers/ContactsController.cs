using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Esenins.API.Data;
using Esenins.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Esenins.API.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly SmtpClient _smtpClient = new SmtpClient("smtp.yandex.ru");
        private readonly ITestRepository _testRepository;

        public ContactsController(ITestRepository testRepository)
        {
            _smtpClient.UseDefaultCredentials = false;
            _smtpClient.Credentials = new NetworkCredential("slywyrm", "baDfe_7700747");
            _smtpClient.EnableSsl = true;
            _smtpClient.Port = 587;
            _testRepository = testRepository;
        }

        [HttpPost("")]
        public async Task<ActionResult> Post([FromBody] Contacts model)
        {
            if (model.From == null || model.Body == null)
            {
                return BadRequest("Contacts message should contain both \"From\" and \"Body\" fields");
            }
            var body = $"От: {model.From}\nТекст сообщения:\n{model.Body}";
            var message = new MailMessage
            {
                From = new MailAddress("slywyrm@yandex.ru"),
                Body = body,
                Subject = "esenins.com - новое сообщение"
            };            
            message.To.Add("slywyrm@gmail.com");
//            message.To.Add("esenin_mm@me.com");
//            message.To.Add("esenina.kv@gmail.com");

            await _smtpClient.SendMailAsync(message);
            return Ok();
        }

        [HttpGet("")]
        private async Task<ActionResult> Tests()
        {
            return Json(await _testRepository.GetAllTests());
        }
    }
}