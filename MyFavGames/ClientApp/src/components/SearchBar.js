import React, { Component } from 'react';
import { render } from 'react-dom';

export class SearchBar extends Component {
    static displayName = SearchBar.name;

    state = {
        loading: true,
        game: []
    }

    async componentDidMount() {
        const url = "https://api.rawg.io/api/platforms?key=abbc22ff4a134bc88501a8419179328a";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ game: response.data })
        let rendRes = data.results.map(sys => {
            return (
                <div key={sys.name}>
                </div>
                )
        console.log(rendRes)
        });
        
        console.log(data);
        console.log(data.results);
        this.setState({ game: rendRes });
        console.log("state", this.state.game);
    }
       // this.setState({game: data.results[0], loading: false})

    buttonClick(e) {
        e.preventDefault();
        console.log('clicked');
    }
    render() {
        return (
            <div>
                <p>{this.state.game}</p>
                </div>
            
        )// end of return
    }// end of render 
}
export default SearchBar;