import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

type Props = {
  children: JSX.Element;
};

const Modal = ({ children }: Props) => {
  const elRef = useRef<any>(null)!;
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot?.appendChild(elRef.current);
    return () => modalRoot?.removeChild(elRef.current);
  }, [elRef]);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
