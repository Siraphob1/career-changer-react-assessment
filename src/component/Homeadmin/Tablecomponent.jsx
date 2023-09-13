
const Tablecomponent = ({members}) => {
  return (
    <table className="table w-[900px] border border-black">
    {/* head */}
    <thead>
      <tr className=" text-center">
        <th className="font-bold">Name</th>
        <th>LastName</th>
        <th>Position</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {members.length > 0  && 
      members.map((element)=>{
      return(
          <tr className=" text-center" key={element.id}>
            <td>{element.name}</td>
            <td>{element.lastname}</td>
            <td>{element.position}</td>
            <td><button className="btn bg-red-500 hover:bg-red-400 text-white  px-[1.5rem]" onClick={()=> {deleteMember(element.id)}}>Delete</button></td>
        </tr>
      )
     })}
     
     
    </tbody>
  </table>
  )
}

export default Tablecomponent