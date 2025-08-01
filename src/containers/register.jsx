import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Input, Form, Upload, Button, Select } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { register } from '../services/auth-services';
import toast, { Toaster } from 'react-hot-toast';
import Lottie from "lottie-react";
import loginregistergif from '../assets/rocketwebpage.json'
import { roleoptions } from '../helper.user';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();

  const onFinish = async () => {
    setLoading(true);
    const data = form.getFieldsValue();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('password_confirmation', data.password_confirmation);
    formData.append('user_name', data.user_name);
    formData.append('nick_name', data.nick_name);
    formData.append('role', data.role);
    

    const fileObj = data.profile_image?.file?.originFileObj;
    if (fileObj) {
      formData.append('profile_image', fileObj);
    }

    try {
      await register(formData, (mess) => {
        toast(mess)
      });
      navigate('/login');
    } catch (error) {
      console.error("Error al registrar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex justify-center flex-row items-center w-full h-[100vh]'>
      <div className='w-[55%] h-[100%] flex bg-[#2374a7] overflow-hidden relative items-center justify-center'>
        <Lottie 
          animationData={loginregistergif} 
          loop={true} 
          autoplay={true} 
          style={{ width: "100%", height: "100%", transform: "scaleX(1)"}}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice"
          }}
        />
      </div>
      <div className='w-[45%] h-[100%] p-[20px] flex flex-col items-center justify-center overflow-scroll'>
        <div className="h-[100%] flex items-center justify-center p-4 col min-w-[400px]">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="text-white p-8 text-center pb-4">
              <h1 className="text-black text-2xl font-bold mb-2">Nuevo Usuario</h1>
            </div>

            <div className="p-8 pt-0 pb-0">
              <Form
                form={form}
                onFinish={onFinish}
                className='w-full'
                layout='vertical'
              >
                <Form.Item
                  label="Nombre"
                  name="name"
                  rules={[{ required: true, message: 'Por favor agrega tu nombre' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Por favor agrega tu correo' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Rol"
                  name="role"
                  rules={[{ required: true, message: 'Por favor agrega tu rol' }]}
                >
                  <Select options={roleoptions} />
                </Form.Item>
                
                <Form.Item
                  label="Nombre de Usuario"
                  name="user_name"
                  rules={[{ required: true, message: 'Por favor agrega tu Nombre de Usuario' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Apodo"
                  name="nick_name"
                  rules={[{ required: true, message: 'Por favor agrega tu Apodo' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Contraseña"
                  name="password"
                  rules={[{ required: true, message: 'La contrasñea debe tener 8 caracteres'   }]}
                >
                  <Input type='password'/>
                </Form.Item>
                <Form.Item
                  label="Confirmar Contraseña"
                  name="password_confirmation"
                  rules={[{ required: true, message: 'La contrasñea debe tener 8 caracteres'   }]}
                >
                  <Input type='password'/>
                </Form.Item>
                
                <Form.Item 
                  name="profile_image" 
                  label="Imagen de perfil"
                  rules={[{ required: true, message: "Por favor agrega tu imagen de perfil" }]}
                >
                   <Upload maxCount={1} listType="picture">
                    <Button type="primary" icon={<UploadOutlined />}>
                      Upload
                    </Button>
                  </Upload>
                </Form.Item>
                <div className='flex justify-center items-center'>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {loading ? 'Creando cuenta ...' : 'Crear cuenta'}
                  </button>
                </div>
              </Form>

              <div className="pt-0 mt-8 pb-4 border-t border-gray-200">
                <div className="flex justify-center items-center">
                  <Link to="../login" className='text-[16px] pt-[20px] text-blue-500'>Iniciar sesión</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </section>
  )
}

export default Login
