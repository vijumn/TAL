using TAL.Model.Premium;

namespace TAL.Premium.Domain.PremiumManagement
{
    public interface IPremiumCalculationStrategy
    {
        decimal CalculatePremium(MemberModel member);

        bool IsSatisfied(MemberModel member);
    }
}