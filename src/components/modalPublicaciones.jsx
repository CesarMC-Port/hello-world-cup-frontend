import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import toast from "react-hot-toast";
import { createPost } from "../services/post-services";

export const ModalPublicaciones = () => {
    const [form] = Form.useForm();
    const [close, setClose] = useState(false)
    const [open, setOpen] = useState(true)
    

    const onFinish = async () => {
        const data = form.getFieldsValue();

        const formData = new FormData();
        formData.append('name', data.name);

        

        const fileObj = data.profile_image?.file?.originFileObj;
        if (fileObj) {
        formData.append('profile_image', fileObj);
        }

        try {
        await createPost(formData, (mess) => {
            toast(mess)
        });
        } catch (error) {
        console.error("Error al subir una Publicación:", error);
        } finally {
            setClose(true);
        }
  };
    return <Modal open={open} onOk={onFinish} clos={close}  >
        <Form
            form={form}
            onFinish={onFinish}
            className='w-full'
            layout='vertical'
            >
            <Form.Item
                label="Titulo"
                name="name"
                rules={[{ required: true, message: 'Por favor agrega tu nombre' }]}
            >
                <Input type="text" />
            </Form.Item>
            
            <Form.Item
                label="descripción"
                name="description"
                rules={[{ required: true, message: 'Por favor agrega tu nombre' }]}
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