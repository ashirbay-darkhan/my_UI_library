import React, {FC} from 'react';
import './MyInput.css';

export interface MyInputProps {
  big?: boolean;
  placeholder: string;
  name: string;
}

const MyInput: FC<MyInputProps> = (
  {
    big,
    placeholder,
    name,
    ...props
  }
) => {
  const classes = ['my-input'];
  if (big) {
    classes.push('big-input');
  }
  return (
    <div className="input-container">
      <input
        className={classes.join(' ')}
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </div>
  );
};

export default MyInput;