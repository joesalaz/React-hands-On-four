import React from 'react';
import ReactDOM from 'react-dom';


const App = props =>{
    return(
        <div><NumberOfStudents/></div>
    )
}
class NumberOfStudents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            enrolledStudents: 0,
            waitlistedStudents: 0,
            addStudent: 0,
            listWait: 0,
            addStudent2:0,
            listWait2:0
                
    };
    
}

enroll() {
    this.setState({ enrolledStudents: this.state.enrolledStudents  +  1 });
    
}
addWaitList() {
    this.setState({waitlistedStudents: this.state.waitlistedStudents  + 1});
   
}
increaseEnroll(){
    this.setState({enrolledStudents: this.state.enrolledStudents  + parseInt(this.state.addStudent2)});
}
increaseWaitList(){
    this.setState({waitlistedStudents: this.state.waitlistedStudents  + parseInt(this.state.listWait2)});
}
    render() {
        return (
            <div className="myClass">
                <h2>Enrolled Students: {this.state.enrolledStudents }</h2>
                    <button className="btn" onClick={this.enroll.bind(this)}>Enroll 1 Student</button>
                <h4>Add Multiple Enrolled Students:</h4>
                    <input type="number" onChange={event => this.setState({addStudent2: event.target.value})} 
                value={this.state.addStudent2}/>    
                <button className="btn" onClick={this.increaseEnroll.bind(this)}>Increase Student</button>
                
                <h2>Waitlisted Students: { this.state.waitlistedStudents }</h2>
                    <button className="btn" onClick={this.addWaitList.bind(this)}>Add 1 Waitlisted Student</button>
                <h4>Add Multiple Waitlisted Students:</h4>
                <input type="number" onChange={event => this.setState({listWait2: event.target.value})} 
                value={this.state.listWait2}/><button className="btn" onClick={this.increaseWaitList.bind(this)}>Increase Student</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));