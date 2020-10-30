import React, { Component } from 'react';
import { render } from 'react-dom';

export class SearchBar extends Component {
    static displayName = SearchBar.name;

    state = {
        loading: true
    }

    async componentDidMount() {
        //
        const url = "https://api.rawg.io/api/platforms?key=abbc22ff4a134bc88501a8419179328a";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
/*        console.log(data.results.id[77].name);
*/
    }

    render() {
        return (
            <div>
              
            </div>
        )// end of return
    }// end of render 
}
export default SearchBar;