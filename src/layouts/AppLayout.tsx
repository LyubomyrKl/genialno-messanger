import React from 'react';
import {IWithChildren} from '@src/types/common';
import {Layout} from 'antd';


const {Sider, Content } = Layout;
const AppLayout: React.FC<IWithChildren> = ({children}) => {
    return (
        <Layout>
            <Sider theme='light'>Sider</Sider>
            <Layout>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;