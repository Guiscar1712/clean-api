import Entity from "./Entity";


class Members extends Entity {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    super()
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default Members