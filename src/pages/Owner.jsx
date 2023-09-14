import Navbarcomponent from "../component/Navbarcomponent"


const Owner = () => {
  return (
    <div data-theme="light" className=" min-h-screen">
      <Navbarcomponent/>
      <main className=" flex flex-col items-center text-center p-[1rem] pb-[2rem]">
        <h1 className="mt-[2rem] text-[1.8rem] lg:text-[2rem] font-bold">Siraphob -Group C -39</h1>
        <img src="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png" alt="profile" 
          className=" w-[150px] my-[2rem]"/>
        <h2 className="mb-[1.5rem] font-bold">Short Biography:</h2>
        <p className=" max-w-[900px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia excepturi autem voluptatem et dolorem libero aliquam fuga totam tempora! Voluptates laudantium harum reprehenderit aliquid aperiam amet ex reiciendis magnam doloribus?
          Perspiciatis vel unde rem id autem quam labore officiis modi expedita natus itaque amet quod nulla cum quis, odit eveniet veniam illo vitae ad temporibus fugiat dolorum magni. Aliquid, dignissimos!
        </p>
      </main>
    </div>
  )
}

export default Owner