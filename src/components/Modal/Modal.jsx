import React from 'react';
import { Overlay, StyledModal } from './Modal.styled';

export const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <StyledModal>
        <button onClick={onClose}>Close</button>
        {children}
      </StyledModal>
    </Overlay>
  );
};
