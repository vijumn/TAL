using System;
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
        
    }
}
