import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}