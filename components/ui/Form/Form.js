import React from "react";

const Form = ({ children, className }) => {
  return (
    <form className={className}>
        {children}
    </form>
  );
};

export default Form;
