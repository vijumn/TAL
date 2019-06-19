using TAL.Model.Premium;

namespace TAL.Premium.Domain.PremiumManagement
{
    public interface IPremiumService
    {
        Member CalculatePremium(Member member);
    }
}