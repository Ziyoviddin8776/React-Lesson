import React, {useState} from 'react';
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/MyInput/MyInput";

function AddUser(props) {
    const [post,setPost]=useState({firstName:"",age:"",job:""})
    const addPost=(e)=>{
        e.preventDefault()
        if(post.firstName && post.age && post.job){
            props.setUser([...props.users,{...post,id:Date.now()}])
            setPost({firstName: "",age: "",job: ""})
        }
        else{
            alert("Formani to'liq to'ldiring")
        }
        props.setModal(false)

    }
    return (
        <div>
            <form>
                <h2 className="text-center">Add User</h2>
                <MyInput
                    className="form-control my-3" type="text" placeholder="FirstName"
                    value={post.firstName}
                    onChange={e=>setPost({...post,firstName: e.target.value})}
                />
                <MyInput
                    className="form-control my-3" type="number" placeholder="Age"
                    value={post.age}
                    onChange={e=>setPost({...post,age: e.target.value})}
                />
                <MyInput
                    className="form-control my-3" type="text" placeholder="Job"
                    value={post.job}
                    onChange={e=>setPost({...post,job: e.target.value})}
                />
                <MyButton onClick={addPost} className="w-100 btn btn-success my-3">Add User</MyButton>
            </form>
        </div>
    );
}

export default AddUser;