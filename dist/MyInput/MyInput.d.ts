import { FC } from 'react';
import './MyInput.css';
export interface MyInputProps {
    big?: boolean;
    placeholder: string;
    name: string;
}
declare const MyInput: FC<MyInputProps>;
export default MyInput;
