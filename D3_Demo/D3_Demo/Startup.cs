using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(D3_Demo.Startup))]
namespace D3_Demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
