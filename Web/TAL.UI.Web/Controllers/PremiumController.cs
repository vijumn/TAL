using System.Net;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using TAL.Application.PremiumApplication.Service;
using TAL.Model.Premium;

namespace TAL.UI.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class PremiumController : ControllerBase
    { 
        private readonly IPremiumApplication _premiumService;
        private readonly IValidator<MemberModel> _validator;
        public PremiumController(IPremiumApplication premiumService, IValidator<MemberModel> memberValidator)
        {
            _premiumService = premiumService;
            _validator = memberValidator;
        }

        [Route("Calculate")]
        [HttpPost]
        [ProducesResponseType(typeof(MemberModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> CalculatePremium([FromBody] MemberModel member )
        {
            var results = _validator.Validate(member);
            if (!results.IsValid)
                return (IActionResult)BadRequest();
            var result = await _premiumService.CalculatePremium(member);
            return Ok(result);
        }

    }
}