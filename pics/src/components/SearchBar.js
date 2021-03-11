import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // Using an arrow function prevents the whole thing breaking from a bad 'this' error
    onFormSubmit = (event) => {
        event.preventDefault(); // Keeps the page from refreshing when user hits 'enter', which is the default action for a form element.

        this.props.onSubmit(this.state.term);
    };
    
    // Using value and onChange here is called a controlled component. It re-renders every time a user hits a key in the box,
    // and uses the term part of state for the value. This way we are always storing the value the user types in state,
    // instead of using the DOM.
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;