import Entity from "./Entity";

class Services extends Entity {
  name: string;
  description: string;
  update_at: Date;
  created_at: Date;
  constructor(name: string, description: string) {
    super()
    this.name = name;
    this.description = description;
    this.update_at = new Date();
    this.created_at = new Date();
  }
}

export default Services