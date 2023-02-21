import {
  Comment,
  CommentButton,
  CommentButtonWrapper,
  MainDeleteButton,
} from "./CommnetWrite.styles";

export default function CommentWriteUI(props) {
  console.log(props.isEdit);
  return (
    <>
      <div>
        <Comment
          onChange={props.onChangeContents}
          placeholder="내용을 입력해주세요."
          defaultValue={props.data?.fetchUseditemQuestions.contents}
        />
      </div>
      <CommentButtonWrapper>
        {props.isEdit && (
          <MainDeleteButton
            onClick={props.onClickUpdateComment("")}
            color="white"
          >
            취소하기
          </MainDeleteButton>
        )}

        <CommentButton
          onClick={
            props.isEdit
              ? props.updateUseditemQuestionSubmit
              : props.onClickWrite
          }
        >
          {props.isEdit ? "수정하기" : "작성하기"}
        </CommentButton>
      </CommentButtonWrapper>
    </>
  );
}
