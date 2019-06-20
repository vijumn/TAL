using TAL.Model.Premium;

namespace TAL.Premium.Domain.PremiumManagement
{
    public interface IPremiumService
    {
        MemberModel CalculatePremium(MemberModel member);
    }
}