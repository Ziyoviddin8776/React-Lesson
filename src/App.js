import React, {useMemo, useState} from "react";
import "./styles/style.css"
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import AddUser from "./components/AddUser";
import SortUsers from "./components/SortUsers";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/Button/MyButton";

function App() {
  const [users,setUser]=useState([
    {
      id:1,
      firstName:"Jaloliddin",
      age:22,
      job:"Student"
    },
    {
      id:2,
      firstName:"Kamoliddin",
      age:19,
      job:"Developer"
    },
    {
      id:3,
      firstName:"Jonibek",
      age:23,
      job:"Agronom"
    },
    {
      id:4,
      firstName:"Shahboz",
      age:21,
      job:"Armis"
    }
  ])
  const [filter,setFilter]=useState({sort:"",query:""})

  const [modal,setModal]=useState(false)

  const sortPost=useMemo(()=>{
    if(filter.sort){
      return [...users].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return users
  },[filter.sort,users])

  const sortAndSearch=useMemo(()=>{
    return sortPost.filter(val=>val.firstName.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query,sortPost])

  const removeUser=(post)=>{
    setUser(users.filter(val=>val.id!==post.id))
  }
  return (
  <div className="app">
    <MyButton onClick={()=>setModal(true)} className="btn btn-primary" >Add User</MyButton>
    <MyModal
      modal={modal}
      setModal={setModal}
    >
      <AddUser setModal={setModal} users={users} setUser={setUser}/>
    </MyModal>
    <SortUsers filter={filter} setFilter={setFilter}/>
    {sortAndSearch.length
      ? <table className="table table-bordered table-striped">
          <TableHeader/>
          <TableBody removeUser={removeUser} users={sortAndSearch}/>
        </table>
        :  <h6 className="text-center">Not Found</h6>
    }

  </div>
  );
}

export default App;
