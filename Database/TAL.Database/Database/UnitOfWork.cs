using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TAL.Database.Database
{
   public class UnitOfWork : IUnitOfWork
   {
        public UnitOfWork(Context context)
        {
            Context = context;
        }

        private Context Context { get; }

        public Task<int> SaveChangesAsync()
        {
            return Context.SaveChangesAsync();
        }
    }
}
