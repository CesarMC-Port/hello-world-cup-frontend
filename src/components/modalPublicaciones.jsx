import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createPost } from "../services/post-services";

export const ModalPublicaciones = ({openState}) => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false)
    

    const onFinish = async () => {
        const data = form.getFieldsValue();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);


        

        const fileObj = data.profile_image?.file?.originFileObj;
        if (fileObj) {
        formData.append('image', fileObj);
        }

        try {
        await createPost(formData, (mess) => {
            toast(mess)
        });
        } catch (error) {
        console.error("Error al subir una Publicación:", error);
        } finally {
            setOpen(false);
        }
    };

    useEffect(() => {
        openState((bul) => setOpen(bul))
    },[])

    return <Modal open={open} onOk={onFinish} onCancel={() => setOpen(false)}  >
        <Form
            form={form}
            onFinish={onFinish}
            className='w-full'
            layout='vertical'
            >
            <Form.Item
                label="Titulo"
                name="name"
                rules={[{ required: true, message: 'Por favor agrega el nombre de la publicacion' }]}
            >
                <Input type="text" />
            </Form.Item>
            
            <Form.Item
                label="descripción"
                name="description"
                rules={[{ required: true, message: 'Por favor agrega la descripcion' }]}
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item 
                  name="post_image" 
                  label="Imagen de perfil"
                  rules={[{ required: true, message: "Por favor agrega tu imagen de perfil" }]}
            >
                <Upload maxCount={1} listType="picture">
                <Button type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
                </Upload>
            </Form.Item>
        </Form>

    </Modal>
    
}