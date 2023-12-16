import React, { FC } from 'react';
import './MyButton.css';
export interface MyButtonProps {
    color: string;
    big?: boolean;
    children: React.ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
