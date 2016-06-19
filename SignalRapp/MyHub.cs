using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.Hosting;
using System.Web.UI.WebControls;

namespace SignalRapp
{   [HubName("myhub")]
    public class MyHub : Hub
    {
        public void Send(string name,string message)
        {
            Clients.All.broadcastMessage(name,message);
        }
    }

    public class FileUpload: WebControl
    {
        protected void Page_upload(object sender,EventArgs e)
        {

        }
    }
}