import { Link } from "react-router-dom"


const Titlecomponent = ({title}) => {
  return (
    <section className=" flex flex-col items-center w-full border border-black">
       <section className=" text-[2rem] font-bold my-[2rem]">
          <h2 className=" leading-[2rem]">Generation Thailand</h2>
          <h2 className=" leading-[2rem]">{title}</h2>
       </section>
        <section className=" text-[1.2rem] font-semibold">
         <Link to="/homeuser" className="border border-black mr-[1rem]">User Home Sector</Link>
         <Link to="/homeadmin" className="border border-black">Admin Home Sector</Link>
        </section>
    </section>
  )
}

export default Titlecomponent