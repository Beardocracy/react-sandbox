import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // Allow open in new tab ctrl-clicking
        if (event.metaKey || event.ctrlKey) {
            return;
        };
    
        // Stop page from reloading
        event.preventDefault();
        // Change the URL
        window.history.pushState({}, '', href);
        
        // Tell dropdown components the URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}    
        </a>
    );
};

export default Link;