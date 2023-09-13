import Navbarcomponent from "../component/Navbarcomponent"
import Titlecomponent from "../component/Titlecomponent"



const Homeuser = () => {
  const title = 'Home - User Sector' 
  return (
    <div>
      <Navbarcomponent/>
      <Titlecomponent title={title}/>
    </div>
  )
}

export default Homeuser