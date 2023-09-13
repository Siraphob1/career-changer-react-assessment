import { useContext, useEffect } from "react"
import Navbarcomponent from "../component/Navbarcomponent"
import Titlecomponent from "../component/Titlecomponent"
import DataContext from "../Data/DataContext"


const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const {members , setMembers} = useContext(DataContext)
  useEffect(()=>{
    setMembers(mockEmployees)
  },[])

  const title = 'React - Aessessment'
  return (
    <div data-theme="light" className=" min-h-screen">
        <Navbarcomponent/>
        <Titlecomponent title={title}/>
       
    </div>
  )
}



export default Home
