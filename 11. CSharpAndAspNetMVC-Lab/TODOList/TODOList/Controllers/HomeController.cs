using System.Web.Mvc;
using System.Linq;
using TODOList.Models;

namespace TODOList.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var db = new TaskDbContext())
            {
                var task = db.Tasks.ToList();
                return View(task);
            }

        }
    }
}