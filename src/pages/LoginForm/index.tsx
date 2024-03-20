import React from 'react';
import {Block, Button} from '@src/components';
import {Checkbox, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import Paths from '@src/consts/Paths';

const LoginForm = () => {

    const onFinish = (values: any) => {
        window.console.log('Received values of form: ', values);
    };

    return (
        <>
            <div className='auth--title mb-40'>
                <h2>Login account</h2>
                <span>Please login into your account</span>
            </div>
            <Block>
                <Form
                    name='normal_login'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='username'
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder='Username'
                            size='large'/>
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined/>}
                            type='password'
                            placeholder='Password'
                            size='large'
                        />
                    </Form.Item>

                    <Form.Item className='control-password'>
                        <Form.Item name='remember' valuePropName='checked' noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a href='@src/pages/LoginForm/index'>
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item className='submit-control'>
                        <Button className='mb-10' size='large' type='primary' htmlType='submit'>
                            Log in
                        </Button>
                        <div> Or <Link to={Paths.account.register}>register now!</Link></div>
                    </Form.Item>
                </Form>
            </Block>
        </>
    );
};

export default LoginForm;