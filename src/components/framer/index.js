import React from 'react';
import ContainerContent from "../ContainerContent";
import Basic from "./Basic";
import CollapseExample from "./CollapseExample";

const Index = () => {
    return (
        <ContainerContent>
            <h3>React Framer Examples</h3>
            <Basic/>
            <CollapseExample />
        </ContainerContent>
    )
};

export default Index;
