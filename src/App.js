import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
 this.sports = ["basketball", "Judo", "MMA", "hockey", "soccer", "boxing", "baseball", "football", "wrestling", "goalball", "track"];
 this.state = {
    score: 0,
    word: this.randomChoice(this.sports),
isPlaying: false,
feedback: "Welcome, Press Start to Play Again!" 

  }
this.used = [];
this.randomChoice = this.randomChoice.bind(this)
this.handleClick= this.handleClick.bind(this)
}
randomChoice(list) {
  let i = Math.floor(Math.random() * (list.length));
  return list[i]
}
handleClick(e) {
  e.preventDefault()
let seen = (this.used.indexOf(this.state.word) >= 0)? true: false;
console.log(this.state.word, seen)
if ((seen && e.target.id == "yes") || (!seen && e.target.id == "no")){
this.setState({score: this.state.score + 1})

}
else {
  this.setState({ score: 0} )

}



if(!seen) {
  this.used.push(this.state.word)

}
else if (this.used.length == this.sports.length){
this.setState({isPlaying: false, feedback: `your score was ${this.state.score}`, score: 0 })
this.used = [];
}
this.setState({word: this.randomChoice(this.sports)})
}



render() {
if (!this.state.isPlaying) {
return (
  <div>
<header> { this.state.feedback } </header>
<button onClick={ ( ) => {this.setState({isPlaying: true})} }> Start </button>
</div>
)


}
 else {
   return (
<div>
<header> Score is {this.state.score} </header>
<p> 
  {this.state.word}
  </p>
<button onClick={this.handleClick} id="yes"> yes </button>
<button onClick={this.handleClick} id="no"> no </button>





</div>









)}}

}


export default App