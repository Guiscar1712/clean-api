import Members from "../../../Domain/Entities/Members";
import Repository from "./Repository";

abstract class MemberRepository extends Repository<Members> {
  
}

export default MemberRepository