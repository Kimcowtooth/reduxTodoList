import { useState } from "react"

export default function Form(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    return (
        <form style={{
            padding : "10px"
        }}>
            

            <label htmlFor="title">제목</label>
            <input type = "text" name="title" id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}></input>
            <label htmlFor="body">제목</label>
            <input type = "text" name="body" id="body"></input>

            <button type="submit" onSubmit={onsubmit}>제출</button>
        </form>
    )



}