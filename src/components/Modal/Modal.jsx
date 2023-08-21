import React from 'react';
import { Overlay, StyledModal, StyledModalBtn } from './Modal.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <StyledModal>
        <StyledModalBtn onClick={onClose}>
          Close <AiOutlineCloseCircle width={1.2} height={1.2} />
        </StyledModalBtn>
        {children}
      </StyledModal>
    </Overlay>
  );
};
