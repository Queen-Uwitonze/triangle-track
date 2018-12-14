
function triangleAngle(){
    var angle1=parseInt(document.getElementById('angle1').value);
    var angle2=parseInt(document.getElementById('angle2').value);
    var angle3=parseInt(document.getElementById('angle3').value);

    if (angle1 === angle2 && angle2=== angle3 && angle1===angle3){
        console.log(alert(<a href="id=one"></a>));
        }  else if (angle1===angle2 && angle1<angle3 || angle2<angle3){
            console.log(alert("the triangle is Isosceles"));
        } else if (angle1!==angle2 && angle2!==angle3 && angle3!==angle1){
            console.log(alert("the triangle is Scalene"));
        } else {
    console.log(alert("the triangle does not existed"));}
        }