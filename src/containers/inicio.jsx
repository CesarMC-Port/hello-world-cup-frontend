import dashboard from '../assets/dashboard.json'
import Lottie from 'lottie-react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Input, Form } from "antd"
import { useState } from 'react'

function Inicio() {
  const [form] = Form.useForm();
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
    <Footer/>
    <section className="w-full h-[100vh] flex justify-center p-[40px]">
      <div className="w-[80%] h-[100px]">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <Form
            form={form}
            layout='vertical'
            className='w-full flex row'
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Bucar"
              name="search"
              className=''
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <div className='flex justify-center items-center'>
                <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
    <Header/>
  </>
}

export default Inicio
