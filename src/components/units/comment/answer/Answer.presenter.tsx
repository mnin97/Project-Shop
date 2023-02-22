import {
  CommentAnswer,
  CommentAnswerButton,
  CommentAnswerButtonWrapper,
  MainAnswerDeleteButton,
} from "./Answer.styles";

export default function AnswerUI(props) {
  return (
    <>
      <div>
        <CommentAnswer onChange={props.onChangeContents} />
      </div>
      <CommentAnswerButtonWrapper>
        {props.isEdit && (
          <MainAnswerDeleteButton
            onClick={props.onClickUpdateComment("")}
            color="white"
          >
            취소하기
          </MainAnswerDeleteButton>
        )}

        <CommentAnswerButton
          onClick={props.isEdit ? props.updateAnswer : props.onClickWrite}
        >
          {props.isEdit ? "수정하기" : "작성하기"}
        </CommentAnswerButton>
      </CommentAnswerButtonWrapper>
    </>
  );
}
