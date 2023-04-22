import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const RoundedContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`rounded-[1rem] ${className ? className : "bg-bg-cust-dark "}`}
    >
      {children}
    </div>
  );
};

export default RoundedContainer;
