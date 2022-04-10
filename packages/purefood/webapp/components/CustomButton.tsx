import React from 'react';
import Button from '@shared/ui/Button';


const CustomButton: React.FC<{}> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default CustomButton;
