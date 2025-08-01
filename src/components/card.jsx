function Card({data:{name, content, image, onClick=()=>{},button}}) {

  return <>
    <div className="w-full h-auto gap-1 border border-solid border-gray-200 shadow-sm flex flex-col center-global p-[20px]">
        <div className="w-full h-[100px] object-contain">
            <img src={image ||''} className="w-full h-full object-contain"></img>
        </div>
        <h1 className="text-[20px] font-bold w-full">{name}</h1>
        {content}
        <button
            type="submit"
            onClick={onClick}
            className="w-full bg-green-800 text-white py-2 px-3 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-[14px]"
        >
            {button}
        </button>
    </div>
  </>
}

export default Card
