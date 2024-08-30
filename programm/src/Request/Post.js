import  React,{useState,useEffect}  from  'react'
import  axios   from    'axios'
function    Post()
{
    const[userid,setUserid]=useState("");
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[post,setPost]=useState("");

    const   obj={
        "userId":userid,
        "title":title,
        "body":body
    };
    const   handleSubmit=(e)=>{
        e.preventDefault();
        const   obj={
            "userId":userid,
            "title":title,
            "body":body
        };
        console.log(obj);
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts',obj)
        .then(res => {
            console.log(res.data);
            setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    return(
        <div>
            <form>
                <div>
                    <label>UserId:</label>
                <input  type="text" name="userid" value={userid}
                onChange={(e)=>setUserid(e.target.value)}/>
                </div>
                <div>
                    <label>Title:</label>
                <input  type="text" name="title" value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Body:</label>
                <input  type="text" name="body" value={body}
                onChange={(e)=>setBody(e.target.value)}/>
                </div>
                <button  type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export  default Post;

