using System;
using System.Collections.Generic;

namespace Esenins.API.Models
{
    public class ProjectsSection
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public IList<Project> Projects { get; set; }
    }
}