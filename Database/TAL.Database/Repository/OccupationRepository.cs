using System.Buffers.Text;
using System.Collections;
using System.Collections.Generic;
using DotNetCore.EntityFrameworkCore;
using System.Threading.Tasks;
using Remotion.Linq.Clauses;
using TAL.Database.Database;
using TAL.Model.Premium;

namespace TAL.Database.Repository
{
    public sealed class OccupationRepository : EntityFrameworkCoreRelationalRepository<Occupation>, IOccupationRepository
    {
        public OccupationRepository(Context context) : base(context)
        {
        }

        public Task<IEnumerable<Occupation>> ListAllAsync()
        {
            return ListAsync<Occupation>();
        }

        public Task<Rating> GetRating(int occupationId)
        {
            return FirstOrDefaultWhereSelectAsync(
                oc => oc.OccupationId == occupationId, rating => rating.Rating
            );
            
        }
    }
}
