import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import CommentList from "../../../src/components/units/comment/lists/ComentList.container";
import CommentWrite from "../../../src/components/units/comment/write/CommnetWrite.container";
import Detail from "../../../src/components/units/detail/Detail.container";

export default function BoardDetailPage() {
  useAuth();
  return (
    <>
      <Detail />
    </>
  );
}
