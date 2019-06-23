using System;
using System.Reflection.Metadata.Ecma335;
using FluentValidation;

namespace TAL.Model.Premium
{
    public class MemberValidator : AbstractValidator<MemberModel>
    {
        const int MaxAge=150;
        public MemberValidator()
        {
            RuleFor(x => x.OccupationId).NotEmpty().Must( c=>c > 0);
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.DateOfBirth).NotEmpty().Must(BeValidDateOfBirth);
            RuleFor(x => x.Age).NotEmpty().Must(age => age < MaxAge);
            RuleFor(x => x.DeathSumInsured).NotEmpty().Must(sum=> sum > 0);
        }
        private bool BeValidDateOfBirth(DateTime dateTime)
        {
            return dateTime < DateTime.Now && dateTime  > DateTime.Now.AddYears(-MaxAge);
        }
    }
}