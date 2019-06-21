using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using TAL.Database.Repository;
using TAL.Model.Premium;
using TAL.Premium.Domain.PremiumManagement;

namespace TAL.Application.PremiumApplication
{
    public class PremiumApplication :IPremiumApplication
    {
        private readonly IOccupationRepository _occupationRepository;
        private readonly IPremiumService _premiumService;
        private readonly IValidator<MemberModel> _validator;

        public PremiumApplication(IOccupationRepository occupationRepository, IPremiumService premiumService, IValidator<MemberModel> memberValidator)
        {
            _occupationRepository = occupationRepository;
            _premiumService = premiumService;
            _validator = memberValidator;
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
                throw new Exception("Application Exception");
            memberModel.RatingFactor = rating.Factor;

        }
    }
}
