using System.Net.Http;
using System.Threading.Tasks;

namespace Esenins.API.Data
{
    public interface IFacebookConnector
    {
        Task<HttpContent> GetPosts();
    }
}