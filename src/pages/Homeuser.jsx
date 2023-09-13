import { useContext } from "react"
import Navbarcomponent from "../component/Navbarcomponent"
import Titlecomponent from "../component/Titlecomponent"
import DataContext from "../Data/DataContext"



const Homeuser = () => {
  const title = 'Home - User Sector' 
  const {members , setMembers} = useContext(DataContext)

  return (
    <div data-theme="light" className=" min-h-screen">
      <Navbarcomponent/>
      <Titlecomponent title={title}/>
      <div className="overflow-x-auto  mt-[5rem] flex justify-center">
        <table className="table w-[900px] border border-black">
          {/* head */}
          <thead>
            <tr className=" text-center">
              <th className="font-bold">Name</th>
              <th>LastName</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
           {members.length > 0 &&
           members.map((element)=>{
            return(
                <tr className=" text-center" key={element.id}>
                  <td>{element.name}</td>
                  <td>{element.lastname}</td>
                  <td>{element.position}</td>
              </tr>
            )
           })}
           
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Homeuser