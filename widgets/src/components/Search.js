import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Ghosts');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);
    
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        if (debouncedTerm) {
            search();
        }

    }, [debouncedTerm]);

    // Not allowed to be directly async/await.
    /* This whole block was changed when I added the debouncedTerm state.
        It makes it so we don't have extra API calls, from monitoring results.length
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                };
            }, 500); // Search doesn't happen until 500ms after term changed
            
            // This runs FIRST, the next time useEffect is called.
            // Doesn't run at initial render.
            return () => {
                clearTimeout(timeoutId);
            };
        }


    }, [term, results.length]); 
    // Always runs at initial render.
    // Second argument can be:
    // nothing: Run after every rerender.
    // []: Run at initial render only.
    // [data]: Run after every rerender IF data has changed since last rerender.
    //         Can have multiple. Only one must change for it to be executed.
*/
    
    
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });
    // dagnerouslySetInnerHTML is not really recommended. It opens you up to XSS attacks.
    // You are really opening yourself up to risk if you're using this with an outside source.


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;