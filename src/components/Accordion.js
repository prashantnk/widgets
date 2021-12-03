import React from 'react';
import { useState } from 'react';
import getId from './Id';
const Accordion = ({ items }) => {
    const Id = getId();
    const [activeState, setActiveState] = useState(null);

    const onTitleClick = function (index) {
        if (index === activeState) index = -1;
        setActiveState(index);
    }

    const renderedList = items.map((item, index) => {
        let active = "";
        if (index === activeState) {
            active = "active";
        }
        return <React.Fragment key={Id()} >
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p className="transition"> {item.content} </p>
            </div>
        </React.Fragment>;
    });
    return (
        <div className="ui styled accordion">
            {renderedList}
        </div>
    );
}

export default Accordion;