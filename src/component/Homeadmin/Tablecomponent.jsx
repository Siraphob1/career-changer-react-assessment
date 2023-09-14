
const Tablecomponent = ({members ,deleteMember}) => {
  return (
    <table className="table w-[90vw] lg:w-[900px]   text-[0.7rem] lg:text-[1.3rem]">
    {/* head */}
    <thead>
      <tr className=" text-center border-b-2 border-gray-300">
        <th className="w-[10vw] lg:w-auto">Name</th>
        <th className="w-[10vw] lg:w-auto">LastName</th>
        <th className="w-[10vw] lg:w-auto">Position</th>
        <th className="w-[10vw] lg:w-auto">Action</th>
      </tr>
    </thead>
    <tbody>
      

     {members.length > 0 
     ?  members.map((element)=>{
        return(
          <tr className=" text-center border-b-2 border-gray-300" key={element.id}>
            <td className="w-[10vw] lg:w-auto">{element.name}</td>
            <td className="w-[10vw] lg:w-auto">{element.lastname}</td>
            <td className="w-[10vw] lg:w-auto">{element.position}</td>
            <td className="w-[10vw] lg:w-auto"><button className="btn bg-red-500 hover:bg-red-400 text-white text-[0.7rem] lg:text-[1.3rem] w-[10vw] lg:w-auto  px-[1.5rem]" onClick={()=> {deleteMember(element.id)}}>Delete</button></td>
          </tr>
        )})
     :  <tr>
          <td colSpan={4} className=" text-red-600 text-[0.7rem] lg:text-[1.3rem]">No members</td>
        </tr>
    
    } 
         
   

    </tbody>
  </table>
  )
}

export default Tablecomponent