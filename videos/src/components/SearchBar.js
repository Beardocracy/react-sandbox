import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    
    // The abbreviated way to do this can be found in pics/src/components/searchbar
    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.something);
        // Call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;