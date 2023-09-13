import Navbarcomponent from "../component/Navbarcomponent"
import Titlecomponent from "../component/Titlecomponent"


const Homeadmin = () => {
  const title = 'Home - Admin Sector'  
  return (
    <div>
      <Navbarcomponent/>
      <Titlecomponent title={title}/>
    </div>
  )
}

export default Homeadmin