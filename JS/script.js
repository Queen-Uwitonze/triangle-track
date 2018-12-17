
function triangleAngle() {
  var angle1 = parseInt(document.getElementById("angle1").value);
  var angle2 = parseInt(document.getElementById("angle2").value);
  var angle3 = parseInt(document.getElementById("angle3").value);

  var angles=["angle1","angle2","angle3"]
  angles.forEach(function(angle){
   console.log("angle's number is " + angle)
  });
  angles[0];
  angles[1];
  angles[2];
  
  if (angle1+angle2>angle3 && angle1+angle3>angle2 && angle2+angle3>angle1){
    if (angle1 === angle2 && angle2 === angle3 && angle1 === angle3) {
      console.log(alert("the triangle is Equirateral"));
    } else if (angle1===angle2 || angle2 === angle3 || angle1 === angle3) {
      console.log(alert("the triangle is Isosceles"));
    } else if(angle1 !== angle2 && angle2 !== angle3 && angle1 !== angle3)  {
      console.log(alert("the triangle is Scalene"));
    } 
    } else {
    console.log(alert("the triangle does not existed"));
  }
}
