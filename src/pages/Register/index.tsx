import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';

import { Block, Button } from '@src/components';
import Paths from '@src/consts/Paths';

const RegisterForm = () => {

    const onFinish = (values: any) => {
        window.console.log('Received values of form: ', values);
    };

    return (
        <>
            <div className='auth--title mb-40'>
                <h2>Sign up</h2>
                <span>You have to be registered to join the chat</span>
            </div>
            <Block>
                <Form
                    name='register'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input
                            prefix={<MailOutlined/>}
                            placeholder='E-mail'
                            type='email'
                            size='large'/>
                    </Form.Item>

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

                    <Form.Item
                        name='repeat-password'
                        rules={[{ required: true, message: 'Please repeat your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined/>}
                            type='password'
                            placeholder='Repeat Password'
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
                        <Button className='mb-20' size='large' type='primary' htmlType='submit'>
                            Sign up
                        </Button>
                        <div> Or <Link to={Paths.account.login}>Sign in</Link></div>
                    </Form.Item>
                </Form>
            </Block>
        </>
    );
};

export default RegisterForm;