using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Esenins.API.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Esenins.API.Data
{
    public class TestRepository: ITestRepository
    {
        private readonly TestContext _context;

        public TestRepository(IOptions<DBSettings> settings)
        {
            _context = new TestContext(settings);
        }

        public async Task<IEnumerable<Test>> GetAllTests()
        {
            try
            {
                return await _context.Tests.Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Test> GetTest(Guid id)
        {
            try
            {
                return await _context.Tests.Find(test => test.Id == id).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}