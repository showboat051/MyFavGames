import React, { Component } from 'react';
import { render } from 'react-dom';

export class SearchBar extends Component {
    static displayName = SearchBar.name;

    state = {
        loading: true,
        game: null
    }

    async componentDidMount() {
        
        const url = "https://api.rawg.io/api/platforms?key=abbc22ff4a134bc88501a8419179328a";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(data.results);
        let rendRes = data.results.map(sys => {
            return `${sys.name}`;
        });
        console.log(rendRes)
    }
       // this.setState({game: data.results[0], loading: false})

    render() {
        return (
            <div>
                <rendRes />
            </div>
        )// end of return
    }// end of render 
}
export default SearchBar;