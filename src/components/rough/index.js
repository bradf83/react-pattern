import React from 'react';
import ContainerContent from "../ContainerContent";
import Buckets from "./Buckets";
import Lines from "./Lines";

const Index = () => {
    return(
        <>
            <ContainerContent>
                <h3>Rough JS & Rough Chart Content</h3>
            </ContainerContent>
            <ContainerContent>
                <Buckets/>
            </ContainerContent>
            <ContainerContent>
                <Lines/>
            </ContainerContent>
        </>
    )
};

export default Index;