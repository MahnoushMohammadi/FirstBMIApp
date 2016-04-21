function storeLang()
{
    var myname = document.getElementById("name").value;
    var lang = document.getElementById("lang").value;
    var larr = lang.split(" ");
    
    var langComp = {
    "name" : myname,
    "languages": larr
    };
    var tblUser = JSON.parse(localStorage.getItem("tblUser"));
    if(tblUser == null)
    {
        tblUser = [];
    }
    var existing=search(langComp.name,tblUser);
    if(existing == null)
    {
            
        tblUser.push(langComp);
        localStorage.setItem("tblUser",JSON.stringify(tblUser));
        alert("Storing object " + JSON.stringify(tblUser));
        
    }
    else
    {
        alert("The user already exists: "+ existing);
    }
}

function search(name,array)
{
    for(var i = 0; i < array.length; i++)
    {
        if(name==array[i].name)
        {
            return array[i];
        }
    }
    return null;
}
