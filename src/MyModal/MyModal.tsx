// MyModal.tsx

import React, { ReactNode } from 'react';
import './MyModal.css';

export interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="my-modal-overlay" onClick={onClose}>
      <div className="my-modal" onClick={(e) => e.stopPropagation()}>
        <div className="my-modal-close" onClick={onClose}>
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
