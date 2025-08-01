function Header({user}) {

  return <>
    <div className="w-full h-[100px] border border-solid border-gray-200 shadow-sm flex between">
        <p>UNET RED SOCIAL</p>
        <p>{user?.name}</p>
    </div>
  </>
}

export default Header
