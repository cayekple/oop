interface Vehicle{
  move()
  sound()
}

class Car implements Vehicle {
  move(){
    console.log('move')
  }
  sound(){
    console.log('sound')
  }
}


let c = new Car()
c.move()