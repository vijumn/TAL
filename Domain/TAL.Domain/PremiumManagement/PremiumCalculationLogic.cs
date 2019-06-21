using TAL.Model.Premium;

namespace TAL.Premium.Domain.PremiumManagement
{
    public class PremiumCalculationLogic : IPremiumCalculationStrategy
    {
        public decimal CalculatePremium(MemberModel member)
        {
            return ((member.DeathSumInsured * member.RatingFactor * member.Age) / 1000 * 12);
        }

        public bool IsSatisfied(MemberModel member)
        {
            return true;// No other calculation logic is present
        }
    }
}