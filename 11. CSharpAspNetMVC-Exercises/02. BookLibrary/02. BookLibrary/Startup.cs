using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BoolLibrary.Startup))]
namespace BoolLibrary
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
