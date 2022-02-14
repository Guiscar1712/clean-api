import Posts from "../../../Domain/Entities/Posts";
import Repository from "./Repository";

abstract class PostsRepository extends Repository<Posts> {
  
}

export default PostsRepository