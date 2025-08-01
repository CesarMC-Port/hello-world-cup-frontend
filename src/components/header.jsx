function Header({user}) {

  return <>
    <div className="w-full h-[100px] border border-solid border-gray-200 shadow-sm flex between items-center p-[10px]">
        <h1 className="text-[30px] font-bold">UNET</h1>
        <p>{user?.name}</p>
    </div>
  </>
}

export default Header
