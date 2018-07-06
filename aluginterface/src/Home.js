import React, { Component } from 'react';
import './css/App.css';
import Logo from './Logo';

class Home extends Component {
    render() {
        return ( 
            <div className="App" >
                <Logo/>
                <header className="App-header">
                    <h1 className="App-title" > Alug Ja </h1> 
                </header> 
            </div>
        );
    }
}

export default Home;


// const Player = (props) => {
//   const player = Home.get(
//     parseInt(props.match.params.number, 10)
//   )
//   if (!player) {
//     return <div>Sorry, but the player was not found</div>
//   }
//   return (
//     <div>
//       <h1>{player.name} (#{player.number})</h1>
//     </div>
//     )
// }