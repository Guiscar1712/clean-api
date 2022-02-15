import Posts from "../../../domain/entities/posts";
import Repository from "./repository";

abstract class PostsRepository extends Repository<Posts> {
  
}

export default PostsRepository