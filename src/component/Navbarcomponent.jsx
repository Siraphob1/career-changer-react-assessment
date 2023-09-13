import { Link } from "react-router-dom"


const Navbarcomponent = () => {
  return (
    <nav>
      <ul className=" flex justify-end border border-black py-[1rem] px-[1rem] gap-x-[1rem]">
        <li className=" text-[1.3rem]"><Link to="/">Home</Link></li>
        <li className=" text-[1.3rem]"><Link to="/owner">Owner</Link></li>
      </ul>
    </nav>
  )
}

export default Navbarcomponent