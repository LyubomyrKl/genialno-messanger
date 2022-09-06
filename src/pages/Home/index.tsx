import React from 'react';
import {Message, Dialog, ChatInput} from '@src/components';
import { Layout } from 'antd';
import Search from 'antd/es/input/Search';
import {nanoid} from 'nanoid';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';

const { Sider, Content, Header } = Layout;

const Home = () => {

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
                <div className='home-search-dialog'>
                    <Search placeholder="Search" onSearch={onSearch} suffix={false} />
                </div>
                <div className="dialog-list">
                    {
                        [
                            {
                                user: {
                                    isOnline: false,
                                    isTyping: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                },
                                lastMessage: {
                                    isMe: true,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date('Sat Jun 10 2022 15:21:17'),
                                }
                            },
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: true,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: false,
                                    createdAt: new Date()
                                }
                            },
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: false,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date(),
                                    countUnreadMessage: 103
                                }
                            },
                            {
                                user: {
                                    isOnline: true,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: false,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date(),
                                    countUnreadMessage: 3
                                }
                            },
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
                            {
                                user: {
                                    isOnline: false,
                                    isTyping: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                },
                                lastMessage: {
                                    isMe: true,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date('Sat Jun 10 2022 15:21:17'),
                                }
                            },
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: true,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: false,
                                    createdAt: new Date()
                                }
                            },
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: false,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date(),
                                    countUnreadMessage: 103
                                }
                            },
                            {
                                user: {
                                    isOnline: true,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: false,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date(),
                                    countUnreadMessage: 3
                                }
                            },
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
                            {
                                user: {
                                    isOnline: false,
                                    isTyping: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                },
                                lastMessage: {
                                    isMe: true,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date('Sat Jun 10 2022 15:21:17'),
                                }
                            },
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: true,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: false,
                                    createdAt: new Date()
                                }
                            },
                            {
                                user: {
                                    isOnline: false,
                                    fullName: 'Василь Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: false,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date(),
                                    countUnreadMessage: 103
                                }
                            },
                            {
                                user: {
                                    isOnline: true,
                                    fullName: 'Василь   Стус',
                                    avatar: null,
                                    isTyping: false,
                                },
                                lastMessage: {
                                    isMe: false,
                                    isAudio: false,
                                    text: 'Терпи, терпець тебе шліфує.',
                                    isReadied: true,
                                    createdAt: new Date(),
                                    countUnreadMessage: 3
                                }
                            },
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
            <Layout className='home-dialog-wrapper'>
                <Header className='home-dialog-header'>

                    <div className='home-dialog-info'>
                        <div className='home-dialog-name online'>Yan Lapotkov</div>
                    </div>

                </Header>
                <Content  className='home-dialog-content'>
                    {[
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:31:07',
                            text:'Мы тут не давно войска Ареоистовича разбили, чуваки хотели закрепиться на гальских землях, лол',
                            isAudio: false,
                            isMe:true,
                            isReadied: true,

                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isAudio: false,
                            isMe: false,
                            time:'Sun Apr 22 2022 17:30:07',
                            text:'Брут, я би тебе забив.',
                            attachments:[{
                                filename: 'img2.jpg',
                                url: 'https://source.unsplash.com/100x100/?random=1&space,moto'
                            }]
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            isMe:true,
                            isReadied: true,
                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isMe: false,
                            isAudio: true,
                            audio: 'https://assets.mixkit.co/sfx/preview/mixkit-heavy-rain-storm-1257.mp3',
                            time:'Sun Apr 22 2022 17:33:07',
                            isTyping: true
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            audio: 'audio',
                            isMe:false,
                            isReadied: true,
                        },{
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:31:07',
                            text:'Мы тут не давно войска Ареоистовича разбили, чуваки хотели закрепиться на гальских землях, лол',
                            isAudio: false,
                            isMe:true,
                            isReadied: true,

                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isAudio: false,
                            isMe: false,
                            time:'Sun Apr 22 2022 17:30:07',
                            text:'Брут, я би тебе забив.',
                            attachments:[{
                                filename: 'img2.jpg',
                                url: 'https://source.unsplash.com/100x100/?random=1&space,moto'
                            }]
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            isMe:true,
                            isReadied: true,
                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isMe: false,
                            isAudio: true,
                            audio: 'https://assets.mixkit.co/sfx/preview/mixkit-heavy-rain-storm-1257.mp3',
                            time:'Sun Apr 22 2022 17:33:07',
                            isTyping: true
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            audio: 'audio',
                            isMe:false,
                            isReadied: true,
                        },{
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:31:07',
                            text:'Мы тут не давно войска Ареоистовича разбили, чуваки хотели закрепиться на гальских землях, лол',
                            isAudio: false,
                            isMe:true,
                            isReadied: true,

                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isAudio: false,
                            isMe: false,
                            time:'Sun Apr 22 2022 17:30:07',
                            text:'Брут, я би тебе забив.',
                            attachments:[{
                                filename: 'img2.jpg',
                                url: 'https://source.unsplash.com/100x100/?random=1&space,moto'
                            }]
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            isMe:true,
                            isReadied: true,
                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isMe: false,
                            isAudio: true,
                            audio: 'https://assets.mixkit.co/sfx/preview/mixkit-heavy-rain-storm-1257.mp3',
                            time:'Sun Apr 22 2022 17:33:07',
                            isTyping: true
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            audio: 'audio',
                            isMe:false,
                            isReadied: true,
                        },{
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:31:07',
                            text:'Мы тут не давно войска Ареоистовича разбили, чуваки хотели закрепиться на гальских землях, лол',
                            isAudio: false,
                            isMe:true,
                            isReadied: true,

                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isAudio: false,
                            isMe: false,
                            time:'Sun Apr 22 2022 17:30:07',
                            text:'Брут, я би тебе забив.',
                            attachments:[{
                                filename: 'img2.jpg',
                                url: 'https://source.unsplash.com/100x100/?random=1&space,moto'
                            }]
                        },
                        {
                            avatar: 'https://stuki-druki.com/biofoto3/marcus-junius-brutus-01.jpg',
                            user: {name: 'Lyubomyr'},
                            time:'Sun Apr 22 2022 17:30:07',
                            isAudio: true,
                            isMe:true,
                            isReadied: true,
                        },
                        {
                            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeGyLJYO9AVuo_ZwNStU4L82hvQbFFKGM_w6nxkbTVu5IcpCW4FcgaXPpOSc_eRfN_xM&usqp=CAU',
                            user:{name: 'Lyubomyr'},
                            isMe: false,
                            isAudio: true,
                            audio: 'https://assets.mixkit.co/sfx/preview/mixkit-heavy-rain-storm-1257.mp3',
                            time:'Sun Apr 22 2022 17:33:07',
                            isTyping: true
                        },
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