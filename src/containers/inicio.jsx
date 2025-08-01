import dashboard from '../assets/dashboard.json'
import Lottie from 'lottie-react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Input, Form } from "antd"
import { useState } from 'react'

function Inicio() {
  const [form] = Form.useForm();
  const [type, setType] = useState('posts')
  const [loading, setLoading] = useState(false)

  const onFinish = () => {

  }

  return <>
     {/* <div className='box-load'>
      <Lottie 
        animationData={dashboard} 
        loop={true} 
        autoplay={true} 
        style={{ width: "600px", height: "600px"}}
      />
    </div> */}
    <Header/>
    <section className="w-full h-[100vh] flex flex-col items-center p-[40px]">
      <div className="w-[80%] h-[60px]">
        <div className="bg-white rounded-2xl shadow-xl w-full p-[10px] ">
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
                className="w-full bg-green-800 text-white py-2 px-3 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-[14px]"
              >
                Crear Publicacion
              </button>
            </div>
          </div>
      </div>
      <div className="w-[80%] h-auto mt-[20px] flex justify-center flex-col">
        
      </div>
    </section>
    <Footer/>
  </>
}

export default Inicio
