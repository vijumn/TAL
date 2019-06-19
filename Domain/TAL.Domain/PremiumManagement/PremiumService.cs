using System;
using System.Collections.Generic;
using System.Text;
using TAL.Model.Premium;

namespace TAL.Premium.Domain.PremiumManagement
{

    public class PremiumService : IPremiumService
    {
        public Member CalculatePremium(Member member)
        {
            var strategies = new List<IPremiumCalculationStrategy>
            {
                new PremiumCalculationLogic(),
            };

            foreach (var strategy in strategies)
            {
                if (!strategy.IsSatisfied(member)) continue;
                member.Premium= strategy.CalculatePremium(member);
                break;
            }
            return member;

        }
    }
}
