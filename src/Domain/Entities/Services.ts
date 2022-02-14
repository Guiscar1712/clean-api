class Services {
  id: number;
  name: string;
  description: string;
  update_at: Date;
  created_at: Date;
  constructor(id = null, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.update_at = new Date();
    this.created_at = new Date();
  }
}

export default Services