using Esenins.API.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Esenins.API.Data
{
    public class TestContext
    {
        private readonly IMongoDatabase _db = null;

        public TestContext(IOptions<DBSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null) _db = client.GetDatabase(settings.Value.Database);
        }

        public IMongoCollection<Test> Tests
        {
            get { return _db.GetCollection<Test>("test"); }
        }
    }
}