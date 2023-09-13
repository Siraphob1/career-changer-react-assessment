
const Tablecomponent = ({members ,deleteMember}) => {
  return (
    <table className="table w-[900px]">
    {/* head */}
    <thead>
      <tr className=" text-center text-[1.3rem] border-b-2 border-gray-300">
        <th>Name</th>
        <th>LastName</th>
        <th>Position</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      

     {members.length > 0 
     ?  members.map((element)=>{
        return(
          <tr className=" text-center border-b-2 border-gray-300" key={element.id}>
            <td>{element.name}</td>
            <td>{element.lastname}</td>
            <td>{element.position}</td>
            <td><button className="btn bg-red-500 hover:bg-red-400 text-white  px-[1.5rem]" onClick={()=> {deleteMember(element.id)}}>Delete</button></td>
          </tr>
        )})
     :  <tr>
          <td colSpan={4} className=" text-red-600">No members</td>
        </tr>
    
    } 
         
   

    </tbody>
  </table>
  )
}

export default Tablecomponent