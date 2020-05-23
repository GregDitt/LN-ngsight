using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Adventage.API.Model
{
  public class ApiContext : DbContext
  {

    public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

    public DbSet<Customer> Customer { get; set; }
    public DbSet<Order> Orders{ get; set; }
    public DbSet<Server> Servers{ get; set; }

  }
}
