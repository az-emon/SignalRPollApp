using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRPollApp.Hubs
{
    public class PollHub: Hub
    {
        public async Task SendMessage( string message, string myCaptainId, string myCaptainVal)
        {
            await Clients.All.SendAsync("ReceiveMessage", Context.User.Identity.Name ?? "anonymous", message, myCaptainId, myCaptainVal);
        }
    }
}
