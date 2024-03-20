import React, {FC} from 'react';
import {IWithChildren} from '@src/types/common';

export interface IPublicRoute{
    component: FC,
    layout: FC<IWithChildren>,
}

export interface IRequireAuth extends IPublicRoute {
    redirectTo?: string
}