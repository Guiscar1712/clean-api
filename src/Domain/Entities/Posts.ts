import Entity from "./Entity";

class Posts extends Entity {
  title: string;
  description: string;
  update_at: string;
  created_at: string;
  constructor(title: string, description: string) {
    super()
    this.title = title;
    this.description = description;
  }
}

export default Posts