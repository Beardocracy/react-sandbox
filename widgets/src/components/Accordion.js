import React, { useState } from 'react';

const Accordion = ({ items }) => {
    // Check video 146 for explanation. Null is assigned to first state element (activeIndex). 
    const [activeIndex, setActiveIndex] = useState(null);
    
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };
    
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        // If adding a div just for the sake of a key value, use react.fragment instead of div so you don't mess up the styling.
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`}  onClick={() => onTitleClick(index)} >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;