using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using TAL.Model.Premium;

namespace TAL.Database.Database
{
    public sealed class Context : DbContext
    {
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Occupation> Occupations { get; set; }

        public Context(DbContextOptions options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=TAL.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Rating>()
                .HasKey(c => c.RatingId);
            modelBuilder.Entity<Occupation>()
                .HasKey(c => c.OccupationId);
            modelBuilder.Seed();
        }
    }
}
