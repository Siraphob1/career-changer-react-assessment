import Navbarcomponent from "../component/Navbarcomponent"
import Titlecomponent from "../component/Titlecomponent"


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

  const title = 'React - Aessessment'
  return (
    <div>
        <Navbarcomponent/>
        <Titlecomponent title={title}/>
       
    </div>
  )
}



export default Home
