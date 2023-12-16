import React from 'react';
import './MyForm.css';
export interface MyFormProps {
    onSubmit: (formData: FormData) => void;
}
export interface FormData {
    name: string;
    email: string;
    message: string;
}
declare const MyForm: React.FC<MyFormProps>;
export default MyForm;
