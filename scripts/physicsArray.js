function update()
{
    var angle = document.getElementById("angle").value;
    angle = angle * Math.PI / 180;
    var velocity = document.getElementById("velocity").value;
    
    var time = velocity * Math.sin(angle) / 9.81;
    
    var timeArray = [];
    var heightArray = [];
    var distanceArray = [];
    createArrays(timeArray, heightArray, distanceArray, time);
    drawTable(timeArray, heightArray, distanceArray);
}

function createArrays(timeArray, heightArray, distanceArray, time)
{
    var deltaT = time / 5;
}

function drawTable(timeArray, heightArray, distanceArray)
{

}

function calculateHeight(velocity, angle, time)
{
    var height = velocity * Math.sin(angle) * time + 0.5 * (-9.81) * time * time;
    return height;
}

function calculateDistance(velocity, angle, time)
{
    var distance = velocity * Math.cos(angle) * (2 * time);
    return distance;
}

function initialize()
{
    var angleInput = document.getElementById("angle");
    angleInput.addEventListener("blur", validateAngle);
    
    var velocityInput = document.getElementById("velocity");
    velocityInput.addEventListener("blur", 
        function(){
            var velocity = document.getElementById("velocity");

            if (velocity.value < 1 || velocity.value > 299792458)
            {
                alert("Velocity value must be between 1 and 299792458");
                velocity.value = "";
            }
        });
}

function validateAngle()
{
    var angle = document.getElementById("angle");

    if (angle.value < 1 || angle.value > 90)
    {
        alert("Angle value must be between 1 and 90");
        angle.value = "";
    }
}
