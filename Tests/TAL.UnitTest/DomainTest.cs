using System;
using System.Collections.Generic;
using System.Text;
using TAL.Model.Premium;
using TAL.Premium.Domain.PremiumManagement;
using Xunit;

namespace TAL.UnitTest
{
    public class DomainTest
    {
        [Fact]
        public void Calculate_Premium_Test1()
        {
            decimal premium = 1260;
            var memberModel = new MemberModel()
            {
                Name = "Test",
                OccupationId = 2,
                RatingFactor = 1.5m,
                DateOfBirth = Convert.ToDateTime("2012-04-21"),
                DeathSumInsured = 10000
            };
            PremiumService domainService =new PremiumService();


            var result =domainService.CalculatePremium(memberModel);

            Assert.Equal(premium, result.Premium);
        }

        [Fact]
        public void Calculate_Premium_Test3()
        {
            decimal premium = 840;
            var memberModel = new MemberModel()
            {
                Name = "Test",
                OccupationId = 2,
                RatingFactor = 1m,
                DateOfBirth = Convert.ToDateTime("2012-04-21"),
                DeathSumInsured = 10000
            };
            PremiumService domainService = new PremiumService();


            var result = domainService.CalculatePremium(memberModel);

            Assert.Equal(premium, result.Premium);
        }

        [Fact]
        public void Calculate_Premium_Test4()
        {
            decimal premium = 1050;
            var memberModel = new MemberModel()
            {
                RatingFactor = 1.25m,
                DateOfBirth = Convert.ToDateTime("2012-04-21"),
                DeathSumInsured = 10000
            };
            PremiumService domainService = new PremiumService();


            var result = domainService.CalculatePremium(memberModel);

            Assert.Equal(premium, result.Premium);
        }



        [Fact]
        public void Calculate_Premium_Test_Ageover_4()
        {
            decimal premium = 28560;
            var memberModel = new MemberModel()
            {
                RatingFactor = 2m,
                DateOfBirth = Convert.ToDateTime("1900-04-21"),
                DeathSumInsured = 10000
            };
            PremiumService domainService = new PremiumService();


            var result = domainService.CalculatePremium(memberModel);

            Assert.Equal(premium, result.Premium);
        }

        [Fact]
        public void Calculate_Premium_Test_RealAge()
        {
            decimal premium = 468;
            var memberModel = new MemberModel()
            {
                RatingFactor = 1m,
                DateOfBirth = Convert.ToDateTime("1980-04-21"),
                DeathSumInsured = 1000
            };
            PremiumService domainService = new PremiumService();


            var result = domainService.CalculatePremium(memberModel);

            Assert.Equal(premium, result.Premium);
        }
    }
}
