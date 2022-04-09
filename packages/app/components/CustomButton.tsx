import React from 'react';
import Button from '@purebase/ui/Button';

const CustomButton: React.FC<{}> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default CustomButton;
