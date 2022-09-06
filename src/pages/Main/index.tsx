import React, {useEffect} from 'react';
import {Message, Dialog, ChatInput} from '@src/components';
import { Layout } from 'antd';
import Search from 'antd/es/input/Search';
import {nanoid} from 'nanoid';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';


const { Sider, Content, Header } = Layout;

const Home = () => {
    useEffect(() => {
        window.console.log('rerender');
    });
    const onSearch = (value:any) =>  window.console.log(value);

    return (

        <Layout>
            <Sider theme='light' width='350px'>
                <Header className='sider-header font-size-20'>
                    <div>
                        <TeamOutlined className='mr-10' />
                        All dialogs
                    </div>
                    <FormOutlined />
                </Header>
                <div className='sider-search-dialog'>
                    <Search placeholder="Search" onSearch={onSearch} suffix={false} />
                </div>
                <div className="sider-dialog-list">
                    {
                        [
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isAudio: true,
                                    isMe: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date()
                                }
                            },
                        ].map(({user, lastMessage}) => <Dialog key={nanoid()} user={user} lastMessage={lastMessage}/>)
                    }
                </div>
            </Sider>
            <Layout className='main-dialog-wrapper'>
                <Header className='main-dialog-header'>
                    <div className='main-dialog-info'>
                        <div className='main-dialog-name online'>Yan Lapotkov</div>
                    </div>
                </Header>
                <Content  className='main-dialog-content'>
                    {[
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            audio: 'audio',
                            isMe:false,
                            isReadied: true,
                        },
                    ].map( message => <Message key={nanoid()} {...message}/>)}
                </Content>
                <ChatInput/>
            </Layout>
        </Layout>
    );
};

export default Home;