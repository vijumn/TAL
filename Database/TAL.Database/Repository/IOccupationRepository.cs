using System.Collections.Generic;
using System.Threading.Tasks;
using TAL.Model.Premium;

namespace TAL.Database.Repository
{
    public interface IOccupationRepository
    {
        Task<List<OccupationModel>> ListAllAsync();
        Task<Rating> GetRating(int occupationId);
    }
}