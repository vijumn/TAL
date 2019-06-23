using Microsoft.AspNetCore.Hosting;
using FluentValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TAL.Application.PremiumApplication.Service;
using TAL.Database.Database;
using TAL.Database.Repository;
using TAL.Model.Premium;
using TAL.Premium.Domain.PremiumManagement;

namespace TAL.UI.Web
{
    public static class StartupExtensions
    {
        public static void AddContext(this IServiceCollection services)
        {
            var configuration = services.BuildServiceProvider().GetRequiredService<IConfiguration>();

            var connectionString = configuration.GetConnectionString("TalDatabase");

            services.AddDbContext<Context>(options =>
                options.UseSqlite(connectionString));

        }

        public static void AddDatabaseServices(this IServiceCollection services)
        {
            services.AddTransient<IOccupationRepository, OccupationRepository>();
            
        }
        public static void AddServices(this IServiceCollection services)
        {

            services.AddTransient<IPremiumApplication, PremiumApplication>();
            services.AddTransient<IPremiumService, PremiumService>();
        }

        public static void AddValidators(this IServiceCollection services)
        {
            services.AddTransient<IValidator<MemberModel>, MemberValidator>();

        }

        public static void UseMvc(this IApplicationBuilder app)
        {
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });
        }
        public static void UseSpa(this IApplicationBuilder application, IHostingEnvironment env)
        {
            application.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
