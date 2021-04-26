// React App Multiple Components 
class App extends React.Component {
    render() {  
        return (
            <div>
            <Hello/>
            <NumPicker/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))


///////////////////////////////////////////////////////////////
//JSX Demo
// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>My current mood is {getMood()}</p>
//             </div>
//         );
//     }
// }

// function getMood(){
//     const moods = ["happy", "angry", "mad"];
//     return moods[Math.floor(Math.random() * moods.length)]
// }

// ReactDOM.render(<JSXDemo/>, document.getElementById("root"))


///////////////////////////////////////////////////////////////
// First Component
// class Hello extends React.Component {
//     render(){
//         return (
//         <div>
//             <h1> Hello There! </h1>
//             <p>Welcome</p>
//         </div> 
//         );
//     }
// }