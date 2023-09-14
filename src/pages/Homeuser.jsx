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
      <div className="overflow-x-auto  mt-[5rem] pb-[5rem] flex justify-center">
        <table className="table w-[90vw] lg:w-[900px] text-[0.7rem] lg:text-[1.3rem]">
          {/* head */}
          <thead>
            <tr className=" text-center border-b-2 border-gray-300">
              <th className="w-[10vw] lg:w-auto">Name</th>
              <th className="w-[10vw] lg:w-auto">LastName</th>
              <th className="w-[10vw] lg:w-auto">Position</th>
            </tr>
          </thead>
          <tbody>
           {members.length > 0 
            ?  members.map((element)=>{
              return(
                  <tr className=" text-center border-b-2 border-gray-300 " key={element.id}>
                    <td className='leading-[49.6px]'>{element.name}</td>
                    <td className="w-[10vw] lg:w-auto">{element.lastname}</td>
                    <td className="w-[10vw] lg:w-auto">{element.position}</td>
                </tr>
              )})
            : <tr>
                <td colSpan={3} className=" text-red-600 text-[0.7rem] lg:text-[1.3rem]">No members</td>              
              </tr>
            }
        
           
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Homeuser