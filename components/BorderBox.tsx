import React from 'react';

type PropTypes = {
  children: React.ReactNode;
  extraClasses?: string;
};

const BorderBox = ({ children, extraClasses }: PropTypes) => {
  return (
    <div
      className={`w-auto border-2 border-gray-200 rounded-md bg-white p-3 ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default BorderBox;
