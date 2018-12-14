var triangleTracker=180;

var angle1=parseInt(prompt("enter degree of angle1"));
var angle2=parseInt(prompt("enter degree of angle2"));
var angle3=parseInt(prompt("enter degree of angle3"));

if (angle1 === angle2 && angle2=== angle3 && angle1===angle3){
    console.log(alert("the triangle is Equirateral"));
    }  else if (angle1===angle2 && angle1<angle3 || angle2<angle3){
        console.log(alert("the triangle is Isosceles"));
    } 
        
        
        