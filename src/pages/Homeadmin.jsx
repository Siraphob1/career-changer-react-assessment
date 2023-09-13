import { useContext, useState } from "react"
import DataContext from "../Data/DataContext"
import Navbarcomponent from "../component/Navbarcomponent"
import Titlecomponent from "../component/Titlecomponent"
import Tablecomponent from "../component/Homeadmin/Tablecomponent"




const Homeadmin = () => {
  const title = 'Home - Admin Sector'  
  const {members , setMembers} = useContext(DataContext)
  const [membername , setMembername] = useState('')
  const [memberlname , setMemberLname] = useState('')
  const [memberpos , setMemberPos] = useState('')




  const addMember = () =>{
    const newmember = {
      id: members.length > 0 ? members.length :1,
      name: membername,
      lastname: memberlname,
      position: memberpos
    }
    
    if(membername && memberlname && memberpos) {
      setMembers((allmembers)=> [...allmembers , newmember])
      console.log(newmember)
    }
    else{
      return
    }

  }

  const deleteMember = (id)=>{
    const newmembers = members.filter((elemennt)=> elemennt.id != id)
    setMembers(newmembers)
  }

  return (
    <div data-theme="light" className=" min-h-screen">
      <Navbarcomponent/>
      <Titlecomponent title={title}/>
      <section className=" px-[3rem] flex flex-col items-center ">
       <div className="border border-black flex flex-col items-center mt-[2rem]   max-w-[1100px]">
          <h2 className="self-start  mb-[1rem]">Create User Here</h2>
          <form className=" w-full   flex gap-x-[1rem]">
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setMembername(e.target.value)}} value={membername}/>
            <input type="text" placeholder="LastName" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setMemberLname(e.target.value)}} value={memberlname}/>
            <input type="text" placeholder="Position" className="input input-bordered w-full max-w-xs mr-[2rem]" onChange={(e)=>{setMemberPos(e.target.value)}} value={memberpos}/>
            <button type='button' className="btn btn-primary" onClick={addMember}>Save</button>
          </form>
       </div>
       <div className="overflow-x-auto  mt-[5rem] flex justify-center">
          <Tablecomponent members={members}/>
      </div>
      </section>
    </div>
  )
}

export default Homeadmin