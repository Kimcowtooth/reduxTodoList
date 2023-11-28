export default function List({isDone}){
    return (<div>
        {isDone ===true? "완료목록입니다" : "할일목록입니다"} 

    <div>
            <p>제목</p>
            <p>내용</p>
            <p>완료여부</p>
            <button>{isDone===true ? "취소" : "완료"}</button>
            <button>삭제</button>
        </div>
    </div>
    )
}