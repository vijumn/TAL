using System.Threading.Tasks;

namespace TAL.Database.Database
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync();
    }
}