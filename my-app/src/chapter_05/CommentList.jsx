import React from 'react';
import Comment from "./Comment"

const comments=[
    {
        name:"이인제",
        comment : "안녕하세요"
    },
    {
        name:"유재석",
        comment : "리엑트 어려워요ㅠㅠ"
    },
    {
        name:"강민경",
        comment : "저도 리엑트 하기 싫어요ㅋㅋ"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;