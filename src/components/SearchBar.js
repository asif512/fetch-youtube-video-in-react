import React from 'react';

class SearchBar extends React.Component {

    state = {text: ''};

    onInputChange = (e) => {
        this.setState({text: e.target.value});
    }

    onFormSubmit = (e) => {
        this.props.onFormSubmit(this.state.text);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p>Search Video</p>
                    <input
                    className="form-control" 
                    type="text"
                    value={this.state.text}
                    onChange={this.onInputChange}
                 />
                </form>
            </div>
        );
    }
}


export default SearchBar;