using System;
using System.Collections.Generic;
using System.Text;
using  FluentValidation;

namespace TAL.Model.Premium
{

    public class MemberValidator : AbstractValidator<MemberModel> 
    {
        public MemberValidator()
        {
            RuleFor(x => x.OccupationId).NotEmpty();
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.DateOfBirth).NotEmpty();
            RuleFor(x => x.OccupationId).NotEmpty();
            RuleFor(x => x.DeathSumInsured).NotEmpty();
        }
    }
}
