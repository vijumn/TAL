using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TAL.Database.Database;
using TAL.Database.Repository;

namespace TAL.UI.Web
{
    public static class StartupExtensions
    {
        public static void AddContext(this IServiceCollection services)
        {
           
            services.AddDbContext<Context>(options =>
                options.UseSqlite("Data Source=TAL.db"));

        }

        public static void AddDatabaseServices(this IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IOccupationRepository, OccupationRepository>();
            
        }
    }
}
