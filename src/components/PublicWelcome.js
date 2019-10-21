import React from 'react';
import ContainerContent from "./ContainerContent";
import HorizontalTimeline from "./HorizontalTimeline";

const PublicWelcome = () => {
    return (
        <ContainerContent>
            <h5>Welcome</h5>
            <p>Another React app!  Time to learn some more stuff.</p>

            <div>
                <HorizontalTimeline length={15}/>
            </div>
        </ContainerContent>
    )
};

export default PublicWelcome;