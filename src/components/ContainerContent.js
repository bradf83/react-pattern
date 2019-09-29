import React from 'react';

const ContainerContent = ({children}) => {
    return (
        <section className="my-2">
            <div className="container">
                {children}
            </div>
        </section>
    )
};

export default ContainerContent;