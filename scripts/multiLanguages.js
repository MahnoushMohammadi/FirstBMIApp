var SERVER_URL = "http://dev.cs.smu.ca:4558";
function storeLang()
{
    console.log("In storeLang");
    var myname = document.getElementById("name").value;
    var lang = document.getElementById("lang").value;
    var larr = lang.split(" ");
    
    var langComp = {
    "name" : myname,
    "languages": larr
    };
    console.log(langComp);
    
    $.post(SERVER_URL + '/store', langComp, function(data) {
        alert("New User Created Successfully!");
      }).fail(function(error) {
        alert(error.responseText);
    });
}
