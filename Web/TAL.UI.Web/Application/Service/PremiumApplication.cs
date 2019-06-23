using System;
using System.Threading.Tasks;
using TAL.Database.Repository;
using TAL.Model.Premium;
using TAL.Premium.Domain.PremiumManagement;

namespace TAL.Application.PremiumApplication.Service
{
    public class PremiumApplication : IPremiumApplication
    {
        private readonly IOccupationRepository _occupationRepository;
        private readonly IPremiumService _premiumService;

        public PremiumApplication(IOccupationRepository occupationRepository, IPremiumService premiumService)
        {
            _occupationRepository = occupationRepository;
            _premiumService = premiumService;
        }

        public async Task<MemberModel> CalculatePremium(MemberModel memberModel)
        {
            await EnrichDetails(memberModel);
            memberModel.Premium = _premiumService.CalculatePremium(memberModel).Premium;
            return memberModel;
        }

        private async Task EnrichDetails(MemberModel memberModel)
        {
            var rating = await _occupationRepository.GetRating(memberModel.OccupationId);
            if (rating is null)
                throw new Exception("Rating is required");
            memberModel.RatingFactor = rating.Factor;
        }
    }
}