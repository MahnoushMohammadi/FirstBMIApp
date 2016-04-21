function display()
{   
    var angle = document.getElementById("angle").value;
    var velocity = document.getElementById("velocity");
    
    document.getElementById("tableAngle").innerHTML = 
        angle;
    
    document.getElementById("tableVelocity").innerHTML = 
        velocity.value;
}
