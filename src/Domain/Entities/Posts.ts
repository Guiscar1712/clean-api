class Posts {
  id: number;
  title: string;
  description: string;
  update_at: string;
  created_at: string;
  constructor(id = null, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export default Posts