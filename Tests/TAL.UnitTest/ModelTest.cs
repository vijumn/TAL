using System;
using System.Collections.Generic;
using System.Text;
using TAL.Model.Premium;
using Xunit;

namespace TAL.UnitTest
{
    public class ModelTest
    {
        [Fact]
        public void Create_Member_from_MemberModel()
        {
            MemberModel model = new MemberModel()
            {
                Name = "Test",
                OccupationId = 1,
                DateOfBirth = Convert.ToDateTime("01/01/1950"),
                DeathSumInsured = 20000,
                RatingFactor = 1.4m
            };
            var member = new Member(model);
            Assert.Equal(model.Name,member.Name);
            Assert.Equal(model.OccupationId, member.Occupation.OccupationId);
            Assert.Equal(model.RatingFactor, member.Occupation.Rating.Factor);
            Assert.Equal(model.DateOfBirth, member.DateOfBirth);
            Assert.Equal(model.DeathSumInsured, member.DeathSumInsured);
        }
    }
}
