import './Comment.css'
const Post = (props)=>{
    const {postId,id,name,email,body} = props;
    return(
        <div className='comment'>
            <h3>Post ID: {postId} Comment id: {id}</h3>
            <h4>Comment name: {name} email: {email}</h4>
            <p>Text: {body}</p>
        </div>
    );
};
export default Post;