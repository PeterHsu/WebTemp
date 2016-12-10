using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class HeroController : Controller
    {
        private readonly ApplicationDbContext _context;
        public HeroController(ApplicationDbContext context){
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<Hero>> Get()
        {
            if(_context.Hero.Count() == 0)
            {
                _context.Hero.Add(new Hero(){id=1,name="a"});
                _context.Hero.Add(new Hero(){id=2,name="b"});
                _context.Hero.Add(new Hero(){id=3,name="c"});
                _context.Hero.Add(new Hero(){id=4,name="d"});
                _context.Hero.Add(new Hero(){id=5,name="e"});
                _context.SaveChanges();
            }

            return await _context.Hero.ToListAsync();
        }
                // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hero = await _context.Hero.SingleOrDefaultAsync(m => m.id == id);
            if (hero == null)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
