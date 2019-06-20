using System.Threading.Tasks;
using TAL.Model.Premium;

namespace TAL.Application.Premium
{
    public interface IPremiumApplication
    {
        Task<MemberModel> CalculatePremium(MemberModel memberModel);
    }
}