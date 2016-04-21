function setup()
{
    document.getElementById("faren").onclick = 
        function(){
            setUnits("C");
        };
    document.getElementById("celcius").onclick = 
        function(){
            setUnits("F");
        };
}

function setUnits(theString)
{
    document.getElementById("degree").innerHTML = 
        "&deg; " + theString; 
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
