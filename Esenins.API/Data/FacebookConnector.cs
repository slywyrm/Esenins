using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Threading.Tasks;

namespace Esenins.API.Data
{
    class FacebookCredentials
    {
        [DataMember(Name="access_token")]
        public string AccessToken;
    }
    
    public class FacebookConnector : IFacebookConnector
    {
        private HttpClient _http = new HttpClient();
        private string _token;

        public FacebookConnector()
        {
            _http.BaseAddress = new Uri("https://graph.facebook.com/");
            _http.DefaultRequestHeaders.Accept.Clear();
            _http.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            GetToken().GetAwaiter().GetResult();
        }

        private async Task GetToken()
        {
            var serializer = new DataContractJsonSerializer(typeof(FacebookCredentials));
            var streamTask =
                _http.GetStreamAsync(
                    "oauth/access_token?client_id=329829260786620&client_secret=eb427eee8e9d9ce020a488546bacabf1&grant_type=client_credential");
            _token = (serializer.ReadObject(await streamTask) as FacebookCredentials).AccessToken;
            Console.WriteLine($"token: {_token}");
        }

        public async Task<HttpContent> GetPosts()
        {
            var response = await _http.GetAsync($"2022032894724732/feed?fields=permalink_url,message,shares,full_picture,link,updated_time&access_token={_token}&limit=15");
            return response.Content;
        }

    }
}