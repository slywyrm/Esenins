using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Esenins.API.Models;

namespace Esenins.API.Data
{
    public interface ITestRepository
    {
        Task<IEnumerable<Test>> GetAllTests();
        Task<Test> GetTest(Guid id);
    }
}