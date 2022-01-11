import './User.css'
const User = (props)=>{
    const {id,name,username,email,phone,website} = props;
    return(
        <div className='user'>
            <h3>Id: {id}  name: {name}</h3>
            <h4>User name: {username}</h4>
            <h6>Contacts: Phone : {phone}<br/>
            email: {email}  Website: {website}
            </h6>
        </div>
    );
};
export default User;