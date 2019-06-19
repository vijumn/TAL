using TAL.Model.Premium;

namespace TAL.Premium.Domain.PremiumManagement
{
    public interface IPremiumCalculationStrategy
    {
        decimal CalculatePremium(Member member);
        bool IsSatisfied(Member member);
    }
}
