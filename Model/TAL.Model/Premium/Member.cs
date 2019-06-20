using System;
using System.Threading;
using TAL.Model.Premium;

namespace TAL.Model.Premium
{
    public class Member
    {
        public string Name { get; set; }
        public int Age {
            get
            {
                var today = DateTime.Today;
                var age = today.Year - DateOfBirth.Year;
                if (DateOfBirth.Date > today.AddYears(-age))
                    age--;

                return age;
            }
            
        }
        public DateTime DateOfBirth { get; set; }
        public Occupation Occupation { get; set; }
        public int DeathSumInsured { get; set; }
        public  decimal Premium { get; set; }

        public Member()
        {
            
        }
        public Member(MemberModel member)
        {
            Name = member.Name;
            DateOfBirth = member.DateOfBirth;
            Occupation = new Occupation() { OccupationId = member.OccupationId, Rating = new Rating(){ Factor = member.RatingFactor}}; 
            DeathSumInsured = member.DeathSumInsured;
            Premium = member.Premium;
        }
    }


    public class MemberModel
    {
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int OccupationId { get; set; }
        public decimal RatingFactor { get; set; }
        public int DeathSumInsured { get; set; }
        public decimal Premium { get; set; }

    }
}
