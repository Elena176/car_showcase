'use client';

import React, {MouseEventHandler, FC} from 'react';

interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const {title, handleClick, containerStyles, btnType} = props;
  return (
    <button disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${containerStyles}`}
          /*  onClick={handleClick}*/
    >
      <span className={'flex-1'}>{title}</span>
    </button>
  );
};

export {CustomButton};
