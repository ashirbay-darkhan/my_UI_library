import React, { ReactNode } from 'react';
import './MyModal.css';
export interface MyModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
declare const MyModal: React.FC<MyModalProps>;
export default MyModal;
