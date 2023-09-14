import { Link } from "react-router-dom"


const Titlecomponent = ({title}) => {
  return (
    <section className=" flex flex-col items-center w-full ">
       <section className=" text-[2rem] font-bold my-[3rem] text-center">
          <h2 className=" leading-[2.4rem]">Generation Thailand</h2>
          <h2 className=" leading-[2.4rem]">{title}</h2>
       </section>
        <section>
         <Link to="/homeuser" className="  btn text-[0.78rem] lg:text-[1.1rem] font-semibold normal-case mr-[1rem] w-[150px] lg:w-auto" >User Home Sector</Link>
         <Link to="/homeadmin" className=" btn text-[0.78rem] lg:text-[1.1rem] font-semibold normal-case w-[150px] lg:w-auto">Admin Home Sector</Link>
        </section>
    </section>
  )
}

export default Titlecomponent