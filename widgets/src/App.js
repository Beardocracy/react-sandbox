import React, { useState } from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/Search';
import Dropdown from './components/Dropdown';
/*
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'Because React is a front end javascript framework'
    },
    {
        title: 'Why is React?',
        content: 'That is a stupid question.'
    }
];
*/

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Purple',
        value: 'purple'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown
                    selected={selected}
                    options={options}
                    onSelectedChange={setSelected}
                /> : null
            }
        </div>
    );
}