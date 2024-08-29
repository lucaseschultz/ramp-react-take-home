import React from 'react';

type MyProps = {};
type MyState = {
    userInput: string,
    todoList: string[]
};

export default class MyToDoList extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        // Change code below this line
        this.state = {
            userInput: '',
            todoList: []
        };
        // Change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            todoList: itemsArray
        });
    }
    handleChange(e: any) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.todoList.map((task: string) => <li key={task}>{task}</li>); // Change this line
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    className="textAreaStyles"
                    placeholder='Separate Items With Commas'
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}

