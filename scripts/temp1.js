function setup()
{
    document.getElementById("faren").onclick = setC;
    document.getElementById("celcius").onclick = setF;
}

function setC()
{
    document.getElementById("degree").innerHTML = 
        "&deg; C";
}

function setF()
{
    document.getElementById("degree").innerHTML = 
        "&deg; F";
}

function convert()
{
    var inputTemp = document.getElementById
            ("temp").value;
    var outputTemp;
            
    var farenButton = document.getElementById("faren");
    
    if ( farenButton.checked )
    {
        // Celcius to F.
        outputTemp = (5/9) * (inputTemp - 32);
    }
    else
    {
        // F to Celcius
        outputTemp = (9/5) * inputTemp + 32;
    }
    
    document.getElementById("conversion1").innerHTML = outputTemp;
}
