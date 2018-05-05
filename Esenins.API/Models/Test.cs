using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Esenins.API.Models
{
    public class Test
    {
        [BsonId]
        public ObjectId InternalId { get; set; }
        
        public Guid Id { get; set; }
        public string Value { get; set; }
    }
}