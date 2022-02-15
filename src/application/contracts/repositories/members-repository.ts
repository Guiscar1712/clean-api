import Members from "../../../domain/entities/members";
import Repository from "./repository";

abstract class MemberRepository extends Repository<Members> {
  
}

export default MemberRepository