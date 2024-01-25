using GuruSki.API.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace GuruSki.API.DataProvider
{
    public class GuruSkiDBContext: DbContext
    {
        public GuruSkiDBContext(DbContextOptions dbContextOptions): base(dbContextOptions) 
        {
            
        }

        // Creates Tables Listed below in DB after you run migrations
        public DbSet<User> Users { get; set; }
    }
}
