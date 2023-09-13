import { Link } from "react-router-dom"


const Navbarcomponent = () => {
  return (
    <nav>
      <ul className=" flex justify-end border-b border-black py-[1rem] px-[3rem] gap-x-[3rem] text-[1.3rem] font-medium">
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/owner">Owner</Link></li>
      </ul>
    </nav>
  )
}

export default Navbarcomponent