import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Italian',
        value: 'it'
    },
    {
        label: 'Basque',
        value: 'eu'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;