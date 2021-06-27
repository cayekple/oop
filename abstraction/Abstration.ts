interface AnimalInterface {
  breed()
  scientificName()
  sound()
}

abstract class Animal {
  move(){
    console.log("Move")
  }

  abstract sound()
}

class Bird extends Animal{
  sound(){
    console.log("Sing")
  }
}

class Amphibian implements AnimalInterface{
  breed() {
    throw new Error("Method not implemented.");
  }
  scientificName() {
    throw new Error("Method not implemented.");
  }
  sound(){
    console.log("Sing")
  }
}


class Main{
  b = new Bird;
}