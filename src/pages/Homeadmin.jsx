import { useContext, useEffect, useState } from "react"
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

  const [cansubmit , setCansubmit] = useState(false)



 useEffect(()=>{
  if(membername && memberlname && memberpos) return setCansubmit(true)
  setCansubmit(false)
  
 },[membername , memberlname , memberpos])

 const resetInput = () =>{
    setMembername('')
    setMemberLname('')
    setMemberPos('')
 }

  const addMember = (e) =>{
    e.preventDefault()

    const newmember = {
      id: members.length > 0 ? members.length+1 :1,
      name: membername,
      lastname: memberlname,
      position: memberpos
    }
       
  
        if(members.length >0 && cansubmit){
          setMembers((allmembers)=> [...allmembers , newmember])
          resetInput()
        }
       else if(members.length === 0 && cansubmit){
          setMembers([newmember])
          resetInput()
       }
      
    

  }

  const deleteMember = (id)=>{
    const newmembers = members.filter((elemennt)=> elemennt.id != id)
    setMembers(newmembers)
  }

  const deleAllMember = () =>{
    setMembers([])
  }

  return (
    <div data-theme="light" className=" min-h-screen">
      <Navbarcomponent/>
      <Titlecomponent title={title}/>
      <section className=" px-[3rem] flex flex-col items-center ">
       <div className="flex flex-col items-center mt-[2rem]   max-w-[1100px]">
          <h2 className="self-start  font-bold  mb-[1rem]">Create User Here</h2>
          <form onSubmit={(e)=> addMember(e)} className=" w-full   flex gap-x-[1rem]">
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setMembername(e.target.value)}} value={membername}/>
            <input type="text" placeholder="LastName" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setMemberLname(e.target.value)}} value={memberlname}/>
            <input type="text" placeholder="Position" className="input input-bordered w-full max-w-xs mr-[2rem]" onChange={(e)=>{setMemberPos(e.target.value)}} value={memberpos}/>
            <button type="submit" className="btn btn-primary" disabled={!cansubmit} >Save</button>
          </form>
       </div>
       <div className="overflow-x-auto  mt-[5rem] pb-[5rem] flex justify-center">
          <Tablecomponent members={members} deleteMember={deleteMember}/>          
      </div>
      <button className="btn btn-neutral text-white px-[2rem] mb-[5rem]" onClick={deleAllMember}>Delete ALL</button>
      </section>
    </div>
  )
}

export default Homeadmin