function createTableRight()
{
    var dataTable = document.getElementById('data');
    dataTable.innerHTML='';

    // Header row

    var row=dataTable.insertRow(0);
    var num=row.insertCell(0);
    var square=row.insertCell(1);
    var cube=row.insertCell(2);
    num.innerHTML = "<strong>Number</strong>";
    square.innerHTML = "<strong>Square</strong>";
    cube.innerHTML = "<strong>Cube</strong>";

    for (var i=2; i<=10; i++)
    {
      row = dataTable.insertRow(-1);
      num=row.insertCell(0);
      square=row.insertCell(1);
      cube=row.insertCell(2);
      num.innerHTML = i;
      square.innerHTML = i*i;
      cube.innerHTML = i*i*i;
    }
} 

