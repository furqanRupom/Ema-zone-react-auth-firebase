import React from 'react';

const Button = ({children}) => {
    return (
        <>
            <button className="px-7 py-1 rounded-bg-amber-500">
                {children}
            </button>
        </>
    );
};

export default Button;