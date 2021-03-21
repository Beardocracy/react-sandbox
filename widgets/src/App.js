import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Link from './components/Link';

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
    
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                    <Dropdown 
                        label="Select a Color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
   );
}