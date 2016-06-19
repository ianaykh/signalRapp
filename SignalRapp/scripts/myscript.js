$(function () {

   
    while (true) {
        var name = prompt("what's your name?");
        if (name != "" && name!=null) {
           
            $("#username").text(name);
            $("#message").focus();
            var chat = $.connection.myhub;
            chat.client.broadcastMessage = function (name, message) {

                console.log(message);
                $("#heading").append('<tr><td>' + name + " says " + message + '</td></tr>')
            };

            $.connection.hub.start().done(function () {
                $("#sendbutton").click(function () {
                    if ($("#message").val() == '') {
                        alert("enter a message");
                    }
                    else {
                        chat.server.send(name, $("#message").val());
                        console.log($("#message").val());
                        $("#message").val("").focus();
                    }
                    

                });
            });
            break;
        }
        
        
    }
     
    
});