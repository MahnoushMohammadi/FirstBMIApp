var SERVER_URL = "http://dev.cs.smu.ca:7008";
function showLang()
{
    $.post(SERVER_URL + '/retrieve', function(records) {
        if(records != null)
        {
            for(var i = 0; i < records.length; i++)
            {
                eachPerson(records[i]);
            }
        }
    }).fail(function(error) {
    alert(error.responseText);
  });
}
function eachPerson(langObj)
{
    var tab = document.getElementById("format");
    var myname = langObj.name;
    var languages = langObj.languages;
    var row = tab.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = myname;
    cell = row.insertCell(-1);
    cell.innerHTML = " knows " + languages.length +
                      " languages. The list of languages is as follows.";

    for(var i = 0; i < languages.length; i++)
    {
        row = tab.insertRow(-1);
        cell = row.insertCell(-1);
        cell.innerHTML = (i+1);
        cell = row.insertCell(-1);
        cell.innerHTML = languages[i];
    }

}
