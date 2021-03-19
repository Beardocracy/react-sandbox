import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({options, selected, onSelectedChange, label}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Sets up a click event handler to close the dropdown if we click outside the referenced div.
    useEffect(() => {
        const onBodyClick = (event) => {
            // Don't close if we click on something inside the referenced div.
            // Let those divs' logic handle it.
            // Events always bubble up.
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
        
            setOpen(false);
        };
        
        document.body.addEventListener('click', onBodyClick);
           
        // Is called when dropdown is removed.
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        
        if (option.value === selected.value) {
            return null;
        }
        
        return (
            <div 
                key={option.value} 
                className="item" 
                onClick={() => {
                    //console.log('Item Clicked');
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });    

    //
    //console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() => {
                        //console.log('Dropdown Clicked');
                        setOpen(!open);
                    }}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;