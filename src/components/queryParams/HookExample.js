import React from 'react';
import useQuery from "../hooks/useQuery";
import ContainerContent from "../ContainerContent";

const HookExample = () => {
    const query = useQuery();
    return (
        <ContainerContent>
            <div>Params:{query.toString()}</div>
        </ContainerContent>
    )
};

export default HookExample;
