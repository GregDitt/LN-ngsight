using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Adventage.API.Model
{
  public class Order
  {

    public int Id { get; set; }
    public Customer Customer { get; set; }
    public decimal OrderTotal  { get; set; }
    public DateTime Placed { get; set; }
    public DateTime? Completed { get; set; }

  }
}
