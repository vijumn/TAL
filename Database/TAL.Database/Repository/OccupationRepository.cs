﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TAL.Database.Database;
using TAL.Model.Premium;

namespace TAL.Database.Repository
{
    public sealed class OccupationRepository :IOccupationRepository
    {
        private readonly Context _context;
        public OccupationRepository(Context context)
        {
            _context = context;
        }

        public async Task<IEnumerable<OccupationModel>> ListAllAsync()
        {
            return await _context.Occupations.Select(occ => new OccupationModel()
            {
                OccupationId = occ.OccupationId,
                Name = occ.Name
            }).OrderBy(order => order.Name).ToListAsync();
        }


        public async Task<Rating> GetRating(int occupationId)
        {
            var occupation = await _context.Occupations
                .Include(r=>r.Rating)
                .Where(oc=>oc.OccupationId==occupationId)
                .FirstOrDefaultAsync();
          
            return occupation?.Rating;
            
        }
    }
}
