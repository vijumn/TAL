using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using TAL.Model.Premium;

namespace TAL.Database.Database
{
    public static class Talseed
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.SeedRating();
            modelBuilder.SeedOccupation();
        }

        private static void SeedRating(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Rating>(x =>
            {
                x.HasData(new Rating()
                {
                    RatingId = 1,
                    Name = "Professional",
                    Factor = 1.0m
                });
                x.HasData(new Rating()
                {
                    RatingId = 2,
                    Name = "White Collar",
                    Factor = 1.25m
                });
                x.HasData(new Rating()
                {
                    RatingId = 3,
                    Name = "Light Manual",
                    Factor = 1.50m
                });
                x.HasData(new Rating()
                {
                    RatingId = 4,
                    Name = "Heavy Manual",
                    Factor = 1.75m
                });

            });
        }

        private static void SeedOccupation(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Occupation>(x =>
            {
                x.HasData(new Occupation()
                {
                    OccupationId = 1,
                    Name = "Cleaner",
                    RatingId = 3
                });
                x.HasData(new Occupation()
                {
                    OccupationId = 2,
                    Name = "Doctor",
                    RatingId = 1
                });
                x.HasData(new Occupation()
                {
                    OccupationId = 3,
                    Name = "Author",
                    RatingId = 2
                });
                x.HasData(new Occupation()
                {
                    OccupationId = 4,
                    Name = "Farmer",
                    RatingId = 4
                });
                x.HasData(new Occupation()
                {
                    OccupationId = 5,
                    Name = "Mechanic",
                    RatingId = 4
                });

                x.HasData(new Occupation()
                {
                    OccupationId = 6,
                    Name = "Florist",
                    RatingId = 3
                });


            });
        }
    }
}
