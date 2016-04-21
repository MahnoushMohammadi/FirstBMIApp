function createTable()
{
    document.write("<table border=1>");
    for (var i=2; i<=10; i++)
    {
        document.write("<tr>");
        document.write("<td>" + i + "</td>" +
                       "<td>" + i*i + "</td><td>" + i*i*i + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
} 

