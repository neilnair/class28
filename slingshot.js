class Slingshot{
  constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.8,
        length: 10
    }
    this.pointB = pointB
  this.sling = Constraint.create(options)
  World.add(world,this.sling)

  } 
 display(){
var pointA = this.sling.bodyA.position
var pointB = this.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)
 } 
}