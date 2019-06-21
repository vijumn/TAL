using System;

namespace TAL.Model.Premium
{
    public class MemberModel
    {
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public int OccupationId { get; set; }
        public decimal RatingFactor { get; set; }
        public int DeathSumInsured { get; set; }
        public decimal Premium { get; set; }
    }
}