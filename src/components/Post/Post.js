import './Post.css'
const Post= (props)=>{
    const {userId,id,title,body} = props;
    return(
        <div className='post'>
            <h3>User ID: {userId} ; ID of post: {id}</h3>
            <h4> Title: {title}</h4>
            <p> Text: {body}</p>
        </div>
    )
};

export default Post;


