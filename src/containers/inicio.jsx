import { useState, useEffect, useCallback, useRef } from 'react'
import dashboard from '../assets/dashboard.json'
import Lottie from 'lottie-react'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/header'
import Card from '../components/card'
import { getUser, indexUser } from '../services/user-services'
import { followE } from '../services/follow-services';
// import { }
import { Input, Form } from "antd"
import { ModalPublicaciones } from '../components/modalPublicaciones'

function Inicio() {
  const [form] = Form.useForm();
  const [type, setType] = useState('posts');
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const stateModalPost = useRef(() => {})

  const follow = async (id) => {
    await followE(`${id}`);
  }

  const loadData = useCallback(async () => {
    let coms = await indexUser();
    let user = await getUser();
    // let comp = await getPost();
    
    console.log(user?.data?.user)
    setUser(user?.data?.user)
    setUsers(coms?.data?.users?.data);
    // setPosts(comp?.data?.posts?.data);

  },[])

  useEffect(() => {
    loadData()
  },[])

  return <div className='w-full h-auto flex flex-col'>
     {/* <div className='box-load'>
      <Lottie 
        animationData={dashboard} 
        loop={true} 
        autoplay={true} 
        style={{ width: "600px", height: "600px"}}
      />
    </div> */}
    <Header/>
    <section className="w-full h-auto flex row flex-nowrap items-start justify-center p-[40px]">
      <div className='w-[32%] flex col justify-center items-start bg-white rounded-2xl shadow-md p-[10px]'>
        <h1 className="text-[20px] font-bold">Tutores Destacados</h1>
      </div>
      <div className='w-full h-[100vh] flex flex-col flex-nowrap items-center justify-start p-[40px] pt-0'>
        <div className="w-[100%] h-[60px]">
          <div className="bg-white rounded-2xl shadow-md w-full p-[10px] pt-0">
            <div className="w-full flex row">
              <Input className='w-full' />
              <div className='flex justify-center items-center ml-[20px] min-w-[200px]'>
                <button
                  disabled={loading}
                  className="w-full bg-blue-800 text-white py-2 px-3 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {loading ? 'Buscando...' : 'Buscar '}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[60px] mt-[20px]">
          <div className="w-full flex row">
              <div className='flex row justify-center w-full items-center ml-[20px] min-w-[200px] gap-[20px]'>
                <div
                  onClick={() => {setType('posts')}}
                  className="w-full flex justify-center items-center rounded-lg border border-solid border-gray-500 transition-all py-2 px-3 duration-200 text-white text-[14px]"
                  style={{
                    background:`${type === 'posts' ? '#6a7282' : 'white'}`, 
                    color:`${type === 'posts' ? 'white' : 'black'}`}
                  }
                >
                  Publicaciones
                </div>
                <div
                  onClick={() => {setType('users')}}
                  className="w-full flex justify-center items-center rounded-lg border border-solid border-gray-500 transition-all py-2 px-3 duration-200 text-white text-[14px]"
                  style={{
                    background:`${type === 'users' ? '#6a7282' : 'white'}`, 
                    color:`${type === 'users' ? 'white' : 'black'}`}
                  }
                >
                  Usuarios
                </div>
                <button
                  type="submit"
                  onClick={() => stateModalPost.current(true)}
                  className="w-full min-w-[200px] bg-green-800 text-white py-2 px-3 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-[14px]"
                >
                  Crear Publicacion
                </button>
              </div>
            </div>
        </div>
        <div className="w-[80%] h-auto mt-[20px] flex justify-center flex-col">
          {type === 'users' ? users?.map(e => {
            return <Card
              data={{
                ...e,
                button: 'Seguir',
                image: e?.profile_image_url,
                content: <>
                  <p className="text-[16px] w-full">user_name: {e?.user_name}</p>
                  <p className="text-[16px] w-full">apodo: {e?.nick_name}</p>
                </>,
                onClick: (datas) => follow(datas?.id)
              }}
            />
          }) : posts?.map(e => {
            return <Card
              data={{
                ...e,
                button: 'Agregar Mensaje', 
                onClick: () => {

                }
              }}
            />
          })}
        </div>
      </div>
      <div className='w-[32%] flex flex-col justify-center items-start gap-[20px]'>
        <div className="bg-white flex flex-col w-full rounded-2xl shadow-md p-[10px]">
          <h1 className="text-[20px] font-bold">Perfil</h1>
          <p></p>
        </div>
        <div className="bg-white flex flex-col w-full rounded-2xl shadow-md p-[10px]">
          <h1 className="text-[20px] font-bold">Cursos</h1>
        </div>
      </div>
      <ModalPublicaciones openState={(func=() => {}) => {
        stateModalPost.current = func;
      }} />
      <Toaster />
    </section>
  </div>
}

export default Inicio
