import React from 'react';

const HorizontalTimeline = ({length = 0}) => {
    if(length <= 0){
        return null;
    }

    const handleClick = (index) => {
        window.alert(`You clicked on item: ${index + 1}`)
    };

    //TODO: There has to be a better way to do this....just need a sequence of numbers 1 > length
    const emptyArray = new Array(length).fill(0);
    return (
        <ul className="timeline">
            {emptyArray.map((item, index) =>
                <li key={index} onClick={() => handleClick(index)}/>
            )}
        </ul>
    )
};

export default HorizontalTimeline;