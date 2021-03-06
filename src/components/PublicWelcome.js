import React, { useState } from 'react';
import ContainerContent from "./ContainerContent";
import HorizontalTimeline from "./HorizontalTimeline";
import ReactTooltip from 'react-tooltip'
import useKonamiCode from "./easterEggs/useKonamiCode";

const PublicWelcome = () => {

    const sequence = useKonamiCode(() => setKonamiCodeActive(current => !current));
    const [isKonamiCodeActive, setKonamiCodeActive] = useState(false);

    return (
        <ContainerContent>
            <h5>Welcome</h5>
            <p>Another React app!  Time to learn some more stuff.</p>

            <h6>Timeline Examples</h6>

            <div>
                <HorizontalTimeline length={15}/>
            </div>

            <h6>Tooltip Examples - with <em>React Tooltip</em></h6>

            <div>
                <button className="btn btn-primary ml-2" data-place="top" data-tip="Primary Tooltip on Top">Primary</button>
                <button className="btn btn-secondary ml-2"  data-place="bottom" data-tip="Secondary Tooltip on Bottom">Secondary</button>
                <button className="btn btn-danger ml-2" data-place="left" data-tip="Danger Tooltip on the Left">Danger</button>
                <button className="btn btn-info ml-2" data-place="right" data-tip="Info Tooltip on the Right">Info</button>
            </div>
            <ReactTooltip />

            <h6 className="mt-2">Konami Code Example (up, up, down, down, left, right, left, right, B, A)</h6>
            <div>{JSON.stringify(sequence)}</div>
            {isKonamiCodeActive && (
                <div className="alert alert-info">
                    <strong>Konami code active.  Enter again to turn off.</strong>
                </div>
            )}

        </ContainerContent>
    )
};

export default PublicWelcome;