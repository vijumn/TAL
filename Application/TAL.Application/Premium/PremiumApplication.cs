using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using TAL.Premium.Domain.PremiumManagement;

namespace TAL.Application.Premium
{
    public class PremiumApplication
    {
        private readonly IPremiumService _premiumService;
        public PremiumApplication(IPremiumService premiumService)
        {
            _premiumService = premiumService;
        }

    }
}
