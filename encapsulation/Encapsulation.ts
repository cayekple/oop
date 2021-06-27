class User {
  private _firstName: string
  private _lastName: string
  private _age: number
  
  public set setFirstName(v : string) {
    this._firstName = v;
  }

  public get getFirstName() : string {
    return this._firstName
  }
  
}


class MainEncapsulation{
  user = new User()
  user.setFirstName("Matilda")
  user.getFirstName()
}